import { useState } from 'react'
import type { FormEvent } from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Marquee from '../components/Marquee'
import { site } from '../data/content'

const MAP_SRC =
  'https://maps.google.com/maps?q=1011%20N.%20Galloway%20Avenue%2C%20Mesquite%2C%20TX%2075149&t=&z=15&ie=UTF8&iwloc=&output=embed'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || `Website inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const infoRows = [
    { label: 'Address', value: `${site.addressLine1}, ${site.addressLine2}`, href: undefined },
    { label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { label: 'Call', value: site.phone, href: site.phoneHref },
  ]

  return (
    <div className="bg-paper">
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our clinical research team in Mesquite, TX"
        image="contact.jpg"
      />

      <Marquee
        items={['Get In Touch', 'Make an Appointment', 'Join a Trial', site.phone]}
        className="border-b border-line py-3.5 text-[12px] font-bold uppercase tracking-[0.24em] text-ink/60"
        separator="→"
      />

      {/* ── Info rows ────────────────────────────────────── */}
      <section className="wrap py-24 sm:py-32">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink/50">( Contact Us )</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Get In Touch
          </h2>
          <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-ink/60 sm:text-lg">
            If you have any questions or need further information about our services, don't
            hesitate to contact us.
          </p>
        </Reveal>

        <div className="mt-12 border-t border-line">
          {infoRows.map((row, i) => (
            <Reveal key={row.label} delay={i * 0.07}>
              <div className="group grid items-baseline gap-1 border-b border-line py-8 sm:grid-cols-[10rem_1fr] sm:gap-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-ink/45">
                  {row.label}
                </p>
                {row.href ? (
                  <a
                    href={row.href}
                    className="text-2xl font-black tracking-tight text-ink transition-colors duration-300 hover:text-brand sm:text-4xl"
                  >
                    {row.value}
                  </a>
                ) : (
                  <p className="text-2xl font-black tracking-tight text-ink sm:text-4xl">{row.value}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Form + map ───────────────────────────────────── */}
      <section className="wrap grid items-start gap-14 pb-28 sm:pb-36 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <form onSubmit={submit}>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink/50">( Send a Message )</p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <Field label="Your Name">
                <input
                  required
                  value={form.name}
                  onChange={update('name')}
                  className="w-full border-b border-ink/20 bg-transparent py-3 text-lg font-light text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-brand"
                  aria-label="Your Name"
                />
              </Field>
              <Field label="Your Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  className="w-full border-b border-ink/20 bg-transparent py-3 text-lg font-light text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-brand"
                  aria-label="Your Email"
                />
              </Field>
            </div>
            <div className="mt-8">
              <Field label="Subject">
                <input
                  value={form.subject}
                  onChange={update('subject')}
                  className="w-full border-b border-ink/20 bg-transparent py-3 text-lg font-light text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-brand"
                  aria-label="Subject"
                />
              </Field>
            </div>
            <div className="mt-8">
              <Field label="Message">
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  className="w-full resize-none border-b border-ink/20 bg-transparent py-3 text-lg font-light text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-brand"
                  aria-label="Message"
                />
              </Field>
            </div>
            <button type="submit" className="btn-accent mt-10 uppercase tracking-[0.14em]">
              Send Message →
            </button>
            <p
              className={`mt-3 text-sm text-brand transition-opacity duration-300 ${
                sent ? 'opacity-100' : 'opacity-0'
              }`}
              role="status"
            >
              Opening your email client with the message pre-filled…
            </p>
          </form>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink/50">( Find Us )</p>
          <div className="mt-8 overflow-hidden border border-line">
            <iframe
              title="PRX Research on the map — 1011 N. Galloway Avenue, Mesquite, TX"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[340px] w-full grayscale-[35%] border-0 sm:h-[420px]"
            />
          </div>
          <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.2em] text-ink/55">
            Monday – Thursday 0900 – 0430 · Friday 0900 – 1200
          </p>
        </Reveal>
      </section>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-ink/45">{label}</span>
      <span className="mt-1 block">{children}</span>
    </label>
  )
}
