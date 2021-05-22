// Function.
import { guardInstance } from '../lib/guard-instance.func';
// Variables.
import { CLASS, Class } from './variables/class.const';
import { FALSE_EXPECTATION, TRUE_EXPECTATION } from './variables/boolean.const';
import { NUMBER } from './variables/number.const';
import { NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from './variables/number.const';
import { STRING } from './variables/string.const';
import { STRING_INSTANCE, STRING_NEW_INSTANCE } from './variables/string.const';
import { TRUE, TRUE_INSTANCE, FALSE_INSTANCE, FALSE } from './variables/boolean.const';

describe(guardInstance.name , () => {
  // Defined.
  it('is DEFINED', () => expect(guardInstance).toBeDefined());

  // Checks ...
  describe(`guards`, () => {
    it('callback', () => {
      guardInstance(CLASS, Class, (result: boolean, value: Class) => {
        expect(result).toBe(TRUE);
        expect(value).toEqual(CLASS);
        return result;
      });
    });
    // ... instance.
    describe(`instance`, () => it(`CLASS`, () => expect(guardInstance(CLASS, Class)).toBe(TRUE)));

    // ... primitives.
    describe(`primitive`, () => {
      // boolean
      describe(`boolean`, () => {
        it(`${TRUE_EXPECTATION}`, () => expect(guardInstance(TRUE_INSTANCE, Boolean)).toBe(FALSE));
        it(`${FALSE_EXPECTATION}`, () => expect(guardInstance(FALSE_INSTANCE, Boolean)).toBe(FALSE));
      });

      // number
      describe(`number`, () => {
        it(`Number(${NUMBER})`, () => expect(guardInstance(NUMBER_INSTANCE, Number)).toBe(FALSE));
        it(`new Number(${NUMBER})`, () => expect(guardInstance(NUMBER_NEW_INSTANCE, Number)).toBe(FALSE));
      });

      // string
      describe(`string`, () => {
        it(`String(${STRING})`, () => expect(guardInstance(STRING_INSTANCE, String)).toBe(FALSE));
        it(`new String(${STRING})`, () => expect(guardInstance(STRING_NEW_INSTANCE, String)).toBe(FALSE));
      });
    });
  });
});
