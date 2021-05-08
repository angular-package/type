import { PrimitiveObject } from './primitive-object.class';

export class BigIntObject {
  static set set(value: any) {
    PrimitiveObject.bigint = BigInt(value);
  }
  static get get(): BigInt {
    return PrimitiveObject.bigint;
  }
}
