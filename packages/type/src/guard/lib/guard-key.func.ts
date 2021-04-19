// Function.
import { isNumber } from '../../is/lib/is-number.func';
import { isString } from '../../is/lib/is-string.func';
import { isSymbol } from '../../is/lib/is-symbol.func';
// Type.
import { GuardKey } from '../type/guard-key.type';
import { Key } from '../../type/key.type';

/**
 * Guard the `value` of `Key type to be one of the `string`, `number`, or `symbol` type.
 * @param value A generic `Key` type `value` to guard.
 * @returns A `boolean` indicating whether or not the `value` is one of the `string`, `number` or `symbol` type.
 */
export const guardKey: GuardKey = (value: Key): boolean => isString(value) || isNumber(value) || isSymbol(value);
