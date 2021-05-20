// Function.
import { guardClass } from '../lib/guard-class.func';
// Variables.
import { Person } from './variables/class.const';
import { TRUE } from './variables/boolean.const';
import { guard } from '../lib/guard.object';

describe(guardClass.name, () => {
  // TRUE
  it('is DEFINED', () => expect(guardClass).toBeDefined());
  it(`Class`, () => expect(guardClass(Person)).toBe(TRUE));
  it(`Class`, () => expect(guard.is.class(Person)).toBe(TRUE));
});
