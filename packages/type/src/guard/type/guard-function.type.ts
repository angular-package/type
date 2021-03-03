import { Func } from '../../lib/func.type';
export type GuardFunction = (func: Func) => func is Func;
