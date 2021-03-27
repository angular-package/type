/*
 * Public API Surface of type
 */
export { typeOf } from './lib/type-of.func';

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

// `isNot` object.
export { isNot } from './is/not';

// `is` functions.
export {
  isArray,
  isBigInt,
  isBoolean,
  isDefined,
  isFunction,
  isInstance,
  isNull,
  isNumber,
  isObject,
  isPrimitive,
  isString,
  isSymbol,
  isType,
  isUndefined
} from './is';

// `isNot` functions.
export {
  isNotBoolean,
  isNotDefined,
  isNotFunction,
  isNotNull,
  isNotNumber,
  isNotString,
  isNotUndefined
} from './is/not';

// Types.
export { Constructor, CycleHook, Func, Primitive, Primitives, Types } from './type';
