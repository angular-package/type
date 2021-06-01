// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { Defined } from '../../type/defined.type';
import { IsDefined } from '../type/is-defined.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if a generic `Type` `value` is not an `undefined` type and is not equal to `undefined`.
 * @param value A generic `Type` `value`, by default of type detected from the `value`, to check.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is defined, not `undefined`.
 */
export const isDefined: IsDefined = <Type>(
  value: Type,
  callback: ResultCallback = resultCallback
): value is Defined<Type> =>
  callback(
    typeOf(value) !== 'undefined' &&
    typeof value !== 'undefined' &&
    value !== undefined,
    value
  );
