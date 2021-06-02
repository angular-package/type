// Function.
import { isClass } from './is-class.func';
import { isFunction } from './is-function.func';
import { isObject } from './is-object.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { Constructor } from '../../type/constructor.type';
import { IsInstance } from '../type/is-instance.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `object` of a generic `Obj` type and an `instance` of `Constructor` type.
 * @param value Any `value` to be an instance of the `constructor`.
 * @param constructor A class or function that specifies the type of the `constructor`.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns  A `boolean` indicating whether or not the `value` is an instance of a generic `Obj`.
 */
export const isInstance: IsInstance = <Obj>(
  value: any,
  constructor: Constructor<Obj>,
  callback: ResultCallback = resultCallback
): value is Obj =>
  callback(
    isObject<Obj>(value)
      ? isClass<Obj>(constructor) || isFunction(constructor)
        ? value instanceof constructor === true
        : false
      : false,
    value
  );
