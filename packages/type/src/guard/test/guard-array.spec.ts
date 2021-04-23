// Function.
import { guardArray } from '../lib/guard-array.func';
// Variables.
import { BIGINT, BIGINT_INSTANCE } from '../../is/test/variables/big-int.const';
import { Class } from '../../is/test/variables/class.const';
import { Func } from '../../type/func.type';
import { ObjectOne, ObjectTwo, OBJECT_ONE, OBJECT_TWO } from '../../is/test/variables/object.const';
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
} from '../../is/test/variables/array.const';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE } from '../../is/test/variables/boolean.const';
import { FUNCTION } from '../../is/test/variables/function.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../is/test/variables/number.const';
import { STRING, STRING_INSTANCE } from '../../is/test/variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../is/test/variables/symbol.const';
import { UNDEFINED } from '../../is/test/variables/undefined.const';
import { notDefined } from '../../is/test/variables/not-defined.const';

describe('guardArray', () => {
  // TRUE
  it('is DEFINED', () => {
    expect(guardArray).toBeDefined();
  });

  it('Array<bigint>', () => expect(guardArray<bigint>(ARRAY_BIGINT)).toBeTruthy());
  it('Array<boolean>', () => expect(guardArray<boolean>(ARRAY_BOOLEAN)).toBeTruthy());
  it('Array<Class>', () => expect(guardArray<Class>(ARRAY_CLASS)).toBeTruthy());
  it('Array<Func>', () => expect(guardArray<Func>(ARRAY_FUNCTION)).toBeTruthy());
  it('Array<null>', () => expect(guardArray<null>(ARRAY_NULL)).toBeTruthy());
  it('Array<number>', () => expect(guardArray<number>(ARRAY_NUMBER)).toBeTruthy());
  it('Array<ObjectOne> Array<ObjectTwo>', () => {
    expect(guardArray<ObjectOne>(ARRAY_OBJECT_ONE)).toBeTruthy();
    expect(guardArray<ObjectTwo>(ARRAY_OBJECT_TWO)).toBeTruthy();
  });
  it('Array<string>', () => expect(guardArray<string>(ARRAY_STRING)).toBeTruthy());
  it('Array<symbol>', () => {
    expect(guardArray<symbol>(ARRAY_SYMBOL_STRING)).toBeTruthy();
    expect(guardArray<symbol>(ARRAY_SYMBOL_NUMBER)).toBeTruthy();
  });
  it('Array<undefined>', () => expect(guardArray<undefined>(ARRAY_UNDEFINED)).toBeTruthy());

  // FALSE
  it(`'bigint'`, () => {
    expect(guardArray(BIGINT)).toBeFalsy();
    expect(guardArray(BIGINT_INSTANCE)).toBeFalsy();
  });
  it(`'boolean' | Boolean`, () => {
    expect(guardArray(FALSE)).toBeFalsy();
    expect(guardArray(TRUE)).toBeFalsy();
    expect(guardArray(FALSE_INSTANCE)).toBeFalsy();
    expect(guardArray(TRUE_INSTANCE)).toBeFalsy();
  });
  it(`'number' | Number`, () => {
    expect(guardArray(NUMBER)).toBeFalsy();
    expect(guardArray(NUMBER_INSTANCE)).toBeFalsy();
    expect(guardArray(NUMBER_NEW_INSTANCE)).toBeFalsy();
  });
  it(`'string' | String`, () => {
    expect(guardArray<string>(STRING)).toBeFalsy();
    expect(guardArray<string>(STRING_INSTANCE)).toBeFalsy();
  });
  it(`'undefined'`, () => {
    expect(guardArray<undefined>(notDefined)).toBeFalse();
    expect(guardArray<undefined>(UNDEFINED)).toBeFalse();
  });
});
