/**
 * Checks
 * ✓ typeof === 'number'
 * ✓ instanceof Number
 */

import { isNumber } from '../lib/is-number.func';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE } from './variables/boolean.const';
import { BIGINT, BIGINT_INSTANCE } from './variables/big-int.const';
import { FUNCTION } from './variables/function.const';
import { notDefined } from './variables.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from './variables/number.const';
import { OBJECT_ONE, OBJECT_TWO } from './variables/object.const';
import { STRING, STRING_INSTANCE } from './variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from './variables/symbol.const';
import { UNDEFINED } from './variables/undefined.const';

describe('isNumber', () => {

  // TRUE
  it('is DEFINED', () => {
    expect(isNumber).toBeDefined();
  });
  it(`'number' | Number`, () => {
    expect(isNumber(NUMBER)).toBeTruthy();
    expect(isNumber(NUMBER_INSTANCE)).toBeTruthy();
    expect(isNumber(NUMBER_NEW_INSTANCE)).toBeTruthy();
  });

  // FALSE
  it(`'bigint'`, () => {
    expect(isNumber(BIGINT)).toBeFalsy();
    expect(isNumber(BIGINT_INSTANCE)).toBeFalsy();
  });
  it(`'boolean' | Boolean`, () => {
    expect(isNumber(FALSE)).toBeFalsy();
    expect(isNumber(TRUE)).toBeFalsy();
    expect(isNumber(FALSE_INSTANCE)).toBeFalsy();
    expect(isNumber(TRUE_INSTANCE)).toBeFalsy();
  });
  it(`'function' | Function`, () => {
    expect(isNumber(FUNCTION)).toBeFalsy();
  });
  it(`'object' | Object`, () => {
    expect(isNumber(OBJECT_ONE)).toBeFalsy();
    expect(isNumber(OBJECT_TWO)).toBeFalsy();
  });
  it(`'string' | String`, () => {
    expect(isNumber(STRING)).toBeFalsy();
    expect(isNumber(STRING_INSTANCE)).toBeFalsy();
  });
  it(`'symbol'`, () => {
    expect(isNumber(SYMBOL_NUMBER)).toBeFalsy();
    expect(isNumber(SYMBOL_STRING)).toBeFalsy();
  });
  it(`'undefined'`, () => {
    expect(isNumber(notDefined)).toBeFalse();
    expect(isNumber(UNDEFINED)).toBeFalse();
  });
});
