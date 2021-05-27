import { CommonDescriptor } from './common-descriptor.interface';
/**
 * Data descriptor with its unique `writable`, `value` attributes, and a generic `Value` type for the `value`.
 */
export interface DataDescriptor<Value> extends CommonDescriptor {
  writable: boolean;
  value: Value;
}
