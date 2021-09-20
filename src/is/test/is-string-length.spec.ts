// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_BIGINT,
  TESTING_CLASS,
  TESTING_DATE,
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
import { isStringLength } from '../lib/is-string-length.func';
/**
 * Initialize testing.
 */
const testing = new Testing(tests.is.stringLength.describe, tests.is.stringLength.it);
/**
 * Tests.
 */
testing.describe(isStringLength.name, () => {
  // Constant.
  const min = 0;
  const max = 13;
  const stringFirstName = 'my first name';
  const stringInstance = new String(stringFirstName);

  testing
    // Defined.
    .it('is DEFINED', () => expect(isStringLength).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isStringLength(TESTING_FALSE, { min, max }, (result: boolean) => {
            expect(result).toBeFalse();
            return result;
          });
        })
        // ... arrays.
        .describe(`array`, () => {
        })
        // ... Date.
        .describe(`date`, () => {
          testing
            .it(`TESTING_DATE`, () => expect(isStringLength(TESTING_DATE, { min, max })).toBeFalse())
        })
        // ... function.
        .describe(`function`, () => {
          testing
            .it(`FUNCTION`, () => expect(isStringLength(TESTING_FUNCTION, { min, max })).toBeFalse())
            .it(`Class`, () => expect(isStringLength(TestingClass, { min, max })).toBeFalse());
        })
        // ... objects.
        .describe('object', () => {
          testing
            .it(`CLASS`, () => expect(isStringLength(TESTING_CLASS, { min, max })).toBeFalse())
            .it(`TESTING_OBJECT`, () => expect(isStringLength(TESTING_OBJECT, { min, max })).toBeFalse());
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => it(`${TESTING_BIGINT}`, () => expect(isStringLength(TESTING_BIGINT, { min, max })).toBeFalse()))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TESTING_TRUE}`, () => expect(isStringLength(TESTING_TRUE, { min, max })).toBeFalse())
                .it(`${TESTING_FALSE}`, () => expect(isStringLength(TESTING_FALSE, { min, max })).toBeFalse());
            })
            // null
            .it(`${TESTING_NULL}`, () => expect(isStringLength(TESTING_NULL, { min, max })).toBeFalse())
            // number
            .describe(`number`, () => {
              testing
                .it(`${TESTING_NUMBER}`, () => expect(isStringLength(TESTING_NUMBER, { min, max })).toBeFalse())
                .it(`Number(${TESTING_NUMBER})`, () => expect(isStringLength(TESTING_NUMBER_INSTANCE, { min, max })).toBeFalse());
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${TESTING_STRING}`, () => expect(isStringLength(TESTING_STRING, { min, max })).toBeFalse())
                .it(`String(${TESTING_STRING})`, () => expect(isStringLength(TESTING_STRING_INSTANCE, {min, max})).toBeFalse())
                .it(`${stringFirstName}`, () => expect(isStringLength(stringFirstName, {min, max})).toBeTrue())
                .it(`${stringFirstName}`, () => expect(isStringLength(stringFirstName, {min: 13, max})).toBeTrue())
                .it(`${stringFirstName}`, () => expect(isStringLength(stringFirstName, {min: 14, max})).toBeFalse())
                .it(`${stringFirstName}`, () => expect(isStringLength(stringFirstName, {min, max: 12})).toBeFalse());
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${TESTING_NUMBER})`, () => expect(isStringLength(TESTING_SYMBOL_NUMBER, {min, max})).toBeFalse())
                .it(`Symbol(${TESTING_STRING})`, () => expect(isStringLength(TESTING_SYMBOL_STRING, {min, max})).toBeFalse());
            })
            // undefined
            .it(`${TESTING_UNDEFINED}`, () => expect(isStringLength(TESTING_UNDEFINED, {min, max})).toBeFalse())
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () =>
                  testing.it(`${TESTING_BIGINT}`, () => expect(isStringLength(TESTING_BIGINT, {min, max})).toBeFalse()))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isStringLength(TESTING_TRUE_INSTANCE, {min, max})).toBeFalse())
                    .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isStringLength(TESTING_FALSE_INSTANCE, {min, max})).toBeFalse());
                })
                // Number
                .describe(`Number`, () => {
                  testing
                    .it(`new Number(${TESTING_NUMBER})`, () => expect(isStringLength(TESTING_NUMBER_INSTANCE, {min, max})).toBeFalse())
                    .it(`new Number(${stringFirstName})`, () => expect(isStringLength(new Number(stringFirstName), {min, max})).toBeFalse())
                    .it(`new Number(${stringFirstName})`, () => expect(isStringLength(new Number(1.15), {min, max})).toBeFalse())
                    .it(`new Number(${stringFirstName})`, () => expect(isStringLength(new Number(13.15), {min, max})).toBeFalse());
                })
                // String
                .describe(`String`, () => {
                  testing
                    .it(`new String(${TESTING_STRING})`, () => expect(isStringLength(TESTING_STRING_INSTANCE, {min, max})).toBeFalse())
                    .it(`new String(${stringFirstName})`, () => expect(isStringLength(stringInstance, {min, max})).toBeTrue())
                    .it(`new String(${stringFirstName})`, () => expect(isStringLength(stringInstance, {min: 13, max})).toBeTrue())
                    .it(`new String(${stringFirstName})`, () => expect(isStringLength(stringInstance, {min: 14, max})).toBeFalse())
                    .it(`new String(${stringFirstName})`, () => expect(isStringLength(stringInstance, {min, max: 12})).toBeFalse());
                });
            });
        });
    });
});
