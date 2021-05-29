// Object.
import { guard } from '../lib/guard.object';
// Function.
import { guardClass } from '../lib/guard-class.func';
// Constant.
import { Persons } from '../../testing/src/strict/class.const';
import { TRUE } from '../../testing/src/strict/boolean.const';

describe(guardClass.name, () => {
  it('is DEFINED', () => expect(guardClass).toBeDefined());
  it(`Class`, () => {
    expect(guardClass(Persons)).toBe(TRUE);
    expect(guard.is.class(Persons)).toBe(TRUE);
  });
  it(``, () => {
    expect()
  });
});
