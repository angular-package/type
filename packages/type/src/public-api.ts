/*
 * Public API Surface of type
 */

// Guard types
export { guard, guardArray, guardFunction, guardNumber, guardObject, guardObjectKey, guardPrimitive, guardString, guardType }
    from './guard';

// `are` functions.
export { are } from './are';

// `is` functions.
export { isArray, isFunction, isNumber, isObject, isPrimitive, isString, isType } from './is';

// Types
export { Constructor, CycleHook, Func, Partial, Primitive, Primitives, Types } from './lib';
