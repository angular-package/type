import { Key } from '../../type/key.type';
import { ResultCallback } from '../../type/result-callback.type';
export type IsKey = (value: any, callback?: ResultCallback) => value is Key;
