// Interface.
import { MinMax } from '../interface/min-max.interface';
// Type.
import { AnyString } from './any-string.type';
/**
 * A generic type `StringOfLength` that takes generic type variable `Min` and `Max` constrained by `number` type as length, and takes
 * generic type variable `Type` constrained by `AnyString` as the type by default `string` or an instance of `String`.
 */
export type StringOfLength<
  Min extends number,
  Max extends number,
  Type extends AnyString = string
> = Type & MinMax<Min, Max>;
