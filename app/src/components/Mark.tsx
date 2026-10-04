/** Drawn die-cut microscope mark (sticker style), colored via currentColor. */
export default function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="currentColor" className={className} aria-hidden>
      {/* eyepiece */}
      <rect x="66" y="6" width="16" height="12" rx="3" />
      {/* angled tube */}
      <path d="M64 16 88 42 76 54 52 28 Z" />
      {/* arm */}
      <path d="M34 98c0-22 10-36 28-45l9 10c-15 8-23 18-23 35z" />
      {/* stage */}
      <rect x="30" y="66" width="34" height="7" rx="3" />
      {/* sample dish */}
      <circle cx="76" cy="66" r="6" />
      {/* base */}
      <rect x="24" y="102" width="58" height="10" rx="5" />
    </svg>
  )
}
