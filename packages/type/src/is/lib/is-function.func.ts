import { IsFunction } from '../type/is-function.type';
import { Func } from '../../type/func.type';
import { typeOf } from '../../lib/type-of.func';
/**
 * Checks if any `value` is a `'function'` type, instance of `Function` and `Object`.
 * @param value Any `value` to check if it's a `'function'` type, instance of `Function` and `Object`.
 * @returns boolean.
 */
export const isFunction: IsFunction = (value: any): value is Func =>
  typeOf(value) === 'function' &&
  typeof value === 'function' &&
  value instanceof Function === true &&
  value instanceof Object === true;
