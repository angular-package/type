// Function.
import { isArray } from './is-array.func';
import { isKey } from './is-key.func';
import { isObject } from './is-object.func';
import { resultCallback } from '../../lib/result-callback.func';
// Interface.
import { CallbackPayload } from '../../interface/callback-payload.interface';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `object` with a key or group of keys of the `PropertyKey` in it or its prototype chain by using
 * the `in` operator.
 * @param value The `value` of any type to check against the `object` that contains(or its prototype chain) key or group of keys from
 * the given `key`.
 * @param key A property key or an array of property keys to check if the given `value` contains(or its prototype chain) all of them.
 * @param callback A callback `function` of `ResultCallback` type with `payload` parameter of the default `CallbackPayload` shape and the
 * provided `key` to handle the `result` and `payload` of the check before the `result` return. By default it uses `resultCallback()`
 * function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`.
 * @returns The return value is a `boolean` indicating whether the provided `value` is an `object` that contains(or its prototype chain)
 * provided keys.
 * @angularpackage
 */
export const isObjectKeyIn = <Obj = object, Payload extends object = object>(
  value: any,
  key: PropertyKey | PropertyKey[],
  callback: ResultCallback<
    CallbackPayload & { key: typeof key } & Payload
  > = resultCallback,
  payload?: Payload
): value is Obj =>
  callback(
    isObject(value)
      ? isArray(key)
        ? key.every((k) => (isKey(k) ? k in value : false))
        : isKey(key)
        ? key in value
        : false
      : false,
    {
      ...{
        key,
        name: isObjectKeyIn.name,
        value,
      },
      ...payload,
    } as CallbackPayload & { key: typeof key } & Payload
  );
