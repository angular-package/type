import { StringObject } from '../lib/string-object.class';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../testing/src/string.const';


describe(`StringObject`, () => {
  // Defined.
  it('is DEFINED', () => expect(StringObject).toBeDefined());

  // Checks ...
  describe(`checks`, () => {

    // ... primitives.
    describe(`primitive`, () => {
      // string
      describe(`string`, () => {
        StringObject.set = STRING;
        it(`${STRING}`, () => expect(StringObject.get).toEqual(STRING));

        StringObject.set = STRING_INSTANCE;
        it(`Number(${STRING})`, () => expect(StringObject.get).toEqual(STRING_INSTANCE));

        StringObject.set = STRING_NEW_INSTANCE;
        it(`new Number(${STRING})`, () => expect(StringObject.get).toEqual(STRING_NEW_INSTANCE));
      });
    });
  });
});
