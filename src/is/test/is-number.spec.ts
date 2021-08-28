import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { isNumber } from '../lib/is-number.func';
// Type.
import { BIGINT, BIGINT_INSTANCE } from '../../testing/src/big-int.const';
import { CLASS, Class } from '../../testing/src/class.const';
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
const testing = new Testing(tests.is.number.describe, tests.is.number.it);
const toBe = new TestingToBeMatchers();
/**
 * Checks
 * ✓ typeof === 'number'
 * ✓ instanceof Number
 *
 * ✓ typeof === 'object'
 * ✓ instanceof Object
 */
testing.describe(isNumber.name, () => {
  testing
    // TRUE
    .it('is DEFINED', () => expect(isNumber).toBeDefined())
    .it(`'number' | Number`, () => {
      expect(isNumber(NUMBER)).toBe(TRUE);
      expect(isNumber(NUMBER_INSTANCE)).toBe(TRUE);
      expect(isNumber(NUMBER_NEW_INSTANCE)).toBe(TRUE);
      isNumber(NUMBER_NEW_INSTANCE, (result: boolean) => {
        expect(result).toBe(TRUE);
        return result;
      });
    })

    // FALSE
    .it(`'bigint'`, () => {
      expect(isNumber(BIGINT)).toBe(FALSE);
      expect(isNumber(BIGINT_INSTANCE)).toBe(FALSE);
    })
    .it(`'boolean' | Boolean`, () => {
      expect(isNumber(FALSE)).toBe(FALSE);
      expect(isNumber(TRUE)).toBe(FALSE);
      expect(isNumber(FALSE_INSTANCE)).toBe(FALSE);
      expect(isNumber(TRUE_INSTANCE)).toBe(FALSE);
    })
    .it(`Class | CLASS`, () => {
      expect(isNumber(Class)).toBe(FALSE);
      expect(isNumber(CLASS)).toBe(FALSE);
    })
    .it(`'function' | Function`, () => expect(isNumber(FUNCTION)).toBe(FALSE))
    .it(`null | NULL`, () => {
      expect(isNumber(null)).toBe(FALSE);
      expect(isNumber(NULL)).toBe(FALSE);
    })
    .it(`'object' | Object`, () => {
      expect(isNumber(OBJECT_ONE)).toBe(FALSE);
      expect(isNumber(OBJECT_TWO)).toBe(FALSE);
    })
    .it(`'string' | String`, () => {
      expect(isNumber(STRING)).toBe(FALSE);
      expect(isNumber(STRING_INSTANCE)).toBe(FALSE);
      expect(isNumber(STRING_NEW_INSTANCE)).toBe(FALSE);
    })
    .it(`'symbol'`, () => {
      expect(isNumber(SYMBOL_NUMBER)).toBe(FALSE);
      expect(isNumber(SYMBOL_STRING)).toBe(FALSE);
    })
    .it(`'undefined'`, () => {
      expect(isNumber(notDefined)).toBe(FALSE);
      expect(isNumber(UNDEFINED)).toBe(FALSE);
    });
});
