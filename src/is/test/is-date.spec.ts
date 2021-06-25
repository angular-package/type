// Function.
import { isDate } from '../lib/is-date.func';
// Constant.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../../testing/src/big-int.const';
import { Class, CLASS } from '../../testing/src/class.const';
import { DATE, DATE_STRING_ONE, DATE_TIMESTAMP, DATE_STRING_TWO, DATE_VARS } from '../../testing/src/strict/date.const';
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
describe(isDate.name, () => {
  // Defined.
  it('is DEFINED', () => expect(isDate).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isDate(DATE, (result: boolean) => {
        expect(result).toBe(TRUE);
        return result;
      });
    });
    // ... arrays.
    describe(`array`, () => {
      // it(`${FUNCTION}`, () => expect(isDate(FUNCTION, 'function')).toBe(FALSE));
      // it(`${Class}`, () => expect(isDate(Class, 'function')).toBe(FALSE));
    });
    // ... Date.
    describe(`date`, () => {
      it(`DATE_STRING_ONE ${DATE_STRING_ONE}`, () => expect(isDate(DATE_STRING_ONE)).toBe(TRUE));
      it(`DATE_STRING_ONE ${DATE_STRING_TWO}`, () => expect(isDate(DATE_STRING_TWO)).toBe(TRUE));
      it(`DATE_STRING_ONE ${DATE_VARS}`, () => expect(isDate(DATE_VARS)).toBe(TRUE));
      it(`DATE_STRING_ONE ${DATE_TIMESTAMP}`, () => expect(isDate(DATE_TIMESTAMP)).toBe(TRUE));
    });
    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isDate(FUNCTION)).toBe(FALSE));
      it(`Class`, () => expect(isDate(Class)).toBe(FALSE));
    });
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(isDate(CLASS)).toBe(FALSE));
      it(`OBJECT_ONE`, () => expect(isDate(OBJECT_ONE)).toBe(FALSE));
      it(`OBJECT_TWO`, () => expect(isDate(OBJECT_TWO)).toBe(FALSE));
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(isDate(OBJECT_ONE_NEW)).toBe(FALSE));
      it(`new Object(OBJECT_TWO_NEW})`, () => expect(isDate(OBJECT_TWO_NEW)).toBe(FALSE));
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => it(`${BIGINT}`, () => expect(isDate(BIGINT)).toBe(FALSE)));
      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isDate(TRUE)).toBe(FALSE));
        it(`${FALSE}`, () => expect(isDate(FALSE)).toBe(FALSE));
      });
      // null
      it(`${NULL}`, () => expect(isDate(NULL)).toBe(FALSE));
      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isDate(NUMBER)).toBe(FALSE));
        it(`Number(${NUMBER})`, () => expect(isDate(NUMBER_INSTANCE)).toBe(FALSE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isDate(STRING)).toBe(FALSE));
        it(`String(${STRING})`, () => expect(isDate(STRING_INSTANCE)).toBe(FALSE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isDate(SYMBOL_NUMBER)).toBe(FALSE));
        it(`Symbol(${STRING})`, () => expect(isDate(SYMBOL_STRING)).toBe(FALSE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isDate(UNDEFINED)).toBe(FALSE));
      // ... object.
      describe(`object`, () => {
        // BigInt
        describe(`BigInt`, () => it(`${BIGINT_EXPECTATION}`, () => expect(isDate(BIGINT_INSTANCE)).toBe(FALSE)));
        // Boolean
        describe(`Boolean`, () => {
          it(`${TRUE_EXPECTATION}`, () => expect(isDate(TRUE_INSTANCE)).toBe(FALSE));
          it(`${FALSE_EXPECTATION}`, () => expect(isDate(FALSE_INSTANCE)).toBe(FALSE));
        });
        // Number
        describe(`Number`, () => it(`new Number(${NUMBER})`, () => expect(isDate(NUMBER_NEW_INSTANCE)).toBe(FALSE)));
        // String
        describe(`String`, () => it(`new String(${STRING})`, () => expect(isDate(STRING_NEW_INSTANCE)).toBe(FALSE)));
      });
    });
  });
});
