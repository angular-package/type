// Function.
import { errorCallback } from '../../lib/error-callback.func';
import { isNumberObject } from './is-number-object.func';
import { isNumberType } from './is-number-type.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsNumber } from '../type/is-number.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `number` type not an instance of `Number` and `Object` or `object` type instance of `Number` and `Object`.
 * @param value Any value to check.
 * @returns A `boolean` indicating whether or not the `value` is a `number`.
 */
export const isNumber: IsNumber = (value: any, callback: ResultCallback = errorCallback): value is number =>
  callback(typeOf(value) === 'number' && isFinite(value) === true && (isNumberType(value) || isNumberObject(value)));
