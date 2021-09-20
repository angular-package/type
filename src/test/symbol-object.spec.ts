// Class to tests.
import { SymbolObject } from '../lib/symbol-object.class';
// Testing.
import {
  // Main.
  Testing,

  // Constants.
  TESTING_STRING,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../execute-tests';
// Constant.
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.experimental.symbol.describe,
  tests.experimental.symbol.it
);
/**
 * Tests.
 */
testing.describe(`SymbolObject`, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(SymbolObject).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // string
            .describe(`symbol`, () => {
              testing
              .it(
                `Symbol(${TESTING_STRING})`,
                () => (
                  (SymbolObject.set = TESTING_STRING),
                  expect(SymbolObject.get).toBeDefined()
                )
              );
            });
        });
    });
});
