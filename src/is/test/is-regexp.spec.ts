import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { isRegExp } from '../lib/is-regexp.func';
// Constant.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../../testing/src/big-int.const';
import { Class, CLASS } from '../../testing/src/class.const';
import { DATE_STRING_ONE, DATE_TIMESTAMP, DATE_STRING_TWO, DATE_VARS } from '../../testing/src/strict/date.const';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE, FALSE_EXPECTATION, TRUE_EXPECTATION } from '../../testing/src/boolean.const';
import { FUNCTION } from '../../testing/src/function.const';
import { NULL } from '../../testing/src/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../testing/src/number.const';
import { OBJECT_ONE, OBJECT_TWO, OBJECT_ONE_NEW, OBJECT_TWO_NEW } from '../../testing/src/object.const';
import { PATTERN } from '../../testing/src/strict/regexp.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../testing/src/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../testing/src/symbol.const';
import { UNDEFINED } from '../../testing/src/undefined.const';
/**
 * Initialize testing.
 */
const testing = new Testing(tests.is.regexp.describe, tests.is.regexp.it);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(isRegExp.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isRegExp).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing.
        it('callback', () => {
          isRegExp(PATTERN, (result: boolean) => {
            expect(result).toBe(TRUE);
            return result;
          });
        })
        // ... arrays.
        .describe(`array`, () => {
          // it(`${FUNCTION}`, () => expect(isRegExp(FUNCTION, 'function')).toBe(FALSE));
          // it(`${Class}`, () => expect(isRegExp(Class, 'function')).toBe(FALSE));
        })
        // ... Date.
        .describe(`date`, () => {
          testing
            .it(`DATE_STRING_ONE ${DATE_STRING_ONE}`, () => expect(isRegExp(DATE_STRING_ONE)).toBe(FALSE))
            .it(`DATE_STRING_ONE ${DATE_STRING_TWO}`, () => expect(isRegExp(DATE_STRING_TWO)).toBe(FALSE))
            .it(`DATE_STRING_ONE ${DATE_VARS}`, () => expect(isRegExp(DATE_VARS)).toBe(FALSE))
            .it(`DATE_STRING_ONE ${DATE_TIMESTAMP}`, () => expect(isRegExp(DATE_TIMESTAMP)).toBe(FALSE));
        })
        // ... function.
        .describe(`function`, () => {
          testing
            .it(`FUNCTION`, () => expect(isRegExp(FUNCTION)).toBe(FALSE))
            .it(`Class`, () => expect(isRegExp(Class)).toBe(FALSE));
        })
        // ... objects.
        .describe('object', () => {
          testing
            .it(`CLASS`, () => expect(isRegExp(CLASS)).toBe(FALSE))
            .it(`OBJECT_ONE`, () => expect(isRegExp(OBJECT_ONE)).toBe(FALSE))
            .it(`OBJECT_TWO`, () => expect(isRegExp(OBJECT_TWO)).toBe(FALSE))
            .it(`new Object(OBJECT_ONE_NEW})`, () => expect(isRegExp(OBJECT_ONE_NEW)).toBe(FALSE))
            .it(`new Object(OBJECT_TWO_NEW})`, () => expect(isRegExp(OBJECT_TWO_NEW)).toBe(FALSE))
            .it(`PATTERN ${PATTERN}`, () => expect(isRegExp(PATTERN)).toBe(TRUE));
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => testing.it(`${BIGINT}`, () => expect(isRegExp(BIGINT)).toBe(FALSE)))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TRUE}`, () => expect(isRegExp(TRUE)).toBe(FALSE))
                .it(`${FALSE}`, () => expect(isRegExp(FALSE)).toBe(FALSE));
            })
            // null
            .it(`${NULL}`, () => expect(isRegExp(NULL)).toBe(FALSE))
            // number
            .describe(`number`, () => {
              testing
                .it(`${NUMBER}`, () => expect(isRegExp(NUMBER)).toBe(FALSE))
                .it(`Number(${NUMBER})`, () => expect(isRegExp(NUMBER_INSTANCE)).toBe(FALSE));
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${STRING}`, () => expect(isRegExp(STRING)).toBe(FALSE))
                .it(`String(${STRING})`, () => expect(isRegExp(STRING_INSTANCE)).toBe(FALSE));
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${NUMBER})`, () => expect(isRegExp(SYMBOL_NUMBER)).toBe(FALSE))
                .it(`Symbol(${STRING})`, () => expect(isRegExp(SYMBOL_STRING)).toBe(FALSE));
            })
            // undefined
            .it(`${UNDEFINED}`, () => expect(isRegExp(UNDEFINED)).toBe(FALSE))
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () => testing.it(`${BIGINT_EXPECTATION}`, () => expect(isRegExp(BIGINT_INSTANCE)).toBe(FALSE)))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TRUE_EXPECTATION}`, () => expect(isRegExp(TRUE_INSTANCE)).toBe(FALSE))
                    .it(`${FALSE_EXPECTATION}`, () => expect(isRegExp(FALSE_INSTANCE)).toBe(FALSE));
                })
                // Number
                .describe(`Number`, () =>
                  testing.it(`new Number(${NUMBER})`, () => expect(isRegExp(NUMBER_NEW_INSTANCE)).toBe(FALSE)))
                // String
                .describe(`String`, () =>
                  testing.it(`new String(${STRING})`, () => expect(isRegExp(STRING_NEW_INSTANCE)).toBe(FALSE)));
            });
        });
    });
});
