// Function.
import { typeOf } from '../../lib/type-of.func';
// Type.
import { Func } from '../../type/func.type';
import { IsFunction } from '../type/is-function.type';
/**
 * Checks if any `value` is a `function` type, an instance `Function` and `Object`.
 * @param value Any `value` to check.
 * @returns A `boolean` indicating whether or not the `value` is a `function`.
 */
export const isFunction: IsFunction = (value: any): value is Func =>
  typeOf(value) === 'function' &&
  typeof value === 'function' &&
  value instanceof Function === true &&
  value instanceof Object === true;
