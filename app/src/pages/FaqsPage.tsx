import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import FaqList from '../components/FaqList'
import CTABand from '../components/CTABand'

export default function FaqsPage() {
  return (
    <div className="bg-paper">
      <PageHero
        title="FAQs"
        subtitle="Navigate through our Frequently Asked Questions to feel more informed about your health journey."
        image="faq.jpg"
      />

      <section className="wrap py-28 sm:py-36">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink/50">( Help )</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-ink/60 sm:text-lg">
            Discover answers, gain insights, and feel more informed about our services.
          </p>
        </Reveal>
        <div className="mt-14">
          <FaqList />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 bg-deep px-8 py-10 text-white sm:px-12">
            <div>
              <p className="text-2xl font-black uppercase tracking-tight">Still have questions?</p>
              <p className="mt-2 text-[15px] font-light text-white/65">
                Our team is happy to walk you through anything about our studies and services.
              </p>
            </div>
            <a href="tel:+19727774428" className="btn-accent !rounded-full uppercase tracking-[0.12em]">
              Call 972-777-4428
            </a>
          </div>
        </Reveal>
      </section>

      <CTABand />
    </div>
  )
}
