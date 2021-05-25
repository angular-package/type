// Function.
import { isKey } from '../lib/is-key.func';
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

describe(isKey.name, () => {
  // Defined.
  it('is DEFINED', () => expect(isKey).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isKey('test', (result: boolean) => {
        expect(result).toBe(TRUE);
        return result;
      });
    });
    // ... arrays.
    describe(`array`, () => {
      // it(`${FUNCTION}`, () => expect(isKey(FUNCTION, 'function')).toBe(FALSE));
      // it(`${Class}`, () => expect(isKey(Class, 'function')).toBe(FALSE));
    });
    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isKey(FUNCTION)).toBe(FALSE));
      it(`Class`, () => expect(isKey(Class)).toBe(FALSE));
    });
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(isKey(CLASS)).toBe(FALSE));
      it(`OBJECT_ONE`, () => expect(isKey(OBJECT_ONE)).toBe(FALSE));
      it(`OBJECT_TWO`, () => expect(isKey(OBJECT_TWO)).toBe(FALSE));
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(isKey(OBJECT_ONE_NEW)).toBe(FALSE));
      it(`new Object(OBJECT_TWO_NEW})`, () => expect(isKey(OBJECT_TWO_NEW)).toBe(FALSE));
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => it(`${BIGINT}`, () => expect(isKey(BIGINT)).toBe(FALSE)));
      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isKey(TRUE)).toBe(FALSE));
        it(`${FALSE}`, () => expect(isKey(FALSE)).toBe(FALSE));
      });
      // null
      it(`${NULL}`, () => expect(isKey(NULL)).toBe(FALSE));
      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isKey(NUMBER)).toBe(TRUE));
        it(`Number(${NUMBER})`, () => expect(isKey(NUMBER_INSTANCE)).toBe(TRUE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isKey(STRING)).toBe(TRUE));
        it(`String(${STRING})`, () => expect(isKey(STRING_INSTANCE)).toBe(TRUE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isKey(SYMBOL_NUMBER)).toBe(TRUE));
        it(`Symbol(${STRING})`, () => expect(isKey(SYMBOL_STRING)).toBe(TRUE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isKey(UNDEFINED)).toBe(FALSE));
      // ... object.
      describe(`object`, () => {
        // BigInt
        describe(`BigInt`, () => it(`${BIGINT_EXPECTATION}`, () => expect(isKey(BIGINT_INSTANCE)).toBe(FALSE)));
        // Boolean
        describe(`Boolean`, () => {
          it(`${TRUE_EXPECTATION}`, () => expect(isKey(TRUE_INSTANCE)).toBe(FALSE));
          it(`${FALSE_EXPECTATION}`, () => expect(isKey(FALSE_INSTANCE)).toBe(FALSE));
        });
        // Number
        describe(`Number`, () => it(`new Number(${NUMBER})`, () => expect(isKey(NUMBER_NEW_INSTANCE)).toBe(TRUE)));
        // String
        describe(`String`, () => it(`new String(${STRING})`, () => expect(isKey(STRING_NEW_INSTANCE)).toBe(TRUE)));
      });
    });
  });
});
