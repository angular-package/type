// Function.
import { isNumberObject } from '../lib/is-number-object.func';
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
 * ✓ typeof === 'object' && instanceof Number === true && instanceof Object === true
 */
describe(isNumberObject.name, () => {
  // Defined.
  it('is DEFINED', () => expect(isNumberObject).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isNumberObject(NUMBER_NEW_INSTANCE, (result: boolean) => {
        expect(result).toBe(TRUE);
        return result;
      });
    });
    // ... arrays.
    describe(`array`, () => {
      // it(`${FUNCTION}`, () => expect(isNumberObject(FUNCTION, 'function')).toBe(FALSE));
      // it(`${Class}`, () => expect(isNumberObject(Class, 'function')).toBe(FALSE));
    });
    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isNumberObject(FUNCTION)).toBe(FALSE));
      it(`Class`, () => expect(isNumberObject(Class)).toBe(FALSE));
    });
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(isNumberObject(CLASS)).toBe(FALSE));
      it(`OBJECT_ONE`, () => expect(isNumberObject(OBJECT_ONE)).toBe(FALSE));
      it(`OBJECT_TWO`, () => expect(isNumberObject(OBJECT_TWO)).toBe(FALSE));
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(isNumberObject(OBJECT_ONE_NEW)).toBe(FALSE));
      it(`new Object(OBJECT_TWO_NEW})`, () => expect(isNumberObject(OBJECT_TWO_NEW)).toBe(FALSE));
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => it(`${BIGINT}`, () => expect(isNumberObject(BIGINT)).toBe(FALSE)));
      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isNumberObject(TRUE)).toBe(FALSE));
        it(`${FALSE}`, () => expect(isNumberObject(FALSE)).toBe(FALSE));
      });
      // null
      it(`${NULL}`, () => expect(isNumberObject(NULL)).toBe(FALSE));
      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isNumberObject(NUMBER)).toBe(FALSE));
        it(`Number(${NUMBER})`, () => expect(isNumberObject(NUMBER_INSTANCE)).toBe(FALSE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isNumberObject(STRING)).toBe(FALSE));
        it(`String(${STRING})`, () => expect(isNumberObject(STRING_INSTANCE)).toBe(FALSE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isNumberObject(SYMBOL_NUMBER)).toBe(FALSE));
        it(`Symbol(${STRING})`, () => expect(isNumberObject(SYMBOL_STRING)).toBe(FALSE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isNumberObject(UNDEFINED)).toBe(FALSE));
      // ... object.
      describe(`object`, () => {
        // BigInt
        describe(`BigInt`, () => it(`${BIGINT_EXPECTATION}`, () => expect(isNumberObject(BIGINT_INSTANCE)).toBe(FALSE)));
        // Boolean
        describe(`Boolean`, () => {
          it(`${TRUE_EXPECTATION}`, () => expect(isNumberObject(TRUE_INSTANCE)).toBe(FALSE));
          it(`${FALSE_EXPECTATION}`, () => expect(isNumberObject(FALSE_INSTANCE)).toBe(FALSE));
        });
        // Number
        describe(`Number`, () => it(`new Number(${NUMBER})`, () => expect(isNumberObject(NUMBER_NEW_INSTANCE)).toBe(TRUE)));
        // String
        describe(`String`, () => it(`new String(${STRING})`, () => expect(isNumberObject(STRING_NEW_INSTANCE)).toBe(FALSE)));
      });
    });
  });
});
