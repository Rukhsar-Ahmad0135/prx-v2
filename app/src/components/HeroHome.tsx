import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'

/** 100svh B&W film hero; white blinds sweep down over it as you scroll away. */
export default function HeroHome({
  eyebrow,
  display,
  subtitle,
}: {
  eyebrow: string
  display: string
  subtitle: string
}) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const copyY = useTransform(scrollYProgress, [0, 1], ['0%', '45%'])
  const copyOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-[100svh] overflow-hidden bg-deep">
      <motion.div style={{ y: mediaY }} className="absolute inset-0">
        <video
          src={`${import.meta.env.BASE_URL}assets/hero.mp4`}
          poster={`${import.meta.env.BASE_URL}assets/herobg.jpg`}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover grayscale"
          data-testid="hero-video"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/25 to-deep/45" />
      </motion.div>

      <motion.div style={{ y: copyY, opacity: copyOpacity }} className="wrap absolute inset-x-0 bottom-14">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/70"
        >
          {eyebrow}
        </motion.p>
        <h1 className="mt-4">
          <MaskedLine text={display} delay={0.25} className="block text-5xl font-light tracking-tight text-white sm:text-7xl lg:text-8xl" />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-lg font-light text-white/80 sm:text-2xl"
        >
          {subtitle}
        </motion.p>
      </motion.div>

      <motion.p
        style={{ opacity: copyOpacity }}
        className="absolute bottom-14 right-6 hidden text-[11px] font-bold uppercase tracking-[0.3em] text-white/60 sm:block lg:right-10"
      >
        Scroll ↓
      </motion.p>

      {/* blinds */}
      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col" data-testid="hero-blinds" aria-hidden>
        {Array.from({ length: 8 }).map((_, i) => (
          <Blind key={i} progress={scrollYProgress} index={i} />
        ))}
      </div>
    </section>
  )
}

function Blind({ progress, index }: { progress: MotionValue<number>; index: number }) {
  const start = 0.18 + index * 0.055
  const scaleY = useTransform(progress, [start, Math.min(start + 0.32, 1)], [0, 1])
  return <motion.div style={{ scaleY, originY: 0 }} className="flex-1 bg-paper" />
}

function MaskedLine({
  text,
  delay,
  className,
}: {
  text: string
  delay: number
  className?: string
}) {
  return (
    <span className={`overflow-hidden ${className ?? ''}`}>
      <motion.span
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        {text}
      </motion.span>
    </span>
  )
}
