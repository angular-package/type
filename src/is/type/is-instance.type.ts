import { Constructor } from '../../type/constructor.type';
import { ResultCallback } from '../../type/result-callback.type';
export type IsInstance = <Obj>(
  value: any,
  constructor: Constructor<Obj>,
  callback?: ResultCallback
) => value is Obj;
