import { useEffect, useRef, useState } from 'react'

const GLYPHS = 'ABCDEFGHKMNPRSTUVWXYZ*#%&'

/** Text scramble/decode: while `active`, letters cycle glyphs then settle left-to-right. */
export function useScramble(text: string, active: boolean, stepMs = 40) {
  const [out, setOut] = useState(text)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (timer.current) clearInterval(timer.current)
    if (!active) {
      setOut(text)
      return
    }
    let frame = 0
    timer.current = setInterval(() => {
      frame += 1
      const settled = Math.floor(frame / 2)
      if (settled >= text.length) {
        setOut(text)
        if (timer.current) clearInterval(timer.current)
        return
      }
      let s = ''
      for (let i = 0; i < text.length; i++) {
        const ch = text[i]
        s += ch === ' ' || i < settled ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
      }
      setOut(s)
    }, stepMs)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [active, text, stepMs])

  return out
}
