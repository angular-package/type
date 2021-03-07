import { IsPrimitive } from '../type/is-primitive.type';
import { Primitives } from '../../type/primitives.type';
import { isString } from './is-string.func';
import { isBigInt } from './is-big-int.func';
import { isBoolean } from './is-boolean.func';
import { isNumber } from './is-number.func';
import { isSymbol } from './is-symbol.func';
import { isUndefined } from './is-undefined.func';
/**
 * Checks if any `value` is a generic type from one of the `Primitives`.
 * Use the `guardPrimitive()` function to type-guard generic type also.
 * @param value Any `value` to check if it's a generic type from the argument `type`.
 * @param type One of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'`, `'symbol'`, `'undefined'` type to check `value`.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBACgTgSwLYOAgbhAzlAvFAcgCMEBzBAO2AKgB9CiB7RgGwgEMKb6CKBXJEQhxuhLCEGtRBLMEQVS0vhQAmEAGaUIKggG4AUKEhQAklnjJUGaPgA8AFXAQAfAAp07FnwgAuKJxAAGigjX1hEFDRMLABKPGcoDy9oBBxHSAMAY0YKWShUgGU5SlI8KHdPbz8AmL8k73ycWXlS3AT6lNzgTkyIRnUoIpa6elD+xMqbXHwZYoU9fWyuxoAhMhMqMork6ooQWonkxqgSck22kKdxjrxphjJKaiycvNSV5jZOLY7d-brJ45MVgcCjxQ4NSiyHp9AbvYFfWj0VzbBrTfByBqI8FTfDqTxYCBxABkRMukGuALRDA+IIIMWey1SADkBEI4N9Jr8DjdUlB+IJhGCxgMblTeKzhDQAPyNABilFQEBRhKg-yOkO6FF64xZArgDNeWAKEiYLA5O38e25AN54kkZouwuxtxmdtNCyWhoAqqoNFoVOaqpa-s7eco1JoKNowaK7uG-VGAySyTDnWL45HtAtFi9gI0LJFrH4zAWrJgyg4nG4fsHgqE-KWothreq0k4wQBvfRQfIDVyFOakVyhGJxLs9ntYADuqEyAAtyiOoOOJz3MuwCfcztQ-HAIMA+HBQW91lRlfTu6uoOvN8QaZwCLv94fj1g4Z8KOeDFfrxvoOK9UfKA9wPI9Gl1Nkv0vVcb3-ZoSiAkCX0aIYSign9YLEE0pCfUDX2Ne10KvTCCAzf1EOfMDUh9CN-SInsAF9LyYnskLAgBCMjEwMBiDTzFYAHkBIAGQAUQAQSZMo8RYAk+KgFYTAAcRMJl7DKABOAAGLSAHYAEYNI0gAmABWAAWXTzK0oz9IoeSmS9ABZFZRIAJTKfTjN0+SCnsNzVKUsoCCckA+QldlUg9XMoC9JkABFRNlVTRPisouO0XyAE0XJEsoCNNVxSN9TMdAvT1gQAOhYRghwAA0UlS1Lq4JUkbaxbFOR43Ea1T7GCYgHioOl6SgAB6MaQjgbwc1yKqavqwSRIkpkWvzCIywgWx4IUHqhLEySBqBD8Rt0cbJoxCBZqwebatcOrHJc9y1rajam1sfk2TcR7XLcgbPslUczomqaZoqthqruuq-ICpklJe8w3o6nbSDcGHAoGlHTvO0GrvBiBIfqgocsE4SEfazBtuwlg0ZJkTMep7GQcu67bvquLEuSplUvJpHKYylQ3A5pKUvigaBaZi7pqu1mIYW+6fue1rEcsd6uqob7nN+o6huoIGcZkglZYJ+WHq1pX1tV5HB01p6-rEQdJagQ28ZeNn7vRuHeatynjpBNH-Ix6l4S4fWQZd43CY9wOveVimtoBuAA9hpT-oip2I6AA
 */
export const isPrimitive: IsPrimitive = <Type>(value: any, type: Primitives): value is Type => {
  if (isString(type)) {
    switch (type) {
      case 'bigint': return isBigInt(value);
      case 'boolean': return isBoolean(value);
      case 'number': return isNumber(value);
      case 'string': return isString(value);
      case 'symbol': return isSymbol(value);
      case 'undefined': return isUndefined(value);
    }
  }
};
