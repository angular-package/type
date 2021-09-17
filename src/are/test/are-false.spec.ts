import { areFalse } from '../lib/are-false.func';
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
testing.describe(areFalse.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(areFalse).toBeDefined())
    .it(`every()`, () => {
      areFalse(true, null, false, new Boolean(false)).every(
        (result, value, payload) => {
          toBe
            .false(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areFalse.name);
          return result;
        }
      );
    })
    .it(`forEach()`, () => {
      areFalse(true, null, false, new Boolean(false)).forEach(
        (result, value, index, array, payload) => {
          toBe
            .boolean(result)
            .number(index)
            .array(array)
            .object(payload);
          expect(payload?.name).toEqual(areFalse.name);
          expect(payload?.age).toEqual(2);
        },
        { age: 2 }
      );
    })
    .it(`some()`, () => {
      areFalse(true, null, false, new Boolean(false)).some(
        (result, value, payload) => {
          toBe
            .true(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areFalse.name);
          return result;
        }
      );
    });
});
