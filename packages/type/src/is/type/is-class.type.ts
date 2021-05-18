import { ResultCallback } from '../../type/result-callback.type';
export type IsClass = <Class>(value: any, callback?: ResultCallback) => value is Class;
