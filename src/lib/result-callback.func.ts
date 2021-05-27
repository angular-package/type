import { ResultCallback } from '../type/result-callback.type';
/**
 * Default function to handle `callback`.
 * @param result A `boolean` type value from the result of the check.
 * @returns result A `boolean` type result from the check.
 */
export const resultCallback: ResultCallback = (result: boolean): boolean => result;
