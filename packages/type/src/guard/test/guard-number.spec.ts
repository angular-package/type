// Function.
import { guardNumber } from '../lib/guard-number.func';
// Variables.
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from './variables/number.const';
import { TRUE } from './variables/boolean.const';

describe(guardNumber.name, () => {
  // Defined.
  it('is DEFINED', () => expect(guardNumber).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
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
