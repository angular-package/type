// Function.
import { guardObjectKeys } from '../lib/guard-object-keys.func';
// Variables.
import { DATA_DESCRIPTOR, OBJECT_ONE, ACCESSOR_DESCRIPTOR } from '../../testing/variables/object.const';
// ... strict
import { CLASS } from '../../testing/variables/strict/class.const';
import { NUMBER } from '../../testing/variables/strict/number.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../testing/variables/strict/symbol.const';
import { TRUE, FALSE } from '../../testing/variables/strict/boolean.const';

describe(guardObjectKeys.name , () => {
  // Defined.
  it('is DEFINED', () => expect(guardObjectKeys).toBeDefined());

  // Checks ...
  describe(`guards`, () => {
    // ... instance.
    describe(`instance`, () => {
      describe(`CLASS`, () => {
        // number.
        it('has number key', () => {
          expect(guardObjectKeys(CLASS, 1030405027)).toBe(TRUE);
          expect(guardObjectKeys(CLASS, 5)).toBe(TRUE);
        });

        it('finds getter number', () => expect(guardObjectKeys(CLASS, NUMBER)).toBe(FALSE));

        // string.
        it('has string key', () => expect(guardObjectKeys(CLASS, 'surname')).toBe(TRUE));

        // symbol.
        it('finds getter symbol key', () => {
          expect(guardObjectKeys(CLASS, SYMBOL_NUMBER)).toBe(FALSE);
          expect(guardObjectKeys(CLASS, SYMBOL_STRING)).toBe(FALSE);
        });
      });
    });

    // ... objects.
    describe('object', () => {
      describe(`descriptor`, () => {
        it(`DATA_DESCRIPTOR`, () => {
          // expect(guardObjectKeys(DATA_DESCRIPTOR, ['writable', 'value'], ['get', 'set'])).toBe(TRUE);
          expect(guardObjectKeys(DATA_DESCRIPTOR, ['writable', 'value'])).toBe(TRUE);
          expect(guardObjectKeys(DATA_DESCRIPTOR, 'writable', 'value')).toBe(TRUE);
          // expect(guardObjectKeys(DATA_DESCRIPTOR, ['get', 'set'])).toBe(FALSE);
          // expect(guardObjectKeys(DATA_DESCRIPTOR, 'get', 'set')).toBe(FALSE);
          expect(guardObjectKeys(DATA_DESCRIPTOR, ['configurable', 'enumerable'], 'writable', 'value')).toBe(TRUE);
          expect(guardObjectKeys(DATA_DESCRIPTOR, ['configurable', 'enumerable'], 'value')).toBe(TRUE);
          expect(guardObjectKeys(DATA_DESCRIPTOR, ['configurable', 'enumerable'], 'writable')).toBe(TRUE);
        });
        it(`ACCESSOR_DESCRIPTOR`, () => {
          // expect(guardObjectKeys(ACCESSOR_DESCRIPTOR, ['writable', 'value'], ['get', 'set'])).toBe(TRUE);
          // expect(guardObjectKeys(ACCESSOR_DESCRIPTOR, ['configurable', 'enumerable'], 'writable', 'value')).toBe(TRUE);
          expect(guardObjectKeys(ACCESSOR_DESCRIPTOR, ['configurable', 'enumerable'], 'get')).toBe(TRUE);
          expect(guardObjectKeys(ACCESSOR_DESCRIPTOR, ['configurable', 'enumerable'], 'set')).toBe(TRUE);
        });
      });
      describe(`OBJECT_ONE`, () => {
        // number.
        it('has number key', () => {
          expect(guardObjectKeys(OBJECT_ONE, 1030405027)).toBe(TRUE);
          expect(guardObjectKeys(OBJECT_ONE, 5)).toBe(TRUE);
          expect(guardObjectKeys(OBJECT_ONE, NUMBER)).toBe(TRUE);
        });

        // string.
        it('has string key', () => {
          expect(guardObjectKeys(OBJECT_ONE, 'key as string')).toBe(TRUE);
          expect(guardObjectKeys(OBJECT_ONE, 'x')).toBe(TRUE);
        });

        // symbol.
        it('has symbol key', () => {
          expect(guardObjectKeys(OBJECT_ONE, SYMBOL_NUMBER, SYMBOL_STRING)).toBe(TRUE);
          expect(guardObjectKeys(OBJECT_ONE, SYMBOL_STRING)).toBe(TRUE);
        });
      });
    });

    describe('object with some and every key', () => {
      describe(`OBJECT_ONE`, () => {
        // number.
        it('has number key or any key', () => {
          expect(guardObjectKeys(OBJECT_ONE, 1030405027, 'key as string')).toBe(TRUE);
          expect(guardObjectKeys(OBJECT_ONE, 5)).toBe(TRUE);
          expect(guardObjectKeys(OBJECT_ONE, NUMBER)).toBe(TRUE);
        });

        // string.
        it('has string key', () => {
          expect(guardObjectKeys(OBJECT_ONE, 'key as string')).toBe(TRUE);
          expect(guardObjectKeys(OBJECT_ONE, 'x')).toBe(TRUE);
        });

        // symbol.
        it('has symbol key', () => {
          expect(guardObjectKeys(OBJECT_ONE, SYMBOL_NUMBER)).toBe(TRUE);
          expect(guardObjectKeys(OBJECT_ONE, SYMBOL_STRING)).toBe(TRUE);
        });
      });
    });
  });
});
