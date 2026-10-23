// Downloads the generated hero photos into src/assets/photos/{slot}.jpg (1800px wide, JPEG q82).
// Usage: node scripts/fetch-photos.mjs   (needs network access to the image host)
import sharp from 'sharp';
import fs from 'node:fs/promises';

const base = 'https://d8j0ntlcm91z4.cloudfront.net/user_39hS8NZhRzSYZ2gEwcTTZNcN8zo/';
const photos = {
  home: 'hf_20261022_215829_8591f6cc-84ea-4b4c-9209-070d296808de.png',
  doors: 'hf_20261022_083406_aa346af9-375c-4249-bc43-2ec5086609c6.png',
  fra: 'hf_20261022_083608_ecd78e86-3974-48ac-8bad-e714078c8a53.png',
  alarms: 'hf_20261022_083753_8aabc857-0c81-4f0f-a18d-c22a5df84d9d.png',
  lighting: 'hf_20261022_083608_58598cf4-04df-4360-93e5-e9b333fc8e77.png',
  aov: 'hf_20261022_083607_de988ddf-35bf-4eef-97ca-475c17383043.png',
  building: 'hf_20261022_083607_8443a40a-5153-4f1e-938a-71658f6d5e21.png',
  hmo: 'hf_20261022_083752_56e72463-ff51-49fc-83ff-34d857d72675.png',
  offices: 'hf_20261022_083754_118cfa6d-abce-44c1-9a48-0f8f93d7f001.png',
  care: 'hf_20261022_085856_84cf349a-c944-4532-8d44-cede419404bf.png',
  education: 'hf_20261022_083930_af7810da-c0b8-4b2b-9dab-5eed0e5760fc.png',
  retail: 'hf_20261022_083931_a2ca063c-e4f1-40b1-a7ee-ddafc7d17960.png',
  hospitality: 'hf_20261022_083931_f0746803-8fe6-4b0d-b344-ccc3beac820c.png',
  industrial: 'hf_20261022_083931_28b93534-dffc-45e7-9ac4-e937639d25e0.png',
  report: 'hf_20261022_084015_b322ae5e-e3db-43bf-88c9-fd6b7cc06aba.png',
};

const out = new URL('../src/assets/photos/', import.meta.url);
await fs.mkdir(out, { recursive: true });
for (const [slot, file] of Object.entries(photos)) {
  const res = await fetch(base + file);
  if (!res.ok) throw new Error(`${slot}: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await sharp(buf).resize({ width: 1800, withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toFile(new URL(`${slot}.jpg`, out).pathname);
  console.log('saved', slot);
}
