import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/** Dark navy inner-page hero: grayscale client photo, giant caps title. */
export default function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string
  subtitle: string
  image: string
}) {
  return (
    <section className="relative flex min-h-[68svh] items-end overflow-hidden bg-deep pb-12 pt-40 text-white">
      <img
        src={`${import.meta.env.BASE_URL}assets/${image}`}
        alt=""
        className="absolute inset-0 h-full w-full object-cover grayscale opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/60 to-deep/30" />

      <div className="wrap relative">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/60"
        >
          <Link to="/" className="transition-colors hover:text-white">Home</Link>
          <span className="mx-2 text-white/30">/</span>
          {title}
        </motion.p>
        <h1 className="mt-5 overflow-hidden">
          <motion.span
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[13vw] font-black uppercase leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl"
          >
            {title}
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-xl text-base font-light text-white/75 sm:text-lg"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}
