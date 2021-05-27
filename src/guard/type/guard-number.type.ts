import { ResultCallback } from '../../type/result-callback.type';
import { AnyNumber } from '../../type/any-number.type';
export type GuardNumber = <N extends AnyNumber>(value: N, callback?: ResultCallback) => value is N;
