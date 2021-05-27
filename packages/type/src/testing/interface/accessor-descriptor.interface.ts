import { CommonDescriptor } from './common-descriptor.interface';
/**
 * Accessor descriptor with its unique `get` and `set` attributes and theirs generic `Value` type.
 */
export interface AccessorDescriptor<Value> extends CommonDescriptor {
  get: (() => Value) | undefined;
  set: ((value: Value) => void) | undefined;
}
