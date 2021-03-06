import { Func } from '../../type/func.type';
export type GuardFunction = (func: Func) => func is Func;
