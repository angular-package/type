// Function.
import { isArray } from './is-array.func';
import { isObject } from './is-object.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is an `object`(by using the `isObject()`) with its keys by using `hasOwnProperty()` method of `Object`.
 * @param value The value of any type to check against an `object` that contains its keys from given `keys`.
 * @param keys An `Array` of property keys to check if a given `value` contains all of them.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape, with the provided `keys` and optional properties from the provided
 * `payload`, to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of `CallbackPayload` that is assigned to the `payload` of the supplied `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is an `object` with its `keys`.
 * @angularpackage
 */
export const isObjectKeys = <Obj = object, Payload extends object = object>(
  value: any,
  keys: PropertyKey[],
  callback: ResultCallback<
    any,
    CallbackPayload<{ keys: typeof keys } & Payload>
  > = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Obj =>
  callback(
    isObject(value) && isArray(keys)
    ? keys.every((key) => ({}.hasOwnProperty.call(value, key)))
    : false,
    value,
    { ...payload, keys } as any
  );
