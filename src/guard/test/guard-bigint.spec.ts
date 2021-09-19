// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_TRUE,
  TESTING_BIGINT
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
// Function.
import { guardBigInt } from '../lib/guard-big-int.func';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.bigint.describe,
  tests.guard.bigint.it
);
/**
 * Tests.
 */
testing.describe(guardBigInt.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(guardBigInt).toBeDefined())
    // Checks ...
    .describe(`guards`, () => {
      testing
      .it('with callback and payload', () => {
        guardBigInt(TESTING_BIGINT, (result, value, payload) => {
          expect(result).toBe(TESTING_TRUE);
          expect(value).toEqual(TESTING_BIGINT);
          if (payload) {
            expect(payload.action).toEqual('action');
            expect(payload.name).toEqual('name');
            expect(payload.param).toEqual('param');
          }
          return result;
        }, { action: 'action', name: 'name', param: 'param' });
      })
      // ... primitives.
      .describe(`primitive`, () => {
        testing
          // bigint
          .describe(`bigint`, () => it(`${TESTING_BIGINT}`, () => expect(guardBigInt(TESTING_BIGINT)).toBe(TESTING_TRUE)));
      });
    });
});
