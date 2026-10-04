import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

/** RDA-style closing CTA: light display paragraph + pill buttons. */
export default function CTABand() {
  return (
    <section className="wrap py-24 sm:py-32">
      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink/50">Get Started</p>
        <p className="mt-6 max-w-2xl text-2xl font-light leading-snug text-ink sm:text-3xl">
          Embarking on your journey to better health starts with a single step.{' '}
          <span className="text-brand">Schedule your appointment now.</span>
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link to="/contact" className="btn-accent !rounded-full uppercase tracking-[0.12em]">
            Make an Appointment
          </Link>
          <a href="tel:+19727774428" className="btn-outline !rounded-full uppercase tracking-[0.12em]">
            <span className="roll"><span>Call 972-777-4428</span><span aria-hidden>Call 972-777-4428</span></span>
          </a>
        </div>
      </Reveal>
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-16 h-px origin-left bg-line"
      />
    </section>
  )
}
