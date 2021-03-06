/*
 * Public API Surface of type
 */

// `guard` object and functions.
export { guard, guardArray, guardFunction, guardNumber, guardObject, guardObjectKey, guardPrimitive, guardString, guardType }
    from './guard';

// `are` object and functions.
export { are, areString } from './are';

// `is` object and functions.
export { is, isArray, isFunction, isNumber, isObject, isPrimitive, isString, isType } from './is';

// Types.
export { Constructor, CycleHook, Func, Primitive, Primitives, Types } from './type';
