// Function.
import { isPrimitive } from '../../is/lib/is-primitive.func';
// Type.
import { GuardPrimitive } from '../type/guard-primitive.type';
import { Primitive } from '../../type/primitive.type';
import { Primitives } from '../../type/primitives.type';
/**
 * Guard the `value` to be the `Type` from the `Primitives`.
 * @param value A generic `Type` `value` to guard.
 * @param type One of the `Primitives` to check the `value`.
 * @returns A `boolean` indicating whether or not the `value` is the `Type` from the `Primitives`.
 */
export const guardPrimitive: GuardPrimitive = <Type extends Primitive>(value: Type, type: Primitives): value is Type =>
  isPrimitive<Type>(value, type);
