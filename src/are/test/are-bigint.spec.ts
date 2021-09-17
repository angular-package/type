
import { areBigInt } from '../lib/are-bigint.func';
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
testing.describe(areBigInt.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(areBigInt).toBeDefined())
    .it(`every()`, () => {
      areBigInt(1n, '2n', 3, 4n).every(
        (result, value, payload) => {
          toBe
            .false(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areBigInt.name);
          return result;
        }
      );
    })
    .it(`forEach()`, () => {
      areBigInt(1n, '2n', 3, 4n).forEach(
        (result, value, index, array, payload) => {
          toBe
            .boolean(result)
            .number(index)
            .array(array)
            .object(payload);
          expect(payload?.name).toEqual(areBigInt.name);
          expect(payload?.age).toEqual(2);
        },
        { age: 2 }
      );
    })
    .it(`some()`, () => {
      areBigInt(1n, '2n', 3, 4n).some(
        (result, value, payload) => {
          toBe
            .true(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areBigInt.name);
          return result;
        }
      );
    });
});
