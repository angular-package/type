// // Function.
// import { guardInstance } from '../lib/guard-instance.func';

// /**
//  * Tests.
//  */
// describe(guardInstance.name , () => {
//   const personInstance: Person = new (personFunctionConstructor as any)('First name', 'Sur name', 27);
//   const personsInstance: Persons = new Persons();
//   // Defined.
//   it('is DEFINED', () => expect(guardInstance).toBeDefined());

//   // Checks ...
//   describe(`guards`, () => {
//     it('callback', () => {
//       guardInstance(CLASS, Class, (result, value, payload) => {
//         expect(result).toBeTrue();
//         if (payload) {
//           expect(value).toEqual(CLASS);
//         }
//         return result;
//       });
//     });
//     // ... instance.
//     describe(`instance`, () => {
//       it(`CLASS`, () => expect(guardInstance(CLASS, Class)).toBeTrue());
//       it(`class Persons`, () => expect(guardInstance(personsInstance, Persons)).toBeTrue());
//       it(`function`, () => expect(guardInstance(personInstance, personFunctionConstructor as any)).toBeTrue());
//     });

//     // ... primitives.
//     describe(`primitive`, () => {
//       // boolean
//       describe(`boolean`, () => {
//         it(`${TRUE_EXPECTATION}`, () => expect(guardInstance(TRUE_INSTANCE, Boolean)).toBeTrue());
//         it(`${FALSE_EXPECTATION}`, () => expect(guardInstance(FALSE_INSTANCE, Boolean)).toBeTrue());
//       });

//       // number
//       describe(`number`, () => {
//         it(`Number(${NUMBER})`, () => expect(guardInstance(NUMBER_INSTANCE, Number)).toBeFalse());
//         it(`new Number(${NUMBER})`, () => expect(guardInstance(NUMBER_NEW_INSTANCE, Number)).toBeTrue());
//       });

//       // string
//       describe(`string`, () => {
//         it(`String(${STRING})`, () => expect(guardInstance(STRING_INSTANCE, String)).toBeFalse());
//         it(`new String(${STRING})`, () => expect(guardInstance(STRING_NEW_INSTANCE, String)).toBeTrue());
//       });
//     });
//   });
// });
