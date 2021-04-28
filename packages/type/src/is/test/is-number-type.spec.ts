// Function.
import { isNumberType } from '../lib/is-number-type.func';
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
 * ✓ typeof === 'number' && instanceof Number === false && instanceof Object === false
 * ✓ value === true
 * ✓ value === false
 */
describe(`isNumberType`, () => {
  // Defined.
  it('is DEFINED', () => expect(isNumberType).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isNumberType(NUMBER, (result: boolean) => {
        expect(result).toBe(TRUE);
        return result;
      });
    });
    // ... arrays.
    describe(`array`, () => {
      // it(`${FUNCTION}`, () => expect(isNumberType(FUNCTION, 'function')).toBe(FALSE));
      // it(`${Class}`, () => expect(isNumberType(Class, 'function')).toBe(FALSE));
    });
    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isNumberType(FUNCTION)).toBe(FALSE));
      it(`Class`, () => expect(isNumberType(Class)).toBe(FALSE));
    });
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(isNumberType(CLASS)).toBe(FALSE));
      it(`OBJECT_ONE`, () => expect(isNumberType(OBJECT_ONE)).toBe(FALSE));
      it(`OBJECT_TWO`, () => expect(isNumberType(OBJECT_TWO)).toBe(FALSE));
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(isNumberType(OBJECT_ONE_NEW)).toBe(FALSE));
      it(`new Object(OBJECT_TWO_NEW})`, () => expect(isNumberType(OBJECT_TWO_NEW)).toBe(FALSE));
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => {
        it(`${BIGINT}`, () => expect(isNumberType(BIGINT)).toBe(FALSE));
        it(`${BIGINT_EXPECTATION}`, () => expect(isNumberType(BIGINT_INSTANCE)).toBe(FALSE));
      });

      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isNumberType(TRUE)).toBe(FALSE));
        it(`${FALSE}`, () => expect(isNumberType(FALSE)).toBe(FALSE));
        it(`${FALSE_EXPECTATION}`, () => expect(isNumberType(TRUE_INSTANCE)).toBe(FALSE));
        it(`${TRUE_EXPECTATION}`, () => expect(isNumberType(FALSE_INSTANCE)).toBe(FALSE));
      });

      // null
      it(`${NULL}`, () => expect(isNumberType(NULL)).toBe(FALSE));

      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isNumberType(NUMBER)).toBe(TRUE));
        it(`Number(${NUMBER})`, () => expect(isNumberType(NUMBER_INSTANCE)).toBe(TRUE));
        it(`new Number(${NUMBER})`, () => expect(isNumberType(NUMBER_NEW_INSTANCE)).toBe(FALSE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isNumberType(STRING)).toBe(FALSE));
        it(`String(${STRING})`, () => expect(isNumberType(STRING_INSTANCE)).toBe(FALSE));
        it(`new String(${STRING})`, () => expect(isNumberType(STRING_NEW_INSTANCE)).toBe(FALSE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isNumberType(SYMBOL_NUMBER)).toBe(FALSE));
        it(`Symbol(${STRING})`, () => expect(isNumberType(SYMBOL_STRING)).toBe(FALSE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isNumberType(UNDEFINED)).toBe(FALSE));
    });
  });
});
