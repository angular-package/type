// Function.
import { isArray } from '../../is/lib/is-array.func';
// Type.
import { GuardArray } from '../type/guard-array.type';
/**
 * Guard the `array` value to be a generic `Array` of `Type`.
 * @param array A generic `Type` `Array` value to guard.
 * @returns A `boolean` indicating whether or not the `value` is an `Array` of `Type`.
 */
export const guardArray: GuardArray = <Type>(array: Array<Type>): array is Array<Type> => isArray<Type>(array);
