import { ResultCallback } from '../../type/result-callback.type';
export type GuardArray = <Type>(value: Array<Type>, callback?: ResultCallback) => value is Array<Type>;
