import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { isObjectKey } from '../lib/is-object-key.func';
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
const testing = new Testing(tests.is.objectKey.describe, tests.is.objectKey.it);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(isObjectKey.name , () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isObjectKey).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          // isObjectKey(CLASS, ['firstName', 'surname'], (result, value, payload) => {
          //   expect(result).toBe(TRUE);
          //   if (payload) {
          //     expect(value).toEqual(CLASS);
          //   }
          //   return result;
          // });
        })
        // ... instance.
        .describe(`instance`, () => {
          testing
            .describe(`CLASS`, () => {
              testing
                // number.
                .it('has number key', () => {
                  expect(isObjectKey(CLASS, 1030405027)).toBe(TRUE);
                  expect(isObjectKey(CLASS, 5)).toBe(TRUE);
                  // expect(isObjectKey(CLASS, [5, 1030405027])).toBe(TRUE);
                })
                // It doesn't find getter number
                .it('has not find getter number', () => expect(isObjectKey(CLASS, NUMBER)).toBe(FALSE))
                // string.
                .it('has string key', () => {
                  expect(isObjectKey(CLASS, 'surname')).toBe(TRUE);
                  // expect(isObjectKey(CLASS, ['firstName', 'surname'])).toBe(TRUE);
                })
                // symbol.
                .it('has not find getter symbol key', () => {
                  // It does not find getter symbol key in class
                  expect(isObjectKey(CLASS, SYMBOL_NUMBER)).toBe(FALSE);
                  expect(isObjectKey(CLASS, SYMBOL_STRING)).toBe(FALSE);
                  // expect(isObjectKey(CLASS, [SYMBOL_NUMBER, SYMBOL_STRING])).toBe(FALSE);
                })

                // mixed.
                // .it('has string and number key', () => expect(isObjectKey(CLASS, [1030405027, 'firstName', 'surname'])).toBe(TRUE));
            });
        })
        // ... function.
        .describe(`function`, () => {
          testing
            .it(`FUNCTION`, () => expect(isObjectKey(FUNCTION, 'function')).toBe(FALSE))
            .it(`CLASS`, () => expect(isObjectKey(Class, 'function')).toBe(FALSE));
        })
        // ... objects.
        .describe('object', () => {
          testing
            .describe(`OBJECT_ONE`, () => {
              testing
                // number.
                .it('has number key', () => {
                  expect(isObjectKey(OBJECT_ONE, 1030405027)).toBe(TRUE);
                  expect(isObjectKey(OBJECT_ONE, 5)).toBe(TRUE);
                  expect(isObjectKey(OBJECT_ONE, NUMBER)).toBe(TRUE); // It doesn't find getter
                  // expect(isObjectKey(OBJECT_ONE, [5, 1030405027])).toBe(TRUE);
                })
                // string.
                .it('has string key', () => {
                  expect(isObjectKey(OBJECT_ONE, 'key as string')).toBe(TRUE);
                  expect(isObjectKey(OBJECT_ONE, 'x')).toBe(TRUE);
                  expect(isObjectKey(OBJECT_ONE, STRING)).toBe(TRUE);
                  // expect(isObjectKey(OBJECT_ONE, ['key as string', 'x', STRING])).toBe(TRUE);
                })
                // symbol.
                .it('has symbol key', () => {
                  expect(isObjectKey(OBJECT_ONE, SYMBOL_NUMBER)).toBe(TRUE);
                  expect(isObjectKey(OBJECT_ONE, SYMBOL_STRING)).toBe(TRUE);
                  // expect(isObjectKey(OBJECT_ONE, [SYMBOL_NUMBER, SYMBOL_STRING])).toBe(TRUE);
                })
                // mixed.
                .it('has mixed key', () => {
                  // expect(isObjectKey(OBJECT_ONE, [
                  //   'key as string',
                  //   'x',
                  //   1030405027,
                  //   5,
                  //   NUMBER,
                  //   STRING,
                  //   SYMBOL_NUMBER,
                  //   SYMBOL_STRING,
                  // ])).toBe(TRUE);
                });
            });
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => it(`${BIGINT}`, () => expect(isObjectKey(BIGINT, 'bigint')).toBe(FALSE)))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TRUE}`, () => expect(isObjectKey(TRUE, 'boolean')).toBe(FALSE))
                .it(`${FALSE}`, () => expect(isObjectKey(FALSE, 'boolean')).toBe(FALSE));
            })
            // null
            .it(`${NULL}`, () => expect(isObjectKey(NULL, 'null')).toBe(FALSE))
            // number
            .describe(`number`, () => {
              testing
                .it(`${NUMBER}`, () => expect(isObjectKey(NUMBER, 'number')).toBe(FALSE))
                .it(`Number(${NUMBER})`, () => expect(isObjectKey(NUMBER_INSTANCE, 'number')).toBe(FALSE));
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${STRING}`, () => expect(isObjectKey(STRING, 'string')).toBe(FALSE))
                .it(`String(${STRING})`, () => expect(isObjectKey(STRING_INSTANCE, 'string')).toBe(FALSE));
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${NUMBER})`, () => expect(isObjectKey(SYMBOL_NUMBER, 'symbol')).toBe(FALSE))
                .it(`Symbol(${STRING})`, () => expect(isObjectKey(SYMBOL_STRING, 'symbol')).toBe(FALSE));
            })
            // undefined
            .it(`${UNDEFINED}`, () => expect(isObjectKey(UNDEFINED, 'undefined')).toBe(FALSE))
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () =>
                  testing.it(`${BIGINT_EXPECTATION}`, () => expect(isObjectKey(BIGINT_INSTANCE, 'bigint')).toBe(FALSE)))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TRUE_EXPECTATION}`, () => expect(isObjectKey(TRUE_INSTANCE, 'boolean')).toBe(FALSE))
                    .it(`${FALSE_EXPECTATION}`, () => expect(isObjectKey(FALSE_INSTANCE, 'boolean')).toBe(FALSE));
                })
                // Number
                .describe(`Number`, () =>
                  testing.it(`new Number(${NUMBER})`, () => expect(isObjectKey(NUMBER_NEW_INSTANCE, 'number')).toBe(FALSE)))
                // String
                .describe(`String`, () =>
                  testing.it(`new String(${STRING})`, () => expect(isObjectKey(STRING_NEW_INSTANCE, 'string')).toBe(FALSE)));
            });
        });
    });
});
