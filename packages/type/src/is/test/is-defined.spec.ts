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
  it('is DEFINED', () => {
    expect(isDefined).toBeDefined();
  });
  it(`'boolean' | Boolean`, () => {
    expect(isDefined(FALSE)).toBeTruthy();
    expect(isDefined(TRUE)).toBeTruthy();
    expect(isDefined(FALSE_INSTANCE)).toBeTruthy();
    expect(isDefined(TRUE_INSTANCE)).toBeTruthy();
    expect(isDefined(Boolean(false))).toBeTruthy();
    expect(isDefined(Boolean(true))).toBeTruthy();
  });
  it(`'bigint'`, () => {
    expect(isDefined(BIGINT)).toBeTruthy();
    expect(isDefined(BIGINT_INSTANCE)).toBeTruthy();
  });
  it(`Class | CLASS`, () => {
    expect(isDefined(Class)).toBeTruthy();
    expect(isDefined(CLASS)).toBeTruthy();
  });
  it(`'function' | Function`, () => {
    expect(isDefined(FUNCTION)).toBeTruthy();
  });
  it(`null | NULL`, () => {
    expect(isDefined(null)).toBeTruthy();
    expect(isDefined(NULL)).toBeTruthy();
  });
  it(`'number' | Number`, () => {
    expect(isDefined(NUMBER)).toBeTruthy();
    expect(isDefined(NUMBER_INSTANCE)).toBeTruthy();
    expect(isDefined(NUMBER_NEW_INSTANCE)).toBeTruthy();
  });
  it(`'object' | Object`, () => {
    expect(isDefined(OBJECT_ONE)).toBeTruthy();
    expect(isDefined(OBJECT_TWO)).toBeTruthy();
  });
  it(`'string' | String`, () => {
    expect(isDefined(STRING)).toBeTruthy();
    expect(isDefined(STRING_INSTANCE)).toBeTruthy();
    expect(isDefined(STRING_NEW_INSTANCE)).toBeTruthy();
  });
  it(`'symbol'`, () => {
    expect(isDefined(SYMBOL_NUMBER)).toBeTruthy();
    expect(isDefined(SYMBOL_STRING)).toBeTruthy();
  });

  // FALSE
  it(`'undefined'`, () => {
    expect(isDefined(notDefined)).toBeFalsy();
    expect(isDefined(UNDEFINED)).toBeFalsy();
  });
});
