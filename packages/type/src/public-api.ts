/*
 * Public API Surface of type
 */

// `guard` object and functions.
export { guard, guardArray, guardFunction, guardNumber, guardObject, guardObjectKey, guardPrimitive, guardString, guardType }
    from './guard';

// `are` object and functions.
export { are, areString } from './are';

// `is` functions.
export { isArray, isBigInt, isBoolean, isClass, isFunction, isNumber, isObject, isPrimitive, isString, isSymbol, isType, isUndefined } from './is';

// `is` object.
export { is } from './is';

// Types.
export { Constructor, CycleHook, Func, Primitive, Primitives, Types } from './type';
