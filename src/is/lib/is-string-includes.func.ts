// Function.
import { isArray } from './is-array.func';
import { isString } from './is-string.func';
import { resultCallback } from '../../lib/result-callback.func';
// Interface.
import { CallbackPayload } from '../../type/callback-payload.type';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `string` type or an instance of `String`(by using `isString()`) that includes all of the specified words.
 * @param value The `value` of any type to check against the string that contains words from the given `includes`.
 * @param includes An `Array` of `string` as words to be case-sensitive searched for within the given `value`.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape, with the `includes` and optional properties from the provided `payload`,
 * to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback`
 * function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `string` type or an instance of `String` that
 * includes all of the specified words.
 * @angularpackage
 */
export const isStringIncludes = <Payload extends object>(
  value: any,
  includes: string[],
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<{ includes?: typeof includes } & Payload>
): value is string =>
  callback(
    isString(value)
    ? isArray(includes)
      ? includes.every((include) => value.valueOf().includes(include))
      : false
    : false,
    value,
    { name: isStringIncludes.name, includes, ...payload, } as any
  );
