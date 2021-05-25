import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../testing/variables/big-int.const';
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
        it(`${BIGINT}`, () => {
          BigIntObject.set = BIGINT;
          expect(BigIntObject.get).toEqual(BIGINT);
        });
        it(`${BIGINT_EXPECTATION}`, () => {
          BigIntObject.set = BIGINT_INSTANCE;
          expect(BigIntObject.get).toEqual(BIGINT_INSTANCE);
        });
      });
    });
  });
});
