// Function.
import { isBooleanObject } from './is-boolean-object.func';
import { isBooleanType } from './is-boolean-type.func';
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsBoolean } from '../type/is-boolean.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `boolean` type not instance of `Boolean` and `Object` or `object` type instance of `Boolean` and `Object`.
 * @param value Any `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `resultCallback`.
 * @returns A `boolean` indicating whether or not the `value` is a `boolean`.
 */
export const isBoolean: IsBoolean = (value: any, callback: ResultCallback = resultCallback): value is boolean =>
  callback(typeOf(value) === 'boolean' && (isBooleanType(value) || isBooleanObject(value)));
