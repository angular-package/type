
// Function.
import { isNull } from '../lib/is-null.func';
// Constant.
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE } from '../../testing/src/boolean.const';
import { BIGINT, BIGINT_INSTANCE } from '../../testing/src/big-int.const';
import { Class, CLASS } from '../../testing/src/class.const';
import { FUNCTION } from '../../testing/src/function.const';
import { NULL } from '../../testing/src/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../testing/src/number.const';
import { OBJECT_ONE, OBJECT_TWO } from '../../testing/src/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../testing/src/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../testing/src/symbol.const';
import { UNDEFINED } from '../../testing/src/undefined.const';
import { notDefined } from '../../testing/src/not-defined.const';

describe(isNull.name, () => {
  // TRUE
  it('is DEFINED', () => expect(isNull).toBeDefined());
  it(`null | NULL`, () => {
    expect(isNull(null)).toBe(TRUE);
    expect(isNull(NULL)).toBe(TRUE);
    isNull(NULL, (result: boolean) => {
      expect(result).toBe(TRUE);
      return result;
    });
  });

  // FALSE
  it(`'bigint'`, () => {
    expect(isNull(BIGINT)).toBe(FALSE);
    expect(isNull(BIGINT_INSTANCE)).toBe(FALSE);
  });
  it(`'boolean' | Boolean`, () => {
    expect(isNull(FALSE)).toBe(FALSE);
    expect(isNull(TRUE)).toBe(FALSE);
    expect(isNull(FALSE_INSTANCE)).toBe(FALSE);
    expect(isNull(TRUE_INSTANCE)).toBe(FALSE);
    expect(isNull(Boolean(false))).toBe(FALSE);
    expect(isNull(Boolean(true))).toBe(FALSE);
  });
  it(`Class | CLASS`, () => {
    expect(isNull(Class)).toBe(FALSE);
    expect(isNull(CLASS)).toBe(FALSE);
  });
  it(`'function' | Function`, () => expect(isNull(FUNCTION)).toBe(FALSE));
  it(`'number' | Number`, () => {
    expect(isNull(NUMBER)).toBe(FALSE);
    expect(isNull(NUMBER_INSTANCE)).toBe(FALSE);
    expect(isNull(NUMBER_NEW_INSTANCE)).toBe(FALSE);
  });
  it(`'object' | Object`, () => {
    expect(isNull(OBJECT_ONE)).toBe(FALSE);
    expect(isNull(OBJECT_TWO)).toBe(FALSE);
  });
  it(`'string' | String`, () => {
    expect(isNull(STRING)).toBe(FALSE);
    expect(isNull(STRING_INSTANCE)).toBe(FALSE);
    expect(isNull(STRING_NEW_INSTANCE)).toBe(FALSE);
  });
  it(`'symbol'`, () => {
    expect(isNull(SYMBOL_NUMBER)).toBe(FALSE);
    expect(isNull(SYMBOL_STRING)).toBe(FALSE);
  });
  it(`'undefined'`, () => {
    expect(isNull(notDefined)).toBe(FALSE);
    expect(isNull(UNDEFINED)).toBe(FALSE);
  });
});
