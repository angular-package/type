// Function.
import { isStringLength } from '../../is';
// Interface.
import { CallbackPayload } from '../../type/callback-payload.type';
import { MinMax } from '../../interface/min-max.interface';
// Type.
import { AnyString } from '../../type/any-string.type';
import { ResultCallback } from '../../type/result-callback.type';
import { StringOfLength } from '../../type/string-of-length.type';
/**
 * Guards the value to be a `string` of a length between the specified range.
 * @param value The value of a generic type variable `Type` constrained by `AnyString`, by default of the type captured from the
 * provided `value` to guard.
 * @param length An `object` of optional minimum and a maximum `length` of the given `value`.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload An optional `object` of `CallbackPayload<Payload>` that is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is a `string` type or an instance of `String` of a length between
 * the specified range.
 */
export const guardStringLength = <
  Type extends AnyString,
  Min extends number,
  Max extends number,
  Payload extends object = object
>(
  value: Type,
  length: MinMax<Min, Max>,
  callback?: ResultCallback<Type, CallbackPayload<MinMax<Min, Max> & Payload>>,
  payload?: CallbackPayload<Payload>
): value is StringOfLength<Min, Max, Type> =>
  isStringLength(value, length, callback, payload);
