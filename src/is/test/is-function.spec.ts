// Function.
import { isFunction } from '../lib/is-function.func';
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

describe(isFunction.name, () => {
  // TRUE
  it('is DEFINED', () => expect(isFunction).toBeDefined());
  it(`'function' | Function`, () => expect(isFunction(FUNCTION)).toBe(TRUE));

  // FALSE.
  it(`'boolean' | Boolean`, () => {
    expect(isFunction(FALSE)).toBe(FALSE);
    expect(isFunction(TRUE)).toBe(FALSE);
    expect(isFunction(FALSE_INSTANCE)).toBe(FALSE);
    expect(isFunction(TRUE_INSTANCE)).toBe(FALSE);
    expect(isFunction(Boolean(false))).toBe(FALSE);
    expect(isFunction(Boolean(true))).toBe(FALSE);
    isFunction(TRUE, (result: boolean) => {
      expect(result).toBe(FALSE);
      return result;
    });
  });
  it(`'bigint'`, () => {
    expect(isFunction(BIGINT)).toBe(FALSE);
    expect(isFunction(BIGINT_INSTANCE)).toBe(FALSE);
  });
  it(`CLASS`, () => expect(isFunction(CLASS)).toBe(FALSE));
  it(`Class`, () => expect(isFunction(Class)).toBe(FALSE));
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
