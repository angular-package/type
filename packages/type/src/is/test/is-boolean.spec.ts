/**
 * Checks
 * ✓ typeof === 'boolean'
 * ✓ instanceof Boolean
 */
//  * ✓ 'boolean'
//  * ✓ 'function'
//  * ✓ 'number'
//  * ✓ 'object'
//  * ✓ 'string'
//  * ✓ 'bigint'
//  * ✓ 'symbol'
//  * ✓ String
//  * ✓ Boolean
//  * ✓ Number
//  * ✓ Function
//  * ✓ Object

import { isBoolean } from '../lib/is-boolean.func';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE } from './variables/boolean.const';
import { BIGINT, BIGINT_INSTANCE } from './variables/big-int.const';
import { Class, CLASS } from './variables/class.const';
import { FUNCTION } from './variables/function.const';
import { notDefined } from './variables.const';

describe('isBoolean', () => {
  // TRUE
  it('is DEFINED', () => {
    expect(isBoolean).toBeDefined();
  });
  it(`'boolean' | Boolean`, () => {
    expect(isBoolean(FALSE)).toBeTruthy();
    expect(isBoolean(TRUE)).toBeTruthy();
    expect(isBoolean(FALSE_INSTANCE)).toBeTruthy();
    expect(isBoolean(TRUE_INSTANCE)).toBeTruthy();
  });

  // FALSE
  it(`'bigint'`, () => {
    expect(isBoolean(BIGINT)).toBeFalsy();
    expect(isBoolean(BIGINT_INSTANCE)).toBeFalsy();
  });
  it(`'Class'`, () => {
    expect(isBoolean(Class)).toBeFalsy();
    expect(isBoolean(CLASS)).toBeFalsy();
  });
  it(`'function' | Function`, () => {
    expect(isBoolean(FUNCTION)).toBeFalsy();
  });
  it(`'undefined'`, () => {
    expect(isBoolean(notDefined)).toBeFalse();
  });
});
