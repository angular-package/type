import { ResultCallback } from '../../type/result-callback.type';
export type GuardNumber = (value: number, callback?: ResultCallback) => value is number;
