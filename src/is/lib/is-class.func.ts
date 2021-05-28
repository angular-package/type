// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsClass } from '../type/is-class.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is a `function` type, an instance of `Function` and `Object` as a generic `Class` type of `class`.
 * @param value Any `value` to check.
 * @param callback A `ResultCallback` function to handle result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a `class`.
 */
export const isClass: IsClass = <Class = Function>(value: any, callback: ResultCallback = resultCallback): value is Class =>
  callback(
    (
      typeOf(value) === 'function' &&
      typeof value === 'function' &&
      value instanceof Function === true &&
      value instanceof Object === true
    ) ?
      /class/.test(Function.prototype.toString.call(value).slice(0, 5))
      : false,
    value
  );
