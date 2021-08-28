import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { isStringIncludes } from '../lib/is-string-includes.func';
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
const testing = new Testing(tests.is.stringIncludes.describe, tests.is.stringIncludes.it);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(isStringIncludes.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isStringIncludes).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isStringIncludes(STRING, ['Company'], (result, value, payload) => {
            expect(result).toBe(TRUE);
            if (payload) {
              expect(value).toEqual(STRING);
            }
            return result;
          });
        })
        // ... arrays.
        .describe(`array`, () => {
          // it(`${FUNCTION}`, () => expect(isStringIncludes(FUNCTION, 'function')).toBe(FALSE));
          // it(`${Class}`, () => expect(isStringIncludes(Class, 'function')).toBe(FALSE));
        })
        // ... function.
        .describe(`function`, () => {
          testing
            .it(`FUNCTION`, () => expect(isStringIncludes(FUNCTION, [])).toBe(FALSE))
            .it(`Class`, () => expect(isStringIncludes(Class, [])).toBe(FALSE));
        })
        // ... objects.
        .describe('object', () => {
          testing
            .it(`CLASS`, () => expect(isStringIncludes(CLASS, [])).toBe(FALSE))
            .it(`OBJECT_ONE`, () => expect(isStringIncludes(OBJECT_ONE, [])).toBe(FALSE))
            .it(`OBJECT_TWO`, () => expect(isStringIncludes(OBJECT_TWO, [])).toBe(FALSE))
            .it(`new Object(OBJECT_ONE_NEW})`, () => expect(isStringIncludes(OBJECT_ONE_NEW, [])).toBe(FALSE))
            .it(`new Object(OBJECT_TWO_NEW})`, () => expect(isStringIncludes(OBJECT_TWO_NEW, [])).toBe(FALSE));
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => testing.it(`${BIGINT}`, () => expect(isStringIncludes(BIGINT, [])).toBe(FALSE)))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TRUE}`, () => expect(isStringIncludes(TRUE, [])).toBe(FALSE))
                .it(`${FALSE}`, () => expect(isStringIncludes(FALSE, [])).toBe(FALSE));
            })
            // null
            .it(`${NULL}`, () => expect(isStringIncludes(NULL, [])).toBe(FALSE))
            // number
            .describe(`number`, () => {
              testing
                .it(`${NUMBER}`, () => expect(isStringIncludes(NUMBER, [])).toBe(FALSE))
                .it(`Number(${NUMBER})`, () => expect(isStringIncludes(NUMBER_INSTANCE, [])).toBe(FALSE));
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${STRING}`, () => expect(isStringIncludes(STRING, [])).toBe(TRUE))
                .it(`String(${STRING})`, () => expect(isStringIncludes(STRING_INSTANCE, [])).toBe(TRUE));
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${NUMBER})`, () => expect(isStringIncludes(SYMBOL_NUMBER, [])).toBe(FALSE))
                .it(`Symbol(${STRING})`, () => expect(isStringIncludes(SYMBOL_STRING, [])).toBe(FALSE));
            })
            // undefined
            .it(`${UNDEFINED}`, () => expect(isStringIncludes(UNDEFINED, [])).toBe(FALSE))
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () =>
                  testing.it(`${BIGINT_EXPECTATION}`, () => expect(isStringIncludes(BIGINT_INSTANCE, [])).toBe(FALSE)))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TRUE_EXPECTATION}`, () => expect(isStringIncludes(TRUE_INSTANCE, [])).toBe(FALSE))
                    .it(`${FALSE_EXPECTATION}`, () => expect(isStringIncludes(FALSE_INSTANCE, [])).toBe(FALSE));
                })
                // Number
                .describe(`Number`, () =>
                  testing.it(`new Number(${NUMBER})`, () => expect(isStringIncludes(NUMBER_NEW_INSTANCE, [])).toBe(FALSE)))
                // String
                .describe(`String`, () =>
                  testing.it(`new String(${STRING})`, () => expect(isStringIncludes(STRING_NEW_INSTANCE, [])).toBe(TRUE)));
            });
        });
    });
});
