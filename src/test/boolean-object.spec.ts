// Class to tests.
import { BooleanObject } from '../lib/boolean-object.class';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_FALSE,
  TESTING_FALSE_INSTANCE,
  TESTING_TRUE,
  TESTING_TRUE_INSTANCE,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.experimental.boolean.describe,
  tests.experimental.boolean.it
);
/**
 * Tests.
 */
testing.describe(`BooleanObject`, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(BooleanObject).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`boolean`, () => {
              testing
                .it(`${TESTING_TRUE}`, () => {
                  BooleanObject.set = TESTING_TRUE;
                  expect(BooleanObject.get).not.toEqual(TESTING_FALSE_INSTANCE);
                  expect(BooleanObject.get.valueOf()).toBeInstanceOf(Boolean);
                  expect(BooleanObject.get.valueOf()).toBeTrue();
                })

                .it(`${TESTING_FALSE_INSTANCE}`, () => {
                  BooleanObject.set = TESTING_FALSE_INSTANCE;
                  expect(BooleanObject.get.valueOf()).toBeInstanceOf(Boolean);
                  expect(BooleanObject.get.valueOf()).toBeTrue();
                })

                .it(`${TESTING_FALSE}`, () => {
                  BooleanObject.set = TESTING_FALSE;
                  expect(BooleanObject.get).not.toEqual(TESTING_TRUE_INSTANCE);
                  expect(BooleanObject.get.valueOf()).toBeInstanceOf(Boolean);
                  expect(BooleanObject.get.valueOf()).toBeFalse();
                })

                .it(`${TESTING_TRUE_INSTANCE}`, () => {
                  BooleanObject.set = TESTING_TRUE_INSTANCE;
                  expect(BooleanObject.get).not.toEqual(TESTING_FALSE_INSTANCE);
                  expect(BooleanObject.get.valueOf().valueOf()).toBeInstanceOf(Boolean);
                  expect(BooleanObject.get.valueOf().valueOf()).toBeTrue();
                });
            });
        });
    });
});
