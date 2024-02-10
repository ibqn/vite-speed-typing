import { useEffect, useState } from 'react'

type Props = {
  timeLeft: number
}

export const CountdownTimer = ({ timeLeft }: Props) => {
  const [time, setTime] = useState(timeLeft)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return <div className="text-primary-400 font-medium">Time: {time}</div>
}
