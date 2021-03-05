import { IsArray } from '../type/is-array.type';
/**
 * Check if any `value` is an `Array` of a generic type and `Array` instance.
 * Use the `guardArray()` function to type-guard `array` also.
 * @param value Any `value` to check if it's an `Array` of a generic type `Type` and `Array` instance.
 * @returns boolean.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBACgTgSwLYOAgbtAvFARge3wBsIBDAOygB88EBzBc4aqcgVyKJfaVwjhYBnYInJ0hIXsRZtyAEwgAzRhDkBuAFChIUAJKCAgnDikQUHAAp0pImwgAuKBRABKcwD4o129ASCoRiYgADzO7poAxvjkwlB+gaaO+glmOMEAKuDYTuQg7lY2do7OLo7ednH+KRlZnlieKQB08camBT5uAGSdXoW+McAUERD4igGtIJoaUQNQAMrpAEq6AHIA4uZQAOQAMvhwEEhxYIJsSAD8W5HRsSsAqgCyAEIAooubAEwA7NezTwDy-x2LwMK02ihsgggv1idxWABEXgAxVYveGbWQKZTkVQw5gGRaLAwATQWy3WjmqwlEdDqUAA2ltSFsADTbXCs7YRLYAXTxAUJJPuzzelImwR4fDgdPp3zZAGYvgr5Xzpjd8YLiTBlg9dOldAA1F5ioLBeDIVAYCAy7bUxh0TlyqAiCqqmaxABSc3+KwA+gaDDs7i9NgBvRSERwARg+8oAvlN3cQII0iPg6BYAAZk1ZrTNslpBCw59YuFxqKAAekrUAhRChapiydT6azwtei3zlRSFnbbzLFertch0EbgmbaYzmYBQJBKy7hbaM+BoIHVZrdYbSZILancMRKJWaIXhgmFn3yNR8LXQ83EDHE9bmYJRNJS1zJ57L5JJbWN5rLr3tuKaTlm37En2nYFqeRbgZB-7OnAdgPjuoHPpq2q6Lq+pGp+Z7gZh2GGi8CGAShIFPl6Pr+oGwZ4UWVF+gGQYkeW67DvW95AA
 */
export const isArray: IsArray = <Type = any>(value: any): value is Array<Type> => Array.isArray(value) && value instanceof Array;
