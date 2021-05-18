// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { IsClass } from '../type/is-class.type';
import { ResultCallback } from '../../type/result-callback.type';
// Default export.
export const isClass: IsClass = <Class>(value: any, callback: ResultCallback = resultCallback): value is Class =>
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
