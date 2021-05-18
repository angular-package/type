// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { Func } from '../../type/func.type';
import { IsFunction } from '../type/is-function.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `function` type, an instance of `Function` and `Object`.
 * @param value Any `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `resultCallback`.
 * @returns A `boolean` indicating whether or not the `value` is a `function`.
 */
export const isFunction: IsFunction = (value: any, callback: ResultCallback = resultCallback): value is Func =>
  callback(
    (
      typeOf(value) === 'function' &&
      typeof value === 'function' &&
      value instanceof Function === true &&
      value instanceof Object === true
    ) ?
      /class/.test(Function.prototype.toString.call(value).slice(0, 5)) === false
    : false,
    value
  );
