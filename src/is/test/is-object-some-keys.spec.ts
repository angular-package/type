import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { isObjectSomeKeys } from '../lib/is-object-some-keys.func';
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

testing.describe(isObjectSomeKeys.name , () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isObjectSomeKeys).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        // ... instance.
        .describe(`instance`, () => testing
          .describe(`CLASS`, () => testing
            // number.
            .it('has number key', () => {
              expect(isObjectSomeKeys(CLASS, [1030405027])).toBe(TRUE);
              expect(isObjectSomeKeys(CLASS, [5])).toBe(TRUE);
              expect(isObjectSomeKeys(CLASS, [5, 1030405027])).toBe(TRUE);
            })
            // It doesn't find getter number
            .it('has not find getter number', () => expect(isObjectSomeKeys(CLASS, [NUMBER])).toBe(FALSE))
            // string.
            .it('has string key', () => {
              expect(isObjectSomeKeys(CLASS, ['surname'])).toBe(TRUE);
              expect(isObjectSomeKeys(CLASS, ['firstName', 'surname'])).toBe(TRUE);
            })
            // symbol.
            .it('has not find getter symbol key', () => {
              // It does not find getter symbol key in class
              expect(isObjectSomeKeys(CLASS, [SYMBOL_NUMBER])).toBe(FALSE);
              expect(isObjectSomeKeys(CLASS, [SYMBOL_STRING])).toBe(FALSE);
              expect(isObjectSomeKeys(CLASS, [SYMBOL_NUMBER, SYMBOL_STRING])).toBe(FALSE);
            })
            // mixed.
            .it('has string and number key', () => expect(isObjectSomeKeys(CLASS, [1030405027, 'firstName', 'surname'])).toBe(TRUE))
          )
        )
        // ... function.
        .describe(`function`, () => testing
          .it(`FUNCTION`, () => expect(isObjectSomeKeys(FUNCTION, ['function'])).toBe(FALSE))
          .it(`CLASS`, () => expect(isObjectSomeKeys(Class, ['function'])).toBe(FALSE))
        )
        // ... objects.
        .describe('object', () => {
          describe(`descriptor`, () => {
            it(`DATA_DESCRIPTOR`, () => {
              expect(isObjectSomeKeys(DATA_DESCRIPTOR, [['writable', 'value'], ['get', 'set']])).toBe(TRUE);
              expect(isObjectSomeKeys(DATA_DESCRIPTOR, ['writable', 'value'])).toBe(TRUE);
              expect(isObjectSomeKeys(DATA_DESCRIPTOR, ['writable', 'value'])).toBe(TRUE);
              expect(isObjectSomeKeys(DATA_DESCRIPTOR, ['get', 'set'])).toBe(FALSE);
              expect(isObjectSomeKeys(DATA_DESCRIPTOR, ['get', 'set'])).toBe(FALSE);
              expect(isObjectSomeKeys(DATA_DESCRIPTOR, [['configurable', 'enumerable'], 'writable', 'value'])).toBe(TRUE);
              expect(isObjectSomeKeys(DATA_DESCRIPTOR, [['configurable', 'enumerable'], 'value'])).toBe(TRUE);
              expect(isObjectSomeKeys(DATA_DESCRIPTOR, [['configurable', 'enumerable'], 'writable'])).toBe(TRUE);
            });
            it(`ACCESSOR_DESCRIPTOR`, () => {
              expect(isObjectSomeKeys(ACCESSOR_DESCRIPTOR, [['writable', 'value'], ['get', 'set']])).toBe(TRUE);
              expect(isObjectSomeKeys(ACCESSOR_DESCRIPTOR, [['configurable', 'enumerable'], 'writable', 'value'])).toBe(TRUE);
              expect(isObjectSomeKeys(ACCESSOR_DESCRIPTOR, [['configurable', 'enumerable'], 'get'])).toBe(TRUE);
              expect(isObjectSomeKeys(ACCESSOR_DESCRIPTOR, [['configurable', 'enumerable'], 'set'])).toBe(TRUE);
            });
          });
          describe(`OBJECT_ONE`, () => testing
            // number.
            .it('has number key', () => {
              expect(isObjectSomeKeys(OBJECT_ONE, [1030405027])).toBe(TRUE);
              expect(isObjectSomeKeys(OBJECT_ONE, [5])).toBe(TRUE);
              expect(isObjectSomeKeys(OBJECT_ONE, [NUMBER])).toBe(TRUE); // It doesn't find getter
              expect(isObjectSomeKeys(OBJECT_ONE, [5, 1030405027])).toBe(TRUE);
            })
            // string.
            .it('has string key', () => {
              expect(isObjectSomeKeys(OBJECT_ONE, ['key as string'])).toBe(TRUE);
              expect(isObjectSomeKeys(OBJECT_ONE, ['x'])).toBe(TRUE);
              expect(isObjectSomeKeys(OBJECT_ONE, [STRING])).toBe(TRUE);
              expect(isObjectSomeKeys(OBJECT_ONE, ['key as string', 'x', STRING])).toBe(TRUE);
            })
            // symbol.
            .it('has symbol key', () => {
              expect(isObjectSomeKeys(OBJECT_ONE, [SYMBOL_NUMBER])).toBe(TRUE);
              expect(isObjectSomeKeys(OBJECT_ONE, [SYMBOL_STRING])).toBe(TRUE);
              expect(isObjectSomeKeys(OBJECT_ONE, [SYMBOL_NUMBER, SYMBOL_STRING])).toBe(TRUE);
            })
            // mixed.
            .it('has mixed key', () => {
              expect(isObjectSomeKeys(OBJECT_ONE, [
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
              expect(isObjectSomeKeys(OBJECT_ONE, [SYMBOL_NUMBER, SYMBOL_STRING])).toBe(TRUE);
              // [TRUE, TRUE] OR [TRUE, TRUE]
              expect(isObjectSomeKeys(OBJECT_ONE, [[SYMBOL_NUMBER, STRING], [SYMBOL_STRING, NUMBER]])).toBe(TRUE);
              // TRUE OR FALSE
              expect(isObjectSomeKeys(OBJECT_ONE, [STRING, 'no property'])).toBe(TRUE);
              // FALSE OR TRUE
              expect(isObjectSomeKeys(OBJECT_ONE, ['no property', NUMBER])).toBe(TRUE);
              // [FALSE] OR [FALSE]
              expect(isObjectSomeKeys(OBJECT_ONE, [['no property'], ['no property']])).toBe(FALSE);
              // FALSE OR FALSE
              expect(isObjectSomeKeys(OBJECT_ONE, ['no property one', 'no property two'])).toBe(FALSE);
              // [FALSE] OR FALSE
              expect(isObjectSomeKeys(OBJECT_ONE, [['no property one'], 'no property two'])).toBe(FALSE);
              // FALSE OR [FALSE]
              expect(isObjectSomeKeys(OBJECT_ONE, ['no property one', ['no property two']])).toBe(FALSE);
              // FALSE OR [FALSE, TRUE]
              expect(isObjectSomeKeys(OBJECT_ONE, ['no property one', ['no property two', STRING]])).toBe(FALSE);
              // [FALSE, TRUE] OR FALSE
              expect(isObjectSomeKeys(OBJECT_ONE,[ ['no property one', STRING], 'no property two'])).toBe(FALSE);
              // TRUE OR [FALSE, TRUE]
              expect(isObjectSomeKeys(OBJECT_ONE, [NUMBER, ['no property two', STRING]])).toBe(TRUE);
              // [FALSE, TRUE] OR TRUE
              expect(isObjectSomeKeys(OBJECT_ONE, [['no property one', STRING], NUMBER])).toBe(TRUE);
            })
          );
        })
        // ... primitives.
        .describe(`primitive`, () => testing
          // bigint
          .describe(`bigint`, () => testing.it(`${BIGINT}`, () => expect(isObjectSomeKeys(BIGINT, ['bigint'])).toBe(FALSE)))
          // boolean
          .describe(`boolean`, () => testing
            .it(`${TRUE}`, () => expect(isObjectSomeKeys(TRUE, ['boolean'])).toBe(FALSE))
            .it(`${FALSE}`, () => expect(isObjectSomeKeys(FALSE, ['boolean'])).toBe(FALSE))
          )
          // null
          .it(`${NULL}`, () => expect(isObjectSomeKeys(NULL, ['null'])).toBe(FALSE))
          // number
          .describe(`number`, () => testing
            .it(`${NUMBER}`, () => expect(isObjectSomeKeys(NUMBER, ['number'])).toBe(FALSE))
            .it(`Number(${NUMBER})`, () => expect(isObjectSomeKeys(NUMBER_INSTANCE, ['number'])).toBe(FALSE))
          )
          // string
          .describe(`string`, () => testing
            .it(`${STRING}`, () => expect(isObjectSomeKeys(STRING, ['string'])).toBe(FALSE))
            .it(`String(${STRING})`, () => expect(isObjectSomeKeys(STRING_INSTANCE, ['string'])).toBe(FALSE))
          )
          // symbol
          .describe(`symbol`, () => testing
            .it(`Symbol(${NUMBER})`, () => expect(isObjectSomeKeys(SYMBOL_NUMBER, ['symbol'])).toBe(FALSE))
            .it(`Symbol(${STRING})`, () => expect(isObjectSomeKeys(SYMBOL_STRING, ['symbol'])).toBe(FALSE))
          )
          // undefined
          .it(`${UNDEFINED}`, () => expect(isObjectSomeKeys(UNDEFINED, ['undefined'])).toBe(FALSE))
          // ... object.
          .describe(`object`, () => testing
            // BigInt
            .describe(`BigInt`, () =>
              testing.it(`${BIGINT_EXPECTATION}`, () => expect(isObjectSomeKeys(BIGINT_INSTANCE, ['bigint'])).toBe(FALSE)))
            // Boolean
            .describe(`Boolean`, () => testing
              .it(`${TRUE_EXPECTATION}`, () => expect(isObjectSomeKeys(TRUE_INSTANCE, ['boolean'])).toBe(FALSE))
              .it(`${FALSE_EXPECTATION}`, () => expect(isObjectSomeKeys(FALSE_INSTANCE, ['boolean'])).toBe(FALSE))
            )
            // Number
            .describe(`Number`, () =>
              testing.it(`new Number(${NUMBER})`, () => expect(isObjectSomeKeys(NUMBER_NEW_INSTANCE, ['number'])).toBe(FALSE)))
            // String
            .describe(`String`, () =>
              testing.it(`new String(${STRING})`, () => expect(isObjectSomeKeys(STRING_NEW_INSTANCE, ['string'])).toBe(FALSE)))
          )
        );
    });
});
