// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsArray } from '../type/is-array.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `Array`, `Array` instance, and `object` type.
 * @param value Any `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @returns A `boolean` indicating whether or not the `value` is an `Array`.
 */
export const isArray: IsArray = <Type = any>(value: any, callback: ResultCallback = resultCallback): value is Array<Type> =>
  callback(
    typeOf(value) === 'array' &&
    Array.isArray(value) === true &&
    value instanceof Array === true &&
    typeof value === 'object',
    value
  );
