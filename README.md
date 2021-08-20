# Packages

Useful and simple to use packages based on the [angular.io][angulario].

| Package                              | Description                                            | Status |
| :----------------------------------- | :----------------------------------------------------- | -----: |
| [callback][callback-github-readme]   | Manages the callback [function][js-function].          | [![npm version][callback-npm-badge-png]][callback-npm-badge] |
| [change-detection][cd-github-readme] | Improves application performance.                      | [![npm version][cd-npm-badge-png]][cd-npm-badge] |
| [component-loader][cl-github-readme] | Handles dynamic loading components.                    | [![npm version][cl-npm-badge-png]][cl-npm-badge] |
| [core][core-github-readme]           | Core features.                                         | [![npm version][core-npm-badge-png]][core-npm-badge] |
| [error][error-github-readme]         | Manages an [Error][js-error].                          | [![npm version][error-npm-badge-png]][error-npm-badge] |
| [prism][prism-github-readme]         | [Prism][prism-js] highlighter module.                  | [![npm version][prism-npm-badge-png]][prism-npm-badge] |
| [property][property-github-readme]   | Handles object properties.                             | [![npm version][property-npm-badge-png]][property-npm-badge] |
| [reactive][reactive-github-readme]   | Automatize the process of creating some rxjs features. | [![npm version][reactive-npm-badge-png]][reactive-npm-badge] |
| [testing][testing-github-readme]     | Support for testing other packages.                    | [![npm version][testing-npm-badge-png]][testing-npm-badge] |
| [type][type-github-readme]           | Common types, type guards, and type checkers.          | [![npm version][type-npm-badge-png]][type-npm-badge] |
| [ui][ui-github-readme]               | User interface.                                        | *In Progress* |

> Click on the package name to visit its [GitHub](https://github.com/) page.

## angular-package/type

Common types, type guards and type checkers.

<!-- npm badge -->
[![npm version][type-npm-badge-svg]][type-npm-badge]
<!-- GitHub badges -->
[![GitHub issues][type-badge-issues]][type-issues]
[![GitHub forks][type-badge-forks]][type-forks]
[![GitHub stars][type-badge-stars]][type-stars]
[![GitHub license][type-badge-license]][type-license]
<!-- Patreon badge -->
[![Support me on Patreon][patreon-badge]][patreon-link]

<br>

## Table of contents

* [Basic concepts](#basic-concepts)
* [Skeleton](#skeleton)
* [Installation](#installation)
* [Api](#api)
* [Preparation](#preparation)
  * [Recognize value](#recognize-value)
  * [Precise check](#precise-check)
  * [Callback](#callback)
* [Check](#check)
  * [Functions](#check-functions)
  * [Objects](#check-objects)
    * [`are`](#are)
    * [`is`](#is)
    * [`isNot`](#isnot)
* [Guard](#guard)
  * [Functions](#guard-functions)
  * [Object](#guard-object)
    * [`guard`](#guard)
* [Common](#common)
  * [Interfaces](#common-interfaces)
  * [Types](#common-types)
* [Experimental](#experimental)
* [Changelog](#changelog)
  * [5.0.0](#500)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)

<br>

## Basic concepts

Checks
> It's to check the provided value to be **the same** as **expected**.

Type guard (constrain)
> Constrains the parameter type to **not let** input **unexpected** value in the **code editor**.

Guards
> It's a **combination** of both above, **constrains** the type of the parameter in the **code editor**, and checks its provided argument.

Defines
> Returns defined value from a method of an object.  
> Defines new value in an object and returns a defined value.  

Gets
> Returns a value from an object.

Sets
> Adds or updates an element with a specified key and a value to an object and returns an object.  

<br>

## Skeleton

This package was built by the [library skeleton][skeleton] which was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

Copy this package to the `packages/type` folder of the [library skeleton][skeleton] then run the commands below.

### Build

Run `ng build type` to build the package. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test type` to execute the unit tests via [Karma](https://karma-runner.github.io).

<br>

## Installation

Install `@angular-package/type` package with command:

```bash
npm i @angular-package/type --save
```

<br>

## Api

```typescript
// Recognition.
import {
  recognizeValue
} from '@angular-package/type';
```

```typescript
// `are` prefix functions.
import {
  areString
} from '@angular-package/type';
```

```typescript
// `guard` prefix functions.
import { 
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
  guardUndefined
} from '@angular-package/type'; 
```

```typescript
// `is` prefix functions.
import {
  isArray,
  isBigInt,
  isBoolean,
  isBooleanObject,
  isBooleanType,
  isClass,
  isDate, // From the 4.2.0 version.
  isDefined,
  isFalse, // From the 4.2.0 version.
  isFunction,
  isInstance,
  isKey,
  isNull,
  isNumber,
  isNumberBetween, // From the 4.2.0 version.
  isNumberObject,
  isNumberType,
  isObject,
  isObjectKey,
  isObjectKeyIn,
  isObjectKeys,
  isPrimitive,
  isRegExp, // From the 4.2.0 version.
  isString,
  isStringLength, // From the 4.2.0 version.
  isStringObject,
  isStringType,
  isSymbol,
  isTrue, // From the 4.2.0 version.
  isType,
  isUndefined,
} from '@angular-package/type';
```

```typescript
// `isNot` prefix functions.
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
// Objects.
import { are, guard, is, isNot } from '@angular-package/type';
```

```typescript
// Types.
import {
  AnyBoolean,
  AnyNumber,
  AnyString,
  Constructor,
  Defined,
  Never,
  NotUndefined,
  NumberBetween, // From the 4.2.0 version.
  Primitive,
  Primitives,
  StringOfLength, // From the 4.2.0 version.
  Type,
  Types,
} from '@angular-package/type';
```

<br>

## Preparation

### Recognize value

To properly check any value is to know what type and instance the value can be and for this purpose [`recognizeValue()`](#recognizevalue) function was created.

#### `recognizeValue()`

Gets recognized types and instances of given `value` by using [`instanceof`][js-instanceof], [`typeof`][js-typeof] operator, and [`typeOf()`](#typeof), [`isClass()`](#isclass), [`isFunction()`][js-function] functions.

```typescript
const recognizeValue = (
  value: any,
  onlyTrue: boolean = true,
  instances: any[] = []
): OfRecognized => {
  // Recognize types.
  const ofRecognized: OfRecognized = {
    class: is.class(value),
    function: is.function(value),
    typeOf: typeOf(value),
    typeof: typeof value,
  };

  // Recognize instances.
  RECOGNIZE_INSTANCES.concat(instances as any).forEach((instance) =>
    Object.assign(ofRecognized, { [instance.name]: value instanceof instance })
  );

  // If only true remove false.
  if (is.true(onlyTrue)) {
    Object.keys(ofRecognized).filter((type: string) =>
      is.false(ofRecognized[type as keyof OfRecognized])
        ? delete ofRecognized[type as keyof OfRecognized]
        : true
    );
  }
  return ofRecognized;
};
```

**Parameters:**

| Name: type          | Description |
| :------------------ | :---------- |
| `value: any`        | The `value` of any type to recognize. |
| `onlyTrue: boolean` | Determines whether to show only recognized as `true`. |
| `instances: any[]`  | An optional array of objects to check by using [`instanceof`][js-instanceof] operator. |

**Returns:**

The **return value** is an object of types and instances recognized as `true` or all even those recognized as `false`.

**Recognized instances:**

An [`Array`][js-array] of default objects that is used by the [`recognizeValue()`](#recognizevalue) function to check the value instance by using the [`instanceof`][js-instanceof] operator. It can be expanded by the provided `instances` parameter.

```typescript
const RECOGNIZE_INSTANCES = [
  Array,
  ArrayBuffer,
  Boolean,
  DataView,
  Date,
  Error,
  EvalError,
  Float32Array,
  Float64Array,
  Function,
  Int16Array,
  Int32Array,
  Int8Array,
  Map,
  Number,
  Object,
  Promise,
  RangeError,
  ReferenceError,
  RegExp,
  Set,
  Storage,
  String,
  SyntaxError,
  TypeError,
  URIError,
  Uint16Array,
  Uint32Array,
  Uint8Array,
  Uint8ClampedArray,
  WeakMap,
  WeakSet
];
```

**Usage:**

```typescript
// Example usage.

// Class.
class CustomClass {}
const customClass = new CustomClass();

// String.
const firstName = 'Artemis';

/*
Returns {
  "typeOf": "object",
  "typeof": "object",
  "Object": true,
  "CustomClass": true
}
*/
recognizeValue(customClass, true, [CustomClass]);

/*
Returns {
  "class": true,
  "typeOf": "function",
  "typeof": "function",
  "Function": true,
  "Object": true
}
*/
recognizeValue(CustomClass);


/*
Returns {
  "typeOf": "string",
  "typeof": "string"
}
*/
recognizeValue(firstName);

/*
Returns {
  "typeOf": "string",
  "typeof": "object",
  "Object": true,
  "String": true
}
*/
recognizeValue(new String(firstName));
```

<br>

### Precise check

To precisely check the type of any value it needs to check the prototype of the value and [`typeOf()`](#typeof) is an ideal solution for this.

#### `typeOf()`

Primary and common function for checking the types. [Here](https://javascript.plainenglish.io/the-best-way-to-type-check-in-vanilla-js-55197b4f45ec) is an article about how it works.

```typescript
const typeOf = (value: any): string => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
```

<br>

### Callback

To handle the result of the check(before it returns) with an additional payload there is a callback function, so it is possible to, for example, send it to error tracker [sentry.io](https://sentry.io) or even to change the value of the result and then return. The default callback function is used to return the result of the check.

#### `resultCallback()`

Default function to handle `callback` of [`ResultCallback`][package-callback-resultcallback] type.

```typescript
const resultCallback = (result: boolean): boolean => result;
```

**Parameters:**

| Name: type          | Description |
| :------------------ | :---------- |
| `result: boolean`   | A value of [`boolean`][js-boolean] type of the result of the check. |

**Returns:**

The **return value** is a [`boolean`][js-boolean] of the result from the check.

**Usage:**

A custom function to handle the `callback`. By default, the callback function inside of [`isString()`](#isstring) and rest functions passes the function name that performed the callback and the value that was being checked, but they are changeable by the `payload` parameter of the [`isString()`](#isstring) function and also it's possible to add new properties through it.

```typescript
// Example usage.
import { CallbackPayload } from '@angular-package/callback';

const firstName = 'Artemis';
const additionalPayload = {
  id: 1,
  field: 'firstName',
  database: 'gods',
};

/*
  By default `callback` parameter of `isString()` function passes
  `name` and the provided `value` of `CallbackPayload` interface.
*/
const customCallback = (
  result: boolean,
  payload?: CallbackPayload & typeof additionalPayload
): boolean => {
  /*
    payload {
      value: 'Artemis',
      name: 'isString',
      id: 1,
      field: 'firstName',
      database: 'gods'
    }
  */
  if (result === false) {
    if (payload) {
      // Send e.g. to sentry.io.
      throw new Error(`${payload.value} must be a string`);
    }
  }
  return result;
};

const stringResult = isString(firstName, customCallback, additionalPayload);
```

<br>

## Check

### Check functions

| Function                                   | Checks if any value is |
| :----------------------------------------- | :--------------------- |
| **[`isArray()`](#isarray)**                |  an [`array`][js-array], [`Array`][js-array] instance, and [`object`][js-object] type. |

<br>

| Function                                   | Checks if any value is |
| :----------------------------------------- | :--------------------- |
| **[`isArray()`](#isarray)**                | an [`array`][js-array], [`Array`][js-array] instance, and [`object`][js-object] type. |
| **[`isBigInt()`](#isbigint)**              | a [`bigint`][js-bigint] type. |
| **[`isBoolean()`](#isboolean)**            | a [`boolean`][js-boolean] type not instance of [`Boolean`][js-boolean] and [`Object`][js-object] or `object` type instance of [`Boolean`][js-boolean] and [`Object`][js-object]. |
| **[`isBooleanObject()`](#isbooleanobject)**| an [`object`][js-object] type and instance of [`Boolean`][js-boolean] and [`Object`][js-object]. |
| **[`isBooleanType()`](#isbooleantype)**    | a [`boolean`][js-boolean] type not an instance of [`Boolean`][js-boolean] and [`Object`][js-object], and equal to `true` or `false`. |
| **[`isClass()`](#isclass)**                | a [`function`][js-function] type, an instance of [`Function`][js-function] and [`Object`][js-object] as a generic `Class` type of [`class`][ts-classes]. It also **confirms** with the regexp that function is a [`class`][ts-classes]. |
| **[`isDate()`](#isdate)**                  | an [`object`][js-object] type instance of [`Date`][js-date] and [`Object`][js-object]. |
| **[`isDefined()`](#isdefined)**            | **not** an [`undefined`][js-undefined] type and is **not** equal to [`undefined`][js-undefined]. |
| **[`isFalse()`](#isfalse)**                | a [`boolean`][js-boolean] type **not** an instance of [`Boolean`][js-boolean] and [`Object`][js-object], or is an `object` type and instance of [`Boolean`][js-boolean] and [`Object`][js-object], and equal to `false`. |
| **[`isFunction()`](#isfunction)**          | a [`function`][js-function] type, an instance of [`Function`][js-function] and [`Object`][js-object]. It also **denies** that function is a [`class`][ts-classes] with the [`RegExp`][js-regexp]. |
| **[`isInstance()`](#isinstance)**          | an [`object`][js-object] type, an instance of `Object` and an instance of the provided `constructor`. |
| **[`isKey()`](#iskey)**                    | one of the [`string`][js-string], [`number`][js-number], or [`symbol`][js-symbol] type. |
| **[`isNull()`](#isnull)**                  | an [`object`][js-object] type and equal to [`null`][js-null]. |
| **[`isNumber()`](#isnumber)**              | a [`number`][js-number] type not an instance of [`Number`][js-number] and [`Object`][js-object] or [`object`][js-object] type instance of [`Number`][js-number] and [`Object`][js-object]. |
| **[`isNumberBetween()`](#isnumberbetween)**| a [`number`][js-number] type, not instance of [`Object`][js-object] and [`Number`][js-number] or [`object`][js-object] type and instance of [`Number`][js-number] and [`Object`][js-object], in the specified range. |
| **[`isNumberObject()`](#isnumberobject)**  | an [`object`][js-object] type and instance of [`Number`][js-number] and [`Object`][js-object]. |
| **[`isNumberType()`](#isnumbertype)**      | a [`number`][js-number] type not an instance of [`Number`][js-number] and [`Object`][js-object]. |
| **[`isObject()`](#isobject)**              | an [`object`][js-object] of a generic `Obj` type and [`Object`][js-object] instance. |
| **[`isObjectKey()`](#isobjectkey)**        | an [`object`][js-object] with its own specified `key` of the `PropertyKey` type. |
| **[`isObjectKeyIn()`](#isobjectkeyin)**    | an [`object`][js-object] of a generic type with the `key` of the `PropertyKey` type by using the [`in`][js-in-operator] operator. |
| **[`isObjectKeys()`](#isobjectkeys)**      | an [`object`][js-object] with **some** of its keys from given `keys` of the `PropertyKey` type. |
| **[`isPrimitive()`](#isprimitive)**        | the [`Primitive`](#primitive) type from a given `type` of the [`Primitives`](#primitives). |
| **[`isRegExp()`](#isregexp)**              | a regular expression of a [`regexp`][js-regexp] type, an instance of [`Object`][js-object] and [`RegExp`][js-regexp]. |
| **[`isString()`](#isstring)**              | a [`string`][js-string] type, not instance of [`Object`][js-object] and [`String`][js-string] or [`object`][js-object] type and instance of [`String`][js-string] and [`Object`][js-object]. |
| **[`isStringLength()`](#isstringlength)**  | a [`string`][js-string] type, not instance of [`Object`][js-object] and [`String`][js-string] or [`object`][js-object] type and instance of [`String`][js-string] and [`Object`][js-object], of a length in the specified range. |
| **[`isStringObject()`](#isstringobject)**  | an [`object`][js-object] type and instance of [`String`][js-string] and [`Object`][js-object]. |
| **[`isStringType()`](#isstringtype)**      | a [`string`][js-string] type and **not** instance of [`String`][js-string] and [`Object`][js-object]. |
| **[`isSymbol()`](#issymbol)**              | a [`symbol`][js-symbol] type. |
| **[`isTrue()`](#istrue)**                  | a [`boolean`][js-boolean] type **not** an instance of [`Boolean`][js-boolean] and [`Object`][js-object], or is an `object` type and instance of [`Boolean`][js-boolean] and [`Object`][js-object], and equal to `true`. |
| **[`isType()`](#istype)**                  | a type of [`Type`](#type) from a given `type` of the [`Types`](#types). |
| **[`isUndefined()`](#isundefined)**        | an [`undefined`][js-undefined] type and equal to [`undefined`][js-undefined]. |

<br>

| Function                                   | Checks if any value is not |
| :----------------------------------------- | :------------------------- |
| **[`isNotBoolean()`](#isnotboolean)**      |  |
| **[`isNotFunction()`](#isnotfunction)**    |  |
| **[`isNotNull()`](#isnotnull)**            |  |
| **[`isNotNumber()`](#isnotnumber)**        |  |
| **[`isNotString()`](#isnotstring)**        |  |
| **[`isNotUndefined()`](#isnotundefined)**  |  |

<br>

#### `areString()`

Use `areString()` or `are.string()` to check if all the values are [`string`][js-string].

```typescript
const areString = (...value: any): boolean => check('string', ...value);
```

**Parameters:**

| Name: `type`    | Description         |
| :-------------- | :------------------ |
| ...value: `any` | A [rest parameter][js-rest-parameter] of any type to check. |

**Returns:**

| Returns   | Type      | Description                         |
| :-------- | :-------: | :---------------------------------- |
| `boolean` | `boolean` | The **return type** is a `boolean`. |

The **return value** is a `boolean` indicating whether all the provided values are `string`.

**Usage:**

```typescript
// Example usage.
```

<br>

#### `isArray()`

[![update]](#500)

Use `isArray()` or `is.array()` to check if **any** `value` is an [`Array`][js-array], [`Array`][js-array] instance, and [`object`][js-object] type.

```typescript
const isArray = <Type = any, Payload extends object = object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is Array<Type> =>
  callback(
    typeOf(value) === 'array' &&
    Array.isArray(value) === true &&
    value instanceof Array === true &&
    typeof value === 'object',
    {
      ...{
        name: isArray.name,
        value,
      },
      ...payload,
    } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Type`    | `any`         | A generic type variable `Type` to indicate the type of [`Array`][js-array] of the `value` parameter, which by default is `any` through the return type `value is Array<Type>`. |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns                | Type      | Description                                                       |
| :--------------------- | :-------: | :---------------------------------------------------------------- |
| `value is Array<Type>` | `boolean` | By default, the generic `Type` variable is equal to `any` and the **return type** is a `boolean` as the result of its statement indicating the `value` is an [`Array`][js-array] of `any` type. |

The **return value** is a `boolean` indicating whether the provided `value` is an [`Array`][js-array].

**Usage:**

```typescript
// Example usage.
import { isArray } from '@angular-package/type'; 

const ARRAY_NUMBER = [1, 2, 3];
const ARRAY_STRING = ['a', 'b', 'c'];

isArray(ARRAY_NUMBER); // Returns `true` as `value is any[]`
isArray<string>(ARRAY_STRING); // Returns `true` as `value is string[]`

// Example usage with callback and payload.
isArray([1, 2, 3], (result, payload) => {
  if (result === true) {
    if (payload) {
      console.log(payload);

      // Returns `'isArray'`
      payload.name;

      // Returns `(3) [1, 2, 3]`
      payload.value;

      // Returns `{ "1": "First", "2": "Second", "3": "Third" }`
      payload.transform;
    }
  }
  return result;
}, { transform: { 1: 'First', 2: 'Second', 3: 'Third'} }); // Returns `true` as `value is string[]`
```

<br>

#### `isBigInt()`

[![update]](#500)

Use `isBigInt()` or `is.bigint()` to check if **any** `value` is a [`bigint`][js-bigint] type.

```typescript
const isBigInt = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is bigint =>
  callback(typeOf(value) === 'bigint' && typeof value === 'bigint', {
    ...{
      name: isBigInt.name,
      value,
    },
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns           | Type      | Description |
| :---------------- | :-------: | :---------- |
| `value is bigint` | `boolean` | The **return type** is a `boolean` as the result of its statement. |

The **return value** is a `boolean` indicating whether the provided `value` is a `bigint`.

**Usage:**

```typescript
// Example usage.
import { isBigInt } from '@angular-package/type';

isBigInt(27); // Returns `false` as `value is bigint`
isBigInt(9007199254740991n); // Returns `true` as `value is bigint`
```

<br>

#### `isBoolean()`

[![update]](#500)

Use `isBoolean()` or `is.boolean()` to check if **any** `value` is a [`boolean`][js-boolean] type not instance of [`Boolean`][js-boolean] and [`Object`][js-object] or `object` type instance of [`Boolean`][js-boolean] and [`Object`][js-object].

```typescript
const isBoolean = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is boolean =>
  callback(
    typeOf(value) === 'boolean' &&
    (isBooleanType(value) || isBooleanObject(value)),
    {
      ...{
        name: isBoolean.name,
        value,
      },
      ...payload,
    } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns            | Type      | Description |
| :----------------- | :-------: | :---------- |
| `value is boolean` | `boolean` | The **return type** is a `boolean` as the result of its statement. |

The **return value** is a `boolean` indicating whether the provided `value` is a `boolean` type or [`Boolean`][js-boolean] instance.

**Usage:**

```typescript
// Example usage.
import { isBoolean } from '@angular-package/type';

isBoolean(false), // Returns `true` as `value is boolean`
isBoolean(new Boolean(false))// Returns `true` as `value is boolean`
isBoolean('my name', (result, payload) => {
  if (result === false) {
    if (payload) {
      // Change the result from `false` to `true`.
      if (payload.value === payload.accepted) {
        result = true;
      }
    }
  }
  return result;
}, { accepted: 'my name' }); // Returns `true` as `value is boolean`.
```

<br>

#### `isBooleanObject()`

[![update]](#500)

Use `isBooleanObject()` or `is.booleanObject()` to check if **any** `value` is an [`object`][js-object] type and instance of [`Boolean`][js-boolean] and [`Object`][js-object].

```typescript
const isBooleanObject = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is Boolean =>
  callback(
    typeof value === 'object' &&
    value instanceof Boolean === true &&
    value instanceof Object === true,
    {
      ...{
        name: isBooleanObject.name,
        value,
      },
      ...payload,
    } as Payload
  );

```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns            | Type      | Description |
| :----------------- | :-------: | :---------- |
| `value is Boolean` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is [`Boolean`][js-boolean]. |

The **return value** is a `boolean` indicating whether the provided `value` is a [`Boolean`][js-boolean] instance.

**Usage:**

```typescript
// Example usage.
import { isBooleanObject } from '@angular-package/type';

isBooleanObject(false); // false
isBooleanObject(new Boolean(false)); // true
```

<br>

#### `isBooleanType()`

[![update]](#500)

Use `isBooleanType()` or `is.booleanType()` to check if **any** `value` is a [`boolean`][js-boolean] type not an instance of [`Boolean`][js-boolean] and [`Object`][js-object], and equal to `true` or `false`.

```typescript
const isBooleanType = <Payload extends object>(
  value: any, 
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is boolean =>
  callback(
    value instanceof Boolean === false &&
    value instanceof Object === false &&
    typeof value === 'boolean' &&
    (value === true || value === false),
    {
      ...{
        name: isBooleanType.name,
        value,
      },
      ...payload,
    } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns            | Type      | Description |
| :----------------- | :-------: | :---------- |
| `value is boolean` | `boolean` | The **return type** is a `boolean` as the result of its statement. |

The **return value** is a `boolean` indicating whether the provided `value` is a [`boolean`][js-boolean] type.

**Usage:**

```typescript
// Example usage.
import { isBooleanType } from '@angular-package/type';

isBooleanType(false); // true
isBooleanType(new Boolean(false)); // false
```

<br>

#### `isClass()`

[![update]](#500)

Use `isClass()` or `is.class()` to check if **any** `value` is a [`function`][js-function] type, an instance of [`Function`][js-function] and [`Object`][js-object] as a generic `Class` type of [`class`][ts-classes]. It also **confirms** with the regexp that function is a [`class`][ts-classes].

```typescript
const isClass = <Class = Function, Payload extends object = object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is Class =>
  callback(
    typeOf(value) === 'function' &&
    typeof value === 'function' &&
    value instanceof Function === true &&
    value instanceof Object === true
    ? /class/.test(Function.prototype.toString.call(value).slice(0, 5))
    : false,
    {
      ...{
        name: isClass.name,
        value,
      },
      ...payload,
    } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Class`   | `Function`    | A generic type variable `Class` indicates the type of `value` parameter through the return type `value is Class`. |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns          | Type      | Description |
| :--------------- | :-------: | :---------- |
| `value is Class` | `boolean` | By default `Class` variable is equal to [`Function`][js-function] and the **return type** is a `boolean` as the result of its statement indicating the `value` is a [`Function`][js-function]. |

The **return value** is a `boolean` indicating whether the provided `value` is a [`class`][ts-classes].

**Usage:**

```typescript
// Example usage.
import { isClass } from '@angular-package/type';

class Class { x = 5; }
const FUNC = (x: number): any => x + 5;

isClass<Class>(Class); // Returns `true` as `value is Class`
isClass(FUNC); // Returns `false` as `value is Function`
isClass(() => 5); // Returns `false` as `value is Function`

// Example usage with callback and payload.
isClass(() => 5, (result, payload) => {
  if (payload) {
    result // Returns `false`
    payload.name // Returns `'isClass'`
    payload.value // Returns `() => 5`
    payload.c // Returns `class Class`
  }
  return result;
}, { c: Class }); // Returns `false` as `value is Function`
```

<br>

#### `isDate()`

[![update]](#500)

Use `isDate()` or `is.date()` to check if **any** `value` is an [`object`][js-object] type instance of [`Date`][js-date] and [`Object`][js-object].

```typescript
const isDate = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is Date =>
  callback(
    typeOf(value) === 'date' &&
    typeof value === 'object' &&
    value instanceof Date === true &&
    value instanceof Object === true,
    {
      ...{
        name: isDate.name,
        value,
      },
      ...payload,
    } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns         | Type      | Description                                                                                            |
| :-------------- | :-------: | :----------------------------------------------------------------------------------------------------- |
| `value is Date` | `boolean` | The **return type** is a `boolean` as the result of its statement, indicating the `value` is a `Date`. |

The **return value** is a `boolean` indicating whether the provided `value` is a [`Date`][js-date].

**Usage:**

```typescript
// Example usage.
import { isDate } from '@angular-package/type';

const DATE = new Date(1995, 11, 17, 3, 24, 0);

isDate(DATE); // Returns `true` as `value is Date`

// Example usage with callback and payload.
isDate(DATE, (result, payload) => {
  if (payload) {
    result // Returns `true`
    payload.name // Returns `'isDate'`
    payload.value // Returns new date
    payload.birthDay // Returns `14`
  }
  return result;
}, { birthDay: 14 }); // Returns `true` as `value is Date`
```

<br>

#### `isDefined()`

[![update]](#500)

Use `isDefined()` or `is.defined()` to check if **any** `value` of a generic `Type` is **not** an [`undefined`][js-undefined] type and is **not** equal to [`undefined`][js-undefined].

```typescript
const isDefined = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is Defined<Type> =>
  callback(
    typeOf(value) !== 'undefined' &&
    typeof value !== 'undefined' &&
    value !== undefined,
    {
      ...{
        name: isDefined.name,
        value,
      },
      ...payload,
    } as Payload
  );
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Type`    | From the `value` | A generic type variable `Type` indicates the type of the `value` parameter, which by default is captured from the provided `value` and is passed to the return type `value is Defined<Type>`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: Type`                                         | The `value` of a generic `Type`, by default of type captured from the provided `value`, to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns                  | Type      | Description                         |
| :----------------------- | :-------: | :---------------------------------- |
| `value is Defined<Type>` | `boolean` | By default `Type` variable is equal to the type detected from the `value`, but the captured type `undefined` changes to `never` and the **return type** is a `boolean` as the result of its statement `value` is [`Defined<Type>`](#defined). |

The **return value** is a `boolean` indicating whether the provided `value` is defined, not `undefined`

**Usage:**

```typescript
// Example usage.
import { isDefined } from '@angular-package/type';

const UNDEFINED = undefined;
let defined;

isDefined(UNDEFINED); // Returns `false` as `value is never`
isDefined(defined); // Returns `false` as `value is never`
isDefined(27); // Returns `true` as `value is number`
isDefined('age'); // Returns `true` as `value is string`

// Example usage with callback and payload.
isDefined('age', (result, payload) => {
  if (payload) {
    result // Returns `true`
    payload.name // Returns `'isDefined'`
    payload.notDefined // Returns `false`
    payload.value // Returns `'age'`
  }
  return result;
}, { notDefined: false }); // Returns `true` as `value is string`
```

<br>

#### `isFalse()`

[![update]](#500)

Use `isFalse()` or `is.false()` to check if **any** `value` is a [`boolean`][js-boolean] type **not** an instance of [`Boolean`][js-boolean] and [`Object`][js-object], or is an `object` type and instance of [`Boolean`][js-boolean] and [`Object`][js-object], and equal to `false`.

```typescript
const isFalse = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is false =>
  callback(
    (isBooleanType(value) && value === false) ||
    (isBooleanObject(value) && value.valueOf() === false),
    {
      ...{
        name: isFalse.name,
        value,
      },
      ...payload,
    } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns          | Type      | Description |
| :--------------- | :-------: | :---------- |
| `value is false` | `boolean` | The **return type** is a `boolean` as the result of its statement, indicating the `value` is equal to`false`. |

The **return value** is a `boolean` indicating whether the provided `value` is a [`boolean`][js-boolean] equal to `false`.

**Usage:**

```typescript
// Example usage.
import { isFalse } from '@angular-package/type';

isFalse(true); // Returns `false` as `value is false`
isFalse(false); // Returns `true` as `value is false`

isFalse(new Boolean(true)); // Returns `false` as `value is false`
isFalse(new Boolean(false)); // Returns `true` as `value is false`

// Example usage with callback and payload.
isFalse(new Boolean(false), (result, payload) => {
  if (payload) {
    result // Returns `false`
    payload.name // Returns `'isFalse'`
    payload.age // Returns `27`
    payload.value // Returns `Boolean {false}`
  }
  return result;
}, { age: 27 }); // Returns `true` as `value is false`
```

<br>

#### `isFunction()`

[![update]](#500)

Use `isFunction()` or `is.function()` to check if **any** `value` is a [`function`][js-function] type, an instance of [`Function`][js-function] and [`Object`][js-object]. It also **denies** that function is a [`class`][ts-classes] with the [`RegExp`][js-regexp].

```typescript
const isFunction = <Value extends any, Payload extends object = object>(
  value: Value extends Function ? Value : any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is Value extends Function ? Value : Function =>
  callback(
    typeOf(value) === 'function' &&
      typeof value === 'function' &&
      value as any instanceof Function === true &&
      value as any instanceof Object === true
      ? /class/.test(Function.prototype.toString.call(value).slice(0, 5)) ===
      false
      : false,
    {
      ...{
        name: isFunction.name,
        value,
      },
      ...payload,
    } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Value`   | `any`         | A generic type variable `Value` indicates the type of `value` parameter, by default captured from the provided `value` through the return type `value is Value extends Function ? Value : Function`. |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: Value extends Function ? Value : any`         | The value of the captured type of [`function`][js-function] from the provided `value` or else any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns                                              | Type      | Description |
| :--------------------------------------------------- | :-------: | :---------- |
| `value is Value extends Function ? Value : Function` | `boolean` | The **return type** is a `boolean` as the result of its statement, indicating the `value` is of the captured type of function from the provided `value` or a [`Function`][js-function]. |

The **return value** is a `boolean` indicating whether the provided `value` is a [`Function`][js-function].

**Usage:**

```typescript
// Example usage.
import { isFunction } from '@angular-package/type';

class Class { x = 5; }
const FUNC = (x: number): any => x + 5;

isFunction(Class); // Returns `false` as `value is typeof Class`, it must not be a `class`.
isFunction(FUNC); // Returns `true` as `value is (x: number) => any`
isFunction(() => 5); // Returns `true` as `value is () => 5`

// Example usage with callback and payload.
isFunction(() => 5, (result, payload) => {
  if (payload) {
    payload.name // Returns `'isFunction'`
    payload.number // Returns `true`
    payload.value // Returns `() => 5`
  }
  return result;
}, { number: true }); // Returns `true` as `value is () => 5`
```

<br>

#### `isInstance()`

[![update]](#500)

Use `isInstance()` or `is.instance()` to check if **any** `value` is an [`object`][js-object] type, an instance of `Object` and an instance of the provided `constructor`.

```typescript
const isInstance = <Obj, Payload extends object>(
  value: any,
  constructor: Constructor<Obj>,
  callback: ResultCallback<
    CallbackPayload & { constructor?: typeof constructor } & Payload
  > = resultCallback,
  payload?: Payload
): value is Obj =>
  callback(
    typeof value === 'object' &&
    value instanceof Object === true &&
    typeof constructor === 'function'
    ? value instanceof constructor === true
    : false,
    {
      ...{
        name: isInstance.name,
        constructor,
        value,
      },
      ...payload,
    } as CallbackPayload & { constructor?: typeof constructor } & Payload
  );
```

**Generic type variables:**

| Name      | Default value          | Description |
| :-------- | :--------------------- | :---------- |
| `Obj`     | From the `constructor` | A generic type variable `Obj` indicates the type of the `value` parameter, by default captured from the provided `constructor` through the return type `value is Obj`. |
| `Payload` | `object`               | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                                  | Description |
| :-------------------------------------------------------------------------- | :---------- |
| `value: any`                                                                | The `value` of any type to check against an instance of the provided `constructor`. |
| `constructor: Constructor<Obj>`                                             | A [`class`][ts-classes] or [`function`][ts-function] that specifies the type of the [`Constructor`](#constructor). |
| `callback: CallbackPayload & { constructor: typeof constructor } & Payload` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape and the provided `constructor` to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                                         | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement, indicating the `value` is `Obj` of type captured from the provided `constructor`. |

The **return value** is a `boolean` indicating whether the provided `value` is an instance of a given `constructor`.

**Usage:**

```typescript
// Example usage.
import { isInstance } from '@angular-package/type';

// Classes.
class Some { x = 127; }
class Two { y = 'Lorem ipsum'; }

const SOME = new Some();
const TWO = new Two();

isInstance(TWO, Some); // false
isInstance(SOME, Some); // true
isInstance<Some, object>(TWO, Two); // true and type error

// Example usage with callback and payload.
isInstance(TWO, Some, (result, payload) => {
  if (payload) {
    payload.className // Returns `'Some'`
    payload.name // Returns `'isInstance'`
    payload.constructor // Returns the provided `Some`
    payload.value // Returns the provided `Two`
  }
  return result;
}, { className: Some.name });

// Function constructor.
function functionConstructor(this: any, ...args: any[]): any {
  if (args) {
    args.forEach((arg, index: number) => this[index] = arg[index]);
  }
  return this;
}

const anyInstance: any = new (functionConstructor as any)('First name', 'Sur name', 27);

isInstance(anyInstance, functionConstructor as any); // true
isInstance(new Array(), Array), // Returns `true` as `value is Array`
isInstance(new ArrayBuffer(20), ArrayBuffer), // Returns `true` as `value is ArrayBuffer`
isInstance(new Boolean(), Boolean), // Returns `true` as `value is Boolean`
isInstance(new DataView(new ArrayBuffer(20)), DataView), // Returns `true` as `value is ArrayBuffer`
isInstance(new Date(), Date), // Returns `true` as `value is Date`
isInstance(new Error(), Error), // Returns `true` as `value is Error`
isInstance(new EvalError(), EvalError), // Returns `true` as `value is EvalError`
isInstance(new Float64Array(), Float64Array), // Returns `true` as `value is Float64Array`
isInstance(new Float32Array(), Float32Array), // Returns `true` as `value is Float32Array`
isInstance(new Function(), Function), // Returns `true` as `value is Function`
isInstance(new Int16Array(), Int16Array), // Returns `true` as `value is Int16Array`
isInstance(new Int32Array(), Int32Array), // Returns `true` as `value is Int32Array`
isInstance(new Int8Array(), Int8Array), // Returns `true` as `value is Int8Array`
isInstance(new Function(), Function), // Returns `true` as `value is Function`
isInstance(new Map(), Map), // Returns `true` as `value is Map`
isInstance(new Number(), Number), // Returns `true` as `value is Number`
isInstance(new Object(), Object), // Returns `true` as `value is Object`
isInstance(new RangeError(), RangeError), // Returns `true` as `value is RangeError`
isInstance(new RangeError(), RangeError), // Returns `true` as `value is RangeError`
isInstance(new ReferenceError(), ReferenceError), // Returns `true` as `value is ReferenceError`
isInstance(new RegExp(/^[]/), RegExp), // Returns `true` as `value is RegExp`
isInstance(new Set(), Set), // Returns `true` as `value is Set`
isInstance(new String(), String), // Returns `true` as `value is String`
isInstance(new SyntaxError(), SyntaxError), // Returns `true` as `value is SyntaxError`
isInstance(new TypeError(), TypeError), // Returns `true` as `value is TypeError`
isInstance(new URIError(), URIError), // Returns `true` as `value is URIError`
isInstance(new Uint16Array(), Uint16Array), // Returns `true` as `value is Uint16Array`
isInstance(new Uint32Array(), Uint32Array), // Returns `true` as `value is Uint32Array`
isInstance(new Uint8Array(), Uint8Array), // Returns `true` as `value is Uint8Array`
isInstance(new Uint8ClampedArray(), Uint8ClampedArray), // Returns `true` as `value is Uint8ClampedArray`
isInstance(new WeakMap(), WeakMap), // Returns `true` as `value is WeakMap`
isInstance(new WeakSet(), WeakSet), // Returns `true` as `value is WeakSet`
```

<br>

#### `isKey()`

[![update]](#500)

Use `isKey()` or `is.key()` to check if **any** `value` is one of the [`string`][js-string], [`number`][js-number], or [`symbol`][js-symbol] type.


```typescript
const isKey = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is PropertyKey =>
  callback(isStringType(value) || isNumberType(value) || isSymbol(value), {
    ...{
      name: isKey.name,
      value,
    },
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns                | Type      | Description                                                                                                |
| :--------------------- | :-------: | :--------------------------------------------------------------------------------------------------------- |
| `value is PropertyKey` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is `PropertyKey`. |

The **return value** is a `boolean` indicating whether the provided `value` is a `PropertyKey`.

**Usage:**

```typescript
// Example usage
import { isKey } from '@angular-package/type';

const STRING = 'surname';
const STRING_INSTANCE = new String(STRING);
isKey(STRING); // true
isKey(STRING_INSTANCE); // true

const NUMBER = 27;
const NUMBER_INSTANCE = new Number(NUMBER);
isKey(NUMBER); // true
isKey(NUMBER_INSTANCE); // true

const SYMBOL_NUMBER: unique symbol = Symbol(NUMBER);
const SYMBOL_STRING: unique symbol = Symbol(STRING);
isKey(SYMBOL_NUMBER); // true
isKey(SYMBOL_STRING); // true
```

<br>

#### `isNull()`

[![update]](#500)

Use `isNull()` or `is.null()` to check if **any** `value` is an [`object`][js-object] type and equal to [`null`][js-null].

```typescript
const isNull = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is null =>
  callback(
    typeOf(value) === 'null' && typeof value === 'object' && value === null,
    {
      ...{
        name: isNull.name,
        value,
      },
      ...payload,
    } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is null` | `boolean` | The **return type** is a `boolean` as the result of its statement. |

The **return value** is a `boolean` indicating whether the provided `value` is [`null`][js-null].

**Usage:**

```typescript
// Example usage.
import { isNull } from '@angular-package/type';

isNull(null); // true
isNull(27); // false
```

<br>

#### `isNumberBetween()`

[![update]](#500)

Use `isNumberBetween()` or `is.numberBetween()` to check if **any** `value` is a [`number`][js-number] type, not instance of [`Object`][js-object] and [`Number`][js-number] or [`object`][js-object] type and instance of [`Number`][js-number] and [`Object`][js-object], in the specified range.

```typescript
const isNumberBetween = <
  Payload extends object,
  Min extends number,
  Max extends number
>(
  value: any,
  min: Min,
  max: Max,
  callback: ResultCallback<
    CallbackPayload & Payload & MinMax<Min, Max>
  > = resultCallback,
  payload?: Payload
): value is NumberBetween<Min, Max> =>
  callback(
    typeOf(value) === 'number' &&
      ((isNumberType(value) ? value >= min && value <= max : false) ||
        (isNumberObject(value)
          ? value.valueOf() >= min && value.valueOf() <= max
          : false)),
    {
      ...{
        name: isNumberBetween.name,
        min,
        max,
        value,
      },
      ...payload,
    } as CallbackPayload & Payload & MinMax<Min, Max>
  );
```

**Generic type variables:**

| Name  | Default value                    | Description |
| :---- | :------------------------------- | :---------- |
| `Min` | Captured from the provided `min` | A generic `Min` variable constrained with the `number` type, by default of a value captured from the provided `min` that indicates the minimum range of the provided `value` through the return type `value is NumberBetween<Min, Max>` |
| `Max` | Captured from the provided `min` | A generic `Max` variable constrained with the `number` type, by default of a value captured from the provided `max` that indicates the minimum range of the provided `value` through the return type `value is NumberBetween<Min, Max>` |

**Parameters:**

| Name: type                                                               | Description |
| :----------------------------------------------------------------------- | :---------- |
| `value: any`                                                             | The `value` of any type to check. |
| `min: Min`                                                               | A `number` of the minimum range of the provided `value`. |
| `max: Max`                                                               | A `number` of the maximum range of the provided `value`. |
| `callback: ResultCallback<CallbackPayload & Payload & MinMax<Min, Max>>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape and the provided `min` and `max` range to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                                      | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns                            | Type      | Description |
| :--------------------------------- | :-------: | :---------- |
| `value is NumberBetween<Min, Max>` | `boolean` | The **return type** is a `boolean` as the result of its statement, indicating the `value` is a `number` in the specified range. |

The **return value** is a `boolean` indicating whether or not the `value` is a `number` type or [`Number`][js-number] instance in the specified range.

**Usage:**

```typescript
// Example usage.
import { isNumberBetween } from '@angular-package/type';

const age = 13;

isNumberBetween(age, 0, 13); // true; The return type `value is NumberBetween<0, 13>`
isNumberBetween(age, 14, 28); // false; The return type `value is NumberBetween<14, 28>`
isNumberBetween(age, 0, 12); // false; The return type `value is NumberBetween<0, 12>`
isNumberBetween(age, 13, 13); // true; The return type `value is NumberBetween<13, 13>`

const ageBox = new Number(age);

isNumberBetween(ageBox, 0, 13); // true; The return type `value is NumberBetween<0, 13>`
isNumberBetween(ageBox, 14, 28); // false; The return type `value is NumberBetween<14, 28>`
isNumberBetween(ageBox, 0, 12); // false; The return type `value is NumberBetween<0, 12>`
isNumberBetween(ageBox, 13, 13); // true; The return type `value is NumberBetween<13, 13>`
```

<br>

#### `isNumber()`

[![update]](#500)

Use `isNumber()` or `is.number()` to check if **any** `value` is a [`number`][js-number] type not an instance of [`Number`][js-number] and [`Object`][js-object] or [`object`][js-object] type instance of [`Number`][js-number] and [`Object`][js-object].

```typescript
const isNumber = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is number =>
  callback(
    typeOf(value) === 'number' &&
    isFinite(value) === true &&
    (isNumberType(value) || isNumberObject(value)),
    {
      ...{
        name: isNumber.name,
        value,
      },
      ...payload,
    } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns           | Type      | Description |
| :---------------- | :-------: | :---------- |
| `value is number` | `boolean` | The **return type** is a `boolean` as the result of its statement. |

The **return value** is a `boolean` indicating whether the provided `value` is a `number` type or [`Number`][js-number] instance.

**Usage:**

```typescript
// Example usage.
import { isNumber } from '@angular-package/type';

isNumber(10304050); // true
isNumber(Number(10304050)); // true
isNumber(new Number(10304050)); // true
```

<br>

#### `isNumberObject()`

[![update]](#500)

Use `isNumberObject()` or `is.numberObject()` to check if **any** `value` is an [`object`][js-object] type and instance of [`Number`][js-number] and [`Object`][js-object].

```typescript
const isNumberObject = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is Number =>
  callback(
    typeof value === 'object' &&
    value instanceof Number === true &&
    value instanceof Object === true,
    {
      ...{
        name: isNumberObject.name,
        value,
      },
      ...payload,
    } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns           | Type      | Description |
| :---------------- | :-------: | :---------- |
| `value is Number` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is [`Number`][js-number]. |

The **return value** is a `boolean` indicating whether or not the `value` is a [`Number`][js-number] instance.

**Usage:**

```typescript
// Example usage.
import { isNumberObject } from '@angular-package/type';

isNumberObject(10304050); // false
isNumberObject(Number(10304050)); // false
isNumberObject(new Number(10304050)); // true
```

<br>

#### `isNumberType()`

[![update]](#500)

Use `isNumberType()` or `is.numberType()` to check if **any** `value` is a [`number`][js-number] type not an instance of [`Number`][js-number] and [`Object`][js-object].

```typescript
const isNumberType = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is number =>
  callback(
    value instanceof Number === false &&
    value instanceof Object === false &&
    typeof value === 'number',
    {
      ...{
        name: isNumberType.name,
        value,
      },
      ...payload,
    } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns           | Type      | Description |
| :---------------- | :-------: | :---------- |
| `value is number` | `boolean` | The **return type** is a `boolean` as the result of its statement. |

The **return value** is a `boolean` indicating whether or not the `value` is a `number` type.

**Usage:**

```typescript
// Example usage.
import { isNumberType } from '@angular-package/type';

isNumberType(10304050); // true
isNumberType(Number(10304050)); // true
isNumberType(new Number(10304050)); // false
```

<br>

#### `isObject()`

[![update]](#500)

Use `isObject()` or `is.object()` to check if **any** `value` is an [`object`][js-object] of a generic `Obj` type and [`Object`][js-object] instance.

```typescript
const isObject = <Obj = object, Payload extends object = object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is Obj =>
  callback(
    typeOf(value) === 'object' &&
    typeof value === 'object' &&
    value instanceof Object === true,
    {
      ...{
        name: isObject.name,
        value,
      },
      ...payload,
    } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Obj`     | `object`      | A generic type variable `Obj` indicates the type of `value` parameter through the return type `value is Obj`. |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Obj` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | By default `Obj` variable is equal to `object` and the **return type** is a `boolean` as the result of its statement indicating the `value` is `object`. |

The **return value** is a `boolean` indicating whether the provided `value` is an [`object`][js-object].

**Usage:**

```typescript
// Example usage.
import { isObject } from '@angular-package/type';

const x = 10304050;
const NUMBER = 10304050;
const STRING = '!@#$%^&*()abcdefghijklmnoprstuwyz';
const SYMBOL_NUMBER: unique symbol = Symbol(NUMBER);
const SYMBOL_STRING: unique symbol = Symbol(STRING);

interface ObjectOne {
  'key as string'?: boolean;
  1030405027?: string;
  5?: string;
  [NUMBER]: number;
  [STRING]: string;
  [SYMBOL_NUMBER]?: string;
  [SYMBOL_STRING]?: number;
  x: number;
}

const OBJECT_ONE: ObjectOne = {
  'key as string': true,
  1030405027: 'key is number',
  5: 'key is also number',
  [NUMBER]: NUMBER,
  [STRING]: 'key is string',
  [SYMBOL_NUMBER]: 'key is symbol number',
  [SYMBOL_STRING]: 6,
  x: 3000
};

isObject(OBJECT_ONE); // true
```

<br>

#### `isObjectKey()`

[![update]](#500)

Use `isObjectKey()` or `is.objectKey()` to check if **any** `value` is an [`object`][js-object] with its own specified `key` of the `PropertyKey` type.
The function uses [`hasOwnProperty`][js-hasownproperty] [`Object`][js-object] method to finds enumerable and non-enumerable `PropertyKey` as `string`, `number`, `symbol` unlike `Object.keys()`, but it can't find [`getter`][js-getter] property unlike [`in`][js-in-operator] operator, which can.

```typescript
const isObjectKey = <Type = object, Payload extends object = object>(
  value: any,
  key: PropertyKey | PropertyKey[],
  callback: ResultCallback<
    CallbackPayload & { key: typeof key } & Payload
  > = resultCallback,
  payload?: Payload
): value is Type =>
  callback(
    isObject(value)
      ? isArray(key)
        ? key.every((k) =>
            isKey(k) ? {}.hasOwnProperty.call(value, k) === true : false
          )
        : isKey(key)
        ? {}.hasOwnProperty.call(value, key)
        : false
      : false,
    {
      ...{
        key,
        name: isObjectKey.name,
        value,
      },
      ...payload,
    } as CallbackPayload & { key: typeof key } & Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Type`    | `object`      | A generic type variable `Type` indicates the type of `value` parameter, by default set to `object` through the return type `value is Type`. |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                  | Description |
| :---------------------------------------------------------- | :---------- |
| `value: any`                                                | The `value` of any type to check against an `object` that contains the given `key`. |
| `key: PropertyKey \| PropertyKey[]`                         | A property key or an array of property keys to check if the given `value` contains them. |
| `callback: CallbackPayload & { key: typeof key } & Payload` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape and the provided `key` to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                         | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns         | Type      | Description                                                            |
| :-------------- | :-------: | :--------------------------------------------------------------------- |
| `value is Type` | `boolean` | By default `Type` variable is equal to `object` and the **return type** is a `boolean` as the result of its statement indicating the `value` is `object`. |

The **return value** is a `boolean` indicating whether or not the `value` is an `object` with its own specified keys.

**Usage:**

```typescript
// Example usage.
import { isObjectKey } from '@angular-package/type';

const NUMBER = 10304050;
const STRING = '!@#$%^&*()abcdefghijklmnoprstuwyz';
const SYMBOL_NUMBER: unique symbol = Symbol(NUMBER);
const SYMBOL_STRING: unique symbol = Symbol(STRING);

interface ObjectOne {
  'key as string'?: boolean;
  1030405027?: string;
  5?: string;
  [NUMBER]: number;
  [STRING]: string;
  [SYMBOL_NUMBER]?: string;
  [SYMBOL_STRING]?: number;
  x: number;
}
const OBJECT_ONE: ObjectOne = {
  'key as string': true,
  1030405027: 'key is number',
  5: 'key is also number',
  [NUMBER]: NUMBER,
  [STRING]: 'key is string',
  [SYMBOL_NUMBER]: 'key is symbol number',
  [SYMBOL_STRING]: 6,
  x: 3000
};
isObjectKey(OBJECT_ONE, STRING); // true
isObjectKey(OBJECT_ONE, 1030405027); // true
isObjectKey(OBJECT_ONE, NUMBER); // true
isObjectKey(OBJECT_ONE, SYMBOL_NUMBER); // true
isObjectKey(OBJECT_ONE, SYMBOL_STRING); // true

class Class {

  1030405027 = 'my new number';
  5 = 'my number';

  firstName = 'My name';
  surname = 'Surname';

  x = NUMBER;
  y = STRING;

  get [NUMBER](): number {
    return this.x;
  }
  get [STRING](): string {
    return this.y;
  }

  get [SYMBOL_NUMBER](): number {
    return this.x;
  }

  get [SYMBOL_STRING](): string {
    return this.y;
  }
}

const CLASS = new Class();

// One of the differences between the `in` operator and the `hasOwnProperty()`
// method is that it doesn't find a getter key
isObjectKey(CLASS, SYMBOL_NUMBER); // false
isObjectKey(CLASS, SYMBOL_STRING); // false
isObjectKey(CLASS, [SYMBOL_NUMBER, SYMBOL_STRING]); // false
```

<br>

#### `isObjectKeyIn()`

[![update]](#500)

Use `isObjectKeyIn()` or `is.objectKeyIn()` to check if **any** `value` is an [`object`][js-object] of a generic type with the `key` of the `PropertyKey` type by using the [`in`][js-in-operator] operator.


```typescript
const isObjectKeyIn = <Type = object, Payload extends object = object>(
  value: any,
  key: PropertyKey | PropertyKey[],
  callback: ResultCallback<
    CallbackPayload & { key: typeof key } & Payload
  > = resultCallback,
  payload?: Payload
): value is Type =>
  callback(
    isObject(value)
      ? isArray(key)
        ? key.every((k) => (isKey(k) ? k in value : false))
        : isKey(key)
        ? key in value
        : false
      : false,
    {
      ...{
        key,
        name: isObjectKeyIn.name,
        value,
      },
      ...payload,
    } as CallbackPayload & { key: typeof key } & Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Type`    | `object`      | A generic type variable `Type` indicates the type of `value` parameter, by default set to `object` through the return type `value is Type`. |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                  | Description |
| :---------------------------------------------------------- | :---------- |
| `value: any`                                                | The `value` of any type to check against an `object` that contains the given `key`. |
| `key: PropertyKey \| PropertyKey[]`                         | A property key or an array of property keys to check if the given `value` contains them. |
| `callback: CallbackPayload & { key: typeof key } & Payload` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape and the provided `key` to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                         | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns         | Type      | Description                                                            |
| :-------------- | :-------: | :--------------------------------------------------------------------- |
| `value is Type` | `boolean` | By default `Type` variable is equal to `object` and the **return type** is a `boolean` as the result of its statement indicating the `value` is `object`. |

The **return value** is a `boolean` indicating whether the `value` is an `object` that contains provided keys.

**Usage:**

```typescript
// Example usage.
import { isObjectKeyIn } from '@angular-package/type';

const NUMBER = 10304050;
const STRING = '!@#$%^&*()abcdefghijklmnoprstuwyz';
const SYMBOL_NUMBER: unique symbol = Symbol(NUMBER);
const SYMBOL_STRING: unique symbol = Symbol(STRING);

class Class {

   1030405027 = 'my new number';
   5 = 'my number';

   firstName = 'My name';
   surname = 'Surname';

   x = NUMBER;
   y = STRING;

   get [NUMBER](): number {
     return this.x;
   }
   get [STRING](): string {
     return this.y;
   }

   get [SYMBOL_NUMBER](): number {
     return this.x;
   }

   get [SYMBOL_STRING](): string {
     return this.y;
   }
}

const CLASS = new Class();

// One of the differences between `in` operator and the `hasOwnProperty()`
// method is that it finds a getter key
isObjectKeyIn(CLASS, SYMBOL_NUMBER); // true
isObjectKeyIn(CLASS, SYMBOL_STRING); // true
isObjectKeyIn(CLASS, [SYMBOL_NUMBER, SYMBOL_STRING]); // true
```

<br>

#### `isObjectKeys()`

[![update]](#500)

Use `isObjectKeys()` or `is.objectKeys()` to check if **any** value is an [`object`][js-object] with **some** of its keys from given `keys` of the `PropertyKey` type.
Because of using [`some()`][js-array-some] on the provided `keys` parameter of [`Array`][js-array] its elements are treated as logic `or`, and if an element is an [`Array`][js-array] type its elements are treated as logic `and` because of using [`every()`][js-array-every].
The function uses [`hasOwnProperty`][js-hasownproperty] of [`Object`][js-object] method to find enumerable and non-enumerable `PropertyKey` as `string`, `number`, `symbol` unlike `Object.keys()`, but it can't find [`getter`][js-getter] property unlike [`in`][js-in-operator] operator, which can.

```typescript
const isObjectKeys = <Type = object, Payload extends object = object>(
  value: any,
  keys: (PropertyKey | Array<PropertyKey>)[],
  callback: ResultCallback<
    CallbackPayload & { keys: typeof keys } & Payload
  > = resultCallback,
  payload?: Payload
): value is Type =>
  callback(
    isObject(value)
      ? keys.some((key) =>
        isArray(key)
          ? key.every((k) =>
            isKey(k) ? {}.hasOwnProperty.call(value, k) === true : false
          )
          : isKey(key)
            ? {}.hasOwnProperty.call(value, key) === true
            : false
      )
      : false,
    {
      ...{
        keys,
        name: isObjectKeys.name,
        value,
      },
      ...payload,
    } as CallbackPayload & { keys: typeof keys } & Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Type`    | `object`      | A generic type variable `Type` indicates the type of `value` parameter, by default set to `object` through the return type `value is Type`. |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                    | Description |
| :------------------------------------------------------------ | :---------- |
| `value: any`                                                  | The `value` of any type to check against an `object` that contains some of the given `keys`. |
| `keys: (PropertyKey \| Array<PropertyKey>)[]`                 | An [`Array`][js-array] of property key or an array of property keys to check if the given `value` contains some of them. |
| `callback: CallbackPayload & { keys: typeof keys } & Payload` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape and the provided `keys` to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                           | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns         | Type      | Description                                                            |
| :-------------- | :-------: | :--------------------------------------------------------------------- |
| `value is Type` | `boolean` | By default `Type` variable is equal to `object` and the **return type** is a `boolean` as the result of its statement indicating the `value` is `object`. |

The **return value** is a `boolean` indicating whether the provided `value` is an `object` with some of its own given `keys`.

**Usage:**

```typescript
// Example usage.

```

<br>

#### `isPrimitive()`

[![update]](#500)

Use `isPrimitive()` or `is.primitive()` to check if **any** `value` is the [`Primitive`](#primitive) type from a given `type` of the [`Primitives`](#primitives).

```typescript
const isPrimitive = <
  P extends Primitive,
  Payload extends object = object
>(
  value: any,
  type: Primitives,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is P => {
  if (isStringType(type)) {
    switch (type) {
      case 'bigint':
        return isBigInt(value, callback, payload);
      case 'boolean':
        return isBooleanType(value, callback, payload);
      case 'number':
        return isNumberType(value, callback, payload);
      case 'null':
        return isNull(value, callback, payload);
      case 'string':
        return isStringType(value, callback, payload);
      case 'symbol':
        return isSymbol(value, callback, payload);
      case 'undefined':
        return isUndefined(value, callback, payload);
    }
  }
  return false;
};
```

**Generic type variables:**

| Name                  | Default value             | Description |
| :-------------------- | :------------------------ | :---------- |
| `P extends Primitive` | [`Primitive`](#primitive) | A generic type variable `P` constrained by the [`Primitive`](#primitive) type indicates the type of `value` parameter through the return type `value is P`. |
| `Payload`             | `object`                  | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `P` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check against the [`Primitive`](#primitive) of a given `type`. |
| `type: Primitives`                                    | A value of [`Primitives`](#primitives) type indicates against which type the provided `value` is checked. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns      | Type      | Description |
| :----------- | :-------: | :---------- |
| `value is P` | `boolean` | By default `P` variable is equal to [`Primitive`](#primitive) and the **return type** is a `boolean` as the result of its statement indicating the `value` is [`Primitive`](#primitive). |

The **return value** is a `boolean` indicating whether the provided `value` is a type from a given `type` of the [`Primitives`](#primitives).

**Usage:**

```typescript
// Example usage.
import { isPrimitive } from '@angular-package/type';

isPrimitive<bigint>(1n, 'bigint'); // Returns `true` as `value is bigint`
isPrimitive<boolean>(false, 'boolean'); // Returns `true` as `value is boolean`
isPrimitive<number>(27, 'number'); // Returns `true` as `value is number`
isPrimitive<null>(null, 'null'); // Returns `true` as `value is null`
isPrimitive<string>('age', 'string'); // Returns `true` as `value is string`
isPrimitive<symbol>(Symbol(27), 'symbol'); // Returns `true` as `value is symbol`
isPrimitive<undefined>(undefined, 'undefined'); // Returns `true` as `value is undefined`
```

<br>

#### `isRegExp()`

[![update]](#500)

Use `isRegExp()` or `is.regexp()` to check if **any** `value` is a regular expression of a [`RegExp`][js-regexp] type, an instance of [`Object`][js-object] and [`RegExp`][js-regexp].

```typescript
const isRegExp = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is RegExp =>
  callback(
    typeOf(value) === 'regexp' &&
    typeof value === 'object' &&
    value instanceof Object &&
    value instanceof RegExp,
    {
      ...{
        name: isRegExp.name,
        value,
      },
      ...payload,
    } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns           | Type      | Description |
| :---------------- | :-------: | :---------- |
| `value is RegExp` | `boolean` | The **return type** is a `boolean` as the result of its statement, indicating the `value` is a regular expression of a [`RegExp`][js-regexp]. |

The **return value** is a `boolean` indicating whether the provided `value` is a regular expression.

**Usage:**

```typescript
// Example usage.
import { isRegExp } from '@angular-package/type';

isRegExp(/[^a-z]/g); // true; The return type `value is RegExp`
```

<br>

#### `isString()`

[![update]](#500)

Use `isString()` or `is.string()` to check if **any** `value` is a [`string`][js-string] type, not instance of [`Object`][js-object] and [`String`][js-string] or [`object`][js-object] type and instance of [`String`][js-string] and [`Object`][js-object].

```typescript
const isString = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is string =>
  callback(
    typeOf(value) === 'string' &&
    (isStringType(value) || isStringObject(value)),
    {
      ...{
        name: isString.name,
        value,
      },
      ...payload,
    } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns           | Type      | Description |
| :---------------- | :-------: | :---------- |
| `value is string` | `boolean` | The **return type** is a `boolean` as the result of its statement. |

The **return value** is a `boolean` indicating whether the provided `value` is a `string` type or [`String`][js-string] instance.

**Usage:**

```typescript
// Example usage.
import { isString } from '@angular-package/type';

isString('age'); // true; The return type `value is string`
isString(new String('age')); // true; The return type `value is string`
```

<br>

#### `isStringLength()`

[![update]](#500)

Use `isStringLength()` or `is.stringLength()` to check if **any** `value` is a [`string`][js-string] type, not instance of [`Object`][js-object] and [`String`][js-string] or [`object`][js-object] type and instance of [`String`][js-string] and [`Object`][js-object], of a length in the specified range.

```typescript
const isStringLength = <
  Min extends number,
  Max extends number,
  Payload extends object
>(
  value: any,
  min: Min,
  max: Max,
  callback: ResultCallback<
    CallbackPayload & MinMax<Min, Max> & Payload
  > = resultCallback,
  payload?: Payload
): value is StringOfLength<Min, Max> =>
  callback(
    typeOf(value) === 'string' &&
    ((isStringType(value)
      ? value.length >= min && value.length <= max
      : false) ||
      (isStringObject(value)
        ? value.valueOf().length >= min && value.valueOf().length <= max
        : false)),
    {
      ...{
        name: isStringObject.name,
        min,
        max,
        value,
      },
      ...payload,
    } as CallbackPayload & MinMax<Min, Max> & Payload
  );
```

**Generic type variables:**

| Name  | Default value                    | Description |
| :---- | :------------------------------- | :---------- |
| `Min` | Captured from the provided `min` | A generic `Min` variable constrained with the `number` type, by default of a value captured from the provided `min` that indicates the minimum range of the provided `value` through the return type `value is StringOfLength<Min, Max>` |
| `Max` | Captured from the provided `min` | A generic `Max` variable constrained with the `number` type, by default of a value captured from the provided `max` that indicates the minimum range of the provided `value` through the return type `value is StringOfLength<Min, Max>` |

**Parameters:**

| Name: type                                                               | Description |
| :----------------------------------------------------------------------- | :---------- |
| `value: any`                                                             | The `value` of any type to check. |
| `min: Min`                                                               | A `number` of the minimum length of the provided `value` |
| `max: Max`                                                               | A `number` of the maximum length of the provided `value` |
| `callback: ResultCallback<CallbackPayload & MinMax<Min, Max> & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape and the provided `min` and `max` length to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                                      | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns                             | Type      | Description                                                       |
| :---------------------------------- | :-------: | :---------------------------------------------------------------- |
| `value is StringOfLength<Min, Max>` | `boolean` | The **return type** is a `boolean` as the result of its statement, indicating the `value` is a `string` of length in the specified range. |

The **return value** is a `boolean` indicating whether or not the `value` is a `string` type or [`String`][js-string] instance of length in the specified range.

**Usage:**

```typescript
// Example usage.
import { isStringLength } from '@angular-package/type';

const firstName = 'my first name';

isStringLength(firstName, 0, 13); // true; The return type `value is StringOfLength<0, 13>`
isStringLength(firstName, 14, 28); // false; The return type `value is StringOfLength<14, 28>`
isStringLength(firstName, 0, 12); // false; The return type `value is StringOfLength<0, 12>`
isStringLength(firstName, 13, 13); // true; The return type `value is StringOfLength<13, 13>`

const firstNameBox = new String(firstName);

isStringLength(firstNameBox, 0, 13); // true; The return type `value is StringOfLength<0, 13>`
isStringLength(firstNameBox, 14, 28); // false; The return type `value is StringOfLength<14, 28>`
isStringLength(firstNameBox, 0, 12); // false; The return type `value is StringOfLength<0, 12>`
isStringLength(firstNameBox, 13, 13); // true; The return type `value is StringOfLength<13, 13>`
```

<br>

#### `isStringObject()`

[![update]](#500)

Use `isStringObject()` or `is.stringObject()` to check if **any** `value` is an [`object`][js-object] type and instance of [`String`][js-string] and [`Object`][js-object].


```typescript
const isStringObject = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is String =>
  callback(
    value instanceof Object === true &&
    value instanceof String === true &&
    typeof value === 'object',
    {
      ...{
        name: isStringObject.name,
        value,
      },
      ...payload,
    } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns           | Type      | Description |
| :---------------- | :-------: | :---------- |
| `value is String` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is [`String`][js-string]. |

The **return value** is a `boolean` indicating whether the provided `value` is a [`String`][js-string] instance.

**Usage:**

```typescript
// Example usage.
import { isStringObject } from '@angular-package/type';

isStringObject('age'); // Returns `false` as `value is String`
isStringObject(new String('age')) // Returns `true` as `value is String`
```

<br>

#### `isStringType()`

[![update]](#500)

Use `isStringType()` or `is.stringType()` to check if **any** `value` is a [`string`][js-string] type and **not** instance of [`String`][js-string] and [`Object`][js-object].

```typescript
const isStringType = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is string =>
  callback(
    value instanceof Object === false &&
    value instanceof String === false &&
    typeof value === 'string',
    {
      ...{
        name: isStringType.name,
        value,
      },
      ...payload,
    } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns           | Type        | Description |
| :---------------- | :---------: | :---------- |
| `value is string` | `boolean`   | The **return type** is a `boolean` as the result of its statement. |

The **return value** is a `boolean` indicating whether the provided `value` is a [`string`][js-string] type.

**Usage:**

```typescript
// Example usage.
import { isStringType } from '@angular-package/type';

isStringType('age'); // Returns `true` as `value is string`
isStringType(new String('age')) // Returns `false` as `value is string`
```

<br>

#### `isSymbol()`

[![update]](#500)

Use `isSymbol()` or `is.symbol()` to check if **any** `value` is a [`symbol`][js-symbol] type.

```typescript
const isSymbol = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is symbol =>
  callback(typeOf(value) === 'symbol' && typeof value === 'symbol', {
    ...{
      name: isSymbol.name,
      value,
    },
    ...payload,
  } as Payload);

```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns           | Type      | Description |
| :---------------- | :-------: | :---------- |
| `value is symbol` | `boolean` | The **return type** is a `boolean` as the result of its statement. |

The **return value** is a `boolean` indicating whether the provided `value` is a `symbol`.

**Usage:**

```typescript
// Example usage.
import { isSymbol } from '@angular-package/type';

isSymbol(Symbol('age')); // Returns `true` as `value is symbol`
```

<br>

#### `isTrue()`

[![update]](#500)

Use `isTrue()` or `is.true()` to check if **any** `value` is a [`boolean`][js-boolean] type **not** an instance of [`Boolean`][js-boolean] and [`Object`][js-object], or is an `object` type and instance of [`Boolean`][js-boolean] and [`Object`][js-object], and equal to `true`.


```typescript
const isTrue = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is true =>
  callback(
    (isBooleanType(value) && value === true) ||
    (isBooleanObject(value) && value.valueOf() === true),
    {
      ...{
        name: isTrue.name,
        value,
      },
      ...payload,
    } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is true` | `boolean` | The **return type** is a `boolean` as the result of its statement, indicating the `value` is `true`. |

The **return value** is a `boolean` indicating whether the provided `value` is a `boolean` equal to `true`.

**Usage:**

```typescript
// Example usage.
import { isTrue } from '@angular-package/type';

isTrue(false); // Returns `false` as `value is true`
```

<br>

#### `isType()`

[![update]](#500)

Use `isType()` or `is.type()` to check if **any** `value` is a type of [`Type`](#type) from a given `type` of the [`Types`](#types).

```typescript
const isType = <T extends Type, Payload extends object = object>(
  value: any,
  type: Types<T>,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is T => {
  if (isStringType(type)) {
    switch (type) {
      // Primitives.
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'null':
      case 'string':
      case 'symbol':
      case 'undefined': return isPrimitive(value, type, callback, payload);
      // Function.
      case 'function': return isFunction(value, callback, payload);
      // Object.
      case 'object': return isObject(value, callback, payload);
    }
  } else if (isNotNull(type)) {
    return isInstance(value, type, callback, payload);
  }
  return false;
};
```

**Generic type variables:**

| Name             | Default value   | Description |
| :--------------- | :-------------- | :---------- |
| `T extends Type` | [`Type`](#type) | A generic type variable `T` constrained by the [`Type`](#type) indicates the type of `value` parameter through the return type `value is T`. |
| `Payload`        | `object`        | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `T` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check against a type of given `type` of [`Types`](#types). |
| `type: Primitives`                                    | A value of [`string`][js-string] or [`Constructor`](#constructor) type of the `Types` indicates against which type the provided `value` is checked. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns      | Type      | Description                                                                                                           |
| :----------- | :-------: | :-------------------------------------------------------------------------------------------------------------------- |
| `value is T` | `boolean` | By default `T` variable is equal to [`Type`](#type), but captured [`class`][ts-classes] by the provided `type` changes it to the class name and the **return type** is a `boolean` as the result of its statement indicating the `value` is [`Type`](#type). |

The **return value** is a `boolean` indicating whether the provided `value` is a type from a given `type` of the [`Types`](#types).

**Usage:**

```typescript
// Example usage.
import { isType } from '@angular-package/type';

class Person {}
const person = new Person();

// Primitives.
isType<bigint>(1n, 'bigint'); // Returns `true` as `value is bigint`
isType<boolean>(false; 'boolean'), // Returns `true` as `value is boolean`
isType<number>(27, 'number'); // Returns `true` as `value is number`
isType<null>(null, 'null'); // Returns `true` as `value is null`
isType<string>('age', 'string'); // Returns `true` as `value is string`
isType<symbol>(Symbol(27); 'symbol'); // Returns `true` as `value is symbol`
isType<undefined>(undefined, 'undefined'); // Returns `true` as `value is undefined`
// Function.
isType<Function>(() => {}, 'function'); // Returns `true` as `value is function`
// Object.
isType<object>({}, 'object'); // Returns `true` as `value is object`
// Class.
isType(person, Person); // Returns `true` as `value is Person`
// Class with callback and payload.
isType(person, Person, (result, payload) => {
  /*
  payload {
    name: 'isInstance',
    value: {},
    id: 15,
    database: 'Persons'
  }
  */
  return result;
}, { id: 15, database: 'Persons' }), // Returns `true` as `value is Person`
```

<br>

#### `isUndefined()`

[![update]](#500)

Use `isUndefined()` or `is.undefined()` to check if **any** `value` is an [`undefined`][js-undefined] type and equal to [`undefined`][js-undefined].

```typescript
const isUndefined = <Payload extends object>(
  value: any,
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is undefined =>
  callback(
    typeOf(value) === 'undefined' &&
    typeof value === 'undefined' &&
    value === undefined,
    {
      ...{
        name: isUndefined.name,
        value,
      },
      ...payload,
    } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of the [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with `payload` parameter of the default [`CallbackPayload`][package-callback-callbackpayload] shape to handle the `result` and `payload` of the check before the `result` return. By default it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of a generic type variable `Payload` that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns              | Type      | Description |
| :------------------- | :-------: | :---------- |
| `value is undefined` | `boolean` | The **return type** is a `boolean` as the result of its statement. |

The **return value** is a `boolean` indicating whether the provided `value` is `undefined`.

**Usage:**

```typescript
// Example usage.
import { isUndefined } from '@angular-package/type';

let age;
isUndefined(age); // Returns `true` as `value is undefined`
isUndefined(27); // Returns `false` as `value is undefined`
```

<br>

#### `isNotBoolean()`

Use `isNotBoolean()` or `is.not.boolean()` to check if a generic `Type` `value` is **not** a `boolean` type and **not** an instance of a [`Boolean`][js-boolean].

```typescript
const isNotBoolean: IsNotBoolean = <Type>(
  value: Type,
  callback: ResultCallback = resultCallback
): value is Never<AnyBoolean, Type> =>
  callback(
    typeOf(value) !== 'boolean' &&
    typeof value !== 'boolean' &&
    value instanceof Boolean === false,
    value
  );
```

**Generic type variables:**

| Name   | Default value    | Description                                                                                      |
| :----- | :--------------- | :----------------------------------------------------------------------------------------------- |
| `Type` | From the `value` | A generic `Type` variable from the `value` to the return type `value is Never<AnyBoolean, Type>` |

**Parameters:**

| Name: `type`               | Description                                                                      |
| :------------------------- | :------------------------------------------------------------------------------- |
| value: `Type`              | A generic `Type` `value`, by default of type detected from the `value`, to check |
| callback: `ResultCallback` | A [`ResultCallback`][package-callback-resultcallback] type function, which by default is [`resultCallback()`](#resultcallback) to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns                            | Type      | Description                        |
| :--------------------------------- | :-------: | :--------------------------------- |
| `value is Never<AnyBoolean, Type>` | `boolean` | By default `Type` variable is equal to the type detected from the `value`, but the detected type `boolean` or [`Boolean`][js-boolean] changes to `never` and the **return type** is a `boolean` as the result of its statement `value` is **never** of [`AnyBoolean`](#anyboolean) type but of type detected from the `value` |

The **return value** is a `boolean` indicating whether or not the `value` is not a `boolean` and [`Boolean`][js-boolean] instance.

**Usage:**

```typescript
// Example usage.
import { isNotBoolean } from '@angular-package/type';

const anyBoolean: any = true;
const strictBoolean = false;
const objectBoolean = new Boolean(strictBoolean);

isNotBoolean(anyBoolean); // false; return type is `value is any`
isNotBoolean(strictBoolean); // false; return type is `value is never`
isNotBoolean(objectBoolean); // false; return type is `value is never`
```

<br>

#### `isNotDefined()`

Use `isNotDefined()` or `is.not.defined()` to check if a generic `Type` `value` is an `undefined` type and is equal to `undefined`.

```typescript
const isNotDefined: IsNotDefined = <Type>(
  value: Type,
  callback: ResultCallback = resultCallback
): value is Undefined<Type> =>
  callback(
    typeOf(value) === 'undefined' &&
    typeof value === 'undefined' &&
    value === undefined,
    value
  );
```

**Generic type variables:**

| Name   | Default value    | Description |
| :----- | :--------------- | :---------- |
| `Type` | From the `value` | A generic `Type` variable from the `value` to the return type `value is Undefined<Type>` |

**Parameters:**

| Name: `type`               | Description                 |
| :------------------------- | :-------------------------- |
| value: `Type`              | A generic `Type` `value`, by default of type detected from the `value`, to check |
| callback: `ResultCallback` | A [`ResultCallback`][package-callback-resultcallback] type function, which by default is [`resultCallback()`](#resultcallback) to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns                    | Type      | Description                         |
| :------------------------- | :-------: | :---------------------------------- |
| `value is Undefined<Type>` | `boolean` | By default `Type` variable is equal to the type detected from the `value`, but the detected type other than `undefined` changes to `never` and the **return type** is a `boolean` as the result of its statement `value` is **never** of any other type than `undefined` |

The **return value** is a `boolean` indicating whether or not the `value` is not defined, is `undefined`.

**Usage:**

```typescript
// Example usage.
import { isNotDefined } from '@angular-package/type';

const anyUndefined: any = undefined;
const firstName = undefined;
const surname = 'My last name ';

isNotDefined(anyUndefined); // true; return type is `value is any`
isNotDefined(firstName); // true;  return type is `value is undefined`
isNotDefined(surname); // false; return type is `value is never`
```

<br>

#### `isNotFunction()`

Use `isNotFunction()` or `is.not.function()` to check if a generic `Type` `value` is **not** a `function` type and **not** an instance of [`Function`][js-function].

```typescript
const isNotFunction: IsNotFunction = <Type>(
  value: Type,
  callback: ResultCallback = resultCallback
): value is Never<Func, Type> =>
  callback(
    typeOf(value) !== 'function' &&
    typeof value !== 'function' &&
    value instanceof Function === false,
    value
  );
```

**Generic type variables:**

| Name   | Default value    | Description |
| :----- | :--------------- | :---------- |
| `Type` | From the `value` | A generic `Type` variable from the `value` to the return type `value is Never<Func, Type>` |

**Parameters:**

| Name: `type`               | Description                                                                      |
| :------------------------- | :------------------------------------------------------------------------------- |
| value: `Type`              | A generic `Type` `value`, by default of type detected from the `value`, to check |
| callback: `ResultCallback` | A [`ResultCallback`][package-callback-resultcallback] type function, which by default is [`resultCallback()`](#resultcallback) to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns                      | Type      | Description                         |
| :--------------------------- | :-------: | :---------------------------------- |
| `value is Never<Func, Type>` | `boolean` | By default `Type` variable is equal to the type detected from the `value`, but the detected type `Func` changes to `never` and the **return type** is a `boolean` as the result of its statement `value` is **never** [`Function`][js-function] but of type detected from the `value`. |

The **return value** is a `boolean` indicating whether or not the `value` is not a `function`.

**Usage:**

```typescript
// Example usage.
import { IsNotFunction } from '@angular-package/type';

const anyFunc: any = (x: number) => x + 5;
const myFunc: Func = (x: string) => x;

isNotFunction(anyFunc); // false; return type is `value is any`
isNotFunction(myFunc); // false; return type is `value is never`
isNotFunction('maybe i am not a function'); // true; return type is `value is string`
```

<br>

#### `isNotNull()`

Use `isNotNull()` or `is.not.null()` to check if a generic `Type` `value` is **not** a `null` type and **not** equal to `null`.

```typescript
const isNotNull: IsNotNull = <Type>(
  value: Type,
  callback: ResultCallback = resultCallback
): value is Never<null, Type> =>
  callback(typeOf(value) !== 'null' && value !== null, value);
```

**Generic type variables:**

| Name   | Default value    | Description |
| :----- | :--------------- | :---------- |
| `Type` | From the `value` | A generic `Type` variable from the `value` to the return type `value is Never<null, Type>` |

**Parameters:**

| Name: `type`               | Description                 |
| :------------------------- | :-------------------------- |
| value: `Type`              | A generic `Type` `value`, by default of type detected from the `value` to check |
| callback: `ResultCallback` | A [`ResultCallback`][package-callback-resultcallback] type function, which by default is [`resultCallback()`](#resultcallback) to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns                      | Type      | Description                         |
| :--------------------------- | :-------: | :---------------------------------- |
| `value is Never<null, Type>` | `boolean` | By default `Type` variable is equal to the type detected from the `value`, but the detected type `null` changes to `never` and the **return type** is a `boolean` as the result of its statement `value` is **never** `null` but of type detected from the `value` |

The **return value** is a `boolean` indicating whether or not the `value` is not `null`.

**Usage:**

```typescript
// Example usage
import { isNotNull } from '@angular-package/type';

const anyNull: any = null;
const firstName = null;

isNotNull(anyNull); // return type is `value is any`
isNotNull(firstName); // return type is `value is never`
```

<br>

#### `isNotNumber()`

Use `isNotNumber()` or `is.not.number()` to check if a generic `Type` `value` is **not** a `number` type and **not** an instance of [`Number`][js-number].

```typescript
const isNotNumber: IsNotNumber = <Type>(
  value: Type,
  callback: ResultCallback = resultCallback
): value is Never<AnyNumber, Type> =>
  callback(
    typeOf(value) !== 'number' &&
    typeof value !== 'number' &&
    value instanceof Number === false,
    value
  );
```

**Generic type variables:**

| Name   | Default value    | Description |
| :----- | :--------------- | :---------- |
| `Type` | From the `value` | A generic `Type` variable from the `value` to the return type `value is Never<AnyNumber, Type>` |

**Parameters:**

| Name: `type`               | Description                                                             |
| :------------------------- | :---------------------------------------------------------------------- |
| value: `Type`              | A generic `Type`, by default of type detected from the `value` to check |
| callback: `ResultCallback` | A [`ResultCallback`][package-callback-resultcallback] type function, which by default is [`resultCallback()`](#resultcallback) to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns                           | Type      | Description                         |
| :-------------------------------- | :-------: | :---------------------------------- |
| `value is Never<AnyNumber, Type>` | `boolean` | By default `Type` variable is equal to the type detected from the `value`, but the detected type `number` or [`Number`][js-number] changes to `never` and the **return type** is a `boolean` as the result of its statement `value` is **never** [`AnyNumber`](#anynumber) but of type detected from the `value` |

The **return value** is a `boolean` indicating whether or not the `value` is not a `number` and [`Number`][js-number] instance.

**Usage:**

```typescript
// Example usage
import { isNotNumber } from '@angular-package/type';

const anyNumber: any = 'any number';
const firstName = 'firstName';
const age = 27;
const objectNumber = new Number(927);

isNotNumber(anyNumber); // return type is `value is any`
isNotNumber(firstName); // return type is `value is string`
isNotNumber(age); // return type is `value is never`
isNotNumber(objectNumber); // return type is `value is never`
```

<br>

#### `isNotString()`

Use `isNotString()` or `is.not.string()` to check if a generic `Type` `value` is **not** a `string` type and **not** an instance of [`String`][js-string].

```typescript
const isNotString: IsNotString = <Type>(
  value: Type,
  callback: ResultCallback = resultCallback
): value is Never<AnyString, Type> =>
  callback(
    typeOf(value) !== 'string' &&
    typeof value !== 'string' &&
    value instanceof String === false,
    value
  );
```

**Generic type variables:**

| Name   | Default value    | Description |
| :----- | :--------------- | :---------- |
| `Type` | From the `value` | A generic `Type` variable from the `value` to the return type `value is Never<AnyString, Type>` |

**Parameters:**

| Name: `type`               | Description                                                             |
| :------------------------- | :---------------------------------------------------------------------- |
| value: `Type`              | A generic `Type`, by default of type detected from the `value` to check |
| callback: `ResultCallback` | A [`ResultCallback`][package-callback-resultcallback] type function, which by default is [`resultCallback()`](#resultcallback) to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

The function returns statement `value is Never<AnyString, Type>`.

| Type      | Description                         |
| :-------: | :---------------------------------- |
| `boolean` | By default `Type` variable is equal to the type detected from the `value`, but the detected type `string` or [`String`][js-string] changes to `never` and the **return type** is a `boolean` as the result of its statement `value` is **never** [`AnyString`](#anystring) but of type detected from the `value` |

The **return value** is a `boolean` indicating whether or not the `value` is not a `string` and [`String`][js-string] instance.

**Usage:**

```typescript
// Example usage
import { isNotString } from '@angular-package/type';

const anyString: any = 'any string';
const firstName = 'firstName';
const age = 27;
const objectString = new String('hold me');

isNotString(anyString); // return type is `value is any`
isNotString(firstName); // return type is `value is never`
isNotString(age); // return type is `value is number`
isNotString(objectString); // return type is `value is never`
```

<br>

#### `isNotUndefined()`

Use `isNotUndefined()` or `is.not.undefined()` to check if a generic `Type` `value` is **not** an `undefined` type and **not** equal to `undefined`.

```typescript
const isNotUndefined: IsNotUndefined = <Type>(
  value: Type,
  callback: ResultCallback = resultCallback
): value is Defined<Type> =>
  callback(
    typeOf(value) !== 'undefined' &&
    typeof value !== 'undefined' &&
    value !== undefined,
    value
  );
```

**Parameters:**

| Name: `type`               | Description                                                                      |
| :------------------------- | :------------------------------------------------------------------------------- |
| value: `Type`              | A generic `Type` `value`, by default of type detected from the `value`, to check |
| callback: `ResultCallback` | A [`ResultCallback`][package-callback-resultcallback] type function, which by default is [`resultCallback()`](#resultcallback) to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns                  | Type      | Description                        |
| :----------------------- | :-------: | :--------------------------------- |
| `value is Defined<Type>` | `boolean` | By default `Type` variable is equal to the type detected from the `value`, but the detected type `undefined` changes to `never` and the **return type** is a `boolean` as the result of its statement `value` is defined of type detected from the `value` |

The **return value** is a `boolean` indicating whether or not the `value` is not `undefined`.

**Usage:**

```typescript
// Example usage.
import { is } from '@angular-package/type';

interface Config {
  a?: string;
  b?: string;
}
const config: Config = {
  a: 'x',
  b: 'y'
};

function configFunction(value: string): string {
  return '';
}

if (is.not.undefined(config.a)) {
  configFunction(config.a);
}
```

<br>

### Check objects

#### `are.`

The object contains prefixed with `are` functions.

```typescript
const are: Are = {
  string: areString
};
```

<br>

#### `is.`

[![update]](#500)

The object contains prefixed with `is` functions and prefixed with `isNot` functions in property `not`.

```typescript
const is: Is = {
  array: isArray,
  bigint: isBigInt,
  boolean: isBoolean,
  booleanObject: isBooleanObject,
  booleanType: isBooleanType,
  class: isClass,
  date: isDate, // From the `4.2.0` version.
  defined: isDefined,
  false: isFalse, // From the `4.2.0` version.
  function: isFunction,
  instance: isInstance,
  key: isKey,
  not: isNot,
  null: isNull,
  number: isNumber,
  numberBetween: isNumberBetween, // From the `4.2.0` version.
  numberObject: isNumberObject,
  numberType: isNumberType,
  object: isObject,
  objectKey: isObjectKey,
  objectKeyIn: isObjectKeyIn,
  objectKeys: isObjectKeys,
  primitive: isPrimitive,
  regexp: isRegExp, // From the `4.2.0` version.
  string: isString,
  stringLength: isStringLength, // From the `4.2.0` version.
  stringObject: isStringObject,
  stringType: isStringType,
  symbol: isSymbol,
  true: isTrue, // From the `4.2.0` version.
  type: isType,
  undefined: isUndefined
};
```

<br>

#### `isNot.`

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

<br>

## Guard

### Guard functions

Guards the provided value to be

* an [`array`][js-array] of a generic type with [`guardArray()`](#guardarray).
* a [`bigint`][js-bigint] with [`guardBigInt()`](#guardbigint).
* a [`boolean`][js-boolean] with [`guardBoolean()`](#guardboolean).
* a [`class`][ts-classes] with [`guardClass()`](#guardclass).
* defined with [`guardDefined()`](#guarddefined).
* a [`function`][js-function] type with [`guardFunction()`](#guardfunction).
* an instance with [`guardInstance()`](#guardinstance).
* a [`null`][js-null] with [`guardNull()`](#guardnull).
* a `PropertyKey` with [`guardKey()`](#guardkey).
* a [`number`][js-number] with [`guardNumber()`](#guardnumber).
* an [`object`][js-object] of a generic type with [`guardObject()`](#guardobject).
* an [`object`][js-object] of a generic type that contains `key` with [`guardObjectKey()`](#guardobjectkey).
* an [`object`][js-object] of a generic type that contains some of its own specified keys with [`guardObjectKeys()`](#guardobjectkeys).
* one of the [`Primitives`](#primitives) with [`guardPrimitive()`](#guardprimitive).
* a [`string`][js-string] with [`guardString()`](#guardstring).
* a [`symbol`][js-symbol] with [`guardSymbol()`](#guardsymbol).
* one of the [`Types`](#types) with [`guardType()`](#guardtype).
* [`undefined`][js-undefined] with [`guardUndefined()`](#guardundefined).

<br>

#### `guardArray()`

Use `guardArray()` or `guard.is.array()` to guard the `value` to be an [`Array`][js-array] of a generic `Type`.

```typescript
const guardArray: GuardArray = <Type>(
  value: Array<Type>,
  callback?: ResultCallback
): value is Array<Type> => isArray<Type>(value, callback);
```

**Generic type variables:**

| Name   | Default value    | Description |
| :----- | :--------------- | :---------- |
| `Type` | From the `value` | An `Array` of a `Type` variable from the `value` to the return type `value is Array<Type>` |

**Parameters:**

| Name: `type`                | Description                                                                               |
| :-------------------------- | :---------------------------------------------------------------------------------------- |
| value: `Array<Type>`        | An `Array` of a generic `Type`, by default of type detected from the `value` - to guard   |
| callback?: `ResultCallback` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns                | Type      | Description                                                       |
| :--------------------- | :-------: | :---------------------------------------------------------------- |
| `value is Array<Type>` | `boolean` | By default `Type` variable is equal to the type detected from the `value` and the **return type** is a `boolean` as the result of its statement indicating the `value` is an [`Array`][js-array] of `Type` detected from the `value` |

The **return value** is a `boolean` indicating whether or not the `value` is an [`Array`][js-array].

**Usage:**

```typescript
// Example usage.
```

<br>

#### `guardBigInt()`

Use `guardBigInt()` or `guard.is.bigint()` to guard the `value` to be a `bigint`.

```typescript
const guardBigInt: GuardBigInt = (
  value: bigint,
  callback?: ResultCallback
): value is bigint => isBigInt(value, callback);
```

**Parameters:**

| Name: `type`                | Description                      |
| :-------------------------- | :------------------------------- |
| value: `bigint`             | A `bigint` type `value` to guard |
| callback?: `ResultCallback` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Type     | Description |
| :------- | :---------- |
| `bigint` | The **return value** is a `boolean` indicating whether or not the `value` is a `bigint` |

<br>

#### `guardBoolean()`

Use `guardBoolean()` or `guard.is.boolean()` to guard the `value` to be any type of a boolean.

```typescript
const guardBoolean: GuardBoolean = <B extends AnyBoolean>(
  value: B,
  callback?: ResultCallback
): value is B => isBoolean(value, callback);
```

**Generic type variables:**

| Name                   | Default value    | Description |
| :--------------------- | :--------------- | :---------- |
| `B extends AnyBoolean` | From the `value` | Guarded with [`AnyBoolean`](#anyboolean), generic `B` variable from the `value` to the return type `value is B` |

**Parameters:**

| Name: `type`                | Description                                                                                                                       |
| :-------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| value: `B`                  | An [`AnyBoolean`](#anyboolean) type `value`, by default of a generic `B` type detected from the `value` - to guard                |
| callback?: `ResultCallback` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns      | Type      | Description                                                       |
| :----------- | :-------: | :---------------------------------------------------------------- |
| `value is B` | `boolean` | By default `B` variable is equal to the type detected from the `value` and the **return type** is a `boolean` as the result of its statement indicating the `value` is of [`AnyBoolean`](#anyboolean) type detected from the `value`  |

The **return value** is a `boolean` indicating whether or not the `value` is a `boolean` type or [`Boolean`][js-boolean] instance.

<br>

#### `guardClass()`

Use `guardClass()` or `guard.is.class()` to guard the `value` to be a generic `Class` type of [`class`][ts-classes].

```typescript
const guardClass: GuardClass = <Class extends Function>(
  value: Class,
  callback?: ResultCallback
): value is Class => isClass<Class>(value, callback);
```

**Generic type variables:**

| Name                     | Default value    | Description |
| :----------------------- | :--------------- | :---------- |
| `Class extends Function` | From the `value` | Guarded with [`Function`][ts-function], generic `Class` variable from the `value` to the return type `value is Class` |

**Parameters:**

| Name: `type`                | Description                                                                                                       |
| :-------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| value: `Class`              | A [`Function`][ts-function] type `value`, by default of a generic `Class` type detected from the `value` to guard |
| callback?: `ResultCallback` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]                         |

**Returns:**

| Returns          | Type      | Description                                                       |
| :--------------- | :-------: | :---------------------------------------------------------------- |
| `value is Class` | `boolean` | By default `Class` variable is equal to the type detected from the `value` and the **return type** is a `boolean` as the result of its statement indicating the `value` is a [`Function`][js-function] of type detected from the `value` |

The **return value** is `boolean` indicating whether or not the `value` is a [`class`][ts-classes].

**Usage:**

```typescript
// Example usage.
import { guardClass } from '@angular-package/type';

type Func = (...param: any) => any;

/**
 * typeof === 'function'
 * instanceof Function === true
 * instanceof Object === true
 */
const FUNCTION: Func = (x: number, y: string): any => x + y;

/**
 * typeof === 'function'
 * instanceof Class === false
 * instanceof Function === true
 * instanceof Object === true
 */
class Class {

  1030405027 = 'my new number';
  5 = 'my number';

  firstName = 'My name';
  surname = 'Surname';

  x = NUMBER;
  y = STRING;

  get [NUMBER](): number {
    return this.x;
  }
  get [STRING](): string {
    return this.y;
  }

  get [SYMBOL_NUMBER](): number {
    return this.x;
  }

  get [SYMBOL_STRING](): string {
    return this.y;
  }
}

guardClass(FUNCTION); // false
guardClass<Class>(FUNCTION); // type error
```

<br>

#### `guardDefined()`

Use `guardDefined()` or `guard.is.defined()` to guard the `value` to be defined.

```typescript
const guardDefined: GuardDefined = <Type>(
  value: Defined<Type>,
  callback?: ResultCallback
): value is Defined<Type> => isDefined(value, callback);
```

**Generic type variables:**

| Name   | Default value    | Description                                                                                         |
| :----- | :--------------- | :-------------------------------------------------------------------------------------------------- |
| `Type` | From the `value` | Guarded with [`Defined`](#defined), a generic `Type` variable from the `value` to the return type `value is Defined<Type>` |

**Parameters:**

| Name: `type`                | Description                                                                                                                       |
| :-------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| value: `Defined<Type>`      | A generic type `value`, by default of **not** undefined type detected from the `value` to guard against `undefined`               |
| callback?: `ResultCallback` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns                  | Type      | Description                                                       |
| :----------------------- | :-------: | :---------------------------------------------------------------- |
| `value is Defined<Type>` | `boolean` | By default `Type` variable is equal to the type detected from the `value`, but the detected type `undefined` changes to `never` and the **return type** is a `boolean` as the result of its statement indicating the `value` is of type detected from the `value` |

The **return value** is a `boolean` indicating whether or not the `value` is defined.

**Usage:**

```typescript
// Example usage.
import { guardDefined } from '@angular-package/type';

let letFirstName = 'my name';
guardDefined(letFirstName); // true; return type `value is string`

const firstName = 'my const name';
guardDefined(firstName); // true; return type `value is string`
```

<br>

#### `guardFunction()`

Use `guardFunction()` or `guard.is.function()` to guard the `value` to be a [`Func`](#func) type.

```typescript
const guardFunction: GuardFunction = (
  value: Func,
  callback?: ResultCallback
): value is Func => isFunction(value, callback);
```

**Parameters:**

| Name: `type`                | Description                                                                               |
| :-------------------------- | :---------------------------------------------------------------------------------------- |
| value: `Func`               | A [`Func`](#func) type `value` to guard                                                   |
| callback?: `ResultCallback` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns         | Type      | Description                                                                                                 |
| :-------------- | :-------: | :---------------------------------------------------------------------------------------------------------- |
| `value is Func` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is [`Func`](#func) |

The **return value** is a `boolean` indicating whether or not the `value` is a [`Func`](#func).

**Usage:**

```typescript
```

<br>

#### `guardInstance()`

Use `guardInstance()` or `guard.is.instance()` to guard the `value` to be an `object` of a generic `Obj` type and an `instance` of [`Constructor`](#constructor) type.

```typescript
const guardInstance: GuardInstance = <Obj extends object>(
  value: Obj,
  constructor: Constructor<Obj>,
  callback?: ResultCallback
): value is Obj => isInstance<Obj>(value, constructor, callback);
```

**Generic type variables:**

| Name                 | Default value    | Description                                                                              |
| :------------------- | :--------------- | :--------------------------------------------------------------------------------------- |
| `Obj extends object` | From the `value` | Guarded with `object`, `Obj` variable from the `value` to the return type `value is Obj` |

**Parameters:**

| Name: `type`                    | Description                                                                                                                       |
| :------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------- |
| value: `Obj`                    | An `object`, by default of a generic `Obj` type detected from the `value` to guard and to check if it's a `constructor` instance  |
| constructor: `Constructor<Obj>` | A [`class`][ts-classes] or [`function`][ts-function] that specifies the type of the [`constructor`](#constructor)                |
| callback?: `ResultCallback`     | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns        | Type      | Description                                                       |
| :------------- | :-------: | :---------------------------------------------------------------- |
| `value is Obj` | `boolean` | By default `Obj` variable is equal to the type detected from the `value` and the **return type** is a `boolean` as the result of its statement indicating the `value` is an `object` of type detected from the `value` |

The **return value** is a `boolean` indicating whether or not the `value` is an `instance` of a generic `Obj`.

**Usage:**

```typescript
// Usage example.
import { guardInstance } from '@angular-package/type';

// Person interface.
interface Person {
  firstName?: string;
  surname?: string;
  age?: number;
  sex?: 'male' | 'female';
}

// Class constructor.
class Persons implements Person {
  firstName = '';
  surname = '';
  age = 15;
}

// Function person constructor.
function personFunctionConstructor(this: Person, ...args: any[]): Person {
  if (args) {
    this.firstName = args[0];
    this.surname = args[1];
    this.age = args[2];
    this.sex = args[3];
  }
  return this;
}

const personInstance: Person = new (personFunctionConstructor as any)('First name', 'Sur name', 27);
const personsInstance: Persons = new Persons();

guardInstance(personInstance, personFunctionConstructor as any); // true
guardInstance(personsInstance, Persons); // true
```

<br>

#### `guardKey()`

Use `guardKey()` or `guard.is.key()` to guard the `value` to be one of the `string`, `number`, or `symbol`.

```typescript
const guardKey: GuardKey = (
  value: Key,
  callback?: ResultCallback
): value is Key => isKey(value, callback);
```

**Parameters:**

| Name: `type`                | Description                           |
| :-------------------------- | :------------------------------------ |
| value: `Key`                | A `PropertyKey` type `value` to guard  |
| callback?: `ResultCallback` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns        | Type      | Description                                                                                              |
| :------------- | :-------: | :------------------------------------------------------------------------------------------------------- |
| `value is Key` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is `PropertyKey` |

The **return value** is a `boolean` indicating whether or not the `value` is a `PropertyKey`.

<br>

#### `guardNull()`

Use `guardNull()` or `guard.is.null()` to guard the `value` to be a `null`.

```typescript
const guardNull: GuardNull = (
  value: null,
  callback?: ResultCallback
): value is null => isNull(value, callback);
```

**Parameters:**

| Name: `type`                | Description                    |
| :-------------------------- | :----------------------------- |
| value: `null`               | A `null` type `value` to guard |
| callback?: `ResultCallback` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns         | Type      | Description                                                                                          |
| :-------------- | :-------: | :--------------------------------------------------------------------------------------------------- |
| `value is null` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a `null` |

The **return value** is a `boolean` indicating whether or not the `value` is a `null`.

<br>

#### `guardNumber()`

Use `guardNumber()` or `guard.is.number()` to guard the `value` to be any type of a number.

```typescript
const guardNumber: GuardNumber = <N extends AnyNumber>(
  value: N,
  callback?: ResultCallback
): value is N => isNumber(value, callback);
```

**Generic type variables:**

| Name                   | Default value    | Description |
| :--------------------- | :--------------- | :---------- |
| `N extends AnyNumber`  | From the `value` | Guarded with [`AnyNumber`](#anynumber), `N` variable from the `value` to the return type `value is N` |

**Parameters:**

| Name: `type`                 | Description                                                                                                                       |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| value: `N`                   | An [`AnyNumber`](#anynumber) type `value`, by default of a generic `N` type detected from the `value` to guard                    |
| callback?: `ResultCallback`  | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns      | Type      | Description                                                       |
| :----------- | :-------: | :---------------------------------------------------------------- |
| `value is N` | `boolean` | By default `N` variable is equal to the type detected from the `value` and the **return type** is a `boolean` as the result of its statement indicating the `value` is of [`AnyNumber`](#anynumber) type detected from the `value` |

The **return value** is a `boolean` indicating whether or not the `value` is a `number` type or [`Number`][js-number] object.

**Usage:**

```typescript
```

<br>

#### `guardObject()`

Use `guardObject()` or `guard.is.object()` to guard the `value` to be an `object` of a generic `Obj` type.

```typescript
const guardObject: GuardObject = <Obj extends object>(
  value: Obj,
  callback?: ResultCallback
): value is Obj => isObject<Obj>(value, callback);
```

**Generic type variables:**

| Name                 | Default value    | Description                                                                              |
| :------------------- | :--------------- | :--------------------------------------------------------------------------------------- |
| `Obj extends object` | From the `value` | Guarded with `object`, `Obj` variable from the `value` to the return type `value is Obj` |

**Parameters:**

| Name: `type`                | Description                                                                                |
| :-------------------------- | :----------------------------------------------------------------------------------------- |
| value: `Obj`                | An `object` of a generic `Obj` type, by default of type detected from the `value` to guard |
| callback?: `ResultCallback` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns        | Type      | Description                                                       |
| :------------- | :-------: | :---------------------------------------------------------------- |
| `value is Obj` | `boolean` | By default `Obj` variable is equal to the type detected from the `value` and the **return type** is a `boolean` as the result of its statement indicating the `value` is an `object` of type detected from the `value` |

The **return value** is a `boolean` indicating whether or not the `value` is an `object`.

**Usage:**

```typescript
// Example usage.
```

<br>

#### `guardObjectKey()`

Use `guardObjectKey()` or `guard.is.objectKey()` to guard the `value` to be an `object` of a generic `Obj` type that contains the `key`.

```typescript
const guardObjectKey: GuardObjectKey = <Obj extends object>(
  value: Obj,
  key: keyof Obj | (keyof Obj)[],
  callback?: ResultCallback
): value is Obj => isObjectKey<Obj>(value, key, callback);
```

**Generic type variables:**

| Name                 | Default value    | Description                                                                              |
| :------------------- | :--------------- | :--------------------------------------------------------------------------------------- |
| `Obj extends object` | From the `value` | Guarded with `object`, `Obj` variable from the `value` to the return type `value is Obj` |

**Parameters:**

| Name: `type`                      | Description                                                                                                              |
| :-------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| value: `Obj`                      | An `object` of a generic `Obj` type that contains the `key`, by default of type detected from the `value` to guard       |
| key: `keyof Obj \| (keyof Obj)[]` | A key of `Obj` or an array of keys of `Obj` type as the name of the property that the `value` contains                   |
| callback?: `ResultCallback`       | An optional [`ResultCallback`][package-callback-resultcallback] type to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns        | Type      | Description                                                       |
| :------------- | :-------: | :---------------------------------------------------------------- |
| `value is Obj` | `boolean` | By default `Obj` variable is equal to the type detected from the `value` and the **return type** is a `boolean` as the result of its statement indicating the `value` is an `object` of type detected from the `value` |

The **return value** is a `boolean` indicating whether or not the `value` is an `object` of a generic `Obj` containing the `key`.

**Usage:**

```typescript
```

<br>

#### `guardObjectKeys()`

Use `guardObjectKeys()` or `guard.is.objectKeys()` to guard the value to be an `object` of a generic `Type` with some of its own specified `keys`.
The function uses [`isObjectKeys()`](#isobjectkeys) to search for the `keys` and it means:

> Cause of using [`some()`][js-array-some] on the [rest parameter][js-rest-parameter] `...keys` each of its argument is treated as logic `or`, and cause of using [`every()`][js-array-every] on its array argument each of array item is treated as logic `and`.
> Simply, in the usage section below the function finds in the object `get` and `set` or `writable` and `value`, which means the object contains `get` and `set` or `writable` and `value`.
> The function uses [`hasOwnProperty`][js-hasownproperty] [`Object`][js-object] method to finds enumerable and non-enumerable `PropertyKey` as `string`, `number`, `symbol` unlike `Object.keys()`, but it can't find [`getter`][js-getter] property unlike [`in`][js-in-operator] operator, which can.

```typescript
const guardObjectKeys: GuardObjectKeys = <Obj extends object>(
  value: Obj,
  ...keys: (keyof Obj | Array<keyof Obj>)[]
): value is Obj => isObjectKeys<Obj>(value, ...keys);
```

**Generic type variables:**

| Name                 | Default value    | Description                                                                              |
| :------------------- | :--------------- | :--------------------------------------------------------------------------------------- |
| `Obj extends object` | From the `value` | Guarded with `object`, `Obj` variable from the `value` to the return type `value is Obj` |

**Parameters:**

| Name: `type`                          | Description                                                                                                       |
| :------------------------------------ | :---------------------------------------------------------------------------------------------------------------- |
| value: `Obj`                          | An object of a generic `Obj` type that contains the `keys`, by default of type detected from the `value` to guard |
| ...keys: `keyof Obj \| (keyof Obj)[]` | A [rest parameter][js-rest-parameter] single key of `Obj` or an array of key of `Obj` type as the name of the property that the `value` contains |

**Returns:**

| Returns        | Type      | Description                                                       |
| :------------- | :-------: | :---------------------------------------------------------------- |
| `value is Obj` | `boolean` | By default `Obj` variable is equal to the type detected from the `value` and the **return type** is a `boolean` as the result of its statement indicating the `value` is an `object` of type detected from the `value` |

The **return value** is a `boolean` indicating whether or not the `value` is an `object` with some of its own specified `keys`.

**Usage:**

```typescript

```

<br>

#### `guardPrimitive()`

Use `guardPrimitive()` or `guard.is.primitive()` to guard the `value` to be the [`Primitive`](#primitive) from a `type` of the [`Primitives`](#primitives).

```typescript
const guardPrimitive: GuardPrimitive = <Type extends Primitive>(
  value: Type,
  type: Primitives,
  callback?: ResultCallback
): value is Type => isPrimitive<Type>(value, type, callback);
```

**Generic type variables:**

| Name                     | Default value    | Description |
| :----------------------- | :--------------- | :---------- |
| `Type extends Primitive` | From the `value` | Guarded with [`Primitive`](#primitive) type, `Type` variable from the `value` to the return type `value is Type` |

**Parameters:**

| Name: `type`                | Description                                                                                                 |
| :-------------------------- | :---------------------------------------------------------------------------------------------------------- |
| value: `Type`               | A [`Primitive`](#primitive) type `value`, by default of a generic `Type` detected from the `value` to guard |
| type: `Primitives`          | A `string` type from the [`Primitives`](#primitives) to check the `value`                                   |
| callback?: `ResultCallback` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns         | Type      | Description                                                       |
| :-------------- | :-------: | :---------------------------------------------------------------- |
| `value is Type` | `boolean` | By default `Type` variable is equal to the type detected from the `value` and the **return type** is a `boolean` as the result of its statement indicating the `value` is of [`Primitive`](#primitive) type detected from the `value` |

The **return value** is a `boolean` indicating whether or not the `value` is the [`Primitive`](#primitive) from the `type`.

**Usage:**

```typescript
// Example usage.
import { guardPrimitive } from '@angular-package/type';

// string.
const firstName = 'firstName';
guardPrimitive(firstName, 'string'); // true; return type `value is "firstName"`
let letFirstName = 'firstName';
guardPrimitive(letFirstName, 'string'); // true; return type `value is string`

// number.
const age = 5;
guardPrimitive(age, 'number'); // true; return type `value is 5`
let letAge = 5;
guardPrimitive(letAge, 'number'); // true; return type `value is number`

// null.
const myNull = null;
guardPrimitive(myNull, 'null'); // true; return type `value is null`

// bigint
const oldAge = 1n;
guardPrimitive(oldAge, 'bigint'); // true; return type `value is 1n`
let letOldAge = 1n;
guardPrimitive(letOldAge, 'bigint'); // true; return type `value is bigint`

// Boolean.
const question = true;
guardPrimitive(question, 'boolean'); // true; return type `value is true`
let letQuestion = true;
guardPrimitive(letQuestion, 'boolean'); // true; return type `value is true`

// Undefined.
const und = undefined;
guardPrimitive(und, 'undefined'); // true; return type `value is undefined`
let letUndefined ;
guardPrimitive(letUndefined, 'undefined'); // true; return type `value is undefined`

// Symbol.
guardPrimitive(Symbol(firstName), 'symbol'); // true; return type `value is symbol`
```

<br>

#### `guardString()`

Use `guardString()` or `guard.is.string()` to guard the `value` to be string of any type.

```typescript
const guardString: GuardString = <S extends AnyString>(
  value: S,
  callback?: ResultCallback
): value is S => isString(value, callback);
```

**Generic type variables:**

| Name                  | Default value    | Description |
| :-------------------- | :--------------- | :---------- |
| `S extends AnyString` | From the `value` | Guarded with [`AnyString`](#anystring) type, `S` variable from the `value` to the return type `value is S` |

**Parameters:**

| Name: `type`                | Description                          |
|---------------------------- | :----------------------------------- |
| value: `S`                  | An [`AnyString`](#anystring) type `value`, by default of a generic `S` type detected from the `value` to guard           |
| callback?: `ResultCallback` | An optional [`ResultCallback`][package-callback-resultcallback] type to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns      | Type      | Description                                                       |
| :----------- | :-------: | :---------------------------------------------------------------- |
| `value is S` | `boolean` | By default `S` variable is equal to the type detected from the `value` and the **return type** is a `boolean` as the result of its statement indicating the `value` is of [`AnyString`](#anystring) type detected from the `value` |

The **return value** is a `boolean` indicating whether or not the `value` is a `string` type or [`String`][js-string] instance.

**Usage:**

```typescript
// Example usage.
import { guardString } from '@angular-package/type';

let letFirstName = 'not my name';
guardString(letFirstName); // true; return type `value is string`

const firstName = 'my name';
guardString(firstName); // true; return type `value is "my name"`
```

<br>

#### `guardSymbol()`

Use `guardSymbol()` or `guard.is.symbol()` to guard the `value` to be a `symbol`.

```typescript
const guardSymbol: GuardSymbol = (
  value: symbol,
  callback?: ResultCallback
): value is symbol => isSymbol(value, callback);
```

**Parameters:**

| Name: `type`                | Description                      |
| :-------------------------- | :------------------------------- |
| value: `symbol`             | A `symbol` type `value` to guard |
| callback?: `ResultCallback` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns           | Type      | Description                                                                                            |
| :---------------- | :-------: | :----------------------------------------------------------------------------------------------------- |
| `value is symbol` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a `symbol` |

The **return value** is a `boolean` indicating whether or not the `value` is a `symbol`.

**Usage:**

```typescript
// Example usage.
import { guardSymbol } from '@angular-package/type';

const SYMBOL_NUMBER: unique symbol = Symbol(27);
const SYMBOL_STRING: unique symbol = Symbol('Twenty seven');

guardSymbol(SYMBOL_NUMBER); // true; return type `value is symbol`
guardSymbol(SYMBOL_STRING); // true; return type `value is symbol`
```

<br>

#### `guardType()`

Use `guardType()` or `guard.is.type()` to guard the `value` to be the [`Type`](#type) from a `type` of the [`Types`](#types).

```typescript
const guardType: GuardType = <T extends Type>(
  value: T,
  type: Types<T>,
  callback?: ResultCallback
): value is T => isType<T>(value, type, callback);
```

**Generic type variables:**

| Name             | Default value    | Description |
| :--------------- | :--------------- | :---------- |
| `T extends Type` | From the `value` | Guarded with [`Type`](#type), `T` variable from the `value` to the return type `value is T` |

**Parameters:**

| Name: `type`                | Description                                                                                                                       |
| :-------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| value: `T`                  | A [`Type`](#type) `value`, by default of a generic `T` type detected from the `value` to guard with the `type`                     |
| type: `Types<T>`            | A `string` or generic [`Constructor<T>`](#constructor) type from the [`Types`](#types) to check the `value`                        |
| callback?: `ResultCallback` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns      | Type      | Description                                                       |
| :----------- | :-------: | :---------------------------------------------------------------- |
| `value is T` | `boolean` | By default `T` variable is equal to the type detected from the `value` and the **return type** is a `boolean` as the result of its statement indicating the `value` is of type detected from the `value` |

The **return value** is a `boolean` indicating whether or not the `value` is a `type` from the [`Types`](#types).

**Usage:**

```typescript
// Example usage.
import { guardType } from '@angular-package/type';

// Person interface.
interface PersonData { firstName: string; }

// Class.
class Person {}

// Object.
const someone: Person = new Person();

const object: PersonData = { firstName: 'firstName' };
guardType(object, 'object'); // true; return type `value is PersonData`

let letObject: PersonData = { firstName: 'firstName' };
guardType(letObject, 'object'); // true; return type `value is PersonData`

function myPerson(person: Person): Person { return person; }
guardType(myPerson, 'function'); // true; return type `value is (person: Person) => Person`

// string.
const firstName = 'firstName';
guardType(firstName, 'string'); // true; return type `value is "firstName"`
let letFirstName = 'firstName';
guardType(letFirstName, 'string'); // true; return type `value is string`

// number.
const age = 5;
guardType(age, 'number'); // true; return type `value is 5`
let letAge = 5;
guardType(letAge, 'number'); // true; return type `value is number`

// null.
const myNull = null;
guardType(myNull, 'null'); // true; return type `value is null`

// bigint
const oldAge = 1n;
guardType(oldAge, 'bigint'); // true; return type `value is 1n`
let letOldAge = 1n;
guardType(letOldAge, 'bigint'); // true; return type `value is bigint`

// Boolean.
const question = true;
guardType(question, 'boolean'); // true; return type `value is true`
let letQuestion = true;
guardType(letQuestion, 'boolean'); // true; return type `value is true`

// Undefined.
const und = undefined;
guardType(und, 'undefined'); // true; return type `value is undefined`
let letUndefined ;
guardType(letUndefined, 'undefined'); // true; return type `value is undefined`

// Symbol.
guardType(Symbol(firstName), 'symbol'); // true; return type `value is symbol`

// Instance.
guardType(someone, Person); // true; return type `value is Person`
```

<br>

#### `guardUndefined()`

Use `guardUndefined()` or `guard.is.undefined()` to guard the `value` to be `undefined`.

```typescript
const guardUndefined: GuardUndefined = (
  value: undefined,
  callback?: ResultCallback
): value is undefined => isUndefined(value, callback);
```

**Parameters:**

| Name: `type`                | Description                          |
| :-------------------------- | :----------------------------------- |
| value: `undefined`          | An `undefined` type `value` to guard |
| callback?: `ResultCallback` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error] |

**Returns:**

| Returns              | Type      | Description                                                       |
| :------------------- | :-------: | :---------------------------------------------------------------- |
| `value is undefined` | `boolean` | The **return type** is a `boolean` as the result of its statement |

The **return value** is a `boolean` indicating whether or not the `value` is `undefined`.

**Usage:**

```typescript
// Example usage.
import { guardUndefined } from '@angular-package/type';

const UNDEFINED: undefined = undefined;

guardUndefined(UNDEFINED); // true; 
guardUndefined('x'); // false; type error
guardUndefined(5); // false; type error
```

<br>

### Guard object

#### `guard.`

[![update]](#500)

The object contains prefixed with `guard` functions, and in `is` property.

```typescript
const guardIs: GuardIs = {
  array: guardArray,
  bigint: guardBigInt,
  boolean: guardBoolean,
  class: guardClass,
  defined: guardDefined,
  function: guardFunction,
  instance: guardInstance,
  key: guardKey,
  null: guardNull,
  number: guardNumber,
  object: guardObject,
  objectKey: guardObjectKey,
  objectKeys: guardObjectKeys,
  primitive: guardPrimitive,
  string: guardString,
  symbol: guardSymbol,
  type: guardType,
  undefined: guardUndefined
};
const guard: Guard = { ...guardIs, is: guardIs };
```

<br>

## Common

### Common interfaces

#### `MinMax`

```typescript
interface MinMax<Min extends number, Max extends number> {
  min: Min;
  max: Max;
}
```

**Parameters:**

**`min: Min`**  
A generic type variable constrained by a `number` type as the minimum value.

**`max: Max`**  
A generic type variable constrained by a `number` type as the maximum value.

<br>

### Common types

#### `AnyBoolean`

A `boolean` type or an instance of a [`Boolean`][js-boolean].

```typescript
type AnyBoolean = Exclude<boolean | Boolean, true | false>;
```

#### `AnyNumber`

A `number` type or an instance of a [`Number`][js-number].

```typescript
type AnyNumber = number | Number;
```

#### `AnyString`

A `string` type or an instance of a [`String`][js-string].

```typescript
type AnyString = string | String;
```

#### `Constructor`

An instance of a type from the provided generic `Type` variable.

```typescript
type Constructor<Type> = new (...args: any[]) => Type;
```

#### `Defined`

A type from the provided generic `Type` variable, besides an `undefined` which causes its change to `never`.

```typescript
type Defined<Type> = Never<undefined, Type>;
```

#### `Never`

A type from the provided generic `Type` variable, besides a type provided in the generic `Not` variable which causes its change to `never`.

```typescript
type Never<Not, Type> = Type extends Not ? never : Type;
```

#### `NotUndefined`

A type from the provided generic `Type` variable, besides an `undefined` or `null` which causes its change to `never`.

```typescript
type NotUndefined<T> = T extends undefined | null ? never : T;
```

#### `NumberBetween`

[![update]](#500)

A `number` type or an instance of a [`Number`][js-number] with its specified range. For the `strict` purpose generic variables `Min` and `Max` are constrained with the `number` type.

```typescript
type NumberBetween<Min extends number, Max extends number> = AnyNumber &
  MinMax<Min, Max>;
```

#### `Primitive`

All [`primitive`][js-primitive] types.

```typescript
type Primitive =
  | boolean
  | bigint
  | null
  | number
  | string
  | symbol
  | undefined;
```

#### `Primitives`

[`Primitive`](#primitive) types as a `string`.

```typescript
type Primitives =
  | 'bigint'
  | 'boolean'
  | 'null'
  | 'number'
  | 'string'
  | 'symbol'
  | 'undefined';
```

#### `ResultCallback`

[![update]](#500)

Callback function for `callback` parameter.

```typescript
type ResultCallback<Payload> = (
  result: boolean,
  payload?: Payload
) => boolean;
```

#### `StringOfLength`

[![update]](#500)

A `string` type or an instance of a  [`String`][js-string] with its specified minimum and maximum length. Generic variables `Min` and `Max` are constrained with the `number` type.

```typescript
type StringOfLength<Min extends number, Max extends number> = AnyString &
  MinMax<Min, Max>;
```

#### `Type`

[![update]](#500)

The main types.

```typescript
type Type = Function | object | Primitive;
```

#### `Types`

The main types as `string` values, besides the [`Constructor`](#constructor) which is an instance of an `Obj`.

```typescript
type Types<Obj> = Constructor<Obj> | 'function' | 'object' | Primitives;
```

#### `Undefined`

A type from the provided generic `Type` variable, constrained with the `undefined` which causes other types its change to `never`.

```typescript
type Undefined<Type> = Type extends undefined ? Type : never;
```

<br>

## Experimental

#### `BigIntObject`

The object handles creating and getting the [`BigInt`][js-bigint] with [`BigInt()`][bigintconstructor].

```typescript
class BigIntObject {
  static set set(value: any) {
    PrimitiveObject.bigint = BigInt(value);
  }
  static get get(): BigInt {
    return PrimitiveObject.bigint;
  }
}
```

Create a new [`BigInt`][js-bigint] by assign value to the `set` property.

```typescript
BigIntObject.set = 1n;
```

Get created [`BigInt`][js-bigint] with the `get` property.

```typescript
const bigint: BigIntObject = BigIntObject.get;
```

<br>

#### `BooleanObject`

The object handles creating and getting the [`Boolean`][js-boolean] object instance with [`Boolean()`][booleanconstructor].

```typescript
class BooleanObject {
  /**
   * `false` when empty, 0, null, '', false
   * `true` when 'true', 'false', 'Su Lin whatever', [], {}, true
   */
  static set set(value: any) {
    PrimitiveObject.boolean = new Boolean(value);
  }
  static get get(): Boolean {
    return PrimitiveObject.boolean;
  }
}
```

Create a new [`Boolean`][js-boolean] instance by assign value to the `set` property.

```typescript
BooleanObject.set = false;
```

Get created [`Boolean`][js-boolean] instance with the `get` property.

```typescript
const booleanInstance: Boolean = BooleanObject.get;
```

<br>

#### `NumberObject`

The object handles creating and getting the [`Number`][js-number] object instance with [`Number()`][numberconstructor].

```typescript
class NumberObject {
  static set set(value: any) {
    PrimitiveObject.number = new Number(value);
  }
  static get get(): Number {
    return PrimitiveObject.number;
  }
}
```

Create a new [`Number`][js-number] instance by assign value to the `set` property.

```typescript
NumberObject.set = 'my number instance';
```

Get created [`Number`][js-number] instance with the `get` property.

```typescript
const numberInstance: Number = NumberObject.get;
```

<br>

#### `PrimitiveObject`

The object to store static primitive objects.

```typescript
class PrimitiveObject  {
  static bigint: BigInt;
  static boolean: Boolean;
  static number: Number;
  static string: String;
  static symbol: Symbol;
}
```

<br>

#### `StringObject`

The object handles creating and getting the [`String`][js-string] object instance with [`String()`][stringconstructor].

```typescript
class StringObject {
  static set set(value: any) {
    PrimitiveObject.string = new String(value);
  }
  static get get(): String {
    return PrimitiveObject.string;
  }
}
```

Create a new [`String`][js-string] instance by assign value to the `set` property.

```typescript
StringObject.set = 'my string instance';
```

Get created [`String`][js-string] instance with the `get` property.

```typescript
const stringInstance: String = StringObject.get;
```

<br>

#### `SymbolObject`

The object handles creating and getting the [`Symbol`][js-symbol] object instance with [`Symbol()`][symbolconstructor].

```typescript
class SymbolObject {
  static set set(value: string | number | undefined) {
    PrimitiveObject.symbol = Symbol(value);
  }
  static get get(): Symbol {
    return PrimitiveObject.symbol;
  }
}
```

Create a new `symbol` by assigning value to the `set` property.

```typescript
SymbolObject.set = 'my symbol';
```

Get created `symbol` with the `get` property.

```typescript
const symbol: Symbol = SymbolObject.get;
```

<br>

#### `isParam()`

Method decorator to check the type and return [`undefined`][js-undefined] if it's not the same as expected.

```typescript
function isParam(...param: Array<string>): MethodDecorator {
  return (target: Func | object, key: string | symbol, descriptor: any): any => {
    const originalMethod = descriptor.value;

    descriptor.value =  function(): void {
      if (is.array(param) && is.defined(arguments)) {
        param.forEach((name: string, index: number) => {
          if (is.number(index) && index < arguments.length) {
            if (is.defined(arguments[index])) {
              switch (name) {
                case 'number':
                  if (is.number(arguments[index]) === false) {
                    arguments[index] = undefined;
                  }
                  break;
                case 'object':
                  if (is.object(arguments[index]) === false) {
                    arguments[index] = undefined;
                  }
                  break;
                case 'string':
                  if (is.string(arguments[index]) === false) {
                    arguments[index] = undefined;
                  }
                  break;
              }
            }
          }
        });
      }
      const result = originalMethod.apply(this, arguments);
      return result;
    };

    return descriptor;
  };
}
```

**Usage:**

```typescript
// Example  usage
import { isParam } from '@angular-package/type';

const STRING: any = '!@#$%^&*()abcdefghijklmnoprstuwyz';
const NUMBER: any = 10304050;

// TestClass
class TestClass {
  @isParam('object', 'string', 'number')
  public testMethod(object?: any, firstName?: any, age?: any): { object: any, firstName: any, age: any } {
    return {object, firstName, age};
  }
}
const resultTRUE = new TestClass().testMethod({firstName: 'NoName'}, STRING, NUMBER);
const resultFALSE = new TestClass().testMethod(NUMBER, {firstName: 'NoName'}, STRING);

resultTRUE === {
  object: {firstName: 'NoName'},
  string: '!@#$%^&*()abcdefghijklmnoprstuwyz',
  number: 10304050
};

resultTRUE === {
  object: undefined,
  string: undefined,
  number: undefined
};

```

<br>

## Changelog

The **changelog** of this package is based on [*keep a changelog*](https://keepachangelog.com/en/1.0.0/). To read it, click on the [CHANGELOG.md](https://github.com/angular-package/error/blob/main/CHANGELOG.md) link.

> A changelog is a file which contains a curated, chronologically ordered list of notable changes for each version of a project. - [*keep a changelog*](https://keepachangelog.com/en/1.0.0/)

### 5.0.0

* [`Is`](#is) interface changes types to use [`typeof`][js-typeof] operator.
* Adds a generic type variable `Payload` constrained by the `object` type that is by default equal to the `object`.
* Adds a `payload` parameter of generic variable type `Payload` to assign to callback function `payload` parameter.
* Updates the type of callback function `ResultCallback` to [`ResultCallback<Payload>`][package-callback-resultcallback] to provide the shape of `payload`.
* Passes function name that performed the callback function to callback function `payload` parameter.
* Removes `Func` type to use build-in `Function` type.
* Removes `Key` type to use build-in `PropertyKey` type.

<br>

## GIT

### Commit

* [AngularJS Git Commit Message Conventions][git-commit-angular]
* [Karma Git Commit Msg][git-commit-karma]
* [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

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

MIT © angular-package ([license][type-license])

<!-- Funding -->
[github-badge-sponsor]: https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/angular-package
[github-sponsor-link]: https://github.com/sponsors/angular-package
[patreon-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dsciborrudnicki%26type%3Dpatrons&style=flat
[patreon-link]: https://patreon.com/sciborrudnicki

[angulario]: https://angular.io
[skeleton]: https://github.com/angular-package/skeleton

<!-- Update status -->
[experimental]: https://img.shields.io/badge/-experimental-orange
[fix]: https://img.shields.io/badge/-fix-red
[new]: https://img.shields.io/badge/-new-green
[update]: https://img.shields.io/badge/-update-red

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/

<!-- This package: type  -->
  <!-- GitHub: badges -->
  [type-badge-issues]: https://img.shields.io/github/issues/angular-package/type
  [type-badge-forks]: https://img.shields.io/github/forks/angular-package/type
  [type-badge-stars]: https://img.shields.io/github/stars/angular-package/type
  [type-badge-license]: https://img.shields.io/github/license/angular-package/type
  <!-- GitHub: badges links -->
  [type-issues]: https://github.com/angular-package/type/issues
  [type-forks]: https://github.com/angular-package/type/network
  [type-license]: https://github.com/angular-package/type/blob/master/LICENSE
  [type-stars]: https://github.com/angular-package/type/stargazers
<!-- This package -->

<!-- Package: callback -->
  <!-- npm -->
  [callback-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcallback.svg
  [callback-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcallback.png
  [callback-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcallback
  [callback-npm-readme]: https://www.npmjs.com/package/@angular-package/callback#readme

  <!-- GitHub -->
  [callback-github-readme]: https://github.com/angular-package/callback#readme

  [package-callback-callbackpayload]: https://github.com/angular-package/callback#callbackpayload
  [package-callback-resultcallback]: https://github.com/angular-package/callback#resultcallback

<!-- Package: change-detection -->
  <!-- npm -->
  [cd-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fchange-detection.svg
  [cd-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fchange-detection.png
  [cd-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fchange-detection
  [cd-npm-readme]: https://www.npmjs.com/package/@angular-package/change-detection#readme

  <!-- GitHub -->
  [cd-github-readme]: https://github.com/angular-package/change-detection#readme

<!-- Package: component-loader -->
  <!-- npm -->
  [cl-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader.svg
  [cl-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader.png
  [cl-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader
  [cl-npm-readme]: https://www.npmjs.com/package/@angular-package/component-loader#readme

  <!-- GitHub -->
  [cl-github-readme]: https://github.com/angular-package/component-loader#readme

<!-- Package: core -->
  <!-- npm -->
  [core-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcore.svg
  [core-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcore.png
  [core-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcore
  [core-npm-readme]: https://www.npmjs.com/package/@angular-package/core#readme

  <!-- GitHub -->
  [core-github-readme]: https://github.com/angular-package/core#readme

<!-- Package: error -->
  <!-- npm -->
  [error-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ferror.svg
  [error-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ferror.png
  [error-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ferror
  [error-npm-readme]: https://www.npmjs.com/package/@angular-package/error#readme

  <!-- GitHub -->
  [error-github-readme]: https://github.com/angular-package/error#readme

<!-- Package: prism -->
  <!-- npm -->
  [prism-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fprism.svg
  [prism-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fprism.png
  [prism-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fprism
  [prism-npm-readme]: https://www.npmjs.com/package/@angular-package/prism#readme

  <!-- GitHub -->
  [prism-github-readme]: https://github.com/angular-package/prism#readme

<!-- Package: property -->
  <!-- npm -->
  [property-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fproperty.svg
  [property-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fproperty.png
  [property-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fproperty
  [property-npm-readme]: https://www.npmjs.com/package/@angular-package/property#readme

  <!-- GitHub -->
  [property-github-readme]: https://github.com/angular-package/property#readme

<!-- Package: reactive -->
  <!-- npm -->
  [reactive-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Freactive.svg
  [reactive-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Freactive.png
  [reactive-npm-badge]: https://badge.fury.io/js/%40angular-package%2Freactive
  [reactive-npm-readme]: https://www.npmjs.com/package/@angular-package/reactive#readme

  <!-- GitHub -->
  [reactive-github-readme]: https://github.com/angular-package/reactive#readme

<!-- Package: testing -->
  <!-- npm -->
  [testing-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftesting.svg
  [testing-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftesting.png
  [testing-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftesting
  [testing-npm-readme]: https://www.npmjs.com/package/@angular-package/testing#readme

  <!-- GitHub -->
  [testing-github-readme]: https://github.com/angular-package/testing#readme

<!-- Package: type -->
  <!-- npm -->
  [type-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftype.svg
  [type-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftype.png
  [type-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftype
  [type-npm-readme]: https://www.npmjs.com/package/@angular-package/type#readme

  <!-- GitHub -->
  [type-github-readme]: https://github.com/angular-package/type#readme

  [package-type-resultcallback]: https://github.com/angular-package/type#resultcallback
  [package-type-key]: https://github.com/angular-package/type#key

<!-- Package: ui -->
  <!-- npm -->
  [ui-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fui.svg
  [ui-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fui.svg
  [ui-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fui
  [ui-npm-readme]: https://www.npmjs.com/package/@angular-package/ui#readme

  <!-- GitHub -->
  [ui-github-readme]: https://github.com/angular-package/ui#readme

<!-- Angular -->
[angular-component-factory-resolver]: https://angular.io/api/core/ComponentFactoryResolver
[angular-view-container-ref]: https://angular.io/api/core/ViewContainerRef
[angular-component-ref]: https://angular.io/api/core/ComponentRef

<!-- Jasmine -->
[jasmine-describe]: https://jasmine.github.io/api/3.8/global.html#describe
[jasmine-expect]: https://jasmine.github.io/api/3.8/global.html#expect
[jasmine-it]: https://jasmine.github.io/api/3.8/global.html#it

<!-- Javascript  -->
[js-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[js-array-every]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
[js-array-some]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

[js-bigint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[js-bigintconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt

[js-boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[js-booleanconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean

[js-classes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

[js-date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

[js-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

[js-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
[js-rest-parameter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

[js-getter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
[js-object-getownpropertydescriptor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
[js-object-getOwnpropertydescriptors]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors

[js-setter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

[js-hasownproperty]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

[js-instanceof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
[js-in-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

[js-map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

[js-null]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
[js-number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[js-numberconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number

[js-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[js-object-define-property]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

[js-primitive]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[js-promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

[js-rangeerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError
[js-referenceerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
[js-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

[js-set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[js-storage]: https://developer.mozilla.org/en-US/docs/Web/API/Storage
[js-string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[js-stringconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String

[js-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
[js-symbolconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
[js-syntaxerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError

[js-typeerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError
[js-typeof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

[js-undefined]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
[js-urlerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError

[js-weakset]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet

<!-- Karma -->
[karma]: http://karma-runner.github.io/0.10/index.html

<!-- Prism -->
[prism-js]: https://prismjs.com/

<!-- Typescript -->
[ts-classes]: https://www.typescriptlang.org/docs/handbook/2/classes.html
[ts-function]: https://www.typescriptlang.org/docs/handbook/2/functions.html
[ts-interface]: https://www.typescriptlang.org/docs/handbook/interfaces.html#our-first-interface
