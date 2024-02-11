import { useCallback, useEffect, useRef, useState } from 'react'

export const useCountdownTimer = (duration: number) => {
  const [timeLeft, setTimeLeft] = useState(duration)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startCountDown = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)
  }, [setTimeLeft])

  const resetCountDown = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setTimeLeft(duration)
  }, [duration, setTimeLeft])

  useEffect(() => {
    if (timeLeft === 0 && intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }, [timeLeft, intervalRef])

  return { timeLeft, startCountDown, resetCountDown }
}