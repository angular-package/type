import { check } from './check-args.func';
/**
 * Checks if any of all the values are a `string`.
 * @param value Any values to check.
 * @returns A `boolean` indicating whether or not all the values are an `Array`.
 */
export const areString = (...value: any): boolean => check('string', ...value);
