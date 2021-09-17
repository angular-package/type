import { areDefined } from '../lib/are-defined.func';
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
testing.describe(areDefined.name, () => {
  let age: any;

  testing
    // Defined.
    .it('is DEFINED', () => expect(areDefined).toBeDefined())
    .it(`every()`, () => {
      areDefined('1', 2, null, undefined, age).every(
        (result, value, payload) => {
          toBe
            .false(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areDefined.name);
          return result;
        }
      );
    })
    .it(`forEach()`, () => {
      areDefined('1', 2, null, undefined, age).forEach(
        (result, value, index, array, payload) => {
          toBe
            .boolean(result)
            .number(index)
            .array(array)
            .object(payload);
          expect(payload?.name).toEqual(areDefined.name);
          expect(payload?.age).toEqual(2);
        },
        { age: 2 }
      );
    })
    .it(`some()`, () => {
      areDefined('1', 2, null, undefined, age).some(
        (result, value, payload) => {
          toBe
            .true(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areDefined.name);
          return result;
        }
      );
    });
});
