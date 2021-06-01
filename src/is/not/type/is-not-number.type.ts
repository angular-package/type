import { AnyNumber } from '../../../type/any-number.type';
import { Never } from '../../../type/never.type';
import { ResultCallback } from '../../../type/result-callback.type';
export type IsNotNumber = <Type>(value: Type, callback?: ResultCallback) => value is Never<AnyNumber, Type>;
