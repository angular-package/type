/**
 * An instance of a type from the provided generic `Type` variable.
 */
export type Constructor<Type> = new (...args: any[]) => Type;
