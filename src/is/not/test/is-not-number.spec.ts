// Function.
import { isNotNumber } from '../lib/is-not-number.func';
// Variables.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../../../testing/variables/big-int.const';
import { Class, CLASS } from '../../../testing/variables/class.const';
import { FUNCTION } from '../../../testing/variables/function.const';
import { NULL } from '../../../testing/variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../../testing/variables/number.const';
import { OBJECT_ONE, OBJECT_TWO, OBJECT_ONE_NEW, OBJECT_TWO_NEW } from '../../../testing/variables/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../../testing/variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../../testing/variables/symbol.const';
import { TRUE, TRUE_EXPECTATION, FALSE, TRUE_INSTANCE, FALSE_INSTANCE, FALSE_EXPECTATION } from '../../../testing/variables/boolean.const';
import { UNDEFINED } from '../../../testing/variables/undefined.const';
/**
 * Checks
 * ✓ typeOf() = 'number
 * ✓ typeof !== 'number'
 * ✓ instanceof Number === false
 */
describe(`isNotNumber`, () => {
  // Defined.
  it('is DEFINED', () => expect(isNotNumber).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isNotNumber(STRING, (result: boolean) => {
        expect(result).toBe(TRUE);
        return result;
      });
    });

    // ... arrays.
    describe(`array`, () => {
      // it(`${FUNCTION}`, () => expect(isNotNumber(FUNCTION, 'function')).toBe(TRUE));
      // it(`${Class}`, () => expect(isNotNumber(Class, 'function')).toBe(TRUE));
    });
    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isNotNumber(FUNCTION)).toBe(TRUE));
      it(`Class`, () => expect(isNotNumber(Class)).toBe(TRUE));
    });
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(isNotNumber(CLASS)).toBe(TRUE));
      it(`OBJECT_ONE`, () => expect(isNotNumber(OBJECT_ONE)).toBe(TRUE));
      it(`OBJECT_TWO`, () => expect(isNotNumber(OBJECT_TWO)).toBe(TRUE));
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(isNotNumber(OBJECT_ONE_NEW)).toBe(TRUE));
      it(`new Object(OBJECT_TWO_NEW})`, () => expect(isNotNumber(OBJECT_TWO_NEW)).toBe(TRUE));
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => {
        it(`${BIGINT}`, () => expect(isNotNumber(BIGINT)).toBe(TRUE));
        it(`${BIGINT_EXPECTATION}`, () => expect(isNotNumber(BIGINT_INSTANCE)).toBe(TRUE));
      });

      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isNotNumber(TRUE)).toBe(TRUE));
        it(`${FALSE}`, () => expect(isNotNumber(FALSE)).toBe(TRUE));
        it(`${TRUE_EXPECTATION}`, () => expect(isNotNumber(TRUE_INSTANCE)).toBe(TRUE));
        it(`${FALSE_EXPECTATION}`, () => expect(isNotNumber(FALSE_INSTANCE)).toBe(TRUE));
      });

      // null
      it(`${NULL}`, () => expect(isNotNumber(NULL)).toBe(TRUE));

      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isNotNumber(NUMBER)).toBe(FALSE));
        it(`Number(${NUMBER})`, () => expect(isNotNumber(NUMBER_INSTANCE)).toBe(FALSE));
        it(`new Number(${NUMBER})`, () => expect(isNotNumber(NUMBER_NEW_INSTANCE)).toBe(FALSE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isNotNumber(STRING)).toBe(TRUE));
        it(`String(${STRING})`, () => expect(isNotNumber(STRING_INSTANCE)).toBe(TRUE));
        it(`new String(${STRING})`, () => expect(isNotNumber(STRING_NEW_INSTANCE)).toBe(TRUE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isNotNumber(SYMBOL_NUMBER)).toBe(TRUE));
        it(`Symbol(${STRING})`, () => expect(isNotNumber(SYMBOL_STRING)).toBe(TRUE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isNotNumber(UNDEFINED)).toBe(TRUE));
    });
  });
});
