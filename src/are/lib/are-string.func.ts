import { check } from './check-args.func';
/**
 * Checks if all the values are a `string`.
 * @param value A rest parameter of any type to check.
 * @returns A `boolean` indicating whether or not all the values are `string`.
 */
export const areString = (...value: any): boolean => check('string', ...value);
