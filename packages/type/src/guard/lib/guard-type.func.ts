// Function.
import { isType } from '../../is/lib/is-type.func';
// Type.
import { GuardType } from '../type/guard-type.type';
import { Type } from '../../type/type.type';
import { Types } from '../../type/types.type';
/**
 * Guard the `value` to be the `Type` from a `type` of the `Types`.
 * @param value A `Type` `value` to guard with the `type`.
 * @param type A `string` or generic `Constructor` type from the `Types` to check the `value`.
 * @returns A `boolean` indicating whether or not the `value` is a type from the `Types`.
 */
export const guardType: GuardType = <T extends Type>(value: T, type: Types<T>): value is T  => isType<T>(value, type);
