/**
 * A type from the provided generic `Type` variable, besides a type provided in the generic `Not` variable
 * which causes its change to `never`.
 */
export type Never<Not, Type> = Type extends Not ? never : Type;
