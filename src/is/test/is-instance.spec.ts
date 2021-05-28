// Function.
import { isInstance } from '../lib/is-instance.func';
// Variables.
import { FALSE, TRUE, FALSE_INSTANCE, TRUE_INSTANCE } from '../../testing/variables/boolean.const';
import { BIGINT, BIGINT_INSTANCE } from '../../testing/variables/big-int.const';
import { Class, CLASS, PERSON, Person, PersonCopy, PERSON_COPY } from '../../testing/variables/class.const';
import { FUNCTION } from '../../testing/variables/function.const';
import { NULL } from '../../testing/variables/null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from '../../testing/variables/number.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from '../../testing/variables/string.const';
import { UNDEFINED } from '../../testing/variables/undefined.const';
import { notDefined } from '../../testing/variables/not-defined.const';

describe(isInstance.name, () => {
  // TRUE.
  it('is DEFINED', () => expect(isInstance).toBeDefined());
  it(`CLASS instance of Class`, () => expect(isInstance(CLASS, Class)).toBe(TRUE));
  it(`PERSON instance of Person`, () => expect(isInstance(PERSON, Person)).toBe(TRUE));
  it(`PERSON_COPY instance of PersonCopy`, () => expect(isInstance(PERSON_COPY, PersonCopy)).toBe(TRUE));
  it(`CLASS instance of Class expect result to be true`, () => {
    isInstance(CLASS, Class, (result: boolean) => {
      expect(result).toBe(TRUE);
      return result;
    });
  });

  // FALSE.
  it(`PERSON_COPY not instance of Person`, () => expect(isInstance(PERSON_COPY, Person)).toBe(FALSE));
  it(`'boolean' | Boolean`, () => {
    expect(isInstance(FALSE, FALSE)).toBe(FALSE);
    expect(isInstance(TRUE, TRUE)).toBe(FALSE);
    expect(isInstance(FALSE_INSTANCE, FALSE_INSTANCE)).toBe(FALSE);
    expect(isInstance(TRUE_INSTANCE, TRUE_INSTANCE)).toBe(FALSE);
  });
  it(`'bigint'`, () => {
    expect(isInstance(BIGINT, BIGINT)).toBe(FALSE);
    expect(isInstance(BIGINT_INSTANCE, BIGINT_INSTANCE)).toBe(FALSE);
  });
  it(`Class`, () => expect(isInstance(Class, Class)).toBe(FALSE));
  it(`FUNCTION instance of Function`, () => expect(isInstance(FUNCTION, Function)).toBe(FALSE));
  it(`NULL`, () => expect(isInstance(NULL, NULL)).toBe(FALSE));
  it(`'number' | Number`, () => {
    expect(isInstance(NUMBER, NUMBER)).toBe(FALSE);
    expect(isInstance(NUMBER_INSTANCE, NUMBER_INSTANCE)).toBe(FALSE);
    expect(isInstance(NUMBER_NEW_INSTANCE, NUMBER_NEW_INSTANCE)).toBe(FALSE);
  });
  // it(`'object' | Object`, () => {
  //   expect(isInstance(OBJECT_ONE)).toBe(FALSE);
  //   expect(isInstance(OBJECT_TWO, OBJECT_TWO)).toBe(FALSE);
  // });
  it(`'string' | String`, () => {
    expect(isInstance(STRING, STRING)).toBe(FALSE);
    expect(isInstance(STRING_INSTANCE, STRING_INSTANCE)).toBe(FALSE);
    expect(isInstance(STRING_NEW_INSTANCE, STRING_NEW_INSTANCE)).toBe(FALSE);
  });

  // FALSE
  it(`undefined`, () => {
    expect(isInstance(notDefined, notDefined)).toBe(FALSE);
    expect(isInstance(UNDEFINED, UNDEFINED)).toBe(FALSE);
  });
});
