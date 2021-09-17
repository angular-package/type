import { areNumber } from '../lib/are-number.func';
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
testing.describe(areNumber.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(areNumber).toBeDefined())
    .it(`every()`, () => {
      areNumber(1, new Number(2), Number(3), '4').every(
        (result, value, payload) => {
          toBe
            .false(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areNumber.name);
          return result;
        }
      );
    })
    .it(`forEach()`, () => {
      areNumber(1, new Number(2), Number(3), '4').forEach(
        (result, value, index, array, payload) => {
          toBe
            .boolean(result)
            .number(index)
            .array(array)
            .object(payload);
          expect(payload?.name).toEqual(areNumber.name);
          expect(payload?.age).toEqual(2);
        },
        { age: 2 }
      );
    })
    .it(`some()`, () => {
      areNumber(1, new Number(2), Number(3), '4').some(
        (result, value, payload) => {
          toBe
            .true(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areNumber.name);
          return result;
        }
      );
    });
});
