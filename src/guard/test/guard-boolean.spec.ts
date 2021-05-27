// Function.
import { guardBoolean } from '../lib/guard-boolean.func';
// Variables.
import { FALSE_EXPECTATION, TRUE, TRUE_EXPECTATION, FALSE, TRUE_INSTANCE, FALSE_INSTANCE } from '../../testing/variables/strict/boolean.const';

describe(guardBoolean.name, () => {
  // Defined.
  it('is DEFINED', () => expect(guardBoolean).toBeDefined());

  // Checks ...
  describe(`guards`, () => {
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
        it(`FALSE`, () => expect(guardBoolean(FALSE)).toBe(TRUE));
        it(`TRUE`, () => expect(guardBoolean(TRUE)).toBe(TRUE));
      });
    });
    // ... objective.
    describe(`objective`, () => {
      // boolean
      describe(`boolean`, () => {
        it(`${TRUE_EXPECTATION}`, () => expect(guardBoolean(TRUE_INSTANCE)).toBe(TRUE));
        it(`${FALSE_EXPECTATION}`, () => expect(guardBoolean(FALSE_INSTANCE)).toBe(TRUE));
      });
    });

  });
});
