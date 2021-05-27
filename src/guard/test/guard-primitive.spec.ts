// Function.
import { guardPrimitive } from '../lib/guard-primitive.func';
// Variables.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../../testing/variables/strict/big-int.const';
import { FALSE, TRUE } from '../../testing/variables/strict/boolean.const';
import { NULL } from '../../testing/variables/strict/null.const';
import { NUMBER } from '../../testing/variables/strict/number.const';
import { STRING } from '../../testing/variables/strict/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../testing/variables/strict/symbol.const';
import { UNDEFINED } from '../../testing/variables/strict/undefined.const';

describe(guardPrimitive.name, () => {
  // Defined.
  it('is DEFINED', () => expect(guardPrimitive).toBeDefined());

  // Checks ...
  describe(`guards`, () => {
    it('callback', () => {
      guardPrimitive<string>(STRING, 'string' , (result: boolean, value: string) => {
        expect(result).toBe(TRUE);
        expect(value).toEqual(STRING);
        return result;
      });
    });

    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => {
        it(`${BIGINT}`, () => expect(guardPrimitive(BIGINT, 'bigint')).toBe(TRUE));
        it(`${BIGINT_EXPECTATION}`, () => expect(guardPrimitive(BIGINT_INSTANCE, 'bigint')).toBe(TRUE));
      });

      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(guardPrimitive(TRUE, 'boolean')).toBe(TRUE));
        it(`${FALSE}`, () => expect(guardPrimitive(FALSE, 'boolean')).toBe(TRUE));
        // it(`${TRUE_EXPECTATION}`, () => expect(guardPrimitive(TRUE_INSTANCE, 'boolean')).toBe(TRUE));
        // it(`${FALSE_EXPECTATION}`, () => expect(guardPrimitive(FALSE_INSTANCE, 'boolean')).toBe(TRUE));
      });

      // null
      it(`${NULL}`, () => expect(guardPrimitive(NULL, 'null')).toBe(TRUE));

      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(guardPrimitive(NUMBER, 'number')).toBe(TRUE));
        // it(`Number(${NUMBER})`, () => expect(guardPrimitive(NUMBER_INSTANCE, 'number')).toBe(TRUE));
        // it(`new Number(${NUMBER})`, () => expect(guardPrimitive(NUMBER_NEW_INSTANCE, 'number')).toBe(TRUE));
      });

      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(guardPrimitive(STRING, 'string')).toBe(TRUE));
        // it(`String(${STRING})`, () => expect(guardPrimitive(STRING_INSTANCE, 'string')).toBe(TRUE));
        // it(`new String(${STRING})`, () => expect(guardPrimitive(STRING_NEW_INSTANCE, 'string')).toBe(TRUE));
      });

      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(guardPrimitive(SYMBOL_NUMBER, 'symbol')).toBe(TRUE));
        it(`Symbol(${STRING})`, () => expect(guardPrimitive(SYMBOL_STRING, 'symbol')).toBe(TRUE));
      });

      // undefined
      it(`${UNDEFINED}`, () => expect(guardPrimitive(UNDEFINED, 'undefined')).toBe(TRUE));
    });
  });
});
