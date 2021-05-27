import { Constructor } from '../../type/constructor.type';
import { ResultCallback } from '../../type/result-callback.type';
export type GuardInstance = <Obj extends object>(value: Obj, instance: Constructor<Obj>, callback?: ResultCallback) => value is Obj;
