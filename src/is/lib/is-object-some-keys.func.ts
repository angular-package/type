// Function.
import { isArray } from './is-array.func';
import { isObject } from './is-object.func';
import { resultCallback } from '../../lib/result-callback.func';
// Interface.
import { CallbackPayload } from '../../type/callback-payload.type';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is an `object` type(by using `isObject()`) with some of its keys or some groups of its keys of the `PropertyKey`
 * type.
 * @param value The `value` of any type to check against the `object` that contains some of its keys or some groups of its keys from
 * the given `keys`.
 * @param keys An `Array` of property key or an array of property keys to check if the given `value` contains some of them or some groups
 * of them.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape, with the provided `keys` and optional properties from the provided
 * `payload`, to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`
 * function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is an `object` with some of its keys or some groups of
 * its keys from a given `keys`.
 * @angularpackage
 */
export const isObjectSomeKeys = <
  Obj = object,
  Payload extends CallbackPayload = object
>(
  value: any,
  keys: (PropertyKey | Array<PropertyKey>)[],
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<{ keys?: typeof keys } & Payload>
): value is Obj =>
  callback(
    isObject(value) && isArray(keys)
    ? keys.some((someKey) =>
        isArray(someKey)
          ? someKey.every((everyKey) =>
              ({}.hasOwnProperty.call(value, everyKey))
            )
          : {}.hasOwnProperty.call(value, someKey) === true
      )
    : false,
    value,
    { name: isObjectSomeKeys.name, keys, ...payload } as any
  );
