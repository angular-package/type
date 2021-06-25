import { ResultCallback } from '../../type/result-callback.type';
import { StringOfLength } from '../../type/string-of-length.type';
export type IsStringLength = <Min extends number, Max extends number>(
  value: any,
  min: Min,
  max: Max,
  callback?: ResultCallback
) => value is StringOfLength<Min, Max>;
