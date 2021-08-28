import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { isClass } from '../lib/is-class.func';
// Constant.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../../testing/src/big-int.const';
import { Class, CLASS } from '../../testing/src/class.const';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE, FALSE_EXPECTATION, TRUE_EXPECTATION } from '../../testing/src/boolean.const';
import { FUNCTION } from '../../testing/src/function.const';
import { NULL } from '../../testing/src/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../testing/src/number.const';
import { OBJECT_ONE, OBJECT_TWO, OBJECT_ONE_NEW, OBJECT_TWO_NEW } from '../../testing/src/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../testing/src/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../testing/src/symbol.const';
import { UNDEFINED } from '../../testing/src/undefined.const';
/**
 * Initialize testing.
 */
const testing = new Testing(tests.is.class.describe, tests.is.class.it);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(isClass.name, () => {
  // Defined.
  testing.it('is DEFINED', () => expect(isClass).toBeDefined())

  // Checks ...
  .describe(`checks`, () => {
    testing.it('callback', () => {
      isClass(Class, (result, value, payload) => {
        expect(result).toBe(TRUE);
        if (payload) {
          expect(value).toEqual(Class);
        }
        return result;
      });
    })
    // ... arrays.
    .describe(`array`, () => {
      // it(`${FUNCTION}`, () => expect(isClass(FUNCTION, 'function')).toBe(FALSE));
      // it(`${Class}`, () => expect(isClass(Class, 'function')).toBe(FALSE));
    })
    // ... function.
    .describe(`function`, () => {
      testing
        .it(`FUNCTION`, () => expect(isClass(FUNCTION)).toBe(FALSE))
        .it(`Class`, () => expect(isClass(Class)).toBe(TRUE));
    })
    // ... objects.
    .describe('object', () => {
      testing
        .it(`CLASS`, () => expect(isClass(CLASS)).toBe(FALSE))
        .it(`OBJECT_ONE`, () => expect(isClass(OBJECT_ONE)).toBe(FALSE))
        .it(`OBJECT_TWO`, () => expect(isClass(OBJECT_TWO)).toBe(FALSE))
        .it(`new Object(OBJECT_ONE_NEW})`, () => expect(isClass(OBJECT_ONE_NEW)).toBe(FALSE))
        .it(`new Object(OBJECT_TWO_NEW})`, () => expect(isClass(OBJECT_TWO_NEW)).toBe(FALSE));
    })
    // ... primitives.
    .describe(`primitive`, () => {
      testing
        // bigint
        .describe(`bigint`, () => testing.it(`${BIGINT}`, () => expect(isClass(BIGINT)).toBe(FALSE)))
        // boolean
        .describe(`boolean`, () => {
          testing
            .it(`${TRUE}`, () => expect(isClass(TRUE)).toBe(FALSE))
            .it(`${FALSE}`, () => expect(isClass(FALSE)).toBe(FALSE));
        })
        // null
        .it(`${NULL}`, () => expect(isClass(NULL)).toBe(FALSE))
        // number
        .describe(`number`, () => {
          testing
            .it(`${NUMBER}`, () => expect(isClass(NUMBER)).toBe(FALSE))
            .it(`Number(${NUMBER})`, () => expect(isClass(NUMBER_INSTANCE)).toBe(FALSE));
        })
        // string
        .describe(`string`, () => {
          testing
            .it(`${STRING}`, () => expect(isClass(STRING)).toBe(FALSE))
            .it(`String(${STRING})`, () => expect(isClass(STRING_INSTANCE)).toBe(FALSE));
        })
        // symbol
        .describe(`symbol`, () => {
          testing
            .it(`Symbol(${NUMBER})`, () => expect(isClass(SYMBOL_NUMBER)).toBe(FALSE))
            .it(`Symbol(${STRING})`, () => expect(isClass(SYMBOL_STRING)).toBe(FALSE));
        })
        // undefined
        .it(`${UNDEFINED}`, () => expect(isClass(UNDEFINED)).toBe(FALSE))
        // ... object.
        .describe(`object`, () => {
          testing
            // BigInt
            .describe(`BigInt`, () => it(`${BIGINT_EXPECTATION}`, () => expect(isClass(BIGINT_INSTANCE)).toBe(FALSE)))
            // Boolean
            .describe(`Boolean`, () => {
              it(`${TRUE_EXPECTATION}`, () => expect(isClass(TRUE_INSTANCE)).toBe(FALSE));
              it(`${FALSE_EXPECTATION}`, () => expect(isClass(FALSE_INSTANCE)).toBe(FALSE));
            })
            // Number
            .describe(`Number`, () => it(`new Number(${NUMBER})`, () => expect(isClass(NUMBER_NEW_INSTANCE)).toBe(FALSE)))
            // String
            .describe(`String`, () => it(`new String(${STRING})`, () => expect(isClass(STRING_NEW_INSTANCE)).toBe(FALSE)));
        });
    });
  });
});
