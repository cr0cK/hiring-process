import { ensureArray } from 'src/helpers/ensureArray'

/**
 * Concat values + 'px', useful in strings interpolations.
 */
export function toPx(value: number): string {
  return `${value}px`
}

/**
 * Do an addition between a value with its unit and an operand.
 * Example: '50px' + 10 => '60px'
 */
export function add(
  valueWithUnit: string,
  operand: number,
  withUnit = true
): string | number {
  const [value, unit] = _splitValue(valueWithUnit)
  return withUnit
    ? `${Number(value) + operand}${unit}`
    : Number(value) + operand
}

/**
 * Do an substraction between a value with its unit and an operand.
 * Example: '50px' - 10 => '40px'
 */
export function sub(
  valueWithUnit: string,
  operand: number,
  withUnit = true
): string | number {
  const [value, unit] = _splitValue(valueWithUnit)
  return withUnit
    ? `${Number(value) - operand}${unit}`
    : Number(value) - operand
}

/**
 * Do a division between a value with its unit and an operand.
 * Example: '50px' / 2 => '25px'
 */
export function divide(
  valueWithUnit: string,
  operand: number,
  withUnit = true
): string | number {
  const [value, unit] = _splitValue(valueWithUnit)
  return withUnit
    ? `${Number(value) / operand}${unit}`
    : Number(value) / operand
}

/**
 * Do a multiplication between a value with its unit and an operand.
 * Example: '50px' * 2 => '100px'
 */
export function multiply(
  valueWithUnit: string,
  operand: number,
  withUnit = true
): string | number {
  const [value, unit] = _splitValue(valueWithUnit)
  return withUnit
    ? `${Number(value) * operand}${unit}`
    : Number(value) * operand
}

/**
 * Reverse the value.
 */
export function reverse(
  valueWithUnit: string,
  withUnit = true
): string | number {
  const [value, unit] = _splitValue(valueWithUnit)
  return withUnit ? `${-Number(value)}${unit}` : -Number(value)
}

function _splitValue(value: string): string[] {
  return ensureArray(value.match(/^(\d+)(\w+)$/)).slice(1)
}
