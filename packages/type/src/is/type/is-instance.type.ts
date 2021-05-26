import { Constructor } from '../../type/constructor.type';
import { ResultCallback } from '../../type/result-callback.type';
export type IsInstance = <Class = Function>(value: any, instance: Constructor<Class>, callback?: ResultCallback) => value is Constructor<Class>;
