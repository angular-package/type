// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { AnyNumber } from '../../../type/any-number.type';
import { IsNotNumber } from '../type/is-not-number.type';
import { Never } from '../../../type/never.type';
import { ResultCallback } from '../../../type/result-callback.type';
/**
 * Checks if a generic `Type` `value` is not a `number` type and not an instance of `Number`.
 * @param value A generic `Type`, by default of type detected from the `value` to check.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is not a `number` or `Number` instance.
 */
export const isNotNumber: IsNotNumber = <Type>(
  value: Type,
  callback: ResultCallback = resultCallback
): value is Never<AnyNumber, Type> =>
  callback(
    typeOf(value) !== 'number' &&
    typeof value !== 'number' &&
    value instanceof Number === false,
    value
  );
