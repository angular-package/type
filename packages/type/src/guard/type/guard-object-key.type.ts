import { ResultCallback } from '../../type/result-callback.type';
export type GuardObjectKey = <Obj extends object>(value: Obj, key: keyof Obj | (keyof Obj)[], callback?: ResultCallback) => value is Obj;


