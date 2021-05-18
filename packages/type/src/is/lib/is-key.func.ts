// Function.
import { isNumber } from './is-number.func';
import { isString } from './is-string.func';
import { isSymbol } from './is-symbol.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { IsKey } from '../type/is-key.type';
import { Key } from '../../type/key.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any `value` is one of the `string`, `number`, or `symbol`.
 * @param value Any `value` to check.
 * @param callback `ResultCallback` function to handle result before returns.
 * @callback `resultCallback`.
 * @returns A `boolean` indicating whether or not the `value` is a `Key`.
 */
export const isKey: IsKey = (value: any, callback: ResultCallback = resultCallback): value is Key =>
  callback(isString(value) || isNumber(value) || isSymbol(value), value);
