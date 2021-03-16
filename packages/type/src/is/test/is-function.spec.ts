// Function.
import { isFunction } from '../lib/is-function.func';
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

describe('isFunction', () => {
  // TRUE
  it('is DEFINED', () => {
    expect(isFunction).toBeDefined();
  });
  it(`'function' | Function`, () => {
    expect(isFunction(FUNCTION)).toBeTruthy();
  });
  it(`Class`, () => {
    expect(isFunction(Class)).toBeTruthy();
  });

  // FALSE.
  it(`'boolean' | Boolean`, () => {
    expect(isFunction(FALSE)).toBeFalsy();
    expect(isFunction(TRUE)).toBeFalsy();
    expect(isFunction(FALSE_INSTANCE)).toBeFalsy();
    expect(isFunction(TRUE_INSTANCE)).toBeFalsy();
    expect(isFunction(Boolean(false))).toBeFalsy();
    expect(isFunction(Boolean(true))).toBeFalsy();
  });
  it(`'bigint'`, () => {
    expect(isFunction(BIGINT)).toBeFalsy();
    expect(isFunction(BIGINT_INSTANCE)).toBeFalsy();
  });
  it(`CLASS`, () => {
    expect(isFunction(CLASS)).toBeFalsy();
  });
  it(`null | NULL`, () => {
    expect(isFunction(null)).toBeFalsy();
    expect(isFunction(NULL)).toBeFalsy();
  });
  it(`'number' | Number`, () => {
    expect(isFunction(NUMBER)).toBeFalsy();
    expect(isFunction(NUMBER_INSTANCE)).toBeFalsy();
    expect(isFunction(NUMBER_NEW_INSTANCE)).toBeFalsy();
  });
  it(`'object' | Object`, () => {
    expect(isFunction(OBJECT_ONE)).toBeFalsy();
    expect(isFunction(OBJECT_TWO)).toBeFalsy();
  });
  it(`'string' | String`, () => {
    expect(isFunction(STRING)).toBeFalsy();
    expect(isFunction(STRING_INSTANCE)).toBeFalsy();
    expect(isFunction(STRING_NEW_INSTANCE)).toBeFalsy();
  });
  it(`'symbol'`, () => {
    expect(isFunction(SYMBOL_NUMBER)).toBeFalsy();
    expect(isFunction(SYMBOL_STRING)).toBeFalsy();
  });
  it(`'undefined'`, () => {
    expect(isFunction(notDefined)).toBeFalsy();
    expect(isFunction(UNDEFINED)).toBeFalsy();
  });
});
