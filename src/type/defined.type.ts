import { Never } from './never.type';
/**
 * A type from the provided generic `Type` variable, besides an `undefined` which causes its change to `never`.
 */
export type Defined<Type> = Never<undefined, Type>;
