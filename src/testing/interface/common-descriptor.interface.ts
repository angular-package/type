/**
 * Common `configurable` and `enumerable` of a `boolean` type attributes picked from default `PropertyDescriptor` for accessor and data
 * descriptor.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 * "If a descriptor has neither of `value`, `writable`, `get` and `set` keys, it is treated as a data descriptor. "
 */
export interface CommonDescriptor extends Pick<PropertyDescriptor, 'configurable' | 'enumerable'> {}
