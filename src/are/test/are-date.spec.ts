import { areDate } from '../lib/are-date.func';
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
testing.describe(areDate.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(areDate).toBeDefined())
    .it(`every()`, () => {
      areDate(new Date(), new Date('invalid date')).every(
        (result, value, payload) => {
          toBe
            .false(result)
            // .array(value)
            // .object(payload);
          // expect(payload?.name).toEqual(areDate.name);
          return result;
        }
      );
    })
    .it(`forEach()`, () => {
      areDate(new Date(), new Date('invalid date')).forEach(
        (result, value, index, array, payload) => {
          toBe
            .boolean(result)
            .number(index)
            .array(array)
            .object(payload);
          expect(payload?.name).toEqual(areDate.name);
          expect(payload?.age).toEqual(2);
        },
        { age: 2 }
      );
    })
    .it(`some()`, () => {
      areDate(new Date(), new Date('invalid date')).some(
        (result, value, payload) => {
          toBe
            .true(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areDate.name);
          return result;
        }
      );
    });
});
