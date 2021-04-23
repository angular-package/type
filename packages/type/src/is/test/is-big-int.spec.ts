/**
 * Checks
 * ✓ typeof === 'bigint'
 */
import { isBigInt } from '../lib/is-big-int.func';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE } from './variables/boolean.const';
import { BIGINT, BIGINT_INSTANCE } from './variables/big-int.const';
import { FUNCTION } from './variables/function.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from './variables/number.const';
import { OBJECT_ONE, OBJECT_TWO } from './variables/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from './variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from './variables/symbol.const';
import { UNDEFINED } from './variables/undefined.const';
import { CLASS, Class } from './variables/class.const';
import { NULL } from './variables/null.const';
import { notDefined } from './variables/not-defined.const';

describe('isBigInt', () => {
  // TRUE
  it('is DEFINED', () => {
    expect(isBigInt).toBeDefined();
  });
  it(`'bigint'`, () => {
    expect(isBigInt(BIGINT)).toBeTruthy();
    expect(isBigInt(BIGINT_INSTANCE)).toBeTruthy();
  });

  // FALSE
  it(`'boolean' | Boolean`, () => {
    expect(isBigInt(FALSE)).toBeFalsy();
    expect(isBigInt(TRUE)).toBeFalsy();
    expect(isBigInt(FALSE_INSTANCE)).toBeFalsy();
    expect(isBigInt(TRUE_INSTANCE)).toBeFalsy();
  });
  it(`Class | CLASS`, () => {
    expect(isBigInt(Class)).toBeFalsy();
    expect(isBigInt(CLASS)).toBeFalsy();
  });
  it(`'function' | Function`, () => {
    expect(isBigInt(FUNCTION)).toBeFalsy();
  });
  it(`null | NULL`, () => {
    expect(isBigInt(null)).toBeFalsy();
    expect(isBigInt(NULL)).toBeFalsy();
  });
  it(`'number' | Number`, () => {
    expect(isBigInt(NUMBER)).toBeFalsy();
    expect(isBigInt(NUMBER_INSTANCE)).toBeFalsy();
    expect(isBigInt(NUMBER_NEW_INSTANCE)).toBeFalsy();
  });
  it(`'object' | Object`, () => {
    expect(isBigInt(OBJECT_ONE)).toBeFalsy();
    expect(isBigInt(OBJECT_TWO)).toBeFalsy();
  });
  it(`'string' | String`, () => {
    expect(isBigInt(STRING)).toBeFalsy();
    expect(isBigInt(STRING_INSTANCE)).toBeFalsy();
    expect(isBigInt(STRING_NEW_INSTANCE)).toBeFalsy();
  });
  it(`'symbol'`, () => {
    expect(isBigInt(SYMBOL_NUMBER)).toBeFalsy();
    expect(isBigInt(SYMBOL_STRING)).toBeFalsy();
  });
  it(`'undefined'`, () => {
    expect(isBigInt(notDefined)).toBeFalse();
    expect(isBigInt(UNDEFINED)).toBeFalse();
  });
});
