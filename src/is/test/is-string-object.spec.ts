import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { isStringObject } from '../lib/is-string-object.func';
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
const testing = new Testing(tests.is.stringObject.describe, tests.is.stringObject.it);
const toBe = new TestingToBeMatchers();
/**
 * Checks
 * ✓ typeof === 'object' && instanceof String === true && instanceof Object === true
 */
testing.describe(isStringObject.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isStringObject).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isStringObject(STRING_NEW_INSTANCE, (result, value, payload) => {
            expect(result).toBe(TRUE);
            if (payload) {
              expect(value).toEqual(STRING_NEW_INSTANCE);
            }
            return result;
          });
        })

        // ... function.
        .describe(`function`, () => {
          testing
            .it(`FUNCTION`, () => expect(isStringObject(FUNCTION)).toBe(FALSE))
            .it(`Class`, () => expect(isStringObject(Class)).toBe(FALSE));
        })
        // ... objects.
        .describe('object', () => {
          testing
            .it(`CLASS`, () => expect(isStringObject(CLASS)).toBe(FALSE))
            .it(`OBJECT_ONE`, () => expect(isStringObject(OBJECT_ONE)).toBe(FALSE))
            .it(`OBJECT_TWO`, () => expect(isStringObject(OBJECT_TWO)).toBe(FALSE))
            .it(`new Object(OBJECT_ONE_NEW})`, () => expect(isStringObject(OBJECT_ONE_NEW)).toBe(FALSE))
            .it(`new Object(OBJECT_TWO_NEW})`, () => expect(isStringObject(OBJECT_TWO_NEW)).toBe(FALSE));
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => testing.it(`${BIGINT}`, () => expect(isStringObject(BIGINT)).toBe(FALSE)))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TRUE}`, () => expect(isStringObject(TRUE)).toBe(FALSE))
                .it(`${FALSE}`, () => expect(isStringObject(FALSE)).toBe(FALSE));
            })
            // null
            .it(`${NULL}`, () => expect(isStringObject(NULL)).toBe(FALSE))
            // number
            .describe(`number`, () => {
              testing
                .it(`${NUMBER}`, () => expect(isStringObject(NUMBER)).toBe(FALSE))
                .it(`Number(${NUMBER})`, () => expect(isStringObject(NUMBER_INSTANCE)).toBe(FALSE));
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${STRING}`, () => expect(isStringObject(STRING)).toBe(FALSE))
                .it(`String(${STRING})`, () => expect(isStringObject(STRING_INSTANCE)).toBe(FALSE));
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${NUMBER})`, () => expect(isStringObject(SYMBOL_NUMBER)).toBe(FALSE))
                .it(`Symbol(${STRING})`, () => expect(isStringObject(SYMBOL_STRING)).toBe(FALSE));
            })
            // undefined
            .it(`${UNDEFINED}`, () => expect(isStringObject(UNDEFINED)).toBe(FALSE))
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () => testing.it(`${BIGINT_EXPECTATION}`, () => expect(isStringObject(BIGINT_INSTANCE)).toBe(FALSE)))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TRUE_EXPECTATION}`, () => expect(isStringObject(TRUE_INSTANCE)).toBe(FALSE))
                    .it(`${FALSE_EXPECTATION}`, () => expect(isStringObject(FALSE_INSTANCE)).toBe(FALSE));
                })
                // Number
                .describe(`Number`, () =>
                  testing.it(`new Number(${NUMBER})`, () => expect(isStringObject(NUMBER_NEW_INSTANCE)).toBe(FALSE)))
                // String
                .describe(`String`, () =>
                  testing.it(`new String(${STRING})`, () => expect(isStringObject(STRING_NEW_INSTANCE)).toBe(TRUE)));
            });
        });
    });
});
