import { ResultCallback } from '../../type/result-callback.type';
import { Type } from '../../type/type.type';
import { Types } from '../../type/types.type';
export type IsType = <T extends Type>(value: any, type: Types<T>, callback?: ResultCallback) => value is T;
