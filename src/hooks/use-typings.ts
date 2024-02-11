import { useCallback, useEffect, useRef, useState } from 'react'

const isKeyboardCodeAllowed = (code: string) => {
  const allowedCodes = ['Space', 'Backspace']
  const startsWithCodes = ['Key', 'Digit']

  return (
    allowedCodes.includes(code) ||
    startsWithCodes.some((startsWithCode) => code.startsWith(startsWithCode))
  )
}

export const useTypings = (enabled: boolean) => {
  const [cursor, setCursor] = useState(0)
  const [typed, setTyped] = useState('')
  const totalTyped = useRef(0)

  const keydownHandler = useCallback(({ key, code }: KeyboardEvent) => {
    if (!enabled || !isKeyboardCodeAllowed(code)) {
      return
    }

    if (code === 'Backspace') {
      setTyped((prev: string) => prev.slice(0, -1))
      totalTyped.current -= 1
      return
    }

    if (totalTyped.current >= cursor) {
      return
    }

    setTyped((prev: string) => prev + key)
    totalTyped.current += 1
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', keydownHandler)

    return () => {
      window.removeEventListener('keydown', keydownHandler)
    }
  }, [enabled, keydownHandler])
}
