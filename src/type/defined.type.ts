import { Never } from './never.type';
export type Defined<Type> = Never<undefined, Type>;
