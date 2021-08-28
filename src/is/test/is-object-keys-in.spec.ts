import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { isObjectKeysIn } from '../lib/is-object-keys-in.func';
// Constant.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../../testing/src/big-int.const';
import { Class, CLASS } from '../../testing/src/class.const';
import { FALSE, TRUE, TRUE_INSTANCE, FALSE_INSTANCE, FALSE_EXPECTATION, TRUE_EXPECTATION } from '../../testing/src/boolean.const';
import { FUNCTION } from '../../testing/src/function.const';
import { NULL } from '../../testing/src/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../testing/src/number.const';
import { OBJECT_ONE } from '../../testing/src/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../testing/src/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../testing/src/strict/symbol.const';
import { UNDEFINED } from '../../testing/src/undefined.const';
/**
 * Initialize testing.
 */
const testing = new Testing(tests.is.objectKeyIn.describe, tests.is.objectKeyIn.it);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(isObjectKeysIn.name , () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isObjectKeysIn).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isObjectKeysIn(CLASS, ['firstName', 'surname'], (result, value, payload) => {
            expect(result).toBe(TRUE);
            if (payload) {
              expect(value).toEqual(CLASS);
            }
            return result;
          });
        })
        // ... instance.
        .describe(`instance`, () => testing
          .describe(`CLASS`, () => testing
            // number.
            .it('has number key', () => {
              expect(isObjectKeysIn(CLASS, [1030405027])).toBe(TRUE);
              expect(isObjectKeysIn(CLASS, [5])).toBe(TRUE);
              expect(isObjectKeysIn(CLASS, [NUMBER])).toBe(TRUE); // It does find getter number
              expect(isObjectKeysIn(CLASS, [5, 1030405027])).toBe(TRUE);
            })
            // string.
            .it('has string key', () => {
              expect(isObjectKeysIn(CLASS, ['surname'])).toBe(TRUE);
              expect(isObjectKeysIn(CLASS, ['firstName', 'surname'])).toBe(TRUE);
            })
            // symbol.
            .it('has getter symbol key', () => {
              // It does find getter symbol key
              expect(isObjectKeysIn(CLASS, [SYMBOL_NUMBER])).toBe(TRUE);
              expect(isObjectKeysIn(CLASS, [SYMBOL_STRING])).toBe(TRUE);
              expect(isObjectKeysIn(CLASS, [SYMBOL_NUMBER, SYMBOL_STRING])).toBe(TRUE);
            })
            // mixed.
            .it('has string and number key', () => expect(isObjectKeysIn(CLASS, [1030405027, 'firstName', 'surname'])).toBe(TRUE))
          )
        )
        // ... function.
        .describe(`function`, () => testing
          .it(`FUNCTION`, () => expect(isObjectKeysIn(FUNCTION, ['function'])).toBe(FALSE))
          .it(`CLASS`, () => expect(isObjectKeysIn(Class, ['function'])).toBe(FALSE))
        )
        // ... objects.
        .describe('object', () => testing
          .describe(`OBJECT_ONE`, () => testing
            // number.
            .it('has number key', () => {
              expect(isObjectKeysIn(OBJECT_ONE, [1030405027])).toBe(TRUE);
              expect(isObjectKeysIn(OBJECT_ONE, [5])).toBe(TRUE);
              expect(isObjectKeysIn(OBJECT_ONE, [NUMBER])).toBe(TRUE); // It doesn't find getter
              expect(isObjectKeysIn(OBJECT_ONE, [5, 1030405027])).toBe(TRUE);
            })
            // string.
            .it('has string key', () => {
              expect(isObjectKeysIn(OBJECT_ONE, ['key as string'])).toBe(TRUE);
              expect(isObjectKeysIn(OBJECT_ONE, ['x'])).toBe(TRUE);
              expect(isObjectKeysIn(OBJECT_ONE, [STRING])).toBe(TRUE);
              expect(isObjectKeysIn(OBJECT_ONE, ['key as string', 'x', STRING])).toBe(TRUE);
            })
            // symbol.
            .it('has symbol key', () => {
              expect(isObjectKeysIn(OBJECT_ONE, [SYMBOL_NUMBER])).toBe(TRUE);
              expect(isObjectKeysIn(OBJECT_ONE, [SYMBOL_STRING])).toBe(TRUE);
              expect(isObjectKeysIn(OBJECT_ONE, [SYMBOL_NUMBER, SYMBOL_STRING])).toBe(TRUE);
            })
            // mixed.
            .it('has mixed key', () => {
              expect(isObjectKeysIn(OBJECT_ONE, [
                'key as string',
                'x',
                1030405027,
                5,
                NUMBER,
                STRING,
                SYMBOL_NUMBER,
                SYMBOL_STRING,
              ])).toBe(TRUE);
            })
          )
        )
        // ... primitives.
        .describe(`primitive`, () => testing
          // bigint
          .describe(`bigint`, () => testing.it(`${BIGINT}`, () => expect(isObjectKeysIn(BIGINT, ['bigint'])).toBe(FALSE)))
          // boolean
          .describe(`boolean`, () => testing
            .it(`${TRUE}`, () => expect(isObjectKeysIn(TRUE, ['boolean'])).toBe(FALSE))
            .it(`${FALSE}`, () => expect(isObjectKeysIn(FALSE, ['boolean'])).toBe(FALSE))
          )
          // null
          .it(`${NULL}`, () => expect(isObjectKeysIn(NULL, ['null'])).toBe(FALSE))
          // number
          .describe(`number`, () => testing
            .it(`${NUMBER}`, () => expect(isObjectKeysIn(NUMBER, ['number'])).toBe(FALSE))
            .it(`Number(${NUMBER})`, () => expect(isObjectKeysIn(NUMBER_INSTANCE, ['number'])).toBe(FALSE))
          )
          // string
          .describe(`string`, () => testing
            .it(`${STRING}`, () => expect(isObjectKeysIn(STRING, ['string'])).toBe(FALSE))
            .it(`String(${STRING})`, () => expect(isObjectKeysIn(STRING_INSTANCE, ['string'])).toBe(FALSE))
          )
          // symbol
          .describe(`symbol`, () => testing
            .it(`Symbol(${NUMBER})`, () => expect(isObjectKeysIn(SYMBOL_NUMBER, ['symbol'])).toBe(FALSE))
            .it(`Symbol(${STRING})`, () => expect(isObjectKeysIn(SYMBOL_STRING, ['symbol'])).toBe(FALSE))
          )
          // undefined
          .it(`${UNDEFINED}`, () => expect(isObjectKeysIn(UNDEFINED, ['undefined'])).toBe(FALSE))
          // ... object.
          .describe(`object`, () => testing
            // BigInt
            .describe(`BigInt`, () =>
              testing.it(`${BIGINT_EXPECTATION}`, () => expect(isObjectKeysIn(BIGINT_INSTANCE, ['bigint'])).toBe(FALSE)))
            // Boolean
            .describe(`Boolean`, () => testing
              .it(`${TRUE_EXPECTATION}`, () => expect(isObjectKeysIn(TRUE_INSTANCE, ['boolean'])).toBe(FALSE))
              .it(`${FALSE_EXPECTATION}`, () => expect(isObjectKeysIn(FALSE_INSTANCE, ['boolean'])).toBe(FALSE))
            )
            // Number
            .describe(`Number`, () =>
              testing.it(`new Number(${NUMBER})`, () => expect(isObjectKeysIn(NUMBER_NEW_INSTANCE, ['number'])).toBe(FALSE)))
            // String
            .describe(`String`, () =>
              testing.it(`new String(${STRING})`, () => expect(isObjectKeysIn(STRING_NEW_INSTANCE, ['string'])).toBe(FALSE)))
          )
        );
    });
});
