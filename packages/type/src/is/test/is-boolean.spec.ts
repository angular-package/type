/**
 * Checks
 * ✓ typeof === 'boolean'
 * ✓ instanceof Boolean
 */

import { isBoolean } from '../lib/is-boolean.func';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE } from './variables/boolean.const';
import { BIGINT, BIGINT_INSTANCE } from './variables/big-int.const';
import { Class, CLASS } from './variables/class.const';
import { FUNCTION } from './variables/function.const';
import { notDefined } from './variables.const';
import { NULL } from './variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from './variables/number.const';
import { OBJECT_ONE, OBJECT_TWO } from './variables/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from './variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from './variables/symbol.const';
import { UNDEFINED } from './variables/undefined.const';

describe('isBoolean', () => {
  // TRUE
  it('is DEFINED', () => {
    expect(isBoolean).toBeDefined();
  });
  it(`'boolean' | Boolean`, () => {
    expect(isBoolean(FALSE)).toBeTruthy();
    expect(isBoolean(TRUE)).toBeTruthy();
    expect(isBoolean(FALSE_INSTANCE)).toBeTruthy();
    expect(isBoolean(TRUE_INSTANCE)).toBeTruthy();
    expect(isBoolean(Boolean(false))).toBeTruthy();
    expect(isBoolean(Boolean(true))).toBeTruthy();
  });

  // FALSE
  it(`'bigint'`, () => {
    expect(isBoolean(BIGINT)).toBeFalsy();
    expect(isBoolean(BIGINT_INSTANCE)).toBeFalsy();
  });
  it(`Class | CLASS`, () => {
    expect(isBoolean(Class)).toBeFalsy();
    expect(isBoolean(CLASS)).toBeFalsy();
  });
  it(`'function' | Function`, () => {
    expect(isBoolean(FUNCTION)).toBeFalsy();
  });
  it(`null | NULL`, () => {
    expect(isBoolean(null)).toBeFalsy();
    expect(isBoolean(NULL)).toBeFalsy();
  });
  it(`'number' | Number`, () => {
    expect(isBoolean(NUMBER)).toBeFalsy();
    expect(isBoolean(NUMBER_INSTANCE)).toBeFalsy();
    expect(isBoolean(NUMBER_NEW_INSTANCE)).toBeFalsy();
  });
  it(`'object' | Object`, () => {
    expect(isBoolean(OBJECT_ONE)).toBeFalsy();
    expect(isBoolean(OBJECT_TWO)).toBeFalsy();
  });
  it(`'string' | String`, () => {
    expect(isBoolean(STRING)).toBeFalsy();
    expect(isBoolean(STRING_INSTANCE)).toBeFalsy();
    expect(isBoolean(STRING_NEW_INSTANCE)).toBeFalsy();
  });
  it(`'symbol'`, () => {
    expect(isBoolean(SYMBOL_NUMBER)).toBeFalsy();
    expect(isBoolean(SYMBOL_STRING)).toBeFalsy();
  });
  it(`'undefined'`, () => {
    expect(isBoolean(notDefined)).toBeFalse();
    expect(isBoolean(UNDEFINED)).toBeFalse();
  });
});
