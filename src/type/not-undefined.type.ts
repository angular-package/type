/**
 * A type from the provided generic `Type` variable, besides an `undefined` or `null` which causes its change to `never`.
 */
export type NotUndefined<Type> = Type extends undefined | null ? never : Type;
