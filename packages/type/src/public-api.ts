/*
 * Public API Surface of type
 */

// Guard types
export { guardArray, guardFunction, guardNumber, guardObjectKey, guardObject, guardPrimitive, guardString, guardType } from './guard';

// Check types
export { isArray, isFunction, isNumber, isObject, isPrimitive, isString, isType } from './check';

// Types
export { Constructor, CycleHook, Func, Partial, Primitive, Primitives, Types } from './lib';
