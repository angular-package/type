// Function.
import { isString } from '../lib/is-string.func';
// Variables.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../../testing/variables/big-int.const';
import { Class, CLASS } from '../../testing/variables/class.const';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE, FALSE_EXPECTATION, TRUE_EXPECTATION } from '../../testing/variables/boolean.const';
import { FUNCTION } from '../../testing/variables/function.const';
import { NULL } from '../../testing/variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../testing/variables/number.const';
import { OBJECT_ONE, OBJECT_TWO, OBJECT_ONE_NEW, OBJECT_TWO_NEW } from '../../testing/variables/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../testing/variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../testing/variables/symbol.const';
import { UNDEFINED } from '../../testing/variables/undefined.const';

/**
 * Checks
 * ✓ typeof === 'string' && instanceof String === false && instanceof Object === false
 * ✓ typeof === 'object' && instanceof String === true && instanceof Object === true
 */
describe(isString.name, () => {
  // Defined.
  it('is DEFINED', () => expect(isString).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isString(STRING, (result: boolean, value: any) => {
        expect(result).toBe(TRUE);
        expect(value).toEqual(STRING);
        return result;
      });
    });
    // ... arrays.
    describe(`array`, () => {
      // it(`${FUNCTION}`, () => expect(isString(FUNCTION, 'function')).toBe(FALSE));
      // it(`${Class}`, () => expect(isString(Class, 'function')).toBe(FALSE));
    });
    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isString(FUNCTION)).toBe(FALSE));
      it(`Class`, () => expect(isString(Class)).toBe(FALSE));
    });
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(isString(CLASS)).toBe(FALSE));
      it(`OBJECT_ONE`, () => expect(isString(OBJECT_ONE)).toBe(FALSE));
      it(`OBJECT_TWO`, () => expect(isString(OBJECT_TWO)).toBe(FALSE));
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(isString(OBJECT_ONE_NEW)).toBe(FALSE));
      it(`new Object(OBJECT_TWO_NEW})`, () => expect(isString(OBJECT_TWO_NEW)).toBe(FALSE));
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => it(`${BIGINT}`, () => expect(isString(BIGINT)).toBe(FALSE)));
      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isString(TRUE)).toBe(FALSE));
        it(`${FALSE}`, () => expect(isString(FALSE)).toBe(FALSE));
      });
      // null
      it(`${NULL}`, () => expect(isString(NULL)).toBe(FALSE));
      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isString(NUMBER)).toBe(FALSE));
        it(`Number(${NUMBER})`, () => expect(isString(NUMBER_INSTANCE)).toBe(FALSE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isString(STRING)).toBe(TRUE));
        it(`String(${STRING})`, () => expect(isString(STRING_INSTANCE)).toBe(TRUE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isString(SYMBOL_NUMBER)).toBe(FALSE));
        it(`Symbol(${STRING})`, () => expect(isString(SYMBOL_STRING)).toBe(FALSE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isString(UNDEFINED)).toBe(FALSE));
      // ... object.
      describe(`object`, () => {
        // BigInt
        describe(`BigInt`, () => it(`${BIGINT_EXPECTATION}`, () => expect(isString(BIGINT_INSTANCE)).toBe(FALSE)));
        // Boolean
        describe(`Boolean`, () => {
          it(`${TRUE_EXPECTATION}`, () => expect(isString(TRUE_INSTANCE)).toBe(FALSE));
          it(`${FALSE_EXPECTATION}`, () => expect(isString(FALSE_INSTANCE)).toBe(FALSE));
        });
        // Number
        describe(`Number`, () => it(`new Number(${NUMBER})`, () => expect(isString(NUMBER_NEW_INSTANCE)).toBe(FALSE)));
        // String
        describe(`String`, () => it(`new String(${STRING})`, () => expect(isString(STRING_NEW_INSTANCE)).toBe(TRUE)));
      });
    });
  });
});
