// Testing.
import {
  // Main.
  Testing,

  // Constants.
  TESTING_BIGINT,
  TESTING_CLASS,
  TESTING_FALSE,
  TESTING_FALSE_INSTANCE,
  TESTING_FUNCTION,
  TESTING_NULL,
  TESTING_NUMBER,
  TESTING_NUMBER_CONSTRUCTOR,
  TESTING_NUMBER_INSTANCE,
  TESTING_OBJECT,
  TESTING_STRING,
  TESTING_STRING_CONSTRUCTOR,
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
import { isDefined } from '../lib/is-defined.func';
/**
 * Initialize testing.
 */
const testing = new Testing(tests.is.defined.describe, tests.is.defined.it);
/**
 * Tests.
 */
testing.describe(isDefined.name, () => {
  // TRUE
  testing
    .it('is DEFINED', () => expect(isDefined).toBeDefined())
    .it(`'boolean' | Boolean`, () => {
      expect(isDefined(TESTING_FALSE)).toBe(TESTING_TRUE);
      expect(isDefined(TESTING_TRUE)).toBe(TESTING_TRUE);
      expect(isDefined(TESTING_FALSE_INSTANCE)).toBe(TESTING_TRUE);
      expect(isDefined(TESTING_TRUE_INSTANCE)).toBe(TESTING_TRUE);
      expect(isDefined(Boolean(false))).toBe(TESTING_TRUE);
      expect(isDefined(Boolean(true))).toBe(TESTING_TRUE);
      isDefined(TESTING_FALSE, (result: boolean) => {
        expect(result).toBe(TESTING_TRUE);
        return result;
      });
    })
    .it(`'bigint'`, () => expect(isDefined(TESTING_BIGINT)).toBeTrue())
    .it(`Class | CLASS`, () => {
      expect(isDefined(TestingClass)).toBe(TESTING_TRUE);
      expect(isDefined(TESTING_CLASS)).toBe(TESTING_TRUE);
    })
    .it(`'function' | Function`, () => expect(isDefined(TESTING_FUNCTION)).toBeTrue())
    .it(`null | NULL`, () => {
      expect(isDefined(null)).toBeTrue();
      expect(isDefined(TESTING_NULL)).toBe(TESTING_TRUE);
    })
    .it(`'number' | Number`, () => {
      expect(isDefined(TESTING_NUMBER)).toBeTrue();
      expect(isDefined(TESTING_NUMBER_CONSTRUCTOR)).toBe(TESTING_TRUE);
      expect(isDefined(TESTING_NUMBER_INSTANCE)).toBe(TESTING_TRUE);
    })
    .it(`'object' | Object`, () => expect(isDefined(TESTING_OBJECT)).toBeTrue())
    .it(`'string' | String`, () => {
      expect(isDefined(TESTING_STRING)).toBeTrue();
      expect(isDefined(TESTING_STRING_CONSTRUCTOR)).toBeTrue();
      expect(isDefined(TESTING_STRING_INSTANCE)).toBeTrue();
    })
    .it(`'symbol'`, () => {
      expect(isDefined(TESTING_SYMBOL_NUMBER)).toBeTrue();
      expect(isDefined(TESTING_SYMBOL_STRING)).toBeTrue();
    })

    // FALSE
    .it(`'undefined'`, () => {
      expect(isDefined(TESTING_UNDEFINED)).toBeFalse();
      isDefined(TESTING_UNDEFINED, (result, value, payload) => {
        expect(result).toBeFalse();
        if (payload) {
          expect(value).toBeUndefined();
        }
        return result;
      });
    });
});
