// Function.
import { isNumberObject } from './is-number-object.func';
import { isNumberType } from './is-number-type.func';
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsNumber } from '../type/is-number.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `number` type not an instance of `Number` and `Object` or `object` type instance of `Number` and `Object`.
 * @param value Any `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `resultCallback`.
 * @returns A `boolean` indicating whether or not the `value` is a `number` type or `Number` object.
 */
export const isNumber: IsNumber = (value: any, callback: ResultCallback = resultCallback): value is number =>
  callback(typeOf(value) === 'number' && isFinite(value) === true && (isNumberType(value) || isNumberObject(value)), value);
