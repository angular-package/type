
import { isArray } from '../lib/is-array.func';
/**
 * Check typeof === 'undefined', 'boolean', 'function', 'number', 'object', 'string', 'bigint', 'symbol'
 * Check instanceof String, Boolean, Number, Function, Object
 */

describe('isArray', () => {
   // TRUE
   it('is DEFINED', () => {
    expect(isArray).toBeDefined();
  });
});
