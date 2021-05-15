// Function.
import { guardObjectKey } from '../lib/guard-object-key.func';
// Variables.
import { CLASS } from './variables/class.const';
import { NUMBER } from './variables/number.const';
import { OBJECT_ONE } from './variables/object.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from './variables/symbol.const';
import { TRUE } from './variables/boolean.const';

describe(guardObjectKey.name , () => {
  // Defined.
  it('is DEFINED', () => expect(guardObjectKey).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    // it('callback', () => {
    //   guardObjectKey(CLASS, ['firstName', 'surname'], (result: boolean, value: Class) => {
    //     expect(result).toBe(TRUE);
    //     expect(value).toEqual(CLASS);
    //     return result;
    //   });
    // });

    // ... instance.
    describe(`instance`, () => {
      describe(`CLASS`, () => {
        // number.
        it('has number key', () => {
          expect(guardObjectKey(CLASS, 1030405027)).toBe(TRUE);
          expect(guardObjectKey(CLASS, 5)).toBe(TRUE);
        });

        it('finds getter number', () => expect(guardObjectKey(CLASS, NUMBER)).toBe(TRUE));

        // string.
        it('has string key', () => expect(guardObjectKey(CLASS, 'surname')).toBe(TRUE));

        // symbol.
        it('finds getter symbol key', () => {
          expect(guardObjectKey(CLASS, SYMBOL_NUMBER)).toBe(TRUE);
          expect(guardObjectKey(CLASS, SYMBOL_STRING)).toBe(TRUE);
        });
      });
    });

    // ... objects.
    describe('object', () => {
      describe(`OBJECT_ONE`, () => {
        // number.
        it('has number key', () => {
          expect(guardObjectKey(OBJECT_ONE, 1030405027)).toBe(TRUE);
          expect(guardObjectKey(OBJECT_ONE, 5)).toBe(TRUE);
          expect(guardObjectKey(OBJECT_ONE, NUMBER)).toBe(TRUE);
        });

        // string.
        it('has string key', () => {
          expect(guardObjectKey(OBJECT_ONE, 'key as string')).toBe(TRUE);
          expect(guardObjectKey(OBJECT_ONE, 'x')).toBe(TRUE);
        });

        // symbol.
        it('has symbol key', () => {
          expect(guardObjectKey(OBJECT_ONE, SYMBOL_NUMBER)).toBe(TRUE);
          expect(guardObjectKey(OBJECT_ONE, SYMBOL_STRING)).toBe(TRUE);
        });
      });
    });
  });
});
