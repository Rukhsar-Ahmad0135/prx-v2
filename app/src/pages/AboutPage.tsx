import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import WordFill from '../components/WordFill'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import Stats from '../components/Stats'
import CTABand from '../components/CTABand'
import { expectSteps, services } from '../data/content'

const ease = [0.22, 1, 0.36, 1] as const

export default function AboutPage() {
  return (
    <div className="bg-paper">
      <PageHero
        title="About Us"
        subtitle="Learn about PRX Research — a leading clinical research facility in North Texas"
        image="about.jpg"
      />

      {/* ── Manifesto word-fill ──────────────────────────── */}
      <section className="wrap py-28 sm:py-36">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink/50">( Who We Are )</p>
        </Reveal>
        <WordFill
          text="We leverage cutting-edge research technologies and practices to stay at the forefront of medicine. PRX is committed to accelerating the translation of biomedical discoveries into breakthrough healthcare solutions — and our team is here to collaborate on your breakthrough, turning research into reality."
          className="mt-8 max-w-6xl text-3xl font-light leading-[1.18] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
        />
      </section>

      {/* ── Institution rows ─────────────────────────────── */}
      <section className="wrap pb-28 sm:pb-36">
        <div className="border-t border-line">
          {services.map((text, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="group grid gap-3 border-b border-line py-9 sm:grid-cols-[3rem_1fr] sm:gap-8">
                <span className="text-xs font-bold tracking-[0.2em] text-ink/40 pt-1.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="max-w-3xl text-lg font-light leading-relaxed text-ink/75 transition-colors duration-300 group-hover:text-ink sm:text-xl">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      <section className="wrap pb-28 sm:pb-36">
        <SectionHead eyebrow="By The Numbers" title="PRX at a Glance" />
        <div className="mt-12">
          <Stats />
        </div>
      </section>

      {/* ── What can I expect ────────────────────────────── */}
      <section className="wrap pb-28 sm:pb-36">
        <SectionHead
          eyebrow="Process"
          title="What Can I Expect?"
          subtitle="Here's what happens before and after you enroll in a clinical study or clinical trial."
        />
        <div className="mt-12 border-t border-line">
          {expectSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.05, ease }}
              className="group relative overflow-hidden border-b border-line"
            >
              <span className="row-fill bg-brand" aria-hidden />
              <div className="relative z-10 grid gap-2 px-1 py-9 sm:grid-cols-[5rem_1fr_1.4fr] sm:gap-8 sm:py-11">
                <span className="text-4xl font-black tracking-tight text-ink/15 transition-colors duration-300 group-hover:text-white/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight text-ink transition-colors duration-300 group-hover:text-white sm:text-2xl">
                  {step.title}
                </h3>
                <p className="max-w-xl text-[15px] font-light leading-relaxed text-ink/60 transition-colors duration-300 group-hover:text-white/75">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-8 text-[12px] font-bold uppercase tracking-[0.2em] text-ink/45">
            Participation is voluntary — you can stop at any time.
          </p>
        </Reveal>
      </section>

      <CTABand />
    </div>
  )
}
