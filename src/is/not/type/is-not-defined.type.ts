import { ResultCallback } from '../../../type/result-callback.type';
import { Undefined } from '../../../type/undefined.type';
export type IsNotDefined = <Type>(value: Type, callback?: ResultCallback) => value is Undefined<Type>;
