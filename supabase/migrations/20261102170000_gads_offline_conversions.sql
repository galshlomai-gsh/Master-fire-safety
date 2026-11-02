-- Google Ads offline conversions (Nov 2026). Shared by both sites: applies to
-- public.enquiries (Certi Sprint) and public.tandt_leads (T&T) in project etdmtdjwcsyriiknbawa.
-- Additive only: new nullable columns + an upload log table. No data is changed.

do $$
declare t text;
begin
  foreach t in array array['enquiries', 'tandt_leads'] loop
    -- Captured at submit (no cookies: click IDs travel in sessionStorage, see the site README)
    execute format('alter table public.%I add column if not exists submitted_at timestamptz', t);
    execute format('alter table public.%I add column if not exists user_agent text check (char_length(user_agent) <= 500)', t);
    execute format('alter table public.%I add column if not exists gad_source text check (char_length(gad_source) <= 20)', t);
    execute format('alter table public.%I add column if not exists gad_campaignid text check (char_length(gad_campaignid) <= 40)', t);
    -- The visitor''s cookie-banner choice at the time of the enquiry (null = no choice made)
    execute format('alter table public.%I add column if not exists consent_ads text check (consent_ads in (''granted'', ''denied''))', t);
    execute format('alter table public.%I add column if not exists consent_analytics text check (consent_analytics in (''granted'', ''denied''))', t);
    execute format('alter table public.%I add column if not exists consent_at timestamptz', t);
    -- Upload bookkeeping (written only by the gads-upload Edge Function)
    execute format('alter table public.%I add column if not exists gads_uploaded_at timestamptz', t);
    execute format('alter table public.%I add column if not exists gads_upload_status text', t);
    execute format('alter table public.%I add column if not exists gads_upload_error text', t);
    execute format('alter table public.%I add column if not exists gads_request_id text', t);
    execute format('create index if not exists %I on public.%I (created_at) where gads_uploaded_at is null and gads_upload_status is null', t || '_gads_pending_idx', t);
  end loop;
end $$;

comment on column public.enquiries.gads_upload_status is 'null = not tried yet; dry_run; sent (accepted, awaiting Google diagnostics); uploaded; error; skipped_test; skipped_expired. Set back to null to retry a row.';
comment on column public.tandt_leads.gads_upload_status is 'null = not tried yet; dry_run; sent (accepted, awaiting Google diagnostics); uploaded; error; skipped_test; skipped_expired. Set back to null to retry a row.';

-- One row per upload attempt, readable in the Supabase table editor. Click IDs are truncated.
create table if not exists public.gads_upload_log (
  id          bigint generated always as identity primary key,
  run_at      timestamptz not null default now(),
  mode        text not null check (mode in ('dry_run', 'validate', 'live', 'diagnostics')),
  source      text not null,
  lead_id     uuid,
  status      text not null,
  request_id  text,
  error       text,
  payload     jsonb
);
create index if not exists gads_upload_log_run_at_idx on public.gads_upload_log (run_at desc);
alter table public.gads_upload_log enable row level security;
-- Intentionally no policies: only the server-side secret key can read or write it.
comment on table public.gads_upload_log is 'Log of Google Ads offline conversion uploads (gads-upload Edge Function). Errors land here.';
