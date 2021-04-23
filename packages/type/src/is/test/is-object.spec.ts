// Function.
import { isObject } from '../lib/is-object.func';
// Variables.
import { BIGINT, BIGINT_INSTANCE } from './variables/big-int.const';
import { CLASS, Class } from './variables/class.const';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE } from './variables/boolean.const';
import { FUNCTION } from './variables/function.const';
import { NULL } from './variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from './variables/number.const';
import { OBJECT_ONE, OBJECT_TWO, ObjectOne, ObjectTwo } from './variables/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from './variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from './variables/symbol.const';
import { UNDEFINED } from './variables/undefined.const';
import { notDefined } from './variables/not-defined.const';

/**
 * Checks
 * ✓ typeof === 'object'
 * ✓ instanceof Object
 */
describe('isObject', () => {
  // TRUE
  it('is DEFINED', () => {
    expect(isObject).toBeDefined();
  });
  it(`CLASS instance of class`, () => {
    expect(isObject(CLASS)).toBeTruthy();
  });
  it(`'object' | Object`, () => {
    expect(isObject<ObjectOne>(OBJECT_ONE)).toBeTruthy();
    expect(isObject<ObjectTwo>(OBJECT_TWO)).toBeTruthy();
  });

  // FALSE
  it(`'bigint'`, () => {
    expect(isObject(BIGINT)).toBeFalsy();
    expect(isObject(BIGINT_INSTANCE)).toBeFalsy();
  });
  it(`'boolean' | Boolean`, () => {
    expect(isObject(FALSE)).toBeFalsy();
    expect(isObject(TRUE)).toBeFalsy();
    expect(isObject(FALSE_INSTANCE)).toBeFalsy();
    expect(isObject(TRUE_INSTANCE)).toBeFalsy();
  });
  it(`Class`, () => {
    expect(isObject(Class)).toBeFalsy();
  });
  it(`'function' | Function`, () => {
    expect(isObject(FUNCTION)).toBeFalsy();
  });
  it(`null | NULL`, () => {
    expect(isObject(null)).toBeFalsy();
    expect(isObject(NULL)).toBeFalsy();
  });
  it(`number and instance of Number`, () => {
    expect(isObject(NUMBER)).toBeFalsy();
    expect(isObject(NUMBER_INSTANCE)).toBeFalsy();
    expect(isObject(NUMBER_NEW_INSTANCE)).toBeFalsy();
  });
  it(`string | String`, () => {
    expect(isObject(STRING)).toBeFalsy();
    expect(isObject(STRING_INSTANCE)).toBeFalsy();
    expect(isObject(STRING_NEW_INSTANCE)).toBeFalsy();
  });
  it(`'symbol'`, () => {
    expect(isObject(SYMBOL_NUMBER)).toBeFalsy();
    expect(isObject(SYMBOL_STRING)).toBeFalsy();
  });
  it(`'undefined'`, () => {
    expect(isObject(notDefined)).toBeFalse();
    expect(isObject(UNDEFINED)).toBeFalse();
  });
});
