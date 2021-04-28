// Function.
import { isStringObject } from './is-string-object.func';
import { isStringType } from './is-string-type.func';
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsString } from '../type/is-string.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `string` type, not instance of `Object` and `String` or `object` type and instance of `String` and `Object`.
 * @param value Any `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `resultCallback`.
 * @returns A `boolean` indicating whether or not the `value` is a `string`.
 */
export const isString: IsString = (value: any, callback: ResultCallback = resultCallback): value is string =>
  callback(typeOf(value) === 'string' && (isStringObject(value) || isStringType(value)));
