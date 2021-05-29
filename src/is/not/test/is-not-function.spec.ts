// Function.
import { isNotFunction } from '../lib/is-not-function.func';
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
 * ✓ typeOf() = 'function
 * ✓ typeof !== 'function'
 * ✓ instanceof Function === false
 */
describe(`isNotFunction`, () => {
  // Defined.
  it('is DEFINED', () => expect(isNotFunction).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isNotFunction(STRING, (result: boolean) => {
        expect(result).toBe(TRUE);
        return result;
      });
    });

    // ... arrays.
    describe(`array`, () => {
      // it(`${FUNCTION}`, () => expect(isNotFunction(FUNCTION, 'function')).toBe(TRUE));
      // it(`${Class}`, () => expect(isNotFunction(Class, 'function')).toBe(TRUE));
    });
    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isNotFunction(FUNCTION)).toBe(FALSE));
      it(`Class`, () => expect(isNotFunction(Class)).toBe(FALSE));
    });
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(isNotFunction(CLASS)).toBe(TRUE));
      it(`OBJECT_ONE`, () => expect(isNotFunction(OBJECT_ONE)).toBe(TRUE));
      it(`OBJECT_TWO`, () => expect(isNotFunction(OBJECT_TWO)).toBe(TRUE));
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(isNotFunction(OBJECT_ONE_NEW)).toBe(TRUE));
      it(`new Object(OBJECT_TWO_NEW})`, () => expect(isNotFunction(OBJECT_TWO_NEW)).toBe(TRUE));
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => {
        it(`${BIGINT}`, () => expect(isNotFunction(BIGINT)).toBe(TRUE));
        it(`${BIGINT_EXPECTATION}`, () => expect(isNotFunction(BIGINT_INSTANCE)).toBe(TRUE));
      });

      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isNotFunction(TRUE)).toBe(TRUE));
        it(`${FALSE}`, () => expect(isNotFunction(FALSE)).toBe(TRUE));
        it(`${TRUE_EXPECTATION}`, () => expect(isNotFunction(TRUE_INSTANCE)).toBe(TRUE));
        it(`${FALSE_EXPECTATION}`, () => expect(isNotFunction(FALSE_INSTANCE)).toBe(TRUE));
      });

      // null
      it(`${NULL}`, () => expect(isNotFunction(NULL)).toBe(TRUE));

      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isNotFunction(NUMBER)).toBe(TRUE));
        it(`Number(${NUMBER})`, () => expect(isNotFunction(NUMBER_INSTANCE)).toBe(TRUE));
        it(`new Number(${NUMBER})`, () => expect(isNotFunction(NUMBER_NEW_INSTANCE)).toBe(TRUE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isNotFunction(STRING)).toBe(TRUE));
        it(`String(${STRING})`, () => expect(isNotFunction(STRING_INSTANCE)).toBe(TRUE));
        it(`new String(${STRING})`, () => expect(isNotFunction(STRING_NEW_INSTANCE)).toBe(TRUE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isNotFunction(SYMBOL_NUMBER)).toBe(TRUE));
        it(`Symbol(${STRING})`, () => expect(isNotFunction(SYMBOL_STRING)).toBe(TRUE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isNotFunction(UNDEFINED)).toBe(TRUE));
    });
  });
});
