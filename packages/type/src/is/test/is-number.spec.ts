// Function.
import { isNumber } from '../lib/is-number.func';
// Type.
import { BIGINT, BIGINT_INSTANCE } from './variables/big-int.const';
import { CLASS, Class } from './variables/class.const';
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
 * ✓ typeof === 'number'
 * ✓ instanceof Number
 *
 * ✓ typeof === 'object'
 * ✓ instanceof Object
 */
describe(isNumber.name, () => {
  // TRUE
  it('is DEFINED', () => expect(isNumber).toBeDefined());
  it(`'number' | Number`, () => {
    expect(isNumber(NUMBER)).toBe(TRUE);
    expect(isNumber(NUMBER_INSTANCE)).toBe(TRUE);
    expect(isNumber(NUMBER_NEW_INSTANCE)).toBe(TRUE);
    isNumber(NUMBER_NEW_INSTANCE, (result: boolean) => {
      expect(result).toBe(TRUE);
      return result;
    });
  });

  // FALSE
  it(`'bigint'`, () => {
    expect(isNumber(BIGINT)).toBe(FALSE);
    expect(isNumber(BIGINT_INSTANCE)).toBe(FALSE);
  });
  it(`'boolean' | Boolean`, () => {
    expect(isNumber(FALSE)).toBe(FALSE);
    expect(isNumber(TRUE)).toBe(FALSE);
    expect(isNumber(FALSE_INSTANCE)).toBe(FALSE);
    expect(isNumber(TRUE_INSTANCE)).toBe(FALSE);
  });
  it(`Class | CLASS`, () => {
    expect(isNumber(Class)).toBe(FALSE);
    expect(isNumber(CLASS)).toBe(FALSE);
  });
  it(`'function' | Function`, () => expect(isNumber(FUNCTION)).toBe(FALSE));
  it(`null | NULL`, () => {
    expect(isNumber(null)).toBe(FALSE);
    expect(isNumber(NULL)).toBe(FALSE);
  });
  it(`'object' | Object`, () => {
    expect(isNumber(OBJECT_ONE)).toBe(FALSE);
    expect(isNumber(OBJECT_TWO)).toBe(FALSE);
  });
  it(`'string' | String`, () => {
    expect(isNumber(STRING)).toBe(FALSE);
    expect(isNumber(STRING_INSTANCE)).toBe(FALSE);
    expect(isNumber(STRING_NEW_INSTANCE)).toBe(FALSE);
  });
  it(`'symbol'`, () => {
    expect(isNumber(SYMBOL_NUMBER)).toBe(FALSE);
    expect(isNumber(SYMBOL_STRING)).toBe(FALSE);
  });
  it(`'undefined'`, () => {
    expect(isNumber(notDefined)).toBe(FALSE);
    expect(isNumber(UNDEFINED)).toBe(FALSE);
  });
});
