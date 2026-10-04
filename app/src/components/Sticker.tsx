import { motion } from 'framer-motion'
import Mark from './Mark'

/** Teal die-cut sticker: teal disc, ring caps text, drawn microscope center. */
export default function Sticker({ className, spin = true }: { className?: string; spin?: boolean }) {
  return (
    <div className={`relative ${className ?? ''}`}>
      <motion.svg
        viewBox="0 0 200 200"
        animate={{ rotate: spin ? 360 : 0 }}
        transition={spin ? { repeat: Infinity, duration: 8, ease: 'linear' } : { duration: 0 }}
        className="h-full w-full drop-shadow-[0_10px_24px_rgba(6,20,18,0.35)]"
      >
        <circle cx="100" cy="100" r="97" fill="#0C8873" stroke="#ffffff" strokeWidth="4" />
        <defs>
          <path id="sticker-circ" d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0" />
        </defs>
        <text fill="#0D1B26" fontSize="16.5" fontWeight="800" letterSpacing="3.5">
          <textPath href="#sticker-circ">PRX • RESEARCH • ADVANCING HEALTHCARE •</textPath>
        </text>
      </motion.svg>
      <Mark className="absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 text-[#0D1B26]" />
    </div>
  )
}
