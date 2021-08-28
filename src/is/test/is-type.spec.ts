import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { isType } from '../lib/is-type.func';
// Constant.
import { BIGINT, BIGINT_EXPECTATION, BIGINT_INSTANCE } from '../../testing/src/big-int.const';
import { Class, CLASS } from '../../testing/src/class.const';
import { FALSE, TRUE, TRUE_INSTANCE, FALSE_INSTANCE, FALSE_EXPECTATION, TRUE_EXPECTATION } from '../../testing/src/boolean.const';
import { FUNCTION } from '../../testing/src/function.const';
import { NULL } from '../../testing/src/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../testing/src/number.const';
import { OBJECT_ONE, OBJECT_TWO, OBJECT_ONE_NEW, OBJECT_TWO_NEW } from '../../testing/src/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../testing/src/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../testing/src/symbol.const';
import { UNDEFINED } from '../../testing/src/undefined.const';
// Interface.
import { ObjectOne } from '../../testing/interface/object-one.interface';
import { ObjectTwo } from '../../testing/interface/object-two.interface';
/**
 * Initialize testing.
 */
const testing = new Testing(tests.is.type.describe, tests.is.type.it);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(isType.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isType).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isType(STRING, 'string', (result, value, payload) => {
            expect(result).toBe(TRUE);
            if (payload) {
              expect(value).toEqual(STRING);
            }
            return result;
          });
          isType(NUMBER, 'number', (result, value, payload) => {
            expect(result).toBe(TRUE);
            if (payload) {
              expect(value).toEqual(NUMBER);
            }
            return result;
          });
        })
        // ... instance.
        .describe(`instance`, () => testing.it(`Class`, () => expect(isType<Class>(CLASS, Class)).toBe(TRUE)))
        // ... function.
        .describe(`function`, () => {
          testing
            .it(`${FUNCTION}`, () => expect(isType(FUNCTION, 'function')).toBe(TRUE))
            .it(`${CLASS}`, () => expect(isType(Class, 'function')).toBe(FALSE));
        })
        // ... objects.
        .describe('object', () => {
          testing
            .it(`CLASS`, () => expect(isType(CLASS, 'object')).toBe(TRUE))
            .it(`OBJECT_ONE`, () => expect(isType<ObjectOne>(OBJECT_ONE, 'object')).toBe(TRUE))
            .it(`OBJECT_ONE_NEW`, () => expect(isType<ObjectTwo>(OBJECT_TWO, 'object')).toBe(TRUE))
            .it(`new Object(OBJECT_ONE_NEW)`, () => expect(isType<ObjectOne>(OBJECT_ONE_NEW, 'object')).toBe(TRUE))
            .it(`new Object(OBJECT_TWO_NEW)`, () => expect(isType<ObjectTwo>(OBJECT_TWO_NEW, 'object')).toBe(TRUE));
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => testing.it(`${BIGINT}`, () => expect(isType(BIGINT, 'bigint')).toBe(TRUE)))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TRUE}`, () => expect(isType(TRUE, 'boolean')).toBe(TRUE))
                .it(`${FALSE}`, () => expect(isType(FALSE, 'boolean')).toBe(TRUE));
            })
            // null
            .it(`${NULL}`, () => expect(isType(NULL, 'null')).toBe(TRUE))
            // number
            .describe(`number`, () => {
              testing
                .it(`${NUMBER}`, () => expect(isType(NUMBER, 'number')).toBe(TRUE))
                .it(`Number(${NUMBER})`, () => expect(isType(NUMBER_INSTANCE, 'number')).toBe(TRUE));
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${STRING}`, () => expect(isType(STRING, 'string')).toBe(TRUE))
                .it(`String(${STRING})`, () => expect(isType(STRING_INSTANCE, 'string')).toBe(TRUE));
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${NUMBER})`, () => expect(isType(SYMBOL_NUMBER, 'symbol')).toBe(TRUE))
                .it(`Symbol(${STRING})`, () => expect(isType(SYMBOL_STRING, 'symbol')).toBe(TRUE));
            })
            // undefined
            .it(`${UNDEFINED}`, () => expect(isType(UNDEFINED, 'undefined')).toBe(TRUE))
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () => testing.it(`${BIGINT_EXPECTATION}`, () => expect(isType(BIGINT_INSTANCE, 'bigint')).toBe(TRUE)))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TRUE_EXPECTATION}`, () => expect(isType(TRUE_INSTANCE, 'boolean')).toBe(FALSE))
                    .it(`${FALSE_EXPECTATION}`, () => expect(isType(FALSE_INSTANCE, 'boolean')).toBe(FALSE));
                })
                // Number
                .describe(`Number`, () =>
                  testing.it(`new Number(${NUMBER})`, () => expect(isType(NUMBER_NEW_INSTANCE, 'number')).toBe(FALSE)))
                // String
                .describe(`String`, () =>
                  testing.it(`new String(${STRING})`, () => expect(isType(STRING_NEW_INSTANCE, 'string')).toBe(FALSE)));
            });
        });
    });
});
