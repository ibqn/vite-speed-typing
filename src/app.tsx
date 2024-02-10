import { faker } from '@faker-js/faker'
import { useMemo } from 'react'
import { GeneratedWords } from '@/components/generated-words'
import { CountdownTimer } from '@/components/countdown-timer'

export const App = () => {
  const words = useMemo(() => faker.word.words(10), [])

  return (
    <>
      <CountdownTimer timeLeft={30} />
      <GeneratedWords words={words} />
    </>
  )
}
