import { BIGINT, BIGINT_INSTANCE } from '../../testing/src/big-int.const';
import { Class } from '../../testing/src/class.const';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE } from '../../testing/src/boolean.const';
import { FUNCTION } from '../../testing/src/function.const';
import { Func } from '../../type/func.type';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../testing/src/number.const';
import { OBJECT_ONE, OBJECT_TWO } from '../../testing/src/object.const';
import { STRING, STRING_INSTANCE } from '../../testing/src/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../testing/src/symbol.const';
import { UNDEFINED } from '../../testing/src/undefined.const';
import { isArray } from '../lib/is-array.func';
import { notDefined } from '../../testing/src/not-defined.const';
import {
  ARRAY_BIGINT,
  ARRAY_BOOLEAN,
  ARRAY_CLASS,
  ARRAY_FUNCTION,
  ARRAY_NULL,
  ARRAY_NUMBER,
  ARRAY_OBJECT_ONE,
  ARRAY_OBJECT_TWO,
  ARRAY_STRING,
  ARRAY_SYMBOL_NUMBER,
  ARRAY_SYMBOL_STRING,
  ARRAY_UNDEFINED
} from '../../testing/src/array.const';
// Interface.
import { ObjectOne, ObjectTwo } from '../../testing/interface';

describe(isArray.name, () => {

  // TRUE
  it('is DEFINED', () => expect(isArray).toBeDefined());
  it('Array<bigint>', () => expect(isArray<bigint>(ARRAY_BIGINT)).toBe(TRUE));
  it('Array<boolean>', () => expect(isArray<boolean>(ARRAY_BOOLEAN)).toBe(TRUE));
  it('Array<Class>', () => expect(isArray<Class>(ARRAY_CLASS)).toBe(TRUE));
  it('Array<Func>', () => expect(isArray<Func>(ARRAY_FUNCTION)).toBe(TRUE));
  it('Array<null>', () => expect(isArray<null>(ARRAY_NULL)).toBe(TRUE));
  it('Array<number>', () => expect(isArray<number>(ARRAY_NUMBER)).toBe(TRUE));
  it('Array<ObjectOne> Array<ObjectTwo>', () => {
    expect(isArray<ObjectOne>(ARRAY_OBJECT_ONE)).toBe(TRUE);
    expect(isArray<ObjectTwo>(ARRAY_OBJECT_TWO)).toBe(TRUE);
  });
  it('Array<string>', () => expect(isArray<string>(ARRAY_STRING)).toBe(TRUE));
  it('Array<symbol>', () => {
    expect(isArray<symbol>(ARRAY_SYMBOL_STRING)).toBe(TRUE);
    expect(isArray<symbol>(ARRAY_SYMBOL_NUMBER)).toBe(TRUE);
  });
  it('Array<undefined>', () => expect(isArray<undefined>(ARRAY_UNDEFINED)).toBe(TRUE));

  // FALSE
  it(`'bigint'`, () => {
    expect(isArray(BIGINT)).toBe(FALSE);
    expect(isArray(BIGINT_INSTANCE)).toBe(FALSE);
  });
  it(`'boolean' | Boolean`, () => {
    expect(isArray(FALSE)).toBe(FALSE);
    expect(isArray(TRUE)).toBe(FALSE);
    expect(isArray(FALSE_INSTANCE)).toBe(FALSE);
    expect(isArray(TRUE_INSTANCE)).toBe(FALSE);
  });
  it(`'function' | Function`, () => expect(isArray(FUNCTION)).toBe(FALSE));
  it(`'number' | Number`, () => {
    expect(isArray(NUMBER)).toBe(FALSE);
    expect(isArray(NUMBER_INSTANCE)).toBe(FALSE);
    expect(isArray(NUMBER_NEW_INSTANCE)).toBe(FALSE);
  });
  it(`'object' | Object`, () => {
    expect(isArray(OBJECT_ONE)).toBe(FALSE);
    expect(isArray(OBJECT_TWO)).toBe(FALSE);
  });
  it(`'string' | String`, () => {
    expect(isArray(STRING)).toBe(FALSE);
    expect(isArray(STRING_INSTANCE)).toBe(FALSE);
  });
  it(`'symbol'`, () => {
    expect(isArray(SYMBOL_NUMBER)).toBe(FALSE);
    expect(isArray(SYMBOL_STRING)).toBe(FALSE);
  });
  it(`'undefined'`, () => {
    expect(isArray(notDefined)).toBe(FALSE);
    expect(isArray(UNDEFINED)).toBe(FALSE);
  });
});
