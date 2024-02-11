import { type ComponentProps, useMemo } from 'react'
import { Caret } from '@/components/caret'
import { cn } from '@/util/class-names'

type Props = {
  userInput: string
  words: string
} & ComponentProps<'div'>

export const UserTypings = ({ userInput, words, ...props }: Props) => {
  const typedCharacters = useMemo(() => {
    return userInput.split('')
  }, [userInput])

  return (
    <div {...props}>
      {typedCharacters.map((character, index) => (
        <Character key={index} actual={character} expected={words[index]} />
      ))}
      <Caret />
    </div>
  )
}

type CharacterProps = {
  actual: string
  expected: string
}

const Character = ({ actual, expected }: CharacterProps) => {
  const isCorrect = useMemo(() => actual === expected, [actual, expected])
  const isWhitespace = useMemo(() => expected === ' ', [expected])

  return (
    <span
      className={cn('whitespace-pre-wrap', {
        'text-red-500': !isCorrect && !isWhitespace,
        'text-primary-400': isCorrect && !isWhitespace,
        'bg-red-500/50': !isCorrect && isWhitespace,
      })}
    >
      {expected}
    </span>
  )
}
