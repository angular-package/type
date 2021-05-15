// Function.
import { guardSymbol } from '../lib/guard-symbol.func';
// Variables.
import { NUMBER } from './variables/number.const';
import { STRING } from './variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from './variables/symbol.const';
import { TRUE } from './variables/boolean.const';

describe(guardSymbol.name, () => {
  // Defined.
  it('is DEFINED', () => expect(guardSymbol).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      guardSymbol(SYMBOL_STRING, (result: boolean, value: symbol) => {
        expect(result).toBe(TRUE);
        expect(value).toEqual(SYMBOL_STRING);
        return result;
      });
    });

    // ... primitives.
    describe(`primitive`, () => {
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${NUMBER})`, () => expect(guardSymbol(SYMBOL_NUMBER)).toBe(TRUE));
        it(`Symbol(${STRING})`, () => expect(guardSymbol(SYMBOL_STRING)).toBe(TRUE));
      });
    });
  });
});
