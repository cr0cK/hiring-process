import { Perhaps } from 'src/types'

/**
 * Allow to implement all cases of a switch statement.
 * Credit: https://stackoverflow.com/a/39419171/2743091
 */
export function assertUnreachable(
  x: Perhaps<never>,
  logMessage?: string
): never {
  const error = logMessage || "Didn't expect to get here"
  throw new Error(`${error} (${x})`)
}
