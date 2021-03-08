import { isString } from './is-string.func';
import { IsObject } from '../type/is-object.type';
/**
 * Checks if any `value` is a `Obj` generic `'object'` type and `Object` instance with a possible existing `key` in it.
 * Use the `guardObject()` function to type-guard generic object type also.
 * @param value Any `value` to check if it's a generic `'object'` type and `Object` instance.
 * @param [key] Property name to find in argument `value`.
 * @returns boolean
 * @example https://www.typescriptlang.org/play?jsx=0#code/JYOwLgpgTgZghgYwgAgPICMBWEFgJLjTxLIDeyAHgFzIgCuAtutANzIC+AUKJLIiqjAALaBmy4yyAOY16TVh05gAngAcUAMTogEyALzIAFADpTquFDgMacEMoCU+gHzJbylkrUo8AZzE4wfWQAHjEnQwA3OAAbOggbOwAaZABrCGUAfhofMChQKUc9FyjYlGAfNCwPTgQAexAc5HKAZVz8oMiYuISHGhK4poqcvJApZ2QVdVqYZH6UPQXkAHJh-KWPOobA8v9cGl9dwINQrCC3cLme5LTM7LbR+z6usoqxZ05kCa9p2ef9RaWtSwASWyAAZGDfqUmltbEgfodkBlBq0RlJDDdHMibjCoQMaLl8ch4NEfBAPJ8atE4D4KgBherDOi4WpQOnU2mSChBACsbC4m0adNQADlmgAVABKAFU6eLUJKAPp0gAyAEFms0giAIAB3ZAMrZQZlgVnsmk+Qz2DaMwIAKWaosVqAAQnaAKJymiHAi8YjzLk0ADMikFgQ00pFdJoWh0HWotEYzCgj1cdnGFBtW2QLtQqBV7rVIqChPJnBqjNq0QgxmitXRAANDUyWWyOT4G8kdsDcMFm4TW+baeFhWKpbL5UrVRrmvZrcgAPQLibGiAVhpVmt1xsOp2uj1yzuDQ6hYSiHtgcK7kXOt2e8VzthLldxdc+Te1+uGBsRqNH7viGAwSxgg4S-nSj6LsuJJkm+H7bt+o4SjKcoKsq6qagA2hQAC6-5+Befa2sag7tiOorIROaHTpqyRLBQSyQc+pZwdWn47o6N77vemHKHhXYEYBp4iFAhxXpxt4HuKdHKIx87PjBa6CvBX4-pGdLYfxx6ESBYHqXRDFMdBMSwcpbEIQ2ub5oWIr4Se5yGFZBZFkZxImWuQA
 */
export const isObject: IsObject = <Obj>(value: any, key?: string): value is Obj =>
  typeof value === 'object' && value instanceof Object && value !== null ? isString(key) ? key in value : true : false;
