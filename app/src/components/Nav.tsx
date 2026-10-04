import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { nav } from '../data/content'
import { Close, Menu } from './icons'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <div className="wrap flex h-16 items-center justify-between text-white">
          <Link to="/" className="text-sm font-black tracking-[0.22em]" aria-label="PRX Research — home">
            PRX RESEARCH
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `group relative text-[12px] font-bold uppercase tracking-[0.2em] transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                  }`
                }
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden rounded-full border border-white/70 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-white hover:text-black sm:inline-flex"
            >
              Appointment
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-deep pt-24 md:hidden"
          >
            <nav className="wrap flex flex-col" aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `block border-b border-white/10 py-5 text-3xl font-black uppercase tracking-tight ${
                        isActive ? 'text-brand' : 'text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="btn-accent mt-8 justify-center uppercase tracking-[0.14em]"
              >
                Appointment
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
