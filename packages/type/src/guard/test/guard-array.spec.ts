// Function.
import { guardArray } from '../lib/guard-array.func';
// Variables.
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
} from './variables/array.const';
import { Class } from './variables/class.const';
import { Func } from '../../type/func.type';
import { ObjectOne, ObjectTwo } from './variables/object.const';

describe(guardArray.name, () => {
  // TRUE
  it('is DEFINED', () => {
    expect(guardArray).toBeDefined();
  });

  it('Array<bigint>', () => expect(guardArray<bigint>(ARRAY_BIGINT)).toBeTruthy());
  it('Array<boolean>', () => expect(guardArray<boolean | Boolean>(ARRAY_BOOLEAN)).toBeTruthy());
  it('Array<Class>', () => expect(guardArray<Class>(ARRAY_CLASS)).toBeTruthy());
  it('Array<Func>', () => expect(guardArray<Func>(ARRAY_FUNCTION)).toBeTruthy());
  it('Array<null>', () => expect(guardArray<null>(ARRAY_NULL)).toBeTruthy());
  it('Array<number>', () => expect(guardArray<number | Number>(ARRAY_NUMBER)).toBeTruthy());
  it('Array<ObjectOne> Array<ObjectTwo>', () => {
    expect(guardArray<ObjectOne>(ARRAY_OBJECT_ONE)).toBeTruthy();
    expect(guardArray<ObjectTwo>(ARRAY_OBJECT_TWO)).toBeTruthy();
  });
  it('Array<string>', () => expect(guardArray<string | String>(ARRAY_STRING)).toBeTruthy());
  it('Array<symbol>', () => {
    expect(guardArray<symbol>(ARRAY_SYMBOL_STRING)).toBeTruthy();
    expect(guardArray<symbol>(ARRAY_SYMBOL_NUMBER)).toBeTruthy();
  });
  it('Array<undefined>', () => expect(guardArray<undefined>(ARRAY_UNDEFINED)).toBeTruthy());
});
