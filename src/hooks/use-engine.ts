import { useCallback, useEffect, useMemo, useState } from 'react'
import { useWords } from '@/hooks/use-words'
import { useCountdownTimer } from '@/hooks/use-countdown-timer'
import { useTypings } from '@/hooks/use-typings'
import { countErrors } from '@/util/count-errors'
import { log } from '@/util/log'

export type State = 'idle' | 'running' | 'finished'

const NUMBER_OF_WORDS = 13
const COUNTDOWN_SECONDS = 30

export const useEngine = () => {
  const [state, setState] = useState<State>('idle')
  const { words, updateWords } = useWords(NUMBER_OF_WORDS)
  const { timeLeft, startCountDown, resetCountDown } =
    useCountdownTimer(COUNTDOWN_SECONDS)
  const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(
    state !== 'finished'
  )

  const [errors, setErrors] = useState(0)

  const isStarting = useMemo(
    () => state === 'idle' && cursor > 0,
    [state, cursor]
  )

  const areWordsFinished = useMemo(
    () => words.length === cursor,
    [words, cursor]
  )

  const sumErrors = useCallback(() => {
    const wordsReached = words.substring(0, cursor)
    setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached))
  }, [cursor, typed, words])

  const restart = useCallback(() => {
    log('restart')

    setState('idle')
    setErrors(0)
    resetCountDown()
    resetTotalTyped()
    updateWords()
    clearTyped()
  }, [clearTyped, resetCountDown, resetTotalTyped, updateWords])

  useEffect(() => {
    if (isStarting) {
      setState('running')
      startCountDown()
    }
  }, [isStarting, startCountDown])

  useEffect(() => {
    if (state === 'running' && timeLeft === 0) {
      setState('finished')
      sumErrors()
    }
  }, [state, sumErrors, timeLeft])

  useEffect(() => {
    if (areWordsFinished) {
      log('words finished')
      sumErrors()
      updateWords()
      clearTyped()
    }
  }, [areWordsFinished, sumErrors, updateWords, clearTyped])

  return {
    state,
    words,
    timeLeft,
    typed,
    totalTyped,
    errors,
    restart,
  }
}
