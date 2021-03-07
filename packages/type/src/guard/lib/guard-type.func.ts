import { isType } from '../../is/lib/is-type.func';
import { GuardType } from '../type/guard-type.type';
import { Types } from '../../type/types.type';
/**
 * Guard the `value` to be a generic `Type` type from one of the `Types` type.
 * Use `isType()` function for check ONLY.
 * @param value A generic `Type` value to guard.
 * @param type Constructor generic `Type`, `'function'`, `'object'` or one of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'`, `'symbol'`, `'undefined'` to check `value`.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAwg9gOwM7AE4FcDGw6oDwAq4EAfFALxQIQDuUAFAHTMCGqA5kgFxQsIgBtALoBKCmSKQA3AChQkKAAVUASwC2K4CoBuEJBSgByAEZw4AGwh9DUAD5HjK9ioTAb9wwnRrjEVO6MUVQR2Q1l5aEk9PAB5YwArMkp4ZDQsHHw4xLslVQ0tXSRZTEQUKBUkKINCYgM+EBJ6bRZzdAgeeoAaKAieKKQayBIRHmbW6AqoKvIyegi4ADMe2vJVwLQXULEAfgZ5pbG2ijWIsVGWo5cUPkwIReXpGRLUqHZ0NgATaahB0iaL9pTYjdXpAyADKLDc7jcr6aZkCpRX6NQ4QEHEETFcwsJD6FJBdBoOAwbG4qAAbygAA8DABGKRQAC+T1KwFgABkAIIAZW5AH0AGqc9kAVQAogZqHR8WkiSScUh6JiWS8AEIxGLssWcgByguF4oMCxaSAgxVZUFVAEkAOJWnUEfWiiWUACcAAZ3QB2Wmu10AJgArAAWL3B91+2kIc0vHUigCyqrFACUnYbKLT-V6Y2VuQRk-abWmXUZ4yAqN5fKhYWEVUgLBBGOY4Ox6AADGUYOWkpBt7pvT5IzuE1DEnuNGBc3nF7rD7sKkSYqAAemXPQwEDrDabLfb6s12r1Qudfde71QX2IeFMDb4jX3Wt1M4cZks1kXDNX67aW8sO9bbbWnaDrFqeA4XkiQSbPetr2o6x7it0JhOC4bgfiua5pJuzz1n+zYAXGiYpnyBAABLJmKYpgeel6QHgXg+H4jSEUmqYIWKSEMVWhjoV+WG-o2+HtixxEAGIxCKybUYOV5QSEjR5gWOpFuxSFyVsS58RuMhAA
 */
export const guardType: GuardType = <Type>(value: Type, type: Types<Type>): value is Type => isType<Type>(value, type);
