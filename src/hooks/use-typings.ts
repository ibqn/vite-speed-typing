import { log } from '@/util/log'
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

  const keydownHandler = useCallback(
    ({ key, code }: KeyboardEvent) => {
      if (!enabled || !isKeyboardCodeAllowed(code)) {
        return
      }

      log('key', key, 'code', code)

      if (code === 'Backspace') {
        setTyped((prev: string) => prev.slice(0, -1))
        setCursor(cursor - 1)
        totalTyped.current -= 1
        return
      }

      setTyped((prev: string) => prev.concat(key))
      setCursor(cursor + 1)
      totalTyped.current += 1
    },
    [cursor, enabled, setTyped]
  )

  const clearTyped = useCallback(() => {
    setTyped('')
    setCursor(0)
  }, [setTyped, setCursor])

  const resetTotalTyped = useCallback(() => {
    totalTyped.current = 0
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', keydownHandler)

    return () => {
      window.removeEventListener('keydown', keydownHandler)
    }
  }, [keydownHandler])

  return {
    cursor,
    typed,
    totalTyped: totalTyped.current,
    clearTyped,
    resetTotalTyped,
  }
}
