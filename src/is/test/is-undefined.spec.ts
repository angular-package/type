// Function.
import { isUndefined } from '../lib/is-undefined.func';
// Constant.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../../testing/src/big-int.const';
import { Class, CLASS } from '../../testing/src/class.const';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE, FALSE_EXPECTATION, TRUE_EXPECTATION } from '../../testing/src/boolean.const';
import { FUNCTION } from '../../testing/src/function.const';
import { NULL } from '../../testing/src/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../testing/src/number.const';
import { OBJECT_ONE, OBJECT_TWO, OBJECT_ONE_NEW, OBJECT_TWO_NEW } from '../../testing/src/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../testing/src/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../testing/src/symbol.const';
import { UNDEFINED } from '../../testing/src/undefined.const';

/**
 * Checks
 * ✓ typeOf() = 'undefined
 * ✓ typeof === 'undefined'
 * ✓ value === undefined
 */
describe(isUndefined.name, () => {
  // Defined.
  it('is DEFINED', () => expect(isUndefined).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isUndefined(STRING, (result: boolean) => {
        expect(result).toBe(FALSE);
        return result;
      });
    });

    // ... arrays.
    describe(`array`, () => {
      // it(`${FUNCTION}`, () => expect(isUndefined(FUNCTION, 'function')).toBe(FALSE));
      // it(`${Class}`, () => expect(isUndefined(Class, 'function')).toBe(FALSE));
    });
    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isUndefined(FUNCTION)).toBe(FALSE));
      it(`Class`, () => expect(isUndefined(Class)).toBe(FALSE));
    });
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(isUndefined(CLASS)).toBe(FALSE));
      it(`OBJECT_ONE`, () => expect(isUndefined(OBJECT_ONE)).toBe(FALSE));
      it(`OBJECT_TWO`, () => expect(isUndefined(OBJECT_TWO)).toBe(FALSE));
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(isUndefined(OBJECT_ONE_NEW)).toBe(FALSE));
      it(`new Object(OBJECT_TWO_NEW})`, () => expect(isUndefined(OBJECT_TWO_NEW)).toBe(FALSE));
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => it(`${BIGINT}`, () => expect(isUndefined(BIGINT)).toBe(FALSE)));
      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isUndefined(TRUE)).toBe(FALSE));
        it(`${FALSE}`, () => expect(isUndefined(FALSE)).toBe(FALSE));
      });
      // null
      it(`${NULL}`, () => expect(isUndefined(NULL)).toBe(FALSE));
      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isUndefined(NUMBER)).toBe(FALSE));
        it(`Number(${NUMBER})`, () => expect(isUndefined(NUMBER_INSTANCE)).toBe(FALSE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isUndefined(STRING)).toBe(FALSE));
        it(`String(${STRING})`, () => expect(isUndefined(STRING_INSTANCE)).toBe(FALSE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isUndefined(SYMBOL_NUMBER)).toBe(FALSE));
        it(`Symbol(${STRING})`, () => expect(isUndefined(SYMBOL_STRING)).toBe(FALSE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isUndefined(UNDEFINED)).toBe(TRUE));
      // ... object.
      describe(`object`, () => {
        // BigInt
        describe(`BigInt`, () => it(`${BIGINT_EXPECTATION}`, () => expect(isUndefined(BIGINT_INSTANCE)).toBe(FALSE)));
        // Boolean
        describe(`Boolean`, () => {
          it(`${TRUE_EXPECTATION}`, () => expect(isUndefined(TRUE_INSTANCE)).toBe(FALSE));
          it(`${FALSE_EXPECTATION}`, () => expect(isUndefined(FALSE_INSTANCE)).toBe(FALSE));
        });
        // Number
        describe(`Number`, () => it(`new Number(${NUMBER})`, () => expect(isUndefined(NUMBER_NEW_INSTANCE)).toBe(FALSE)));
        // String
        describe(`String`, () => it(`new String(${STRING})`, () => expect(isUndefined(STRING_NEW_INSTANCE)).toBe(FALSE)));
      });
    });
  });
});
