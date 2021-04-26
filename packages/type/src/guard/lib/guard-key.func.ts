// Function.
import { isKey } from '../../is/lib/is-key.func';
// Type.
import { GuardKey } from '../type/guard-key.type';
import { Key } from '../../type/key.type';
/**
 * Guard the `value` to be one of the `string`, `number`, or `symbol`.
 * @param value A `Key` type `value` to guard.
 * @returns A `boolean` indicating whether or not the `value` is a `Key`.
 */
export const guardKey: GuardKey = (value: Key): value is Key => isKey(value);
