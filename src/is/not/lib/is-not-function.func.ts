// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { Func } from '../../../type/func.type';
import { IsNotFunction } from '../type/is-not-function.type';
import { Never } from '../../../type/never.type';
import { ResultCallback } from '../../../type/result-callback.type';
/**
 * Checks if a generic `Type` `value` is not a `function` type and not an instance of `Function`.
 * @param value A generic `Type` `value`, by default of type detected from the `value`, to check.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is not a `function`.
 */
export const isNotFunction: IsNotFunction = <Type>(
  value: Type,
  callback: ResultCallback = resultCallback
): value is Never<Func, Type> =>
  callback(
    typeOf(value) !== 'function' &&
    typeof value !== 'function' &&
    value instanceof Function === false,
    value
  );
