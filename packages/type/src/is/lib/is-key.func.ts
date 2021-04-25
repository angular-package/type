// Function.
import { isNumber } from './is-number.func';
import { isString } from './is-string.func';
import { isSymbol } from './is-symbol.func';
// Type.
import { IsKey } from '../type/is-key.type';
import { Key } from '../../type/key.type';
/**
 * Checks if any `value` is one of the `string`, `number`, or `symbol`.
 * @param value Any `value` to check.
 * @returns A `boolean` indicating whether or not the `value` is a `Key` type.
 */
export const isKey: IsKey = (value: any): value is Key => isNumber(value) || isString(value) || isSymbol(value);
