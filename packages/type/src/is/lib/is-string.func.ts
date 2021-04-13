import { errorCallback } from '../../lib/error-callback.func';
import { isStringObject } from './is-string-object.func';
import { isStringType } from './is-string-type.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsString } from '../type/is-string.type';
import { ResultCallback } from '../../type/result-callback.type';

/**
 * Checks if any `value` is a `'string'` type, not instance of `Object` and `String`
 * or `'object'` type and instance of `String` and `Object`.
 * Use the`guardString()` function to type-guard `string`  also.
 * @param value Any value to check if it's a `'string'` type, not an instance of `Object` and `String`
 * or `'object'` type and instance of `String` and `Object`.
 * @param callback ResultCallback function to handle result before return.
 * @returns boolean.
 */
export const isString: IsString = (value: any, callback: ResultCallback = errorCallback): value is string =>
  callback(typeOf(value) === 'string' && (isStringObject(value) || isStringType(value)));
