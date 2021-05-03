// Function.
import { isDefined } from '../lib/is-defined.func';
// Variables.
import { BIGINT, BIGINT_INSTANCE } from './variables/big-int.const';
import { Class, CLASS } from './variables/class.const';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE } from './variables/boolean.const';
import { FUNCTION } from './variables/function.const';
import { NULL } from './variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from './variables/number.const';
import { OBJECT_ONE, OBJECT_TWO } from './variables/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from './variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from './variables/symbol.const';
import { UNDEFINED } from './variables/undefined.const';
import { notDefined } from './variables/not-defined.const';

/**
 * Checks
 * ✓ typeof !== 'undefined'
 * ✓ vale !== undefined
 */
describe('isDefined', () => {
  // TRUE
  it('is DEFINED', () => expect(isDefined).toBeDefined());
  it(`'boolean' | Boolean`, () => {
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
  });
  it(`'bigint'`, () => {
    expect(isDefined(BIGINT)).toBe(TRUE);
    expect(isDefined(BIGINT_INSTANCE)).toBe(TRUE);
  });
  it(`Class | CLASS`, () => {
    expect(isDefined(Class)).toBe(TRUE);
    expect(isDefined(CLASS)).toBe(TRUE);
  });
  it(`'function' | Function`, () => expect(isDefined(FUNCTION)).toBe(TRUE));
  it(`null | NULL`, () => {
    expect(isDefined(null)).toBe(TRUE);
    expect(isDefined(NULL)).toBe(TRUE);
  });
  it(`'number' | Number`, () => {
    expect(isDefined(NUMBER)).toBe(TRUE);
    expect(isDefined(NUMBER_INSTANCE)).toBe(TRUE);
    expect(isDefined(NUMBER_NEW_INSTANCE)).toBe(TRUE);
  });
  it(`'object' | Object`, () => {
    expect(isDefined(OBJECT_ONE)).toBe(TRUE);
    expect(isDefined(OBJECT_TWO)).toBe(TRUE);
  });
  it(`'string' | String`, () => {
    expect(isDefined(STRING)).toBe(TRUE);
    expect(isDefined(STRING_INSTANCE)).toBe(TRUE);
    expect(isDefined(STRING_NEW_INSTANCE)).toBe(TRUE);
  });
  it(`'symbol'`, () => {
    expect(isDefined(SYMBOL_NUMBER)).toBe(TRUE);
    expect(isDefined(SYMBOL_STRING)).toBe(TRUE);
  });

  // FALSE
  it(`'undefined'`, () => {
    expect(isDefined(notDefined)).toBe(FALSE);
    expect(isDefined(UNDEFINED)).toBe(FALSE);
    isDefined(UNDEFINED, (result: boolean) => {
      expect(result).toBe(FALSE);
      return result;
    });
  });
});
