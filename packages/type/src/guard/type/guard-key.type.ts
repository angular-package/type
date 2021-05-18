import { Key } from '../../type/key.type';
import { ResultCallback } from '../../type/result-callback.type';
export type GuardKey = (value: Key, callback?: ResultCallback) => boolean;
