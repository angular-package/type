import { ResultCallback } from '../../type/result-callback.type';
export type GuardObject = <Obj = object>(value: Obj, callback?: ResultCallback) => value is Obj;
