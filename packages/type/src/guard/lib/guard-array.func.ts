import { isArray } from '../../is/lib/is-array.func';
import { GuardArray } from '../type/guard-array.type';
/**
 * Guard the `value` to be a generic `Array` `Type`.
 * Use `isArray()` function to check ONLY.
 * @param value Array generic type value to guard.
 * @returns boolean.
 */
export const guardArray: GuardArray = <Type>(value: Array<Type>): value is Array<Type> => isArray<Type>(value);
