import { GeneratedWords } from '@/components/generated-words'
import { CountdownTimer } from '@/components/countdown-timer'
import { RestartButton } from '@/components/restart-button'
import { Results } from '@/components/results'
import { UserTypings } from '@/components/user-typings'
import { WordsContainer } from '@/components/words-container'
import { useEngine } from '@/hooks/use-engine'
import { calculateAccuracyPercentage } from '@/util/calculate-accuracy-percentage'

export const App = () => {
  const { state, words, timeLeft, typed, totalTyped, errors, restart } =
    useEngine()

  return (
    <>
      <CountdownTimer timeLeft={timeLeft} />

      <WordsContainer>
        <GeneratedWords words={words} />
        <UserTypings
          className="absolute inset-0"
          userInput={typed}
          words={words}
        />
      </WordsContainer>

      <RestartButton
        className="mx-auto mt-10 text-slate-500"
        onRestart={restart}
      />

      {state === 'finished' && (
        <Results
          className="mt-10"
          errors={errors}
          accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
          totalWords={totalTyped}
        />
      )}
    </>
  )
}
