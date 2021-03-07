
import { isBoolean } from '../lib/is-boolean.func';

describe('isBoolean()', () => {

  beforeEach(async () => {});

  beforeEach(() => {});

  it('is DEFINED', () => {
    expect(isBoolean).toBeDefined();
  });

  it(`string to be FALSE`, () => {
    expect(isBoolean('Lorem ipsum?')).toBeFalse();
  });

  it(`number to be FALSE`, () => {
    expect(isBoolean(27)).toBeFalse();
    expect(isBoolean(345)).toBeFalse();
  });

  it(`boolean be TRUE`, () => {
    expect(isBoolean(true)).toBeTrue();
    expect(isBoolean(false)).toBeTrue();
  });

});
