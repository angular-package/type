import { IsNumber } from '../type/is-number.type';
/**
 * Checks if any `value` is a `'number'` type or instance of `Number` and `Object`.
 * Use the `guardNumber()` function to type-guard `number` also.
 * @param value Any value to check if it's a `'number'` type.
 * @returns boolean
 */
export const isNumber: IsNumber = (value: any): value is number =>
  typeof value === 'number' ? isFinite(value) : value instanceof Number && value instanceof Object;
