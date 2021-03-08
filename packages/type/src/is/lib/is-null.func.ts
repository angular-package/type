/**
 * Checks if any `value` is a `'object'` type and equal `null`.
 * @param value Any `value` to check if it's a `null` value and `'object'` type.
 * @returns boolean
 */
export const isNull = (value: any): value is null => value === null && typeof value === 'object';
