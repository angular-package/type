import { Constructor } from '../../type/constructor.type';
export type IsInstance = <Obj>(value: any, instance: Constructor<Obj>) => value is Obj;
