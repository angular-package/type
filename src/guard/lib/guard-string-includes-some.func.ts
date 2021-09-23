// Function.
import { isStringIncludesSome } from '../../is/lib/is-string-includes-some.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { AnyString } from '../../type/any-string.type';
import { CallbackPayload } from '../../type/callback-payload.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be a `string` type or an instance of `String` that includes some of the specified words/sentences.
 * @param value The value of a generic type variable `Type` constrained by the `AnyString`, by default of the type captured from the
 * provided `value` to check against the `string` that contains some of the words/sentences from a given `includes`.
 * @param includes An `Array` of `string` as words/sentences to be case-sensitive searched for within the given `value`.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `string` type or an instance of `String` that
 * includes all of the specified words/sentences.
 * @angularpackage
 */
export const guardStringIncludesSome = <
  Type extends AnyString,
  Payload extends object = object
>(
  value: Type,
  includes: string[],
  callback: ResultCallback<
    Type,
    CallbackPayload<{ includes: typeof includes } & Payload>
  > = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Type =>
  isStringIncludesSome(value, includes, callback, payload);