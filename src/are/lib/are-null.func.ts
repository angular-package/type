// Function.
import { isArray } from '../../is/lib/is-array.func';
import { isFunction } from '../../is/lib/is-function.func';
import { isNull } from '../../is/lib/is-null.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { CallbackPayload } from '../../type/callback-payload.type';
import { ForEachCallback } from '../../type/foreach-callback.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if the values are `null` by using `every()`, `forEach()` and `some()` methods of the returned object.
 * @param values A rest parameter of `any` type to check its elements against `null`.
 * @returns The return value is an `object` with `every()`, `some()` and `forEach()` as a methods of checking supplied `values`.
 * @angularpackage
 */
export const areNull = (...values: any[]) => {
  return {
    /**
     * Checks if every of the provided `values` of `areNull()` is `null`.
     * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of
     * this check, and `payload` of the default `CallbackPayload` shape with optional properties from the provided `payload`, to handle
     * them before the `result` return. By default, it uses `resultCallback()` function.
     * @param payload An optional `object` of `CallbackPayload` that is assigned to the `payload` of the supplied `callback` function.
     * @returns The return value is a `boolean` indicating whether the provided `values` of `areNull()` are `null`.
     */
    every: <Payload extends object>(
      callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
      payload?: CallbackPayload<Payload>
    ): boolean =>
      callback(
        values.every((value) => isNull(value)),
        values,
        payload
      ),

    /**
     * The `forEach()` method executes a provided callback function once for each element of the supplied `values` of `areNull()`.
     * @param forEachCallback A callback `function` of `ForEachCallback` type with parameters, the `value` that has been checked, the
     * `result` of this check, `index` of each element, the provided `values` and `payload` of the default `CallbackPayload` shape with
     * optional properties from the provided `payload`, to handle them before the `result` return.
     * @param payload An optional `object` of `CallbackPayload` that is assigned to the `payload` of the supplied `callback` function.
     * @returns The return value is void.
     */
    forEach: <Payload extends object>(
      forEachCallback: ForEachCallback<any, CallbackPayload<Payload>>,
      payload?: CallbackPayload<Payload>
    ) => {
      if (isArray(values) && isFunction(forEachCallback)) {
        values.forEach((value, index) =>
          forEachCallback(isNull(value), value, index, values, payload)
        );
      }
    },

    /**
     * Checks if some of the provided `values` of `areNull()` are `null`.
     * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of
     * this check, and `payload` of the default `CallbackPayload` shape with optional properties from the provided `payload`, to handle
     * them before the `result` return. By default, it uses `resultCallback()` function.
     * @param payload An optional `object` of `CallbackPayload` that is assigned to the `payload` of the supplied `callback` function.
     * @returns The return value is a `boolean` indicating whether some of the provided `values` of `areNull()` are `null`.
     */
    some: <Payload extends object>(
      callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
      payload?: CallbackPayload<Payload>
    ): boolean =>
      callback(
        isArray(values) ? values.some((value) => isNull(value)) : false,
        values,
        payload
      ),
  };
};
