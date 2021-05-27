import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../testing/variables/string.const';
import { SymbolObject } from '../lib/symbol-object.class';
import { SYMBOL_NUMBER } from '../testing/variables/symbol.const';

describe(`SymbolObject`, () => {
  // Defined.
  it('is DEFINED', () => expect(SymbolObject).toBeDefined());

  // Checks ...
  describe(`checks`, () => {

    // ... primitives.
    describe(`primitive`, () => {
      // string
      describe(`symbol`, () => {
        SymbolObject.set = STRING;
        it(`Symbol(${STRING})`, () => expect(SymbolObject.get).toBeDefined());
      });
    });
  });
});
