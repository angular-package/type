// Class to tests.
import { BigIntObject } from '../lib/bigint-object.class';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_BIGINT,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.experimental.bigint.describe,
  tests.experimental.bigint.it
);
/**
 * Tests.
 */
testing.describe(`BigIntObject`, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(BigIntObject).toBeDefined())
    // Checks ...
    .describe(`checks`, () => {
      testing
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () =>
              testing
                .it(`${TESTING_BIGINT}`, () => {
                  BigIntObject.set = TESTING_BIGINT;
                  expect(BigIntObject.get).toEqual(TESTING_BIGINT);
                })
                .it(`1n`, () => {
                  BigIntObject.set = 1n;
                  expect(BigIntObject.get).toEqual(1n);
                })
            );
        });
    });
});
