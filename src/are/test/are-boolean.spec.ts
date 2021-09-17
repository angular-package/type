import { areBoolean } from '../lib/are-boolean.func';
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
testing.describe(areBoolean.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(areBoolean).toBeDefined())
    .it(`every()`, () => {
      areBoolean(1, true, null, new Boolean(3)).every(
        (result, value, payload) => {
          toBe
            .false(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areBoolean.name);
          return result;
        }
      );
    })
    .it(`forEach()`, () => {
      areBoolean(1, true, null, new Boolean(3)).forEach(
        (result, value, index, array, payload) => {
          toBe
            .boolean(result)
            .number(index)
            .array(array)
            .object(payload);
          expect(payload?.name).toEqual(areBoolean.name);
          expect(payload?.age).toEqual(2);
        },
        { age: 2 }
      );
    })
    .it(`some()`, () => {
      areBoolean(1, true, null, new Boolean(3)).some(
        (result, value, payload) => {
          toBe
            .true(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areBoolean.name);
          return result;
        }
      );
    });
});
