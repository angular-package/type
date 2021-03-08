/**
 * Checks if any `value` is a `'object'` type and equal `null`.
 * @param value Any `value` to check if it's a `null` value and `'object'` type.
 * @returns boolean
 * @example https://www.typescriptlang.org/play?target=7&jsx=0#code/MYewdgzgLgBAlhAcgVwDapgXhgCgG4CGqyApgFwwFgCeAlBYcSfBDGGhpgHwyOlaZs7dDABkomFGoAHEiABmvIv0HYA5CABGAKxLAoagNwAoUJFiIAqgBlrFKtSxsOJsxBCoSAOlQgA5jgABla2gQA0LCjoOCHWtLSGQA
 */
export const isNull = (value: any): value is null => value === null && typeof value === 'object';
