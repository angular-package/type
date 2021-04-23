// Function.
import { isInstance } from '../lib/is-instance.func';
// Variables.
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE } from './variables/boolean.const';
import { BIGINT, BIGINT_INSTANCE } from './variables/big-int.const';
import { Class, CLASS } from './variables/class.const';
import { FUNCTION } from './variables/function.const';
import { NULL } from './variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from './variables/number.const';
// import { OBJECT_ONE, OBJECT_TWO } from './variables/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from './variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from './variables/symbol.const';
import { UNDEFINED } from './variables/undefined.const';
import { notDefined } from './variables/not-defined.const';

describe('isInstance', () => {
  // TRUE.
  it('is DEFINED', () => {
    expect(isInstance).toBeDefined();
  });
  it(`CLASS`, () => {
    expect(isInstance<Class>(CLASS, Class)).toBeTruthy();
  });

  // FALSE.
  it(`'boolean' | Boolean`, () => {
    expect(isInstance(FALSE, FALSE)).toBeFalse();
    expect(isInstance(TRUE, TRUE)).toBeFalse();
    expect(isInstance(FALSE_INSTANCE, FALSE_INSTANCE)).toBeFalse();
    expect(isInstance(TRUE_INSTANCE, TRUE_INSTANCE)).toBeFalse();
  });
  it(`'bigint'`, () => {
    expect(isInstance(BIGINT, BIGINT)).toBeFalse();
    expect(isInstance(BIGINT_INSTANCE, BIGINT_INSTANCE)).toBeFalse();
  });
  it(`CLASS`, () => {
    expect(isInstance<Class>(Class, Class)).toBeFalse();
  });
  it(`'function' | Function`, () => {
    expect(isInstance(FUNCTION, Function)).toBeFalse();
  });
  it(`null | NULL`, () => {
    expect(isInstance(NULL, NULL)).toBeFalse();
  });
  it(`'number' | Number`, () => {
    expect(isInstance(NUMBER, NUMBER)).toBeFalse();
    expect(isInstance(NUMBER_INSTANCE, NUMBER_INSTANCE)).toBeFalse();
    expect(isInstance(NUMBER_NEW_INSTANCE, NUMBER_NEW_INSTANCE)).toBeFalse();
  });
  // it(`'object' | Object`, () => {
  //   expect(isInstance(OBJECT_ONE)).toBeFalse();
  //   expect(isInstance(OBJECT_TWO, OBJECT_TWO)).toBeFalse();
  // });
  it(`'string' | String`, () => {
    expect(isInstance(STRING, STRING)).toBeFalse();
    expect(isInstance(STRING_INSTANCE, STRING_INSTANCE)).toBeFalse();
    expect(isInstance(STRING_NEW_INSTANCE, STRING_NEW_INSTANCE)).toBeFalse();
  });

  // FALSE
  it(`undefined`, () => {
    expect(isInstance(notDefined, notDefined)).toBeFalse();
    expect(isInstance(UNDEFINED, UNDEFINED)).toBeFalse();
  });
});
