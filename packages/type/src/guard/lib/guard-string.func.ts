// Function.
import { isString } from '../../is/lib/is-string.func';
// Type.
import { GuardString } from '../type/guard-string.type';
/**
 * Guard the `value` to be a `string`.
 * @param value A `string` type `value` to guard.
 * @returns A `boolean` indicating whether or not the `value` is a `string`.
 */
export const guardString: GuardString = (value: string): value is string => isString(value);
