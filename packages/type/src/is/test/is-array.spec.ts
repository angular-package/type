
import { isArray } from '../lib/is-array.func';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from './variables/number.const';
import { BIGINT, BIGINT_INSTANCE } from './variables/big-int.const';
import { FUNCTION } from './variables/function.const';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE } from './variables/boolean.const';
import { OBJECT_ONE, OBJECT_TWO, ObjectOne, ObjectTwo } from './variables/object.const';
import { STRING, STRING_INSTANCE } from './variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from './variables/symbol.const';
import { UNDEFINED } from './variables/undefined.const';
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
  ARRAY_SYMBOL_STRING,
  ARRAY_SYMBOL_NUMBER,
  ARRAY_UNDEFINED
} from './variables/array.const';
import { Class } from './variables/class.const';
import { Func } from '../../type/func.type';
import { notDefined } from './variables/not-defined.const';

describe('isArray', () => {

  // TRUE
  it('is DEFINED', () => {
    expect(isArray).toBeDefined();
  });
  it('Array<bigint>', () => expect(isArray<bigint>(ARRAY_BIGINT)).toBeTruthy());
  it('Array<boolean>', () => expect(isArray<boolean>(ARRAY_BOOLEAN)).toBeTruthy());
  it('Array<Class>', () => expect(isArray<Class>(ARRAY_CLASS)).toBeTruthy());
  it('Array<Func>', () => expect(isArray<Func>(ARRAY_FUNCTION)).toBeTruthy());
  it('Array<null>', () => expect(isArray<null>(ARRAY_NULL)).toBeTruthy());
  it('Array<number>', () => expect(isArray<number>(ARRAY_NUMBER)).toBeTruthy());
  it('Array<ObjectOne> Array<ObjectTwo>', () => {
    expect(isArray<ObjectOne>(ARRAY_OBJECT_ONE)).toBeTruthy();
    expect(isArray<ObjectTwo>(ARRAY_OBJECT_TWO)).toBeTruthy();
  });
  it('Array<string>', () => expect(isArray<string>(ARRAY_STRING)).toBeTruthy());
  it('Array<symbol>', () => {
    expect(isArray<symbol>(ARRAY_SYMBOL_STRING)).toBeTruthy();
    expect(isArray<symbol>(ARRAY_SYMBOL_NUMBER)).toBeTruthy();
  });
  it('Array<undefined>', () => expect(isArray<undefined>(ARRAY_UNDEFINED)).toBeTruthy());

  // FALSE
  it(`'bigint'`, () => {
    expect(isArray(BIGINT)).toBeFalsy();
    expect(isArray(BIGINT_INSTANCE)).toBeFalsy();
  });
  it(`'boolean' | Boolean`, () => {
    expect(isArray(FALSE)).toBeFalsy();
    expect(isArray(TRUE)).toBeFalsy();
    expect(isArray(FALSE_INSTANCE)).toBeFalsy();
    expect(isArray(TRUE_INSTANCE)).toBeFalsy();
  });
  it(`'function' | Function`, () => {
    expect(isArray(FUNCTION)).toBeFalsy();
  });
  it(`'number' | Number`, () => {
    expect(isArray(NUMBER)).toBeFalsy();
    expect(isArray(NUMBER_INSTANCE)).toBeFalsy();
    expect(isArray(NUMBER_NEW_INSTANCE)).toBeFalsy();
  });
  it(`'object' | Object`, () => {
    expect(isArray(OBJECT_ONE)).toBeFalsy();
    expect(isArray(OBJECT_TWO)).toBeFalsy();
  });
  it(`'string' | String`, () => {
    expect(isArray(STRING)).toBeFalsy();
    expect(isArray(STRING_INSTANCE)).toBeFalsy();
  });
  it(`'symbol'`, () => {
    expect(isArray(SYMBOL_NUMBER)).toBeFalsy();
    expect(isArray(SYMBOL_STRING)).toBeFalsy();
  });
  it(`'undefined'`, () => {
    expect(isArray(notDefined)).toBeFalse();
    expect(isArray(UNDEFINED)).toBeFalse();
  });
});
