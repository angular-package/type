// Function.
import { isFalse } from '../lib/is-false.func';
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
describe(isFalse.name, () => {
  // Defined.
  it('is DEFINED', () => expect(isFalse).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isFalse(FALSE, (result: boolean) => {
        expect(result).toBe(TRUE);
        return result;
      });
    });
    // ... arrays.
    describe(`array`, () => {
      // it(`${FUNCTION}`, () => expect(isFalse(FUNCTION, 'function')).toBe(FALSE));
      // it(`${Class}`, () => expect(isFalse(Class, 'function')).toBe(FALSE));
    });
    // ... Date.
    describe(`date`, () => {
      it(`DATE_STRING_ONE ${DATE_STRING_ONE}`, () => expect(isFalse(DATE_STRING_ONE)).toBe(FALSE));
      it(`DATE_STRING_ONE ${DATE_STRING_TWO}`, () => expect(isFalse(DATE_STRING_TWO)).toBe(FALSE));
      it(`DATE_STRING_ONE ${DATE_VARS}`, () => expect(isFalse(DATE_VARS)).toBe(FALSE));
      it(`DATE_STRING_ONE ${DATE_TIMESTAMP}`, () => expect(isFalse(DATE_TIMESTAMP)).toBe(FALSE));
    });
    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isFalse(FUNCTION)).toBe(FALSE));
      it(`Class`, () => expect(isFalse(Class)).toBe(FALSE));
    });
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(isFalse(CLASS)).toBe(FALSE));
      it(`OBJECT_ONE`, () => expect(isFalse(OBJECT_ONE)).toBe(FALSE));
      it(`OBJECT_TWO`, () => expect(isFalse(OBJECT_TWO)).toBe(FALSE));
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(isFalse(OBJECT_ONE_NEW)).toBe(FALSE));
      it(`new Object(OBJECT_TWO_NEW})`, () => expect(isFalse(OBJECT_TWO_NEW)).toBe(FALSE));
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => it(`${BIGINT}`, () => expect(isFalse(BIGINT)).toBe(FALSE)));
      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isFalse(TRUE)).toBe(FALSE));
        it(`${FALSE}`, () => expect(isFalse(FALSE)).toBe(TRUE));
      });
      // null
      it(`${NULL}`, () => expect(isFalse(NULL)).toBe(FALSE));
      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isFalse(NUMBER)).toBe(FALSE));
        it(`Number(${NUMBER})`, () => expect(isFalse(NUMBER_INSTANCE)).toBe(FALSE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isFalse(STRING)).toBe(FALSE));
        it(`String(${STRING})`, () => expect(isFalse(STRING_INSTANCE)).toBe(FALSE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isFalse(SYMBOL_NUMBER)).toBe(FALSE));
        it(`Symbol(${STRING})`, () => expect(isFalse(SYMBOL_STRING)).toBe(FALSE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isFalse(UNDEFINED)).toBe(FALSE));
      // ... object.
      describe(`object`, () => {
        // BigInt
        describe(`BigInt`, () => it(`${BIGINT_EXPECTATION}`, () => expect(isFalse(BIGINT_INSTANCE)).toBe(FALSE)));
        // Boolean
        describe(`Boolean`, () => {
          it(`${TRUE_EXPECTATION}`, () => expect(isFalse(TRUE_INSTANCE)).toBe(FALSE));
          it(`${FALSE_EXPECTATION}`, () => expect(isFalse(FALSE_INSTANCE)).toBe(TRUE));
        });
        // Number
        describe(`Number`, () => it(`new Number(${NUMBER})`, () => expect(isFalse(NUMBER_NEW_INSTANCE)).toBe(FALSE)));
        // String
        describe(`String`, () => it(`new String(${STRING})`, () => expect(isFalse(STRING_NEW_INSTANCE)).toBe(FALSE)));
      });
    });
  });
});
