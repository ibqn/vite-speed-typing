type Props = {
  timeLeft: number
}

export const CountdownTimer = ({ timeLeft }: Props) => (
  <div className="font-medium text-primary-400">Time: {timeLeft}</div>
)
