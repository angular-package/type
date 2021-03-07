import { GuardPrimitive } from '../type/guard-primitive.type';
import { Primitives } from '../../type/primitives.type';
import { isPrimitive } from '../../is/lib/is-primitive.func';
/**
 * Guard the `value` to be a generic `Type` from one of the `Primitives`.
 * Use `isPrimitive()` function for check ONLY.
 * @param value A generic `Type` type value to guard.
 * @param type One of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'`, `'symbol'`, `'undefined'` to check `value`.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBACgTgSwLYOAgbhAzlAvFAcgCMEBzBAO2AKgB9CiB7RgGwgEMKb6CKBXJEQhxuhLCEGtRBLMEQVS0vhQAmEAGaUIKggG4AUKEhQAklnjJUGaPgA8AFXAQAfAAp07FnwgAuKJxAAGigjX1hEFDRMLABKPGcoDy9oBBxHSAMAY0YKWShUgGU5SlI8KHdPbz8AmL8k73ycWXlS3AT6lNzgTkyIRnUoIpa6elD+xMqbXHwZYoU9fWyuxoAhMhMqMork6ooQWonkxqgSck22kKdxjrxphjJKaiycvNSV5jZOLY7d-brJ45MVgcCjxQ4NSiyHp9AbvYFfWj0VzbBrTfByBqI8FTfDqTxYCBxABkRMukGuALRDA+IIIMWey1SADkBEI4N9Jr8DjdUlB+IJhGCxgMblTeKzhDQAPyNABilFQEBRhKg-yOkO6FF64xZArgDNeWAKEiYLA5O38e25AN54kkZouwuxtxmdtNCyWhoAqqoNFoVOaqpa-s7eco1JoKNowaK7uG-VGAySyTDnWL45HtAtFi9gI0LJFrH4zAWrJgyg4nG4fsHgqE-KWothreq0k4wQBvfRQfIDVyFOakVyhGJxLs9ntYADuqEyAAtyiOoOOJz3MuwCfcztQ-HAIMA+HBQW91lRlfTu6uoOvN8QaZwCLv94fj1g4Z8KOeDFfrxvoOK9UfKA9wPI9Gl1Nkv0vVcb3-ZoSiAkCX0aIYSign9YLEE0pCfUDX2Ne10KvTCCAzf1EOfMDUh9CN-SInsAF9LyYnskLAgBCMjEwMBiDTzUg+HYOAVEbawK3SFxlT8CS6ycBsIjLZs1QhNtjAuVJRMwZVZMgC9PTzFYAHlDIAGQAUQAQSZAB9AA1CyTK9MyyjxFgCT4qAVhMABxEwmXsOyHKcsoAE4AAYwoAdgARhCkKACYAFYABZIuSsK4uiigPKZL0AFkVjMgAlQLHOc-BoviyKPIKewir87zSuCmY8pAPkJXZVIPReYEADoWEYIcAAMjNMyybPssqhuCAShJEhSm1sIEPzcUbzKspqzOCO94S4UddCgAB6Q6Qjgbwc1yPqBuGrzfP8zbpqgWbhM0iAloeKhVp8vyAsmpzttOR46XpI6ToxCALqwK7BtcIbcoK4qHpmwSXoW6xbH5Nk3HhwqSr+rbCExyV9tB07zs9aHhtq+qmUa-HHue+bLEW+CFDcamGs27bWcUEnjrJiGKbYfqYZG4z1omoKzIZlGmcLTAlvvCh2bqzn8YBpXgYO-nXIJSHKdh26fqRp7Zde97t2x-Lca5rcgb5k7dcFnrheu2GccR+nkbm82ibgFWabpqXtr9rXSad-XXdFjnaZNxnzZ5q2Ebx4OxEHMOdfxCGgA
 */
export const guardPrimitive: GuardPrimitive = <Type>(value: Type, type: Primitives): value is Type => isPrimitive(value, type);
