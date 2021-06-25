import { NumberBetween } from '../../type/number-between.type';
import { ResultCallback } from '../../type/result-callback.type';
export type IsNumberBetween = <Min extends number, Max extends number>(
  value: any,
  min: Min,
  max: Max,
  callback?: ResultCallback
) => value is NumberBetween<Min, Max>;
