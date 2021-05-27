import { Key } from '../../type/key.type';
export type IsObjectKeys = <Type = object>(value: any, ...keys: (Key | Array<Key>)[]) => value is Type;
