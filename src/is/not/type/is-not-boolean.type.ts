import { AnyBoolean } from '../../../type/any-boolean.type';
import { Never } from '../../../type/never.type';
import { ResultCallback } from '../../../type/result-callback.type';
export type IsNotBoolean = <Type>(value: Type, callback?: ResultCallback) => value is Never<AnyBoolean, Type>;
