// Function.
import { isNumberBetween } from '../lib/is-number-between.func';
// Constant.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../../testing/src/big-int.const';
import { Class, CLASS } from '../../testing/src/class.const';
import { DATE_STRING_ONE, DATE_TIMESTAMP, DATE_STRING_TWO, DATE_VARS } from '../../testing/src/strict/date.const';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE, FALSE_EXPECTATION, TRUE_EXPECTATION } from '../../testing/src/boolean.const';
import { FUNCTION } from '../../testing/src/function.const';
import { NULL } from '../../testing/src/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../testing/src/number.const';
import { OBJECT_ONE, OBJECT_TWO, OBJECT_ONE_NEW, OBJECT_TWO_NEW } from '../../testing/src/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../testing/src/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../testing/src/symbol.const';
import { UNDEFINED } from '../../testing/src/undefined.const';
/**
 * Tests.
 */
describe(isNumberBetween.name, () => {
  // Constant.
  const min = 0;
  const max = 13;
  const value = 13;

  // Defined.
  it('is DEFINED', () => expect(isNumberBetween).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isNumberBetween(FALSE, min, max, (result: boolean) => {
        expect(result).toBe(FALSE);
        return result;
      });
    });
    // ... arrays.
    describe(`array`, () => {
      // it(`${FUNCTION}`, () => expect(isNumberBetween(FUNCTION, 'function')).toBe(FALSE));
      // it(`${Class}`, () => expect(isNumberBetween(Class, 'function')).toBe(FALSE));
    });
    // ... Date.
    describe(`date`, () => {
      it(`DATE_STRING_ONE ${DATE_STRING_ONE}`, () => expect(isNumberBetween(DATE_STRING_ONE, min, max)).toBe(FALSE));
      it(`DATE_STRING_ONE ${DATE_STRING_TWO}`, () => expect(isNumberBetween(DATE_STRING_TWO, min, max)).toBe(FALSE));
      it(`DATE_STRING_ONE ${DATE_VARS}`, () => expect(isNumberBetween(DATE_VARS, min, max)).toBe(FALSE));
      it(`DATE_STRING_ONE ${DATE_TIMESTAMP}`, () => expect(isNumberBetween(DATE_TIMESTAMP, min, max)).toBe(FALSE));
    });
    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isNumberBetween(FUNCTION, min, max)).toBe(FALSE));
      it(`Class`, () => expect(isNumberBetween(Class, min, max)).toBe(FALSE));
    });
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(isNumberBetween(CLASS, min, max)).toBe(FALSE));
      it(`OBJECT_ONE`, () => expect(isNumberBetween(OBJECT_ONE, min, max)).toBe(FALSE));
      it(`OBJECT_TWO`, () => expect(isNumberBetween(OBJECT_TWO, min, max)).toBe(FALSE));
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(isNumberBetween(OBJECT_ONE_NEW, min, max)).toBe(FALSE));
      it(`new Object(OBJECT_TWO_NEW})`, () => expect(isNumberBetween(OBJECT_TWO_NEW, min, max)).toBe(FALSE));
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => it(`${BIGINT}`, () => expect(isNumberBetween(BIGINT, min, max)).toBe(FALSE)));
      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isNumberBetween(TRUE, min, max)).toBe(FALSE));
        it(`${FALSE}`, () => expect(isNumberBetween(FALSE, min, max)).toBe(FALSE));
      });
      // null
      it(`${NULL}`, () => expect(isNumberBetween(NULL, min, max)).toBe(FALSE));
      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isNumberBetween(NUMBER, min, max)).toBe(FALSE));
        it(`Number(${NUMBER})`, () => expect(isNumberBetween(NUMBER_INSTANCE, min, max)).toBe(FALSE));
        it(`${NUMBER}`, () => expect(isNumberBetween(value, min, max)).toBe(TRUE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isNumberBetween(STRING, min, max)).toBe(FALSE));
        it(`String(${STRING})`, () => expect(isNumberBetween(STRING_INSTANCE, min, max)).toBe(FALSE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isNumberBetween(SYMBOL_NUMBER, min, max)).toBe(FALSE));
        it(`Symbol(${STRING})`, () => expect(isNumberBetween(SYMBOL_STRING, min, max)).toBe(FALSE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isNumberBetween(UNDEFINED, min, max)).toBe(FALSE));
      // ... object.
      describe(`object`, () => {
        // BigInt
        describe(`BigInt`, () => it(`${BIGINT_EXPECTATION}`, () => expect(isNumberBetween(BIGINT_INSTANCE, min, max)).toBe(FALSE)));
        // Boolean
        describe(`Boolean`, () => {
          it(`${TRUE_EXPECTATION}`, () => expect(isNumberBetween(TRUE_INSTANCE, min, max)).toBe(FALSE));
          it(`${FALSE_EXPECTATION}`, () => expect(isNumberBetween(FALSE_INSTANCE, min, max)).toBe(FALSE));
        });
        // Number
        describe(`Number`, () => {
          it(`new Number(${NUMBER})`, () => expect(isNumberBetween(NUMBER_NEW_INSTANCE, min, max)).toBe(FALSE));
          it(`new Number(${value})`, () => expect(isNumberBetween(new Number(value), min, max)).toBe(TRUE));
          it(`new Number(${value})`, () => expect(isNumberBetween(new Number(1.15), min, max)).toBe(TRUE));
          it(`new Number(${value})`, () => expect(isNumberBetween(new Number(13.15), min, max)).toBe(FALSE));
        });
        // String
        describe(`String`, () => it(`new String(${STRING})`, () => expect(isNumberBetween(STRING_NEW_INSTANCE, min, max)).toBe(FALSE)));
      });
    });
  });
});
