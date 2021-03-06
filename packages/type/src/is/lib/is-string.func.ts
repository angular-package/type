import { IsString } from '../type/is-string.type';
/**
 * Checks if any `value` is a `'string'` type or `String` instance.
 * Use the`guardString()` function to type-guard `string`  also.
 * @param value Any `value` to check if it's a `'string'` type or `String` instance.
 * @returns boolean.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAkgzgZWAJwJYDsDmUC8UAUAbgIYA2ArhAFxTHogCUuAfFCRdKnFHChpgG4AUAGMA9ul5QuSNFhrxZ-XAXaUadRjTWduvOdhysd0ycDoiIYgGZQlWKAB9HUUJBtsylXDjwByfX4-YVEJKQQAFQAlGAA5AHEVPwAZMWQIAFtpMDhyDIB+YNCzKFiAVQBZACEAUSiVACYAdmFxEqqAeQ7kmoBBWJVrMjgIVrDgUpqAdUiYhJV0CAB3Oz4sfBS0zOzcrIAjUmIjgAs-BhC2uDFSCAA6UjFMfAADWbj454AaaUQ1p7eEgxzlAAPQg1zISjFK43e6PF7lap1L4-exPRG1KJAgSg8FDUgjaHXO4PJ7PTrdPqxFEyP74Ck9frY3FQfGEy7EuFk2LTAEfb60gz4HkzaLvZlgqAAEQgwAgIgmS1QwGOpl4Fis1iEQA
 */
export const isString: IsString = (value: any): value is string => value instanceof String || typeof value === 'string';
