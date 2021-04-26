import { Key } from '../../type/key.type';
export type IsObjectKey = <Type extends object>(value: any, key: Key | Key[]) => value is Type;
