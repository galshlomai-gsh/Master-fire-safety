-- T&T Fire Safety website quote requests. Same Supabase project as Certi Sprint (same client,
-- one bill) but a separate table. Written only by the T&T site's server function (/api/quote)
-- with the secret key. RLS on with NO policies: the public keys can neither read nor write it.
-- Applied to project etdmtdjwcsyriiknbawa ("Certi Sprint") on 26 Oct 2026.

create table if not exists public.tandt_leads (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),
  reference       text not null unique check (char_length(reference) <= 30),

  -- Contact & job (as asked on the quote form)
  name            text not null check (char_length(name) between 1 and 100),
  phone           text not null check (char_length(phone) <= 30),
  email           text not null check (char_length(email) <= 150),
  postcode        text not null check (char_length(postcode) <= 10),
  property_type   text not null check (char_length(property_type) <= 60),
  service         text not null check (char_length(service) <= 80),
  details         text check (char_length(details) <= 2000),

  -- Attribution
  page_path       text check (char_length(page_path) <= 200),
  form_source     text check (char_length(form_source) <= 80),
  landing_page    text check (char_length(landing_page) <= 200),
  referrer        text check (char_length(referrer) <= 300),
  utm_source      text check (char_length(utm_source) <= 200),
  utm_medium      text check (char_length(utm_medium) <= 200),
  utm_campaign    text check (char_length(utm_campaign) <= 200),
  utm_term        text check (char_length(utm_term) <= 200),
  utm_content     text check (char_length(utm_content) <= 200),
  gclid           text check (char_length(gclid) <= 200),
  gbraid          text check (char_length(gbraid) <= 200),
  wbraid          text check (char_length(wbraid) <= 200),

  -- Lead management (update by hand or from a CRM)
  status          text not null default 'new'
                  check (status in ('new', 'contacted', 'quoted', 'booked', 'completed', 'lost', 'spam')),
  quote_value     numeric(10, 2),
  notes           text,
  email_sent      boolean not null default false
);

comment on table public.tandt_leads is 'T&T Fire Safety website quote requests (separate from Certi Sprint enquiries). status/quote_value support Google Ads offline conversion imports.';

create index if not exists tandt_leads_created_at_idx on public.tandt_leads (created_at desc);
create index if not exists tandt_leads_status_idx on public.tandt_leads (status);
create index if not exists tandt_leads_gclid_idx on public.tandt_leads (gclid) where gclid is not null;

alter table public.tandt_leads enable row level security;
-- Intentionally no policies: only the server-side secret key can access this table.
