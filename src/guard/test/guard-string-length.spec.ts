// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_STRING,
  TESTING_STRING_INSTANCE,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
// Function.
import { guardStringLength } from '../lib/guard-string-length.func';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.stringLength.describe,
  tests.guard.stringLength.it
);
/**
 * Tests.
 */
testing.describe(guardStringLength.name, () => {
  // Defined.
  testing
    .it('is DEFINED', () => expect(guardStringLength).toBeDefined())

    // Checks ...
    .describe(`guards`, () =>
      testing
        .it('with callback and payload', () => {
          guardStringLength(TESTING_STRING, 3, undefined, (result, value, payload) => {
            expect(result).toBeTrue();
            expect(value).toEqual(TESTING_STRING);
            if (payload) {
              expect(payload.action).toEqual('action');
              expect(payload.name).toEqual('name');
              expect(payload.param).toEqual('param');
            }
            return result;
          }, { action: 'action', name: 'name', param: 'param' });
        })

        // ... primitives.
        .describe(`primitive`, () =>
          testing
            .describe(`string`, () =>
              testing
                .it(`${TESTING_STRING} minimum 3`, () =>
                  expect(guardStringLength(TESTING_STRING, 3)).toBeTrue()
                )
                .it(`${TESTING_STRING} maximum 3`, () =>
                  expect(guardStringLength(TESTING_STRING, 0, 3)).toBeFalse()
                )
            )
            .it(`${TESTING_STRING} minimum 18`, () =>
              expect(guardStringLength(TESTING_STRING, 18)).toBeFalse()
            )
            .it(`${TESTING_STRING} maximum 17`, () =>
              expect(guardStringLength(TESTING_STRING, 0, 17)).toBeTrue()
            )
            .it(`${TESTING_STRING} minimum 5 maximum 21`, () =>
              expect(guardStringLength(TESTING_STRING, 5, 21)).toBeTrue()
            )
        )
    )
    .describe(`String`, () =>
      testing
        .it(`new String(${TESTING_STRING}) minimum 3`, () =>
          expect(guardStringLength(TESTING_STRING_INSTANCE, 3)).toBeTrue()
        )
        .it(`new String(${TESTING_STRING}) maximum 3`, () =>
          expect(guardStringLength(TESTING_STRING_INSTANCE, 0, 3)).toBeFalse()
        )
        .it(`new String(${TESTING_STRING}) minimum 18`, () =>
          expect(guardStringLength(TESTING_STRING_INSTANCE, 18)).toBeFalse()
        )
        .it(`new String(${TESTING_STRING}) maximum 17`, () =>
          expect(guardStringLength(TESTING_STRING_INSTANCE, undefined, 17)).toBeTrue()
        )
        .it(`new String(${TESTING_STRING}) minimum 5 maximum 21`, () =>
          expect(guardStringLength(TESTING_STRING_INSTANCE, 5, 21)).toBeTrue()
        )
    );
});
