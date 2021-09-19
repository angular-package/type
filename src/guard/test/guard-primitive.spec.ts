// Function.
import { guardPrimitive } from '../lib/guard-primitive.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_ARRAY_BIGINT,
  TESTING_ARRAY_BOOLEAN,
  TESTING_ARRAY_CLASS,
  TESTING_ARRAY_FUNCTION,
  TESTING_ARRAY_NULL,
  TESTING_ARRAY_NUMBER,
  TESTING_ARRAY_OBJECT_ONE,
  TESTING_ARRAY_STRING,
  TESTING_ARRAY_SYMBOL_NUMBER,
  TESTING_ARRAY_SYMBOL_STRING,
  TESTING_ARRAY_UNDEFINED,
  TESTING_BIGINT,
  TESTING_FALSE,
  TESTING_FALSE_INSTANCE,
  TESTING_FUNCTION,
  TESTING_NULL,
  TESTING_NUMBER,
  TESTING_NUMBER_CONSTRUCTOR,
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

  // Interface.
  TestingObject,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.primitive.describe,
  tests.guard.primitive.it
);
/**
 * Tests.
 */
testing.describe(guardPrimitive.name, () => {
  testing
  // Defined.
  .it('is DEFINED', () => expect(guardPrimitive).toBeDefined())

  // Checks ...
  .describe(`guards`, () => {
    testing
    .it('callback', () => {
      guardPrimitive<string>(TESTING_STRING, 'string' , (result, value, payload) => {
        expect(result).toBeTrue();
        if (payload) {
          expect(value).toEqual(TESTING_STRING);
        }
        return result;
      });
    })

    // ... primitives.
    .describe(`primitive`, () => {
      testing
      // bigint
      .describe(`bigint`, () => it(`${TESTING_BIGINT}`, () => expect(guardPrimitive(TESTING_BIGINT, 'bigint')).toBeTrue()))

      // boolean
      .describe(`boolean`, () => {
        testing
        .it(`${TESTING_TRUE}`, () => expect(guardPrimitive(TESTING_TRUE, 'boolean')).toBeTrue())
        .it(`${TESTING_FALSE}`, () => expect(guardPrimitive(TESTING_FALSE, 'boolean')).toBeTrue());
        // it(`${TRUE_EXPECTATION}`, () => expect(guardPrimitive(TRUE_INSTANCE, 'boolean')).toBeTrue());
        // it(`${FALSE_EXPECTATION}`, () => expect(guardPrimitive(FALSE_INSTANCE, 'boolean')).toBeTrue());
      })

      // null
      .it(`${TESTING_NULL}`, () => expect(guardPrimitive(TESTING_NULL, 'null')).toBeTrue())

      // number
      .describe(`number`, () => {
        testing
        .it(`${TESTING_NUMBER}`, () => expect(guardPrimitive(TESTING_NUMBER, 'number')).toBeTrue());
        // it(`Number(${NUMBER})`, () => expect(guardPrimitive(NUMBER_INSTANCE, 'number')).toBeTrue());
        // it(`new Number(${NUMBER})`, () => expect(guardPrimitive(NUMBER_NEW_INSTANCE, 'number')).toBeTrue());
      })

      // string
      .describe(`string`, () => {
        testing
        .it(`${TESTING_STRING}`, () => expect(guardPrimitive(TESTING_STRING, 'string')).toBeTrue());
        // it(`String(${STRING})`, () => expect(guardPrimitive(STRING_INSTANCE, 'string')).toBeTrue());
        // it(`new String(${STRING})`, () => expect(guardPrimitive(STRING_NEW_INSTANCE, 'string')).toBeTrue());
      })

      // symbol
      .describe(`symbol`, () => {
        testing
        .it(`Symbol(${TESTING_NUMBER})`, () => expect(guardPrimitive(TESTING_SYMBOL_NUMBER, 'symbol')).toBeTrue())
        .it(`Symbol(${TESTING_STRING})`, () => expect(guardPrimitive(TESTING_SYMBOL_STRING, 'symbol')).toBeTrue());
      })

      // undefined
      .it(`${TESTING_UNDEFINED}`, () => expect(guardPrimitive(TESTING_UNDEFINED, 'undefined')).toBeTrue());
    });
  });
});
