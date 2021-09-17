
// Function to test.
import { areUndefined } from '../lib/are-undefined.func';
// Testing.
import {
  Testing,
  TestingToBeMatchers,
} from '@angular-package/testing';
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(tests.are.true.describe, tests.are.true.it);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(areUndefined.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(areUndefined).toBeDefined())
    .it(`every()`, () => {
      areUndefined(undefined, 1, 2, '3').every(
        (result, value, payload) => {
          toBe
            .false(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areUndefined.name);
          return result;
        }
      );
    })
    .it(`forEach()`, () => {
      areUndefined(undefined, 1, 2, '3').forEach(
        (result, value, index, array, payload) => {
          toBe
            .boolean(result)
            .number(index)
            .array(array)
            .object(payload);
          expect(payload?.name).toEqual(areUndefined.name);
          expect(payload?.age).toEqual(2);
        },
        { age: 2 }
      );
    })
    .it(`some()`, () => {
      areUndefined(undefined, 1, 2, '3').some(
        (result, value, payload) => {
          toBe
            .true(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areUndefined.name);
          return result;
        }
      );
    });
});
