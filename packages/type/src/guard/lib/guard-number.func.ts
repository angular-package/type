import { isNumber } from '../../is/lib/is-number.func';
import { GuardNumber } from '../type/guard-number.type';
/**
 * Guard the `value` to be a `number` type.
 * Use `isNumber()` function for check ONLY.
 * @param value Type `number` value to guard.
 * @returns boolean
 */
export const guardNumber: GuardNumber = (value: number): value is number => isNumber(value);
