import { Constructor } from '../../type/constructor.type';
import { ResultCallback } from '../../type/result-callback.type';
export type IsInstance = <Obj>(value: any, instance: Constructor<Obj>, callback?: ResultCallback) => value is Obj;
