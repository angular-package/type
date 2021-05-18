// Function.
import { isNotNull } from '../lib/is-not-null.func';
// Variables.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../../test/variables/big-int.const';
import { Class, CLASS } from '../../test/variables/class.const';
import { FUNCTION } from '../../test/variables/function.const';
import { NULL } from '../../test/variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../test/variables/number.const';
import { OBJECT_ONE, OBJECT_TWO, OBJECT_ONE_NEW, OBJECT_TWO_NEW } from '../../test/variables/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../test/variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../test/variables/symbol.const';
import { TRUE, TRUE_EXPECTATION, FALSE, TRUE_INSTANCE, FALSE_EXPECTATION, FALSE_INSTANCE } from '../../test/variables/boolean.const';
import { UNDEFINED } from '../../test/variables/undefined.const';
/**
 * Checks
 * ✓ typeOf() = 'null
 * ✓ value !== null
 */
describe(`isNotNull`, () => {
  // Defined.
  it('is DEFINED', () => expect(isNotNull).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isNotNull(STRING, (result: boolean) => {
        expect(result).toBe(TRUE);
        return result;
      });
    });

    // ... arrays.
    describe(`array`, () => {
      // it(`${FUNCTION}`, () => expect(isNotNull(FUNCTION, 'function')).toBe(TRUE));
      // it(`${Class}`, () => expect(isNotNull(Class, 'function')).toBe(TRUE));
    });
    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isNotNull(FUNCTION)).toBe(TRUE));
      it(`Class`, () => expect(isNotNull(Class)).toBe(TRUE));
    });
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(isNotNull(CLASS)).toBe(TRUE));
      it(`OBJECT_ONE`, () => expect(isNotNull(OBJECT_ONE)).toBe(TRUE));
      it(`OBJECT_TWO`, () => expect(isNotNull(OBJECT_TWO)).toBe(TRUE));
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(isNotNull(OBJECT_ONE_NEW)).toBe(TRUE));
      it(`new Object(OBJECT_TWO_NEW})`, () => expect(isNotNull(OBJECT_TWO_NEW)).toBe(TRUE));
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => {
        it(`${BIGINT}`, () => expect(isNotNull(BIGINT)).toBe(TRUE));
        it(`${BIGINT_EXPECTATION}`, () => expect(isNotNull(BIGINT_INSTANCE)).toBe(TRUE));
      });

      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isNotNull(TRUE)).toBe(TRUE));
        it(`${FALSE}`, () => expect(isNotNull(FALSE)).toBe(TRUE));
        it(`${TRUE_EXPECTATION}`, () => expect(isNotNull(TRUE_INSTANCE)).toBe(TRUE));
        it(`${FALSE_EXPECTATION}`, () => expect(isNotNull(FALSE_INSTANCE)).toBe(TRUE));
      });

      // null
      it(`${NULL}`, () => expect(isNotNull(NULL)).toBe(FALSE));

      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isNotNull(NUMBER)).toBe(TRUE));
        it(`Number(${NUMBER})`, () => expect(isNotNull(NUMBER_INSTANCE)).toBe(TRUE));
        it(`new Number(${NUMBER})`, () => expect(isNotNull(NUMBER_NEW_INSTANCE)).toBe(TRUE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isNotNull(STRING)).toBe(TRUE));
        it(`String(${STRING})`, () => expect(isNotNull(STRING_INSTANCE)).toBe(TRUE));
        it(`new String(${STRING})`, () => expect(isNotNull(STRING_NEW_INSTANCE)).toBe(TRUE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isNotNull(SYMBOL_NUMBER)).toBe(TRUE));
        it(`Symbol(${STRING})`, () => expect(isNotNull(SYMBOL_STRING)).toBe(TRUE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isNotNull(UNDEFINED)).toBe(TRUE));
    });
  });
});
