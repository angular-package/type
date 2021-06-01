import { Never } from '../../../type/never.type';
import { ResultCallback } from '../../../type/result-callback.type';
export type IsNotNull = <Type>(value: Type, callback?: ResultCallback) => value is Never<null, Type>;
