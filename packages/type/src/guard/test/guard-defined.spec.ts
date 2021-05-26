// Function.
import { guardDefined } from '../lib/guard-defined.func';
// Variables.
import { TRUE } from './variables/boolean.const';
import { STRING } from './variables/string.const';

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
