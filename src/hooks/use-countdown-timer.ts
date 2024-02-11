import { useCallback, useEffect, useRef, useState } from 'react'

export const useCountdownTimer = (duration: number) => {
  const [timeLeft, setTimeLeft] = useState(duration)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const clear = () => {
    intervalRef.current && clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  const startCountDown = useCallback(() => {
    if (intervalRef.current) {
      clear()
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)
  }, [setTimeLeft])

  const resetCountDown = useCallback(() => {
    clear()
    setTimeLeft(duration)
  }, [duration, setTimeLeft])

  useEffect(() => {
    if (timeLeft === 0) {
      clear()
    }
  }, [timeLeft])

  useEffect(() => {
    return () => {
      clear()
    }
  }, [])

  return { timeLeft, startCountDown, resetCountDown }
}
