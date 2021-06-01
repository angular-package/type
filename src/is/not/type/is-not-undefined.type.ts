import { Defined } from '../../../type/defined.type';
import { ResultCallback } from '../../../type/result-callback.type';
export type IsNotUndefined = <Type>(value: Type, callback?: ResultCallback) => value is Defined<Type>;
