// Object.
import { guard } from '../lib/guard.object';
// Function.
import { guardClass } from '../lib/guard-class.func';
// Constant.
import { Persons } from '../../testing/variables/strict/class.const';
import { TRUE } from '../../testing/variables/strict/boolean.const';

describe(guardClass.name, () => {
  // TRUE
  it('is DEFINED', () => expect(guardClass).toBeDefined());
  it(`Class`, () => {
    expect(guardClass(Persons)).toBe(TRUE);
    expect(guard.is.class(Persons)).toBe(TRUE);
  });
});
