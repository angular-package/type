import { ResultCallback } from '../../type/result-callback.type';
export type IsObject = <Obj = object>(value: any, callback?: ResultCallback) => value is Obj;
