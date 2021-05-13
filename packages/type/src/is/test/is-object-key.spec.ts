// Function.
import { isObjectKey } from '../lib/is-object-key.func';
// Variables.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from './variables/big-int.const';
import { Class, CLASS } from './variables/class.const';
import { FALSE, TRUE, TRUE_INSTANCE, FALSE_INSTANCE, FALSE_EXPECTATION, TRUE_EXPECTATION } from './variables/boolean.const';
import { FUNCTION } from './variables/function.const';
import { NULL } from './variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from './variables/number.const';
import { OBJECT_ONE, OBJECT_TWO, OBJECT_ONE_NEW, OBJECT_TWO_NEW, ObjectTwo, ObjectOne } from './variables/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from './variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from './variables/symbol.const';
import { UNDEFINED } from './variables/undefined.const';

describe(isObjectKey.name , () => {
  // Defined.
  it('is DEFINED', () => expect(isObjectKey).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isObjectKey(CLASS, ['firstName', 'surname'], (result: boolean, value: Class) => {
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
          expect(isObjectKey(CLASS, 1030405027)).toBe(TRUE);
          expect(isObjectKey(CLASS, 5)).toBe(TRUE);
          expect(isObjectKey(CLASS, [5, 1030405027])).toBe(TRUE);
        });

        // It doesn't find getter number
        it('has not find getter number', () => expect(isObjectKey(CLASS, NUMBER)).toBe(FALSE));

        // string.
        it('has string key', () => {
          expect(isObjectKey(CLASS, 'surname')).toBe(TRUE);
          expect(isObjectKey(CLASS, ['firstName', 'surname'])).toBe(TRUE);
        });

        // symbol.
        it('has not find getter symbol key', () => {
          // It does not find getter symbol key in class
          expect(isObjectKey(CLASS, SYMBOL_NUMBER)).toBe(FALSE);
          expect(isObjectKey(CLASS, SYMBOL_STRING)).toBe(FALSE);
          expect(isObjectKey(CLASS, [SYMBOL_NUMBER, SYMBOL_STRING])).toBe(FALSE);
        });

        // mixed.
        it('has string and number key', () => expect(isObjectKey(CLASS, [1030405027, 'firstName', 'surname'])).toBe(TRUE));
      });
    });

    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isObjectKey(FUNCTION, 'function')).toBe(FALSE));
      it(`CLASS`, () => expect(isObjectKey(Class, 'function')).toBe(FALSE));
    });

    // ... objects.
    describe('object', () => {
      describe(`OBJECT_ONE`, () => {
        // number.
        it('has number key', () => {
          expect(isObjectKey(OBJECT_ONE, 1030405027)).toBe(TRUE);
          expect(isObjectKey(OBJECT_ONE, 5)).toBe(TRUE);
          expect(isObjectKey(OBJECT_ONE, NUMBER)).toBe(TRUE); // It doesn't find getter
          expect(isObjectKey(OBJECT_ONE, [5, 1030405027])).toBe(TRUE);
        });

        // string.
        it('has string key', () => {
          expect(isObjectKey(OBJECT_ONE, 'key as string')).toBe(TRUE);
          expect(isObjectKey(OBJECT_ONE, 'x')).toBe(TRUE);
          expect(isObjectKey(OBJECT_ONE, STRING)).toBe(TRUE);
          expect(isObjectKey(OBJECT_ONE, ['key as string', 'x', STRING])).toBe(TRUE);
        });

        // symbol.
        it('has symbol key', () => {
          expect(isObjectKey(OBJECT_ONE, SYMBOL_NUMBER)).toBe(TRUE);
          expect(isObjectKey(OBJECT_ONE, SYMBOL_STRING)).toBe(TRUE);
          expect(isObjectKey(OBJECT_ONE, [SYMBOL_NUMBER, SYMBOL_STRING])).toBe(TRUE);
        });

        // mixed.
        it('has mixed key', () => {
          expect(isObjectKey(OBJECT_ONE, [
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
        it(`${BIGINT}`, () => expect(isObjectKey(BIGINT, 'bigint')).toBe(FALSE));
        it(`${BIGINT_EXPECTATION}`, () => expect(isObjectKey(BIGINT_INSTANCE, 'bigint')).toBe(FALSE));
      });

      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isObjectKey(TRUE, 'boolean')).toBe(FALSE));
        it(`${FALSE}`, () => expect(isObjectKey(FALSE, 'boolean')).toBe(FALSE));
        it(`${FALSE_EXPECTATION}`, () => expect(isObjectKey(TRUE_INSTANCE, 'boolean')).toBe(FALSE));
        it(`${TRUE_EXPECTATION}`, () => expect(isObjectKey(FALSE_INSTANCE, 'boolean')).toBe(FALSE));
      });

      // null
      it(`${NULL}`, () => expect(isObjectKey(NULL, 'null')).toBe(FALSE));

      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isObjectKey(NUMBER, 'number')).toBe(FALSE));
        it(`Number(${NUMBER})`, () => expect(isObjectKey(NUMBER_INSTANCE, 'number')).toBe(FALSE));
        it(`new Number(${NUMBER})`, () => expect(isObjectKey(NUMBER_NEW_INSTANCE, 'number')).toBe(FALSE));
      });

      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isObjectKey(STRING, 'string')).toBe(FALSE));
        it(`String(${STRING})`, () => expect(isObjectKey(STRING_INSTANCE, 'string')).toBe(FALSE));
        it(`new String(${STRING})`, () => expect(isObjectKey(STRING_NEW_INSTANCE, 'string')).toBe(FALSE));
      });

      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isObjectKey(SYMBOL_NUMBER, 'symbol')).toBe(FALSE));
        it(`Symbol(${STRING})`, () => expect(isObjectKey(SYMBOL_STRING, 'symbol')).toBe(FALSE));
      });

      // undefined
      it(`${UNDEFINED}`, () => expect(isObjectKey(UNDEFINED, 'undefined')).toBe(FALSE));
    });
  });
});
