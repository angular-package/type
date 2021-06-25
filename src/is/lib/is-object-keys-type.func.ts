// Function.
import { isArray } from './is-array.func';
import { isKey } from './is-key.func';
// Type.
import { IsObjectKeys } from '../type/is-object-keys.type';
import { isObject } from './is-object.func';
import { Types } from '../../type/types.type';
import { Func } from '../../type/func.type';
import { isType } from './is-type.func';
import { Primitives } from '../../type/primitives.type';
import { isPrimitive } from './is-primitive.func';
import { guardPrimitive } from '../../guard/lib/guard-primitive.func';

type IsObjectKeysType =
<Type extends object>(...keys: (keyof Type)[]
) => (...type: Primitives[]) => (value: Type) => value is Type;

/**
 * Checks if any `value` is an `object` of a generic `Type` with some of its own specified `keys`.
 * @param value Any `value` to check if it contains some of the specified `keys`.
 * @param keys A rest parameter key of `Type` or an array of keys of `Type` to check the `value`.
 * @returns A `boolean` indicating whether or not the `value` is an `object` with some of its own specified keys.
 */
export const isObjectKeysType: IsObjectKeysType =
  <Type extends object>(...keys: (keyof Type | Array<keyof Type>)[]) =>
  (...type: Primitives[]) =>
  (value: any): value is Type =>
    isObject<Type>(value)
    ? keys.some((key, keysIndex: number) =>
      isArray(key)
        ? key.every((k, arrIndex: number) =>
          isKey(k) ? {}.hasOwnProperty.call(value, k) === true ? isPrimitive(value[k], type[arrIndex]) : false : false
        )
        : isKey(key)
          ? {}.hasOwnProperty.call(value, key) === true ? isPrimitive(value[key], type[keysIndex]) : false
          : false
    )
    : false;

class Person {
  firstName = 'bla';
  surname = 'bla bla bla';
}

const person: Person = new Person();

isObjectKeysType<Person>('firstName')('string')(person);
