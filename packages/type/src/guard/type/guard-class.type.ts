import { ResultCallback } from '../../type/result-callback.type';
export type GuardClass = <Class>(value: Class, callback?: ResultCallback) => value is Class;
