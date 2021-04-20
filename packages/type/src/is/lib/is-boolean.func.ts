// Function.
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsBoolean } from '../type/is-boolean.type';
import { isBooleanObject } from './is-boolean-object.func';
import { isBooleanType } from './is-boolean-type.func';
/**
 * Checks if any `value` is a `boolean` type not instance of `Boolean` and `Object` or `object` type instance of `Boolean` and `Object`.
 * @param value Any `value` to check.
 * @returns A `boolean` indicating whether or not the `value` is a `boolean`.
 */
export const isBoolean: IsBoolean = (value: any): value is boolean =>
  typeOf(value) === 'boolean' &&
  (isBooleanObject(value) || isBooleanType(value));
