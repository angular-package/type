import { Func } from '../../../type/func.type';
import { Never } from '../../../type/never.type';
import { ResultCallback } from '../../../type/result-callback.type';
export type IsNotFunction = <Type>(value: Type, callback?: ResultCallback) => value is Never<Func, Type>;
