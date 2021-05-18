/*
 * Public API Surface of type
 */
export { typeOf } from './lib/type-of.func';

// `guard` object.
export { guard } from './guard';
// `guard` functions.
export {
  guardArray,
  guardBigInt,
  guardBoolean,
  guardFunction,
  guardInstance,
  guardKey,
  guardNull,
  guardNumber,
  guardObject,
  guardObjectKey,
  guardPrimitive,
  guardString,
  guardSymbol,
  guardType,
  guardUndefined
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
  isBooleanObject,
  isBooleanType,
  isClass,
  isDefined,
  isFunction,
  isInstance,
  isKey,
  isNull,
  isNumber,
  isNumberObject,
  isNumberType,
  isObject,
  isObjectKey,
  isObjectKeyIn,
  isPrimitive,
  isString,
  isStringObject,
  isStringType,
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
export { Constructor, CycleHook, Func, Key, Primitive, Primitives, ResultCallback, Type, Types } from './type';
