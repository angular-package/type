// Function.
import { isObjectKeys } from '../../is/lib/is-object-keys.func';
// Type.
import { GuardObjectKeys } from '../type/guard-object-keys.type';
/**
 * Guard the value to be an `object` of a generic `Type` with some of its own specified `keys`.
 * @param value An object of a generic `Obj` type that contains the `keys`, by default of type detected from the `value` to guard.
 * @param keys A rest parameter single key of `Obj` or an array of keys of `Obj`, as the name of the property that the `value` contains.
 * @returns A `boolean` indicating whether or not the `value` is an `object` with some of its own specified `keys`.
 */
export const guardObjectKeys: GuardObjectKeys = <Obj extends object>(
  value: Obj,
  ...keys: (keyof Obj | Array<keyof Obj>)[]
): value is Obj => isObjectKeys<Obj>(value, ...keys);
