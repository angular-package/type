// Import: Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Import: Type.
import { IsRegExp } from '../type/is-regexp.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a regular expression of a `RegExp` type, an instance of `Object` and `RegExp`.
 * @param value Any `value` to check.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a regular expression.
 */
export const isRegExp: IsRegExp = (
  value: any,
  callback: ResultCallback = resultCallback
): value is RegExp =>
  callback(
    typeOf(value) === 'regexp' &&
      typeof value === 'object' &&
      value instanceof Object &&
      value instanceof RegExp
  );
