// Function.
import { isObject } from '../lib/is-object.func';
// Variables.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from './variables/big-int.const';
import { Class, CLASS } from './variables/class.const';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE, FALSE_EXPECTATION, TRUE_EXPECTATION } from './variables/boolean.const';
import { FUNCTION } from './variables/function.const';
import { NULL } from './variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from './variables/number.const';
import { OBJECT_ONE, OBJECT_TWO, ObjectOne, ObjectTwo, OBJECT_ONE_NEW, OBJECT_TWO_NEW } from './variables/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from './variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from './variables/symbol.const';
import { UNDEFINED } from './variables/undefined.const';
/**
 * Checks
 * ✓ typeof === 'object'
 * ✓ instanceof Object
 */
describe(`isObject`, () => {
  // Defined.
  it('is DEFINED', () => expect(isObject).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    // ... arrays.
    describe(`array`, () => {
      // it(`${FUNCTION}`, () => expect(isObject(FUNCTION, 'function')).toBe(FALSE));
      // it(`${Class}`, () => expect(isObject(Class, 'function')).toBe(FALSE));
    });
    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isObject(FUNCTION)).toBe(FALSE));
      it(`Class`, () => expect(isObject(Class)).toBe(FALSE));
    });
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(isObject(CLASS)).toBe(TRUE));
      it(`OBJECT_ONE`, () => expect(isObject(OBJECT_ONE)).toBe(TRUE));
      it(`OBJECT_TWO`, () => expect(isObject(OBJECT_TWO)).toBe(TRUE));
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(isObject(OBJECT_ONE_NEW)).toBe(TRUE));
      it(`new Object(OBJECT_TWO_NEW})`, () => expect(isObject(OBJECT_TWO_NEW)).toBe(TRUE));

      describe('OBJECT_ONE has the', () => {
        it(`'key as string'`, () => expect(isObject(OBJECT_ONE, 'key as string')).toBe(TRUE));
        it(`key as string ${STRING}`, () => expect(isObject(OBJECT_ONE, STRING)).toBe(TRUE));
        it(`key as string instance ${STRING_NEW_INSTANCE}`, () => expect(isObject(OBJECT_ONE, STRING_NEW_INSTANCE)).toBe(TRUE));
        it(`key as number ${1030405027}`, () => expect(isObject(OBJECT_ONE, 1030405027)).toBe(TRUE));
        it(`key as number ${NUMBER}`, () => expect(isObject(OBJECT_ONE, NUMBER)).toBe(TRUE));
        it(`key as number instance ${NUMBER_NEW_INSTANCE}`, () => expect(isObject(OBJECT_ONE, NUMBER_NEW_INSTANCE)).toBe(TRUE));
        it(`key as SYMBOL_NUMBER`, () => expect(isObject(OBJECT_ONE, SYMBOL_NUMBER)).toBe(TRUE));
        it(`key as SYMBOL_STRING`, () => expect(isObject(OBJECT_ONE, SYMBOL_STRING)).toBe(TRUE));
      });
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => {
        it(`${BIGINT}`, () => expect(isObject(BIGINT)).toBe(FALSE));
        it(`${BIGINT_EXPECTATION}`, () => expect(isObject(BIGINT_INSTANCE)).toBe(FALSE));
      });

      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isObject(TRUE)).toBe(FALSE));
        it(`${FALSE}`, () => expect(isObject(FALSE)).toBe(FALSE));
        it(`${FALSE_EXPECTATION}`, () => expect(isObject(TRUE_INSTANCE)).toBe(FALSE));
        it(`${TRUE_EXPECTATION}`, () => expect(isObject(FALSE_INSTANCE)).toBe(FALSE));
      });

      // null
      it(`${NULL}`, () => expect(isObject(NULL)).toBe(FALSE));

      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isObject(NUMBER)).toBe(FALSE));
        it(`Number(${NUMBER})`, () => expect(isObject(NUMBER_INSTANCE)).toBe(FALSE));
        it(`new Number(${NUMBER})`, () => expect(isObject(NUMBER_NEW_INSTANCE)).toBe(FALSE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isObject(STRING)).toBe(FALSE));
        it(`String(${STRING})`, () => expect(isObject(STRING_INSTANCE)).toBe(FALSE));
        it(`new String(${STRING})`, () => expect(isObject(STRING_NEW_INSTANCE)).toBe(FALSE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isObject(SYMBOL_NUMBER)).toBe(FALSE));
        it(`Symbol(${STRING})`, () => expect(isObject(SYMBOL_STRING)).toBe(FALSE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isObject(UNDEFINED)).toBe(FALSE));
    });
  });
});
