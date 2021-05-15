// Function.
import { guardString } from '../lib/guard-string.func';
// Variables.
import { STRING } from './variables/string.const';
import { TRUE } from './variables/boolean.const';

describe(guardString.name, () => {
  // Defined.
  it('is DEFINED', () => expect(guardString).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      guardString(STRING, (result: boolean, value: string) => {
        expect(result).toBe(TRUE);
        expect(value).toEqual(STRING);
        return result;
      });
    });
    // ... primitives.
    describe(`primitive`, () => describe(`string`, () => it(`${STRING}`, () => expect(guardString(STRING)).toBe(TRUE))));
  });
});
