/**
 * Image registry. Every photo on the site comes from here so swapping in real photography
 * is a one-line change per image. Anything with needsRealPhoto: true is a placeholder.
 */
import type { ImageMetadata } from 'astro';
import corridor from '../assets/img/corridor.jpg';
import fireDoor from '../assets/img/fire-door.jpg';
import alarmPanel from '../assets/img/alarm-panel.jpg';
import smokeDetector from '../assets/img/smoke-detector.jpg';

export type SiteImage = {
  src: ImageMetadata | null; // null renders a labelled placeholder panel
  alt: string;
  position?: string; // CSS background/object position
  needsRealPhoto: boolean;
  note: string;
};

export const images = {
  corridor: {
    src: corridor,
    alt: 'Protected escape corridor with fire exit signage and extinguishers',
    position: '52% 50%',
    needsRealPhoto: true,
    note: 'From Philip’s design mock. Unbranded, licence unknown: confirm or replace with a real job photo.',
  },
  fireDoor: {
    src: fireDoor,
    alt: 'Pair of fire exit doors with push-bar signage',
    position: '50% 44%',
    needsRealPhoto: true,
    note: 'From Philip’s design mock. Unbranded, licence unknown: confirm or replace.',
  },
  alarmPanel: {
    src: alarmPanel,
    alt: 'Assessor completing a fire risk assessment checklist beside a fire alarm panel and extinguishers',
    position: '40% 50%',
    needsRealPhoto: true,
    note: 'Cropped from the design mock to remove the T&T-branded hi-vis vest (the team does not wear branded clothing). Likely AI-generated; replace with a real photo.',
  },
  smokeDetector: {
    src: smokeDetector,
    alt: '',
    position: '22% 74%',
    needsRealPhoto: false,
    note: 'Decorative background for the red quote section (as designed). Licence to confirm.',
  },
  blocksOfFlats: {
    src: null,
    alt: 'Purpose-built block of flats',
    needsRealPhoto: true,
    note: 'The design photo carries a Dreamstime watermark (unlicensed comp), so it cannot be used. Needs a licensed or real photo.',
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;
