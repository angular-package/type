// Function.
import { isBooleanType } from '../lib/is-boolean-type.func';
// Constant.
import { BIGINT, BIGINT_INSTANCE } from '../../testing/variables/big-int.const';
import { Class, CLASS } from '../../testing/variables/class.const';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE } from '../../testing/variables/boolean.const';
import { FUNCTION } from '../../testing/variables/function.const';
import { NULL } from '../../testing/variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../testing/variables/number.const';
import { OBJECT_ONE, OBJECT_TWO } from '../../testing/variables/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../testing/variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../testing/variables/symbol.const';
import { UNDEFINED } from '../../testing/variables/undefined.const';
import { notDefined } from '../../testing/variables/not-defined.const';
/**
 * Checks
 * ✓ typeof === 'boolean'
 * ✓ value === true
 * ✓ value === false
 */
describe(isBooleanType.name, () => {
  // TRUE
  it('is DEFINED', () => expect(isBooleanType).toBeDefined());
  it(`boolean`, () => {
    expect(isBooleanType(FALSE)).toBe(TRUE);
    expect(isBooleanType(TRUE)).toBe(TRUE);
    expect(isBooleanType(Boolean(false))).toBe(TRUE);
    expect(isBooleanType(Boolean(true))).toBe(TRUE);
  });

  // FALSE
  it(`Boolean`, () => {
    expect(isBooleanType(FALSE_INSTANCE)).toBe(FALSE);
    expect(isBooleanType(TRUE_INSTANCE)).toBe(FALSE);
  });
  it(`'bigint'`, () => {
    expect(isBooleanType(BIGINT)).toBe(FALSE);
    expect(isBooleanType(BIGINT_INSTANCE)).toBe(FALSE);
  });
  it(`Class | CLASS`, () => {
    expect(isBooleanType(Class)).toBe(FALSE);
    expect(isBooleanType(CLASS)).toBe(FALSE);
  });
  it(`'function' | Function`, () => expect(isBooleanType(FUNCTION)).toBe(FALSE));
  it(`null | NULL`, () => {
    expect(isBooleanType(null)).toBe(FALSE);
    expect(isBooleanType(NULL)).toBe(FALSE);
  });
  it(`'number' | Number`, () => {
    expect(isBooleanType(NUMBER)).toBe(FALSE);
    expect(isBooleanType(NUMBER_INSTANCE)).toBe(FALSE);
    expect(isBooleanType(NUMBER_NEW_INSTANCE)).toBe(FALSE);
  });
  it(`'object' | Object`, () => {
    expect(isBooleanType(OBJECT_ONE)).toBe(FALSE);
    expect(isBooleanType(OBJECT_TWO)).toBe(FALSE);
  });
  it(`'string' | String`, () => {
    expect(isBooleanType(STRING)).toBe(FALSE);
    expect(isBooleanType(STRING_INSTANCE)).toBe(FALSE);
    expect(isBooleanType(STRING_NEW_INSTANCE)).toBe(FALSE);
  });
  it(`'symbol'`, () => {
    expect(isBooleanType(SYMBOL_NUMBER)).toBe(FALSE);
    expect(isBooleanType(SYMBOL_STRING)).toBe(FALSE);
  });
  it(`'undefined'`, () => {
    expect(isBooleanType(notDefined)).toBe(FALSE);
    expect(isBooleanType(UNDEFINED)).toBe(FALSE);
  });
});
