import { IsString } from '../type/is-string.type';
/**
 * Check is any `value` a `'string'` type.
 * Use `guardString()` to type guard `string` `value` also.
 * @param value Any `value` to check it is a `'string'` type.
 * @returns boolean.
 * @example https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAylATnMBzGBeGAKANwEMAbAVwFMAuGIsATwEobjyL4IZo1McA+GFHoAHCiABmMVpRzZcAcm7oM8gNwAodaEixEAFQBKASQByAcQD6ANQCCAGQCqAURwx5dkCgoBbeMIhk3gD8alrg0DAmDgCyAEJOBtb2zq4ATADsGtoRsQDyuXZONiZJji644qQQFBphkCAkFAB0JCAYeAAG+sbmpc4dADQcyDzt3aaWtmWMjKowAPTzgiiUdRANza3tHVFxCX1Og8Ooyni78YlTzjNzizCVJNVrGy1tnXkFRSVXh0MII6cPoVigcbgslg8nkA
 */
export const isString: IsString = (value: any): value is string => typeof value === 'string';
