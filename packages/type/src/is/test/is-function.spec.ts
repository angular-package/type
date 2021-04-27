// Function.
import { isFunction } from '../lib/is-function.func';
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

describe('isFunction', () => {
  // TRUE
  it('is DEFINED', () => expect(isFunction).toBeDefined());
  it(`'function' | Function`, () => expect(isFunction(FUNCTION)).toBe(TRUE));
  it(`Class`, () => expect(isFunction(Class)).toBe(TRUE));

  // FALSE.
  it(`'boolean' | Boolean`, () => {
    expect(isFunction(FALSE)).toBe(FALSE);
    expect(isFunction(TRUE)).toBe(FALSE);
    expect(isFunction(FALSE_INSTANCE)).toBe(FALSE);
    expect(isFunction(TRUE_INSTANCE)).toBe(FALSE);
    expect(isFunction(Boolean(false))).toBe(FALSE);
    expect(isFunction(Boolean(true))).toBe(FALSE);
  });
  it(`'bigint'`, () => {
    expect(isFunction(BIGINT)).toBe(FALSE);
    expect(isFunction(BIGINT_INSTANCE)).toBe(FALSE);
  });
  it(`CLASS`, () => expect(isFunction(CLASS)).toBe(FALSE));
  it(`null | NULL`, () => {
    expect(isFunction(null)).toBe(FALSE);
    expect(isFunction(NULL)).toBe(FALSE);
  });
  it(`'number' | Number`, () => {
    expect(isFunction(NUMBER)).toBe(FALSE);
    expect(isFunction(NUMBER_INSTANCE)).toBe(FALSE);
    expect(isFunction(NUMBER_NEW_INSTANCE)).toBe(FALSE);
  });
  it(`'object' | Object`, () => {
    expect(isFunction(OBJECT_ONE)).toBe(FALSE);
    expect(isFunction(OBJECT_TWO)).toBe(FALSE);
  });
  it(`'string' | String`, () => {
    expect(isFunction(STRING)).toBe(FALSE);
    expect(isFunction(STRING_INSTANCE)).toBe(FALSE);
    expect(isFunction(STRING_NEW_INSTANCE)).toBe(FALSE);
  });
  it(`'symbol'`, () => {
    expect(isFunction(SYMBOL_NUMBER)).toBe(FALSE);
    expect(isFunction(SYMBOL_STRING)).toBe(FALSE);
  });
  it(`'undefined'`, () => {
    expect(isFunction(notDefined)).toBe(FALSE);
    expect(isFunction(UNDEFINED)).toBe(FALSE);
  });
});
