// Function.
import { guardDefined } from '../lib/guard-defined.func';
// Constant.
import { STRING } from '../../testing/variables/strict/string.const';
import { TRUE } from '../../testing/variables/strict/boolean.const';

describe(guardDefined.name, () => {
  // Defined.
  it('is DEFINED', () => expect(guardDefined).toBeDefined());

  // Checks ...
  describe(`guards`, () => {
    it('callback', () => {
      guardDefined(STRING, (result: boolean, value: any) => {
        expect(result).toBe(TRUE);
        expect(value).toEqual(STRING);
        return result;
      });
    });
  });
});
