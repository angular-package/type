import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { isNumberObject } from '../lib/is-number-object.func';
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
const testing = new Testing(tests.is.numberObject.describe, tests.is.numberObject.it);
const toBe = new TestingToBeMatchers();
/**
 * Checks
 * ✓ typeof === 'object' && instanceof Number === true && instanceof Object === true
 */
testing.describe(isNumberObject.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isNumberObject).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isNumberObject(NUMBER_NEW_INSTANCE, (result: boolean) => {
            expect(result).toBe(TRUE);
            return result;
          });
        })
        // ... arrays.
        .describe(`array`, () => {
          // it(`${FUNCTION}`, () => expect(isNumberObject(FUNCTION, 'function')).toBe(FALSE));
          // it(`${Class}`, () => expect(isNumberObject(Class, 'function')).toBe(FALSE));
        })
        // ... function.
        .describe(`function`, () => testing
          .it(`FUNCTION`, () => expect(isNumberObject(FUNCTION)).toBe(FALSE))
          .it(`Class`, () => expect(isNumberObject(Class)).toBe(FALSE))
        )
        // ... objects.
        .describe('object', () => testing
          .it(`CLASS`, () => expect(isNumberObject(CLASS)).toBe(FALSE))
          .it(`OBJECT_ONE`, () => expect(isNumberObject(OBJECT_ONE)).toBe(FALSE))
          .it(`OBJECT_TWO`, () => expect(isNumberObject(OBJECT_TWO)).toBe(FALSE))
          .it(`new Object(OBJECT_ONE_NEW})`, () => expect(isNumberObject(OBJECT_ONE_NEW)).toBe(FALSE))
          .it(`new Object(OBJECT_TWO_NEW})`, () => expect(isNumberObject(OBJECT_TWO_NEW)).toBe(FALSE))
        )
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => testing.it(`${BIGINT}`, () => expect(isNumberObject(BIGINT)).toBe(FALSE)))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TRUE}`, () => expect(isNumberObject(TRUE)).toBe(FALSE))
                .it(`${FALSE}`, () => expect(isNumberObject(FALSE)).toBe(FALSE));
            })
            // null
            .it(`${NULL}`, () => expect(isNumberObject(NULL)).toBe(FALSE))
            // number
            .describe(`number`, () => {
              testing
                .it(`${NUMBER}`, () => expect(isNumberObject(NUMBER)).toBe(FALSE))
                .it(`Number(${NUMBER})`, () => expect(isNumberObject(NUMBER_INSTANCE)).toBe(FALSE));
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${STRING}`, () => expect(isNumberObject(STRING)).toBe(FALSE))
                .it(`String(${STRING})`, () => expect(isNumberObject(STRING_INSTANCE)).toBe(FALSE));
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${NUMBER})`, () => expect(isNumberObject(SYMBOL_NUMBER)).toBe(FALSE))
                .it(`Symbol(${STRING})`, () => expect(isNumberObject(SYMBOL_STRING)).toBe(FALSE));
            })
            // undefined
            .it(`${UNDEFINED}`, () => expect(isNumberObject(UNDEFINED)).toBe(FALSE))
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () => testing.it(`${BIGINT_EXPECTATION}`, () => expect(isNumberObject(BIGINT_INSTANCE)).toBe(FALSE)))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TRUE_EXPECTATION}`, () => expect(isNumberObject(TRUE_INSTANCE)).toBe(FALSE))
                    .it(`${FALSE_EXPECTATION}`, () => expect(isNumberObject(FALSE_INSTANCE)).toBe(FALSE));
                })
                // Number
                .describe(`Number`, () =>
                  testing.it(`new Number(${NUMBER})`, () => expect(isNumberObject(NUMBER_NEW_INSTANCE)).toBe(TRUE)))
                // String
                .describe(`String`, () =>
                  testing.it(`new String(${STRING})`, () => expect(isNumberObject(STRING_NEW_INSTANCE)).toBe(FALSE)));
            });
        });
    });
});
