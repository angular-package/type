// Function.
import { guardInstance } from '../lib/guard-instance.func';
// Constant.
import { CLASS, Class, Persons } from '../../testing/src/strict/class.const';
import { FALSE_EXPECTATION, TRUE_EXPECTATION } from '../../testing/src/strict/boolean.const';
import { NUMBER } from '../../testing/src/strict/number.const';
import { NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../testing/src/strict/number.const';
import { STRING } from '../../testing/src/strict/string.const';
import { STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../testing/src/strict/string.const';
import { TRUE, TRUE_INSTANCE, FALSE_INSTANCE, FALSE } from '../../testing/src/strict/boolean.const';
import { personFunctionConstructor } from '../../testing/src/strict/function.const';
// Interface.
import { Person } from '../../testing/interface/person.interface';
/**
 * Tests.
 */
describe(guardInstance.name , () => {
  const personInstance: Person = new (personFunctionConstructor as any)('First name', 'Sur name', 27);
  const personsInstance: Persons = new Persons();
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
    describe(`instance`, () => {
      it(`CLASS`, () => expect(guardInstance(CLASS, Class)).toBe(TRUE));
      it(`class Persons`, () => expect(guardInstance(personsInstance, Persons)).toBe(TRUE));
      it(`function`, () => expect(guardInstance(personInstance, personFunctionConstructor as any)).toBe(TRUE));
    });

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
