/*
 * Public API Surface of type
 */

// Guard types
export { guard, guardArray, guardFunction, guardNumber, guardObject, guardObjectKey, guardPrimitive, guardString, guardType }
    from './guard';

// Check types
export { is, isArray, isFunction, isNumber, isObject, isPrimitive, isString, isType } from './check';

// Types
export { Constructor, CycleHook, Func, Partial, Primitive, Primitives, Types } from './lib';
