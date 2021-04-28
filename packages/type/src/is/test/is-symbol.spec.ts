// Function.
import { isSymbol } from '../lib/is-symbol.func';
// Variables.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from './variables/big-int.const';
import { Class, CLASS } from './variables/class.const';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE, FALSE_EXPECTATION, TRUE_EXPECTATION } from './variables/boolean.const';
import { FUNCTION } from './variables/function.const';
import { NULL } from './variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from './variables/number.const';
import { OBJECT_ONE, OBJECT_TWO, ObjectOne, ObjectTwo, OBJECT_ONE_NEW, OBJECT_TWO_NEW } from './variables/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from './variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from './variables/symbol.const';
import { UNDEFINED } from './variables/undefined.const';

/**
 * Checks
 * ✓ typeof === 'symbol'
 */
describe(`isSymbol`, () => {
  // Defined.
  it('is DEFINED', () => expect(isSymbol).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isSymbol(SYMBOL_NUMBER, (result: boolean) => {
        expect(result).toBe(TRUE);
        return result;
      });
    });

    // ... arrays.
    describe(`array`, () => {
      // it(`${FUNCTION}`, () => expect(isSymbol(FUNCTION, 'function')).toBe(FALSE));
      // it(`${Class}`, () => expect(isSymbol(Class, 'function')).toBe(FALSE));
    });
    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isSymbol(FUNCTION)).toBe(FALSE));
      it(`Class`, () => expect(isSymbol(Class)).toBe(FALSE));
    });
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(isSymbol(CLASS)).toBe(FALSE));
      it(`OBJECT_ONE`, () => expect(isSymbol(OBJECT_ONE)).toBe(FALSE));
      it(`OBJECT_TWO`, () => expect(isSymbol(OBJECT_TWO)).toBe(FALSE));
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(isSymbol(OBJECT_ONE_NEW)).toBe(FALSE));
      it(`new Object(OBJECT_TWO_NEW})`, () => expect(isSymbol(OBJECT_TWO_NEW)).toBe(FALSE));
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => {
        it(`${BIGINT}`, () => expect(isSymbol(BIGINT)).toBe(FALSE));
        it(`${BIGINT_EXPECTATION}`, () => expect(isSymbol(BIGINT_INSTANCE)).toBe(FALSE));
      });

      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isSymbol(TRUE)).toBe(FALSE));
        it(`${FALSE}`, () => expect(isSymbol(FALSE)).toBe(FALSE));
        it(`${FALSE_EXPECTATION}`, () => expect(isSymbol(TRUE_INSTANCE)).toBe(FALSE));
        it(`${TRUE_EXPECTATION}`, () => expect(isSymbol(FALSE_INSTANCE)).toBe(FALSE));
      });

      // null
      it(`${NULL}`, () => expect(isSymbol(NULL)).toBe(FALSE));

      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isSymbol(NUMBER)).toBe(FALSE));
        it(`Number(${NUMBER})`, () => expect(isSymbol(NUMBER_INSTANCE)).toBe(FALSE));
        it(`new Number(${NUMBER})`, () => expect(isSymbol(NUMBER_NEW_INSTANCE)).toBe(FALSE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isSymbol(STRING)).toBe(FALSE));
        it(`String(${STRING})`, () => expect(isSymbol(STRING_INSTANCE)).toBe(FALSE));
        it(`new String(${STRING})`, () => expect(isSymbol(STRING_NEW_INSTANCE)).toBe(FALSE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isSymbol(SYMBOL_NUMBER)).toBe(TRUE));
        it(`Symbol(${STRING})`, () => expect(isSymbol(SYMBOL_STRING)).toBe(TRUE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isSymbol(UNDEFINED)).toBe(FALSE));
    });
  });
});
