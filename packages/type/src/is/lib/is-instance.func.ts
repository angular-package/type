// Function.
import { isFunction } from './is-function.func';
import { isObject } from './is-object.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { Constructor } from '../../type/constructor.type';
import { IsInstance } from '../type/is-instance.type';
import { ResultCallback } from '../../type/result-callback.type';
import { isClass } from './is-class.func';
/**
 * Checks if any `value` is an `object` of a generic `Obj` type equal to an `instance` of `Constructor` type.
 * @param value Any `value` to compare with the `instance`.
 * @param className A generic `Obj` `Constructor` type to create an `instance` to compare with the `value`.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `resultCallback`.
 * @returns  A `boolean` indicating whether or not the `value` is an `instance` of a generic `Obj`.
 */
export const isInstance: IsInstance = <Obj>(
    value: any,
    className: Constructor<Obj>,
    callback: ResultCallback = resultCallback
  ): value is Obj =>
    callback(
      isObject<Obj>(value) ?
        isClass(className) ?
          value instanceof className === true
        : false
      : false,
      value
    );
