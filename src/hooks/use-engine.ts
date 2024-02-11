import { useState } from 'react'
import { useWords } from '@/hooks/use-words'
import { useCountdownTimer } from '@/hooks/use-countdown-timer'

export type State = 'idle' | 'running' | 'finished'

const NUMBER_OF_WORDS = 13
const COUNTDOWN_SECONDS = 30

export const useEngine = () => {
  const [state, setState] = useState<State>('idle')
  const { words, updateWords } = useWords(NUMBER_OF_WORDS)
  const { timeLeft, startCountDown, resetCountDown } =
    useCountdownTimer(COUNTDOWN_SECONDS)

  const start = () => {
    setState('running')
    updateWords()
  }

  const stop = () => {
    setState('finished')
  }

  return {
    state,
    words,
    start,
    stop,
    timeLeft,
    startCountDown,
    resetCountDown,
  }
}
