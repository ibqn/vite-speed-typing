type Props = {
  timeLeft: number
}

export const CountdownTimer = ({ timeLeft }: Props) => {
  return <div className="text-primary-400 font-medium">Time: {timeLeft}</div>
}
