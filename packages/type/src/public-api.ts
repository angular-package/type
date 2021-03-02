/*
 * Public API Surface of type
 */

// Guard types
export { guardFunction, guardNumber, guardObjectKey, guardObject, guardPrimitive, guardString, guardType } from './guard';

// Check types
export { isFunction, isNumber, isObject, isPrimitive, isString, isType } from './check';

// Types
export { Constructor, CycleHook, Func, Partial, Primitives, Types } from './lib';
