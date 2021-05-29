// Function.
import { isBooleanObject } from '../lib/is-boolean-object.func';
// Constant.
import { BIGINT, BIGINT_INSTANCE } from '../../testing/src/big-int.const';
import { Class, CLASS } from '../../testing/src/class.const';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE } from '../../testing/src/boolean.const';
import { FUNCTION } from '../../testing/src/function.const';
import { NULL } from '../../testing/src/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../testing/src/number.const';
import { OBJECT_ONE, OBJECT_TWO } from '../../testing/src/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../testing/src/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../testing/src/symbol.const';
import { UNDEFINED } from '../../testing/src/undefined.const';
import { notDefined } from '../../testing/src/not-defined.const';
/**
 * Checks
 * ✓ typeof === 'object'
 * ✓ instanceof Object
 * ✓ instanceof Boolean
 */
describe(isBooleanObject.name, () => {
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
