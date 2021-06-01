// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { AnyBoolean } from '../../../type/any-boolean.type';
import { IsNotBoolean } from '../type/is-not-boolean.type';
import { Never } from '../../../type/never.type';
import { ResultCallback } from '../../../type/result-callback.type';
/**
 * Checks if a generic `Type` `value` is not a `boolean` type, and not instance of `Boolean`.
 * @param value A generic `Type` `value`, by default of type detected from the `value`, to check.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is not `boolean` or `Boolean` instance.
 */
export const isNotBoolean: IsNotBoolean = <Type>(
  value: Type,
  callback: ResultCallback = resultCallback
): value is Never<AnyBoolean, Type> =>
  callback(
    typeOf(value) !== 'boolean' &&
    typeof value !== 'boolean' &&
    value instanceof Boolean === false,
    value
  );
