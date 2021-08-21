// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Interface.
import { CallbackPayload } from '../../../interface/callback-payload.interface';
// Type.
import { Defined } from '../../../type/defined.type';
import { ResultCallback } from '../../../type/result-callback.type';
/**
 * Checks if the `value` of a generic `Type` `value` is not an `undefined` type and not equal to `undefined`.
 * @param value The `value` of a generic `Type`, by default of type captured from the provided `value` to check.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether the `value` is not `undefined`.
 */
export const isNotUndefined = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is Defined<Type> =>
  callback(
    typeOf(value) !== 'undefined' &&
    typeof value !== 'undefined' &&
    value !== undefined,
    {
      ...{ name: isNotUndefined.name, value },
      ...payload,
    } as Payload
  );
