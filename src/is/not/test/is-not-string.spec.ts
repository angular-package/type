// Function.
import { isNotString } from '../lib/is-not-string.func';
// Constant.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../../../testing/variables/big-int.const';
import { Class, CLASS } from '../../../testing/variables/class.const';
import { FUNCTION } from '../../../testing/variables/function.const';
import { NULL } from '../../../testing/variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../../testing/variables/number.const';
import { OBJECT_ONE, OBJECT_TWO, OBJECT_ONE_NEW, OBJECT_TWO_NEW } from '../../../testing/variables/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../../testing/variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../../testing/variables/symbol.const';
import { TRUE, TRUE_EXPECTATION, FALSE, TRUE_INSTANCE, FALSE_EXPECTATION, FALSE_INSTANCE } from '../../../testing/variables/boolean.const';
import { UNDEFINED } from '../../../testing/variables/undefined.const';
/**
 * Checks
 * ✓ typeOf() = 'string
 * ✓ typeof !== 'string'
 * ✓ instanceof String === false
 */
describe(`isNotString`, () => {
  // Defined.
  it('is DEFINED', () => expect(isNotString).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isNotString(STRING, (result: boolean) => {
        expect(result).toBe(FALSE);
        return result;
      });
    });

    // ... arrays.
    describe(`array`, () => {
      // it(`${FUNCTION}`, () => expect(isNotString(FUNCTION, 'function')).toBe(TRUE));
      // it(`${Class}`, () => expect(isNotString(Class, 'function')).toBe(TRUE));
    });
    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isNotString(FUNCTION)).toBe(TRUE));
      it(`Class`, () => expect(isNotString(Class)).toBe(TRUE));
    });
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(isNotString(CLASS)).toBe(TRUE));
      it(`OBJECT_ONE`, () => expect(isNotString(OBJECT_ONE)).toBe(TRUE));
      it(`OBJECT_TWO`, () => expect(isNotString(OBJECT_TWO)).toBe(TRUE));
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(isNotString(OBJECT_ONE_NEW)).toBe(TRUE));
      it(`new Object(OBJECT_TWO_NEW})`, () => expect(isNotString(OBJECT_TWO_NEW)).toBe(TRUE));
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => {
        it(`${BIGINT}`, () => expect(isNotString(BIGINT)).toBe(TRUE));
        it(`${BIGINT_EXPECTATION}`, () => expect(isNotString(BIGINT_INSTANCE)).toBe(TRUE));
      });

      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isNotString(TRUE)).toBe(TRUE));
        it(`${FALSE}`, () => expect(isNotString(FALSE)).toBe(TRUE));
        it(`${TRUE_EXPECTATION}`, () => expect(isNotString(TRUE_INSTANCE)).toBe(TRUE));
        it(`${FALSE_EXPECTATION}`, () => expect(isNotString(FALSE_INSTANCE)).toBe(TRUE));
      });

      // null
      it(`${NULL}`, () => expect(isNotString(NULL)).toBe(TRUE));

      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isNotString(NUMBER)).toBe(TRUE));
        it(`Number(${NUMBER})`, () => expect(isNotString(NUMBER_INSTANCE)).toBe(TRUE));
        it(`new Number(${NUMBER})`, () => expect(isNotString(NUMBER_NEW_INSTANCE)).toBe(TRUE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isNotString(STRING)).toBe(FALSE));
        it(`String(${STRING})`, () => expect(isNotString(STRING_INSTANCE)).toBe(FALSE));
        it(`new String(${STRING})`, () => expect(isNotString(STRING_NEW_INSTANCE)).toBe(FALSE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isNotString(SYMBOL_NUMBER)).toBe(TRUE));
        it(`Symbol(${STRING})`, () => expect(isNotString(SYMBOL_STRING)).toBe(TRUE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isNotString(UNDEFINED)).toBe(TRUE));
    });
  });
});
