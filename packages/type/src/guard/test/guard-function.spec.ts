// Function.
import { guardFunction } from '../lib/guard-function.func';
// Variables.
import { FUNCTION } from '../../is/test/variables/function.const';

describe(guardFunction.name, () => {
  // TRUE
  it('is DEFINED', () => expect(guardFunction).toBeDefined());
  it(`function | Function`, () => expect(guardFunction(FUNCTION)).toBeTruthy());
});
