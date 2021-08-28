// Function.
import { isObject } from './is-object.func';
import { resultCallback } from '../../lib/result-callback.func';
// Interface.
import { CallbackPayload } from '../../type/callback-payload.type';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `object`(by using the `isObject()`) with a key of the `PropertyKey` in it( or its prototype chain) by
 * using the `in` operator.
 * @param value The `value` of any type to check against the `object` that contains(or its prototype chain) key from the given `key`.
 * @param key A property key to check if the given `value` contains(or its prototype chain).
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape, with the provided `key` and optional properties from the provided `payload`,
 * to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`
 * function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is an `object` that contains(or its prototype chain)
 * given `key`.
 * @angularpackage
 */
export const isObjectKeyIn = <Obj = object, Payload extends object = object>(
  value: any,
  key: PropertyKey,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<{ key: typeof key } & Payload>
): value is Obj =>
  callback(isObject(value) ? key in value : false, value, {
    name: isObjectKeyIn.name,
    key,
    ...payload,
  } as any);
