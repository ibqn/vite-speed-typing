import { faker } from '@faker-js/faker'
import { useMemo } from 'react'
import { GeneratedWords } from '@/components/generated-words'
import { CountdownTimer } from '@/components/countdown-timer'
import { RestartButton } from '@/components/restart-button'
import { Results } from './components/results'

export const App = () => {
  const words = useMemo(() => faker.word.words(10), [])

  return (
    <>
      <CountdownTimer timeLeft={30} />
      <GeneratedWords words={words} />
      <RestartButton
        className="mx-auto mt-10 text-slate-500"
        onRestart={() => null}
      />
      <Results
        className="mt-10"
        errors={10}
        accuracyPercentage={75}
        totalWords={123}
      />
    </>
  )
}
