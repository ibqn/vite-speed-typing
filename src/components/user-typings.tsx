import { type ComponentProps, useMemo } from 'react'

type Props = {
  userInput: string
} & ComponentProps<'div'>

export const UserTypings = ({ userInput, ...props }: Props) => {
  const typedCharacters = useMemo(() => {
    return userInput.split('')
  }, [userInput])

  return (
    <div {...props}>
      {typedCharacters.map((character, index) => (
        <Character key={index} character={character} />
      ))}
    </div>
  )
}

const Character = ({ character }: { character: string }) => (
  <span className="text-primary-400">{character}</span>
)
