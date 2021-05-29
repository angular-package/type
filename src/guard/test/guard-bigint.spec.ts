// Function.
import { guardBigInt } from '../lib/guard-big-int.func';
// Constant.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../../testing/variables/strict/big-int.const';
import { TRUE } from '../../testing/variables/strict/boolean.const';

describe(guardBigInt.name, () => {
  // Defined.
  it('is DEFINED', () => expect(guardBigInt).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      guardBigInt(BIGINT, (result: boolean, value: bigint) => {
        expect(result).toBe(TRUE);
        expect(value).toEqual(BIGINT);
        return result;
      });
    });

    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => {
        it(`${BIGINT}`, () => expect(guardBigInt(BIGINT)).toBe(TRUE));
        it(`${BIGINT_EXPECTATION}`, () => expect(guardBigInt(BIGINT_INSTANCE)).toBe(TRUE));
      });
    });
  });
});
