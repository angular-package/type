// Function.
import { isObjectKeyIn } from '../lib/is-object-key-in.func';
// Variables.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from './variables/big-int.const';
import { Class, CLASS } from './variables/class.const';
import { FALSE, TRUE, TRUE_INSTANCE, FALSE_INSTANCE, FALSE_EXPECTATION, TRUE_EXPECTATION } from './variables/boolean.const';
import { FUNCTION } from './variables/function.const';
import { NULL } from './variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from './variables/number.const';
import { OBJECT_ONE } from './variables/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from './variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from './variables/symbol.const';
import { UNDEFINED } from './variables/undefined.const';

describe(isObjectKeyIn.name , () => {
  // Defined.
  it('is DEFINED', () => expect(isObjectKeyIn).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isObjectKeyIn(CLASS, ['firstName', 'surname'], (result: boolean, value: Class) => {
        expect(result).toBe(TRUE);
        expect(value).toEqual(CLASS);
        return result;
      });
    });
    // ... instance.
    describe(`instance`, () => {
      describe(`CLASS`, () => {
        // number.
        it('has number key', () => {
          expect(isObjectKeyIn(CLASS, 1030405027)).toBe(TRUE);
          expect(isObjectKeyIn(CLASS, 5)).toBe(TRUE);
          expect(isObjectKeyIn(CLASS, NUMBER)).toBe(TRUE); // It does find getter number
          expect(isObjectKeyIn(CLASS, [5, 1030405027])).toBe(TRUE);
        });

        // string.
        it('has string key', () => {
          expect(isObjectKeyIn(CLASS, 'surname')).toBe(TRUE);
          expect(isObjectKeyIn(CLASS, ['firstName', 'surname'])).toBe(TRUE);
        });

        // symbol.
        it('has getter symbol key', () => {
          // It does find getter symbol key
          expect(isObjectKeyIn(CLASS, SYMBOL_NUMBER)).toBe(TRUE);
          expect(isObjectKeyIn(CLASS, SYMBOL_STRING)).toBe(TRUE);
          expect(isObjectKeyIn(CLASS, [SYMBOL_NUMBER, SYMBOL_STRING])).toBe(TRUE);
        });

        // mixed.
        it('has string and number key', () => expect(isObjectKeyIn(CLASS, [1030405027, 'firstName', 'surname'])).toBe(TRUE));
      });
    });

    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isObjectKeyIn(FUNCTION, 'function')).toBe(FALSE));
      it(`CLASS`, () => expect(isObjectKeyIn(Class, 'function')).toBe(FALSE));
    });

    // ... objects.
    describe('object', () => {
      describe(`OBJECT_ONE`, () => {
        // number.
        it('has number key', () => {
          expect(isObjectKeyIn(OBJECT_ONE, 1030405027)).toBe(TRUE);
          expect(isObjectKeyIn(OBJECT_ONE, 5)).toBe(TRUE);
          expect(isObjectKeyIn(OBJECT_ONE, NUMBER)).toBe(TRUE); // It doesn't find getter
          expect(isObjectKeyIn(OBJECT_ONE, [5, 1030405027])).toBe(TRUE);
        });

        // string.
        it('has string key', () => {
          expect(isObjectKeyIn(OBJECT_ONE, 'key as string')).toBe(TRUE);
          expect(isObjectKeyIn(OBJECT_ONE, 'x')).toBe(TRUE);
          expect(isObjectKeyIn(OBJECT_ONE, STRING)).toBe(TRUE);
          expect(isObjectKeyIn(OBJECT_ONE, ['key as string', 'x', STRING])).toBe(TRUE);
        });

        // symbol.
        it('has symbol key', () => {
          expect(isObjectKeyIn(OBJECT_ONE, SYMBOL_NUMBER)).toBe(TRUE);
          expect(isObjectKeyIn(OBJECT_ONE, SYMBOL_STRING)).toBe(TRUE);
          expect(isObjectKeyIn(OBJECT_ONE, [SYMBOL_NUMBER, SYMBOL_STRING])).toBe(TRUE);
        });

        // mixed.
        it('has mixed key', () => {
          expect(isObjectKeyIn(OBJECT_ONE, [
            'key as string',
            'x',
            1030405027,
            5,
            NUMBER,
            STRING,
            SYMBOL_NUMBER,
            SYMBOL_STRING,
          ])).toBe(TRUE);
        });
      });
    });

    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => {
        it(`${BIGINT}`, () => expect(isObjectKeyIn(BIGINT, 'bigint')).toBe(FALSE));
        it(`${BIGINT_EXPECTATION}`, () => expect(isObjectKeyIn(BIGINT_INSTANCE, 'bigint')).toBe(FALSE));
      });

      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isObjectKeyIn(TRUE, 'boolean')).toBe(FALSE));
        it(`${FALSE}`, () => expect(isObjectKeyIn(FALSE, 'boolean')).toBe(FALSE));
        it(`${TRUE_EXPECTATION}`, () => expect(isObjectKeyIn(TRUE_INSTANCE, 'boolean')).toBe(FALSE));
        it(`${FALSE_EXPECTATION}`, () => expect(isObjectKeyIn(FALSE_INSTANCE, 'boolean')).toBe(FALSE));
      });

      // null
      it(`${NULL}`, () => expect(isObjectKeyIn(NULL, 'null')).toBe(FALSE));

      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isObjectKeyIn(NUMBER, 'number')).toBe(FALSE));
        it(`Number(${NUMBER})`, () => expect(isObjectKeyIn(NUMBER_INSTANCE, 'number')).toBe(FALSE));
        it(`new Number(${NUMBER})`, () => expect(isObjectKeyIn(NUMBER_NEW_INSTANCE, 'number')).toBe(FALSE));
      });

      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isObjectKeyIn(STRING, 'string')).toBe(FALSE));
        it(`String(${STRING})`, () => expect(isObjectKeyIn(STRING_INSTANCE, 'string')).toBe(FALSE));
        it(`new String(${STRING})`, () => expect(isObjectKeyIn(STRING_NEW_INSTANCE, 'string')).toBe(FALSE));
      });

      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isObjectKeyIn(SYMBOL_NUMBER, 'symbol')).toBe(FALSE));
        it(`Symbol(${STRING})`, () => expect(isObjectKeyIn(SYMBOL_STRING, 'symbol')).toBe(FALSE));
      });

      // undefined
      it(`${UNDEFINED}`, () => expect(isObjectKeyIn(UNDEFINED, 'undefined')).toBe(FALSE));
    });
  });
});
