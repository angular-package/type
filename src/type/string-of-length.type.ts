import { AnyString } from './any-string.type';
/**
 * A `string` type or an instance of a `String` with its specified minimum and maximum length.
 * Generic variables `Min` and `Max` are constrained with the `number` type.
 */
export type StringOfLength<Min extends number, Max extends number> =
  AnyString & {
    min: Min;
    max: Max;
  };
