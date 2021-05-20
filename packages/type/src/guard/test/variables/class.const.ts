import { NUMBER } from './number.const';
import { STRING } from './string.const';
import { SYMBOL_STRING, SYMBOL_NUMBER } from './symbol.const';

/**
 * typeof === 'function'
 * instanceof Class === false
 * instanceof Function === true
 * instanceof Object === true
 */
export class Class {

  1030405027 = 'my new number';
  5 = 'my number';

  firstName = 'My name';
  surname = 'Surname';

  x = NUMBER;
  y = STRING;

  get [NUMBER](): number {
    return this.x;
  }
  get [STRING](): string {
    return this.y;
  }

  get [SYMBOL_NUMBER](): number {
    return this.x;
  }

  get [SYMBOL_STRING](): string {
    return this.y;
  }
}

export class TestClass extends Class {}

export const TEST_CLASS = new TestClass();

/**
 * typeof === 'object'
 * instanceof Class === true
 * instanceof Function === false
 * instanceof Object === true
 */
export const CLASS = new Class();

export class Person {
  firstName = '';
  surname = '';
  age = 15;
}

export class PersonCopy {
  firstName = '';
  surname = '';
  age = 15;
}

export const PERSON: Person = new Person();
export const PERSON_COPY: PersonCopy = new PersonCopy();
