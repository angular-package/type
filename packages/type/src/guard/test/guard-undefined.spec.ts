// Function.
import { guardUndefined } from '../lib/guard-undefined.func';
// Variables.
import { TRUE } from './variables/boolean.const';
import { UNDEFINED } from './variables/undefined.const';

describe(guardUndefined.name, () => {
  // Defined.
  it('is DEFINED', () => expect(guardUndefined).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      guardUndefined(UNDEFINED, (result: boolean, value: undefined) => {
        expect(result).toBe(TRUE);
        expect(value).toBeUndefined();
        return result;
      });
    });
    // ... primitives.
    describe(`primitive`, () => it(`${UNDEFINED}`, () => expect(guardUndefined(UNDEFINED)).toBe(TRUE)));
  });
});
