// Testing.
import {
  Testing,
  TestingToBeMatchers,
  TESTING_CLASS,
  TESTING_NUMBER,
  TESTING_OBJECT,
  TESTING_SYMBOL_NUMBER,
  TESTING_SYMBOL_STRING,
  TESTING_TRUE,
  TESTING_FALSE,
} from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { guardObjectKeys } from '../lib/guard-object-keys.func';
/**
 * Initialize testing.
 */
const testing = new Testing(tests.guard.objectKeyIn.describe, tests.guard.objectKeyIn.it);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(guardObjectKeys.name, () => {
  testing
  // Defined.
  .it('is DEFINED', () => expect(guardObjectKeys).toBeDefined())

  // Checks ...
  .describe(`guards`, () => {
    testing
    // ... instance.
    .describe(`instance`, () => {
      testing.describe(`TESTING_CLASS`, () => {
        testing
        // number.
        .it('has number key', () => {
          expect(guardObjectKeys(TESTING_CLASS, [1030405027])).toBe(TESTING_TRUE);
          expect(guardObjectKeys(TESTING_CLASS, [5])).toBe(TESTING_TRUE);
        })

        .it('finds getter number', () => expect(guardObjectKeys(TESTING_CLASS, [TESTING_NUMBER])).toBe(TESTING_FALSE))

        // string.
        .it('has string key', () => expect(guardObjectKeys(TESTING_CLASS, ['surname'])).toBe(TESTING_TRUE))

        // symbol.
        .it('finds getter symbol key', () => {
          expect(guardObjectKeys(TESTING_CLASS, [TESTING_SYMBOL_NUMBER])).toBe(TESTING_FALSE);
          expect(guardObjectKeys(TESTING_CLASS, [TESTING_SYMBOL_STRING])).toBe(TESTING_FALSE);
        });
      });
    })

    // ... objects.
    .describe('object', () => {
      testing.describe(`descriptor`, () => {
        testing.it(`DATA_DESCRIPTOR`, () => {
          // expect(guardObjectKeys(DATA_DESCRIPTOR, ['writable', 'value'])).toBe(TESTING_TRUE);
          // expect(guardObjectKeys(DATA_DESCRIPTOR, ['configurable', 'enumerable'], 'writable', 'value')).toBe(TESTING_TRUE);
          // expect(guardObjectKeys(DATA_DESCRIPTOR, ['configurable', 'enumerable'], 'value')).toBe(TESTING_TRUE);
          // expect(guardObjectKeys(DATA_DESCRIPTOR, ['configurable', 'enumerable'], 'writable')).toBe(TESTING_TRUE);
        })
        .it(`ACCESSOR_DESCRIPTOR`, () => {
          // expect(guardObjectKeys(ACCESSOR_DESCRIPTOR, ['writable', 'value'], ['get', 'set'])).toBe(TESTING_TRUE);
          // expect(guardObjectKeys(ACCESSOR_DESCRIPTOR, ['configurable', 'enumerable'], 'writable', 'value')).toBe(TESTING_TRUE);
          // expect(guardObjectKeys(ACCESSOR_DESCRIPTOR, ['configurable', 'enumerable'], 'get')).toBe(TESTING_TRUE);
          // expect(guardObjectKeys(ACCESSOR_DESCRIPTOR, ['configurable', 'enumerable'], 'set')).toBe(TESTING_TRUE);
        });
      })
      .describe(`TESTING_OBJECT`, () => {
        testing
        // number.
        .it('has number key', () => {
          expect(guardObjectKeys(TESTING_OBJECT, [1030405027])).toBe(TESTING_TRUE);
          expect(guardObjectKeys(TESTING_OBJECT, [5])).toBe(TESTING_TRUE);
          expect(guardObjectKeys(TESTING_OBJECT, [TESTING_NUMBER])).toBe(TESTING_TRUE);
        })

        // string.
        .it('has string key', () => {
          expect(guardObjectKeys(TESTING_OBJECT, ['key as string'])).toBe(TESTING_TRUE);
          expect(guardObjectKeys(TESTING_OBJECT, ['x'])).toBe(TESTING_TRUE);
        })

        // symbol.
        .it('has symbol key', () => {
          expect(guardObjectKeys(TESTING_OBJECT, [TESTING_SYMBOL_NUMBER, TESTING_SYMBOL_STRING])).toBe(TESTING_TRUE);
          expect(guardObjectKeys(TESTING_OBJECT, [TESTING_SYMBOL_STRING])).toBe(TESTING_TRUE);
        });
      });
    })

    .describe('object with some and every key', () => {
      testing.describe(`TESTING_OBJECT`, () => {
        testing
        // number.
        .it('has number key or any key', () => {
          expect(guardObjectKeys(TESTING_OBJECT, [1030405027, 'key as string'])).toBe(TESTING_TRUE);
          expect(guardObjectKeys(TESTING_OBJECT, [5])).toBe(TESTING_TRUE);
          expect(guardObjectKeys(TESTING_OBJECT, [TESTING_NUMBER])).toBe(TESTING_TRUE);
        })

        // string.
        .it('has string key', () => {
          expect(guardObjectKeys(TESTING_OBJECT, ['key as string'])).toBe(TESTING_TRUE);
          expect(guardObjectKeys(TESTING_OBJECT, ['x'])).toBe(TESTING_TRUE);
        })

        // symbol.
        .it('has symbol key', () => {
          expect(guardObjectKeys(TESTING_OBJECT, [TESTING_SYMBOL_NUMBER])).toBe(TESTING_TRUE);
          expect(guardObjectKeys(TESTING_OBJECT, [TESTING_SYMBOL_STRING])).toBe(TESTING_TRUE);
        });
      });
    });
  });
});
