import { IsNumber } from '../type/is-number.type';
import { typeOf } from '../../lib/type-of.func';
/**
 * Checks if any `value` is a `'number'` type not instance of `Number` and `Object` or `'object'` type instance of `Number` and `Object`.
 * Use the `guardNumber()` function to type-guard `number` also.
 * @param value Any value to check if it's a `'number'` type not instance of `Number` and `Object`
 * or `'object'` type instance of `Number` and `Object`.
 * @returns boolean
 */
export const isNumber: IsNumber = (value: any): value is number =>
  typeOf(value) === 'number' &&
  (
    isFinite(value) === true &&
    (
      value instanceof Number === false &&
      value instanceof Object === false &&
      typeof value === 'number'
    )
    ||
    (
      typeof value === 'object' &&
      value instanceof Number === true &&
      value instanceof Object === true
    )
  );
