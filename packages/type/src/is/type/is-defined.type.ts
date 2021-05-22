import { Defined } from '../../type/defined.type';
import { ResultCallback } from '../../type/result-callback.type';
export type IsDefined = <Type>(value: unknown, callback?: ResultCallback) => value is Defined<Type>;
