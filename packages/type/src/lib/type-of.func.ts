/**
 * https://javascript.plainenglish.io/the-best-way-to-type-check-in-vanilla-js-55197b4f45ec
 * @param value Any value to check its Object.prototype type.
 * @author https://javascript.plainenglish.io/the-best-way-to-type-check-in-vanilla-js-55197b4f45ec
 * @returns string.
 */
export const typeOf = (value: any): string => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
