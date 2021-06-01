// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { IsNotNull } from '../type/is-not-null.type';
import { ResultCallback } from '../../../type/result-callback.type';
import { Never } from '../../../type/never.type';
/**
 * Checks if a generic `Type` `value` is not a `null` type and not equal to `null`.
 * @param value A generic `Type` `value`, by default of type detected from the `value` to check.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is not `null`.
 */
export const isNotNull: IsNotNull = <Type>(
  value: Type,
  callback: ResultCallback = resultCallback
): value is Never<null, Type> =>
  callback(typeOf(value) !== 'null' && value !== null, value);
