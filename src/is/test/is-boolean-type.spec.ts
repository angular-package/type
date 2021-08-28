import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { isBooleanType } from '../lib/is-boolean-type.func';
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
const testing = new Testing(tests.is.booleanType.describe, tests.is.booleanType.it);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(isBooleanType.name, () => {
  // TRUE
  testing
    .it('is DEFINED', () => expect(isBooleanType).toBeDefined())
    .it(`boolean`, () => {
      expect(isBooleanType(FALSE)).toBe(TRUE);
      expect(isBooleanType(TRUE)).toBe(TRUE);
      expect(isBooleanType(Boolean(false))).toBe(TRUE);
      expect(isBooleanType(Boolean(true))).toBe(TRUE);
    })

    // FALSE
    .it(`Boolean`, () => {
      expect(isBooleanType(FALSE_INSTANCE)).toBe(FALSE);
      expect(isBooleanType(TRUE_INSTANCE)).toBe(FALSE);
    })
    .it(`'bigint'`, () => {
      expect(isBooleanType(BIGINT)).toBe(FALSE);
      expect(isBooleanType(BIGINT_INSTANCE)).toBe(FALSE);
    })
    .it(`Class | CLASS`, () => {
      expect(isBooleanType(Class)).toBe(FALSE);
      expect(isBooleanType(CLASS)).toBe(FALSE);
    })
    .it(`'function' | Function`, () => expect(isBooleanType(FUNCTION)).toBe(FALSE))
    .it(`null | NULL`, () => {
      expect(isBooleanType(null)).toBe(FALSE);
      expect(isBooleanType(NULL)).toBe(FALSE);
    })
    .it(`'number' | Number`, () => {
      expect(isBooleanType(NUMBER)).toBe(FALSE);
      expect(isBooleanType(NUMBER_INSTANCE)).toBe(FALSE);
      expect(isBooleanType(NUMBER_NEW_INSTANCE)).toBe(FALSE);
    })
    .it(`'object' | Object`, () => {
      expect(isBooleanType(OBJECT_ONE)).toBe(FALSE);
      expect(isBooleanType(OBJECT_TWO)).toBe(FALSE);
    })
    .it(`'string' | String`, () => {
      expect(isBooleanType(STRING)).toBe(FALSE);
      expect(isBooleanType(STRING_INSTANCE)).toBe(FALSE);
      expect(isBooleanType(STRING_NEW_INSTANCE)).toBe(FALSE);
    })
    .it(`'symbol'`, () => {
      expect(isBooleanType(SYMBOL_NUMBER)).toBe(FALSE);
      expect(isBooleanType(SYMBOL_STRING)).toBe(FALSE);
    })
    .it(`'undefined'`, () => {
      expect(isBooleanType(notDefined)).toBe(FALSE);
      expect(isBooleanType(UNDEFINED)).toBe(FALSE);
    });
});
