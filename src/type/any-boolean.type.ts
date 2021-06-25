/**
 * A `boolean` type or an instance of a `Boolean`.
 */
// tslint:disable-next-line: ban-types
export type AnyBoolean = Exclude<boolean | Boolean, true | false>;
