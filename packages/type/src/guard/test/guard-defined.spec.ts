// Function.
import { guardDefined } from '../lib/guard-defined.func';
// Variables.
import { FALSE } from './variables/boolean.const';
import { UNDEFINED } from './variables/undefined.const';

describe(guardDefined.name, () => {
  // Defined.
  it('is DEFINED', () => expect(guardDefined).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      guardDefined(UNDEFINED, (result: boolean, value: undefined) => {
        expect(result).toBe(FALSE);
        expect(value).toBeUndefined();
        return result;
      });
    });
    // ... primitives.
    describe(`primitive`, () => it(`${UNDEFINED}`, () => expect(guardDefined(UNDEFINED)).toEqual(FALSE)));
  });
});
