// Function.
import { isBoolean } from '../lib/is-boolean.func';
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
 * ✓ instanceof Boolean
 */
describe(isBoolean.name, () => {
  // TRUE
  it('is DEFINED', () => expect(isBoolean).toBeDefined());
  it(`'boolean' | Boolean`, () => {
    expect(isBoolean(FALSE)).toBe(TRUE);
    expect(isBoolean(TRUE)).toBe(TRUE);
    expect(isBoolean(FALSE_INSTANCE)).toBe(TRUE);
    expect(isBoolean(TRUE_INSTANCE)).toBe(TRUE);
    expect(isBoolean(Boolean(false))).toBe(TRUE);
    expect(isBoolean(Boolean(true))).toBe(TRUE);
    isBoolean(FALSE, (result: boolean) => {
      expect(result).toBe(TRUE);
      return result;
    });
  });

  // FALSE
  it(`'bigint'`, () => {
    expect(isBoolean(BIGINT)).toBe(FALSE);
    expect(isBoolean(BIGINT_INSTANCE)).toBe(FALSE);
    isBoolean(BIGINT, (result: boolean) => {
      expect(result).toBe(FALSE);
      return result;
    });
  });
  it(`Class | CLASS`, () => {
    expect(isBoolean(Class)).toBe(FALSE);
    expect(isBoolean(CLASS)).toBe(FALSE);
  });
  it(`'function' | Function`, () => expect(isBoolean(FUNCTION)).toBe(FALSE));
  it(`null | NULL`, () => {
    expect(isBoolean(null)).toBe(FALSE);
    expect(isBoolean(NULL)).toBe(FALSE);
  });
  it(`'number' | Number`, () => {
    expect(isBoolean(NUMBER)).toBe(FALSE);
    expect(isBoolean(NUMBER_INSTANCE)).toBe(FALSE);
    expect(isBoolean(NUMBER_NEW_INSTANCE)).toBe(FALSE);
  });
  it(`'object' | Object`, () => {
    expect(isBoolean(OBJECT_ONE)).toBe(FALSE);
    expect(isBoolean(OBJECT_TWO)).toBe(FALSE);
  });
  it(`'string' | String`, () => {
    expect(isBoolean(STRING)).toBe(FALSE);
    expect(isBoolean(STRING_INSTANCE)).toBe(FALSE);
    expect(isBoolean(STRING_NEW_INSTANCE)).toBe(FALSE);
  });
  it(`'symbol'`, () => {
    expect(isBoolean(SYMBOL_NUMBER)).toBe(FALSE);
    expect(isBoolean(SYMBOL_STRING)).toBe(FALSE);
  });
  it(`'undefined'`, () => {
    expect(isBoolean(notDefined)).toBe(FALSE);
    expect(isBoolean(UNDEFINED)).toBe(FALSE);
  });
});
