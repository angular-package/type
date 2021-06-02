// Function.
import { isNumberType } from './is-number-type.func';
import { isStringType } from './is-string-type.func';
import { isSymbol } from './is-symbol.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { IsKey } from '../type/is-key.type';
import { Key } from '../../type/key.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is one of the `string`, `number`, or `symbol`.
 * @param value Any `value` to check.
 * @param callback A `ResultCallback` function to handle the result before returns.
 * @returns A `boolean` indicating whether or not the `value` is a `Key`.
 */
export const isKey: IsKey = (
  value: any,
  callback: ResultCallback = resultCallback
): value is Key =>
  callback(
    isStringType(value) || isNumberType(value) || isSymbol(value),
    value
  );
