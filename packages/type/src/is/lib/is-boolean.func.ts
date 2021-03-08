import { IsBoolean } from '../type/is-boolean.type';
/**
 * Checks if any `value` is a `'boolean'` type  or instance of `Boolean` and `Object`.
 * @param value Any `value` to check if it's a `'boolean'` type or instance of `Boolean` and `Object`.
 * @returns boolean.
 */
export const isBoolean: IsBoolean = (value: any): value is boolean =>
  (value instanceof Object && value instanceof Boolean) || ((value === true || value === false) && typeof value === 'boolean');
