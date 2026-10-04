import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useSpring } from 'framer-motion'
import { useScramble } from '../lib/useScramble'
import Sticker from './Sticker'

type Props = {
  rows: string[]
  linkTo?: string
  size?: 'display' | 'list'
}

/** RDA-style giant list rows: deep-navy wipe fill on hover, text scramble,
 *  and a spinning teal sticker that follows the cursor. */
export default function ServiceRows({ rows, linkTo = '/sponsors', size = 'display' }: Props) {
  const [hover, setHover] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const mx = useSpring(0, { stiffness: 240, damping: 26, mass: 0.6 })
  const my = useSpring(0, { stiffness: 240, damping: 26, mass: 0.6 })

  const move = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    mx.set(e.clientX - r.left)
    my.set(e.clientY - r.top)
  }

  const big = size === 'display'

  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={() => setHover(null)} className="relative border-t border-line">
      {rows.map((row, i) => (
        <ScrambleRow
          key={row}
          index={String(i + 1).padStart(2, '0')}
          text={row}
          to={linkTo}
          big={big}
          active={hover === i}
          onEnter={() => setHover(i)}
        />
      ))}
      <motion.div
        style={{ x: mx, y: my }}
        className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block"
        aria-hidden
      >
        <motion.div
          animate={{ opacity: hover === null ? 0 : 1, scale: hover === null ? 0.6 : 1 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="-translate-x-1/2 -translate-y-1/2"
        >
          <Sticker className="h-40 w-40 lg:h-48 lg:w-48" spin={hover !== null} />
        </motion.div>
      </motion.div>
    </div>
  )
}

function ScrambleRow({
  index,
  text,
  to,
  big,
  active,
  onEnter,
}: {
  index: string
  text: string
  to: string
  big: boolean
  active: boolean
  onEnter: () => void
}) {
  const label = useScramble(text, active)
  return (
    <Link
      to={to}
      onMouseEnter={onEnter}
      className="group relative block overflow-hidden border-b border-line"
    >
      <span className="row-fill bg-deep" aria-hidden />
      <span
        className={`relative z-10 flex items-baseline gap-5 py-7 text-ink transition-colors duration-300 group-hover:text-white lg:py-9 ${
          big ? 'px-1 text-3xl font-medium sm:text-5xl lg:text-6xl' : 'px-1 text-2xl font-medium sm:text-3xl lg:text-4xl'
        }`}
      >
        <span className="text-xs font-bold tracking-[0.2em] text-ink/40 transition-colors duration-300 group-hover:text-white/50">
          {index}
        </span>
        {label}
      </span>
    </Link>
  )
}
