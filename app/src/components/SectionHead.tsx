import Reveal from './Reveal'

type Props = {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}

/** RDA-style section head: small caps meta + huge heading. */
export default function SectionHead({ eyebrow, title, subtitle, align = 'left' }: Props) {
  const centered = align === 'center'
  return (
    <Reveal className={centered ? 'text-center' : ''}>
      <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand">({eyebrow})</p>
      <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 max-w-2xl text-base font-light leading-relaxed text-ink/60 sm:text-lg ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
