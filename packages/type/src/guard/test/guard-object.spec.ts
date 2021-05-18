// Function.
import { guardObject } from '../lib/guard-object.func';
// Variables.
import { CLASS } from './variables/class.const';
import { OBJECT_ONE, OBJECT_TWO, OBJECT_ONE_NEW, OBJECT_TWO_NEW } from './variables/object.const';
import { TRUE } from './variables/boolean.const';

describe(guardObject.name, () => {
  // Defined.
  it('is DEFINED', () => expect(guardObject).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    // it('callback', () => {
    //   guardObject(OBJECT_ONE, (result: boolean, value: ObjectOne) => {
    //     expect(result).toBe(TRUE);
    //     expect(OBJECT_ONE).toEqual(value);
    //     return result;
    //   });
    // });

    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => expect(guardObject(CLASS)).toBe(TRUE));
      it(`OBJECT_ONE`, () => expect(guardObject(OBJECT_ONE)).toBe(TRUE));
      it(`OBJECT_TWO`, () => expect(guardObject(OBJECT_TWO)).toBe(TRUE));
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(guardObject(OBJECT_ONE_NEW)).toBe(TRUE));
      it(`new Object(OBJECT_TWO_NEW})`, () => expect(guardObject(OBJECT_TWO_NEW)).toBe(TRUE));
    });
  });
});