import { Key } from '../../type/key.type';
import { ResultCallback } from '../../type/result-callback.type';
export type IsObjectKeyIn = <Type = object>(value: any, key: Key | Key[], callback?: ResultCallback) => value is Type;
