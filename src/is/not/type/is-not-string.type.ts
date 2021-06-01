import { AnyString } from '../../../type/any-string.type';
import { Never } from '../../../type/never.type';
import { ResultCallback } from '../../../type/result-callback.type';
export type IsNotString = <Type>(value: Type, callback?: ResultCallback) => value is Never<AnyString, Type>;
