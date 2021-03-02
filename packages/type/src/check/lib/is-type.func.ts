import { Types } from '../../lib/types.type';
import { isString } from './is-string.func';
/**
 * Check is any `value` a generic `Constructor` or primitive type.
 * Use `guardType()` to type guard generic `Type` `value` also.
 * @param value Any value to check it is a generic `Type` from one of the `type`.
 * @param type Constructor generic `Type` or one of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'` to check `value` type.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAwg9gOwM7AE4FcDGw6oDwAq4EAfFALxQIQDuUAFAHTMCGqA5kgFxQsIgBtALoBKCmSKQA3AChQkKAAVUASwC2K4CoBuEJBSgByAEZw4AGwh9DUAD5HjK9ioTAb9wwnRrjEVO6MUVQR2Q1l5aEk9PAB5YwArMkp4ZDQsHHw4xLslVQ0tXSRZTEQUKBUkAGU0F3YDem0Wc3QIHj4QER5G5ugKqCDa8SgIuAAzKG6WinJKQwGQsJkS1PKkKINCYhIGppa2-gAaYeIeKKRNyBJOid3e-XXyMgrq4PZ6CLEAfmPIMZue6aUCJQLq3cqpPiYCB-CLFcwsJD6FJBdBoOAweGIqAAbygAA8DABGKRQAC+S1KwFgABkAIKVSoAfQAarTqQBVACiBmodGRaTRGIRSHoImKlKgACEYjFqZzaQA5FlsrkGUZNJAQcUrSUASQA4rqFQRlRzuZQAJwABitAHZCRaLQAmACsABZbW6rY7CQhtWUFeyALKSzkAJVNqsohKdtv9VMqBDDRv1kfNRiDICo3l8qFWi2WSAsEEY5jgbwABvyMILMUgK0cKlE8NXUah0XXtjA6Qy00dW7XhSIxVAAPSj4YYCAU5DF0vl+gV6Wy+VK1lmhurZumYt8bbLuWKvsOMyWazDknjyctGdFyzzyt6w3GtObpvEPDzdj7g1Gk3rrkjhMJwXDcC8xwnNJp0LOcy0rQMQ3DRkCAACTDTlOTfNYPy8Hw-G2BDQwjADOSA3Dc0McCryg29YIXCtCKQgAxGJ2TDLDmy-bZE2TBVUxIoCv0okdqKnGQgA
 */
export const isType = <Type>(value: any, type: Types<Type>): value is Type =>
  isString(type) ? typeof value === type : value instanceof type;
