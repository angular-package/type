import { IsString } from '../type/is-string.type';
import { typeOf } from '../../lib/type-of.func';
/**
 * Checks if any `value` is a `'string'` type or `'object'` type and instance of `String` and `Object`.
 * Use the`guardString()` function to type-guard `string`  also.
 * @param value Any `value` to check if it's a `'string'` type or `'object'` type and instance of `String` and `Object`.
 * @returns boolean.
 */
export const isString: IsString = (value: any): value is string =>
  typeOf(value) === 'string' &&
  (
    (
      typeof value === 'object' &&
      value instanceof Object === true &&
      value instanceof String === true
    )
    ||
    (
      value instanceof Object === false &&
      value instanceof String === false &&
      typeof value === 'string'
    )
  );
