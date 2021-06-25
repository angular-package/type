// Function.
import { isNumberObject } from './is-number-object.func';
import { isNumberType } from './is-number-type.func';
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { NumberBetween } from '../../type/number-between.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is a `number` type, not instance of `Object` and `Number` or `object` type and instance of `Number` and `Object`,
 * in the specified range.
 * @param value Any `value` to check.
 * @param min A `number` of the minimum range of the provided `value`.
 * @param max A `number` of the maximum range of the provided `value`.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a `number` type or `Number` instance in the specified range.
 */
export const isNumberBetween = <Min extends number, Max extends number>(
  value: any,
  min: Min,
  max: Max,
  callback: ResultCallback = resultCallback
): value is NumberBetween<Min, Max> => {
  return callback(
    typeOf(value) === 'number' &&
      ((isNumberType(value) ? value >= min && value <= max : false) ||
        (isNumberObject(value)
          ? value.valueOf() >= min && value.valueOf() <= max
          : false)),
    value
  );
};
