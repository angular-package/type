import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../is/test/variables/number.const';
import { NumberObject } from '../lib/number-object.class';


describe(`NumberObject`, () => {
  // Defined.
  it('is DEFINED', () => expect(NumberObject).toBeDefined());

  // Checks ...
  describe(`checks`, () => {

    // ... primitives.
    describe(`primitive`, () => {
      // number
      describe(`number`, () => {
        NumberObject.set = NUMBER;
        it(`${NUMBER}`, () => expect(NumberObject.get).toEqual(NUMBER));

        NumberObject.set = NUMBER_INSTANCE;
        it(`Number(${NUMBER})`, () => expect(NumberObject.get).toEqual(NUMBER_INSTANCE));

        NumberObject.set = NUMBER_NEW_INSTANCE;
        it(`new Number(${NUMBER})`, () => expect(NumberObject.get).toEqual(NUMBER_NEW_INSTANCE));
      });
    });
  });
});
