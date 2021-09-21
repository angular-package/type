// Class to tests.
import { NumberObject } from '../lib/number-object.class';
// Testing.
import {
  // Main.
  Testing,

  // Constants.
  TESTING_NUMBER,
  TESTING_NUMBER_CONSTRUCTOR,
  TESTING_NUMBER_INSTANCE,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../execute-tests';
// Constant.
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.experimental.number.describe,
  tests.experimental.number.it
);
/**
 * Tests.
 */
testing.describe(`NumberObject`, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(NumberObject).toBeDefined())
    // Checks ...
    .describe(`checks`, () => {
      testing
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // number
            .describe(`number`, () => {
              testing
                .it(
                  `${TESTING_NUMBER}`,
                  () => ((NumberObject.set = TESTING_NUMBER), expect(NumberObject.get).toEqual(TESTING_NUMBER))
                )
                .it(
                  `Number(${TESTING_NUMBER})`,
                  () => ((NumberObject.set = TESTING_NUMBER_CONSTRUCTOR), expect(NumberObject.get).toEqual(TESTING_NUMBER_CONSTRUCTOR))
                )
                .it(
                  `new Number(${TESTING_NUMBER})`,
                  () => ((NumberObject.set = TESTING_NUMBER_INSTANCE),expect(NumberObject.get).toEqual(TESTING_NUMBER_INSTANCE))
                );
            });
        });
    });
});
