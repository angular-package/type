import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { isObject } from '../lib/is-object.func';
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
const testing = new Testing(tests.is.object.describe, tests.is.object.it);
const toBe = new TestingToBeMatchers();
/**
 * Checks
 * ✓ typeof === 'object'
 * ✓ instanceof Object
 */
testing.describe(isObject.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isObject).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isObject(OBJECT_ONE, (result, value, payload) => {
            expect(result).toBe(TRUE);
            if (payload) {
              expect(value).toEqual(OBJECT_ONE);
            }
            return result;
          });
        })

        // ... arrays.
        .describe(`array`, () => {})
        // ... function.
        .describe(`function`, () => {
          testing
            .it(`FUNCTION`, () => expect(isObject(FUNCTION)).toBe(FALSE))
            .it(`Class`, () => expect(isObject(Class)).toBe(FALSE));
        })
        // ... objects.
        .describe('object', () => {
          testing
            .it(`CLASS`, () => expect(isObject(CLASS)).toBe(TRUE))
            .it(`OBJECT_ONE`, () => expect(isObject(OBJECT_ONE)).toBe(TRUE))
            .it(`OBJECT_TWO`, () => expect(isObject(OBJECT_TWO)).toBe(TRUE))
            .it(`new Object(OBJECT_ONE_NEW})`, () => expect(isObject(OBJECT_ONE_NEW)).toBe(TRUE))
            .it(`new Object(OBJECT_TWO_NEW})`, () => expect(isObject(OBJECT_TWO_NEW)).toBe(TRUE));
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => testing.it(`${BIGINT}`, () => expect(isObject(BIGINT)).toBe(FALSE)))

            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TRUE}`, () => expect(isObject(TRUE)).toBe(FALSE))
                .it(`${FALSE}`, () => expect(isObject(FALSE)).toBe(FALSE));
            })

            // null
            .it(`${NULL}`, () => expect(isObject(NULL)).toBe(FALSE))

            // number
            .describe(`number`, () => {
              testing
                .it(`${NUMBER}`, () => expect(isObject(NUMBER)).toBe(FALSE))
                .it(`Number(${NUMBER})`, () => expect(isObject(NUMBER_INSTANCE)).toBe(FALSE));
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${STRING}`, () => expect(isObject(STRING)).toBe(FALSE))
                .it(`String(${STRING})`, () => expect(isObject(STRING_INSTANCE)).toBe(FALSE));
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${NUMBER})`, () => expect(isObject(SYMBOL_NUMBER)).toBe(FALSE))
                .it(`Symbol(${STRING})`, () => expect(isObject(SYMBOL_STRING)).toBe(FALSE));
            })
            // undefined
            .it(`${UNDEFINED}`, () => expect(isObject(UNDEFINED)).toBe(FALSE))
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () => testing.it(`${BIGINT_EXPECTATION}`, () => expect(isObject(BIGINT_INSTANCE)).toBe(FALSE)))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TRUE_EXPECTATION}`, () => expect(isObject(TRUE_INSTANCE)).toBe(FALSE))
                    .it(`${FALSE_EXPECTATION}`, () => expect(isObject(FALSE_INSTANCE)).toBe(FALSE));
                })
                // Number
                .describe(`Number`, () => testing.it(`new Number(${NUMBER})`, () => expect(isObject(NUMBER_NEW_INSTANCE)).toBe(FALSE)))
                // String
                .describe(`String`, () => testing.it(`new String(${STRING})`, () => expect(isObject(STRING_NEW_INSTANCE)).toBe(FALSE)));
            });
        });
    });
});
