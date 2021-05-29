// Function.
import { guardNumber } from '../lib/guard-number.func';
// Constant.
import { NUMBER } from '../../testing/src/strict/number.const';
import { TRUE } from '../../testing/src/strict/boolean.const';

describe(guardNumber.name, () => {
  // Defined.
  it('is DEFINED', () => expect(guardNumber).toBeDefined());

  // Checks ...
  describe(`guards`, () => {
    it('callback', () => {
      guardNumber(NUMBER, (result: boolean, value: number) => {
        expect(result).toBe(TRUE);
        expect(value).toEqual(NUMBER);
        return result;
      });
    });

    // ... primitives.
    describe(`primitive`, () => {
      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => expect(guardNumber(NUMBER)).toBe(TRUE));
        // it(`Number(${NUMBER})`, () => expect(guardNumber(NUMBER_INSTANCE)).toBe(TRUE));
        // it(`new Number(${NUMBER})`, () => expect(guardNumber(NUMBER_NEW_INSTANCE)).toBe(TRUE));
      });
    });
  });
});
