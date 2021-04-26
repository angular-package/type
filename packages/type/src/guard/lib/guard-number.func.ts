// Function.
import { isNumber } from '../../is/lib/is-number.func';
// Type.
import { GuardNumber } from '../type/guard-number.type';
/**
 * Guard the `value` to be a `number`.
 * @param value A `number` type `value` to guard.
 * @returns A `boolean` indicating whether or not the `value` is a `number`.
 */
export const guardNumber: GuardNumber = (value: number): value is number => isNumber(value);
