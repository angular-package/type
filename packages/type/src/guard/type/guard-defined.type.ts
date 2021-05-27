import { Defined } from '../../type/defined.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * guardDefined function type.
 */
export type GuardDefined = <Type>(value: Defined<Type>, callback?: ResultCallback) => value is Defined<Type>;
