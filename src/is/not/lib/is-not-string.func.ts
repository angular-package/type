// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { AnyString } from '../../../type/any-string.type';
import { IsNotString } from '../type/is-not-string.type';
import { Never } from '../../../type/never.type';
import { ResultCallback } from '../../../type/result-callback.type';
/**
 * Checks if a generic `Type` `value` is not a `string` type and not an instance of `String`.
 * @param value A generic `Type`, by default of type detected from the `value` to check.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is not a `string` or `String` instance.
 */
export const isNotString: IsNotString = <Type>(
  value: Type,
  callback: ResultCallback = resultCallback
): value is Never<AnyString, Type> =>
  callback(
    typeOf(value) !== 'string' &&
    typeof value !== 'string' &&
    value instanceof String === false,
    value
  );
