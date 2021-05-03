import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../is/test/variables/big-int.const';
import { BigIntObject } from '../lib/bigint-object.class';


describe(`BigIntObject`, () => {
  // Defined.
  it('is DEFINED', () => expect(BigIntObject).toBeDefined());

  // Checks ...
  describe(`checks`, () => {

    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => {

        BigIntObject.set = BIGINT;
        it(`${BIGINT}`, () => expect(BigIntObject.get).toEqual(BIGINT));

        BigIntObject.set = BIGINT_INSTANCE;
        it(`${BIGINT_EXPECTATION}`, () => expect(BigIntObject.get).toEqual(BIGINT_INSTANCE));
      });
    });
  });
});
