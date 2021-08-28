import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { isKey } from '../lib/is-key.func';
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
const testing = new Testing(tests.is.key.describe, tests.is.key.it);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(isKey.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isKey).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isKey('test', (result: boolean) => {
            expect(result).toBe(TRUE);
            return result;
          });
        })
        // ... arrays.
        .describe(`array`, () => {
          // it(`${FUNCTION}`, () => expect(isKey(FUNCTION, 'function')).toBe(FALSE));
          // it(`${Class}`, () => expect(isKey(Class, 'function')).toBe(FALSE));
        })
        // ... function.
        .describe(`function`, () => {
          testing
            .it(`FUNCTION`, () => expect(isKey(FUNCTION)).toBe(FALSE))
            .it(`Class`, () => expect(isKey(Class)).toBe(FALSE));
        })
        // ... objects.
        .describe('object', () => {
          testing
            .it(`CLASS`, () => expect(isKey(CLASS)).toBe(FALSE))
            .it(`OBJECT_ONE`, () => expect(isKey(OBJECT_ONE)).toBe(FALSE))
            .it(`OBJECT_TWO`, () => expect(isKey(OBJECT_TWO)).toBe(FALSE))
            .it(`new Object(OBJECT_ONE_NEW})`, () => expect(isKey(OBJECT_ONE_NEW)).toBe(FALSE))
            .it(`new Object(OBJECT_TWO_NEW})`, () => expect(isKey(OBJECT_TWO_NEW)).toBe(FALSE));
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => testing.it(`${BIGINT}`, () => expect(isKey(BIGINT)).toBe(FALSE)))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TRUE}`, () => expect(isKey(TRUE)).toBe(FALSE))
                .it(`${FALSE}`, () => expect(isKey(FALSE)).toBe(FALSE));
            })
            // null
            .it(`${NULL}`, () => expect(isKey(NULL)).toBe(FALSE))
            // number
            .describe(`number`, () => {
              testing
                .it(`${NUMBER}`, () => expect(isKey(NUMBER)).toBe(TRUE))
                .it(`Number(${NUMBER})`, () => expect(isKey(NUMBER_INSTANCE)).toBe(TRUE));
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${STRING}`, () => expect(isKey(STRING)).toBe(TRUE))
                .it(`String(${STRING})`, () => expect(isKey(STRING_INSTANCE)).toBe(TRUE));
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${NUMBER})`, () => expect(isKey(SYMBOL_NUMBER)).toBe(TRUE))
                .it(`Symbol(${STRING})`, () => expect(isKey(SYMBOL_STRING)).toBe(TRUE));
            })
            // undefined
            .it(`${UNDEFINED}`, () => expect(isKey(UNDEFINED)).toBe(FALSE))
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () => testing.it(`${BIGINT_EXPECTATION}`, () => expect(isKey(BIGINT_INSTANCE)).toBe(FALSE)))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TRUE_EXPECTATION}`, () => expect(isKey(TRUE_INSTANCE)).toBe(FALSE))
                    .it(`${FALSE_EXPECTATION}`, () => expect(isKey(FALSE_INSTANCE)).toBe(FALSE));
                })
                // Number
                .describe(`Number`, () => testing.it(`new Number(${NUMBER})`, () => expect(isKey(NUMBER_NEW_INSTANCE)).toBe(FALSE)))
                // String
                .describe(`String`, () => testing.it(`new String(${STRING})`, () => expect(isKey(STRING_NEW_INSTANCE)).toBe(FALSE)));
            });
        });
    });
});
