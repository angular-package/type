// Function.
import { guardUndefined } from '../lib/guard-undefined.func';
// Variables.
import { TRUE } from '../../testing/variables/strict/boolean.const';
import { UNDEFINED } from '../../testing/variables/strict/undefined.const';

describe(guardUndefined.name, () => {
  // Defined.
  it('is DEFINED', () => expect(guardUndefined).toBeDefined());

  // Checks ...
  describe(`guards`, () => {
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
