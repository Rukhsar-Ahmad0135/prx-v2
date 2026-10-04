import type { ReactElement, SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
}

export const ArrowRight = (p: P) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)

export const CheckCircle = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="m8.5 12.2 2.4 2.4 4.8-5" /></svg>
)

export const MapPin = (p: P) => (
  <svg {...base} {...p}><path d="M12 21s-6.5-5.2-6.5-10a6.5 6.5 0 1 1 13 0c0 4.8-6.5 10-6.5 10Z" /><circle cx="12" cy="11" r="2.4" /></svg>
)

export const Mail = (p: P) => (
  <svg {...base} {...p}><rect x="3.5" y="5.5" width="17" height="13" rx="2.5" /><path d="m4.5 7.5 7.5 5.5 7.5-5.5" /></svg>
)

export const Phone = (p: P) => (
  <svg {...base} {...p}><path d="M5.5 4h3l1.7 4-2 1.6a12.5 12.5 0 0 0 5.7 5.7l1.6-2 4 1.7v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 6.2 2 2 0 0 1 5.5 4Z" /></svg>
)

export const Clock = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>
)

export const Search = (p: P) => (
  <svg {...base} {...p}><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>
)

export const Stethoscope = (p: P) => (
  <svg {...base} {...p}><path d="M5 3.5v5a4.5 4.5 0 0 0 9 0v-5" /><path d="M9.5 13v3.5a4.5 4.5 0 0 0 9 0V14" /><circle cx="18.5" cy="11.5" r="2.4" /></svg>
)

export const Clipboard = (p: P) => (
  <svg {...base} {...p}><rect x="5" y="4.5" width="14" height="16" rx="2.5" /><path d="M9 4.5a3 3 0 0 1 6 0" /><path d="M9 11h6M9 15h4" /></svg>
)

export const Users = (p: P) => (
  <svg {...base} {...p}><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19.5c.6-3.2 2.9-5 5.5-5s4.9 1.8 5.5 5" /><path d="M16 5.5a3 3 0 0 1 0 5.6M17.5 14.8c2 .6 3.3 2.2 3.7 4.7" /></svg>
)

export const UserCheck = (p: P) => (
  <svg {...base} {...p}><circle cx="10" cy="8" r="3.4" /><path d="M4.5 19.5c.6-3.4 3-5.2 5.5-5.2 1.2 0 2.4.4 3.4 1.1" /><path d="m14.5 17.5 2 2 3.5-4" /></svg>
)

export const Flask = (p: P) => (
  <svg {...base} {...p}><path d="M10 3.5h4M10.5 3.5v6l-4.7 8a2.4 2.4 0 0 0 2 3.5h8.4a2.4 2.4 0 0 0 2-3.5l-4.7-8v-6" /><path d="M8 15.5h8" /></svg>
)

export const Award = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="9" r="5.5" /><path d="m8.8 13.5-1.6 7 4.8-2.6 4.8 2.6-1.6-7" /></svg>
)

export const Database = (p: P) => (
  <svg {...base} {...p}><ellipse cx="12" cy="6" rx="7.5" ry="3" /><path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" /><path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" /></svg>
)

export const HeartHands = (p: P) => (
  <svg {...base} {...p}><path d="M12 8.5s-1.2-2.3-3.1-2.3A2.9 2.9 0 0 0 6 9c0 2.6 3.3 4.8 6 7 2.7-2.2 6-4.4 6-7a2.9 2.9 0 0 0-2.9-2.8C13.2 6.2 12 8.5 12 8.5Z" /><path d="M4 20h16" /></svg>
)

export const Building = (p: P) => (
  <svg {...base} {...p}><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 8h2m2 0h2M9 12h2m2 0h2M9 16h2m2 0h2M10 21v-3h4v3" /></svg>
)

export const ChevronDown = (p: P) => (
  <svg {...base} {...p}><path d="m6 9.5 6 6 6-6" /></svg>
)

export const Menu = (p: P) => (
  <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
)

export const Close = (p: P) => (
  <svg {...base} {...p}><path d="m6 6 12 12M18 6 6 18" /></svg>
)

export const Send = (p: P) => (
  <svg {...base} {...p}><path d="M21 3 10.5 13.5M21 3l-6.8 18-3.7-7.5L3 9.8 21 3Z" /></svg>
)

export const HelpCircle = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M9.5 9.3A2.6 2.6 0 0 1 12 7.5c1.4 0 2.5 1 2.5 2.2 0 1.7-2.5 2-2.5 3.8" /><circle cx="12" cy="17" r="0.4" fill="currentColor" /></svg>
)

export const iconMap: Record<string, (p: P) => ReactElement> = {
  patients: Users,
  staff: UserCheck,
  trials: Flask,
  experience: Award,
  search: Search,
  stethoscope: Stethoscope,
  clipboard: Clipboard,
  data: Database,
  community: HeartHands,
  quality: Building,
}
