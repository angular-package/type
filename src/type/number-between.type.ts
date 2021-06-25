import { AnyNumber } from './any-number.type';
/**
 * A `number` type or an instance of a `Number` with the specified range.
 * Generic variables `Min` and `Max` are constrained with the `number` type.
 */
export type NumberBetween<Min extends number, Max extends number> =
  AnyNumber & {
    min: Min;
    max: Max;
  };
