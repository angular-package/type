// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_ARRAY_BIGINT,
  TESTING_ARRAY_BOOLEAN,
  TESTING_ARRAY_CLASS,
  TESTING_ARRAY_FUNCTION,
  TESTING_ARRAY_NULL,
  TESTING_ARRAY_NUMBER,
  TESTING_ARRAY_OBJECT_ONE,
  TESTING_ARRAY_STRING,
  TESTING_ARRAY_SYMBOL_NUMBER,
  TESTING_ARRAY_SYMBOL_STRING,
  TESTING_ARRAY_UNDEFINED,
  TESTING_BIGINT,
  TESTING_FALSE,
  TESTING_FALSE_INSTANCE,
  TESTING_NUMBER,
  TESTING_NUMBER_CONSTRUCTOR,
  TESTING_NUMBER_INSTANCE,
  TESTING_SYMBOL_NUMBER,
  TESTING_SYMBOL_STRING,
  TESTING_TRUE,
  TESTING_TRUE_INSTANCE,
  TESTING_FUNCTION,
  TESTING_OBJECT,
  TESTING_STRING,
  TESTING_STRING_INSTANCE,
  TESTING_UNDEFINED,

  // Class.
  TestingClass,

  // Interface.
  TestingObject,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
// Function.
import { isArray } from '../lib/is-array.func';
/**
 * Initialize testing.
 */
const testing = new Testing(tests.is.array.describe, tests.is.array.it);
/**
 * Tests.
 */
testing.describe(isArray.name, () => {
  let TESTING_NOT_DEFINED: unknown;
  // TESTING_TRUE
  testing
    .it('is DEFINED', () => expect(isArray).toBeDefined())
    .it(`callback and custom payload`, () => {
      isArray<bigint, { database: string }>(TESTING_ARRAY_BIGINT, (result, value, payload) => (
        expect(result).toBeTrue(),
        expect(value).toEqual(TESTING_ARRAY_BIGINT),
        expect(payload?.database).toEqual('Person'),
        result
      ), { database: 'Person' });
    })
    .it('Array<bigint>', () => expect(isArray<bigint>(TESTING_ARRAY_BIGINT)).toBe(TESTING_TRUE))
    .it('Array<boolean>', () => expect(isArray<boolean>(TESTING_ARRAY_BOOLEAN)).toBe(TESTING_TRUE))
    .it('Array<TestingClass>', () => expect(isArray<TestingClass>(TESTING_ARRAY_CLASS)).toBe(TESTING_TRUE))
    .it('Array<Func>', () => expect(isArray<Function>(TESTING_ARRAY_FUNCTION)).toBe(TESTING_TRUE))
    .it('Array<null>', () => expect(isArray<null>(TESTING_ARRAY_NULL)).toBe(TESTING_TRUE))
    .it('Array<number>', () => expect(isArray<number>(TESTING_ARRAY_NUMBER)).toBe(TESTING_TRUE))
    .it('Array<ObjectOne> Array<ObjectTwo>', () => (expect(isArray<TestingObject>(TESTING_ARRAY_OBJECT_ONE)).toBe(TESTING_TRUE)))
    .it('Array<string>', () => expect(isArray<string>(TESTING_ARRAY_STRING)).toBe(TESTING_TRUE))
    .it('Array<symbol>', () => (
      expect(isArray<symbol>(TESTING_ARRAY_SYMBOL_STRING)).toBe(TESTING_TRUE),
      expect(isArray<symbol>(TESTING_ARRAY_SYMBOL_NUMBER)).toBe(TESTING_TRUE)
    ))
    .it('Array<undefined>', () => expect(isArray<undefined>(TESTING_ARRAY_UNDEFINED)).toBe(TESTING_TRUE))

    // TESTING_FALSE
    .it(`'bigint'`, () => expect(isArray(TESTING_BIGINT)).toBe(TESTING_FALSE))
    .it(`'boolean' | Boolean`, () => {
      expect(isArray(TESTING_FALSE)).toBe(TESTING_FALSE);
      expect(isArray(TESTING_TRUE)).toBe(TESTING_FALSE);
      expect(isArray(TESTING_FALSE_INSTANCE)).toBe(TESTING_FALSE);
      expect(isArray(TESTING_TRUE_INSTANCE)).toBe(TESTING_FALSE);
    })
    .it(`'function' | Function`, () => expect(isArray(TESTING_FUNCTION)).toBe(TESTING_FALSE))
    .it(`'number' | Number`, () => {
      expect(isArray(TESTING_NUMBER)).toBe(TESTING_FALSE);
      expect(isArray(TESTING_NUMBER_CONSTRUCTOR)).toBe(TESTING_FALSE);
      expect(isArray(TESTING_NUMBER_INSTANCE)).toBe(TESTING_FALSE);
    })
    .it(`'object' | Object`, () => {
      expect(isArray(TESTING_OBJECT)).toBe(TESTING_FALSE);
    })
    .it(`'string' | String`, () => {
      expect(isArray(TESTING_STRING)).toBe(TESTING_FALSE);
      expect(isArray(TESTING_STRING_INSTANCE)).toBe(TESTING_FALSE);
    })
    .it(`'symbol'`, () => {
      expect(isArray(TESTING_SYMBOL_NUMBER)).toBe(TESTING_FALSE);
      expect(isArray(TESTING_SYMBOL_STRING)).toBe(TESTING_FALSE);
    })
    .it(`'undefined'`, () => (
      expect(isArray(TESTING_NOT_DEFINED)).toBe(TESTING_FALSE),
      expect(isArray(TESTING_UNDEFINED)).toBe(TESTING_FALSE)
    ));
});
