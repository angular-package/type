// Function to test.
import { areSymbol } from '../lib/are-symbol.func';
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
testing.describe(areSymbol.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(areSymbol).toBeDefined())
    .it(`every()`, () => {
      areSymbol(Symbol(1), 2, Symbol(3), 4).every(
        (result, value, payload) => {
          toBe
            .false(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areSymbol.name);
          return result;
        }
      );
    })
    .it(`forEach()`, () => {
      areSymbol(Symbol(1), 2, Symbol(3), 4).forEach(
        (result, value, index, array, payload) => {
          toBe
            .boolean(result)
            .number(index)
            .array(array)
            .object(payload);
          expect(payload?.name).toEqual(areSymbol.name);
          expect(payload?.age).toEqual(2);
        },
        { age: 2 }
      );
    })
    .it(`some()`, () => {
      areSymbol(Symbol(1), 2, Symbol(3), 4).some(
        (result, value, payload) => {
          toBe
            .true(result)
            .array(value)
            .object(payload);
          expect(payload?.name).toEqual(areSymbol.name);
          return result;
        }
      );
    });
});
