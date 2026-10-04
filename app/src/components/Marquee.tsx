type Props = {
  items: string[]
  className?: string
  speed?: number
  separator?: string
}

/** Infinite CSS marquee strip. */
export default function Marquee({ items, className, speed = 26, separator = '✳' }: Props) {
  const row = items.map((s) => `${s}  ${separator}  `).join('')
  return (
    <div className={`marquee overflow-hidden whitespace-nowrap ${className ?? ''}`} aria-hidden>
      <div className="marquee-track inline-flex" style={{ animationDuration: `${speed}s` }}>
        <span className="pr-8">{row}{row}</span>
        <span className="pr-8">{row}{row}</span>
      </div>
    </div>
  )
}
