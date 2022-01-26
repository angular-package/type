// Function.
import { isObject } from './is-object.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { Constructor } from '../../type/constructor.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is an instance of a given `constructor`.
 * @var Obj A generic type variable `Obj`, by default captured from the provided `constructor` indicates the type of generic type
 * `Constructor` and the type of `value` parameter via the return type `value is Obj`.
 * @var Payload The `Payload` generic type variable constrained by `object` indicates the type of optional parameter `payload` of the
 * supplied `callback` function and `payload` optional parameter of the `isInstance()` function from which it captures its value.
 * @param value The value of any type to be an instance of a given `constructor`.
 * @param constructor A `class` or `function` that specifies the type of constructor.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of generic type variable `Payload` with `constructor` under `ctor` name and optional properties from
 * the provided `payload`, to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is an instance of a given `constructor`.
 * @angularpackage
 */
export const isInstance = <Obj, Payload extends object>(
  value: any,
  constructor: Constructor<Obj>,
  callback: ResultCallback<
    Obj,
    { ctor: typeof constructor } & Payload
  > = resultCallback,
  payload?: Payload
): value is Obj =>
  callback(
    isObject(value) &&
      typeof constructor === 'function' &&
      constructor instanceof Function
      ? value instanceof constructor
      : false,
    value,
    { ...payload, ctor: constructor } as any
  );
