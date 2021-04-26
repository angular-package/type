// Function.
import { isObject } from '../../is/lib/is-object.func';
// Type.
import { GuardObject } from '../type/guard-object.type';
/**
 * Guard the `value` to be an `object` of a generic `Obj` type.
 * @param value A generic `Obj` type value to guard.
 * @returns A `boolean` indicating whether or not the `value` is an `object` of a generic `Obj`.
 */
export const guardObject: GuardObject = <Obj extends object>(value: Obj): value is Obj => isObject<Obj>(value);
