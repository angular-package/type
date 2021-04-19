// Function.
import { isString } from './is-string.func';
import { isNumber } from './is-number.func';
import { isSymbol } from './is-symbol.func';
// Type.
import { IsKey } from '../type/is-key.type';
import { Key } from '../../type/key.type';

export const isKey: IsKey = (name: Key): boolean => isString(name) || isNumber(name) || isSymbol(name);
