import { GuardObject } from '../type/guard-object.type';
import { isObject } from '../../is/lib/is-object.func';
/**
 * Guard the `obj` value to be a generic object `Obj`.
 * Use `isObject()` function for check ONLY.
 * @param object Generic `Obj` type value to guard.
 * @returns boolean
 */
export const guardObject: GuardObject = <Obj>(object: Obj): object is Obj => isObject<Obj>(object);
