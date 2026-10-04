import { Link } from 'react-router-dom'
import Mark from './Mark'
import { nav, site } from '../data/content'

/** Full-bleed teal footer, fixed behind the page and revealed as a curtain
 *  by the transparent spacer at the end of each page's content. */
export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-0 flex h-[82svh] flex-col bg-brand text-ink" data-testid="footer">
      <div className="wrap grid gap-10 pt-14 text-[13px] sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-ink/60">Sitemap</p>
          <ul className="mt-4 space-y-2.5 font-semibold">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-opacity hover:opacity-60">
                  {item.label === 'Contact' ? 'Contact Us' : item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-ink/60">Contact</p>
          <ul className="mt-4 space-y-2.5 font-semibold">
            <li>{site.addressLine1}</li>
            <li>{site.addressLine2}</li>
            <li><a href={site.phoneHref} className="transition-opacity hover:opacity-60">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="transition-opacity hover:opacity-60">{site.email}</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-ink/60">Hours</p>
          <ul className="mt-4 space-y-2.5 font-semibold">
            <li>Monday – Thursday</li>
            <li>0900 – 0430</li>
            <li>Friday 0900 – 1200</li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-ink/60">Schedule Your Visit</p>
          <p className="mt-4 max-w-[28ch] font-medium leading-relaxed text-ink/80">
            Click below to make an appointment at PRX Research. Our team will assist you promptly.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex rounded-full bg-accent px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            Make an Appointment
          </Link>
        </div>
      </div>

      <div className="wrap mt-auto flex items-end justify-between gap-6 pb-5">
        <p className="select-none whitespace-nowrap text-[13.5vw] font-black leading-[0.8] tracking-tighter lg:text-[10.5vw]">
          PRX RESEARCH
        </p>
        <div className="relative hidden shrink-0 sm:block">
          <div className="grid h-36 w-36 place-items-center rounded-full border-4 border-white/70 bg-deep lg:h-44 lg:w-44">
            <Mark className="h-20 w-20 text-brand lg:h-24 lg:w-24" />
          </div>
        </div>
      </div>
      <p className="wrap pb-4 text-[11px] font-semibold text-ink/60">© {new Date().getFullYear()} PRX Research. All Rights Reserved</p>
    </footer>
  )
}
