import { NUMBER } from './number.const';
import { STRING } from './string.const';
/**
 * typeof === 'symbol'
 * instanceof Boolean === false
 * instanceof Function === false
 * instanceof Number === false
 * instanceof Object === false
 * instanceof String === false
 * instanceof Symbol === false
 */
export const SYMBOL_NUMBER: any = Symbol(NUMBER);
export const SYMBOL_STRING: any = Symbol(STRING);
