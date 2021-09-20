// Class to tests.
import { BigIntObject } from '../lib/bigint-object.class';
// Testing.
import { Testing } from '@angular-package/testing';
// Execute tests.
import { tests } from '../execute-tests';
// Constant.
import {
  BIGINT,
  BIGINT_EXPECTATION,
  BIGINT_INSTANCE,
} from '../testing.ignore/src/big-int.const';
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
                .it(`${BIGINT}`, () => {
                  BigIntObject.set = BIGINT;
                  expect(BigIntObject.get).toEqual(BIGINT);
                })
                .it(`${BIGINT_EXPECTATION}`, () => {
                  BigIntObject.set = BIGINT_INSTANCE;
                  expect(BigIntObject.get).toEqual(BIGINT_INSTANCE);
                })
            );
        });
    });
});
