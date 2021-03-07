
import { areString } from '../lib/are-string.func';

describe('areString()', () => {

  beforeEach(async () => {});

  beforeEach(() => {});

  it('is DEFINED', () => {
    expect(areString).toBeDefined();
  });

  it(`string to be TRUE`, () => {
    expect(areString('one', 'two', 'three')).toBeTruthy();
  });

  it(`number to be FALSE`, () => {
    expect(areString(1, 2, 3)).toBeFalsy();
  });

  it(`boolean to be FALSE`, () => {
    expect(areString(true, false, false)).toBeFalsy();
  });

  it(`string with number to be FALSE`, () => {
    expect(areString('one', 'two', 'three', 3)).toBeFalse();
  });

  it(`string with array to be FALSE`, () => {
    expect(areString('one', 'two', 'three', ['3'])).toBeFalse();
  });
});
