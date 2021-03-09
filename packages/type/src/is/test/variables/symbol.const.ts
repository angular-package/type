import { NUMBER } from './number.const';
import { STRING } from './string.const';

/**
 * @example https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
 */
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
