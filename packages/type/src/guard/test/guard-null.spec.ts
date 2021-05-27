// Function.
import { guardNull } from '../lib/guard-null.func';
// Variables.
import { NULL } from '../../testing/variables/strict/null.const';
import { TRUE } from '../../testing/variables/strict/boolean.const';

describe(guardNull.name, () => {
  // Defined.
  it('is DEFINED', () => expect(guardNull).toBeDefined());

  // Checks ...
  describe(`guards`, () => {
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
