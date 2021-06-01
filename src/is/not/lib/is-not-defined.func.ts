// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { IsNotDefined } from '../type/is-not-defined.type';
import { ResultCallback } from '../../../type/result-callback.type';
import { Undefined } from '../../../type/undefined.type';
/**
 * Checks if a generic `Type` `value` is an `undefined` type and is equal to `undefined`.
 * @param value A generic `Type` `value`, by default of type detected from the `value`, to check.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is not defined.
 */
export const isNotDefined: IsNotDefined = <Type>(
  value: Type,
  callback: ResultCallback = resultCallback
): value is Undefined<Type> =>
  callback(
    typeOf(value) === 'undefined' &&
    typeof value === 'undefined' &&
    value === undefined,
    value
  );
