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
 * Checks if any `value` is an `object` of a generic type `Obj` with some of its keys or some groups of its keys of the `PropertyKey`
 * type.
 * @param value The `value` of any type to check against the `object` that contains some of its keys or some groups of its keys from
 * the given `keys`.
 * @param keys An `Array` of property key or an array of property keys to check if the given `value` contains some of them or some groups
 * of them.
 * @param callback A callback `function` of `ResultCallback` type with `payload` parameter of the default `CallbackPayload` shape and the
 * provided `keys` to handle the `result` and `payload` of the check before the `result` return. By default it uses `resultCallback()`
 * function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`.
 * @returns The return value is a `boolean` indicating whether the provided `value` is an `object` with some of its keys or some groups of
 * its keys.
 * @angularpackage
 */
export const isObjectKeys = <Obj = object, Payload extends object = object>(
  value: any,
  keys: (PropertyKey | Array<PropertyKey>)[],
  callback: ResultCallback<
    CallbackPayload & { keys: typeof keys } & Payload
  > = resultCallback,
  payload?: Payload
): value is Obj =>
  callback(
    isObject(value) && isArray(keys)
      ? keys.some((someKey) =>
        isArray(someKey)
          ? someKey.every((key) =>
            isKey(key) ? {}.hasOwnProperty.call(value, key) === true : false
          )
          : isKey(someKey)
            ? {}.hasOwnProperty.call(value, someKey) === true
            : false
      )
      : false,
    {
      ...{
        keys,
        name: isObjectKeys.name,
        value,
      },
      ...payload,
    } as CallbackPayload & { keys: typeof keys } & Payload
  );
