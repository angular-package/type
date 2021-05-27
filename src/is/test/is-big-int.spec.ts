import { BIGINT, BIGINT_INSTANCE } from '../../testing/variables/big-int.const';
import { CLASS, Class } from '../../testing/variables/class.const';
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE } from '../../testing/variables/boolean.const';
import { FUNCTION } from '../../testing/variables/function.const';
import { NULL } from '../../testing/variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../testing/variables/number.const';
import { OBJECT_ONE, OBJECT_TWO } from '../../testing/variables/object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../testing/variables/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../../testing/variables/symbol.const';
import { UNDEFINED } from '../../testing/variables/undefined.const';
import { isBigInt } from '../lib/is-big-int.func';
import { notDefined } from '../../testing/variables/not-defined.const';
/**
 * Checks
 * ✓ typeof === 'bigint'
 */
describe(isBigInt.name, () => {
  // TRUE
  it('is DEFINED', () => {
    expect(isBigInt).toBeDefined();
  });
  it(`bigint`, () => {
    expect(isBigInt(BIGINT)).toBe(TRUE);
    expect(isBigInt(BIGINT_INSTANCE)).toBe(TRUE);
    isBigInt(BIGINT_INSTANCE, (result: boolean) => {
      expect(result).toBe(TRUE);
      return result;
    });
  });

  // FALSE
  it(`boolean | Boolean`, () => {
    expect(isBigInt(FALSE)).toBe(FALSE);
    expect(isBigInt(TRUE)).toBe(FALSE);
    expect(isBigInt(FALSE_INSTANCE)).toBe(FALSE);
    expect(isBigInt(TRUE_INSTANCE)).toBe(FALSE);
    isBigInt(FALSE, (result: boolean) => {
      expect(result).toBe(FALSE);
      return result;
    });
  });
  it(`Class | CLASS`, () => {
    expect(isBigInt(Class)).toBe(FALSE);
    expect(isBigInt(CLASS)).toBe(FALSE);
  });
  it(`function | Function`, () => expect(isBigInt(FUNCTION)).toBe(FALSE));
  it(`null | NULL`, () => {
    expect(isBigInt(null)).toBe(FALSE);
    expect(isBigInt(NULL)).toBe(FALSE);
  });
  it(`'number' | Number`, () => {
    expect(isBigInt(NUMBER)).toBe(FALSE);
    expect(isBigInt(NUMBER_INSTANCE)).toBe(FALSE);
    expect(isBigInt(NUMBER_NEW_INSTANCE)).toBe(FALSE);
  });
  it(`'object' | Object`, () => {
    expect(isBigInt(OBJECT_ONE)).toBe(FALSE);
    expect(isBigInt(OBJECT_TWO)).toBe(FALSE);
  });
  it(`'string' | String`, () => {
    expect(isBigInt(STRING)).toBe(FALSE);
    expect(isBigInt(STRING_INSTANCE)).toBe(FALSE);
    expect(isBigInt(STRING_NEW_INSTANCE)).toBe(FALSE);
  });
  it(`'symbol'`, () => {
    expect(isBigInt(SYMBOL_NUMBER)).toBe(FALSE);
    expect(isBigInt(SYMBOL_STRING)).toBe(FALSE);
  });
  it(`'undefined'`, () => {
    expect(isBigInt(notDefined)).toBe(FALSE);
    expect(isBigInt(UNDEFINED)).toBe(FALSE);
  });
});
