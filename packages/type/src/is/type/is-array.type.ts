import { ResultCallback } from '../../type/result-callback.type';
export type IsArray = <Type>(value: any, callback?: ResultCallback) => value is Array<Type>;
