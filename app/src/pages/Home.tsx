import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroHome from '../components/HeroHome'
import Marquee from '../components/Marquee'
import WordFill from '../components/WordFill'
import ServiceRows from '../components/ServiceRows'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import CTABand from '../components/CTABand'
import { heroHome, homeIntro, homeTiles, serviceRows, site, trialRows } from '../data/content'

const ease = [0.22, 1, 0.36, 1] as const

export default function Home() {
  return (
    <div className="bg-paper">
      <HeroHome {...heroHome} />

      <Marquee
        items={['Advancing Healthcare Every Day', '100+ Clinical Trials', '5000+ Patients', '30+ Years Experience']}
        className="bg-brand py-4 text-sm font-black uppercase tracking-[0.22em] text-ink"
      />

      {/* ── Intro word-fill manifesto ────────────────────── */}
      <section className="wrap py-28 sm:py-36" data-testid="about-wordfill">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink/50">( Who We Are )</p>
        </Reveal>
        <WordFill
          text={homeIntro}
          className="mt-8 max-w-6xl text-3xl font-light leading-[1.18] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
        />
      </section>

      {/* ── About image row with color sweep ─────────────── */}
      <section className="wrap grid items-center gap-10 pb-28 sm:pb-36 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="relative overflow-hidden" data-testid="about-block">
          <img
            src={`${import.meta.env.BASE_URL}assets/about.jpg`}
            alt="PRX Research clinical team"
            loading="lazy"
            className="aspect-[16/10] w-full object-cover grayscale"
          />
          <Sweep />
        </div>
        <div>
          <Reveal>
            <p className="max-w-md text-lg font-light leading-relaxed text-ink/70 sm:text-xl">
              We leverage cutting-edge research technologies and practices to stay at the forefront
              of medicine — accelerating the translation of biomedical discoveries into
              breakthrough healthcare solutions.
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-ink/25 px-7 py-3 text-[12px] font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
            >
              <span className="roll"><span>Learn More</span><span aria-hidden>Learn More</span></span>
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Services rows + sticker ──────────────────────── */}
      <section className="wrap pb-28 sm:pb-36">
        <SectionHead eyebrow="What We Offer" title="Our Services" />
        <div className="mt-12" data-testid="svc-rows">
          <ServiceRows rows={serviceRows} linkTo="/sponsors" />
        </div>
      </section>

      {/* ── Areas grid ───────────────────────────────────── */}
      <section className="wrap pb-28 sm:pb-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead eyebrow="Our Expertise" title="Research Areas" />
          <Reveal delay={0.1}>
            <Link
              to="/sponsors"
              className="group inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:text-brand"
            >
              <span className="roll"><span>All Specialties →</span><span aria-hidden>All Specialties →</span></span>
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-7 sm:grid-cols-3">
          {homeTiles.map((tile, i) => (
            <Reveal key={tile.caption} delay={i * 0.09}>
              <Link to="/sponsors" className="group block" data-testid={`area-card-${i + 1}`}>
                <div className="overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/${tile.img}`}
                    alt={tile.caption}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover grayscale transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="flex items-baseline justify-between border-b border-line py-4">
                  <p className="text-[12px] font-black uppercase tracking-[0.2em] text-ink">{tile.caption}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">{tile.meta}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Latest trials rows ───────────────────────────── */}
      <section className="wrap pb-28 sm:pb-36">
        <SectionHead eyebrow="Participate" title="Latest Trials" />
        <div className="mt-12 border-t border-line" data-testid="trial-rows">
          {trialRows.map((row, i) => (
            <TrialRow key={row.index} {...row} delay={i * 0.08} />
          ))}
        </div>
        <Reveal delay={0.15}>
          <div className="mt-8 flex justify-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:text-brand"
            >
              <span className="roll"><span>Contact →</span><span aria-hidden>Contact →</span></span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── Dark collage ─────────────────────────────────── */}
      <Collage />

      <CTABand />
    </div>
  )
}

/* teal block sweeps across the B&W image once on entrance */
function Sweep() {
  return (
    <motion.div
      aria-hidden
      initial={{ x: '-102%' }}
      whileInView={{ x: '102%' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.85, ease }}
      className="absolute inset-0 bg-brand"
    />
  )
}

/* trial row: teal sweep then deep fill, white text */
function TrialRow({ index, title, meta, delay }: { index: string; title: string; meta: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease }}
      data-testid={`trial-row-${index}`}
    >
      <Link to="/contact" className="group relative block overflow-hidden border-b border-line">
        <span className="row-fill bg-brand" aria-hidden />
        <span className="row-fill fill-deep bg-deep" aria-hidden />
        <span className="relative z-10 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 py-7 px-1 transition-colors duration-300 group-hover:text-white sm:py-9">
          <span className="flex items-baseline gap-5">
            <span className="text-xs font-bold tracking-[0.2em] text-ink/40 transition-colors duration-300 group-hover:text-white/50">
              {index}
            </span>
            <span className="text-2xl font-black uppercase tracking-tight sm:text-4xl">{title}</span>
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-ink/45 transition-colors duration-300 group-hover:text-white/60">
            {meta}
          </span>
        </span>
      </Link>
    </motion.div>
  )
}

/* dark collage section with parallax center photo */
function Collage() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [70, -70])

  return (
    <section ref={ref} className="relative overflow-hidden bg-deep pb-28 pt-24 text-white sm:pb-36" data-testid="collage">
      {/* tile strip */}
      <div className="wrap grid grid-cols-2 gap-4 sm:grid-cols-4">
        {['about.jpg', 'services.jpg', 'why.jpg', 'faq.jpg'].map((img) => (
          <img
            key={img}
            src={`${import.meta.env.BASE_URL}assets/${img}`}
            alt=""
            loading="lazy"
            className="h-40 w-full object-cover grayscale opacity-70 sm:h-56"
          />
        ))}
      </div>

      <div className="wrap relative">
        <p className="mt-14 text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">
          PRX Research — North Texas
        </p>
        <h2 className="mt-6 text-[11.5vw] font-black uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
          Advancing
          <br />
          Healthcare<span className="text-brand">*</span>
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.img
            style={{ y }}
            src={`${import.meta.env.BASE_URL}assets/process.jpg`}
            alt="Clinical trial documents"
            loading="lazy"
            className="aspect-[3/4] w-full max-w-sm object-cover grayscale"
            data-testid="collage-photo"
          />
          <div className="self-center bg-brand p-8 text-ink sm:p-10">
            <p className="text-lg font-light leading-relaxed">
              PRX embraces innovation and collaboration to address the most pressing healthcare
              challenges. Our multidisciplinary team of experts combines knowledge across medical
              fields — turning research into reality.
            </p>
            <ul className="mt-8 space-y-2 text-[12px] font-bold uppercase tracking-[0.2em]">
              <li>100+ Clinical Trials</li>
              <li>5000+ Patients</li>
              <li>30+ Years Combined Experience</li>
            </ul>
            <a
              href={site.phoneHref}
              className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
