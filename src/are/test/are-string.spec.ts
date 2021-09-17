
import { areString } from '../lib/are-string.func';
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
testing.describe(areString.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(areString).toBeDefined())
    .it(`every()`, () => {
      areString(1, '2', '3').every(
        (result, value, payload) => {
          toBe
            .false(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areString.name);
          return result;
        }
      );
    })
    .it(`forEach()`, () => {
      areString(1, '2', '3').forEach(
        (result, value, index, array, payload) => {
          toBe
            .boolean(result)
            .number(index)
            .array(array)
            .object(payload);
          expect(payload?.name).toEqual(areString.name);
          expect(payload?.age).toEqual(2);
        },
        { age: 2 }
      );
    })
    .it(`some()`, () => {
      areString(1, '2', '3').some(
        (result, value, payload) => {
          toBe
            .true(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areString.name);
          return result;
        }
      );
    });
});
