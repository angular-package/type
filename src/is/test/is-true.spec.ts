// Function.
import { isTrue } from '../lib/is-true.func';
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
describe(isTrue.name, () => {
  // Defined.
  it('is DEFINED', () => expect(isTrue).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isTrue(TRUE, (result: boolean) => {
        expect(result).toBe(TRUE);
        return result;
      });
    });
    // ... arrays.
    describe(`array`, () => {
      // it(`${FUNCTION}`, () => expect(isTrue(FUNCTION, 'function')).toBe(FALSE));
      // it(`${Class}`, () => expect(isTrue(Class, 'function')).toBe(FALSE));
    });
    // ... Date.
    describe(`date`, () => {
      it(`DATE_STRING_ONE ${DATE_STRING_ONE}`, () => expect(isTrue(DATE_STRING_ONE)).toBe(FALSE));
      it(`DATE_STRING_ONE ${DATE_STRING_TWO}`, () => expect(isTrue(DATE_STRING_TWO)).toBe(FALSE));
      it(`DATE_STRING_ONE ${DATE_VARS}`, () => expect(isTrue(DATE_VARS)).toBe(FALSE));
      it(`DATE_STRING_ONE ${DATE_TIMESTAMP}`, () => expect(isTrue(DATE_TIMESTAMP)).toBe(FALSE));
    });
    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isTrue(FUNCTION)).toBe(FALSE));
      it(`Class`, () => expect(isTrue(Class)).toBe(FALSE));
    });
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(isTrue(CLASS)).toBe(FALSE));
      it(`OBJECT_ONE`, () => expect(isTrue(OBJECT_ONE)).toBe(FALSE));
      it(`OBJECT_TWO`, () => expect(isTrue(OBJECT_TWO)).toBe(FALSE));
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(isTrue(OBJECT_ONE_NEW)).toBe(FALSE));
      it(`new Object(OBJECT_TWO_NEW})`, () => expect(isTrue(OBJECT_TWO_NEW)).toBe(FALSE));
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => it(`${BIGINT}`, () => expect(isTrue(BIGINT)).toBe(FALSE)));
      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isTrue(TRUE)).toBe(TRUE));
        it(`${FALSE}`, () => expect(isTrue(FALSE)).toBe(FALSE));
      });
      // null
      it(`${NULL}`, () => expect(isTrue(NULL)).toBe(FALSE));
      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isTrue(NUMBER)).toBe(FALSE));
        it(`Number(${NUMBER})`, () => expect(isTrue(NUMBER_INSTANCE)).toBe(FALSE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isTrue(STRING)).toBe(FALSE));
        it(`String(${STRING})`, () => expect(isTrue(STRING_INSTANCE)).toBe(FALSE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isTrue(SYMBOL_NUMBER)).toBe(FALSE));
        it(`Symbol(${STRING})`, () => expect(isTrue(SYMBOL_STRING)).toBe(FALSE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isTrue(UNDEFINED)).toBe(FALSE));
      // ... object.
      describe(`object`, () => {
        // BigInt
        describe(`BigInt`, () => it(`${BIGINT_EXPECTATION}`, () => expect(isTrue(BIGINT_INSTANCE)).toBe(FALSE)));
        // Boolean
        describe(`Boolean`, () => {
          it(`${TRUE_EXPECTATION}`, () => expect(isTrue(TRUE_INSTANCE)).toBe(TRUE));
          it(`${FALSE_EXPECTATION}`, () => expect(isTrue(FALSE_INSTANCE)).toBe(FALSE));
        });
        // Number
        describe(`Number`, () => it(`new Number(${NUMBER})`, () => expect(isTrue(NUMBER_NEW_INSTANCE)).toBe(FALSE)));
        // String
        describe(`String`, () => it(`new String(${STRING})`, () => expect(isTrue(STRING_NEW_INSTANCE)).toBe(FALSE)));
      });
    });
  });
});
