// Function.
import { guardObjectKeyIn } from '../lib/guard-object-key-in.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_CLASS,
  TESTING_NUMBER,
  TESTING_OBJECT,
  TESTING_SYMBOL_NUMBER,
  TESTING_SYMBOL_STRING,
  TESTING_TRUE,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.objectKeyIn.describe,
  tests.guard.objectKeyIn.it
);
/**
 * Tests.
 */
testing.describe(guardObjectKeyIn.name, () => {
  testing
  // Defined.
  .it('is DEFINED', () => expect(guardObjectKeyIn).toBeDefined())

  // Checks ...
  .describe(`guards`, () => {
    testing
    .it('with callback and payload', () => {
      guardObjectKeyIn(TESTING_CLASS, 'firstName', (result, value, payload) => {
        expect(result).toBeTrue();
        expect(value).toEqual(TESTING_CLASS);
        if (payload) {
          expect(payload.action).toEqual('action');
          expect(payload.name).toEqual('name');
          expect(payload.param).toEqual('param');
        }
        return result;
      }, { action: 'action', name: 'name', param: 'param' });
    })

    // ... instance.
    .describe(`instance`, () => {
      testing.describe(`CLASS`, () => {
        testing
        // number.
        .it('has number key', () => {
          expect(guardObjectKeyIn(TESTING_CLASS, 1030405027)).toBe(TESTING_TRUE);
          expect(guardObjectKeyIn(TESTING_CLASS, 5)).toBe(TESTING_TRUE);
        })

        .it('finds getter number', () => expect(guardObjectKeyIn(TESTING_CLASS, TESTING_NUMBER)).toBe(TESTING_TRUE))

        // string.
        .it('has string key', () => expect(guardObjectKeyIn(TESTING_CLASS, 'surname')).toBe(TESTING_TRUE))

        // symbol.
        .it('finds getter symbol key', () => {
          expect(guardObjectKeyIn(TESTING_CLASS, TESTING_SYMBOL_NUMBER)).toBe(TESTING_TRUE);
          expect(guardObjectKeyIn(TESTING_CLASS, TESTING_SYMBOL_STRING)).toBe(TESTING_TRUE);
        });
      });
    })

    // ... objects.
    .describe('object', () => {
      testing.describe(`OBJECT_ONE`, () => {
        testing
          // number.
          .it('has number key', () => {
            expect(guardObjectKeyIn(TESTING_OBJECT, 1030405027)).toBe(TESTING_TRUE);
            expect(guardObjectKeyIn(TESTING_OBJECT, 5)).toBe(TESTING_TRUE);
            expect(guardObjectKeyIn(TESTING_OBJECT, TESTING_NUMBER)).toBe(TESTING_TRUE);
          })

          // string.
          .it('has string key', () => {
            expect(guardObjectKeyIn(TESTING_OBJECT, 'key as string')).toBe(TESTING_TRUE);
            expect(guardObjectKeyIn(TESTING_OBJECT, 'x')).toBe(TESTING_TRUE);
          })

          // symbol.
          .it('has symbol key', () => {
            expect(guardObjectKeyIn(TESTING_OBJECT, TESTING_NUMBER)).toBe(TESTING_TRUE);
            expect(guardObjectKeyIn(TESTING_OBJECT, TESTING_SYMBOL_STRING)).toBe(TESTING_TRUE);
          });
      });
    });
  });
});
