// Function.
import { isArray } from './is-array.func';
import { isString } from './is-string.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { AnyString } from '../../type/any-string.type';
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is a `string` type or an instance of `String` by using `isString()` that includes some of the specified
 * words/sentences.
 * @param value The value of any type to check against the `string` that `includes` some of the words/sentences.
 * @param includes An `Array` of `string` as words/sentences to be case-sensitive searched for within a given `value`.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the default `CallbackPayload` shape, with the `includes` and optional properties from the provided `payload`,
 * to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of `CallbackPayload` that is assigned to the `payload` of the supplied `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `string` type or an instance of `String` that
 * includes some of the specified words/sentences.
 * @angularpackage
 */
export const isStringIncludesSome = <
  Type extends AnyString = string,
  Payload extends object = object
>(
  value: any,
  includes: string[],
  callback: ResultCallback<
    any,
    CallbackPayload<{ includes: typeof includes } & Payload>
  > = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Type =>
  callback(
    isString(value)
    ? isArray(includes)
      ? includes.some((include) => value.valueOf().includes(include))
      : false
    : false,
    value,
    { ...payload, includes } as any
  );
