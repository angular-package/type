import { IsArray } from '../type/is-array.type';
/**
 * Checks if any `value` is an `Array` of a generic `Type` type and `Array` instance.
 * Use the `guardArray()` function to type-guard `array` also.
 * @param value Any `value` to check if it's an `Array` of a generic type `Type` and `Array` instance.
 * @returns boolean.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBACgTgSwLYOAgbtAvFARge3wBsIBDAOygB88EBzBc4aqcgVyKJfaVwjhYBnYInJ0hIXsRZtyAEwgAzRhDkBuAFChIUAJKCAgnDikQUHAAp0pImwgAuKBRABKcwD4o129ASCoRiYgADzO7poAxvjkwlB+gaaO+glmOMEAKuAQ7lY2do7OLo7ednH+KRlZnlieKQB08camuT5uAGRtXnm+McAUERD4igFNIJHRsQDK6QBKugByAOLmUADkADL4cBBIcWCCbEgA-KvjvVDzAKoAsgBCAKIzKwBMAOxnsbcA8l-r9wbzFaKGyCCAfZiXeYAEXuADEFvcoStZAplORVOCAjMZgYAJrTOZLRwVYSiOjVKAAbVWpFWABo1rh6WsIqsALqYgzYvFXO6PYmjYI8PhwCmUgCMDOeDIAzByNFFzlycbiYHNrrp0roAGr3AVBYLwZCoDDZFaUtakxh0ZlvBkiUryxWxABSky+8wA+tqDOtLvcVgBvRSERzi54ygC+H2IEDqRHwdAsAAMCQtFsmGY0ghY00sXC41FAAPTFqDAoighUTWPxxMp3kPGaZsopCyNx4Foul8sg6DVmK1hNJ5PfX7-eYt7PNMd-AFdktlitV51D+vJyEw+HzRFTwyjCybuEIqELnvLiADwRrkfKvF5jNZ-c5u-42bps9lh2X1ckOu37lcQ7ZsnzbV9gM-KBvyvG8U1fNVdA1LVdT3MDAIQpCdXuSDoN-ONhxTN0PW9X1-VQg8iK9H0-WwwtF17StLyAA
 */
export const isArray: IsArray = <Type>(value: any): value is Array<Type> => Array.isArray(value) && value instanceof Array;
