// Function.
import { isStringObject } from '../lib/is-string-object.func';
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
 * ✓ typeof === 'object' && instanceof String === true && instanceof Object === true
 */
describe(isStringObject.name, () => {
  // Defined.
  it('is DEFINED', () => expect(isStringObject).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isStringObject(STRING_NEW_INSTANCE, (result: boolean, value: String) => {
        expect(result).toBe(TRUE);
        expect(value).toEqual(STRING_NEW_INSTANCE);
        return result;
      });
    });

    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isStringObject(FUNCTION)).toBe(FALSE));
      it(`Class`, () => expect(isStringObject(Class)).toBe(FALSE));
    });
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(isStringObject(CLASS)).toBe(FALSE));
      it(`OBJECT_ONE`, () => expect(isStringObject(OBJECT_ONE)).toBe(FALSE));
      it(`OBJECT_TWO`, () => expect(isStringObject(OBJECT_TWO)).toBe(FALSE));
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(isStringObject(OBJECT_ONE_NEW)).toBe(FALSE));
      it(`new Object(OBJECT_TWO_NEW})`, () => expect(isStringObject(OBJECT_TWO_NEW)).toBe(FALSE));
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => it(`${BIGINT}`, () => expect(isStringObject(BIGINT)).toBe(FALSE)));
      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isStringObject(TRUE)).toBe(FALSE));
        it(`${FALSE}`, () => expect(isStringObject(FALSE)).toBe(FALSE));
      });
      // null
      it(`${NULL}`, () => expect(isStringObject(NULL)).toBe(FALSE));
      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isStringObject(NUMBER)).toBe(FALSE));
        it(`Number(${NUMBER})`, () => expect(isStringObject(NUMBER_INSTANCE)).toBe(FALSE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isStringObject(STRING)).toBe(FALSE));
        it(`String(${STRING})`, () => expect(isStringObject(STRING_INSTANCE)).toBe(FALSE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isStringObject(SYMBOL_NUMBER)).toBe(FALSE));
        it(`Symbol(${STRING})`, () => expect(isStringObject(SYMBOL_STRING)).toBe(FALSE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isStringObject(UNDEFINED)).toBe(FALSE));
      // ... object.
      describe(`object`, () => {
        // BigInt
        describe(`BigInt`, () => it(`${BIGINT_EXPECTATION}`, () => expect(isStringObject(BIGINT_INSTANCE)).toBe(FALSE)));
        // Boolean
        describe(`Boolean`, () => {
          it(`${TRUE_EXPECTATION}`, () => expect(isStringObject(TRUE_INSTANCE)).toBe(FALSE));
          it(`${FALSE_EXPECTATION}`, () => expect(isStringObject(FALSE_INSTANCE)).toBe(FALSE));
        });
        // Number
        describe(`Number`, () => it(`new Number(${NUMBER})`, () => expect(isStringObject(NUMBER_NEW_INSTANCE)).toBe(FALSE)));
        // String
        describe(`String`, () => it(`new String(${STRING})`, () => expect(isStringObject(STRING_NEW_INSTANCE)).toBe(TRUE)));
      });
    });
  });
});
