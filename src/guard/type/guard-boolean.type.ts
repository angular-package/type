import { AnyBoolean } from '../../type/any-boolean.type';
import { ResultCallback } from '../../type/result-callback.type';
export type GuardBoolean = <B extends AnyBoolean>(value: B, callback?: ResultCallback) => value is B;
