/**
 * Guard the `value` to be `number` type.
 * Use `isNumber()` function for check ONLY.
 * @param value `Type `number` value to guard.
 * @returns boolean
 * @example https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBA5gVwIYCcAmA5BBbARgUxRgF4YAKANyQBsF8AuGMHAlASkatvxgEsImLQiQB8MKAE8ADvhAAzGFzolipAOTM8hNQG4AUHtCRYGAKoBZAEIBRAEoB9APIZrJGACYA7PqPQYZqzt7ABUAdUc3AEYvH3A-AJsHYIAJW2tXUncYwziTC0T7ADFHU1s3NQBmL10DXxBqfAA6ahA4MgADBKDna3aAGnhkdCwtFDIuhx62NljIeqaWts78oLDHfsHUTCExiZDw6dmIeebWjr2UtN6BxC2R1nGVpNT0w5y5htOlveLSjdvhjtHoEHL9bIcYAB6SGbdAwADuIBQAGsIHogA
 */
export const guardNumber = (value: number): value is number => typeof value === 'number';
