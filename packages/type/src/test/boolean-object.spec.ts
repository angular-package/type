import { TRUE, TRUE_EXPECTATION, TRUE_INSTANCE } from '../is/test/variables/boolean.const';
import { BooleanObject } from '../lib/boolean-object.class';


describe(`BooleanObject`, () => {
  // Defined.
  it('is DEFINED', () => expect(BooleanObject).toBeDefined());

  // Checks ...
  describe(`checks`, () => {

    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`boolean`, () => {

        BooleanObject.set = TRUE;
        it(`${TRUE}`, () => expect(BooleanObject.get).toEqual(TRUE));

        BooleanObject.set = TRUE_INSTANCE;
        it(`${TRUE_EXPECTATION}`, () => expect(BooleanObject.get).toEqual(TRUE_INSTANCE));
      });
    });
  });
});
