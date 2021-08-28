// Function.
import { isArray } from './is-array.func';
import { isObject } from './is-object.func';
import { resultCallback } from '../../lib/result-callback.func';
// Interface.
import { CallbackPayload } from '../../type/callback-payload.type';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `object`(by using the `isObject()`) with its keys of the `PropertyKey` by using `hasOwnProperty()` method
 * of `Object`.
 * @param value The `value` of any type to check against the `object` that contains its keys from the given `keys`.
 * @param keys An `Array` of property keys to check if the given `value` contains all of them.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape, with the provided `keys` and optional properties from the provided
 * `payload`, to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`
 * function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is an `object` with its keys from a given `keys`.
 * @angularpackage
 */
export const isObjectKeys = <
  Obj = object,
  Payload = object
>(
  value: any,
  keys: PropertyKey[],
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<{ keys?: typeof keys } & Payload>
): value is Obj =>
  callback(
    isObject(value) && isArray(keys)
    ? keys.every((key) => ({}.hasOwnProperty.call(value, key)))
    : false,
    value,
    { name: isObjectKeys.name, keys, ...payload } as any
  );
