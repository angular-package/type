// Function.
import { guardString } from '../lib/guard-string.func';
// Variables.
import { STRING, STRING_NEW_INSTANCE } from '../../testing/variables/strict/string.const';
import { TRUE } from '../../testing/variables/strict/boolean.const';

describe(guardString.name, () => {
  // Defined.
  it('is DEFINED', () => expect(guardString).toBeDefined());

  // Checks ...
  describe(`guards`, () => {
    it('callback', () => {
      guardString(STRING, (result: boolean, value: string) => {
        expect(result).toBe(TRUE);
        expect(value).toEqual(STRING);
        return result;
      });
    });
    // ... primitives.
    describe(`primitive`, () => {
      describe(`string`, () => it(`${STRING}`, () => expect(guardString(STRING)).toBe(TRUE)));
      describe(`object`, () => {
        describe(`String`, () => it(`new String(${STRING})`, () => expect(guardString(STRING_NEW_INSTANCE)).toBe(TRUE)));
      })
    });
  });
});