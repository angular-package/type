import { isInstance } from './is/lib/is-instance.func';
import { isNull } from './is/lib/is-null.func';
/*
 * Public API Surface of type
 */
// `guard` object.
export { guard } from './guard';
// `guard` functions.
export {
    guardArray,
    guardFunction,
    guardNumber,
    guardObject,
    guardObjectKey,
    guardPrimitive,
    guardString,
    guardType
} from './guard';

// `are` object and functions.
export { are, areString } from './are';

// `is` object.
export { is } from './is';

// `is` functions.
export {
    isArray,
    isBigInt,
    isBoolean,
    isInstance,
    isFunction,
    isNumber,
    isNull,
    isObject,
    isPrimitive,
    isString,
    isSymbol,
    isType,
    isUndefined
} from './is';

// Types.
export { Constructor, CycleHook, Func, Primitive, Primitives, Types } from './type';
