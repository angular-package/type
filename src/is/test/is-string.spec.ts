import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { isString } from '../lib/is-string.func';
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
const testing = new Testing(tests.is.string.describe, tests.is.string.it);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(isString.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isString).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isString(STRING, (result, value, payload) => {
            expect(result).toBe(TRUE);
            if (payload) {
              expect(value).toEqual(STRING);
            }
            return result;
          });
        })
        // ... arrays.
        .describe(`array`, () => {
          // it(`${FUNCTION}`, () => expect(isString(FUNCTION, 'function')).toBe(FALSE));
          // it(`${Class}`, () => expect(isString(Class, 'function')).toBe(FALSE));
        })
        // ... function.
        .describe(`function`, () => {
          testing
            .it(`FUNCTION`, () => expect(isString(FUNCTION)).toBe(FALSE))
            .it(`Class`, () => expect(isString(Class)).toBe(FALSE));
        })
        // ... objects.
        .describe('object', () => {
          testing
            .it(`CLASS`, () => expect(isString(CLASS)).toBe(FALSE))
            .it(`OBJECT_ONE`, () => expect(isString(OBJECT_ONE)).toBe(FALSE))
            .it(`OBJECT_TWO`, () => expect(isString(OBJECT_TWO)).toBe(FALSE))
            .it(`new Object(OBJECT_ONE_NEW})`, () => expect(isString(OBJECT_ONE_NEW)).toBe(FALSE))
            .it(`new Object(OBJECT_TWO_NEW})`, () => expect(isString(OBJECT_TWO_NEW)).toBe(FALSE));
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => testing.it(`${BIGINT}`, () => expect(isString(BIGINT)).toBe(FALSE)))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TRUE}`, () => expect(isString(TRUE)).toBe(FALSE))
                .it(`${FALSE}`, () => expect(isString(FALSE)).toBe(FALSE));
            })
            // null
            .it(`${NULL}`, () => expect(isString(NULL)).toBe(FALSE))
            // number
            .describe(`number`, () => {
              testing
                .it(`${NUMBER}`, () => expect(isString(NUMBER)).toBe(FALSE))
                .it(`Number(${NUMBER})`, () => expect(isString(NUMBER_INSTANCE)).toBe(FALSE));
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${STRING}`, () => expect(isString(STRING)).toBe(TRUE))
                .it(`String(${STRING})`, () => expect(isString(STRING_INSTANCE)).toBe(TRUE));
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${NUMBER})`, () => expect(isString(SYMBOL_NUMBER)).toBe(FALSE))
                .it(`Symbol(${STRING})`, () => expect(isString(SYMBOL_STRING)).toBe(FALSE));
            })
            // undefined
            .it(`${UNDEFINED}`, () => expect(isString(UNDEFINED)).toBe(FALSE))
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () => testing.it(`${BIGINT_EXPECTATION}`, () => expect(isString(BIGINT_INSTANCE)).toBe(FALSE)))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TRUE_EXPECTATION}`, () => expect(isString(TRUE_INSTANCE)).toBe(FALSE))
                    .it(`${FALSE_EXPECTATION}`, () => expect(isString(FALSE_INSTANCE)).toBe(FALSE));
                })
                // Number
                .describe(`Number`, () => testing.it(`new Number(${NUMBER})`, () => expect(isString(NUMBER_NEW_INSTANCE)).toBe(FALSE)))
                // String
                .describe(`String`, () => testing.it(`new String(${STRING})`, () => expect(isString(STRING_NEW_INSTANCE)).toBe(TRUE)));
            });
        });
    });
});
