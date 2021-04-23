import { Key } from '../../type/key.type';
export type IsObjectKey = <Type extends object>(object: any, key: Key | Key[]) => object is Type;
