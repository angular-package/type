// Class to tests.
import { StringObject } from '../lib/string-object.class';
// Testing.
import {
  // Main.
  Testing,
  // Constants.
  TESTING_STRING,
  TESTING_STRING_CONSTRUCTOR,
  TESTING_STRING_INSTANCE,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.experimental.string.describe,
  tests.experimental.string.it
);
/**
 * Tests.
 */
testing.describe(`StringObject`, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(StringObject).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // string
            .describe(`string`, () => {
              testing
              .it(`${TESTING_STRING}`, () => (
                (StringObject.set = TESTING_STRING),
                expect(StringObject.get).toEqual(TESTING_STRING)
              ))
              .it(`Number(${TESTING_STRING})`, () => (
                (StringObject.set = TESTING_STRING_CONSTRUCTOR),
                expect(StringObject.get).toEqual(TESTING_STRING_CONSTRUCTOR)
              ))
              .it(`new Number(${TESTING_STRING})`, () => (
                (StringObject.set = TESTING_STRING_INSTANCE),
                expect(StringObject.get).toEqual(TESTING_STRING_INSTANCE)
              ));
            });
        });
    });
});
