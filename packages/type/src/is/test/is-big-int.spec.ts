
import { isBigInt } from '../lib/is-big-int.func';

describe('isBigInt()', () => {

  beforeEach(async () => {});

  beforeEach(() => {});

  it('is DEFINED', () => {
    expect(isBigInt).toBeDefined();
  });

  it(`string to be FALSE`, () => {
    expect(isBigInt('Lorem ipsum?')).toBeFalse();
  });

  it(`number to be FALSE`, () => {
    expect(isBigInt(27)).toBeFalse();
    expect(isBigInt(345)).toBeFalse();
  });

  it(`boolean to be FALSE`, () => {
    expect(isBigInt(true)).toBeFalse();
  });

  it(`bigint to be TRUE`, () => {
    expect(isBigInt(9007199254740991n)).toBeTrue();
  });
});
