import { STRING } from './string.const';

/**
 * typeof === 'function'
 * instanceof Class === false
 * instanceof Function === true
 * instanceof Object === true
 */
export class Class {
  x = 5;
  y = STRING;
}

/**
 * typeof === 'object'
 * instanceof Class === true
 * instanceof Function === false
 * instanceof Object === true
 */
export const CLASS = new Class();
