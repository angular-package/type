import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { isObjectKeys } from '../lib/is-object-keys.func';
// Constant.
import { ACCESSOR_DESCRIPTOR, DATA_DESCRIPTOR, OBJECT_ONE } from '../../testing/src/object.const';
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../../testing/src/big-int.const';
import { Class, CLASS } from '../../testing/src/class.const';
import { FALSE, TRUE, TRUE_INSTANCE, FALSE_INSTANCE, FALSE_EXPECTATION, TRUE_EXPECTATION } from '../../testing/src/boolean.const';
import { FUNCTION } from '../../testing/src/function.const';
import { NULL } from '../../testing/src/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../testing/src/number.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../testing/src/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../testing/src/strict/symbol.const';
import { UNDEFINED } from '../../testing/src/undefined.const';
/**
 * Initialize testing.
 */
const testing = new Testing(tests.is.objectKeys.describe, tests.is.objectKeys.it);
const toBe = new TestingToBeMatchers();

testing.describe(isObjectKeys.name , () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isObjectKeys).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        // ... instance.
        .describe(`instance`, () => testing
          .describe(`CLASS`, () => testing
            // number.
            .it('has number key', () => {
              expect(isObjectKeys(CLASS, [1030405027])).toBe(TRUE);
              expect(isObjectKeys(CLASS, [5])).toBe(TRUE);
              expect(isObjectKeys(CLASS, [5, 1030405027])).toBe(TRUE);
            })
            // It doesn't find getter number
            .it('has not find getter number', () => expect(isObjectKeys(CLASS, [NUMBER])).toBe(FALSE))
            // string.
            .it('has string key', () => {
              expect(isObjectKeys(CLASS, ['surname'])).toBe(TRUE);
              expect(isObjectKeys(CLASS, ['firstName', 'surname'])).toBe(TRUE);
            })
            // symbol.
            .it('has not find getter symbol key', () => {
              // It does not find getter symbol key in class
              expect(isObjectKeys(CLASS, [SYMBOL_NUMBER])).toBe(FALSE);
              expect(isObjectKeys(CLASS, [SYMBOL_STRING])).toBe(FALSE);
              expect(isObjectKeys(CLASS, [SYMBOL_NUMBER, SYMBOL_STRING])).toBe(FALSE);
            })
            // mixed.
            .it('has string and number key', () => expect(isObjectKeys(CLASS, [1030405027, 'firstName', 'surname'])).toBe(TRUE))
          )
        )
        // ... function.
        .describe(`function`, () => testing
          .it(`FUNCTION`, () => expect(isObjectKeys(FUNCTION, ['function'])).toBe(FALSE))
          .it(`CLASS`, () => expect(isObjectKeys(Class, ['function'])).toBe(FALSE))
        )
        // ... objects.
        .describe('object', () => {
          describe(`descriptor`, () => {
            it(`DATA_DESCRIPTOR`, () => {
              expect(isObjectKeys(DATA_DESCRIPTOR, ['writable', 'value'])).toBe(TRUE);
              expect(isObjectKeys(DATA_DESCRIPTOR, ['writable', 'value'])).toBe(TRUE);
              expect(isObjectKeys(DATA_DESCRIPTOR, ['get', 'set'])).toBe(FALSE);
              expect(isObjectKeys(DATA_DESCRIPTOR, ['get', 'set'])).toBe(FALSE);
            });
          });
          describe(`OBJECT_ONE`, () => testing
            // number.
            .it('has number key', () => {
              expect(isObjectKeys(OBJECT_ONE, [1030405027])).toBe(TRUE);
              expect(isObjectKeys(OBJECT_ONE, [5])).toBe(TRUE);
              expect(isObjectKeys(OBJECT_ONE, [NUMBER])).toBe(TRUE); // It doesn't find getter
              expect(isObjectKeys(OBJECT_ONE, [5, 1030405027])).toBe(TRUE);
            })
            // string.
            .it('has string key', () => {
              expect(isObjectKeys(OBJECT_ONE, ['key as string'])).toBe(TRUE);
              expect(isObjectKeys(OBJECT_ONE, ['x'])).toBe(TRUE);
              expect(isObjectKeys(OBJECT_ONE, [STRING])).toBe(TRUE);
              expect(isObjectKeys(OBJECT_ONE, ['key as string', 'x', STRING])).toBe(TRUE);
            })
            // symbol.
            .it('has symbol key', () => {
              expect(isObjectKeys(OBJECT_ONE, [SYMBOL_NUMBER])).toBe(TRUE);
              expect(isObjectKeys(OBJECT_ONE, [SYMBOL_STRING])).toBe(TRUE);
              expect(isObjectKeys(OBJECT_ONE, [SYMBOL_NUMBER, SYMBOL_STRING])).toBe(TRUE);
            })
            // mixed.
            .it('has mixed key', () => {
              expect(isObjectKeys(OBJECT_ONE, [
                'key as string',
                'x',
                1030405027,
                5,
                NUMBER,
                STRING,
                SYMBOL_NUMBER,
                SYMBOL_STRING,
              ])).toBe(TRUE);
              // TRUE, TRUE
              expect(isObjectKeys(OBJECT_ONE, [SYMBOL_NUMBER, SYMBOL_STRING])).toBe(TRUE);
              // TRUE AND FALSE
              expect(isObjectKeys(OBJECT_ONE, [STRING, 'no property'])).toBe(FALSE);
              // FALSE AND FALSE
              expect(isObjectKeys(OBJECT_ONE, ['no property one', 'no property two'])).toBe(FALSE);
            })
          );
        })
        // ... primitives.
        .describe(`primitive`, () => testing
          // bigint
          .describe(`bigint`, () => testing.it(`${BIGINT}`, () => expect(isObjectKeys(BIGINT, ['bigint'])).toBe(FALSE)))
          // boolean
          .describe(`boolean`, () => testing
            .it(`${TRUE}`, () => expect(isObjectKeys(TRUE, ['boolean'])).toBe(FALSE))
            .it(`${FALSE}`, () => expect(isObjectKeys(FALSE, ['boolean'])).toBe(FALSE))
          )
          // null
          .it(`${NULL}`, () => expect(isObjectKeys(NULL, ['null'])).toBe(FALSE))
          // number
          .describe(`number`, () => testing
            .it(`${NUMBER}`, () => expect(isObjectKeys(NUMBER, ['number'])).toBe(FALSE))
            .it(`Number(${NUMBER})`, () => expect(isObjectKeys(NUMBER_INSTANCE, ['number'])).toBe(FALSE))
          )
          // string
          .describe(`string`, () => testing
            .it(`${STRING}`, () => expect(isObjectKeys(STRING, ['string'])).toBe(FALSE))
            .it(`String(${STRING})`, () => expect(isObjectKeys(STRING_INSTANCE, ['string'])).toBe(FALSE))
          )
          // symbol
          .describe(`symbol`, () => testing
            .it(`Symbol(${NUMBER})`, () => expect(isObjectKeys(SYMBOL_NUMBER, ['symbol'])).toBe(FALSE))
            .it(`Symbol(${STRING})`, () => expect(isObjectKeys(SYMBOL_STRING, ['symbol'])).toBe(FALSE))
          )
          // undefined
          .it(`${UNDEFINED}`, () => expect(isObjectKeys(UNDEFINED, ['undefined'])).toBe(FALSE))
          // ... object.
          .describe(`object`, () => testing
            // BigInt
            .describe(`BigInt`, () =>
              testing.it(`${BIGINT_EXPECTATION}`, () => expect(isObjectKeys(BIGINT_INSTANCE, ['bigint'])).toBe(FALSE)))
            // Boolean
            .describe(`Boolean`, () => testing
              .it(`${TRUE_EXPECTATION}`, () => expect(isObjectKeys(TRUE_INSTANCE, ['boolean'])).toBe(FALSE))
              .it(`${FALSE_EXPECTATION}`, () => expect(isObjectKeys(FALSE_INSTANCE, ['boolean'])).toBe(FALSE))
            )
            // Number
            .describe(`Number`, () =>
              testing.it(`new Number(${NUMBER})`, () => expect(isObjectKeys(NUMBER_NEW_INSTANCE, ['number'])).toBe(FALSE)))
            // String
            .describe(`String`, () =>
              testing.it(`new String(${STRING})`, () => expect(isObjectKeys(STRING_NEW_INSTANCE, ['string'])).toBe(FALSE)))
          )
        );
    });
});
