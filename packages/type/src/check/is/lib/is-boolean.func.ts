import { IsBoolean } from '../../type/is-boolean.type';
/**
 * Checks if any `value` is a `'boolean'` type or `Boolean` instance.
 * Use the `guardString()` function to type-guard `boolean` also.
 * @param value Any `value` to check if it's a `'boolean'` type or `Boolean` instance.
 * @returns boolean.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAkgzgIQPZIDYQIYDsoF4oAUAbhqgK4QBcU2IAlHgHxQnnQCWcUARiutgG4AUAGMkWOMCidkaTFmrxZ-HPmKkK1WnWqsK0rrznYmQqCw0cJwbCIhIAZlGXyoAHzeF1bPLnzAAJ30PCx8-fAdSOAgGADJYqFBIR1D9cKgAciMVDLphUXFJKABlABUAJRgAOQBxPEyAGSQAiABbaTA4MlaAfgzhMWsoKoBVAFkEAFFy+oAmAHYBwqkEAHlVhsmAQSr6yNRopaG1je2qgH0Kkcn6wIojopPNnfPqsp2AYRv8LAgAd2cfHkBH20TyQgKEjkADpUEgAOYEAAGZUqtSRABoDC5sARUdUanQ8lAAPQkqCgiCQuAwuGIpGjCbTTHYoG4xlTcpEgSk8mU6m0hHIp5nFkyNlYAginbc3mJIJUwY09CwoVI6UXK6TMWICVS9bPTXla6ysnyigClV04UGs6vKrvKpfHU4yUa+2Or6m8l3KlAA
 */
export const isBoolean: IsBoolean = (value: any): value is boolean =>
  value instanceof Boolean || ((value === true || value === false) && typeof value === 'boolean');
