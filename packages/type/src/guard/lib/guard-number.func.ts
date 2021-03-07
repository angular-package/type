import { isNumber } from '../../is/lib/is-number.func';
/**
 * Guard the `value` to be a `number` type.
 * Use `isNumber()` function for check ONLY.
 * @param value `Type `number` value to guard.
 * @returns boolean
 * @example https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAcgVwLYCMCmAnGBeGACgDcBDAG2UwC4ZSwBPASlrMs3ghjDS1zwB8MKAwAOmEADMYbKvjwEA5Dww5FMAGQbOAMThg4UTCQpUmAbgBQoSLADmyUtgAmKVfyKya3XjhYzTDgQfd3whBDc+E3YLS2twaBhEAFUAWQAhAFEAJQB9AHlETPwYACYAdisbRJSMnNyAFQB1fJKARgqqhNharLyGgAlszOKCUs742yS0vtydfOTsksUAZgrFK0mIEHJMADpyEDtCAANe+sLMk4AaGAcnV19sQnO8y6ZY6p39w+OzmfqzXyNzujhckRwLwB-RaHy6kG+ByOp1ejSGIxB93BTyhdX66MycK2iN+KOhcwW2UxYMe7lxs3mizhMAA9CzQQ8YAB3EDYADWEEsQA
 */
export const guardNumber = (value: number): value is number => isNumber(value);
