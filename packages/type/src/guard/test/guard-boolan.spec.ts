// Function.
import { guardBoolean } from '../lib/guard-boolean.func';
// Variables.
import { FALSE_EXPECTATION, TRUE, TRUE_EXPECTATION, FALSE } from './variables/boolean.const';

describe(guardBoolean.name, () => {
  // Defined.
  it('is DEFINED', () => expect(guardBoolean).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      guardBoolean(TRUE, (result: boolean, value: boolean) => {
        expect(result).toBe(TRUE);
        expect(value).toEqual(TRUE);
        return result;
      });
    });

    // ... primitives.
    describe(`primitive`, () => {
      // boolean
      describe(`boolean`, () => {
        it(`${FALSE_EXPECTATION}`, () => expect(guardBoolean(FALSE)).toBe(TRUE));
        it(`${TRUE_EXPECTATION}`, () => expect(guardBoolean(TRUE)).toBe(TRUE));
      });
    });
  });
});
