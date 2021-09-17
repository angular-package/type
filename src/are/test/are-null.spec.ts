import { areNull } from '../lib/are-null.func';
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
testing.describe(areNull.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(areNull).toBeDefined())
    .it(`every()`, () => {
      areNull(null, undefined, false, !!null).every(
        (result, value, payload) => {
          toBe
            .false(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areNull.name);
          return result;
        }
      );
    })
    .it(`forEach()`, () => {
      areNull(null, undefined, false, !!null).forEach(
        (result, value, index, array, payload) => {
          toBe
            .boolean(result)
            .number(index)
            .array(array)
            .object(payload);
          expect(payload?.name).toEqual(areNull.name);
          expect(payload?.age).toEqual(2);
        },
        { age: 2 }
      );
    })
    .it(`some()`, () => {
      areNull(null, undefined, false, !!null).some(
        (result, value, payload) => {
          toBe
            .true(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areNull.name);
          return result;
        }
      );
    });
});
