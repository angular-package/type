// Function.
import { isPrimitive } from '../lib/is-primitive.func';
// Variables.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from './variables/big-int.const';
import { FALSE, TRUE, TRUE_INSTANCE, FALSE_INSTANCE, FALSE_EXPECTATION, TRUE_EXPECTATION } from './variables/boolean.const';
import { NULL } from './variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from './variables/number.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from './variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from './variables/symbol.const';
import { UNDEFINED } from './variables/undefined.const';

describe(isPrimitive.name, () => {
  // Defined.
  it('is DEFINED', () => expect(isPrimitive).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isPrimitive<string>(STRING, 'string' , (result: boolean, value: string) => {
        expect(result).toBe(TRUE);
        expect(value).toEqual(STRING);
        return result;
      });
    });

    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => {
        it(`${BIGINT}`, () => expect(isPrimitive(BIGINT, 'bigint')).toBe(TRUE));
        it(`${BIGINT_EXPECTATION}`, () => expect(isPrimitive(BIGINT_INSTANCE, 'bigint')).toBe(TRUE));
      });

      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isPrimitive(TRUE, 'boolean')).toBe(TRUE));
        it(`${FALSE}`, () => expect(isPrimitive(FALSE, 'boolean')).toBe(TRUE));
        it(`${TRUE_EXPECTATION}`, () => expect(isPrimitive(TRUE_INSTANCE, 'boolean')).toBe(TRUE));
        it(`${FALSE_EXPECTATION}`, () => expect(isPrimitive(FALSE_INSTANCE, 'boolean')).toBe(TRUE));
      });

      // null
      it(`${NULL}`, () => expect(isPrimitive(NULL, 'null')).toBe(TRUE));

      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isPrimitive(NUMBER, 'number')).toBe(TRUE));
        it(`Number(${NUMBER})`, () => expect(isPrimitive(NUMBER_INSTANCE, 'number')).toBe(TRUE));
        it(`new Number(${NUMBER})`, () => expect(isPrimitive(NUMBER_NEW_INSTANCE, 'number')).toBe(TRUE));
      });

      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isPrimitive(STRING, 'string')).toBe(TRUE));
        it(`String(${STRING})`, () => expect(isPrimitive(STRING_INSTANCE, 'string')).toBe(TRUE));
        it(`new String(${STRING})`, () => expect(isPrimitive(STRING_NEW_INSTANCE, 'string')).toBe(TRUE));
      });

      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isPrimitive(SYMBOL_NUMBER, 'symbol')).toBe(TRUE));
        it(`Symbol(${STRING})`, () => expect(isPrimitive(SYMBOL_STRING, 'symbol')).toBe(TRUE));
      });

      // undefined
      it(`${UNDEFINED}`, () => expect(isPrimitive(UNDEFINED, 'undefined')).toBe(TRUE));
    });
  });
});
