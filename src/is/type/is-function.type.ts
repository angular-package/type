import { Func } from '../../type/func.type';
import { ResultCallback } from '../../type/result-callback.type';
export type IsFunction = (value: any, callback?: ResultCallback) => value is Func;
