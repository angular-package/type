// Object.
import { guard } from '../lib/guard.object';
// Function.
import { guardClass } from '../lib/guard-class.func';
// Variables.
import { Person } from '../../testing/variables/strict/class.const';
import { TRUE } from '../../testing/variables/strict/boolean.const';

describe(guardClass.name, () => {
  // TRUE
  it('is DEFINED', () => expect(guardClass).toBeDefined());
  it(`Class`, () => expect(guardClass(Person)).toBe(TRUE));
  it(`Class`, () => expect(guard.is.class(Person)).toBe(TRUE));
});
