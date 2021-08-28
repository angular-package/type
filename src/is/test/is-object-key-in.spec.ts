import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { isObjectKeyIn } from '../lib/is-object-key-in.func';
// Constant.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../../testing/src/big-int.const';
import { Class, CLASS } from '../../testing/src/class.const';
import { FALSE, TRUE, TRUE_INSTANCE, FALSE_INSTANCE, FALSE_EXPECTATION, TRUE_EXPECTATION } from '../../testing/src/boolean.const';
import { FUNCTION } from '../../testing/src/function.const';
import { NULL } from '../../testing/src/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../testing/src/number.const';
import { OBJECT_ONE } from '../../testing/src/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../testing/src/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../testing/src/strict/symbol.const';
import { UNDEFINED } from '../../testing/src/undefined.const';
/**
 * Initialize testing.
 */
const testing = new Testing(tests.is.objectKeyIn.describe, tests.is.objectKeyIn.it);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(isObjectKeyIn.name , () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isObjectKeyIn).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isObjectKeyIn(CLASS, 'firstName', (result, value, payload) => {
            expect(result).toBe(TRUE);
            if (payload) {
              expect(value).toEqual(CLASS);
            }
            return result;
          });
        })
        // ... instance.
        .describe(`instance`, () => testing
          .describe(`CLASS`, () => testing
            // number.
            .it('has number key', () => {
              expect(isObjectKeyIn(CLASS, 1030405027)).toBe(TRUE);
              expect(isObjectKeyIn(CLASS, 5)).toBe(TRUE);
              expect(isObjectKeyIn(CLASS, NUMBER)).toBe(TRUE); // It does find getter number
            })
            // string.
            .it('has string key', () => {
              expect(isObjectKeyIn(CLASS, 'surname')).toBe(TRUE);
            })
            // symbol.
            .it('has getter symbol key', () => {
              // It does find getter symbol key
              expect(isObjectKeyIn(CLASS, SYMBOL_NUMBER)).toBe(TRUE);
              expect(isObjectKeyIn(CLASS, SYMBOL_STRING)).toBe(TRUE);
            })
          )
        )
        // ... function.
        .describe(`function`, () => testing
          .it(`FUNCTION`, () => expect(isObjectKeyIn(FUNCTION, 'function')).toBe(FALSE))
          .it(`CLASS`, () => expect(isObjectKeyIn(Class, 'function')).toBe(FALSE))
        )
        // ... objects.
        .describe('object', () => testing
          .describe(`OBJECT_ONE`, () => testing
            // number.
            .it('has number key', () => {
              expect(isObjectKeyIn(OBJECT_ONE, 1030405027)).toBe(TRUE);
              expect(isObjectKeyIn(OBJECT_ONE, 5)).toBe(TRUE);
              expect(isObjectKeyIn(OBJECT_ONE, NUMBER)).toBe(TRUE); // It doesn't find getter
            })
            // string.
            .it('has string key', () => {
              expect(isObjectKeyIn(OBJECT_ONE, 'key as string')).toBe(TRUE);
              expect(isObjectKeyIn(OBJECT_ONE, 'x')).toBe(TRUE);
              expect(isObjectKeyIn(OBJECT_ONE, STRING)).toBe(TRUE);
            })
            // symbol.
            .it('has symbol key', () => {
              expect(isObjectKeyIn(OBJECT_ONE, SYMBOL_NUMBER)).toBe(TRUE);
              expect(isObjectKeyIn(OBJECT_ONE, SYMBOL_STRING)).toBe(TRUE);
            })
          )
        )
        // ... primitives.
        .describe(`primitive`, () => testing
          // bigint
          .describe(`bigint`, () => testing.it(`${BIGINT}`, () => expect(isObjectKeyIn(BIGINT, 'bigint')).toBe(FALSE)))
          // boolean
          .describe(`boolean`, () => testing
            .it(`${TRUE}`, () => expect(isObjectKeyIn(TRUE, 'boolean')).toBe(FALSE))
            .it(`${FALSE}`, () => expect(isObjectKeyIn(FALSE, 'boolean')).toBe(FALSE))
          )
          // null
          .it(`${NULL}`, () => expect(isObjectKeyIn(NULL, 'null')).toBe(FALSE))
          // number
          .describe(`number`, () => testing
            .it(`${NUMBER}`, () => expect(isObjectKeyIn(NUMBER, 'number')).toBe(FALSE))
            .it(`Number(${NUMBER})`, () => expect(isObjectKeyIn(NUMBER_INSTANCE, 'number')).toBe(FALSE))
          )
          // string
          .describe(`string`, () => testing
            .it(`${STRING}`, () => expect(isObjectKeyIn(STRING, 'string')).toBe(FALSE))
            .it(`String(${STRING})`, () => expect(isObjectKeyIn(STRING_INSTANCE, 'string')).toBe(FALSE))
          )
          // symbol
          .describe(`symbol`, () => testing
            .it(`Symbol(${NUMBER})`, () => expect(isObjectKeyIn(SYMBOL_NUMBER, 'symbol')).toBe(FALSE))
            .it(`Symbol(${STRING})`, () => expect(isObjectKeyIn(SYMBOL_STRING, 'symbol')).toBe(FALSE))
          )
          // undefined
          .it(`${UNDEFINED}`, () => expect(isObjectKeyIn(UNDEFINED, 'undefined')).toBe(FALSE))
          // ... object.
          .describe(`object`, () => testing
            // BigInt
            .describe(`BigInt`, () =>
              testing.it(`${BIGINT_EXPECTATION}`, () => expect(isObjectKeyIn(BIGINT_INSTANCE, 'bigint')).toBe(FALSE)))
            // Boolean
            .describe(`Boolean`, () => testing
              .it(`${TRUE_EXPECTATION}`, () => expect(isObjectKeyIn(TRUE_INSTANCE, 'boolean')).toBe(FALSE))
              .it(`${FALSE_EXPECTATION}`, () => expect(isObjectKeyIn(FALSE_INSTANCE, 'boolean')).toBe(FALSE))
            )
            // Number
            .describe(`Number`, () =>
              testing.it(`new Number(${NUMBER})`, () => expect(isObjectKeyIn(NUMBER_NEW_INSTANCE, 'number')).toBe(FALSE)))
            // String
            .describe(`String`, () =>
              testing.it(`new String(${STRING})`, () => expect(isObjectKeyIn(STRING_NEW_INSTANCE, 'string')).toBe(FALSE)))
          )
        );
    });
});
