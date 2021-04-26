// Function.
import { isPrimitive } from '../../is/lib/is-primitive.func';
// Type.
import { GuardPrimitive } from '../type/guard-primitive.type';
import { Primitive } from '../../type/primitive.type';
import { Primitives } from '../../type/primitives.type';
/**
 * Guard the `value` to be the `Primitive` from a `type` of the `Primitives`.
 * @param value A `Primitive` type `value` to guard.
 * @param type A `string` type from the `Primitives` to check the `value`.
 * @returns A `boolean` indicating whether or not the `value` is the `Primitive` from the `type`.
 */
export const guardPrimitive: GuardPrimitive =
  <Type extends Primitive>(value: Type, type: Primitives): value is Type => isPrimitive<Type>(value, type);
