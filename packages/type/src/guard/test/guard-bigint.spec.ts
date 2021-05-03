// Function.
import { guardBigInt } from '../lib/guard-big-int.func';
// Variables.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../../is/test/variables/big-int.const';
// import { Class, CLASS } from '../../is/test/variables/class.const';
// import { FUNCTION } from '../../is/test/variables/function.const';
import { NULL } from '../../is/test/variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../is/test/variables/number.const';
// import { OBJECT_ONE, OBJECT_TWO, OBJECT_ONE_NEW, OBJECT_TWO_NEW } from '../../is/test/variables/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../is/test/variables/string.const';
// import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../is/test/variables/symbol.const';
import { TRUE, FALSE, FALSE_EXPECTATION, TRUE_EXPECTATION, TRUE_INSTANCE, FALSE_INSTANCE } from '../../is/test/variables/boolean.const';
import { UNDEFINED } from '../../is/test/variables/undefined.const';

describe(`guardBigInt`, () => {
  // Defined.
  it('is DEFINED', () => expect(guardBigInt).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      guardBigInt(STRING, (result: boolean) => {
        expect(result).toBe(FALSE);
        return result;
      });
    });

    // ... arrays.
    describe(`array`, () => {
      // it(`${FUNCTION}`, () => expect(guardBigInt(FUNCTION, 'function')).toBe(FALSE));
      // it(`${Class}`, () => expect(guardBigInt(Class, 'function')).toBe(FALSE));
    });
    // ... function.
    describe(`function`, () => {
      // it(`FUNCTION`, () => expect(guardBigInt(FUNCTION)).toBe(FALSE));
      // it(`Class`, () => expect(guardBigInt(Class)).toBe(FALSE));
    });
    // ... objects.
    describe('object', () => {
      // it(`CLASS`, () => expect(guardBigInt(CLASS)).toBe(FALSE));
      // it(`OBJECT_ONE`, () => expect(guardBigInt(OBJECT_ONE)).toBe(FALSE));
      // it(`OBJECT_TWO`, () => expect(guardBigInt(OBJECT_TWO)).toBe(FALSE));
      // it(`new Object(OBJECT_ONE_NEW})`, () => expect(guardBigInt(OBJECT_ONE_NEW)).toBe(FALSE));
      // it(`new Object(OBJECT_TWO_NEW})`, () => expect(guardBigInt(OBJECT_TWO_NEW)).toBe(FALSE));
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => {
        it(`${BIGINT}`, () => expect(guardBigInt(BIGINT)).toBe(TRUE));
        it(`${BIGINT_EXPECTATION}`, () => expect(guardBigInt(BIGINT_INSTANCE)).toBe(TRUE));
      });

      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(guardBigInt(TRUE)).toBe(FALSE));
        it(`${FALSE}`, () => expect(guardBigInt(FALSE)).toBe(FALSE));
        it(`${FALSE_EXPECTATION}`, () => expect(guardBigInt(TRUE_INSTANCE)).toBe(FALSE));
        it(`${TRUE_EXPECTATION}`, () => expect(guardBigInt(FALSE_INSTANCE)).toBe(FALSE));
      });

      // null
      it(`${NULL}`, () => expect(guardBigInt(NULL)).toBe(FALSE));

      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(guardBigInt(NUMBER)).toBe(FALSE));
        it(`Number(${NUMBER})`, () => expect(guardBigInt(NUMBER_INSTANCE)).toBe(FALSE));
        it(`new Number(${NUMBER})`, () => expect(guardBigInt(NUMBER_NEW_INSTANCE)).toBe(FALSE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(guardBigInt(STRING)).toBe(FALSE));
        it(`String(${STRING})`, () => expect(guardBigInt(STRING_INSTANCE)).toBe(FALSE));
        it(`new String(${STRING})`, () => expect(guardBigInt(STRING_NEW_INSTANCE)).toBe(FALSE));
      });
      // symbol
      describe(`symbol`, () => {
        // it(`Symbol(${NUMBER})`, () => expect(guardBigInt(SYMBOL_NUMBER)).toBe(FALSE));
        // it(`Symbol(${STRING})`, () => expect(guardBigInt(SYMBOL_STRING)).toBe(FALSE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(guardBigInt(UNDEFINED)).toBe(FALSE));
    });
  });
});
