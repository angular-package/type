// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_BIGINT,
  TESTING_CLASS,
  TESTING_FALSE,
  TESTING_FALSE_INSTANCE,
  TESTING_FUNCTION,
  TESTING_NULL,
  TESTING_NUMBER,
  TESTING_NUMBER_INSTANCE,
  TESTING_OBJECT,
  TESTING_STRING,
  TESTING_STRING_INSTANCE,
  TESTING_SYMBOL_NUMBER,
  TESTING_SYMBOL_STRING,
  TESTING_TRUE,
  TESTING_TRUE_INSTANCE,
  TESTING_UNDEFINED,

  // Class.
  TestingClass,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
// Function.
import { isStringIncludes } from '../lib/is-string-includes.func';
/**
 * Initialize testing.
 */
const testing = new Testing(tests.is.stringIncludes.describe, tests.is.stringIncludes.it);
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
          isStringIncludes(TESTING_STRING, ['Company'], (result, value, payload) => {
            expect(result).toBeTrue();
            if (payload) {
              expect(value).toEqual(TESTING_STRING);
            }
            return result;
          });
        })
        // ... function.
        .describe(`function`, () => {
          testing
            .it(`FUNCTION`, () => expect(isStringIncludes(TESTING_FUNCTION, [])).toBeFalse())
            .it(`Class`, () => expect(isStringIncludes(TestingClass, [])).toBeFalse());
        })
        // ... objects.
        .describe('object', () => {
          testing
            .it(`CLASS`, () => expect(isStringIncludes(TESTING_CLASS, [])).toBeFalse())
            .it(`TESTING_OBJECT`, () => expect(isStringIncludes(TESTING_OBJECT, [])).toBeFalse());
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isStringIncludes(TESTING_BIGINT, [])).toBeFalse()))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TESTING_TRUE}`, () => expect(isStringIncludes(TESTING_TRUE, [])).toBeFalse())
                .it(`${TESTING_FALSE}`, () => expect(isStringIncludes(TESTING_FALSE, [])).toBeFalse());
            })
            // null
            .it(`${TESTING_NULL}`, () => expect(isStringIncludes(TESTING_NULL, [])).toBeFalse())
            // number
            .describe(`number`, () => {
              testing
                .it(`${TESTING_NUMBER}`, () => expect(isStringIncludes(TESTING_NUMBER, [])).toBeFalse())
                .it(`Number(${TESTING_NUMBER})`, () => expect(isStringIncludes(TESTING_NUMBER_INSTANCE, [])).toBeFalse());
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${TESTING_STRING}`, () => expect(isStringIncludes(TESTING_STRING, [])).toBeTrue())
                .it(`String(${TESTING_STRING})`, () => expect(isStringIncludes(TESTING_STRING_INSTANCE, [])).toBeTrue());
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${TESTING_NUMBER})`, () => expect(isStringIncludes(TESTING_SYMBOL_NUMBER, [])).toBeFalse())
                .it(`Symbol(${TESTING_STRING})`, () => expect(isStringIncludes(TESTING_SYMBOL_STRING, [])).toBeFalse());
            })
            // undefined
            .it(`${TESTING_UNDEFINED}`, () => expect(isStringIncludes(TESTING_UNDEFINED, [])).toBeFalse())
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () =>
                  testing.it(`${TESTING_BIGINT}`, () => expect(isStringIncludes(TESTING_BIGINT, [])).toBeFalse()))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isStringIncludes(TESTING_TRUE_INSTANCE, [])).toBeFalse())
                    .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isStringIncludes(TESTING_FALSE_INSTANCE, [])).toBeFalse());
                })
                // Number
                .describe(`Number`, () =>
                  testing.it(`new Number(${TESTING_NUMBER})`, () => expect(isStringIncludes(TESTING_NUMBER_INSTANCE, [])).toBeFalse()))
                // String
                .describe(`String`, () =>
                  testing.it(`new String(${TESTING_STRING})`, () => expect(isStringIncludes(TESTING_STRING_INSTANCE, [])).toBeTrue()));
            });
        });
    });
});
