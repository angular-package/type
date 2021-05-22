import { Key } from '../../type/key.type';
import { ResultCallback } from '../../type/result-callback.type';
export type IsObjectKey = <Type = object>(value: any, key: Key | Key[], callback?: ResultCallback) => value is Type;
