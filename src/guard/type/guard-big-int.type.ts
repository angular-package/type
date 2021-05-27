import { ResultCallback } from '../../type/result-callback.type';
export type GuardBigInt = (value: bigint, callback?: ResultCallback) => value is bigint;
