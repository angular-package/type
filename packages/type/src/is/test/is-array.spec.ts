
import { isArray } from '../lib/is-array.func';

describe('isArray()', () => {

  beforeEach(async () => {});

  beforeEach(() => {});

  it('is DEFINED', () => {
    expect(isArray).toBeDefined();
  });

  it(`string array to be TRUE`, () => {
    expect(isArray(['One', 'Two', 'Three'])).toBeTruthy();
  });

  it(`array number to be TRUE`, () => {
    expect(isArray([1, 2, 3])).toBeTruthy();
  });

  it(`array boolean to be TRUE`, () => {
    expect(isArray([true, false, false])).toBeTruthy();
  });

  it(`number to be FALSE`, () => {
    expect(isArray(345)).toBeFalse();
  });

  it(`boolean to be FALSE`, () => {
    expect(isArray(false)).toBeFalse();
  });
});
