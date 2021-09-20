/**
 * Gets the specific object type of any value.
 * @param value Any value to check its Object.prototype type.
 * @author https://javascript.plainenglish.io/the-best-way-to-type-check-in-vanilla-js-55197b4f45ec
 * @returns The return value is a `string` of the object prototype.
 */
export const typeOf = (value: any): string => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
