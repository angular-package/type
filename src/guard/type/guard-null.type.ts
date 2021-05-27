import { ResultCallback } from '../../type/result-callback.type';
export type GuardNull = (value: null, callback?: ResultCallback) => value is null;
