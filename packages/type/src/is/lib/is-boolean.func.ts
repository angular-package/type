import { IsBoolean } from '../type/is-boolean.type';
/**
 * Checks if any `value` is a `'boolean'` type  or instance of `Boolean` and `Object`.
 * @param value Any `value` to check if it's a `'boolean'` type or instance of `Boolean` and `Object`.
 * @returns boolean.
 * @example https://www.typescriptlang.org/play?target=7&jsx=0#code/C4TwDgpgBAkgzgIQPZIDYQIYDsoF4oAUAbhqgK4QBcU2IAlHgHxQnnQCWcUARiutgG4AUAGMkWOMCidkaTFmrxZ-HPmKkK1WnWqsK0rrznYmhPRwnBsIiEgBmUAPLcAVhBFSAZJ5YaLk61sHZXkGAB8wwnU2PFx8YAAnfQjfGLj8O1I4CAZvKFBIe1T9dKgAciMVMrphMUsoAGUAFQAlGAA5AHE8coAZJASIAFtpMDgyIYB+MtrxSSh2gFUAWQQAURaegCYAdln6hEdHXrWAQXaezNRs-fnD47P2gH1WxbWexIpbqXuT86eOs1zgBhd74LAQADuUBC2AIV2yNVEczkADpUEgAOYEAAGzTaXRxABoDLCsAR8R1OnQalAAPR0qAIiDIiRojHYnFLVYbYmkvjyAjc9YtGkCemM5msuDsrG436PPkyAVwhXnMUS-JJFl1GXodFynFq56vNZKxAq8nGl4tN4ahlaijS2Wc62Apogs0k5XGK1HP7Pd2e+2Mz4soA
 */
export const isBoolean: IsBoolean = (value: any): value is boolean =>
  (value instanceof Object && value instanceof Boolean) || ((value === true || value === false) && typeof value === 'boolean');
