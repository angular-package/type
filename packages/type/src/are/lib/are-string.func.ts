import { check } from './check-args.func';
/**
 * Checks if any of all the values are a `string`.
 * @param value Any arguments to check if they're all a `'string`.
 * @returns A `boolean` indicating whether or not all the `values` are an `Array`.
 */
export const areString = (...value: any): boolean => check('string', ...value);
