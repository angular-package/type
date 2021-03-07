import { Constructor } from '../../type/constructor.type';
export type IsClass = <Obj>(value: any, type: Constructor<Obj>) => value is Obj;
