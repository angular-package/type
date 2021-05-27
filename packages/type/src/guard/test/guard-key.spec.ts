// Function.
import { guardKey } from '../lib/guard-key.func';
// Variables.
import { NUMBER } from '../../testing/variables/strict/number.const';
import { STRING} from '../../testing/variables/strict/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../testing/variables/strict/symbol.const';
import { TRUE } from '../../testing/variables/strict/boolean.const';
// Type.
import { Key } from '../../type/key.type';

describe(guardKey.name, () => {
  // Defined.
  it('is DEFINED', () => expect(guardKey).toBeDefined());

  // Checks ...
  describe(`guards`, () => {
    it('callback', () => {
      guardKey(STRING, (result: boolean, value: Key) => {
        expect(result).toBe(TRUE);
        expect(value).toEqual(STRING);
        return result;
      });
    });

    // ... primitives.
    describe(`primitive`, () => {
      // number
      describe(`number`, () => it(`${NUMBER}`, () => expect(guardKey(NUMBER)).toBe(TRUE)));
      // string
      describe(`string`, () => it(`${STRING}`, () => expect(guardKey(STRING)).toBe(TRUE)));
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(guardKey(SYMBOL_NUMBER)).toBe(TRUE));
        it(`Symbol(${STRING})`, () => expect(guardKey(SYMBOL_STRING)).toBe(TRUE));
      });
    });
  });
});
