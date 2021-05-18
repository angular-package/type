import { AnyString } from '../../type/any-string.type';
import { ResultCallback } from '../../type/result-callback.type';
export type GuardString = <S extends AnyString>(value: S, callback?: ResultCallback) => value is S;
