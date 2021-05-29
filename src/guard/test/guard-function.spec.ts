// Function.
import { guardFunction } from '../lib/guard-function.func';
// Constant.
import { FUNCTION } from '../../testing/variables/function.const';

describe(guardFunction.name, () => {
  // TRUE
  it('is DEFINED', () => expect(guardFunction).toBeDefined());
  it(`function | Function`, () => expect(guardFunction(FUNCTION)).toBeTruthy());
});
