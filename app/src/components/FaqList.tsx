import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { faqs } from '../data/content'

export default function FaqList() {
  const [open, setOpen] = useState<number | null>(0)
  const reduce = useReducedMotion()

  return (
    <div className="border-t border-line">
      {faqs.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center gap-5 py-7 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-xs font-bold tracking-[0.2em] text-ink/40">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className={`flex-1 text-lg font-semibold transition-colors duration-300 sm:text-2xl ${
                  isOpen ? 'text-brand' : 'text-ink group-hover:text-brand'
                }`}
              >
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`text-3xl font-light leading-none transition-colors ${
                  isOpen ? 'text-brand' : 'text-ink/40'
                }`}
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={reduce ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-8 pl-9 text-[15px] font-light leading-relaxed text-ink/65 sm:pl-11 sm:text-base">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
