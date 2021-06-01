// Choose a type to exclude. A generic `Type` is never a `Not` type.
export type Never<Not, Type> = Type extends Not ? never : Type;
