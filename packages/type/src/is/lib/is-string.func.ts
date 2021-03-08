import { IsString } from '../type/is-string.type';
/**
 * Checks if any `value` is a `'string'` type or `'object'` type and instance of `String` and `Object`.
 * Use the`guardString()` function to type-guard `string`  also.
 * @param value Any `value` to check if it's a `'string'` type or `'object'` type and instance of `String` and `Object`.
 * @returns boolean.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAkgzgZWAJwJYDsDmUC8UAUAbgIYA2ArhAFxTHogCUuAfFCRdKnFHChpgG4AUAGMA9ul5QuSNFhrxZ-XAXaUadRjTWduvOdhzMhUAqEhiAZmzKVcOPAHIxAIwBWEEcEdQAZL5sOaUlgOhEIKygAeXdPYD8AnWDeMIjrJSwmAB8sqHM0wLsHJ31+R2FRCSkEABUAJRgAOQBxFUcAGTFkCABbaTA4ch6AfnLKkKhGgFUAWQAhAFE6lQAmAHZhcQm5qKj2hYBBRpVLMjgITar42oaWgH0m2qOAYQWVDMx8G6bmhkuJ773RoLADqD0aT0arxU6AgAHcoB8vvUfn8hOM4GJSBAAHSkMSfAAGOz2h0ahIANNJEHwsPgSfsjgw-lAAPSsqCnUjnDFY3H4onTeZLSnUpFCxZ1ZkCNkcrk8raY7F4gn4QmA5qimS0z4a6WyvLISi85UCtUa8GQ15amkGZG3ZqWmovBb69mG42KvkqokW4Fgx7OqELG1Iv2gp0ut0clDGoA
 */
export const isString: IsString = (value: any): value is string =>
  (typeof value === 'object' && value instanceof Object && value instanceof String) || typeof value === 'string';
