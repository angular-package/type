import { ResultCallback } from '../../type/result-callback.type';
export type GuardSymbol = (value: symbol, callback?: ResultCallback) => value is symbol;
