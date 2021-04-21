import { Key } from '../../type/key.type';
export type IsObjectKey = (object: any, key: Key | Key[]) => object is object;
