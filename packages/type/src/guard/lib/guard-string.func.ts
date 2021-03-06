import { GuardString } from '../type/guard-string.type';
import { isString } from '../../is/lib/is-string.func';
/**
 * Guard the `value` to be a `string` type.
 * Use `isString()` function for check ONLY.
 * @param value String type value to guard.
 * @example https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAylATnMBzGBeGAKANwEMAbAVwFMAuGIsATwEobjyL4IZo1McA+GFHoAHCiABmMVpRzZcAcm7oM8gNwAoUJFgYyRFABNkPLLkKlKNJZmZSL7BF1TL+HY8vNtGGzeGgxEABUAJQBJADkAcQB9ADUAQQAZAFUAURwYeUSQFAoAW3hhCDI8gH41X20YcOSAWQAhVOC4pLSMgCYAdg0tf3qAeX7E1PjwlpT03HFSCAofXpASCgA6EhAMPAADILCo8bTNgBoYXX0jZ0w8HYiYhInGbxgAeifBFEpKiEWVtY3NmoaTX2qSOJz0hnclwBjWadzSD1Uz1e0xIs0+31W6y2AyGIzGcJBx1OEIuGxxw1GwIRSJgKLRQA
 */
export const guardString: GuardString = (value: string): value is string => isString(value);
