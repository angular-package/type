# Packages

Useful packages based on the [angular.io](https://angular.io/).

| Package          | Description                                                                             | Status        | Readme      |
|------------------|-----------------------------------------------------------------------------------------|---------------|-------------|
| change-detection | Improve application performance.                                                        | *In Progress* | [Readme][cd-readme-github] |
| prism            | `Prism` highlighter module.                                                             | *In Progress* | [Readme][prism-readme-github] |
| property         | Features to handle properties.                                                          | *In Progress* | [Readme][property-readme-github] |
| ui               | User interface based on **[Spectre.css](https://github.com/picturepan2/spectre)**.      | *In Progress* | [Github][ui-readme-github] |
| type             | Common types, type guards and type checkers.                                            | [![npm version][type-npm-svg]][type-npm-badge] | [Github][type-readme-github] \| [npm][type-readme-npm] |

## angular-package/type

Common types, type guards and type checkers.

[![npm version](https://badge.fury.io/js/%40angular-package%2Ftype.svg)](https://badge.fury.io/js/%40angular-package%2Ftype)
[![GitHub issues](https://img.shields.io/github/issues/angular-package/type)](https://github.com/angular-package/type/issues)
[![GitHub forks](https://img.shields.io/github/forks/angular-package/type)](https://github.com/angular-package/type/network)
[![GitHub stars](https://img.shields.io/github/stars/angular-package/type)](https://github.com/angular-package/type/stargazers)
[![GitHub license](https://img.shields.io/github/license/angular-package/type)](https://github.com/angular-package/type/blob/main/LICENSE)

```typescript
// Guard functions.
import { 
  guardArray,
  guardFunction,
  guardNumber,
  guardObject,
  guardObjectKey,
  guardPrimitive,
  guardString,
  guardType
} from '@angular-package/type'; 
```

```typescript
// Check is functions.
import {
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
} from '@angular-package/type';
// Check are functions.
import { areString } from '@angular-package/type';
```

```typescript
// Check is NOT functions.
import {
  isNotBoolean,
  isNotDefined,
  isNotFunction,
  isNotNull,
  isNotNumber,
  isNotString,
  isNotUndefined
} from '@angular-package/type';
```

```typescript
// Guard and is object.
import { are, guard, is } from '@angular-package/type';
```

```typescript
// Types.
import { Constructor, CycleHook, Func, Primitive, Primitives, Types } from '@angular-package/type';
```

## Features

* Checks if
  * **any** value is
    * an `Array` of any type with [isArray](#isArray).
    * a `'bigint'` type with [isBigInt](#isBigInt).
    * a `'boolean'` type with [isBoolean](#isBoolean).
    * a `function` type with [isFunction](#isFunction).
    * a generic type `instance` with [isInstance](#isInstance).
    * a `null` type with [isNull](#isNull).
    * a `number` type with [isNumber](#isNumber).
    * a generic type `'object'` with [isObject](#isObject).
    * a one of the primitive `boolean`, `bigint`, `number`, `string` type with [isPrimitive](#isPrimitive).
    * a `string` type with [isString](#isString).
    * a `symbol` type with [isSymbol](#isSymbol).
    * a generic type instance, `'function'`, `'object'` or primitive type with [isType](#isType).
    * a `'undefined'` type with [isUndefined](#isUndefined).
  * an **unknown** value is
    * defined with [isDefined](#isDefined).
  * an **unknown** value is NOT
    * a `'boolean'` type with [isNotBoolean](#isNotBoolean)
    * a `'function'` type with [isNotFunction](#isNotFunction)
    * a `'null'` type with [isNotNull](#isNotNull)
    * a `'number'` type with [isNotNumber](#isNotNumber)
    * a `'string'` type with [isNotString](#isNotString)
    * a `'undefined'` type with [isNotUndefined](#isNotUndefined)
* Guard the value to be
  * an `Array` of generic type with [guardArray](#guardArray).
  * a `function` type with [guardFunction](#guardFunction).
  * a `number` type with [guardNumber](#guardNumber).
  * a generic `'object'` type that contains `key` with [guardObjectKey](#guardObjectKey).
  * a generic `'object'` type with [guardObject](#guardObject).
  * a one of the `Primitives` with [guardPrimitive](#guardPrimitive).
  * a `string` type with [guardString](#guardString).
  * a generic type from one of the [`Types`](#types) type with [Type guard](#guardType).

## How angular-package understands

Check
> Is to check the return value to be the same as expected.

Type guard
> Is to guard type from parameter to not let input unexpected value in the code editor.

Guard
> Is a combination of both above to type guard input in the code editor and check the return. 

----

* [Installation](#installation)
* [Object](#object)
  * [`are`](#are)
  * [`guard`](#guard)
  * [`is`](#is)
* [Check](#check)
  * [are](#areString)
  * [is](#isArray)
* [Guard](#guard)
* [Common types](#common-types)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)

----

## Installation

Install `@angular-package/type` package with command:

```bash
npm i --save @angular-package/type
```

## Object

### are

Object `are` with some of  **check are** functions.

```typescript
const are: Are = {
  string: areString
};
```

### guard

Object `guard` with all **guard** functions.

```typescript
const guardIs: GuardIs = {
  array: guardArray,
  function: guardFunction,
  number: guardNumber,
  objectKey: guardObjectKey,
  object: guardObject,
  primitive: guardPrimitive,
  string: guardString,
  type: guardType
};
const guard: Guard = {
  is: guardIs
};

```

### is

Object `is` with all **check is** functions and **check is not** in `not` property.

```typescript
const is: Is = {
  array: isArray,
  bigInt: isBigInt, // deprecated
  bigint: isBigInt,
  boolean: isBoolean,
  booleanObject: isBooleanObject,
  booleanType: isBooleanType,
  defined: isDefined,
  function: isFunction,
  instance: isInstance,
  key: isKey,
  not: isNot,
  null: isNull,
  number: isNumber,
  numberObject: isNumberObject,
  numberType: isNumberType,
  object: isObject,
  objectKey: isObjectKey,
  primitive: isPrimitive,
  string: isString,
  stringObject: isStringObject,
  stringType: isStringType,
  symbol: isSymbol,
  type: isType,
  undefined: isUndefined
};
```

## isNot

Object `isNot` with all **check is not** functions.

```typescript
const isNot: IsNot = {
  boolean: isNotBoolean,
  defined: isNotDefined,
  function: isNotFunction,
  null: isNotNull,
  number: isNotNumber,
  string: isNotString,
  undefined: isNotUndefined
};
```

## errorCallback

Default function to handle `callback` parameter.

```typescript
const errorCallback: ResultCallback = (result: boolean): boolean => result;
```

## Check

### areString

 Use `areString()` or `are.string()` to check if all of **any** arguments are a `string` type.

```typescript
const areString = (...args: any): boolean => check('string', ...args);
```

| Parameter | Type  | Description |
|-----------| :---: |-------------|
| ...args   | `any` | Any arguments to check they're all a `string` type |

The **return value** is a `boolean` value.

[Example usage on playground][are-string]

----

### isArray

Use `isArray()` or `is.array()` to check if **any** `value` is an [`Array`][Array], [`Array`][Array] instance and `object` type.

```typescript
const isArray: IsArray = <Type>(value: any): value is Array<Type> =>
  typeOf(value) === 'array' &&
  Array.isArray(value) === true &&
  value instanceof Array === true &&
  typeof value === 'object';
```

| Parameter | Type  | Description |
| :-------- | :---: | :---------- |
| value     | `any` | Any `value` to check |

The **return value** is a `boolean` indicating whether or not the `value` is an [`Array`][Array].

```typescript
// Example usage
const ARRAY_NUMBER = [1, 2, 3];
const ARRAY_STRING = ['a', 'b', 'c'];

isArray(ARRAY_NUMBER); // true
isArray<string>(ARRAY_STRING); // true
```

[Example usage on playground][is-array]

----

### isBigInt

Use `isBigInt()` or `is.bigInt()` to check if **any** `value` is a `bigint` type.

```typescript
const isBigInt: IsBigInt = (value: any): value is bigint =>
  typeOf(value) === 'bigint' &&
  typeof value === 'bigint';
```

| Parameter | Type  | Description |
| :-------- | :---: | :---------- |
| value     | `any` | Any `value` to check |

The **return value** is a `boolean` indicating whether or not the `value` is a `bigint`.

```typescript
// Example usage
const BIGINT = 9007199254740991n;
const NUMBER = 27;

isBigInt(NUMBER); // false
isBigInt(BIGINT); // true
```

[Example usage on playground][is-bigint] | [How to detect `bigint` type][detect-bigint]

----

### isBoolean

Use `isBoolean()` or `is.boolean()` to check if **any** `value` is a `boolean` type not instance of [`Boolean`][Boolean] and [`Object`][Object] or `object` type instance of [`Boolean`][Boolean] and [`Object`][Object].

```typescript
const isBoolean: IsBoolean = (value: any, callback: ResultCallback = errorCallback): value is boolean =>
  callback(typeOf(value) === 'boolean' && (isBooleanType(value) || isBooleanObject(value)));
```

| Parameter | Type  | Description |
| :---------| :---: | :---------- |
| value     | `any` | Any `value` to check |
| callback  | [`ResultCallback`](#ResultCallback)=[`errorCallback`](#errorCallback) | [`ResultCallback`](#ResultCallback) function to handle result before returns eg. to throw an `Error` |

The **return value** is a `boolean` indicating whether or not the `value` is a `boolean`.

```typescript
// Example usage
const BOOLEAN = false;
const BOOLEAN_INSTANCE = new Boolean(false);

isBoolean(BOOLEAN); // true
isBoolean(BOOLEAN_INSTANCE); // true
```

[Example usage on playground][is-boolean] | [How to detect the `boolean` type][detect-boolean]

----

### isBooleanObject

Use `isBooleanObject()` or `is.booleanObject()` to check if **any** `value` is an `object` type and instance of [`Boolean`][Boolean] and [`Object`][Object].

```typescript
const isBooleanObject: IsBooleanObject = (value: any, callback: ResultCallback = errorCallback): value is boolean =>
  callback(typeof value === 'object' && value instanceof Boolean === true && value instanceof Object === true);
```

| Parameter | Type  | Description |
| :---------| :---: | :---------- |
| value     | `any` | Any `value` to check |
| callback  | [`ResultCallback`](#ResultCallback)=[`errorCallback`](#errorCallback) | [`ResultCallback`](#ResultCallback) function to handle result before returns eg. to throw an `Error` |

The **return value** is a `boolean` indicating whether or not the `value` is a [`Boolean`][Boolean] instance.

```typescript
// Example usage
const BOOLEAN = false;
const BOOLEAN_INSTANCE = new Boolean(false);

isBooleanObject(BOOLEAN); // false
isBooleanObject(BOOLEAN_INSTANCE); // true
```

----

### isBooleanType

Use `isBooleanType()` or `is.booleanType()` to check if **any** `value` is a `boolean` type not an instance of [`Boolean`][Boolean] and [`Object`][Object], and equal to `true` or `false`.

```typescript
const isBooleanType: IsBooleanType = (value: any, callback: ResultCallback = errorCallback): value is boolean =>
  callback(
    value instanceof Boolean === false &&
    value instanceof Object === false &&
    typeof value === 'boolean' &&
    (value === true || value === false)
  );
```

| Parameter | Type  | Description |
| :---------| :---: | :---------- |
| value     | `any` | Any `value` to check |
| callback  | [`ResultCallback`](#ResultCallback)=[`errorCallback`](#errorCallback) | [`ResultCallback`](#ResultCallback) function to handle result before returns eg. to throw an `Error` |

The **return value** is a `boolean` indicating whether or not the `value` is a `boolean` type.

```typescript
// Example usage
const BOOLEAN = false;
const BOOLEAN_INSTANCE = new Boolean(false);

isBooleanType(BOOLEAN); // true
isBooleanType(BOOLEAN_INSTANCE); // false
```

----

### isDefined

Use `isDefined()` or `is.defined()` to check if an **unknown** `value` is NOT an `undefined` type and is NOT equal to `undefined`.

```typescript
const isDefined: IsDefined = (value: unknown): boolean =>
  typeOf(value) !== 'undefined' &&
  typeof value !== 'undefined' &&
  value !== undefined;
```

| Parameter | Type      | Description |
| :-------- | :-------: | :---------- |
| value     | `unknown` | An unknown `value` to check |

The **return value** is a `boolean` indicating whether or not the `value` is defined.

```typescript
// Example usage
const UNDEFINED = undefined;
let defined;

isDefined(UNDEFINED); // false
isDefined(defined); // false
```

----

### isFunction

Use `isFunction()` or `is.function()` to check if **any** `value` is a `function` type, an instance  [`Function`][Function] and [`Object`][Object].

```typescript
const isFunction: IsFunction = (value: any): value is Func =>
  typeOf(value) === 'function' &&
  typeof value === 'function' &&
  value instanceof Function === true &&
  value instanceof Object === true;
```

| Parameter | Type  | Description |
| :-------- | :---: | :---------- |
| value     | `any` | Any `value` to check |

The **return value** is a `boolean` indicating whether or not the `value` is a `function`.

```typescript
// Example usage
class Class { x = 5; }
const FUNC: Func = (x: number): any => { return x + 5; }

isFunction(Class); // true
isFunction(FUNC); // true
isFunction(() => 5); // true
```

[Example usage on playground][is-function] | [How to detect `function` type][detect-function]

----

### isInstance

Use `isInstance()` or `is.instance()` to check if **any** value is an `object` of a generic `Obj` type equal to an `instance` of [`Constructor`](#Constructor) type.

```typescript
const isInstance: IsInstance = <Obj>(value: any, instance: Constructor<Obj>): value is Obj =>
  isObject<Obj>(value) ?
    isFunction(instance) ?
      value instanceof instance === true && isString(instance.prototype.constructor.name)
    : false
  : false;
```

| Parameter | Type                               | Description |
| :-------- | :--------------------------------: | :---------- |
| value     | `any`                              | Any `value` to compare with the `instance` |
| instance  | [`Constructor<Obj>`](#Constructor) | The name of the generic `Obj` type to create an `instance` to compare with the `value` |

The **return value** is a `boolean` indicating whether or not the `value` is an `instance`.

```typescript
// Example usage
class Some { x = 127; }
class Two { y = 'Lorem ipsum'; }

const SOME = new Some();
const TWO = new Two();

isInstance<Some>(TWO, SOME); // false
isInstance<Some>(SOME, SOME); // true
isInstance<Some>(TWO, TWO); // true and type error
```

[Example usage on playground][is-instance] | [How to detect `constructor` instance][detect-instance]

----

### isKey

Use `isKey()` or `is.key()` to check if **any** `value` is one of the `string`, `number`, or `symbol`.

```typescript
const isKey: IsKey = (value: any): value is Key => isString(value) || isNumber(value) || isSymbol(value);
```

| Parameter | Type  | Description |
| :-------- | :---: |:----------- |
| value     | `any` | Any `value` to check |

The **return value** is a `boolean` indicating whether or not the `value` is a [`Key`](#Key).

----

### isNull

Use `isNull()` or `is.null()` to check if **any** `value` is an `object` type and equal to `null`.

```typescript
const isNull: IsNull = (value: any): value is null =>
  typeOf(value) === 'null' &&
  typeof value === 'object' &&
  value === null;
```

| Parameter | Type  | Description |
| :-------- | :---: |------------ |
| value     | `any` | Any `value` to check |

The **return value** is a `boolean` indicating whether or not the `value` is `null`.

```typescript
// Example usage
const NULL = null;
const NUMBER = 27;

isNull(NULL); // true
isNull(NUMBER); // false
```

[Example usage on playground][is-null] | [How to detect `null` type][detect-null]

----

### isNumber

Use `isNumber()` or `is.number()` to check if **any** `value` is a `number` type not an instance of `Number` and `Object` or `object` type instance of `Number` and `Object`.

```typescript
const isNumber: IsNumber = (value: any): value is number =>
  typeOf(value) === 'number' &&
  isFinite(value) === true &&
  (isNumberObject(value) || isNumberType(value));
```

| Parameter | Type  | Description |
| :-------- | :---: | :---------- |
| value     | `any` | Any `value` to check |

The **return value** is a `boolean` indicating whether or not the `value` is a `number`.

[Example usage on playground][is-number] | [How to detect a `number` type][detect-number]

----

### isNumberObject

Use `isNumberObject()` or `is.numberObject()` to check if **any** `value` is an `object` type an instance of [`Number`][Number] and [`Object`][Object].

```typescript
const isNumberObject: IsNumberObject = (value: any, callback: ResultCallback = errorCallback): value is number =>
  callback(typeof value === 'object' && value instanceof Number === true && value instanceof Object === true);
```

| Parameter | Type  | Description |
| :-------- | :---: | :---------- |
| value     | `any` | Any `value` to check |

The **return value** is a `boolean` indicating whether or not the `value` is a [`Number`][Number] instance.

----

### isNumberType

Use `isNumber()` or `is.number()` to check if **any** `value` is a `number` type not an instance of [`Number`][Number] and [`Object`][Object] or `object` type instance of [`Number`][Number] and [`Object`][Object].

```typescript
const isNumber: IsNumber = (value: any): value is number =>
  typeOf(value) === 'number' &&
  isFinite(value) === true &&
  (isNumberObject(value) || isNumberType(value));
```

| Parameter | Type  | Description |
| :-------- | :---: | :---------- |
| value     | `any` | Any `value` to check |

The **return value** is a `boolean` indicating whether or not the `value` is a `number`.

----

### isObject

Use `isObject()` or `is.object()` to check if **any** `value` is a generic `Obj` `object` type and [`Object`][Object] instance with the possibility of containing the `key`.

```typescript
const isObject: IsObject = <Obj = object>(value: any, key?: Key): value is Obj =>
  (typeOf(value) === 'object' && typeof value === 'object' && value instanceof Object === true)
    ? isKey(key)
      ? key in value
    : true
  : false;
```

| Parameter | Type          | Description |
| :-------- | :-----------: | :---------- |
| value     | `any`         | Any `value` to check |
| key?      | [`Key`](#Key) | Property name to find in `value` |

The **return value** is a `boolean` indicating whether or not the `value` is an `object`.

[Example usage on playground][is-object] | [How to detect an `object` type][detect-object]

----

### isObjectKey

Use `isObject()` or `is.object()` to check if **any** `value` is an `object` with its own specified keys of the [`Key`](#Key).

```typescript
const isObjectKey: IsObjectKey = <Type extends object>(value: any, key: Key | Key[]): value is Type =>
  isObject<Type>(value) ?
    isArray(key) ?
      key.every(k => isKey(k) ? ({}).hasOwnProperty.call(value, k) === true : false)
    : isKey(key) ?
        ({}).hasOwnProperty.call(value, key)
      : false
  : false;
```

| Parameter | Type                             | Description |
| :-------- | :------------------------------: | :---------- |
| value     | `any`                            | Any `value` to check if it contains a specified `key` |
| key       | [`Key`](#key) \| [`Key`](#Key)[] | A [`Key`](#Key) type or an array of [`Key`](#Key) type to check the `value` |

The **return value** is a `boolean` indicating whether or not the `value` has its own specified keys.

----

### isPrimitive

Use `isPrimitive()` or `is.primitive()` to check if **any** `value` is the [`Primitive`](#Primitive) type from a `type` of the [`Primitives`](#Primitives) type.

```typescript
const isPrimitive: IsPrimitive = <T extends Primitive>(value: any, type: Primitives): value is T => {
  if (isString(type)) {
    switch (type) {
      case 'bigint': return isBigInt(value);
      case 'boolean': return isBoolean(value);
      case 'number': return isNumber(value);
      case 'null': return isNull(value);
      case 'string': return isString(value);
      case 'symbol': return isSymbol(value);
      case 'undefined': return isUndefined(value);
    }
  }
  return false;
};
```

| Parameter | Type                        | Description |
| :-------- | :-------------------------: | :---------- |
| value     | `any`                       | Any `value` to check if it's a `Primitive` from the `type` |
| type      | [`Primitives`](#Primitives) | A `string` name of the type from the [`Primitives`](#Primitives) to check the `value` |

The **return value** is a `boolean` indicating whether or not the `value` is a `type` from the [`Primitives`](#Primitives).

[Example usage on playground][is-primitive]

----

### isString

Use `isString()` or `is.string()` to check if **any** `value` is a `string` type, not instance of `Object` and `String` or `object` type and instance of `String` and `Object`.

```typescript
const isString: IsString = (value: any, callback: ResultCallback = errorCallback): value is string =>
  callback(typeOf(value) === 'string' && (isStringObject(value) || isStringType(value)));
```

| Parameter |       Type                          | Description |
| :-------- | :---------------------------------: | :---------- |
| value     | `any`                               | Any `value` to check |
| callback  | [`ResultCallback`](#ResultCallback) | [`ResultCallback`](#ResultCallback) function to handle result before returns eg. to throw an `Error` |

The **return value** is a `boolean` indicating whether or not the `value` is a `string`.

----

### isStringObject

Use `isStringObject()` or `is.stringObject()` to check if **any** `value` is an `object` type and instance of [`String`][String] and [`Object`][Object].

```typescript
const isStringObject: IsStringObject = (value: any, callback: ResultCallback = errorCallback): value is string =>
  callback(value instanceof Object === true && value instanceof String === true && typeof value === 'object');
```

| Parameter |       Type                          | Description |
| :-------- | :---------------------------------: | :---------- |
| value     | `any`                               | Any `value` to check |
| callback  | [`ResultCallback`](#ResultCallback)=[`errorCallback`](#errorCallback) | [`ResultCallback`](#ResultCallback) function to handle result before returns eg. to throw an `Error` |

The **return value** is a `boolean` indicating whether or not the `value` is a [`String`][String] instance.

----

### isStringType

Use `isStringObject()` or `is.stringObject()` to check if **any** `value` is a `string` type and **not** instance of [`String`][String] and [`Object`][Object].

```typescript
const isStringType: IsStringType = (value: any, callback: ResultCallback = errorCallback): value is string =>
  callback(value instanceof Object === false && value instanceof String === false && typeof value === 'string');
```

| Parameter | Type                                | Description |
| :-------- | :---------------------------------: | :---------- |
| value     | `any`                               | Any `value` to check |
| callback  | [`ResultCallback`](#ResultCallback)=[`errorCallback`](#errorCallback) | [`ResultCallback`](#ResultCallback) function to handle result before returns eg. to throw an `Error` |

The **return value** is a `boolean` indicating whether or not the `value` is a `string`.

----

### isSymbol

Use `isSymbol()` or `is.symbol()` to check if **any** `value` is a `symbol` type.

```typescript
const isSymbol: IsSymbol = (value: any): value is symbol =>
  typeOf(value) === 'symbol' &&
  typeof value === 'symbol';
```

| Parameter | Type  | Description |
| :-------- | :---: | :---------- |
| value     | `any` | Any `value` to check |

The **return value** is a `boolean` indicating whether or not the `value` is a `symbol`.

[Example usage on playground][is-symbol] | [How to detect `symbol` type][detect-symbol]

----

### isType

Use `isType()` or `is.type()` to check if **any** `value` is the [`Type`](#Type) from a `type` of the [`Types`](#Types) type.

```typescript
const isType: IsType = <T extends Type>(value: any, type: Types<T>): value is T => {
  if (isString(type)) {
    switch (type) {
      // Primitives.
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'null' :
      case 'string':
      case 'symbol':
      case 'undefined': return isPrimitive(value, type);
      // Function.
      case 'function': return isFunction(value);
      // Object.
      case 'object': return isObject<T>(value);
    }
  } else if (isNotNull(type)) {
    return isInstance<T>(value, type);
  }
  return false;
};
```

| Parameter | Type                 | Description |
| :-------- | :------------------: | :---------- |
| value     | `any`                | Any `value` to check if its type is from the `type` |
| type      | [`Types<T>`](#Types) | A `string` or generic `Constructor` type from the [`Types`](#Types) to check the `value` |

The **return value** is a `boolean` indicating whether or not the `value` is the [`Type`](#Type) from a `type` of the [`Types`](#Types).

[Example usage on playground][is-type]

----

### isUndefined

Use `isUndefined()` or `is.undefined()` to check if **any** `value` is an `undefined` type and equal to `undefined`.

```typescript
const isUndefined: IsUndefined = (value: any): value is undefined =>
  typeOf(value) === 'undefined' &&
  typeof value === 'undefined' &&
  value === undefined;
```

| Parameter | Type  | Description |
| :-------- | :---: | :---------- |
| value     | `any` | Any `value` to check |

The **return value** is a `boolean` indicating whether or not the `value` is `undefined`.

[Example usage on playground][is-undefined] | [How to detect `undefined` type][detect-undefined]

----

### isNotBoolean

Use `isNotBoolean()` or `is.not.boolean()` to check if an **unknown** `value` is NOT a `boolean` type, NOT equal to `true` or `false` and NOT an instance of a `Boolean`.

```typescript
const isNotBoolean: IsNotBoolean = (value: unknown): boolean =>
  typeOf(value) !== 'boolean' &&
  typeof value !== 'boolean' &&
  value instanceof Boolean === false &&
  value !== true &&
  value !== false;
```

| Parameter | Type      | Description |
| :-------- | :-------: | :---------- |
| value     | `unknown` | An unknown `value` to check if it's NOT a `'boolean'` type, NOT equal to `true` or `false` and NOT an instance of `Boolean`. |

The **return value** is a `boolean` indicating whether or not the `value` is `undefined`.

----

### isNotDefined

Use `isNotDefined()` or `is.not.defined()` to check if an **unknown** `value` is an `'undefined'` type and is equal to `undefined`. The return value is a `boolean` value.

```typescript
const isNotDefined: IsNotDefined = (value: unknown): boolean =>
  typeOf(value) === 'undefined' &&
  typeof value === 'undefined' &&
  value === undefined;
```

| Parameter | Type      | Description |
|-----------| :-------: |-------------|
| value     | `unknown` | An unknown `value` to check if it's an `'undefined'` type and is equal to `undefined`. |

----

### isNotFunction

Use `isNotFunction()` or `is.not.function()` to check if an **unknown** `value` is NOT a `function` type and NOT an instance of `Function`. The return value is a `boolean` value.

```typescript
const isNotFunction: IsNotFunction = (value: unknown): boolean =>
  typeOf(value) !== 'function' &&
  typeof value !== 'function' &&
  value instanceof Function === false;
```

| Parameter | Type      | Description |
|-----------| :-------: |-------------|
| value     | `unknown` | An unknown `value` to check. |

----

### isNotNull

Use `isNotNull()` or `is.not.null()` to check if an **unknown** `value` is NOT a `null` type and NOT equal to `null`. The return value is a `boolean` value.

```typescript
const isNotNull: IsNotNull = (value: unknown): boolean =>
  typeOf(value) !== 'null' &&
  value !== null;
```

| Parameter | Type      | Description |
|-----------| :-------: |-------------|
| value     | `unknown` | An unknown `value` to check. |

----

### isNotNumber

Use `isNotNumber()` or `is.not.number()` to check if an **unknown** `value` is NOT a `number` type and NOT an instance of `Number`. The return value is a `boolean` value.

```typescript
const isNotNumber: IsNotNumber = (value: any): boolean =>
  typeOf(value) !== 'number' &&
  typeof value !== 'number' &&
  isFinite(value) === false &&
  value instanceof Number === false;
```

| Parameter | Type      | Description |
|-----------| :-------: |-------------|
| value     | `unknown` | An unknown `value` to check. |

----

### isNotString

Use `isNotString()` or `is.not.string()` to check if an **unknown** `value` is NOT a `string` type and NOT an instance of `String`. The return value is a `boolean` value.

```typescript
const isNotString: IsNotString = (value: unknown): boolean =>
  typeOf(value) !== 'string' &&
  typeof value !== 'string' &&
  value instanceof String === false;
```

| Parameter | Type      | Description |
|-----------| :-------: |-------------|
| value     | `unknown` | An unknown `value` to check. |

----

### isNotUndefined

Use `isNotUndefined()` or `is.not.undefined()` to check if an **unknown** `value` is NOT an `undefined` type and NOT equal to `undefined`. The return value is a `boolean` value.

```typescript
const isNotUndefined: IsNotUndefined = (value: unknown): boolean =>
  typeOf(value) !== 'undefined' &&
  typeof value !== 'undefined' &&
  value !== undefined;
```

| Parameter | Type      | Description |
|-----------| :-------: |-------------|
| value     | `unknown` | An Unknown `value` to check. |

## Guard

### guardArray

Use `guardArray()` or `guard.is.array()` to guard the `value` to be an [`Array`][Array] of a generic `Type`.

```typescript
const guardArray: GuardArray = <Type>(value: Array<Type>): value is Array<Type> => isArray<Type>(value);
```

| Parameter | Type          | Description |
|-----------| :-----------: |-------------|
| value     | `Array<Type>` | A generic `Type` `Array` `value` to guard  |

The return value is a `boolean` indicating whether or not the `value` is an [`Array`][Array] of a generic `Type`.

[Example usage on playground][guard-array]

----

### guardFunction

Use `guardFunction()` or `guard.is.function()` to guard the `value` to be a [`Func`](#Func) type.

```typescript
const guardFunction: GuardFunction = (value: Func): value is Func => isFunction(value);
```

| Parameter | Type            | Description  |
| :-------- | :-------------: | :---------------------------------- |
| value     | [`Func`](#Func) | A [`Func`](#Func) type `value` to guard |

The return value is a `boolean` indicating whether or not the `value` is a [`Func`](#Func).

[Example usage on playground][guard-function]

----

### guardKey

Use `guardKey()` or `guard.is.key()` to guard the `value` to be one of the `string`, `number`, or `symbol`.

```typescript
const guardKey: GuardKey = (value: Key): value is Key => isKey(value);
```

| Parameter | Type          | Description |
| :-------- | :-----------: | :---------- |
| value     | [`Key`](#Key) | A [`Key`](#Key) type `value` to guard |

The **return value** is a `boolean` indicating whether or not the `value` is a [`Key`](#Key).

----

### guardNumber

Use `guardNumber()` or `guard.is.number()` to guard the `value` to be a `number`.

```typescript
const guardNumber: GuardNumber = (value: number): value is number => isNumber(value);
```

| Parameter | Type     | Description  |
|-----------| :------: |--------------|
| value     | `number` | A `number` type `value` to guard. |

The **return value** is a `boolean` indicating whether or not the `value` is a `number`.

[Example usage on playground][guard-number]

----

### guardObject

Use `guardObject()` or `guard.is.object()` to guard the `value` to be an `object` of a generic `Obj` type.

```typescript
const guardObject: GuardObject = <Obj extends object>(value: Obj): value is Obj => isObject<Obj>(value);
```

| Parameter | Type                   | Description |
| :-------- | :--------------------: | :---------- |
| value     | `Obj` extends `object` | A generic `Obj` type `value` to guard |

The **return value** is a `boolean` indicating whether or not the `value` is an `object` of a generic `Obj`.

[Example usage on playground][guard-object]

----

### guardObjectKey

Use `guardObjectKey()` or `guard.is.objectKey()` to guard the `value` to be an `object` of a generic `Obj` type that contains the `key` property of the [`Key`](#Key) type.

```typescript
const guardObjectKey: GuardObjectKey = <Obj extends object, Key extends keyof Obj>(value: Obj, key: Key): value is Obj =>
  guardObject<Obj>(value) ? isKey(key) ? key in value : true : false;
```

| Parameter   | Type          | Description   |
| :-----------| :-----------: | :------------ |
| value       | `Obj`         | A generic `Obj` type `value` that contains the `key` to guard  |
| key         | `Key`         | A `Key` type name of the property that the `object` contains |

The **return value** is a `boolean` indicating whether or not the `value` is an `object` of a generic `Obj` containing the `Key`.

[Example usage on playground][guard-object-key]

----

### guardPrimitive

Use `guardPrimitive()` or `guard.is.primitive()` to guard the `value` to be the [`Primitive`](#Primitive) from a `type` of the [`Primitives`](#Primitives).

```typescript
const guardPrimitive: GuardPrimitive = <Type extends Primitive>(value: Type, type: Primitives): value is Type => isPrimitive<Type>(value, type);
```

| Parameter   | Type                                     | Description |
| :---------- | :--------------------------------------: | :---------- |
| value       | `Type` extends [`Primitive`](#Primitive) | A `Primitive` type `value` to guard |
| type        | [`Primitives`](#Primitives)              | A `string` type from the [`Primitives`](#Primitives) to check the `value` |

The return value is a `boolean` indicating whether or not the `value` is the [`Primitive`](#Primitive) from the `type`.

[Example usage on playground][guard-primitive]

----

### guardString

Use `guardString()` or `guard.is.string()` to guard the `value` to be a `string`.

```typescript
const guardString: GuardString = (value: string): value is string => isString(value);
```

| Parameter   | Type     | Description   |
|-------------| :------: |---------------|
| value       | `string` | A `string` type `value` to guard |

The return value is a `boolean` indicating whether or not the `value` is a `string`.

[Example usage on playground][guard-string]

----

### guardType

Use `guardType()` or `guard.is.type()` to guard the `value` to be the [`Type`](#Type) from a `type` of the [`Types`](#Types).

```typescript
const guardType: GuardType = <T extends Type>(value: T, type: Types<T>): value is T  => isType<T>(value, type);
```

| Parameter | Type                        | Description |
| :-------- | :-------------------------: | :---------- |
| value     | `T` extends [`Type`](#Type) | A [`Type`](#Type) `value` to guard with the `type` |
| type      | [`Types<T>`](#Types)        | A `string` or generic [`Constructor`](#Constructor) type from the [`Types`](#Types) to check the `value` |

The return value is a `boolean` indicating whether or not the `value` is a `type` from the [`Types`](#Types).

[Example usage on playground][guard-type]

## Common types

### Constructor

```typescript
type Constructor<Type> = new (...args: any[]) => Type;
```

### CycleHook

```typescript
type CycleHook = 'ngAfterContentInit' | 'ngAfterContentChecked' | 'ngAfterViewInit' | 'ngAfterViewChecked'
  | 'ngAfterViewChecked' | 'ngOnInit' | 'ngOnDestroy' | 'ngOnChanges';
```

### Func

Function type.

```typescript
type Func = (...param: any) => any;
```

### Key

Name of the `object` property.

```typescript
type Key =  number | string | symbol;
```

### Primitive

All [`Primitive`][Primitive] types.

```typescript
type Primitive = bigint | boolean | null | number | string | symbol | undefined;
```

### Primitives

All [`Primitive`](#Primitive) types as `string`.

```typescript
type Primitives = 'bigint' | 'boolean' | 'null' | 'number' | 'symbol' | 'string' | 'undefined';
```

### ResultCallback

```typescript
type ResultCallback = (result: boolean) => boolean;
```

### Type

Main types.

```typescript
type Type = Func | object | Primitive;
```

### Types

Main types as `string`.

```typescript
type Types<Obj> = Constructor<Obj> | 'function' | 'object' | Primitives;
```

## GIT

### Commit

* [AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)
* [Karma Git Commit Msg](http://karma-runner.github.io/0.10/dev/git-commit-msg.html)
* [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Versioning

[Semantic Versioning 2.0.0](http://semver.org/)

**Given a version number MAJOR.MINOR.PATCH, increment the:**

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?
>The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

>If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © angular-package ([license](https://github.com/angular-package/type/blob/main/LICENSE))

[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[Function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[Primitive]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

[new]: https://img.shields.io/badge/-new-red

[type-npm-svg]: https://badge.fury.io/js/%40angular-package%2Ftype.svg
[type-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftype

[cd-readme-github]: https://github.com/angular-package/change-detection#readme
[prism-readme-github]: https://github.com/angular-package/prism#readme
[property-readme-github]: https://github.com/angular-package/property#readme
[ui-readme-github]: https://github.com/angular-package/ui#readme
[type-readme-github]: https://github.com/angular-package/type#readme
[type-readme-npm]: https://www.npmjs.com/package/@angular-package/type#readme

[are-string]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAkgzgZWAJwJYDsDmUC8UAUAbgIYA2ArhAFxTHogCUuAfFCRdKnFHChpgG4AUKEhQACmgC2qYKkIRueAOQAjVJgzBlUAD5Q1Ae0OkIdHfuXpyU1RGQWDcELZOPlvNFnfl0AEwgAMwwIP2VhAGNDdF4oLiQvTBp4BP5cAnZKGjpGGkzObk80nFZ8uJjgOgiIQ0CoVKw9fVEaurKcDqc+b0jo2IiACwgIgGt0-BaaSVQZOQU4ABooADpV4mRMOGz6BhpVY1M6FigAbyEoKFNgKGRFclJrvBRKYQurqCkIYAHDP2TEbqCc48ADuskGBBaTDOFwuEWIcGgHkByhon2+v3S8UBAigqluxBGr1hAUCxHuwDRXx+fixAMSuPxZiJwIAvsDAoZkAQohVaBsoLV+ZtocCLrc4BT0uiafh1pgGMSLqg6vgJVKOngyaREaLYbCmYSlVB2RdTTcvuRkOgLZKHsJWb0+esIA1sHh8KtlvKtrQdnsDmYbSUoINhiN8MjEsoll6fYqhEIAPRJqAANXWqGIqlMcCEvNiCAAKgAlGAAOQA4gB9NMAQQAMgBVACi6WUDa5ECkcTAkqkAH5wvm+tdy02ALIAIRbJdrjdb6QATAB2J2xKcAeU3DZbdfL8+bba1ZER6+uTfLABEWwAxCstq+H1vVosAdU36V8pJCfmE70vG973LR9nxbYQRxiEwIGWUhDEwOVbjdfBALvB8n3rI8lmLMsqzApZx2nWd8KgLcdz3A9MNbBhFSgFMoG1RFILgaDYPgxDXUBfAcIrGsqJbbDS14sCaNxejnggZjWLghCXWQni8P4wTcL4hcBNI7dd33ETaPoxjJILaT2LkriFNUrCNPI7SlPqITFLU0S6NTfSgA

[detect-bigint]: https://www.typescriptlang.org/play?target=7&jsx=0#code/MYewdgzgLgBAQgSQOIIHIBUBcMCGYCeMAvDAJwAM5A7AIymkBMArACxUvn01gDcMMAegEwo+AA4BTEADNiREgHIARgEsA5irBQFAKFCQQAGwkA6QyDUAKAAaIUGEeKmz5JACQBvUZJnxkadABfawBKHj1wCCNTcytbfwdNaDxgZ3h1BC1rABo-e3QYJKgUtLgMrTCIg2MzCxs7AMLIYrBU31QAVwBbJQkAJxy8xqKS9u7evsr9KJrY+oSCkda0gHklACsJYChBhsTm0dk1ze3KqpmYuutQ8OnYPfQAfTQAZXQAQVQAYQBRbDxCCQympMlBLAoKNQ6IxWOxOKQaAowoJhN40q4YMp1JptOdorU4g9nqg3p9fo4fC55DBPGjfETXh9vj9glNIvi5vF8sTScymsllvTyjtcgySUzyUs2rJgaC2dVLoSFjyJT9+S1pTBOj1+rtlYyyWqpWltRN5RcCfNuQa+cbfMctiKhhgVYb1YcYA7TuEgA
[detect-boolean]: https://www.typescriptlang.org/play?target=7&jsx=0#code/MYewdgzgLgBAYgQQDIGUCiAuGBDMBPGAXhgDNsAbCAUwG4YB6emKPABypBKMOIHIAjECHJVcvAFChIwqgDpyIAOYAKAAaJUaZmw5cexACQBvFu07xk6AL6qAlDUngIM+UrUb0MAJaQouYLowAEJCIriqADQWmt6+-oEhMrj2jtIirirqllo+0PHmAPL8AFZUwFCR0Z65fmABhSVlUCmpzukKmXYOUtAwACoASgCqmDj4RMwATgCutAxMpoH6MAKhomASPS4daoMj2mZ6PDDGi+Z7aDYpW+1uqhexeXUJa+FRDzX5XIlhYNdO2zuHzizwapXKlWBT3qXCK4OaDlagM6-18VTQAH0AJIAORQfQQOIAwqNcARiGAqAB3YKvMDKMiUKj2eaPWow2lJMBI26ZDyY3H4wkkg5LY6nHTmfnYvEE4mXLo8uQ7LKaGVC+Vsr6c36VaWCuUiz6g7501FtZV3fWy4U5EEcuFNPXZdWGu3QwKO8otG6WlHdJywC6u21YMkTSk0n7rZRQGbMuis40c6O4JUZXbDAU2zVnI6GEySrjBg22q4BtJ+zMjEOa5MvLmQrO1o32hu-c3I6vZjWtj1gp3vZuluttgfehxAA
[detect-function]: https://www.typescriptlang.org/play?target=7&jsx=0#code/C4TwDgpgBAYgrgOwMZQLxQBQDodgIYBOeAtgFxR4IgCUaAfBVQNwBQLSA9ggM7CwCqAOQDCAFQCSAeUHl4yNJgAe5BHGIAjCAQA0UEOV4EAlggDm1cpRD0oiqAGo9rTjw4AbCFjcdTGAAYwQmJSglCgkBwAZmio6ADkACQA3uEQUQIiEtIAvnF+utTOXNzunt6+AUFZoSa8lEhp0XJIwEZc+RnB0lC1wPWNsIgtbQjU7MWlXj7+gZkhPTx9yAOS6gBWEC0ds101i-3pqxstY0A
[detect-instance]: https://www.typescriptlang.org/play?target=7&jsx=0#code/MYGwhgzhAEDC5WgbwFDWgD2gXmgVgG41oBPHaAAwEIABAYgBIBSAPQDIAqACgEowAjYABMApgDMA5gAsAlgCsA1iAC2AOwD2ABwBOEAC4BXAO4kAXhSIBfFMHWqI6kCIB0IdRK4V4kGHpKaRdTEcbFwGJD8AoLgECEsKHiJbe0cXNw8vWOgZez0wVWBA4O8oCgAaGJ9s3PzC6JKIRJs7BydXd08G6v1aougAMQMCvRk7csrEHJ6CvsHh0dUm5Na0jsyqqbyZ6IB5fjkRYD1xrs3e3f3DvSbmlLb0zwSklr04ABkAQQBlL4B9AEkAHJfAAqH0BsAAogAuaD5Mi4VQiIwTCC8AjQAD0mOgkT6oVwAHJ1JcjoTbit2hlYJ8fgDgWCIZDcf58aFoOE8fVaX8gaDwVD4ksWqkqZ0efT+Uzuls6sVYicJXzGVCZed5T5hXdVtSlQyBcyzttgnMjgtFd9efrpUa5QMhma7FrKQ8vHqparbX09gcjha6cqDWrjdAfVcmkA
[detect-null]: https://www.typescriptlang.org/play?target=7&jsx=0#code/MYewdgzgLgBAcgVQDJIFwwIZgJ4wLwxgCuANiQNwBQokIJApgHQkgDmAFAAaIoxTYAHeiABm+PAQDkAEgDe-IaPjIkAX0mcANDACUVGhDpMWHbipgBLSFCzBhYgGJEwwKBfBblvK9Fv2YTi5u4HrU4IYMzGxcPEiW1n5KcEQAtgBG9ABOnrHxvi7+yelZoQZGUaa5PjYFSgDyaQBW9K455tWJYg3NrqXh5SYx7Qm1Yslkbd4jdkoAylCZVqyhQA
[detect-number]: https://www.typescriptlang.org/play?target=7&jsx=0&ssl=16&ssc=46&pln=16&pc=75#code/AQYw9gdgzgLsByBVAsgIQKICUBcwCGEAnsALzACMADAMyUAslArJQNwBQ40YANgKYB03MAHMAFAAMkaLMBiEADrzAAzUiTIByACQBvOYpUIUGTAF8N4gJTtOUHgKFjJxmQEtoMAiCWqAYgFcIEBhXSHEAGiNpTGB3WC8fYACgkMhrDkg7PkERCSkTWI8Ew3h-AFsAI14AJwiogrjPIMTSypr023scp3y3IubDAHkKgCteYLremMbi1WGx4OtgNgyubMcJKxtMuCmAfQBJeABlABUAQXgAYXRcAmIyVqrq0SpaBmYOzK6N52jDk4Xa7oWQKRLqTS6fQtFyYAFnS43cxbVZZBy5P4meFAm6FeIDPyBYKhCCTWHYxEgmYEpJE1IQL5rdE9clHBHAvFNbwlcrPMn-Nk4qn9bmqJ7tbZM7p5VmAymc2bAebjGD8rGC+XU0VK0Yq9Kon4YlG2Xbk+DoADqFOBdyIpGAEF4AHcELyaq8aPQmJRGWjpZisHtzVaNRzoYYIcBtHowSUzZbrUiLL7DSz-sHE8L8drksSwpF9hnQ7itYlc-SU+sMYWE8Ws1yWm7agX4yG5RzSzy2tVK8yZena+2SyLEsqJi2B232cPs6PdYt2EA
[detect-object]: https://www.typescriptlang.org/play?target=7&jsx=0#code/JYOwLgpgTgZghgYwgAgPICMBWEFlSFAb2QA8AuZEAVwFt1oBuZAXwChRJZEUNtcAVAO4B7ZMXLIAzmCigA5kwCeFanUYtWrBMJDS0AIQBSAUQDC-APqoAcsYq8ceAsgC8Y0hQDMABl8sGWjqSwgA2EAB0IcJyABQABqhGZpY2xshgigAOEMIwri5uAOQAJIQZ2bkGJuZWtsyFcQCUAdq6oRFRsQlJNanIoNJwIEiV+sLtQ3EANFXJtWkDYEMjeWMTIM2BbWGR0fGJ1Sm2-bpLwzl5AGJUw2DAOtOzvceLyxfI17f3Gy1B7btdA5zPqvc6Vay0ehQR5A54LU5vcGQ6CbVrBHadfY9I7wwZgvIOXAw7HzE54lZoLCOZrILbojp7bqHUmgikAZRk8mJzJBCPxyA5shAclRfwxjNhOLJZ3ZijooW5wJefNl8pCmzp-0xcSav1OT0s-AA6qh7FSBCJXO4JIV8CghKJ+AALKAQCCFGbKZAARl8fn8mvFgJJxtQ6Sy7wKRVK5XekosofqusDDODzND0sRq3GYUmM3jGdZ7zWuZ+KYBWPTJsz-M+uG+ipqhZV7zrdx0ou2qcrc2b5PeELU0PzIerRaRQ879IrTN7Y5blUJYEbhvn-cX5rANPL2oLa5l70FXJHVbD47yR+FU61EtHZ4XF7l6AVJ7n9-Xj7VGrRN66ybRYAGvMFi2EaVoEIIlJ8GAMTxqk15BvEbIAJoALL6KgAAyIEAKrocYABK4YVHkUbICUZQRouJKpCBxhGkmCHdrOcJ0WB57ICWEB5kBtGgTWFJcUMTEznBthsQJrY3PWDyvqx-EcW23wibuNHiQpD7IIOUIrsBGkflpyJQCpt48up9GSRu0G6XxFkcUu24-ohLE4hJHGXnINnmexmkeSZaZKsYbm+U+L68d5lmfs+6oBDujL-kEgF7qgEluBBUGOLBd7+T2TYmhJsaVGRFGFQSd5sYxerTqpp7BQZQkgLpoZ1Qeow5txZZOcxyUtVmHzSe2jVyauKX6a1VwDcpVW-rlI29fy2nQE1+VjX1i3GdNzk9at-JLsto12ZpDlMHFAV5QdPkGR5+3zeynJXpt3XlTtqrRTdL2HqFMWaEAA
[detect-string]: https://www.typescriptlang.org/play?target=7&jsx=0#code/MYewdgzgLgBAygFQEoEkByBxAXDAhmATxgF4YByAQgAEBiAEgFIA9AMgCoAKASlwCNgAJgFMAZgHMAFgEsAVgGsANgFswIAA4AnaAFcA7gQBeZANwAoUJBAKhAOgUgxHAAaJUmGFAJqhIESWKkZHQA3p7evvDI6BgAvmROXGYWEFa29o4uUe5SkFD4wD5+AGLaYMBQUuBOADSRbhgwOdD5hTAlZRXgiebgKdZ2Ds6u0Y25LREA8rwyQuU1dSNNeWWtUzPliTA9lv3pQ1kNS+N+cFAaOWLzw9ljKxGn52Bi3dt9aYNOCUm9sNcYAProRAAQTQAGEAKI4fBEUgPC4cP7dZKpAYZP6AtAg8EQjxeVoBQIhMKtDFAhCgyFxL6vVF7TL1THYyGjZp3YqlcqVMBXA5Mik41nLAoRdpcrrfHbvdF88mU3FHdkwNazKC8xlywWKkV+FUbSVvNH7DVYgUs7Wks4XdXRfnyoXHeBWp4vFG7D405K-PloCEAdTtOOhhBIMDAQl0TsejiRBrpHwxvoDmpZJIihPIxPx9x9-sDVPiyN68ZljKT+YVtx1bU5nR5tUTeZTlbZ1bFdaLUqNDNt5ebDqVerVDdzydN9otk2mqs7hvpjbHzJbwst0ZtmH+ffHWqrq4u3SAA
[detect-symbol]: https://www.typescriptlang.org/play?target=7&jsx=0#code/MYewdgzgLgBAcgVQLICECiAlAXDAhmATxgF4YBGABgGYKAWCgVgoG4AoUSWAZQE1UB5ADIB9RKkw58RUlwIBbAEYgANgAox6DAEo2HCCoCmAOmUgA5qoAGvASI2YYUAgAcDIAGYlipAOQASAG8nVw8YGxQhUWRNAF8fSx12cH1lY1MLaz4Iu2iHAEtOfGA3TxQQQ3xLABowrMj7DBgC6CKSmDKKsES9QxNzK3D63MbmqFbQgDEAVzBgKDzwatrbKPERwtm26dn58G7k3vSBupy1po3i0LgpxQMAJyXB081zls2rm4V7-chD-syVg1XmN3p5+AoAFYGOaPE6rF6jcZgyHQqA6GBJX6pPoZJ7w-IXNpcKB3ApmWGA4bApFhElkn4pNL-PFAxGgsLyJTKCnZfHrN6XTyyRQqRKYxk4qwJXTJbgAFQwAEk4ABxSSEEgwHwAQgAAgBiPwAUgAegAyABUqi0uAUwAAJgZ3GYABZ5CEAa2UcjAIGcd2gUwA7gQAF4+GWcZa8rgK5VqvAamSclSqWNK1UMv64uHp+OOFxtby+QLBIm5uOquLS8XZ44rPOq6nsjqpSo1PGNlXNwXtcptrqRiVHAExyvdtm97ZzBZgHmRLs9rYzGd7Id10cL8dLj63B4disZieE3dfO5Z7EjzvbydtcFQmEHhs3k-Ih9o9eX5mH-O30LE0kwHJJ8xyPHchTpICLyZHNnzAv8hRTbkQK3eDXw5EVlESIA
[detect-undefined]: https://www.typescriptlang.org/play?target=7&jsx=0#code/MYewdgzgLgBAqgOQCIFEBiBJBKkC4YCGYAnjALwwCuYAJgKYBmAlmHTQNwBQokIANnQB0fEAHMAFAANEqTNiQwoxAA50QDcmQoByACQBvJavXxk6LDgC+2yQEouPCPyEiJ0s3JwwW0IsDUaaNTAUEzgkgA0prIWCj5QfgEwQWAhYWD23OBOAsJiUjLm8t6QCalJCJQAtgBGdABOkdFFXvGJJpW1DZmOznluhZ5xpe0aAPI1AFZ0IU2DsSW+5SYT0yH2MFm8ua4FHgttyxoAylD1LKJz+8WH-ian52CimVs5LvmSdlwCsGAgUEhGCw2PgiMQHNk+rtJH8AUDWDRFCoklodAYjElYYDmAjrF9XlCPlj4WxFmU7oFgqFwlFiTjSbckik0uAepCdkT-tjgYjGR1qnVGrSuSTeSMjjBOoK2dt3m46TyyaMYKsZlAmgqEUqJar1hDZf0pJqGeKKTAHhcNSL6WKlmaLU9MkA

[is-array]: https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBFCeAHApgeQGYwLwwBQDcBDAGwFdkAuGQseASiugCcBLMAc2wD4ZUAjAFbJgUAHSImIKFKTJR0gMpRWHUcBLECJcnVERiLYMlwAOADQwAtAEZd0gDIgA7siYBhQhGN0A3ACgEFBgABVYAWxYoFnxkbBg+EBBiZBoYAB94lnY2WAywUmJidJh8sL5XYuY2TgyIeDKk4tIwABNkdDZkFv9A2IBJCABBJiZCeDitMkpqWjpuGCIpmBYIGGHR+AAeGnguf1BIWBX1saoBk-GcTYAVWS5J8iodhgXtWJW1kbGbu+4-GDgsgwD2Qcyw4JgAHJCF94JCYAAyBH-T4bUTHWEgsEQ5TkRHIgGLPFsaA0IwgTAXbA4ph4pEo3oU15LcE4SEgQTCKCQ-bgaAwBTXABKfQAcgBxOKQxxMZBhZaICCkMIAfh5fgO-NFAFUALIAIQAokK4gAmADsvMOMH1qFQ9kNg1FcXQJC8Vv52tFABFDQAxMWG71xZptDpgLoe2CDIVCwYATUFIolVAumyqHB4OAA2tDIRZIXx81DgJCALpRtaxhM6g3G1OwzalcpMLMwbPWCymiwAZgrGr50er8eCIt1fWufQAaoaGxtNqEWBEojE29moRn2MWLRZcbF+5rYAApBSoUUAfSng3s2sNcQA3uhElRrKaewBfD1JOTEEDsXAAAZJmK4oARYGIbLgwESnQvgwAA9PBMCusQXgDpA36iL+-4AbWRpCmByxDJieHGrBPgIUhKFeDA6EQJh2GAba9qOqKhEQWMuDMQ6TrkZRyFusgdEMX+gFer6AaikG7HEZB4n+oG3p8YhAmoUJmoiThMZxomwogTJFy4NpCbQeKylIXuwnJFhokAcZ8akQR4GyZx9mOeZcC0upfKaYB9mjn046TjOBmYv5Y4TtOhoeZZGnWYxAEnmel7XreoWQUlF5Xje0VwSp1FCUAA
[is-bigint]: https://www.typescriptlang.org/play?target=7&jsx=0#code/MYewdgzgLgBFCeAHApgeQGYwLwwBQDcBDAGwFdkAuGQseASiugCcBLMAc2wD4ZUAjAFbJgUAHSImIKFKTJR0gMpRWHUcBLECJcnVERiLYMlwAOADQwAtAEZd0gDIgA7siYBhQhGN0A3ACgEFBgASQgAIRZ2YLBYHC0ySmpaOm4YIgSYFggYPki2KH9QSFgsiKiYqlCy6Ni8dPIqGnoqeuRM7Nz2fO4-GDhZDHidbCwcAHJO-LGYADIZ3v6UEExWkfHJmLHC8GgYBQAVACVggDkAcWwYMccmZABbTMQIUjuAfi2-It2TgFUAWTCAFFDpcAEwAdm2xRgYVQqHsgIAgidLugSF4obswsEzqd9pcAJwABiJ4OsBIJoIArAAWcE0okU6xgTEgYhyYggdi4AAGB2O5x5FlKkRquH5pzOdF8MAA9LKYGjiF5Pjs2RyubzfgDgUL2tUYrhtUDDtKfHKFUqVV91aJOdyebD4UiTnqReUoLgnQjkWaLYr0chVZBbfbedjcSd9m7wqLDRG8X75XAmOQ-EA
[is-boolean]: https://www.typescriptlang.org/play?target=7&jsx=0#code/MYewdgzgLgBFCeAHApgeQGYwLwwBQDcBDAGwFdkAuGQseASiugCcBLMAc2wD4ZUAjAFbJgUAHSImIKFKTJR0gMpRWHUcBLECJcnVERiLYMlwAOADQwAtAEZd0gDIgA7siYBhQhGN0A3ACgEFBgASQgAIRAQYmQabDwiMkpqWjpuGATyGBYIGD5I6Jp-UEhYbIiomLAqUPKCsDitRKoaeioM5CycvIrYrC4-GDhZDEadbCwcAHJuusmYADJ5gbxlwdxVwaGUEEx28amQQWEoOcWNwb22aBojHZhayv24Jkyzzc3LkpvkO-4hESeynIGzoGwAPmCNut3hdtB0rlBvncHr0JjB0CQvAsljD0nCsl8wLdMH9jk8McQsW8YYEfrt8RMpjNKqccTDRh1Gc9MhC8YlyZjkKD3sKYL4-MVoDAFAAVABKwQAcgBxOKTRxMZAAWyyiAgpC1AH5JkVwFLFQBVACyYQAonK4gAmADsppK91QqHstoAgoq4hSvG6pWFPd6-QB9eUW21xIHIYOwUNe32KiNK2V+tyxnBgZBOe75Sq4QNC4MVUTEEDsXAAA1lCpVtYsZSLNFwDaVyrovhgAHo++jBRKzRWqzXa5abfbm50UWBcFO7XKez5+4PSyPIGPq3Xk+HFbPWz0F-vU6v19zkFuIDuJ2fI9HbUfwm3T2HU1G5TGLwOrze7z3D9IwzGUs2fFtXxPXAHzTUDwN-Qd4z8IA
[is-function]: https://www.typescriptlang.org/play?target=7&jsx=0#code/MYewdgzgLgBFCeAHApgeQGYwLwwBQDcBDAGwFdkAuGQseASiugCcBLMAc2wD4ZUAjAFbJgUAHSImIKFKTJR0gMpRWHUcBLECJcnVERiLYMlwAOADQwAtAEZd0gDIgA7siYBhQhGN0A3ACgEFBgAMVIwYGw8UWjEQiZCAFsqGnpualp-QOQYAEkIUPCoFnBIrTJKdNSsHiJymBYIELDgf2BiT0a3dohGgG8YAA9IgFYfGABfP1BIWAaCkWKwKjz5opKcMvJk2gYYWvJ6xvm0rIxN5DpsLBwAcnRmtbAbmAAyF7hZEEx97Ovb+8Ki2ebz22mybGgNCMXyagPW1zgTAOIJ+9RmUOQMP4QhEVxwynIrXA0BgACFUKh7ABRACCADlIgTkESZmScgBxHJ0gAqkQAnAAGAUAdmsfL5ACZhgAWYXSgXi6xgFkkukAVQAsqSqQAlSLWCXClWwBTcnVc9mRG4a+AwMCkBJ8VyHG7GkJquluKjHDYDKj2x2uXYpNL9JjIKCkJhgQYwADUMFGEymxNgXNN9LcVMiYGQThgXQ6uF8KcgIGIcmIIHYuAABoWerWLHMHotcA2IHRfDAAPQ9xHkUsQcuV6u4G6kjlc7k3Zv5VvgXCTzk8rtjPswdAkLxDkeiKs1icU6n02eHVZt8mU2l0te9-tb4g76bDiv7sc3dVa3VnltwsC4F+2o6neG6Ps+xJ7ge46muadLsr+87-rgsEWqBD7bsgu5vtBtbBB6bhNueC4AfhnroQOWEvlBH7ptymZUohF6LnRDEUeBVGQThY61sWaTDERf4LIufHVImFFMkAA
[is-instance]: https://www.typescriptlang.org/play?target=7&jsx=0&module=6#code/PTAEBUE8AcFMDoBQAXGtQGED2A7AzsgE4CuAxsloQDxRwB8oAvKDrAO6gAU8PAhoQHM8ALlC8ckANoBdAJRMGtWAG4UaUAEk8AMWI5yAS1xMuAN14AbYrFHjI8xg3NX0BvFx7xo-XgFtbEg4MdqqocJp4GvjI4qTozFQA8gBGAFZ0nM7WAZAANKAG0bE2mLgEJOSUSWl0QaBZru4pqaHqWgDKRIUCJpmW2WKBCvX9jaDl3a3hWs2w5CbV6X0uOfkA1rCQAPyiEzgCdQ0FTWmqIKC6+shGOEikZcigYbCJAGa9DTmyu137w7PkLyELAUZ7wCidQjdeCkSwWZbWWTwPAWAxxTgADnyAFoAIxIigAGSwbFghAwvDwsE4slU92ix0uhlwoi0TOuxmYCJKdm+Ixcxw8PG8hD8X2GdmGzze3IcjGYAHJXnpmTgFaAAGQap5oLDvI7yxXKq43dVa-nWApFfSwPUXFUcnBMeVPEjoc1HQoEYp2gGPQ2u6x0h7HSHdVl4MN-LmfQb2USe9x7HqOLjPO0Gl0KrBpObIM3az3WuK+3PzD2jK3em12qMHUAAHwbOrgGcrAYVyYVwYZbj9Eb9C2aJhzqTzGVjdnWmx241+BwTlbcoGHjkQoDTaBlDTlitHeYLLdt+vbWf35EPRerJfeg4DRER643oC2ofnnA29ifz5foE-VotWBv1AUQHyAjdRFeSwqR7Ahjiia8Si0BCYhtIcam5VYq1QuJRGwaIKgoahmlqRcBWXVc6CfPsy2QRYJ1GeQtmAtx2RuTgvRw2AmOAjcry4u1OOKZ1mDAzVtTcOsOOLBBoGBUE0BhB5CMoeAcD8bjgMg6DwJA0AoIsGDEEQUgLEpdx2iwXxYAwMy8HcABvUAAA8TFxAAmAB2ZRQAAX1AUzzIgNgsFsoKnMgEwFWJQhYF8ApoDwYhfG7PzjPOAA1fgDF4ZILFgPATJDdpwAAJQ0AA5ABxAB9DKAEFCQAVQAUSimK4oSpLfC2VL6TgiqmoAWQAIRa0q6sa1qTC8nz+seEbEkSQkWvqirJuatrmAMmCApDJqKoAERa7RKpaw6NtamrwAAdUSEw9AAE1gV5ClgR7VHyx4DuO06KvOy6Wtgx52kSIaWowQl6vadoTFYDhLOssL7JpOaQ1uxJIeh2HmHh4LQrsvBUeM-qsHy+ALCwAQOMiGSqERmzCYyDGsZh-IGeRvBZFpUBzh2oDSfJynqbcFDinpqzGfMjJQfB1n2nZyXOe5nzzjAor8DJhBhZpsWbQlpGmc4FmobZ-HlZ5tW3UQIA
[is-null]: https://www.typescriptlang.org/play?target=7&jsx=0&ssl=11&ssc=21&pln=11&pc=33#code/C4TwDgpgBAkgzgOQK4BsVQLxQBQDcCGKSEAXFPgHYgCUmAfFAUdAJZxQWooDcAUAMYB7CnGBRQkAPIAzTDibEylGmVEAnFhQDm9KJIBGAKwj9gAOjBrBwa+AhmbAZWAbtZ-oRR5CxambgoLPwQ2AAcADRQALQAjH42ADKCAO4QagDC+HAh1HxCImJsyGhk8MXoWN7MSlTUZAqs7JxouhIQMlW+mBhYAOTNKL1QAGTD4naCsg3dfYJGJsBDo4w+0D1YA3nColCOACoASjAIAOJyvUlqEAC2UCxgcEjXAPy9WwVQCACqCQlymwJtmJvgBZABCAFEDnIAEwAdneOzBkkkCQhAEEEHJpIRsoixMjURiEAB9Q5fCFyFzEfFQQlozEk477THpSkbCDJOmCQQoCCUbA4lDZXKAkS8+woQRabAAA32R1OssiRS42AVxxO1FyUAA9LqoELsmK4BKzFKZbLvr9lXdEGrrQltdw9QbqRATWaLXLQZCDrbVWhsL6oc7XYbcR78qa+ebpXL6cSA-ag4nMWH9RHhVHtl747K06TyRDk+VsIWyQcKRmDUac+LY96CyiGaTmXtWSWVSmvBX252a1njUA
[is-number]: https://www.typescriptlang.org/play?target=7&jsx=0#code/C4TwDgpgBAkgzgOQK4FsBGEBOUC8UAUAbgIYA2SEAXFMQHYgCUuAfFCedAJZxS2oaYA3ACgAxgHtacYFFCQA8gDNcBdhWp1G1aZk60A5iyjy0AKwijgAOjCZxwe+AhWHAZWC6DV0WVJEyFAxWcKScohD4ABwANFAAtACMQQ4AMuIA7lgAwsRwEQwiElIy3MjoWNTwZQIq-hwa9AzUalw8fOXYOMzCULJOSnWBuDh4AOTtAqNQAGTTPQTzvdwAYnqcwBEtTCN4HhQzc729+ItHLVB60nTh4srVWMN4imR5B6e955fA1xC3xmYWGQ7KDPUivWbvPqQP7nYHjfhYUanBinAA+qNOJyORzkv2UsJGUFG4gBlimEOxHwCXGKPz+906hL20AplM+tNoN2UJnMlkeskwFGR8wKYkk0igACEYABxGAIAAqKgAnAAGVUAdgSyuVACYAKwAFg1htVOoStEK4pkkvk8hSAFEAIIIFSgvJW4pQBAAVQAspKHQAlFS6jWeiW+gPBgD68tcCpdWQdKloEHS3oRmHw+tFRQlCaD8plKlGaUwEBQFzAcFQAH5RhHxKRnKRxPp8AADaVyxWd2KlLP4HvyhUMApQAD0k5BLwgYqkzdb7a7tvtzoQ-YuiCHa8dLvHginM-d8-zS6sbY7najgaDW8HHXwt+Dh+PAqF55bl5XN-9d7jBAEyTB0Hx3J8XyDQDgIQZM32nD8z3FC8ry7QtizAhl8HQhAZXgk852EYQgA
[is-object]: https://www.typescriptlang.org/play?noUncheckedIndexedAccess=true&target=7&jsx=0#code/JYOwLgpgTgZghgYwgAgPICMBWEFgJLjTxLIDeyAHgFzIgCuAtutANzIC+AUKJLIiqjAALaBmy4yyAOY16TVh05gAngAcUAMTogEyALzIAFADpTquFDgMacEMoCU+gHzJbylkrUo8AZzE4wfWQAHjEnQwA3OAAbOggbOwAaZABrCGUAfhofMChQKUc9FyjYlGAfNCwPFXVkXwA5AHswerpo6KDImLiabRSQRoB3EEKXdEbG6IhbDwRGkBzkcqaWtuiaBubW9s6SnuQ+geH7GnHJ6ZBnTmRkGohUGC7SxwBCPQMAcnp2j+QAMj+12QexQbwM32is3mizuD123XirjsJ2QOTyICkzkq4jAxlUUGazS8xjAjQAyrl8sYEDFok84vZjD5osAkIYABzJAC0AEZGaSADJDaAAYTgPgghnsUIWgXKFPRmIM9MRbhRIKWFTR+Sxd0aMGBCP072QH21GI+MsW5X8uA2fiwASCoSw4RBCWUyTSmWylIx6qN5WxVxusMeIMKJo+jUduF+AKBeoNGvenxjOPjgJuGtAOVsSH12KdqduUDiQJuGU1Cvyhm9kYMuXLNxbyCr3qWlxTJqbKABRg14uxjKE4tQwwACgT1FAVHX0g3S82WzRe0CaPBohKPEDOAhouKKiLoU3cI0oCKDz4KuQKEEAKxsLhzWXIEWoepkgAqACUAKoil+qA-gA+iKAoAIJkmSQQgBAgxvieZZnheV4+FKVqBAAUmSH4gagABCWEAKKATQtr4IQfAkAYt40AAzIoL6LBof71CKNBaDonTULQjDMFAKJuFiFCYcgBGoKgArERB9RBL2O7MecxjRI0UiGAABsesrIaSqGHhpyQ2rGYDBNpaJ0Chl6HuE76fr+AFAaB4FQWS9jSsgAD0nlLhAe7QspqnqRpOF4YRJGAYZmoUaEwiiCZ4ShfU+FEaRX7uWw3m+f5CyBWpmmsexUXGTiwRcQg4SFSKGVeT5m4SjlPh5cFdnfv+gHAWBkHQQA2hQAC6xUOqV5mnnp1nXrZH5tY5nUudByQfBQHw1Vla5KVMKn5SFuHJeFaU9cog1GcNASxSIUAUYlu0pRFX6LcoK0eVl9V+RtEBbcFVV9cd0UmWV2gVYYVWLctq11TEDXvZ9mkSVJMn1ENMVuOEcPSbJ4PIK9nBAA
[is-primitive]: https://www.typescriptlang.org/play?target=7&jsx=0#code/C4TwDgpgBACgTgSwLYOAgbhAzlAvFAcgCMEBzBAO2AKgB9CiB7RgGwgEMKb6CKBXJEQhxuhLCEGtRBLMEQVS0vhQAmEAGaUIKggG4AUPtCQoASSwAhZm054oACnTsWfCAC4onEAEo8APignF2gEHCZWDgoDY2hzADkBITg7R2dXDy9fXACg1yhQqH5BYWjwWKx4ZFQMaHwAHgAVMr9U4IyKEAAaKBiPSpQ0TCwsnLSQnCbIUpNzAGU5SlIU3PdPDpHAsfycWXlSafLZiSYWZbH2n39N4O2ocUkWA7MsAFVVDS0VM7a1y+zrvIFZRqTQUbQGfQAY0YFFk2wsZFMVG+6V+3g8K1uJHIyP+MUY6gBtVw+GIZEo1AM0NhwHh1kiHnMVgitnwrVRmQxWwK4RsFCu7JCNM4kIgBKgzL5UAAZNKiflhRRReKAPJEABWEEhwF8tHo9kFeBJPTgeT18pJ+HUziwEF8sp6ZXFmMtDHpnAI3ipMLhoQSxTgjKw-qSKNWnPlBSKobxTsJLuNvESwhoAH5tgAxSioCCC3xcm6UWQisWEkPCGVyzFF4Al1UarXAb007bzPZBtuLMMXdGRnYLBQC-HxraugiMBvamgO6uK5WEtWa7WVyNz0tQTsKXX0YcWxO7RZ6KE+2mhI4PDvHVjdtEFwE7K+nWOQZ2j-ePo-U32vd6g7RBt4QU+G8I2rHBgQ+MEvn+BN8Agv8vgdXdYMIeDPiPY8W1CfpqkwIMcMGWooEaZpBQubpelgRABhqYY73GKBJlqAIAG99CgfJCXsM8B1IewYm8Xw2I4jisAAd1QSEAAsHAEqBhJEjjIXYW0GHJKgCA8OAIGAPg4H5UIEVIJFgDzAxFKUlToGId0uC0nS9IMyxbLM9iLOU1SkwDTSoG03T9O2cs4FciyoA86yDwUHy-Mc1teJC9yrLED97P8pzzxOBLFPC1Df3Q1LYtCQDIO0LKoAAXzcyqOJigLrRYW0DHKiEv1pCwVRVAAZABRABBOI7HqxrMLhCxTAAcVMOIGjsABOAAGeaAHYAEZZtmgAmABWAAWJadvm9aVqiEbaTiF4AFkLG6gAlOwVo2pbmzhWYGhuqbxrsAgLpAQpk2SUJPxPKAXjiAARbqMym7qwbsNCoOe2lZgATSurq7Ay1h7AIeHtE9Z6IgAOhYRg+IAAzGybprJ7psOo3CIDqbEKRaSmpoaboyRxahBN0KAAHp+ZNVwRqJknyfarq+riGntgImo6ki0hWY6nr+s53lIk9L0BaFuQRa-MXSfsMnzqu27ZbpqpCLqaNhBaM3rpuzm7ZEXndeFiBRbYYnjbJ173ricbLYqembaVloA4+zmle1vnBc972IF98mUbRzqQ-lzBFcfSPUfazqY4-d2E-1r3DZ98WTdBiGobiGHM7DhXcZUFoa8h6Gwc5lu449svDAr5Oq9Ny6ncb62FeZqgHdH26NfUnmdYToby59I3ycdi3adDifs4j+xN+dsReN75ebVX2F15NqOg-Hmjs81zhI7e6O3RZLgS6Flek5T6+X9v7eWdGau2foHcaLt-qny-uffQQA
[is-string]: https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBFCeAHApgeQGYwLwwBQDcBDAGwFdkAuGQseASiugCcBLMAc2wD4ZUAjAFbJgUAHSImIKFKTJR0gMpRWHUcBLECJcnVERiLYMlwAOADQwAtAEZd0gDIgA7siYBhQhGN0A3ACgEFBgASQglFU4cLTJKalo6bhgiGJgWCBhmNnZ-UEhYNPCsqlDCjmw8ZPIqGnoqSuRU9MyyrC4-GDhZDGidbCwcAHJm9gGYADIx9rwpjsDkEEx6vsGQQWEoUYmZpO0GtmgaIwXeNZFluCZyccmOjqX9qEP5zFLI-ovyKbopgB8fqdw23ueSex34QjO-Rw6BIXmuQN2qRBYCOL2UWXOMOIcK2t06KGOSyhMCG6I4Ay+-j8uWgMAUABUAErBAByAHFygNHExkABbVKICCkXkAfgGOXAtJZAFUALIAIQAoozygAmADsEryMHlqFQ9kVAEEWeUsV4tVLFQB1BnM9nlMDIJx0snsXBckA8-ksQXCmB8YiEIMACwGvj81MlIGIcmIIDdAANbay2QmLAVXbhk+y6L4YAB6fMfZCRyDR2Px3AJmUK5VpxqvXA1pWM3M+AtFs0lmnl0RxxO6-VGln1jMRXCDg3GtsdmBd0sQXv9qss63Z1PpsKZ1c2pkpmeFmAAEWQUHWMCcLCgwaRBxRzz8QA
[is-symbol]: https://www.typescriptlang.org/play?target=7&jsx=0#code/MYewdgzgLgBFCeAHApgeQGYwLwwBQDcBDAGwFdkAuGQseASiugCcBLMAc2wD4ZUAjAFbJgUAHSImIKFKTJR0gMpRWHUcBLECJcnVERiLYMlwAOADQwAtAEZd0gDIgA7siYBhQhGN0A3ACgEFBgASQgFeABbPhBibDwiMkpqWjpuGATyGBYIGAhI6OJ-UEhYbPComKpQ8oK4rUSqGnoqDOQsnLyK2KwuPxg4WQx6nWwsHAByToLxmAAyWb6BlBBMVtGJqZjx-z9i6BgFABUAJWCAOQBxOPHHJmQIrMQIUgiAfm3d8H2zgFUAWQAQgBRY5xABMAHYil9YADUKh7ECAIJnOLoEheaElGBnIEAdSOp0ucTAyCcB2UbHYuBuIDuDxYTxeMD4xEI7IAFuNfJ9sQoAJqAhFxGoxGkABVYRCgyG5Oz2MTkxBA1IABoTzhdVRYyvkxRrLnRfDAAPQmuBMci8iCK0TKtW-QEg7XtUWaR3A45Gnym83o4hea22+24VVwhHIs4u3VdXDhxEo72+mD+wMK4hKlWh3EEk6a6NhPXu-EGi5Js0pjHIIMZu1Z9WCuH2Atu3ACoX2cvm5TkIA
[is-type]: https://www.typescriptlang.org/play?target=7&jsx=0#code/FAFwngDgpgBAwgewHYGcQCcCuBjED0A8AKpFAHwwC8MSUA7jABQB0rAhugOYoBcMbSMAG0AugEoqFEtADcoUjAAK6AJYBbFSBUA3KCiowA5ACMVnFUhCGYAHyPGECADZQB1u4aSY1xqOndGKGA+zgGGaKpInGGYSAAmUABmFlBxhnLg0DAAYrHYBiysEBxsanwCYBKUFBUZCtJ6BADyxgBWFNSIqBg4eIQt7bZGiXlayGEIbVC4Acrqmjp6dVkAkigNBsSkZIzabE6YUOWCADQwmUcwDShb0GRVFHsHsCr6DXIWIH6JbNiwTSsYABvGAADz4Xh8fhgAF8PpZvr9-gDgTAwHwIhZOLC5PJVigAEJmFaWApPQ7HSqSGDkl76UzmSzLWBrAmOFwCMn7Cn8QQPGncukwBzOVxIZkwNa5JC4FTILnPSn82kwV45PIStYktACP6bAY7WmUs4WHUyy5dCK9fDNNr3akqtUDTUoABy3l86AVPIqysFqv0kM9LoG0xA+rtu0FxpgAGsoGAAPwYjBYv3PAMwZ14lkoADKqai3suvod-rVmKiLrzwQcTmLSrLGYrtecLoAqvEkik4g3eVTqgLm-pYglkrQ4rjsMg0AGiZwSSA+KziaTqFHFf2xHxHfSzJ9qRcEIkh4cqJRqCZ95Z0sBp905+yxcvCU-OeujVud+X6W+kNSNzPU0QF1KBjxgNlRU5AAyaDTxebpQPA0NcAkGw7EYQDYAvagelgdD4PPagficFAoAkWDzlIcCVRw+w-0MMQ5HvWdXmlWVkBfdixn-D9oy-Qi1XYw9qJPWiL2GUY5SQaxKMdRDzXA7jpJgOTywUv5kKmXBmJncNXm1EDzRfQzQIjdosJjYDQL4S0elwG0DW3QT9AGAD5LNTST2s81VLg14C0iThGB8v5mAgdAEDwC5mBY+y+mYJBSnIvyAxQkBbQs2kxCYu89IDd0oXQF9Cs9PtfW-YcaA9aFByPMT-Tozwav8GBEwDbILE0KAsIkSqgI0sCT1K6E1ObQatNaMNdIfV50pfdLzMNfiKjOeMkxTILnN3LM2hE6AaMaiTDEmKaZlSjyjK83azvDMazwAQgkrwnHrdqAsLYL1okdr1tVf8VT4PCYD4EiyJm1j80+l9Aqxcq+X6oVK2xQdGHqwimtOsNZLgy6kJPRb7oQzyhpgWGojQux0fEy9kdvOKAxrEInBh1t6z4zcKpcmAgmZ-bSZpwI2fp-LXk7McexfcXuwneHKkRzNRxl1ImzPOilfHFXKOpo7Lw1ntbzy2b1lIF8NmoW5yEs-szguPhrkt+4FbVc2KCBYAYFVE8QqhoK0dIHLgQ9z2eboTRsAACyYC4JHdkOQ+wNgyPsa8rD4dAoBATB0H-V550XXq5Hjz3E+TkwGPTzPs9z18oKQQvg-j0vYEMEYZR4wxK6znOOqk5AG+LmBm6MIM-E7mAM+7muRvQAfi+Hk7tLTieq57ual8duem6Tlu6a76vGc+reE53oXmfHyeD4Ctnj5L0-DH1icL9Xmvpc1uJj5hYOv89y+e4uNqAZTLmk3rSW2AcQYwDBlAOQcJgB3icEnfQeYEBqCgHARBKB9AglBAYAAjDIWEQ9MHINQVAIgdAEAYKQaiMABgABMhCv4MzgE0V0eYiAACV2xwCIE0ThBhaAMBQWg6hWDGC5RYWwjh3DeH8KIAAdSaII+gZMyEUKoSQiRENwwEiaE0AAMgAUQAIKugMNAnREEVgAHEViuiIAYAAnAABhcQAdjwU4px9CACsAAWdx-iXHeLweKI2s5sjtldHAPgwl1zgmqkVfkuCADUMACERPDK6dsABZAkRiBHUDwfQ9xVimgEgAFJGN4XwFE1AcF8DwTiLJWYqk1L4UQAAEoUup9TaF8BOrQawcCGYyPsTYgwhhcl0NHl6V4IsHx5gAJr5MMQYJmdZGCGDUGARiVjokABEjHZHsUYw5BhH6pCnDOUUzAnAIGCgAA1YewrhPC+GcKeSaE20ACAiPQSQnYryZEfPkUos4AKxEoByoQgA9HCqB+wyIRLuQ855ejDGmNdN8gMDQCAig5EgHYmLjFmLOOXOujEmIwARecLAUBUUuHuY8xgTyCS2PsUQXFrx8XIxJZyhxFKGSfGpfCxFeEmVQBZc8nJ+TCk8t+VAAgcydhyoKZwilcyxW0olQyqVMq2VRJiYq-F7EdjGrgBStuHEZKwt1fSw4Br0VsvGa6GxprSAEH5YwN1NiKV03tXSyVLE0WsqeRU6pvDPV-P0SsHYkaOkUqxjMINeqnWhuZS6p5Ky1kGJjcqn1ua9EGIDcLNNjrGWZuldmo5JyzmHILYwOtpzXTnIpVctIFbJVAA
[is-undefined]: https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBFCeAHApgeQGYwLwwBQDcBDAGwFdkAuGQseASiugCcBLMAc2wD4ZUAjAFbJgUAHSImIKFKTJR0gMpRWHUcBLECJcnVERiLYMlwAOADQwAtAEZd0gDIgA7siYBhQhGN0A3ACgEFBgASQgAVTAAE2R0NmRI7DwiMkpqWjpuGGTyGBYIGFIomLjI-1BIWDyI6NiweKpQ6uK6hJwtFKoaeips5Fz8wpqS7j8YOFkMdp1sLBwAckHm+LmYADJV0fGUEExemfnF2uW1jbG92ZxDkv8-cugYBQAVACVggDkAcUS5xyZkAFtcogIKR-gB+OZlcD3N5hACyACEAKLPRIAJgA7FCKjAEahUPYkQBBN6JdAkLz+YjIWDUqBXFrY+5hN4AESRADF3kjWYkGfEbncQNTRMQQOxcAADJ6vT6SixVIpHSK4GXvD50XwwAD02pg5OIXlu0OFcjFEslsMRKPl-SaytwVuRz01Ph1eoNRqFIvNUrxBOJb1tiqGLVw-sJJNd7v1FOQxsgptF4qldP5kWD4SVJVwaezLWjurgTHICYgSd9kpZ7K5bx5mftOernO5rMLHrjfiAA

[guard-array]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBACgTgSwLYOAgbtAvFARge3wBsIBDAOygB88EBzBc4aqcgVyKJfaVwjhYBnYInJ0hIXsRZtyAEwgAzRhDkBuAFChIUAJKCAgnDikQUHAB4AKuAgA+ABTpSRNhABcUCiACU5u1DOrtAIglBGJiDWtnaa2tAA4mykcHIRpuZQ0ZCOQW6e6VE2OX5YAXkhYYXZ9poaAMb45MJQoYWe+oWZNbku+V7kvp4VrVXGpj3+4eMgAHRtM059EH4AZKuBy63NwBT1EPiK05GajTtQdMmp7VBJKWkz3cX2S8EFMz0+w1uhxxPPATKo2qANebh8dTOLQAylYAEq6AByCUyAHIADL4OAQJCtMCCNhIAD8qNOTRaiIAqgBZABCAFE4ZkAEwAdjJ51pAHkuej6QZEZlFC5BBAOS1KYiACL0gBiSPpUsysgUynIqnFzAMcLhBgAmgB9WEI5HvSIWYSiOiAqAAbVRpFRABooKjcM7XfVUQBdTXhHX6g1UumMs0THh8OA221sl0AZlZ8bjvoa5K1AcNMAR1N0Vl0ADV6WGovBkKgMPZMrbXZbGHQPbGoCI3FAU1D07rDZKZfLEYrixYVUoVHJo0O1aoXeOR1P5MP1XI22moAApaFcwU4ADeikIngAjMy4wBfSHk4gQWZEfB0BwAA21nYNWd0ObzhbvLsu92qpZQaEwRxH0DF83wLekfAhKAAHpoKbOA3FTZoLyvG972Aw1gwZOFPwuK4HnNCN+CAjMgxpbDILUGC4ObCAkMEFDr1vB9SONJEElw79rg+WsxBIp82ORSjqPgxCoUYtCWKfbs5QVKVOPw6ppwXfjAxk3tFWE2DRLo+iJOYwSOK-RSeJEOtHEMrS4OFIhRT0khUOYrDGQUn8PiIqMHGcuErKgGy7PEhymPvbleX5RFXO480CAvChHFCvkBV8-y6MCy9grvdS5MigiJmU1RHCyvspWSkVUvPILJLXDccuqfBcAAKwgepgEcarEVK2y6KAA
[guard-function]: https://www.typescriptlang.org/play?target=7&jsx=0#code/C4TwDgpgBAYgrgOwMZQLxQBQDodgIYBOeAtgFxR4IgCUaAfBVQNwBQokUAkgM7zLABLAPYI0mAG54ANnAjlKNelEkzoA7rERJWSEd2BR1fJIJHkex06PQYVs+VWrk7ajcfosoUdhCEAzZWlZNFR0AHI-LSswqAAyWMDVQwR9SiRfAMthUXjE4IEU4DSMqAB5ACMAKwgTVh8oAHE4QgATLJExDEjkcmNaVAZulHVNZB09AwBzZoI2qOzyJtb260wh3q0nKCHDNy0lI3mRLs3WFl1CqAAhUtKAGQBRAEEAOTE-aW4IccurzgbOC8ACpiACcAAZwQB2ACMoNBACYAKwAFihKPB8JhCB++igLwAqgBZK4PABKYhhCKhuIMAGUgWTAQ0xGEiSAoAg4MRyhACLswmcLniYASXgBhIGcUovAD6QIAmgAFB4bZCdAAe5C5PL5WwUSgA3lACBBgHACKINVAANRQJFMKAAX3OUjw3A04omBDgJiEBHFbo9UGN1vQDud5wmUHFMoZZIJktKZNl4ruTzpdLECAgAHcY97fcB-YH3dwMNQhXohFIIFgpEJJhgAAaiiVSmXy5UPZsAGig02WRwQGDbkulcsVKuolagAHo594fRAoyka3WG03m17Cj6-QGg9w+wOZnN+NkMDv9HviweyzPHQul8FynADAJ3xoEEIDO4geAV2Fdd60bDAwljF540TIFk1TdNMzCftB1mFZLzjRloNgtMMzpB950XD4pC+VduGAzcwJue5njlAA1J47gJB5EJPIdz2OSjHlePCn0I4igNrECmzCQkSXJWU6IYpikNPVCRNJMluIIz4VyAA
[guard-number]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBA4grgQwE4BMBycC2AjCSoC8UAFAG4IA2cEAXFAHZa5ICUhAfFOVdAJYDODJngDcAKFCQoASX4YceQiW7U6CeiDYFOKvoMYKk4gMYB7ev2BQB85nVm3FRMpVVR1muruv7h+bVCSEKYAZlyu0ARRUADkBswxUAD8PgBivPS8wBAuPGxeEdYWwOrGwWGO+ABkVeE8RZal5VAA8tgAVhDGwCbmllAA5oiolXTwyOh+Srlu8XgsBfUCQoYcPpUzECziYmbFUGgAqgCyAEIAogBKAPotaOdKAEwA7L37R2dX1wAqAOotSgAjC83v0Phcbt8ABKXc4PIiPEG7PpWcFfVItQ6XJQxADMLxiOz2-FMFAgADoKKYBsQAAZom53c60gA0g2Gk0MxAZt3uLG2yIspIpVJp9JOEJ+-1Z7ImGx5fxa-NBwsp1LpCphcJlQzlfm5Eq+0Nh52VgpJZLVYp5GKxOo58sNN1tl2VUAA9O7ZagoAB3UxIADW-DEQA
[guard-object]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBA4grgQwE4BMDyAjAVhAxsKAXigB5MsA+ACgHts9gAuKcgSiIqjp3ygEsAzi2wBuAFC4aAOwEFBAZWBI+UgOZEoVAG4IANnAjMEUkK2Y790QVFnK1HKKEg0AZlAsGihYgHJbK1R9xSRk5AXIGDTJsag9DKGMQABooAGsIEAB+Zn81M3c9T2tyBycIVwLLL19uBh8oADIGyqLQ41xytwjeTP4BRTtVKnTTKF6R-ikW6GYlT2YXPQEIYOlZKFVEVG6mWC30el5iaMpaQ922ZlreYuwHQR2T6mvgVnEJNYIAITQ0ABkAKIAQQAcho5isJLoEAIhGgpBAAMLQ2FQADeUAAHhoAIwiKAAXygIXWaBBAIA+oi-kD5PINAiAO4sBHImECKhvKHsqAAFUZNDZqIxIHBSAM+KJJIIvIA6mgqTS6QyIMz+YKURyuSpgBAkIsOsIeMB4dAMZjmFI4ABbDB6yX46UsL4AKQBiN5FLJAOYO1NGnNzAArITxDq9QboDt1eioCBLTa7UgHcTPs63R6KXK0L7zjHiCLg6GxB8ZDRdBAAHS6GhDAAGP3+wJBFIAakC-gBVAF1lKbZAHY1kVma6iNwGg1hvKAAehnUEWumWldLAnLVZr9fgA75AqFAl7G32j3V++o3sVtPkU-xc6PO4FSFSAgAhI5xdAIFoIFM+G5+6gUCPs+K4kuu1a1lQdbboBpr7oeAGDgww5IqOVDZpedI3rO86IUBNBPq+76eF+P78P++z4YRoFrOBm5QaemoIce5wkIx7LUBh1JXthd4QjRZYVhB9Z+gizEDo8okQOerrup63q8fO-GrnRkHQZR0YCuJ2ysZpNAyRm8nkop96AcBREQlApG-hRD4ESBYhAA
[guard-object-key]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBA4grgQwE4BMDyAjAVhAxsAaQhCgF4oAeTLAGiiJIgA9gIA7FAZygGtiB7AGZRqAPgAU-bHmAAuEdjp8Q8hgEoyoqFJz4oAS27UA3AChQkWIlTUZZSmMnT886htJaddwwqxmL0ACSnADKwEj6bADm9uIAbggANnAQ8ghsIO5aCcnQPpzhkVFmprj8bAUGoYXR8sFhEdGxOSlpGWryLXncBY0xHlDiAUJQXWSk5ADkXviTUABk86NJKQYVwOm4ECO2eovLuWsFm9vCDUUaAD6XUMPCYxNTvUWTZmXrVbvA9lTYEl1tEBKYgAfnkz2iHQOqx81E0t3Ap2h0EeUGmzmAc32Y0ixzYWx2GKgIKq52i4mUGhJyjWyKg8nCq3kgiSnAgb3KlSi1nQGPk8GQvN033IvywEhmcl8UMlVV88MMXzFEoxag5H25gq+DH5PO1xB+1DoDCgzFYHG4ykJ4qcwtcil4xFUxBlRNh2HhmpsGOVtpkVNJNSiFJdxMdJEi2iJDKQTKgLMSbLeiQQnCMbAgAGEU2moABvKBMewARmMUBI5AATGWAL5Qd6VNAAOQAogB9TMAGQAgiEQvYMwB3EQZ7OpzjiNWlHPcAAqg-4Y9zBYrt1j7KgdYb31nAHU0B2e32BxBh-PFzPJ2ZIqwkCytr4ZGgM-nC-I2HAALYYCBIMsqKAP2-X9azLbcRAAIQAKRbTNZzbZsW3tYVnxRV8mHkABWOgAMrAB2TdrzYW972gL5z1fACgJ-P9CPrTlvjQaDYPgvc0GQmQKPIFcsMI0pOX4RIIAAOkSfhgwAAwFVARyzGcAG0QAAXSgQd9GAAALERW0PXsQkUpSJLoL0hRkBgqFHGc6EmEBJgkRDdL7azbLUNUoAAenctcUmEqAWziX8QE0oo5UESIRP4ipBJEsTJOklBZKXTgDNU9StLYxz9OUoyoBM-UQAsuTx2cuzxAyrs9JK1yy08qBZ0RXKeUSmdVP4JAeE4XzMw0vAeFa9rOu8iKG2i0TxPEKSmtQpL5IALxUtTNO09sKr7AycryjFzOmqy0Vm0qHNWkIqrc2r6ssEzmvHKAwCQfhICQUB+o6rqetwPqFwG3zGWGgShLGuKpss8c5oWtLlsy0GNr1LbiEKpLrKYA6dKO6z9uqjyvPO6BLp267PpeqBut657BoTNlhMizhRtiib4sffBUPkpgwaWpiYLghDW2ZwzjJh4VtoxVDEYO5jOcQkWMdq-zAuCpofDCjNvvXSmRv+2nJsFBngCZ+bUrZsXWP3da+a1WGCq+YW9tFjmjbQE6aqxhrLtu+7fyegnBuJ97SeVnzTCAA
[guard-primitive]: https://www.typescriptlang.org/play?target=7&jsx=0#code/C4TwDgpgBACgTgSwLYOAgbhAzlAvFAcgCMEBzBAO2AKgB9CiB7RgGwgEMKb6CKBXJEQhxuhLCEGtRBLMEQVS0vhQAmEAGaUIKggG4AUKEhQAklnjJUGaPgA8AFXAQAfAAp07FnwgAuKJxAAGigjX1hEFDRMLABKPGcoDy9oBBxHSANQqABxPnY4FQtI6zwoByc3JO8-dIhg0L8iq2i43ASqlLSnTKdTLAAhMhMqUvdPav8KEFb28c6oEnIqHuMzfuY2TlGOvwCZxLmoVIWNjgoV6DMAOQEhOG253an9jqOcfkFhC76AZTlKUgPZJPabxA7JN5QWTyUjfMw-CRMFhAiZ7MGvY7iSQsOFYACqqg0WhUKLCaLa4O8kOUak0FG0Bn0AGNGBRZG9BqRhsA-GshiN8GNgZNpn4MThFpRgGDQox1JSbLh8MQyFK9MzWezUutWGdeQNTltBTsRTExYdjkxdUaEkKqZRZJwmRA5VAdZsKFAAGRehVHNnAJ0u+UAeSIACsIEzgHFaPRXHbFfg5FS436lfh1J4sBA4j6Qk5Xa8MwxDVwYgYWQG3jdPnB9bW7qSQWa-ccPk2KbL5cWlYQO8IaAB+N4AMUoqAgibi5ohDsDFGdrsbwm9voxAaDrrDkejlc10tSfxh+uPAObptn9pw0PPFNc3fTfYIjAjUeoa7bm8XwagO-fn4bo6P6umeCixvQj69sqt4KOqVZalgCLYqeiKsBeexXvMWJIjKhY9ocJYyGhLDwQebwErSxL6pRRL0iSxqPJebY4DSdHaOihF9mxdIcfmUFccqPHEuqGrVqkTRRGEZiSSUdi1JUTEBPUTiNBEzTYK24pQLUYIAN76FARzyq4R7-AoD5ODEcQGUZRlYAA7qgTIABZQJZkA2YZdlGUy7A5gwqpUAQfhwBAwB8HAnravywDTgYPm+f50DEGWIVQGFEVRRyZbxd5Pl+QFvC3IOoXhZF0VYCucB5YlUCFSlsGKGVWWVWBpC1YlDViCR6WZRVbzIUinUFclhDCfRfXldlqS0bxKgjVAAC+3krUZ-XZVmLA5gYS2Mgh0qkHkBSyZgfi5PkhTqVJpTlJAinCrUKmQGplhSbEWGQrpFISdd1iJs9ub7eR-QhiGAAyACiACCVylFtO1iey-QmNkJhXPYpQAJwAAw4wA7AAjFjWMAEwAKwACz45TOMk4T5xI9KVx4gAsv0kMAEqlITpP4-u1Y-PYnPo9kpQEKzIBQAO9ypGRbK6gAdCwjAdQABrYVoes4oMQzDVxq8ER2XadECa2Wbi61DsPBKl1rlhWUAAPROyEcDeEjSsq+rmtBcAOuo+j9iG1AxsnX9mC+0s-uuCjaMY7bkrBdZujO67KYQJ7bDK6rrgazLzgs+zXMh2HV1vdYtgF64Rcc5ztsywQKdp27HsIV7uca01zhCyLVzZKXx3l8Ukfd64vei7bTVN47Lut5n7fZ97efm-bPfC6Lg8mxHZta2cbgT-3idpc3c8Iwvmodz7Sf+7XJdG0PptR1Kbh3-XgXRzPqdn9mF8K0vncq4lTgOvPuA8H7bwrpHauh9sgN2AV-Fu58s4QBzj7bub8t7hygWbMeb8p7mUUKfV2yCgA
[guard-string]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBA4grgQwE4BMDKwkEsB2BzKAXigAoA3BAGzggC4oBnTXPASiID4oLrosHGzfAG4AUKEhQAkgwzZ8RUjxr0EOEO0JdlfAU3l4xogMYB7HEyj85LejJsLi5KiqhqN9HVb1CCW0hIQpgBm3C7QhJFQAOSmAEYAVhDGwNFQAGTpYbxWFsBqxkGhAPKJycAZWV64TAVFUA5sUAA+zVCBIdk0RFHR+izRYmZ5UHiIqI308MjovorOvPT9+Kye4d6CBpzejQs0rEbDlmgAKgBKUgByMIrRADKmSBAAtlZgDHDPAPyDJuaWlwAqgBZABCAFEzooAEwAdiG-wqoOKxTu4IAgpdFMEqAwIId-qZKBAAHSUUx4EgAA1OF2uVIANKNxrMDCRaVcYKwDlAAPS89pIGh-CxE0nkylUoFgyGM5kzXbSiFnbnCPkCnGUPEihhiskU6nI1EYy5ysYK3wkI1ozGq9VQTXaoA
[guard-type]: https://www.typescriptlang.org/play?target=7&jsx=0#code/C4TwDgpgBAwg9gOwM7AE4FcDGw6oDwAq4EAfFALxQIQDuUAFAHTMCGqA5kgFxQsIgBtALoBKCmSKQA3AChQkKAAVUASwC2K4CoBuEJBSgByAEYr2KhMENQAPkeNw4AGwh9rdwwnRrjEVO6MkEB9nAMMUVQR2MPQEABMIADMLCDjDWXloADFYzAMmZjA2FjUePhAxcjJyjOIoST08AHljACsySnhkNCwcfBb22yNE3K1EMLg2iGwA5XVNHT1ahQBJJAaDQmISem0WJ3QIMv4AGihMngakLcgSSrI9g+gVfQbl6ABxdDY4jcob0i7faHS7EM4XerEa4NO7iKCPQ5QF6Q6RyOprABCZhWlnyCKOvH493hwOe+lM5ks7ygmMcLj4eNJxwqcPxSPJdNcCGpaxxKD4mGg-wGO3xzLOFn5CEFPC6EV6uGabVhVRJT3ZUAGPKQOWlYwQjKezOJbORusw2oAct5fKhDSDCSzVab9F4fH5tQNpsBNiKgUbHWcANYQEAAfh4EQs7BNpI1WrRqyQAGU0NH7QTyrH1cio1Ftcngg4nBnjay47mi85tQBVeJJFJxUuO7OI5GxBLJahxWQyTCIFDsrHsHHAHiY7G4yj+h1ZnguqAUiw+1WZOCJNWI8jb+xmZfpPsDn0vDGcvjjpCn5xc5tzzdkxdng2qmfPboCiDrqBX+kGgBkf73ki77Sp+G5etgYg2HY9CvhQO49NA0FAdulCJPsSAQGIAHnMQX5sqh9hPoYIiyP23TsnywAfheVEfr6yqvuKwFSjKsBHhg2CKiKIjzhW+gDHCcGStRoFfiJ9E4S8qaROw9ASaBjBgKgcA4JkjDkfKXGoIwCAlFhUBSUgEHAEq7SviIpGHhRLzmvqF52SoiC3kSfE5vo5pwmuG4ETuhgjHqTkINYOGmiBgpfo5zmhRW4VgZqUzYGRR7sta7qoBeaW2i5FRuW2ro2n4Xl4T5caEZ4hX+FAYbslkFiaBAFlQHlb6sfFWVFTFOZxV+JnJTZxmJWONKDa03oMeZYqBlAIbhpGaZRLxQHIoJq4lShfmTGNMyGYBYVtb1Q27UBACEO5eE4JY1dJC1ybNYg1bNwFATwiHNVA6FOJh-WDjdskXjJ6bTlNd4Lnm7BCd5G2UIYW3eiFe2xQd4FHV1bY9RugOLbYdhQ75MPgwemnHimVZOADZM5UtYOU2tkD4WVflBCEThEylLx1p2jYXpzDbdlTLUah2fOpOW6qEcLXaizheOMzDkuNge1m-esxAXn8UAAqKTLTRCVxa9T-EokKZAAN4yFASIbvJKa3fQmSWVA5uW5bSA0JomAABYMA7TsWy7luYCwmG7pSVg8KgEDAOgqAGiek7ABZsgB4HwfQCYxER1HMdx5eT5J-7AdByH-mjEFhhZ9Hse1WXiAFynUDF+nbq2hXUCR1Xucdag9cp03RhwzMlc5+yJla73Rdp4Et1tx3I9-dGE8u-34Rk7P2fV9JZNL6nJcK926+d+yvNS3ES8AL7+5fltz9XmTVZRcXj-i4LEGIPCfd9Mjn72xNQOw3xUC-DVlAL4PwNbPx1g0V+kBQSQGhNsQ27ljZwheA0SBTwYFYV-k4YO+g5Q9DQHAGAuCkD6FNlAAAHgYAAjFIKAl8-4wAADIAEFkzJgMNQOgBCMBEJIXg+gVk-4YiaE0ZhABRVhloDCfwgD9H0GIVgfBWJaAgBgACcAAGLRAB2GhGiNEACYACsAAWXRZitGGJodyZWPpLQ1gALIYgkQAJVoUY3RCioDJgIG41RHwDCGCcSAKglV2RK00teRgTg4ByQAAZ4F4egfhpCkAkBYew5MCSzgAPAcQZJHFUkqQEWQnYWSOFnBSWkvBll6EAHoGnnAwBAZWMS4mJLwA4a8fASCiPEVIy0uT-6AOAZAbpT4dgDMkdIs4GdenBXqVAJpLTDjtJcLE+J9Akng36co1RBARn5KAegvZ9AlEqLUfMpclgSKkRWc0xCGyIBbK6S3PwJBHEuPcccsZ6CPmoB2N81xbj5mAvuY0p5rSXlvJ2XgPZfiAmWg+H8gpEzzlIsCfMwmyzVnPKAA
