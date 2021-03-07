
import { isObject } from '../lib/is-object.func';
import { Func } from '../../type/func.type';
interface ObjectInterface { x: number; }
interface OtherObject { g: number; }

describe('isObject()', () => {

  class ConstructorClass { x = 5; }
  const CONSTRUCTOR_CLASS = new ConstructorClass();
  const JSON_OBJECT: ObjectInterface = { x: 3 };
  const FUNC: Func = (x: number): any => x;

  beforeEach(async () => {});

  beforeEach(() => {});

  it('is DEFINED', () => {
    expect(isObject).toBeDefined();
  });

  it(`isObject('Lorem ipsum?') to be FALSE`, () => {
    expect(isObject('Lorem ipsum?')).toBeFalse();
  });

  it(`isObject(27) to be FALSE`, () => {
    expect(isObject(27)).toBeFalse();
  });

  it(`isObject(true) to be TRUE`, () => {
    expect(isObject(true)).toBeFalse();
  });

  it(`isObject(false) to be FALSE`, () => {
    expect(isObject(false)).toBeFalse();
  });

  it(`isObject(345) to be FALSE`, () => {
    expect(isObject(345)).toBeFalse();
  });

  it(`isObject(FUNC) to be FALSE`, () => {
    expect(isObject(FUNC)).toBeFalse();
  });

  it(`isObject<OtherObject>(JSON_OBJECT, 'y') to be FALSE`, () => {
    expect(isObject<OtherObject>(JSON_OBJECT, 'y')).toBeFalse();
  });

});
