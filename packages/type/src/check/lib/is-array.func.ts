import { IsArray } from '../type/is-array.type';
/**
 * Check if any `value` is an `Array` of a generic type and `Array` instance.
 * Use the `guardArray()` function to type-guard `array` also.
 * @param value Any `value` to check if it's an `Array` of a generic type `Type` and `Array` instance.
 * @returns boolean.
 * @example https://stackblitz.com/edit/is-array?file=index.ts
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBACgTgSwLYOAgbtAvFARge3wBsIBDAOygB88EBzBc4aqcgVyKJfaVwjhYBnYInJ0hIXsRZtyAEwgAzRhDkBuAFChIUAJKCAgnDikQUHAAp0pImwgAuKBRABKcwD4o129ASCoRiYgADzO7poAxvjkwlB+gaaO+glmOMEAKuDYTuQg7lY2do7OLo7ednH+KRlZnlieKQB08camBT5uAGSdXoW+McAUERD4igGtIJHRsQDK6QBKugByAOLmUADkADL4cBBIcWCCbEgA-BtTA1BLAKoAsgBCAKLz6wBMAOyXsQ8A8r9bJ4GJbrRQ2QQQb7MG5LAAiTwAYssnrD1rIFMpyKooQF5vMDABNOaLVaOarCUR0OpQADaG1IGwANJtcEzNhENgBdHEGPGE26PF5kibBHh8ODUmkARmZb2ZAGZuRooldefiCTBFnddOldAA1J7CoLBeDIVAYCCSzYUxh0NmfZkiCpKlWxABSM1+SwA+nqDFsbk91gBvRSERxSt7ygC+32IEEaRHwdAsAANicsVqnmS0ghYM6sXC41FAAPSlqBgogQ5XTeOJ5NpgXPebZyopCzNl5Fkvlyvg6C1mL1pMp1N-AFApZt3NtCeA4E9ssVqs110jxupmHwpFLFEzwwTCzbxHI2FLvuriBDwQbsdqwkFrM5w95h9EhaZi8Vp3X9ckBt7z5Aku1bF8O3fUDvygX8bzvNN301XRtV1A0Dwg4CkJQ-Unmg2D-wTUc0w9L1fX9QN0KPEifT9ANcOLZd+2ra8gA
 */
export const isArray: IsArray = <Type = any>(value: any): value is Array<Type> => Array.isArray(value) && value instanceof Array;
