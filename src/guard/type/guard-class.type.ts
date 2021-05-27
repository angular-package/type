import { ResultCallback } from '../../type/result-callback.type';
export type GuardClass = <Class extends Function>(value: Class, callback?: ResultCallback) => value is Class;
