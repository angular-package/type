/**
 * Common `configurable` and `enumerable` of a `boolean` type attributes picked from default `PropertyDescriptor` for accessor and data
 * descriptor.
 * "If a descriptor has neither of `value`, `writable`, `get` and `set` keys, it is treated as a data descriptor. "
 */
export interface CommonDescriptor extends Pick<PropertyDescriptor, 'configurable' | 'enumerable'> {}
