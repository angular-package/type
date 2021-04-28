// Function.
import { isNotUndefined } from '../lib/is-not-undefined.func';
// Variables.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../../test/variables/big-int.const';
import { Class, CLASS } from '../../test/variables/class.const';
import { FUNCTION } from '../../test/variables/function.const';
import { NULL } from '../../test/variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../test/variables/number.const';
import { OBJECT_ONE, OBJECT_TWO, OBJECT_ONE_NEW, OBJECT_TWO_NEW } from '../../test/variables/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../test/variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../test/variables/symbol.const';
import { TRUE, TRUE_EXPECTATION, FALSE, TRUE_INSTANCE } from '../../test/variables/boolean.const';
import { UNDEFINED } from '../../test/variables/undefined.const';
/**
 * Checks
 * ✓ typeOf() = 'undefined
 * ✓ typeof === 'undefined'
 * ✓ value === undefined
 */
describe(`isNotUndefined`, () => {
  // Defined.
  it('is DEFINED', () => expect(isNotUndefined).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isNotUndefined(STRING, (result: boolean) => {
        expect(result).toBe(TRUE);
        return result;
      });
    });

    // ... arrays.
    describe(`array`, () => {
      // it(`${FUNCTION}`, () => expect(isNotUndefined(FUNCTION, 'function')).toBe(TRUE));
      // it(`${Class}`, () => expect(isNotUndefined(Class, 'function')).toBe(TRUE));
    });
    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isNotUndefined(FUNCTION)).toBe(TRUE));
      it(`Class`, () => expect(isNotUndefined(Class)).toBe(TRUE));
    });
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(isNotUndefined(CLASS)).toBe(TRUE));
      it(`OBJECT_ONE`, () => expect(isNotUndefined(OBJECT_ONE)).toBe(TRUE));
      it(`OBJECT_TWO`, () => expect(isNotUndefined(OBJECT_TWO)).toBe(TRUE));
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(isNotUndefined(OBJECT_ONE_NEW)).toBe(TRUE));
      it(`new Object(OBJECT_TWO_NEW})`, () => expect(isNotUndefined(OBJECT_TWO_NEW)).toBe(TRUE));
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => {
        it(`${BIGINT}`, () => expect(isNotUndefined(BIGINT)).toBe(TRUE));
        it(`${BIGINT_EXPECTATION}`, () => expect(isNotUndefined(BIGINT_INSTANCE)).toBe(TRUE));
      });

      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isNotUndefined(TRUE)).toBe(TRUE));
        it(`${FALSE}`, () => expect(isNotUndefined(FALSE)).toBe(TRUE));
        it(`${TRUE_EXPECTATION}`, () => expect(isNotUndefined(TRUE_INSTANCE)).toBe(TRUE));
        it(`${TRUE_EXPECTATION}`, () => expect(isNotUndefined(TRUE_INSTANCE)).toBe(TRUE));
      });

      // null
      it(`${NULL}`, () => expect(isNotUndefined(NULL)).toBe(TRUE));

      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isNotUndefined(NUMBER)).toBe(TRUE));
        it(`Number(${NUMBER})`, () => expect(isNotUndefined(NUMBER_INSTANCE)).toBe(TRUE));
        it(`new Number(${NUMBER})`, () => expect(isNotUndefined(NUMBER_NEW_INSTANCE)).toBe(TRUE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isNotUndefined(STRING)).toBe(TRUE));
        it(`String(${STRING})`, () => expect(isNotUndefined(STRING_INSTANCE)).toBe(TRUE));
        it(`new String(${STRING})`, () => expect(isNotUndefined(STRING_NEW_INSTANCE)).toBe(TRUE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isNotUndefined(SYMBOL_NUMBER)).toBe(TRUE));
        it(`Symbol(${STRING})`, () => expect(isNotUndefined(SYMBOL_STRING)).toBe(TRUE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isNotUndefined(UNDEFINED)).toBe(FALSE));
    });
  });
});
