import { NUMBER } from './variables/number.const';
import { STRING } from './variables/string.const';
import { isParam } from '../lib/is-param.decorator';

class TestClass {
  @isParam('object', 'string', 'number')
  public testMethod(object?: any, firstName?: any, age?: any): { object: any, firstName: any, age: any } {
    return {object, firstName, age};
  }
}

describe(`isParam`, () => {
  const resultTRUE = new TestClass().testMethod({firstName: 'NoName'}, STRING, NUMBER);
  const resultFALSE = new TestClass().testMethod(NUMBER, {firstName: 'NoName'}, STRING);

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
      //   it(`${BIGINT}`, () => expect(isPrimitive(BIGINT, 'bigint')).toBe(TRUE));
      //   it(`${BIGINT_EXPECTATION}`, () => expect(isPrimitive(BIGINT_INSTANCE, 'bigint')).toBe(TRUE));
      // });

      // boolean
      // describe(`boolean`, () => {
      //   it(`${TRUE}`, () => expect(isPrimitive(TRUE, 'boolean')).toBe(TRUE));
      //   it(`${FALSE}`, () => expect(isPrimitive(FALSE, 'boolean')).toBe(TRUE));
      //   it(`${FALSE_EXPECTATION}`, () => expect(isPrimitive(TRUE_INSTANCE, 'boolean')).toBe(TRUE));
      //   it(`${TRUE_EXPECTATION}`, () => expect(isPrimitive(FALSE_INSTANCE, 'boolean')).toBe(TRUE));
      // });

      // null
      // it(`${NULL}`, () => expect(isPrimitive(NULL, 'null')).toBe(TRUE));

      // number
      describe(`number`, () => {
        it(`${NUMBER}`, () => {
          expect(resultTRUE.age).toBe(NUMBER);
          expect(resultFALSE.age).toBeUndefined();
        });
        // it(`Number(${NUMBER})`, () => expect(isPrimitive(NUMBER_INSTANCE, 'number')).toBe(TRUE));
        // it(`new Number(${NUMBER})`, () => expect(isPrimitive(NUMBER_NEW_INSTANCE, 'number')).toBe(TRUE));
      });

      // string
      describe(`string`, () => {
        it(`${STRING}`, () => {
          expect(resultTRUE.firstName).toBe(STRING);
          expect(resultFALSE.firstName).toBeUndefined();
        });
        // it(`String(${STRING})`, () => expect(isPrimitive(STRING_INSTANCE, 'string')).toBe(TRUE));
        // it(`new String(${STRING})`, () => expect(isPrimitive(STRING_NEW_INSTANCE, 'string')).toBe(TRUE));
      });

      // symbol
      describe(`symbol`, () => {
        // it(`Symbol(${NUMBER})`, () => expect(isPrimitive(SYMBOL_NUMBER, 'symbol')).toBe(TRUE));
        // it(`Symbol(${STRING})`, () => expect(isPrimitive(SYMBOL_STRING, 'symbol')).toBe(TRUE));
      });

      // undefined
      // it(`${UNDEFINED}`, () => expect(isPrimitive(UNDEFINED, 'undefined')).toBe(TRUE));
    });
  });
});
