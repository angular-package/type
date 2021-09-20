// Type.
import { AnyNumber } from './any-number.type';
// Interface.
import { MinMax } from '../interface/min-max.interface';
/**
 * A generic type `NumberBetween` that takes generic type variable `Min` and `Max` constrained by `number` type as range, and takes generic
 * type variable `Type` constrained by `AnyNumber` as the type by default `number` or an instance of `Number`.
 */
export type NumberBetween<
  Min extends number,
  Max extends number,
  Type extends AnyNumber = number
> = Type & MinMax<Min, Max>;
