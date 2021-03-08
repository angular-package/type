import { GuardPrimitive } from '../type/guard-primitive.type';
import { Primitives } from '../../type/primitives.type';
import { isPrimitive } from '../../is/lib/is-primitive.func';
/**
 * Guard the `value` to be a generic `Type` from one of the `Primitives`.
 * Use `isPrimitive()` function for check ONLY.
 * @param value A generic `Type` type value to guard.
 * @param type One of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'`, `'symbol'`, `'undefined'` to check `value`.
 */
export const guardPrimitive: GuardPrimitive = <Type>(value: Type, type: Primitives): value is Type => isPrimitive(value, type);
