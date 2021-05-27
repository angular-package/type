import { ResultCallback } from '../../type/result-callback.type';
export type GuardUndefined = (value: undefined, callback?: ResultCallback) => value is undefined;
