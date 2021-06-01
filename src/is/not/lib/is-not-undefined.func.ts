// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { Defined } from '../../../type/defined.type';
import { IsNotUndefined } from '../type/is-not-undefined.type';
import { ResultCallback } from '../../../type/result-callback.type';
/**
 * Checks if a generic `Type` `value` is not an `undefined` type and not equal to `undefined`.
 * @param value A generic `Type` `value`, by default of type detected from the `value`, to check.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is not `undefined`.
 */
export const isNotUndefined: IsNotUndefined = <Type>(
  value: Type,
  callback: ResultCallback = resultCallback
): value is Defined<Type> =>
  callback(
    typeOf(value) !== 'undefined' &&
    typeof value !== 'undefined' &&
    value !== undefined,
    value
  );
