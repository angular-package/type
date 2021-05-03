// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { IsNotNumber } from '../type/is-not-number.type';
import { ResultCallback } from '../../../type/result-callback.type';

/**
 * Checks if any `value` is not a `number` type and not an instance of `Number`.
 * @param value An unknown `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `resultCallback`.
 * @returns A `boolean` indicating whether or not the `value` is not a `number`.
 */
export const isNotNumber: IsNotNumber = (value: any, callback: ResultCallback = resultCallback): boolean =>
  callback(
    typeOf(value) !== 'number' &&
    typeof value !== 'number' &&
    value instanceof Number === false
  );
