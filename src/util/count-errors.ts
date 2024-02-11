export const countErrors = (actual: string, expected: string) => {
  const expectedCharacters = expected.split('')

  return expectedCharacters.reduce((errors, expectedCharacter, index) => {
    const actualCharacter = actual[index]

    return actualCharacter !== expectedCharacter ? errors + 1 : errors
  }, 0)
}
