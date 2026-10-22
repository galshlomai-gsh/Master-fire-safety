/**
 * Explanatory line icons (Lucide, ISC licence: https://lucide.dev/license), inlined at build time.
 * `iconFor(title)` picks an icon for a content item by its heading, so grids and strips across
 * services, sectors and the about page get an icon without each data file naming one.
 */
import * as L from 'lucide-static';

const set = {
  flame: L.Flame,
  door: L.DoorClosed,
  doorOpen: L.DoorOpen,
  alarm: L.BellRing,
  siren: L.Siren,
  light: L.Lightbulb,
  lamp: L.LampCeiling,
  vent: L.AirVent,
  wind: L.Wind,
  extinguisher: L.FireExtinguisher,
  clipboard: L.ClipboardCheck,
  clipList: L.ClipboardList,
  badge: L.BadgeCheck,
  award: L.Award,
  list: L.ListOrdered,
  checks: L.ListChecks,
  buildings: L.Building2,
  building: L.Building,
  wrench: L.Wrench,
  hammer: L.Hammer,
  chat: L.MessagesSquare,
  clock: L.Clock,
  calendar: L.CalendarCheck,
  shield: L.ShieldCheck,
  report: L.FileText,
  fileCheck: L.FileCheck,
  fileSearch: L.FileSearch,
  users: L.Users,
  userCheck: L.UserCheck,
  access: L.Accessibility,
  house: L.House,
  hotel: L.Hotel,
  store: L.Store,
  school: L.School,
  hospital: L.Hospital,
  warehouse: L.Warehouse,
  briefcase: L.Briefcase,
  search: L.Search,
  eye: L.Eye,
  phone: L.PhoneCall,
  pin: L.MapPin,
  route: L.Route,
  exit: L.LogOut,
  zap: L.Zap,
  plug: L.Plug,
  battery: L.BatteryCharging,
  power: L.Power,
  key: L.KeyRound,
  lock: L.Lock,
  utensils: L.Utensils,
  chef: L.ChefHat,
  bed: L.Bed,
  moon: L.Moon,
  layers: L.Layers,
  ruler: L.Ruler,
  alert: L.TriangleAlert,
  signpost: L.Signpost,
  book: L.BookOpen,
  scale: L.Scale,
  handshake: L.Handshake,
  pound: L.PoundSterling,
  gauge: L.Gauge,
  refresh: L.RefreshCw,
  settings: L.Settings,
  activity: L.Activity,
  archive: L.Archive,
  boxes: L.Boxes,
  flask: L.FlaskConical,
  fuel: L.Fuel,
  server: L.Server,
  network: L.Network,
  heart: L.HeartHandshake,
  pill: L.Pill,
  graduation: L.GraduationCap,
  glasses: L.Glasses,
  timer: L.Timer,
  ambulance: L.Ambulance,
  frame: L.Frame,
  scan: L.Scan,
  truck: L.Truck,
} as const;

export type IconName = keyof typeof set;

/** Lucide SVG string → compact inline SVG with our stroke weight. */
export function iconSvg(name: IconName, strokeWidth = 1.6): string {
  return set[name]
    .replace(/\s*\n\s*/g, ' ')
    .replace(/ width="24" height="24"/, '')
    .replace(/class="[^"]*"/, 'class="ico" aria-hidden="true" focusable="false"')
    .replace(/stroke-width="2"/, `stroke-width="${strokeWidth}"`);
}

/** Ordered rules: first match wins. Matched against an item heading, case-insensitive. */
const rules: [RegExp, IconName][] = [
  // trust points and ways of working
  [/qualified|assessor|competence/, 'badge'],
  [/lockdown/, 'lock'],
  [/large compartments/, 'route'],
  [/identified defects/, 'alert'],
  [/prioriti[sz]ed|recommended actions/, 'list'],
  [/single sites|portfolio|multi-tenant/, 'buildings'],
  [/guidance|next steps/, 'signpost'],
  [/remedial|replacements|upgrade|alterations|installation|new installations/, 'wrench'],
  [/prompt|scheduling|response$/, 'calendar'],
  [/scope and price|price/, 'pound'],
  [/non-destructive|honest/, 'search'],
  [/clear reports|report|findings|service findings/, 'report'],
  [/records?\b|record$/, 'archive'],
  // fire doors
  [/self-closing|closer/, 'refresh'],
  [/intumescent|smoke seals|gaps|alignment/, 'scan'],
  [/hinges|ironmongery/, 'key'],
  [/glazing|apertures|signage/, 'frame'],
  [/door leaf|door condition|flat entrance|bedroom doors|communal fire doors|fire doors/, 'door'],
  [/compartment/, 'layers'],
  // alarms
  [/manual call|manual controls/, 'alarm'],
  [/detection|detectors?|detection devices/, 'siren'],
  [/alarm devices|activation/, 'alarm'],
  [/control (and|&) indicating|control equipment|reset|faults/, 'gauge'],
  [/system interfaces|interlinked/, 'network'],
  [/power supplies|supply failure/, 'power'],
  [/battery|charging|lithium/, 'battery'],
  [/functional testing|routine checks|inspections/, 'clipboard'],
  // lighting
  [/exit signs/, 'exit'],
  [/luminaires|escape-route lighting|emergency lighting/, 'lamp'],
  // aov
  [/automatic opening vents|actuators/, 'vent'],
  // premises risks
  [/means of escape|escape routes|travel distance|inner rooms|large compartments/, 'route'],
  [/evacuat|peeps|dependency|help to evacuate/, 'access'],
  [/people at risk|members of the public|large occupancy|occupancy/, 'users'],
  [/sleeping|night/, 'bed'],
  [/kitchen|cooking/, 'chef'],
  [/lpg|flammable|fuel/, 'fuel'],
  [/oxygen|medical/, 'pill'],
  [/labs|workshops/, 'flask'],
  [/server|electrical/, 'server'],
  [/hot work/, 'flame'],
  [/arson/, 'alert'],
  [/dust/, 'wind'],
  [/storage|stock|high-rack|deliveries|blocked exits/, 'boxes'],
  [/lone working|out-of-hours|late opening/, 'moon'],
  [/staff|training/, 'graduation'],
  [/send|pupils/, 'school'],
  [/lockdown/, 'lock'],
  [/licence|landlord and tenant|tenant/, 'scale'],
  [/shared units|flats above|rooms above/, 'building'],
  [/shared kitchens/, 'chef'],
  [/fire hazards/, 'flame'],
  [/fire-safety management|management/, 'clipList'],
  [/fire detection/, 'siren'],
  [/lettings/, 'key'],
  [/seasonal/, 'boxes'],
];

export function iconFor(title: string): IconName {
  const t = title.toLowerCase();
  for (const [re, name] of rules) if (re.test(t)) return name;
  return 'shield';
}

/** Icons for the five services and eight sectors (link lists, tiles and cards). */
export const serviceIcon: Record<string, IconName> = {
  fra: 'clipboard',
  doors: 'door',
  alarms: 'alarm',
  lighting: 'lamp',
  aov: 'vent',
};

export const sectorIcon: Record<string, IconName> = {
  'blocks-of-flats': 'buildings',
  'landlords-hmos': 'house',
  offices: 'briefcase',
  'healthcare-care-homes': 'hospital',
  education: 'school',
  retail: 'store',
  hospitality: 'hotel',
  'industrial-warehousing': 'warehouse',
};

export function credentialIcon(label: string): IconName {
  const t = label.toLowerCase();
  if (/ifsm|member/.test(t)) return 'badge';
  if (/bs 8674|competence/.test(t)) return 'award';
  if (/indemnity/.test(t)) return 'shield';
  if (/liability/.test(t)) return 'shield';
  return 'shield';
}
