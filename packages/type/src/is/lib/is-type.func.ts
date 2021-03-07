import { IsType } from '../type/is-type.type';
import { Types } from '../../type/types.type';
import { isString } from './is-string.func';
import { isBigInt } from './is-big-int.func';
import { isBoolean } from './is-boolean.func';
import { isNumber } from './is-number.func';
import { isSymbol } from './is-symbol.func';
import { isUndefined } from './is-undefined.func';
import { isObject } from './is-object.func';
import { isFunction } from './is-function.func';
import { isClass } from './is-class.func';
/**
 * Checks if any `value` is a generic type constructor, function, object or primitive type.
 * Use the `guardType()` to type-guard generic type `Type` also.
 * @param value Any value to check if it's a generic type from one of the `type`.
 * @param type Constructor generic `Type` or one of the `Primitives`
 * `'bigint'`, `'boolean'`, `'number'`, `'symbol'`, `'string'`, `'undefined'` to check `value` type.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAwg9gOwM7AE4FcDGw6oDwAq4EAfFALxQIQDuUAFAHTMCGqA5kgFxQsIgBtALoBKCmSKQA3AChQkKAAVUASwC2K4CoBuEJBSgByAEYr2KhMENQAPkeNw4AGwh9rdwwnRrjEVO6MkEB9nAMMUVQR2MPQEABMIADMLCDjDWXloADFYzAMmZjA2FjUePhAxcjJyjOIoST08AHljACsySnhkNCwcfBb22yVVDS1dJFqFAEkkBoNCYhJ6bRYndAgy-gAaKEyeBqQFyBJKshW16BV9BtkLYD9ElkxoJqmoAG8oAA8eLx8-KAAX1ulgeTxerw+UBAPAiFnYQNkMkwiBQUCuACEzFNLPlzutNhUePjLvpTOZcVVdsQ4IkoCSKORKCYzHd0sjUcB0UgMY4XHw8asCbx+CJiULSVAHM5XAhxPSJejunxnrSoLyZQKbHZ6MtFUzKD1oNqFRdGZRHk4kBAxAAyW3UyBqhkG+x82WGESyFHdbkwJwsJD6SjNNpLOBtCDYQk7PawTkYbC4UPtMVQCOtKNcq5QAbyjNZpUoFUQNWZb2c7kAOW8vlQgouhLTDJzfzr8syzv1TKMbb81gA-NyshZNBA9RcxOKzRZiwhVXSa-9UBXfVcAMpoeEN4XlZuKnNwqIdml0l098JbqLsn1oq4AVXiSRScR3GxFRNN625UFiCWS1CvlS56UH+z6AVA9qOqWZ7dsyYEAakN6VlcAyFiGeaUOUSwkjGUAANYQCAA6wle7D7jO+iYWQnawWarqGAW2DWFBLbKvOMG5pG2BQEOG5kfQhEVLxBFEUqX7QDwRpQDwlrWqud5IDk85aIgb5NtO345speRUrREnmkYiS5KpCAsQ6bFzguUA6aZCnZkg67BA4TjqR+FFafoQQhK5emngZDHeS57IcmuszEDwMxzCGDQ4RKeGZCR9TEIcsUeZK0VkO8MhQOidL0PxkTsPQmQiGI2W5blSA0JomAABYMKVHw5ZVuWYIG0AshSVg8KgEDAOgqBypi2KWBO6xei1rXtdabqamZvX9YNw08u6fDjTasitW1HW9rW-aLQNQ3VvtqAbZN21QDNnVHtEh3Ldym5FedW3bddgTOaE93HRun1OC9U2Ve9hgIS+hjfStj7-i+AOtYCLXw7lfVHXKmQiVc-qBqliwbbGxBTsOJkqIg522HYqHccARykADwIyMiAZBlA65wGoECY0znxfAYACMUhAldjP6CzbMEDQcAc-onwgAYABM-Pw7eXIwE0VbrgQABK94wAQTQawY1B0CL7NC-Qk1K7Aqvq1rOt6wQADqTQG7QzOsxAYsS6b5uVhiTRNAAMgAogAglWBhyRA9nqlMADiUxVgQBgAJwAAwpwA7DzSdJ7LACsAAs6f5yn2c8wgUdZPeVYwDwOn5D8VCnac3xQAA1FAfOhWiVb3gAshigf65QPOy+nUdNBiABSgc6zwkKUFzPA84iXdchP0+2wQAASg9z-PUIwkYiAQNYdMW9b8cxwYhi9zLfb1lcyG+uuACa-cBwYTk+fQhhqCAnpRyrgAEUDlkeOgcgEGFBoBJEt4ZSMCcHAYqAADFWatNba11hrZBOwrgNDwMbSWSw0HW0wXbR2OxCFCzKvzAA9LQqAEcu7wMQSg32AcQ5VhwdyfB0p+QICWOwoOocdgmDWmZGhUB6G7AwBAZhLgEFIPoMgjEsd44EG4Xg4geBbqCLUQnUR5I2SSOkUaeREBFEoJ7v3QemjwqQDwPfJY1iB4a1EffT0XopEMLMXAhRrDlGV2rnY-BOklhBJgF40xsjzGWOURfKsMcQnaN0fQBJMdRG3U8XQnxMS-EWICcg9eM8NG4PsRAZorwljFJ1iY3J6xYmFNfu-f2ySHGpOab7f2mS-rZO8TIhp+S4nIOAaA8BQC2njlGWAqsEDRHQKQnUgZcigA
 */
export const isType: IsType = <Type>(value: any, type?: Types<Type>): value is Type => {
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
  return type ? isClass<Type>(value, type) : isFunction(value) || isObject<Type>(value);
};
