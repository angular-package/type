// Function.
import { guardNull } from '../lib/guard-null.func';
// Variables.
import { NULL } from './variables/null.const';
import { TRUE } from './variables/boolean.const';

describe(guardNull.name, () => {
  // Defined.
  it('is DEFINED', () => expect(guardNull).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      guardNull(NULL, (result: boolean, value: null) => {
        expect(result).toBe(TRUE);
        expect(value).toBeNull();
        return result;
      });
    });

    // ... primitives.
    describe(`primitive`, () => it(`${NULL}`, () => expect(guardNull(NULL)).toBe(TRUE)));
  });
});
