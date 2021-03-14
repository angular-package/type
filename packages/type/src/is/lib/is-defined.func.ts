import { IsDefined } from '../type/is-defined.type';
import { isNotUndefined } from '../not/lib/is-not-undefined.func';
import { isNotNull } from '../not/lib/is-not-null.func';
/**
 * Checks if any `value` is NOT a `'undefined'` type and NOT a `null` type.
 * @param value Any `value` to check if it's NOT an `'undefined'` type and NOT a `null` type.
 * @returns boolean.
 */
export const isDefined: IsDefined = (value: any): value is undefined => isNotUndefined(value) && isNotNull(value);
