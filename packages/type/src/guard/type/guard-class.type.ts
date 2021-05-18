import { Func } from '../../type/func.type';
import { ResultCallback } from '../../type/result-callback.type';
export type GuardClass = (value: Func, callback?: ResultCallback) => value is Func;
