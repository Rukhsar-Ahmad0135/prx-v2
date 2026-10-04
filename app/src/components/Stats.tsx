import Reveal from './Reveal'
import { stats } from '../data/content'

/** RDA-style stats: giant teal numerals in a ruled grid. */
export default function Stats({ columns = 'four' }: { columns?: 'two' | 'four' }) {
  const cols =
    columns === 'two'
      ? 'grid-cols-2'
      : 'grid-cols-2 lg:grid-cols-4'
  return (
    <div className={`grid gap-px border-y border-line bg-line ${cols}`}>
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.07} className="bg-paper">
          <div className="px-5 py-10 sm:px-8 sm:py-14">
            <p className="text-5xl font-black tracking-tight text-brand sm:text-6xl">{s.value}</p>
            <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.24em] text-ink">{s.label}</p>
            <p className="mt-2 max-w-[26ch] text-sm font-light leading-relaxed text-ink/55">{s.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
