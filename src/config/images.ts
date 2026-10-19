/**
 * Image registry. Philip holds no licences for the photos in his design mock (Oct 2026),
 * so every slot currently renders an original line illustration (PlanArt) instead.
 * To add a real or properly licensed photo: put the file in src/assets/img/, import it here,
 * set `src`, and give it a real `alt`. No photos of Philip or his colleagues.
 */
import type { ImageMetadata } from 'astro';
import type { Art } from '../components/PlanArt.astro';

export type SiteImage = {
  src: ImageMetadata | null; // null → render the PlanArt illustration
  art: Art;
  alt: string;
  position?: string;
  wanted: string; // the real photo Philip has agreed to supply
};

export type ImageKey = 'fra' | 'doors' | 'alarms' | 'lighting' | 'aov' | 'building';

export const images: Record<ImageKey, SiteImage> = {
  fra: { src: null, art: 'fra', alt: '', wanted: 'Communal corridor or stair with fire doors and signage' },
  doors: { src: null, art: 'doors', alt: '', wanted: 'Pair of communal fire doors, closers and signage visible' },
  alarms: { src: null, art: 'alarms', alt: '', wanted: 'Fire alarm control panel on a wall' },
  lighting: { src: null, art: 'lighting', alt: '', wanted: 'Escape corridor with emergency luminaires and exit sign' },
  aov: { src: null, art: 'aov', alt: '', wanted: 'AOV / smoke vent at the head of a stair' },
  building: { src: null, art: 'building', alt: '', wanted: 'Exterior of a purpose-built block of flats (client permission)' },
};

/** Map older content keys (from the design phase) to the current slots. */
export const legacyImageKey: Record<string, ImageKey> = {
  alarmPanel: 'alarms',
  fireDoor: 'doors',
  corridor: 'lighting',
  smokeDetector: 'alarms',
  blocksOfFlats: 'building',
};
