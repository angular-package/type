import { ResultCallback } from '../../type/result-callback.type';
export type GuardBoolean = (value: boolean, callback?: ResultCallback) => value is boolean;
