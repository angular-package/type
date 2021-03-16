
// Function.
import { isNull } from '../lib/is-null.func';

// Variables.
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

describe('isNull', () => {
  // TRUE
  it('is DEFINED', () => {
    expect(isNull).toBeDefined();
  });
  it(`null | NULL`, () => {
    expect(isNull(null)).toBeTrue();
    expect(isNull(NULL)).toBeTrue();
  });

  // FALSE
  it(`'bigint'`, () => {
    expect(isNull(BIGINT)).toBeFalsy();
    expect(isNull(BIGINT_INSTANCE)).toBeFalsy();
  });
  it(`'boolean' | Boolean`, () => {
    expect(isNull(FALSE)).toBeFalse();
    expect(isNull(TRUE)).toBeFalse();
    expect(isNull(FALSE_INSTANCE)).toBeFalse();
    expect(isNull(TRUE_INSTANCE)).toBeFalse();
    expect(isNull(Boolean(false))).toBeFalse();
    expect(isNull(Boolean(true))).toBeFalse();
  });
  it(`Class | CLASS`, () => {
    expect(isNull(Class)).toBeFalsy();
    expect(isNull(CLASS)).toBeFalsy();
  });
  it(`'function' | Function`, () => {
    expect(isNull(FUNCTION)).toBeFalsy();
  });
  it(`'number' | Number`, () => {
    expect(isNull(NUMBER)).toBeFalsy();
    expect(isNull(NUMBER_INSTANCE)).toBeFalsy();
    expect(isNull(NUMBER_NEW_INSTANCE)).toBeFalsy();
  });
  it(`'object' | Object`, () => {
    expect(isNull(OBJECT_ONE)).toBeFalsy();
    expect(isNull(OBJECT_TWO)).toBeFalsy();
  });
  it(`'string' | String`, () => {
    expect(isNull(STRING)).toBeFalsy();
    expect(isNull(STRING_INSTANCE)).toBeFalsy();
    expect(isNull(STRING_NEW_INSTANCE)).toBeFalsy();
  });
  it(`'symbol'`, () => {
    expect(isNull(SYMBOL_NUMBER)).toBeFalsy();
    expect(isNull(SYMBOL_STRING)).toBeFalsy();
  });
  it(`'undefined'`, () => {
    expect(isNull(notDefined)).toBeFalse();
    expect(isNull(UNDEFINED)).toBeFalse();
  });
});
