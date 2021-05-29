// Function.
import { isObjectKeys } from '../lib/is-object-keys.func';
// Constant.
import { ACCESSOR_DESCRIPTOR, DATA_DESCRIPTOR, OBJECT_ONE } from '../../testing/variables/object.const';
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../../testing/variables/big-int.const';
import { Class, CLASS } from '../../testing/variables/class.const';
import { FALSE, TRUE, TRUE_INSTANCE, FALSE_INSTANCE, FALSE_EXPECTATION, TRUE_EXPECTATION } from '../../testing/variables/boolean.const';
import { FUNCTION } from '../../testing/variables/function.const';
import { NULL } from '../../testing/variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../testing/variables/number.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../testing/variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../testing/variables/strict/symbol.const';
import { UNDEFINED } from '../../testing/variables/undefined.const';

describe(isObjectKeys.name , () => {
  // Defined.
  it('is DEFINED', () => expect(isObjectKeys).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    // ... instance.
    describe(`instance`, () => {
      describe(`CLASS`, () => {
        // number.
        it('has number key', () => {
          expect(isObjectKeys(CLASS, 1030405027)).toBe(TRUE);
          expect(isObjectKeys(CLASS, 5)).toBe(TRUE);
          expect(isObjectKeys(CLASS, [5, 1030405027])).toBe(TRUE);
        });
        // It doesn't find getter number
        it('has not find getter number', () => expect(isObjectKeys(CLASS, NUMBER)).toBe(FALSE));
        // string.
        it('has string key', () => {
          expect(isObjectKeys(CLASS, 'surname')).toBe(TRUE);
          expect(isObjectKeys(CLASS, ['firstName', 'surname'])).toBe(TRUE);
        });
        // symbol.
        it('has not find getter symbol key', () => {
          // It does not find getter symbol key in class
          expect(isObjectKeys(CLASS, SYMBOL_NUMBER)).toBe(FALSE);
          expect(isObjectKeys(CLASS, SYMBOL_STRING)).toBe(FALSE);
          expect(isObjectKeys(CLASS, [SYMBOL_NUMBER, SYMBOL_STRING])).toBe(FALSE);
        });

        // mixed.
        it('has string and number key', () => expect(isObjectKeys(CLASS, [1030405027, 'firstName', 'surname'])).toBe(TRUE));
      });
    });
    // ... function.
    describe(`function`, () => {
      it(`FUNCTION`, () => expect(isObjectKeys(FUNCTION, 'function')).toBe(FALSE));
      it(`CLASS`, () => expect(isObjectKeys(Class, 'function')).toBe(FALSE));
    });
    // ... objects.
    describe('object', () => {
      describe(`descriptor`, () => {
        it(`DATA_DESCRIPTOR`, () => {
          expect(isObjectKeys(DATA_DESCRIPTOR, ['writable', 'value'], ['get', 'set'])).toBe(TRUE);
          expect(isObjectKeys(DATA_DESCRIPTOR, ['writable', 'value'])).toBe(TRUE);
          expect(isObjectKeys(DATA_DESCRIPTOR, 'writable', 'value')).toBe(TRUE);
          expect(isObjectKeys(DATA_DESCRIPTOR, ['get', 'set'])).toBe(FALSE);
          expect(isObjectKeys(DATA_DESCRIPTOR, 'get', 'set')).toBe(FALSE);
          expect(isObjectKeys(DATA_DESCRIPTOR, ['configurable', 'enumerable'], 'writable', 'value')).toBe(TRUE);
          expect(isObjectKeys(DATA_DESCRIPTOR, ['configurable', 'enumerable'], 'value')).toBe(TRUE);
          expect(isObjectKeys(DATA_DESCRIPTOR, ['configurable', 'enumerable'], 'writable')).toBe(TRUE);
        });
        it(`ACCESSOR_DESCRIPTOR`, () => {
          expect(isObjectKeys(ACCESSOR_DESCRIPTOR, ['writable', 'value'], ['get', 'set'])).toBe(TRUE);
          expect(isObjectKeys(ACCESSOR_DESCRIPTOR, ['configurable', 'enumerable'], 'writable', 'value')).toBe(TRUE);
          expect(isObjectKeys(ACCESSOR_DESCRIPTOR, ['configurable', 'enumerable'], 'get')).toBe(TRUE);
          expect(isObjectKeys(ACCESSOR_DESCRIPTOR, ['configurable', 'enumerable'], 'set')).toBe(TRUE);
        });
      });
      describe(`OBJECT_ONE`, () => {
        // number.
        it('has number key', () => {
          expect(isObjectKeys(OBJECT_ONE, 1030405027)).toBe(TRUE);
          expect(isObjectKeys(OBJECT_ONE, 5)).toBe(TRUE);
          expect(isObjectKeys(OBJECT_ONE, NUMBER)).toBe(TRUE); // It doesn't find getter
          expect(isObjectKeys(OBJECT_ONE, [5, 1030405027])).toBe(TRUE);
        });
        // string.
        it('has string key', () => {
          expect(isObjectKeys(OBJECT_ONE, 'key as string')).toBe(TRUE);
          expect(isObjectKeys(OBJECT_ONE, 'x')).toBe(TRUE);
          expect(isObjectKeys(OBJECT_ONE, STRING)).toBe(TRUE);
          expect(isObjectKeys(OBJECT_ONE, ['key as string', 'x', STRING])).toBe(TRUE);
        });
        // symbol.
        it('has symbol key', () => {
          expect(isObjectKeys(OBJECT_ONE, SYMBOL_NUMBER)).toBe(TRUE);
          expect(isObjectKeys(OBJECT_ONE, SYMBOL_STRING)).toBe(TRUE);
          expect(isObjectKeys(OBJECT_ONE, [SYMBOL_NUMBER, SYMBOL_STRING])).toBe(TRUE);
        });
        // mixed.
        it('has mixed key', () => {
          expect(isObjectKeys(OBJECT_ONE, [
            'key as string',
            'x',
            1030405027,
            5,
            NUMBER,
            STRING,
            SYMBOL_NUMBER,
            SYMBOL_STRING,
          ])).toBe(TRUE);
          // TRUE, TRUE
          expect(isObjectKeys(OBJECT_ONE, SYMBOL_NUMBER, SYMBOL_STRING)).toBe(TRUE);
          // [TRUE, TRUE] OR [TRUE, TRUE]
          expect(isObjectKeys(OBJECT_ONE, [SYMBOL_NUMBER, STRING], [SYMBOL_STRING, NUMBER])).toBe(TRUE);
          // TRUE OR FALSE
          expect(isObjectKeys(OBJECT_ONE, STRING, 'no property')).toBe(TRUE);
          // FALSE OR TRUE
          expect(isObjectKeys(OBJECT_ONE, 'no property', NUMBER)).toBe(TRUE);
          // [FALSE] OR [FALSE]
          expect(isObjectKeys(OBJECT_ONE, ['no property'], ['no property'])).toBe(FALSE);
          // FALSE OR FALSE
          expect(isObjectKeys(OBJECT_ONE, 'no property one', 'no property two')).toBe(FALSE);
          // [FALSE] OR FALSE
          expect(isObjectKeys(OBJECT_ONE, ['no property one'], 'no property two')).toBe(FALSE);
          // FALSE OR [FALSE]
          expect(isObjectKeys(OBJECT_ONE, 'no property one', ['no property two'])).toBe(FALSE);
          // FALSE OR [FALSE, TRUE]
          expect(isObjectKeys(OBJECT_ONE, 'no property one', ['no property two', STRING])).toBe(FALSE);
          // [FALSE, TRUE] OR FALSE
          expect(isObjectKeys(OBJECT_ONE, ['no property one', STRING], 'no property two')).toBe(FALSE);
          // TRUE OR [FALSE, TRUE]
          expect(isObjectKeys(OBJECT_ONE, NUMBER, ['no property two', STRING])).toBe(TRUE);
          // [FALSE, TRUE] OR TRUE
          expect(isObjectKeys(OBJECT_ONE, ['no property one', STRING], NUMBER)).toBe(TRUE);
        });
      });
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => it(`${BIGINT}`, () => expect(isObjectKeys(BIGINT, 'bigint')).toBe(FALSE)));
      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isObjectKeys(TRUE, 'boolean')).toBe(FALSE));
        it(`${FALSE}`, () => expect(isObjectKeys(FALSE, 'boolean')).toBe(FALSE));
      });
      // null
      it(`${NULL}`, () => expect(isObjectKeys(NULL, 'null')).toBe(FALSE));
      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isObjectKeys(NUMBER, 'number')).toBe(FALSE));
        it(`Number(${NUMBER})`, () => expect(isObjectKeys(NUMBER_INSTANCE, 'number')).toBe(FALSE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isObjectKeys(STRING, 'string')).toBe(FALSE));
        it(`String(${STRING})`, () => expect(isObjectKeys(STRING_INSTANCE, 'string')).toBe(FALSE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isObjectKeys(SYMBOL_NUMBER, 'symbol')).toBe(FALSE));
        it(`Symbol(${STRING})`, () => expect(isObjectKeys(SYMBOL_STRING, 'symbol')).toBe(FALSE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isObjectKeys(UNDEFINED, 'undefined')).toBe(FALSE));
      // ... object.
      describe(`object`, () => {
        // BigInt
        describe(`BigInt`, () => it(`${BIGINT_EXPECTATION}`, () => expect(isObjectKeys(BIGINT_INSTANCE, 'bigint')).toBe(FALSE)));
        // Boolean
        describe(`Boolean`, () => {
          it(`${TRUE_EXPECTATION}`, () => expect(isObjectKeys(TRUE_INSTANCE, 'boolean')).toBe(FALSE));
          it(`${FALSE_EXPECTATION}`, () => expect(isObjectKeys(FALSE_INSTANCE, 'boolean')).toBe(FALSE));
        });
        // Number
        describe(`Number`, () => it(`new Number(${NUMBER})`, () => expect(isObjectKeys(NUMBER_NEW_INSTANCE, 'number')).toBe(FALSE)));
        // String
        describe(`String`, () => it(`new String(${STRING})`, () => expect(isObjectKeys(STRING_NEW_INSTANCE, 'string')).toBe(FALSE)));
      });
    });
  });
});
