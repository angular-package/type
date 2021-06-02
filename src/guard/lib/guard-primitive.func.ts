// Function.
import { isPrimitive } from '../../is/lib/is-primitive.func';
// Type.
import { GuardPrimitive } from '../type/guard-primitive.type';
import { Primitive } from '../../type/primitive.type';
import { Primitives } from '../../type/primitives.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guard the `value` to be the `Primitive` from a `type` of the `Primitives`.
 * @param value A `Primitive` type `value`, by default of a generic `Type` detected from the `value` to guard.
 * @param type A `string` type from the `Primitives` to check the `value`.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is the `Primitive` from the `type`.
 */
export const guardPrimitive: GuardPrimitive = <Type extends Primitive>(
  value: Type,
  type: Primitives,
  callback?: ResultCallback
): value is Type => isPrimitive<Type>(value, type, callback);
