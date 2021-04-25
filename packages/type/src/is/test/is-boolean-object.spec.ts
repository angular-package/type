// Function.
import { isBooleanObject } from '../lib/is-boolean-object.func';
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
 * ✓ typeof === 'object'
 * ✓ instanceof Object
 * ✓ instanceof Boolean
 */
describe('isBooleanObject', () => {
  // TRUE
  it('is DEFINED', () => expect(isBooleanObject).toBeDefined());
  it(`Boolean`, () => {
    expect(isBooleanObject(FALSE_INSTANCE)).toBe(TRUE);
    expect(isBooleanObject(TRUE_INSTANCE)).toBe(TRUE);
  });

  // FALSE
  it(`boolean`, () => {
    expect(isBooleanObject(FALSE)).toBe(FALSE);
    expect(isBooleanObject(TRUE)).toBe(FALSE);
    expect(isBooleanObject(Boolean(false))).toBe(FALSE);
    expect(isBooleanObject(Boolean(true))).toBe(FALSE);
  });
  it(`'bigint'`, () => {
    expect(isBooleanObject(BIGINT)).toBe(FALSE);
    expect(isBooleanObject(BIGINT_INSTANCE)).toBe(FALSE);
  });
  it(`Class | CLASS`, () => {
    expect(isBooleanObject(Class)).toBe(FALSE);
    expect(isBooleanObject(CLASS)).toBe(FALSE);
  });
  it(`'function' | Function`, () => expect(isBooleanObject(FUNCTION)).toBe(FALSE));
  it(`null | NULL`, () => {
    expect(isBooleanObject(null)).toBe(FALSE);
    expect(isBooleanObject(NULL)).toBe(FALSE);
  });
  it(`'number' | Number`, () => {
    expect(isBooleanObject(NUMBER)).toBe(FALSE);
    expect(isBooleanObject(NUMBER_INSTANCE)).toBe(FALSE);
    expect(isBooleanObject(NUMBER_NEW_INSTANCE)).toBe(FALSE);
  });
  it(`'object' | Object`, () => {
    expect(isBooleanObject(OBJECT_ONE)).toBe(FALSE);
    expect(isBooleanObject(OBJECT_TWO)).toBe(FALSE);
  });
  it(`'string' | String`, () => {
    expect(isBooleanObject(STRING)).toBe(FALSE);
    expect(isBooleanObject(STRING_INSTANCE)).toBe(FALSE);
    expect(isBooleanObject(STRING_NEW_INSTANCE)).toBe(FALSE);
  });
  it(`'symbol'`, () => {
    expect(isBooleanObject(SYMBOL_NUMBER)).toBe(FALSE);
    expect(isBooleanObject(SYMBOL_STRING)).toBe(FALSE);
  });
  it(`'undefined'`, () => {
    expect(isBooleanObject(notDefined)).toBe(FALSE);
    expect(isBooleanObject(UNDEFINED)).toBe(FALSE);
  });
});
