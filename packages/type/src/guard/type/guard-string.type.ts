import { ResultCallback } from '../../type/result-callback.type';
export type GuardString = (value: string, callback?: ResultCallback) => value is string;
