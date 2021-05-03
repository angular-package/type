import { Key } from '../../type/key.type';
export type IsObject = <Obj = object>(value: any, key?: Key) => value is Obj;
