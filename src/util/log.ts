export const log = (message?: unknown, ...optionalParams: unknown[]) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(message, ...optionalParams)
  }
}
