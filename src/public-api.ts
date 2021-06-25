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
  guardClass,
  guardDefined,
  guardFunction,
  guardInstance,
  guardKey,
  guardNull,
  guardNumber,
  guardObject,
  guardObjectKey,
  guardObjectKeys,
  guardPrimitive,
  guardString,
  guardSymbol,
  guardType,
  guardUndefined,
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
  isDate, // From 4.2.0
  isDefined,
  isFalse, // From 4.2.0
  isFunction,
  isInstance,
  isKey,
  isNull,
  isNumber,
  isNumberBetween, // From 4.2.0
  isNumberObject,
  isNumberType,
  isObject,
  isObjectKey,
  isObjectKeyIn,
  isObjectKeys,
  isPrimitive,
  isRegExp, // From 4.2.0
  isString,
  isStringLength, // From 4.2.0
  isStringObject,
  isStringType,
  isSymbol,
  isTrue, // From 4.2.0
  isType,
  isUndefined,
} from './is';

// `isNot` functions.
export {
  isNotBoolean,
  isNotDefined,
  isNotFunction,
  isNotNull,
  isNotNumber,
  isNotString,
  isNotUndefined,
} from './is/not';

// Types.
export {
  AnyBoolean,
  AnyNumber,
  AnyString,
  Constructor,
  CycleHook,
  Defined,
  Func,
  Key,
  Never,
  NotUndefined,
  NumberBetween, // From 4.2.0
  Primitive,
  Primitives,
  ResultCallback,
  StringOfLength, // From 4.2.0
  Type,
  Types,
} from './type';
