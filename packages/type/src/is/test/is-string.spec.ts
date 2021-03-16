/**
 * Checks
 * ✓ typeof === 'string' && instanceof String === false && instanceof Object === false
 * ✓ typeof === 'object' && instanceof String === true && instanceof Object === true
 */

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
import { isString } from '../lib/is-string.func';

describe('isString', () => {
  // TRUE
  it('is DEFINED', () => {
    expect(isString).toBeDefined();
  });
  it(`'string' | String`, () => {
    expect(isString(STRING)).toBeTruthy();
    expect(isString(STRING_INSTANCE)).toBeTruthy();
    expect(isString(STRING_NEW_INSTANCE)).toBeTruthy();
  });

  // FALSE
  it(`'bigint'`, () => {
    expect(isString(BIGINT)).toBeFalsy();
    expect(isString(BIGINT_INSTANCE)).toBeFalsy();
  });
  it(`'boolean' | Boolean`, () => {
    expect(isString(FALSE)).toBeFalsy();
    expect(isString(TRUE)).toBeFalsy();
    expect(isString(FALSE_INSTANCE)).toBeFalsy();
    expect(isString(TRUE_INSTANCE)).toBeFalsy();
    expect(isString(Boolean(false))).toBeFalsy();
    expect(isString(Boolean(true))).toBeFalsy();
  });
  it(`Class | CLASS`, () => {
    expect(isString(Class)).toBeFalsy();
    expect(isString(CLASS)).toBeFalsy();
  });
  it(`'function' | Function`, () => {
    expect(isString(FUNCTION)).toBeFalsy();
  });
  it(`null | NULL`, () => {
    expect(isString(null)).toBeFalsy();
    expect(isString(NULL)).toBeFalsy();
  });
  it(`'number' | Number`, () => {
    expect(isString(NUMBER)).toBeFalsy();
    expect(isString(NUMBER_INSTANCE)).toBeFalsy();
    expect(isString(NUMBER_NEW_INSTANCE)).toBeFalsy();
  });
  it(`'object' | Object`, () => {
    expect(isString(OBJECT_ONE)).toBeFalsy();
    expect(isString(OBJECT_TWO)).toBeFalsy();
  });
  it(`'symbol'`, () => {
    expect(isString(SYMBOL_NUMBER)).toBeFalsy();
    expect(isString(SYMBOL_STRING)).toBeFalsy();
  });
  it(`'undefined'`, () => {
    expect(isString(notDefined)).toBeFalse();
    expect(isString(UNDEFINED)).toBeFalse();
  });
});
