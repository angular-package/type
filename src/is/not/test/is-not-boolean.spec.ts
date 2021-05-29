// Function.
import { isNotBoolean } from '../lib/is-not-boolean.func';
// Constant.
import { BIGINT, BIGINT_INSTANCE } from '../../../testing/variables/big-int.const';
import { Class, CLASS } from '../../../testing/variables/class.const';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE } from '../../../testing/variables/boolean.const';
import { FUNCTION } from '../../../testing/variables/function.const';
import { NULL } from '../../../testing/variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../../testing/variables/number.const';
import { OBJECT_ONE, OBJECT_TWO } from '../../../testing/variables/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../../testing/variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../../testing/variables/symbol.const';
import { UNDEFINED } from '../../../testing/variables/undefined.const';
import { notDefined } from '../../../testing/variables/not-defined.const';

describe('isNotBoolean', () => {
  // TRUE
  it('is DEFINED', () => {
    expect(isNotBoolean).toBeDefined();
  });
  // FALSE
  it(`'bigint'`, () => {
    expect(isNotBoolean(BIGINT)).toBeTrue();
    expect(isNotBoolean(BIGINT_INSTANCE)).toBeTrue();
  });
  it(`Class | CLASS`, () => {
    expect(isNotBoolean(Class)).toBeTrue();
    expect(isNotBoolean(CLASS)).toBeTrue();
  });
  it(`'function' | Function`, () => {
    expect(isNotBoolean(FUNCTION)).toBeTrue();
  });
  it(`null | NULL`, () => {
    expect(isNotBoolean(null)).toBeTrue();
    expect(isNotBoolean(NULL)).toBeTrue();
  });
  it(`'number' | Number`, () => {
    expect(isNotBoolean(NUMBER)).toBeTrue();
    expect(isNotBoolean(NUMBER_INSTANCE)).toBeTrue();
    expect(isNotBoolean(NUMBER_NEW_INSTANCE)).toBeTrue();
  });
  it(`'object' | Object`, () => {
    expect(isNotBoolean(OBJECT_ONE)).toBeTrue();
    expect(isNotBoolean(OBJECT_TWO)).toBeTrue();
  });
  it(`'string' | String`, () => {
    expect(isNotBoolean(STRING)).toBeTrue();
    expect(isNotBoolean(STRING_INSTANCE)).toBeTrue();
    expect(isNotBoolean(STRING_NEW_INSTANCE)).toBeTrue();
  });
  it(`'symbol'`, () => {
    expect(isNotBoolean(SYMBOL_NUMBER)).toBeTrue();
    expect(isNotBoolean(SYMBOL_STRING)).toBeTrue();
  });
  it(`'undefined'`, () => {
    expect(isNotBoolean(notDefined)).toBeTrue();
    expect(isNotBoolean(UNDEFINED)).toBeTrue();
  });

  // FALSE
  it(`'boolean' | Boolean`, () => {
    expect(isNotBoolean(FALSE)).toBeFalse();
    expect(isNotBoolean(TRUE)).toBeFalse();
    expect(isNotBoolean(FALSE_INSTANCE)).toBeFalse();
    expect(isNotBoolean(TRUE_INSTANCE)).toBeFalse();
    expect(isNotBoolean(Boolean(false))).toBeFalse();
    expect(isNotBoolean(Boolean(true))).toBeFalse();
  });
});
