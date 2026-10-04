import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import CTABand from '../components/CTABand'
import { howItWorks, studyPhases, therapeuticAreas, workingProcess } from '../data/content'

export default function SponsorsPage() {
  return (
    <div className="bg-paper">
      <PageHero
        title="Sponsors & Clinical Trials"
        subtitle="Learn about our clinical trials, therapeutic areas, and working process"
        image="sponsors.jpg"
      />

      {/* ── How it works ─────────────────────────────────── */}
      <section className="wrap py-28 sm:py-36">
        <SectionHead
          eyebrow="Process"
          title="How It Works"
          subtitle="Participating in a clinical trial is easy with PRX Research."
        />
        <div className="mt-12 border-t border-line">
          {howItWorks.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.07}>
              <div className="group grid gap-2 border-b border-line py-9 sm:grid-cols-[5rem_1fr_1.4fr] sm:gap-8">
                <span className="text-4xl font-black tracking-tight text-ink/15 transition-colors duration-300 group-hover:text-brand">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight text-ink sm:text-2xl">
                  {card.title}
                </h3>
                <p className="max-w-xl text-[15px] font-light leading-relaxed text-ink/60">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Therapeutic areas rows ───────────────────────── */}
      <section className="bg-deep py-28 text-white sm:py-36">
        <div className="wrap">
          <SectionHead eyebrow="Our Expertise" title="Therapeutic Areas" />
          <div className="mt-12 border-t border-white/15">
            {therapeuticAreas.map((area, i) => (
              <Reveal key={area.title} delay={Math.min(i * 0.03, 0.24)}>
                <Link
                  to="/contact"
                  className="group relative block overflow-hidden border-b border-white/15"
                >
                  <span className="row-fill !bg-brand" aria-hidden />
                  <span className="relative z-10 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 px-1 py-6 transition-colors duration-300 group-hover:text-ink sm:py-7">
                    <span className="flex items-baseline gap-5">
                      <span className="text-[11px] font-bold tracking-[0.2em] text-white/35 transition-colors duration-300 group-hover:text-ink/50">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xl font-black uppercase tracking-tight sm:text-3xl">
                        {area.title}
                      </span>
                    </span>
                    <span className="max-w-md text-[13px] font-light leading-relaxed text-white/45 transition-colors duration-300 group-hover:text-ink/70">
                      {area.desc}
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Working process ──────────────────────────────── */}
      <section className="wrap py-28 sm:py-36">
        <SectionHead eyebrow="Why Choose Us" title="Our Working Process" />
        <div className="mt-12 grid gap-px border-y border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {workingProcess.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07} className="bg-paper">
              <div className="group h-full px-6 py-10">
                <p className="text-4xl font-black tracking-tight text-brand/25 transition-colors duration-300 group-hover:text-brand">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-6 text-lg font-black uppercase tracking-tight text-ink">{item.title}</h3>
                <p className="mt-3 text-[14px] font-light leading-relaxed text-ink/55">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Study phases ─────────────────────────────────── */}
      <section className="wrap pb-28 sm:pb-36">
        <SectionHead
          eyebrow="Learn"
          title="Study Phases"
          subtitle="Clinical trials have four phases. Here's what those phases mean:"
        />
        <div className="mt-12 border-t border-line">
          {studyPhases.map((phase, i) => (
            <Reveal key={phase.title} delay={i * 0.06}>
              <div className="group grid items-baseline gap-2 border-b border-line py-9 sm:grid-cols-[10rem_1fr] sm:gap-10">
                <h3 className="text-3xl font-black uppercase tracking-tight text-brand transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
                  {phase.title}
                </h3>
                <p className="max-w-2xl text-[15px] font-light leading-relaxed text-ink/60 sm:text-base">
                  {phase.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </div>
  )
}
