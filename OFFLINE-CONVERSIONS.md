# Offline conversions: consent → tags → upload

Covers both Certify Services sites. The same file is in both repos.

| | Certi Sprint | T&T Fire Safety |
|---|---|---|
| Leads table (Supabase `etdmtdjwcsyriiknbawa`) | `public.enquiries` | `public.tandt_leads` |
| Google Ads conversion action (account 875-000-9560) | `7849905570` “Submit lead form - Certi Sprint” | `7878079406` “T&T - Quote form submitted” |
| Transaction ID sent to Google | row `id` (also `lead_id` in `generate_lead`) | row `reference`, e.g. `TT-…` (also `lead_id` in `generate_lead`) |

## How it fits together

1. **Landing.** A visitor arrives from an ad with `?gclid=…` (or `gbraid` / `wbraid`, plus `gad_source`, `gad_campaignid` and `utm_*`). The site copies these, the landing page and the referrer into **sessionStorage** (`cs_attribution` / `tt_attribution`) on every page. No cookie is written. The data is gone when the tab closes, and a new ad click in the same tab replaces it.
2. **Cookie bar.** Everything is denied by default; the `<head>` defaults are unchanged. The visitor can Accept, Reject, or open Settings (Analytics / Advertising, both unticked). The choice is remembered for 6 months. If no choice is made, the bar shows once per session.
   - On a choice, the site sends Consent Mode `update` and pushes `consent_choice` (`accept_all` / `reject_all` / `custom`) and `consent_update` to the dataLayer.
   - `consent_banner_shown` is pushed whenever the bar appears, for the accept rate.
   - The choice and its time go into sessionStorage (`*_consent_rec`), so an enquiry can carry it.
3. **Tags.** With consent, GTM's Google Ads / GA4 / Clarity tags run as normal. Without it, Google tags send cookieless pings only.
4. **Enquiry.** The form sends the click IDs, UTMs and banner choice as hidden fields. The server adds `submitted_at` (UTC) and `user_agent`, then saves the row.
5. **Upload.** The Supabase Edge Function **`gads-upload`** runs every 15 minutes (pg_cron job `gads-upload`). It sends each new lead that has a click ID to Google Ads as an offline conversion:
   - Value is `quote_value`, or 1 if empty. Currency GBP.
   - The time is `created_at`, which is always after the click.
   - Consent is GRANTED or DENIED if the lead recorded a banner choice. Otherwise it is left unspecified.
   - It skips test rows (name, email or click ID containing "test"), `spam` rows, and clicks older than 90 days.
   - A row is sent at most once (`gads_uploaded_at is null and gads_upload_status is null`). The transaction ID also dedupes it at Google, including against the web tag.

### Why the Data Manager API, not `UploadClickConversions`
Since 15 June 2026, Google Ads API offline click imports (`ConversionUploadService.UploadClickConversions`) are refused for accounts that haven't used them in the last 180 days. 875-000-9560 never has. The uploader uses Google's replacement, the **Data Manager API** (`POST https://datamanager.googleapis.com/v1/events:ingest`).
- No developer token is needed.
- It fails a whole request on any invalid event, so the uploader sends **one lead per request**. That gives each row its own status, in place of `partial_failure`.
- Processing is asynchronous. A row is first marked `sent` with Google's `gads_request_id`. The next run checks `requestStatus:retrieve` and sets the row to `uploaded` or `error`.

## Status columns (both tables)

| `gads_upload_status` | Meaning |
|---|---|
| null | Not tried yet (eligible if it has a click ID) |
| `sent` | Google accepted the request; waiting for its processing result |
| `uploaded` | Google processed it successfully |
| `error` | Google rejected it. Reason in `gads_upload_error`. Set the status back to null to retry |
| `skipped_test` / `skipped_expired` | Not sent (test lead / click older than 90 days) |
| `uploaded_manual_csv` | Uploaded by hand from a CSV (see below) |

Every attempt, with the click ID truncated, is logged in **`public.gads_upload_log`**: Supabase → Table editor → `gads_upload_log`. Run-level failures, such as OAuth or permissions, are logged there with `source = 'run'`.

## Turning uploads on (needs Gal)

Until this is done, every run is a quiet dry run that changes nothing.

1. **Google Cloud:** in a project you control, enable the **Data Manager API** and create an OAuth client ID (Web or Desktop).
2. **Refresh token:** as a Google user with access to 875-000-9560, authorise the scope `https://www.googleapis.com/auth/datamanager` and get a refresh token, for example in the OAuth 2.0 Playground using your own client ID and secret.
3. **Supabase secrets:** Supabase → Edge Functions → Secrets:
   - `GADS_OAUTH_CLIENT_ID`, `GADS_OAUTH_CLIENT_SECRET`, `GADS_OAUTH_REFRESH_TOKEN`
   - `GADS_LOGIN_CUSTOMER_ID`, only if that user reaches the account through a manager (MCC): the manager's 10-digit ID.
4. **Validate first** (see “Run it by hand” with `mode=validate`). Google checks auth and payloads with `validateOnly`; nothing is recorded in Ads. Read the result and the log.
5. **Go live:** add the secret `GADS_UPLOAD_ENABLED` = `true`. From then on the 15-minute job uploads. To stop, delete it or set it to anything else.

**Conversion action type.**
- Google's docs say offline click imports go to an action of type **Import → from clicks** (`UPLOAD_CLICKS`); website events sent server-side go to a **Website** (`WEBPAGE`) action.
- If the two actions above are website-tag actions and validation rejects them, create one “Import from clicks” action per site. Put its ID in `GADS_ACTION_CERTISPRINT` / `GADS_ACTION_TANDT`.
- Then make it the **primary** action and set the tag action to secondary, so a lead isn't counted twice.

**GTM.** In each Google Ads conversion tag, set **Transaction ID** = Data Layer Variable `lead_id` (from `generate_lead`). A lead counted by the tag (visitor accepted) and by the upload then counts once. For the accept rate, report `consent_choice` ÷ `consent_banner_shown`.

## Run it by hand

In Supabase → SQL editor. The secret stays inside the database:

```sql
-- mode: dry_run (log payloads, change nothing) | validate (Google validateOnly) | live (only if GADS_UPLOAD_ENABLED=true)
select net.http_post(
  url := 'https://etdmtdjwcsyriiknbawa.supabase.co/functions/v1/gads-upload?mode=dry_run',
  headers := jsonb_build_object('content-type', 'application/json',
    'x-gads-secret', (select decrypted_secret from vault.decrypted_secrets where name = 'gads_cron_secret')),
  body := '{}'::jsonb, timeout_milliseconds := 60000);

-- a few seconds later: the function's reply
select status_code, content from net._http_response order by id desc limit 1;

-- recent log
select run_at, mode, source, lead_id, status, error from public.gads_upload_log order by run_at desc limit 20;
```

Which rows are waiting to upload:

```sql
select 'enquiries' t, id, created_at, gads_upload_status from public.enquiries
 where coalesce(gclid, gbraid, wbraid) is not null and gads_uploaded_at is null and gads_upload_status is null
union all
select 'tandt_leads', id, created_at, gads_upload_status from public.tandt_leads
 where coalesce(gclid, gbraid, wbraid) is not null and gads_uploaded_at is null and gads_upload_status is null
order by created_at;
```

Pause or resume the schedule: `select cron.unschedule('gads-upload');`. To resume, re-run `supabase/migrations/20261102180000_gads_upload_cron.sql` (Certi Sprint repo).

## Manual CSV (October 2026 leads)

The three Certi Sprint leads from 19, 22 and 23 Oct 2026 are in `certisprint-offline-conversions-oct-2026.csv`. It is delivered separately and not committed, because it holds click IDs. Upload it in Google Ads → Goals → Conversions → Uploads. Clicks can be imported up to 90 days after the click.

If you upload the CSV, mark those rows **straight away**, before turning on live uploads, so the job doesn't send them again. Google would also drop the repeat by click + time, but mark them anyway:

```sql
update public.enquiries set gads_upload_status = 'uploaded_manual_csv', gads_uploaded_at = now()
 where id in ('78e898fb-168c-47a7-888a-c0eca834ca95', '0ec9976d-63ee-45b8-82bd-fbb89aa84065', '88d4a64f-bf76-4b3f-a0c8-8fdff030df85');
```

## Files

- Certi Sprint repo:
  - capture: `src/scripts/tracking.ts`, `src/scripts/forms.ts`, `src/components/EnquiryForm.astro`, `api/enquiry.js`
  - bar: `src/components/CookieBanner.astro`
  - uploader: `supabase/functions/gads-upload/index.ts`
  - migrations: `supabase/migrations/20261102*.sql`
- T&T repo:
  - capture: `src/scripts/site.ts`, `src/components/QuoteForm.astro`, `src/pages/api/quote.ts`
  - bar: `src/components/ConsentBanner.astro`
  - migration: `supabase/migrations/20261102170000_gads_offline_conversions.sql`
  - the uploader lives in the Certi Sprint repo, because both sites share the Supabase project.
