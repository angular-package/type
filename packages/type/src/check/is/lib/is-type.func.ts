import { Types } from '../../../lib/types.type';
import { IsType } from '../../type/is-type.type';
import { is } from './is.object';
/**
 * Checks if any `value` is a generic constructor type or primitive type.
 * Use the `guardType()` to type-guard generic type `Type` also.
 * @param value Any value to check if it's a generic type from one of the `type`.
 * @param type Constructor generic `Type` or one of the `Primitives`
 * `'bigint'`, `'boolean'`, `'number'`, `'symbol'`, `'string'`, `'undefined'` to check `value` type.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAwg9gOwM7AE4FcDGw6oDwAq4EAfFALxQIQDuUAFAHTMCGqA5kgFxQsIgBtALoBKCmSKQA3AChQkKAAVUASwC2K4CoBuEJBSgByAEZw4AGwh9DUAD5HjK9ioTAb9wwnRrjEVO6MUVQR2Q1l5aEk9PAB5YwArMkp4ZDQsHHw4xLslVQ0tXSRZTEQUKBUkAGU0F3YDem0Wc3QIHj4QER5G5ugKqCDa8SgIuAAzKG6WinJKQwGQsJkS1PKkKINCYhIGppa2-gAaYeIeKKRNyBJOid3e-XXyMgrq4PZ6CLEAfmPIMZue6aUCJQLq3cqpPiYCB-CLFcwsJD6FJBdBoOAweGIqAAbygAA8DABGKRQAC+S1KwFgABkAIKVSoAfQAarTqQBVACiBmodGRaTRGIRSHoImKlKgACEYjFqZzaQA5FlsrkGUZNJAQcUrSUASQA4rqFQRlRzuZQAJwABitAHZCRaLQAmACsABZbW6rY7CQhtWUFeyALKSzkAJVNqsohKdtv9VMqBDDRv1kfNRiDICo3l8qFWi2WSAsEEY5jgbwABvyMILMUgK0cKlE8NXUah0XXtjA6Qy00dW7XhSIxVAAPSj4YYCAU5DF0vl+gV6Wy+VK1lmhurZumYt8bbLuWKvsOMyWazDknjyctGdFyzzyt6w3GtObpvEPDzdj7g1Gk3rrkjhMJwXDcC8xwnNJp0LOcy0rQMQ3DRkCAACTDTlOTfNYPy8Hw-G2BDQwjADOSA3Dc0McCryg29YIXCtCKQgAxGJ2TDLDmy-bZE2TBVUxIoCv0okdqKnGQgA
 */
export const isType: IsType = <Type>(value: any, type: Types<Type>): value is Type =>
  is.string(type) ? is[type](value) :  value instanceof type;
