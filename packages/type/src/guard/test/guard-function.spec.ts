// Function.
import { guardFunction } from '../lib/guard-function.func';
// Variables.
import { FUNCTION } from '../../is/test/variables/function.const';

describe('guardFunction', () => {
  // TRUE
  it('is DEFINED', () => {
    expect(guardFunction).toBeDefined();
  });
  it(`'function' | Function`, () => {
    expect(guardFunction(FUNCTION)).toBeTruthy();
  });

  // FALSE.
  // it(`Class`, () => {
  //   expect(guardFunction(Class)).toBeTruthy();
  // });
  // it(`'boolean' | Boolean`, () => {
  //   expect(guardFunction(FALSE)).toBeFalsy();
  //   expect(guardFunction(TRUE)).toBeFalsy();
  //   expect(guardFunction(FALSE_INSTANCE)).toBeFalsy();
  //   expect(guardFunction(TRUE_INSTANCE)).toBeFalsy();
  //   expect(guardFunction(Boolean(false))).toBeFalsy();
  //   expect(guardFunction(Boolean(true))).toBeFalsy();
  // });
  // it(`'bigint'`, () => {
  //   expect(guardFunction(BIGINT)).toBeFalsy();
  //   expect(guardFunction(BIGINT_INSTANCE)).toBeFalsy();
  // });
  // it(`CLASS`, () => {
  //   expect(guardFunction(CLASS)).toBeFalsy();
  // });
  // it(`null | NULL`, () => {
  //   expect(guardFunction(null)).toBeFalsy();
  //   expect(guardFunction(NULL)).toBeFalsy();
  // });
  // it(`'number' | Number`, () => {
  //   expect(guardFunction(NUMBER)).toBeFalsy();
  //   expect(guardFunction(NUMBER_INSTANCE)).toBeFalsy();
  //   expect(guardFunction(NUMBER_NEW_INSTANCE)).toBeFalsy();
  // });
  // it(`'object' | Object`, () => {
  //   expect(guardFunction(OBJECT_ONE)).toBeFalsy();
  //   expect(guardFunction(OBJECT_TWO)).toBeFalsy();
  // });
  // it(`'string' | String`, () => {
  //   expect(guardFunction(STRING)).toBeFalsy();
  //   expect(guardFunction(STRING_INSTANCE)).toBeFalsy();
  //   expect(guardFunction(STRING_NEW_INSTANCE)).toBeFalsy();
  // });
  // it(`'symbol'`, () => {
  //   expect(guardFunction(SYMBOL_NUMBER)).toBeFalsy();
  //   expect(guardFunction(SYMBOL_STRING)).toBeFalsy();
  // });
  // it(`'undefined'`, () => {
  //   expect(guardFunction(notDefined)).toBeFalsy();
  //   expect(guardFunction(UNDEFINED)).toBeFalsy();
  // });
});
