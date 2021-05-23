import { ResultCallback } from '../../type/result-callback.type';
export type GuardObjectKey = <Obj>(value: Obj, key: keyof Obj | (keyof Obj)[], callback?: ResultCallback) => value is Obj;


