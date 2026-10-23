/**
 * Image registry. Each slot shows a photo when `src/assets/photos/{slot}.jpg` (or .png/.webp)
 * exists, and falls back to the original line illustration (PlanArt) when it does not.
 * Photos are realistic, people-free UK scenes (Oct 2026: AI-generated stand-ins until Philip's
 * own site photos arrive). No photos of Philip or his colleagues.
 */
import type { ImageMetadata } from 'astro';
import type { Art } from '../components/PlanArt.astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp}', { eager: true });
const photo = (slot: string): ImageMetadata | null => {
  const hit = Object.entries(files).find(([p]) => p.split('/').pop()!.replace(/\.\w+$/, '') === slot);
  return hit ? hit[1].default : null;
};

export type SiteImage = {
  src: ImageMetadata | null; // null → render the PlanArt illustration
  art: Art;
  alt: string;
  position?: string;
};

const slots = {
  home: { art: 'fra', alt: 'Fire risk assessor checking a communal fire door and its self-closer in a London block of flats' },
  fra: { art: 'fra', alt: 'Communal stairwell in a London mansion block with a fire door, emergency light and exit sign' },
  doors: { art: 'doors', alt: 'Communal corridor in a block of flats with a self-closing fire door and “Fire door keep shut” sign' },
  alarms: { art: 'alarms', alt: 'Fire alarm control panel and manual call point in the entrance lobby of a block of flats' },
  lighting: { art: 'lighting', alt: 'Escape stair lit by an emergency light, with an illuminated fire exit sign' },
  aov: { art: 'aov', alt: 'Automatic opening smoke vent at the head of a common stair', position: '50% 30%' },
  building: { art: 'building', alt: 'Purpose-built red-brick block of flats in north London' },
  hmo: { art: 'doors', alt: 'Victorian terraced house in London converted into flats' },
  offices: { art: 'alarms', alt: 'Open-plan office with fire exit sign, call point and extinguishers' },
  care: { art: 'lighting', alt: 'Care home corridor with handrails and fire doors on hold-open devices' },
  education: { art: 'alarms', alt: 'School corridor with fire doors, exit sign and alarm call point' },
  retail: { art: 'fra', alt: 'Shop stockroom with a clear route to a fire exit door' },
  hospitality: { art: 'doors', alt: 'Hotel bedroom corridor with fire doors and fire exit sign' },
  industrial: { art: 'fra', alt: 'Warehouse racking with a marked walkway to a fire exit' },
  report: { art: 'fra', alt: 'Printed fire risk assessment report with prioritised actions' },
} as const satisfies Record<string, { art: Art; alt: string; position?: string }>;

export type ImageKey = keyof typeof slots;

export const images = Object.fromEntries(
  Object.entries(slots).map(([k, v]) => [k, { ...v, src: photo(k) }]),
) as Record<ImageKey, SiteImage>;

/** Map older content keys (from the design phase) to the current slots. */
export const legacyImageKey: Record<string, ImageKey> = {
  alarmPanel: 'alarms',
  fireDoor: 'doors',
  corridor: 'lighting',
  smokeDetector: 'alarms',
  blocksOfFlats: 'building',
};

/** Hero photo for each sector page. */
export const sectorImage: Record<string, ImageKey> = {
  'blocks-of-flats': 'building',
  'landlords-hmos': 'hmo',
  offices: 'offices',
  'healthcare-care-homes': 'care',
  education: 'education',
  retail: 'retail',
  hospitality: 'hospitality',
  'industrial-warehousing': 'industrial',
};
