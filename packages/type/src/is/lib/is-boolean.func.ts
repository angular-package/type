import { IsBoolean } from '../type/is-boolean.type';
import { typeOf } from '../../lib/type-of.func';
/**
 * Checks if any `value` is a `'boolean'` type  or instance of `Boolean` and `Object`.
 * @param value Any `value` to check if it's a `'boolean'` type or instance of `Boolean` and `Object`.
 * @returns boolean.
 */
export const isBoolean: IsBoolean = (value: any): value is boolean =>
  typeOf(value) === 'boolean' &&
  (
    typeof value === 'object'  &&
    value instanceof Boolean === true &&
    value instanceof Object === true
    ||
    value instanceof Boolean === false &&
    value instanceof Object === false &&
    typeof value === 'boolean' &&
    (value === true || value === false)
  );
