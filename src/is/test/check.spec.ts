
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { check } from '../lib/check.object';
/**
 * Initialize testing.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(`check object`, () =>
  testing
    .toBeInstanceOfObject(check)
    .it(`defined`, () =>
      toBe
        .defined(check)
        // .objectKey(check, ['are', 'is'])
        // .object(check.are)
        .object(check.is)
    )
);
