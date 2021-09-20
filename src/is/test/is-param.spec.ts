// Testing.
import {
  TESTING_BIGINT,
  TESTING_CLASS,
  TESTING_FALSE,
  TESTING_FALSE_INSTANCE,
  TESTING_FUNCTION,
  TESTING_NULL,
  TESTING_NUMBER,
  TESTING_NUMBER_CONSTRUCTOR,
  TESTING_NUMBER_INSTANCE,
  TESTING_OBJECT,
  TESTING_STRING,
  TESTING_STRING_CONSTRUCTOR,
  TESTING_STRING_INSTANCE,
  TESTING_SYMBOL_NUMBER,
  TESTING_SYMBOL_STRING,
  TESTING_TRUE,
  TESTING_TRUE_INSTANCE,
  TESTING_UNDEFINED,

  Testing,
  TestingClass,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
import { isParam } from '../lib/is-param.decorator';

class TestClass {
  @isParam('object', 'string', 'number')
  public testMethod(object?: any, firstName?: any, age?: any): { object: any, firstName: any, age: any } {
    return {object, firstName, age};
  }
}
/**
 * Initialize testing.
 */
const testing = new Testing(tests.is.param.describe, tests.is.param.it);
/**
 * Tests.
 */
testing.describe(isParam.name, () => {
  const resultTRUE = new TestClass().testMethod({firstName: 'NoName'}, TESTING_STRING, TESTING_NUMBER);
  const resultFALSE = new TestClass().testMethod(TESTING_NUMBER, {firstName: 'NoName'}, TESTING_STRING);

  // Defined.
  it('is DEFINED', () => expect(isParam).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    // ... objects.
    describe('object', () => {
      it(`CLASS`, () => {
        expect(resultTRUE.object).toEqual({firstName: 'NoName'});
        expect(resultFALSE.object).toBeUndefined();
      });
    });

    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      // describe(`bigint`, () => {
      //   it(`${TESTING_BIGINT}`, () => expect(isPrimitive(TESTING_BIGINT, 'bigint')).toBeTrue());
      //   it(`${TESTING_BIGINT}`, () => expect(isPrimitive(TESTING_BIGINT, 'bigint')).toBeTrue());
      // });

      // boolean
      // describe(`boolean`, () => {
      //   it(`${TESTING_TRUE}`, () => expect(isPrimitive(TESTING_TRUE, 'boolean')).toBeTrue());
      //   it(`${TESTING_FALSE}`, () => expect(isPrimitive(TESTING_FALSE, 'boolean')).toBeTrue());
      //   it(`${TESTING_FALSE_INSTANCE}`, () => expect(isPrimitive(TESTING_TRUE_INSTANCE, 'boolean')).toBeTrue());
      //   it(`${TESTING_TRUE_INSTANCE}`, () => expect(isPrimitive(TESTING_FALSE_INSTANCE, 'boolean')).toBeTrue());
      // });

      // null
      // it(`${TESTING_NULL}`, () => expect(isPrimitive(TESTING_NULL, 'null')).toBeTrue());

      // number
      describe(`number`, () => {
        it(`${TESTING_NUMBER}`, () => {
          expect(resultTRUE.age).toBe(TESTING_NUMBER);
          expect(resultFALSE.age).toBeUndefined();
        });
        // it(`Number(${TESTING_NUMBER})`, () => expect(isPrimitive(TESTING_NUMBER_INSTANCE, 'number')).toBeTrue());
        // it(`new Number(${TESTING_NUMBER})`, () => expect(isPrimitive(TESTING_NUMBER_INSTANCE, 'number')).toBeTrue());
      });

      // string
      describe(`string`, () => {
        it(`${TESTING_STRING}`, () => {
          expect(resultTRUE.firstName).toBe(TESTING_STRING);
          expect(resultFALSE.firstName).toBeUndefined();
        });
        // it(`String(${TESTING_STRING})`, () => expect(isPrimitive(TESTING_STRING_INSTANCE, 'string')).toBeTrue());
        // it(`new String(${TESTING_STRING})`, () => expect(isPrimitive(TESTING_STRING_INSTANCE, 'string')).toBeTrue());
      });

      // symbol
      describe(`symbol`, () => {
        // it(`Symbol(${TESTING_NUMBER})`, () => expect(isPrimitive(TESTING_SYMBOL_NUMBER, 'symbol')).toBeTrue());
        // it(`Symbol(${TESTING_STRING})`, () => expect(isPrimitive(TESTING_SYMBOL_STRING, 'symbol')).toBeTrue());
      });

      // undefined
      // it(`${TESTING_UNDEFINED}`, () => expect(isPrimitive(TESTING_UNDEFINED, 'undefined')).toBeTrue());
    });
  });
});
