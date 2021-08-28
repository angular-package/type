import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { isNumberType } from '../lib/is-number-type.func';
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
const testing = new Testing(tests.is.numberType.describe, tests.is.numberType.it);
const toBe = new TestingToBeMatchers();
/**
 * Checks
 * ✓ typeof === 'number' && instanceof Number === false && instanceof Object === false
 * ✓ value === true
 * ✓ value === false
 */
testing.describe(isNumberType.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isNumberType).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isNumberType(NUMBER, (result: boolean) => {
            expect(result).toBe(TRUE);
            return result;
          });
        })
        // ... arrays.
        .describe(`array`, () => {
          // it(`${FUNCTION}`, () => expect(isNumberType(FUNCTION, 'function')).toBe(FALSE));
          // it(`${Class}`, () => expect(isNumberType(Class, 'function')).toBe(FALSE));
        })
        // ... function.
        .describe(`function`, () => {
          testing
            .it(`FUNCTION`, () => expect(isNumberType(FUNCTION)).toBe(FALSE))
            .it(`Class`, () => expect(isNumberType(Class)).toBe(FALSE));
        })
        // ... objects.
        .describe('object', () => {
          testing
            .it(`CLASS`, () => expect(isNumberType(CLASS)).toBe(FALSE))
            .it(`OBJECT_ONE`, () => expect(isNumberType(OBJECT_ONE)).toBe(FALSE))
            .it(`OBJECT_TWO`, () => expect(isNumberType(OBJECT_TWO)).toBe(FALSE))
            .it(`new Object(OBJECT_ONE_NEW})`, () => expect(isNumberType(OBJECT_ONE_NEW)).toBe(FALSE))
            .it(`new Object(OBJECT_TWO_NEW})`, () => expect(isNumberType(OBJECT_TWO_NEW)).toBe(FALSE));
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => testing.it(`${BIGINT}`, () => expect(isNumberType(BIGINT)).toBe(FALSE)))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TRUE}`, () => expect(isNumberType(TRUE)).toBe(FALSE))
                .it(`${FALSE}`, () => expect(isNumberType(FALSE)).toBe(FALSE));
            })
            // null
            .it(`${NULL}`, () => expect(isNumberType(NULL)).toBe(FALSE))
            // number
            .describe(`number`, () => {
              testing
                .it(`${NUMBER}`, () => expect(isNumberType(NUMBER)).toBe(TRUE))
                .it(`Number(${NUMBER})`, () => expect(isNumberType(NUMBER_INSTANCE)).toBe(TRUE));
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${STRING}`, () => expect(isNumberType(STRING)).toBe(FALSE))
                .it(`String(${STRING})`, () => expect(isNumberType(STRING_INSTANCE)).toBe(FALSE));
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${NUMBER})`, () => expect(isNumberType(SYMBOL_NUMBER)).toBe(FALSE))
                .it(`Symbol(${STRING})`, () => expect(isNumberType(SYMBOL_STRING)).toBe(FALSE));
            })
            // undefined
            .it(`${UNDEFINED}`, () => expect(isNumberType(UNDEFINED)).toBe(FALSE))
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () => testing.it(`${BIGINT_EXPECTATION}`, () => expect(isNumberType(BIGINT_INSTANCE)).toBe(FALSE)))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TRUE_EXPECTATION}`, () => expect(isNumberType(TRUE_INSTANCE)).toBe(FALSE))
                    .it(`${FALSE_EXPECTATION}`, () => expect(isNumberType(FALSE_INSTANCE)).toBe(FALSE));
                })
                // Number
                .describe(`Number`, () => testing.it(`new Number(${NUMBER})`, () => expect(isNumberType(NUMBER_NEW_INSTANCE)).toBe(FALSE)))
                // String
                .describe(`String`, () => testing.it(`new String(${STRING})`, () => expect(isNumberType(STRING_NEW_INSTANCE)).toBe(FALSE)));
            });
        });
    });
});
