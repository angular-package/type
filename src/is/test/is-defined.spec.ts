import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { isDefined } from '../lib/is-defined.func';
// Constant.
import { BIGINT, BIGINT_INSTANCE } from '../../testing/src/big-int.const';
import { Class, CLASS } from '../../testing/src/class.const';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE } from '../../testing/src/boolean.const';
import { FUNCTION } from '../../testing/src/function.const';
import { NULL } from '../../testing/src/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../testing/src/number.const';
import { OBJECT_ONE, OBJECT_TWO } from '../../testing/src/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../testing/src/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../testing/src/symbol.const';
import { UNDEFINED } from '../../testing/src/undefined.const';
import { notDefined } from '../../testing/src/not-defined.const';
/**
 * Initialize testing.
 */
const testing = new Testing(tests.is.defined.describe, tests.is.defined.it);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(isDefined.name, () => {
  // TRUE
  testing
    .it('is DEFINED', () => expect(isDefined).toBeDefined())
    .it(`'boolean' | Boolean`, () => {
      expect(isDefined(FALSE)).toBe(TRUE);
      expect(isDefined(TRUE)).toBe(TRUE);
      expect(isDefined(FALSE_INSTANCE)).toBe(TRUE);
      expect(isDefined(TRUE_INSTANCE)).toBe(TRUE);
      expect(isDefined(Boolean(false))).toBe(TRUE);
      expect(isDefined(Boolean(true))).toBe(TRUE);
      isDefined(FALSE, (result: boolean) => {
        expect(result).toBe(TRUE);
        return result;
      });
    })
    .it(`'bigint'`, () => {
      expect(isDefined(BIGINT)).toBe(TRUE);
      expect(isDefined(BIGINT_INSTANCE)).toBe(TRUE);
    })
    .it(`Class | CLASS`, () => {
      expect(isDefined(Class)).toBe(TRUE);
      expect(isDefined(CLASS)).toBe(TRUE);
    })
    .it(`'function' | Function`, () => expect(isDefined(FUNCTION)).toBe(TRUE))
    .it(`null | NULL`, () => {
      expect(isDefined(null)).toBe(TRUE);
      expect(isDefined(NULL)).toBe(TRUE);
    })
    .it(`'number' | Number`, () => {
      expect(isDefined(NUMBER)).toBe(TRUE);
      expect(isDefined(NUMBER_INSTANCE)).toBe(TRUE);
      expect(isDefined(NUMBER_NEW_INSTANCE)).toBe(TRUE);
    })
    .it(`'object' | Object`, () => {
      expect(isDefined(OBJECT_ONE)).toBe(TRUE);
      expect(isDefined(OBJECT_TWO)).toBe(TRUE);
    })
    .it(`'string' | String`, () => {
      expect(isDefined(STRING)).toBe(TRUE);
      expect(isDefined(STRING_INSTANCE)).toBe(TRUE);
      expect(isDefined(STRING_NEW_INSTANCE)).toBe(TRUE);
    })
    .it(`'symbol'`, () => {
      expect(isDefined(SYMBOL_NUMBER)).toBe(TRUE);
      expect(isDefined(SYMBOL_STRING)).toBe(TRUE);
    })

    // FALSE
    .it(`'undefined'`, () => {
      expect(isDefined(notDefined)).toBe(FALSE);
      expect(isDefined(UNDEFINED)).toBe(FALSE);
      isDefined(UNDEFINED, (result, value, payload) => {
        expect(result).toEqual(FALSE);
        if (payload) {
          expect(value).toBeUndefined();
        }
        return result;
      });
    });
});
