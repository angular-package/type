import { isType } from '../../is/lib/is-type.func';
import { GuardType } from '../type/guard-type.type';
import { Types } from '../../type/types.type';
/**
 * Guard the `value` to be a generic `Type` type from one of the `Types` type.
 * Use `isType()` function for check ONLY.
 * @param value A generic `Type` value to guard.
 * @param type Constructor generic `Type`, `'function'`, `'object'` or one of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'`, `'symbol'`, `'undefined'` to check `value`.
 */
export const guardType: GuardType = <Type>(value: Type, type: Types<Type>): value is Type => isType<Type>(value, type);
