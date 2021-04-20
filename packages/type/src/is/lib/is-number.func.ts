// Function.
import { isNumberObject } from './is-number-object.func';
import { isNumberType } from './is-number-type.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsNumber } from '../type/is-number.type';
/**
 * Checks if any `value` is a `number` type not an instance of `Number` and `Object` or `object` type instance of `Number` and `Object`.
 * @param value Any value to check.
 * @returns A `boolean` indicating whether or not the `value` is a `number`.
 */
export const isNumber: IsNumber = (value: any): value is number =>
  typeOf(value) === 'number' &&
  isFinite(value) === true &&
  (isNumberObject(value) || isNumberType(value));
