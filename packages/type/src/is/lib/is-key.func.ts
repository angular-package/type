// Function.
import { isString } from './is-string.func';
import { isNumber } from './is-number.func';
import { isSymbol } from './is-symbol.func';
// Type.
import { IsKey } from '../type/is-key.type';

/**
 * Determines if any `value` is one of the string, number, or symbol type.
 * @param value Any value to check.
 * @returns A boolean indicating whether or not the value is one of the string, number or symbol type.
 */
export const isKey: IsKey = (value: any): boolean => isString(value) || isNumber(value) || isSymbol(value);
