// Function.
import { isClass } from '../lib/is-class.func';
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
 * ✓ typeOf() === 'function' & typeof === 'function' && instanceof Object === true && instanceof Function === true
 */
describe(isClass.name, () => {
  // Defined.
  it('is DEFINED', () => expect(isClass).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isClass(Class, (result: boolean, value: any) => {
        expect(result).toBe(TRUE);
        expect(value).toEqual(Class);
        return result;
      });
    });
    // ... arrays.
    describe(`array`, () => {
      // it(`${FUNCTION}`, () => expect(isClass(FUNCTION, 'function')).toBe(FALSE));
      // it(`${Class}`, () => expect(isClass(Class, 'function')).toBe(FALSE));
    });
    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isClass(FUNCTION)).toBe(FALSE));
      it(`Class`, () => expect(isClass(Class)).toBe(TRUE));
    });
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(isClass(CLASS)).toBe(FALSE));
      it(`OBJECT_ONE`, () => expect(isClass(OBJECT_ONE)).toBe(FALSE));
      it(`OBJECT_TWO`, () => expect(isClass(OBJECT_TWO)).toBe(FALSE));
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(isClass(OBJECT_ONE_NEW)).toBe(FALSE));
      it(`new Object(OBJECT_TWO_NEW})`, () => expect(isClass(OBJECT_TWO_NEW)).toBe(FALSE));
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => it(`${BIGINT}`, () => expect(isClass(BIGINT)).toBe(FALSE)));
      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isClass(TRUE)).toBe(FALSE));
        it(`${FALSE}`, () => expect(isClass(FALSE)).toBe(FALSE));
      });
      // null
      it(`${NULL}`, () => expect(isClass(NULL)).toBe(FALSE));
      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isClass(NUMBER)).toBe(FALSE));
        it(`Number(${NUMBER})`, () => expect(isClass(NUMBER_INSTANCE)).toBe(FALSE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isClass(STRING)).toBe(FALSE));
        it(`String(${STRING})`, () => expect(isClass(STRING_INSTANCE)).toBe(FALSE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isClass(SYMBOL_NUMBER)).toBe(FALSE));
        it(`Symbol(${STRING})`, () => expect(isClass(SYMBOL_STRING)).toBe(FALSE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isClass(UNDEFINED)).toBe(FALSE));
      // ... object.
      describe(`object`, () => {
        // BigInt
        describe(`BigInt`, () => it(`${BIGINT_EXPECTATION}`, () => expect(isClass(BIGINT_INSTANCE)).toBe(FALSE)));
        // Boolean
        describe(`Boolean`, () => {
          it(`${TRUE_EXPECTATION}`, () => expect(isClass(TRUE_INSTANCE)).toBe(FALSE));
          it(`${FALSE_EXPECTATION}`, () => expect(isClass(FALSE_INSTANCE)).toBe(FALSE));
        });
        // Number
        describe(`Number`, () => it(`new Number(${NUMBER})`, () => expect(isClass(NUMBER_NEW_INSTANCE)).toBe(FALSE)));
        // String
        describe(`String`, () => it(`new String(${STRING})`, () => expect(isClass(STRING_NEW_INSTANCE)).toBe(FALSE)));
      });
    });
  });
});
