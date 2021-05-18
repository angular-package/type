import { ResultCallback } from '../../type/result-callback.type';
export type GuardObject = <Obj extends object>(value: Obj, callback?: ResultCallback) => value is Obj;
