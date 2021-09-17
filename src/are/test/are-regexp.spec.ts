import { areRegExp } from '../lib/are-regexp.func';
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
testing.describe(areRegExp.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(areRegExp).toBeDefined())
    .it(`every()`, () => {
      areRegExp(/^[]/, /^[]/, /^[]/, 3).every(
        (result, value, payload) => {
          toBe
            .false(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areRegExp.name);
          return result;
        }
      );
    })
    .it(`forEach()`, () => {
      areRegExp(/^[]/, /^[]/, /^[]/, 3).forEach(
        (result, value, index, array, payload) => {
          toBe
            .boolean(result)
            .number(index)
            .array(array)
            .object(payload);
          expect(payload?.name).toEqual(areRegExp.name);
          expect(payload?.age).toEqual(2);
        },
        { age: 2 }
      );
    })
    .it(`some()`, () => {
      areRegExp(/^[]/, /^[]/, /^[]/, 3).some(
        (result, value, payload) => {
          toBe
            .true(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areRegExp.name);
          return result;
        }
      );
    });
});
