/**
 * Checks
 * ✓ typeof === 'symbol'
 */

import { isSymbol } from '../lib/is-symbol.func';

describe('isSymbol', () => {
   // TRUE
   it('is DEFINED', () => {
     expect(isSymbol).toBeDefined();
   });

});
