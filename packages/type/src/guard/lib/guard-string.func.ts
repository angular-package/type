import { GuardString } from '../type/guard-string.type';
import { isString } from '../../is/lib/is-string.func';
/**
 * Guard the `value` to be a `string` type.
 * Use `isString()` function for check ONLY.
 * @param value String type value to guard.
 */
export const guardString: GuardString = (value: string): value is string => isString(value);
