import { Primitives } from '../../lib/primitives.type';
import { isPrimitive } from '../../are/lib/is-primitive.func';
import { GuardPrimitive } from '../type/guard-primitive.type';
/**
 * Guard the `value` to be a generic `Type` from one of the `Primitives`.
 * Use `isPrimitive()` function for check ONLY.
 * @param value A generic `Type` type value to guard.
 * @param type One of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'` to check `value`.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBACgTgSwLYOAgbhAzlAvFAcgCMB7EgGwgEMA7AqAH0KIQHMEbh6mCaBXJEQhxuhLMEQ1WBANwAoAMYka4qAizxkqDNHwAeACrgIAPgAU6KuT4QAXFFogANFFCR7mlGkxYAlPctraHUoI0g8E1djEgAzKECbPFx8Nwh5JRVgKFY+KjgAE09tTDwoQ2NzBLtQ4xdUj0QvHT8Aq0SQsN1I9SLvCAs2iDrjX3TlVQAhAHkpgBkAUQBBADkAfQA1RdmAVXnSmKssNMVxrImASQBxc+WDDa3d0oBOAAYXgHYARiengCYAVgALO9AS8fp8aGNMlBltsALITeYAJXuOz2+E+v3eUNUAGUDEibpdUY98AQ4SAoPxBMI1FhZCcVBQIAA6cgkVhmAAG0zmSzWmzRXJcOTyhUaxQgelIzNo5l5CxWJPmLmIZEotAIvlGUAA9LrXHAbIysMy2RzuRdrrdlcLsrkCr0dNK2BxgPKrjc7oLdqqWOxOFqdfrDcaMqbKObOVzYQjkbaRQ7xVo+npqUI4OZY4iUT6VYR08IgzI9QaJGHxmb2dH8YTlsS83bRY6JanxJJWOZa0Tlar2xxpNqSyHyxATVWLTyZoqBQ95k2k07MNL1dQaF2CT2837V5qh6WoAdyEdx5Hq5bPTbG4mxUupf63Vn4Tne8xXYH9yGjyfwxPo9n42ve1b1bZ1C0zMxu3rV9eAEDNiwPb8x1-M9Jyghs5wXECU2dfspCfONcznPsJAHBCv0OMcgA
 */
export const guardPrimitive: GuardPrimitive = <Type>(value: Type, type: Primitives): value is Type => isPrimitive(value, type);
