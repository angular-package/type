import { PrimitiveObject } from './primitive-object.class';

export class StringObject {
  /**
   * Create a new `String` instance.
   */
  static set set(value: any) {
    PrimitiveObject.string = new String(value);
  }
  /**
   * Get instance.
   */
   static get get(): String {
    return PrimitiveObject.string;
  }
}
