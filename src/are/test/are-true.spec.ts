// Function to test.
import { areTrue } from '../lib/are-true.func';
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
testing.describe(areTrue.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(areTrue).toBeDefined())
    .it(`every()`, () => {
      areTrue(true, null, false, new Boolean(false)).every(
        (result, value, payload) => {
          toBe
            .false(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areTrue.name);
          return result;
        }
      );
    })
    .it(`forEach()`, () => {
      areTrue(true, null, false, new Boolean(false)).forEach(
        (result, value, index, array, payload) => {
          toBe
            .boolean(result)
            .number(index)
            .array(array)
            .object(payload);
          expect(payload?.name).toEqual(areTrue.name);
          expect(payload?.age).toEqual(2);
        },
        { age: 2 }
      );
    })
    .it(`some()`, () => {
      areTrue(true, null, false, new Boolean(false)).some(
        (result, value, payload) => {
          toBe
            .true(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areTrue.name);
          return result;
        }
      );
    });
});
