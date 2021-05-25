// Function.
import { isType } from '../lib/is-type.func';
// Variables.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../../testing/variables/big-int.const';
import { Class, CLASS } from '../../testing/variables/class.const';
import { FALSE, TRUE, TRUE_INSTANCE, FALSE_INSTANCE, FALSE_EXPECTATION, TRUE_EXPECTATION } from '../../testing/variables/boolean.const';
import { FUNCTION } from '../../testing/variables/function.const';
import { NULL } from '../../testing/variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../testing/variables/number.const';
import { OBJECT_ONE, OBJECT_TWO, OBJECT_ONE_NEW, OBJECT_TWO_NEW, ObjectTwo, ObjectOne } from '../../testing/variables/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../testing/variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../testing/variables/symbol.const';
import { UNDEFINED } from '../../testing/variables/undefined.const';

describe(isType.name, () => {
  // Defined.
  it('is DEFINED', () => expect(isType).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isType(STRING, 'string', (result: boolean, value: any) => {
        expect(result).toBe(TRUE);
        expect(value).toEqual(STRING);
        return result;
      });
      isType(NUMBER, 'number', (result: boolean, value: any) => {
        expect(result).toBe(TRUE);
        expect(value).toEqual(NUMBER);
        return result;
      });
    });
    // ... instance.
    describe(`instance`, () => it(`Class`, () => expect(isType<Class>(CLASS, Class)).toBe(TRUE)));
    // ... function.
    describe(`function`, () => {
      it(`${FUNCTION}`, () => expect(isType(FUNCTION, 'function')).toBe(TRUE));
      it(`${CLASS}`, () => expect(isType(Class, 'function')).toBe(FALSE));
    });
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(isType(CLASS, 'object')).toBe(TRUE));
      it(`OBJECT_ONE`, () => expect(isType<ObjectOne>(OBJECT_ONE, 'object')).toBe(TRUE));
      it(`OBJECT_ONE_NEW`, () => expect(isType<ObjectTwo>(OBJECT_TWO, 'object')).toBe(TRUE));
      it(`new Object(OBJECT_ONE_NEW)`, () => expect(isType<ObjectOne>(OBJECT_ONE_NEW, 'object')).toBe(TRUE));
      it(`new Object(OBJECT_TWO_NEW)`, () => expect(isType<ObjectTwo>(OBJECT_TWO_NEW, 'object')).toBe(TRUE));
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => it(`${BIGINT}`, () => expect(isType(BIGINT, 'bigint')).toBe(TRUE)));
      // boolean
      describe(`boolean`, () => {
        it(`${TRUE}`, () => expect(isType(TRUE, 'boolean')).toBe(TRUE));
        it(`${FALSE}`, () => expect(isType(FALSE, 'boolean')).toBe(TRUE));
      });
      // null
      it(`${NULL}`, () => expect(isType(NULL, 'null')).toBe(TRUE));
      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(isType(NUMBER, 'number')).toBe(TRUE));
        it(`Number(${NUMBER})`, () => expect(isType(NUMBER_INSTANCE, 'number')).toBe(TRUE));
      });
      // string
      describe(`string`, () => {
        it(`${STRING}`, () => expect(isType(STRING, 'string')).toBe(TRUE));
        it(`String(${STRING})`, () => expect(isType(STRING_INSTANCE, 'string')).toBe(TRUE));
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(isType(SYMBOL_NUMBER, 'symbol')).toBe(TRUE));
        it(`Symbol(${STRING})`, () => expect(isType(SYMBOL_STRING, 'symbol')).toBe(TRUE));
      });
      // undefined
      it(`${UNDEFINED}`, () => expect(isType(UNDEFINED, 'undefined')).toBe(TRUE));
      // ... object.
      describe(`object`, () => {
        // BigInt
        describe(`BigInt`, () => it(`${BIGINT_EXPECTATION}`, () => expect(isType(BIGINT_INSTANCE, 'bigint')).toBe(TRUE)));
        // Boolean
        describe(`Boolean`, () => {
          it(`${TRUE_EXPECTATION}`, () => expect(isType(TRUE_INSTANCE, 'boolean')).toBe(FALSE));
          it(`${FALSE_EXPECTATION}`, () => expect(isType(FALSE_INSTANCE, 'boolean')).toBe(FALSE));
        });
        // Number
        describe(`Number`, () => it(`new Number(${NUMBER})`, () => expect(isType(NUMBER_NEW_INSTANCE, 'number')).toBe(FALSE)));
        // String
        describe(`String`, () => it(`new String(${STRING})`, () => expect(isType(STRING_NEW_INSTANCE, 'string')).toBe(FALSE)));
      });
    });
  });
});
