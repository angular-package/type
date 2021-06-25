// Function.
import { isStringLength } from '../lib/is-string-length.func';
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
describe(isStringLength.name, () => {
  // Constant.
  const min = 0;
  const max = 13;
  const stringFirstName = 'my first name';
  const stringInstance = new String(stringFirstName);

  // Defined.
  it('is DEFINED', () => expect(isStringLength).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isStringLength(FALSE, min, max, (result: boolean) => {
        expect(result).toBe(FALSE);
        return result;
      });
    });
    // ... arrays.
    describe(`array`, () => {
      // it(`${FUNCTION}`, () => expect(isStringLength(FUNCTION, 'function')).toBe(FALSE));
      // it(`${Class}`, () => expect(isStringLength(Class, 'function')).toBe(FALSE));
    });
    // ... Date.
    describe(`date`, () => {
      it(`DATE_STRING_ONE ${DATE_STRING_ONE}`, () => expect(isStringLength(DATE_STRING_ONE, min, max)).toBe(FALSE));
      it(`DATE_STRING_ONE ${DATE_STRING_TWO}`, () => expect(isStringLength(DATE_STRING_TWO, min, max)).toBe(FALSE));
      it(`DATE_STRING_ONE ${DATE_VARS}`, () => expect(isStringLength(DATE_VARS, min, max)).toBe(FALSE));
      it(`DATE_STRING_ONE ${DATE_TIMESTAMP}`, () => expect(isStringLength(DATE_TIMESTAMP, min, max)).toBe(FALSE));
    });
    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isStringLength(FUNCTION, min, max)).toBe(FALSE));
      it(`Class`, () => expect(isStringLength(Class, min, max)).toBe(FALSE));
    });
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(isStringLength(CLASS, min, max)).toBe(FALSE));
      it(`OBJECT_ONE`, () => expect(isStringLength(OBJECT_ONE, min, max)).toBe(FALSE));
      it(`OBJECT_TWO`, () => expect(isStringLength(OBJECT_TWO, min, max)).toBe(FALSE));
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(isStringLength(OBJECT_ONE_NEW, min, max)).toBe(FALSE));
      it(`new Object(OBJECT_TWO_NEW})`, () => expect(isStringLength(OBJECT_TWO_NEW, min, max)).toBe(FALSE));
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => it(`${BIGINT}`, () => expect(isStringLength(BIGINT, min, max)).toBe(FALSE)));
      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isStringLength(TRUE, min, max)).toBe(FALSE));
        it(`${FALSE}`, () => expect(isStringLength(FALSE, min, max)).toBe(FALSE));
      });
      // null
      it(`${NULL}`, () => expect(isStringLength(NULL, min, max)).toBe(FALSE));
      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isStringLength(NUMBER, min, max)).toBe(FALSE));
        it(`Number(${NUMBER})`, () => expect(isStringLength(NUMBER_INSTANCE, min, max)).toBe(FALSE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isStringLength(STRING, min, max)).toBe(FALSE));
        it(`String(${STRING})`, () => expect(isStringLength(STRING_INSTANCE, min, max)).toBe(FALSE));
        it(`${stringFirstName}`, () => expect(isStringLength(stringFirstName, min, max)).toBe(TRUE));
        it(`${stringFirstName}`, () => expect(isStringLength(stringFirstName, 13, max)).toBe(TRUE));
        it(`${stringFirstName}`, () => expect(isStringLength(stringFirstName, 14, max)).toBe(FALSE));
        it(`${stringFirstName}`, () => expect(isStringLength(stringFirstName, min, 12)).toBe(FALSE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isStringLength(SYMBOL_NUMBER, min, max)).toBe(FALSE));
        it(`Symbol(${STRING})`, () => expect(isStringLength(SYMBOL_STRING, min, max)).toBe(FALSE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isStringLength(UNDEFINED, min, max)).toBe(FALSE));
      // ... object.
      describe(`object`, () => {
        // BigInt
        describe(`BigInt`, () => it(`${BIGINT_EXPECTATION}`, () => expect(isStringLength(BIGINT_INSTANCE, min, max)).toBe(FALSE)));
        // Boolean
        describe(`Boolean`, () => {
          it(`${TRUE_EXPECTATION}`, () => expect(isStringLength(TRUE_INSTANCE, min, max)).toBe(FALSE));
          it(`${FALSE_EXPECTATION}`, () => expect(isStringLength(FALSE_INSTANCE, min, max)).toBe(FALSE));
        });
        // Number
        describe(`Number`, () => {
          it(`new Number(${NUMBER})`, () => expect(isStringLength(NUMBER_NEW_INSTANCE, min, max)).toBe(FALSE));
          it(`new Number(${stringFirstName})`, () => expect(isStringLength(new Number(stringFirstName), min, max)).toBe(FALSE));
          it(`new Number(${stringFirstName})`, () => expect(isStringLength(new Number(1.15), min, max)).toBe(FALSE));
          it(`new Number(${stringFirstName})`, () => expect(isStringLength(new Number(13.15), min, max)).toBe(FALSE));
        });
        // String
        describe(`String`, () => {
          it(`new String(${STRING})`, () => expect(isStringLength(STRING_NEW_INSTANCE, min, max)).toBe(FALSE));
          it(`new String(${stringFirstName})`, () => expect(isStringLength(stringInstance, min, max)).toBe(TRUE));
          it(`new String(${stringFirstName})`, () => expect(isStringLength(stringInstance, 13, max)).toBe(TRUE));
          it(`new String(${stringFirstName})`, () => expect(isStringLength(stringInstance, 14, max)).toBe(FALSE));
          it(`new String(${stringFirstName})`, () => expect(isStringLength(stringInstance, min, 12)).toBe(FALSE));
        });
      });
    });
  });
});
