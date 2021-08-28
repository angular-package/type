import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { isBoolean } from '../lib/is-boolean.func';
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
const testing = new Testing(tests.is.boolean.describe, tests.is.boolean.it);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(isBoolean.name, () =>
  testing
    // TRUE
    .it('is DEFINED', () => expect(isBoolean).toBeDefined())
    .it(`'boolean' | Boolean`, () => {
      expect(isBoolean(FALSE)).toBe(TRUE);
      expect(isBoolean(TRUE)).toBe(TRUE);
      expect(isBoolean(FALSE_INSTANCE)).toBe(TRUE);
      expect(isBoolean(TRUE_INSTANCE)).toBe(TRUE);
      expect(isBoolean(Boolean(false))).toBe(TRUE);
      expect(isBoolean(Boolean(true))).toBe(TRUE);
      isBoolean(FALSE, (result: boolean) => {
        expect(result).toBe(TRUE);
        return result;
      });
    })

    // FALSE
    .it(`'bigint'`, () => {
      expect(isBoolean(BIGINT)).toBe(FALSE);
      expect(isBoolean(BIGINT_INSTANCE)).toBe(FALSE);
      isBoolean(BIGINT, (result: boolean) => {
        expect(result).toBe(FALSE);
        return result;
      });
    })
    .it(`Class | CLASS`, () => {
      expect(isBoolean(Class)).toBe(FALSE);
      expect(isBoolean(CLASS)).toBe(FALSE);
    })
    .it(`'function' | Function`, () => expect(isBoolean(FUNCTION)).toBe(FALSE))
    .it(`null | NULL`, () => {
      expect(isBoolean(null)).toBe(FALSE);
      expect(isBoolean(NULL)).toBe(FALSE);
    })
    .it(`'number' | Number`, () => {
      expect(isBoolean(NUMBER)).toBe(FALSE);
      expect(isBoolean(NUMBER_INSTANCE)).toBe(FALSE);
      expect(isBoolean(NUMBER_NEW_INSTANCE)).toBe(FALSE);
    })
    .it(`'object' | Object`, () => {
      expect(isBoolean(OBJECT_ONE)).toBe(FALSE);
      expect(isBoolean(OBJECT_TWO)).toBe(FALSE);
    })
    .it(`'string' | String`, () => {
      expect(isBoolean(STRING)).toBe(FALSE);
      expect(isBoolean(STRING_INSTANCE)).toBe(FALSE);
      expect(isBoolean(STRING_NEW_INSTANCE)).toBe(FALSE);
    })
    .it(`'symbol'`, () => {
      expect(isBoolean(SYMBOL_NUMBER)).toBe(FALSE);
      expect(isBoolean(SYMBOL_STRING)).toBe(FALSE);
    })
    .it(`'undefined'`, () => {
      expect(isBoolean(notDefined)).toBe(FALSE);
      expect(isBoolean(UNDEFINED)).toBe(FALSE);
    })
);
