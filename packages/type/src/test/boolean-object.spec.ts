import { TRUE, TRUE_EXPECTATION, TRUE_INSTANCE, FALSE, FALSE_INSTANCE, FALSE_EXPECTATION } from '../testing/variables/boolean.const';
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

        it(`${TRUE}`, () => {
          BooleanObject.set = TRUE;
          expect(BooleanObject.get).not.toEqual(FALSE_INSTANCE);
          expect(BooleanObject.get.valueOf()).toBeInstanceOf(Boolean);
          expect(BooleanObject.get.valueOf()).toBeTruthy();
          expect(BooleanObject.get.valueOf()).toBe(TRUE);
        });

        it(`${TRUE_EXPECTATION}`, () => {
          BooleanObject.set = TRUE_INSTANCE;
          expect(BooleanObject.get.valueOf()).toBeInstanceOf(Boolean);
          expect(BooleanObject.get.valueOf()).toBeTrue();
          expect(BooleanObject.get.valueOf()).toBeTruthy();
          expect(BooleanObject.get.valueOf()).toBe(TRUE);
        });

        it(`${FALSE}`, () => {
          BooleanObject.set = FALSE;
          expect(BooleanObject.get).not.toEqual(TRUE_INSTANCE);
          expect(BooleanObject.get.valueOf()).toBeInstanceOf(Boolean);
          expect(BooleanObject.get.valueOf()).toBeFalse();
          expect(BooleanObject.get.valueOf()).toBe(FALSE);
        });

        it(`${FALSE_EXPECTATION}`, () => {
          BooleanObject.set = FALSE_INSTANCE;
          expect(BooleanObject.get.valueOf().valueOf()).toBeInstanceOf(Boolean);
          expect(BooleanObject.get.valueOf().valueOf()).toBeTrue();
          expect(BooleanObject.get.valueOf().valueOf()).toBeTruthy();
          expect(BooleanObject.get.valueOf().valueOf()).toBe(TRUE);
        });
      });
    });
  });
});
