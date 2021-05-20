import { Key } from '../../type/key.type';
import { ResultCallback } from '../../type/result-callback.type';
export type GuardObjectKey = <Obj extends object>(value: Obj, key: Key | Key[], callback?: ResultCallback) => value is Obj;
