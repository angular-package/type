import { ResultCallback } from '../../type/result-callback.type';
export type GuardObject = <Obj>(value: Obj, callback?: ResultCallback) => value is Obj;
