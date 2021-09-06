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
* [Checks](#checks)
  * [Functions](#checks)
  * [Objects](#check-objects)
    * [`are`](#are)
    * [`is`](#is)
    * [`isNot`](#isnot)
    * [`check`](#check)
* [Guards](#guard)
  * [Functions](#guard-functions)
  * [Object](#guard-object)
    * [`guard`](#guard)
* [The `type`](#the-type)
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

To check any value that is to know what type and instance the value can be, and for this purpose [`recognizeValue()`](#recognizevalue) function was created, and it's not enough because it must be known what are the risks when using `instanceof`, `typeof` operator and `typeOf()` function to check the type.

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

To precisely check the type of any value it needs to check the `Object.prototype` class of the value and [`typeOf()`](#typeof) is an ideal solution for this.  
Read more:

* [Using `toString()` to detect object class.][js-tostring]
* [Symbol.toStringTag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)
* [The Best Way to Type Check in Vanilla JS.](https://javascript.plainenglish.io/the-best-way-to-type-check-in-vanilla-js-55197b4f45ec)
* [Using JavaScript Symbol.toStringTag for objects types description.](https://dev.to/cherif_b/using-javascript-tostringtag-for-objects-types-description-15hc)

**Mozilla.org** documentation describes this way of checking as unreliable. The problem and at the same time some kind of solution with this approach of checking is, it's possible to change class name of the object.

> *"Using `toString()` in this way is unreliable; objects can change the behavior of `Object.prototype.toString()` by defining a `Symbol.toStringTag` property, leading to unexpected results."* - mozilla.org

There are some examples in the first link above, and below under the usage section of [`typeOf()`](#typeof).

#### `typeOf()`

Function to detect object class of `Object.prototype`.

```typescript
const typeOf = (value: any): string => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
```

**Usage:**

```typescript
// Example usage.
/*
  Date.
*/
const myDate = new Date();
Object.prototype.toString.call(myDate); // [object Date]

// Change the class name to `Person`.
Object.assign(myDate, {
  get [Symbol.toStringTag](): string {
    return 'Person';
  }
});

// Instead of `Date`, there is `Person`.
Object.prototype.toString.call(myDate); // [object Person]

// This is a solution for just an object.
const person = {
  firstName: 'My name',
  get [Symbol.toStringTag](): string {
    return 'Person';
  }
};

/*
  RegExp as Date.
*/
const myRegExp = new RegExp(/^/);
Object.prototype.toString.call(myRegExp); // [object RegExp]

// Change the class name to `Date`.
Object.assign(myRegExp, {
  get [Symbol.toStringTag](): string {
    return 'Date';
  }
});

// Instead of `RegExp`, there is `Date`.
Object.prototype.toString.call(myRegExp); // [object Date]
myRegExp instanceof RegExp // Confirms, it's a regexp.
```

<br>

### Callback

To handle the result of the check(before it returns) with an additional payload there is a callback function, so it is possible to, for example, send it to error tracker [sentry.io](https://sentry.io) or even to change the value of the result and then return.
The callback function passes the `result` of the check, the `value` that was checked, and `payload` with by default function name that performed the callback and some additional properties depends on the used function. Payload is changeable by the `payload` parameter of the parent function and also it's possible to add new properties through it.
The default callback function is used to return the result of the check.

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

A custom function to handle the `callback`.

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
  value: any,
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

// TODO: Example usage
const customCallback = <
  Payload extends CallbackPayload<{ database?: string; id?: number }>
>(
  result: boolean,
  value: any,
  payload?: Payload
) => {
  console.log(payload);
  return result;
};

isObject('x', customCallback, { database: '' });

```

<br>

## Checks

### `are` functions

| Function                        | Checks if values of any type are |
| :------------------------------ | :------------------------------- |
| **[`areString()`](#arestring)** | of a [`string`][js-string] type. |
| **[`areBigInt()`](#arestring)** | of a [`string`][js-string] type. |
| **[`areNull()`](#arestring)** | of a [`string`][js-string] type. |
| **[`areNumber()`](#arestring)** | of a [`string`][js-string] type. |
| **[`areSymbol()`](#arestring)** | of a [`string`][js-string] type. |
| **[`areUndefined()`](#arestring)** | of a [`string`][js-string] type. |

### `is` functions

| Function                                   | Checks if any value is |
| :----------------------------------------- | :--------------------- |
| **[`isArray()`](#isarray)**                | an [`array`][js-array], [`Array`][js-array] instance, and [`object`][js-object] type. |
| **[`isBigInt()`](#isbigint)**              | a [`bigint`][js-bigint] type. |
| **[`isBoolean()`](#isboolean)**            | a [`boolean`][js-boolean] type not an instance of [`Boolean`][js-boolean] and [`Object`][js-object] or `object` type instance of [`Boolean`][js-boolean] and [`Object`][js-object]. |
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
| **[`isNumberBetween()`](#isnumberbetween)**| a [`number`][js-number] type not instance of [`Object`][js-object] and [`Number`][js-number] or [`object`][js-object] type and instance of [`Number`][js-number] and [`Object`][js-object], in the specified range. |
| **[`isNumberObject()`](#isnumberobject)**  | an [`object`][js-object] type and instance of [`Number`][js-number] and [`Object`][js-object]. |
| **[`isNumberType()`](#isnumbertype)**      | a [`number`][js-number] type not an instance of [`Number`][js-number] and [`Object`][js-object]. |
| **[`isObject()`](#isobject)**              | an [`object`][js-object] of a generic `Obj` type and [`Object`][js-object] instance. |
| **[`isObjectKey()`](#isobjectkey)**        | an [`object`][js-object] with its own specified `key` of the `PropertyKey` type. |
| **[`isObjectKeyIn()`](#isobjectkeyin)**    | an [`object`][js-object] of a generic type with the `key` of the `PropertyKey` type by using the [`in`][js-in-operator] operator. |
| **[`isObjectKeys()`](#isobjectkeys)**      | an [`object`][js-object] with **some** of its keys from given `keys` of the `PropertyKey` type. |
| **[`isPrimitive()`](#isprimitive)**        | the [`Primitive`](#primitive) type from a given `type` of the [`Primitives`](#primitives). |
| **[`isRegExp()`](#isregexp)**              | a regular expression of a [`regexp`][js-regexp] type, an instance of [`Object`][js-object] and [`RegExp`][js-regexp]. |
| **[`isString()`](#isstring)**              | a [`string`][js-string] type not instance of [`Object`][js-object] and [`String`][js-string] or [`object`][js-object] type and instance of [`String`][js-string] and [`Object`][js-object]. |
| **[`isStringLength()`](#isstringlength)**  | a [`string`][js-string] type not instance of [`Object`][js-object] and [`String`][js-string] or [`object`][js-object] type and instance of [`String`][js-string] and [`Object`][js-object], of a length in the specified range. |
| **[`isStringObject()`](#isstringobject)**  | an [`object`][js-object] type and instance of [`String`][js-string] and [`Object`][js-object]. |
| **[`isStringType()`](#isstringtype)**      | a [`string`][js-string] type and **not** instance of [`String`][js-string] and [`Object`][js-object]. |
| **[`isSymbol()`](#issymbol)**              | a [`symbol`][js-symbol] type. |
| **[`isTrue()`](#istrue)**                  | a [`boolean`][js-boolean] type **not** an instance of [`Boolean`][js-boolean] and [`Object`][js-object], or is an `object` type and instance of [`Boolean`][js-boolean] and [`Object`][js-object], and equal to `true`. |
| **[`isType()`](#istype)**                  | a type of [`Type`](#type) from a given `type` of the [`Types`](#types). |
| **[`isUndefined()`](#isundefined)**        | an [`undefined`][js-undefined] type and equal to [`undefined`][js-undefined]. |

### `isNot` functions

| Function                                   | Checks if any value is not |
| :----------------------------------------- | :------------------------- |
| **[`isNotBoolean()`](#isnotboolean)**      | a [`boolean`][js-boolean] type and **not** an instance of a [`Boolean`][js-boolean]. |
| **[`isNotFunction()`](#isnotfunction)**    | a [`function`][js-function] type and **not** an instance of [`Function`][js-function]. |
| **[`isNotNull()`](#isnotnull)**            | a [`null`][js-null] type and **not** equal to [`null`][js-null]. |
| **[`isNotNumber()`](#isnotnumber)**        | a [`number`][js-number] type and **not** an instance of [`Number`][js-number]. |
| **[`isNotString()`](#isnotstring)**        | a [`string`][js-string] type and **not** an instance of [`String`][js-string]. |
| **[`isNotUndefined()`](#isnotundefined)**  | an [`undefined`][js-undefined] type and **not** equal to [`undefined`][js-undefined]. |

<br>

#### `areBigInt()`

Use `areBigInt()` or `are.bigint()`

```typescript
const areBigInt = <Payload extends object>(
  value: any[],
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is bigint[] => arePrimitive('bigint', value, callback, {
  ...{ name: areBigInt.name },
  ...payload,
} as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether the provided array contains all elements of a [`string`][js-string] type.

**Usage:**

```typescript
// Example usage.
import { areBigInt } from '@angular-package/type'; 

```

<br>

#### `areBoolean()`

Use `areBoolean()` or `are.boolean()`

```typescript
const areBoolean = <Payload extends object>(
  value: any[],
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is boolean[] =>
  arePrimitive('boolean', value, callback, {
    ...{ name: areBoolean.name },
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether the provided array contains all elements of a [`string`][js-string] type.

**Usage:**

```typescript
// Example usage.
import { areBoolean } from '@angular-package/type'; 

```

<br>

#### `areNull()`

Use `areNull()` or `are.null()`

```typescript
const areNull = <Payload extends object>(
  value: any[],
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is null[] =>
  arePrimitive('null', value, callback, {
    ...{ name: areNull.name },
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether the provided array contains all elements of a [`string`][js-string] type.

**Usage:**

```typescript
// Example usage.
import { areNull } from '@angular-package/type'; 

```

<br>

#### `areNumber()`

Use `areNumber()` or `are.number()`

```typescript
const areNumber = <Payload extends object>(
  value: any[],
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is number[] =>
  arePrimitive('number', value, callback, {
    ...{ name: areNumber.name },
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether the provided array contains all elements of a [`string`][js-string] type.

**Usage:**

```typescript
// Example usage.
import { areNumber } from '@angular-package/type'; 

```

<br>

#### `areString()`

Use `areString()` or `are.string()` to check if all of the array elements are of a [`string`][js-string] type.

```typescript
const areString = <Payload extends object>(
  value: any[],
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is string[] =>
  arePrimitive('string', value, callback, {
    ...{ name: areString.name },
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether the provided array contains all elements of a [`string`][js-string] type.

**Usage:**

```typescript
// Example usage.
import { areString } from '@angular-package/type'; 

areString(['name', 'second name', 'third name'], (result, payload) => {
  /*
  payload {
    "value": [
        "name",
        "second name",
        "third name"
    ],
    "id": 1,
    "field": "firstName"
  }
  */
  return result;
}, { id: 1, field: 'firstName' }); // Returns `true` as `value is `boolean`
```

<br>

#### `areSymbol()`

Use `areSymbol()` or `are.symbol()`

```typescript
const areSymbol = <Payload extends object>(
  value: any[],
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is symbol[] =>
  arePrimitive('symbol', value, callback, {
    ...{ name: areSymbol.name },
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether the provided array contains all elements of a [`string`][js-string] type.

**Usage:**

```typescript
// Example usage.
import { areSymbol } from '@angular-package/type'; 

```

<br>

#### `areUndefined()`

Use `areUndefined()` or `are.undefined()`

```typescript
const areUndefined = <Payload extends object>(
  value: any[],
  callback: ResultCallback<CallbackPayload & Payload> = resultCallback,
  payload?: Payload
): value is undefined[] =>
  arePrimitive('undefined', value, callback, {
    ...{ name: areUndefined.name },
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether the provided array contains all elements of a [`string`][js-string] type.

**Usage:**

```typescript
// Example usage.
import { areUndefined } from '@angular-package/type'; 

```

<br>

#### `isArray()`

TODO: Done.
[![update]](#500)

Use `isArray()` or `is.array()` to check if **any** `value` is of the type obtained from its `Object.prototype` equal to `'array'` or an [`object`][js-object] type. The value is also checked by the `isArray()` method of [`Array`][js-array].

```typescript
const isArray = <Type = any, Payload extends object = object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Array<Type> =>
  callback(
    (typeOf(value) === 'array' || typeof value === 'object') &&
    Array.isArray(value),
    value,
    { name: isArray.name, ...payload } as any
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Type`    | `any`         | A generic type variable `Type` indicates the type of [`Array`][js-array] element of the `value` parameter, which by default is `any` via the return type `value is Array<Type>`. |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `value: any`                                    | The `value` of any type to check. |
| `callback: ResultCallback<any, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`            | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

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

// Fake array example.
const fakeArray = new String('');

Object.assign(fakeArray, {
  get [Symbol.toStringTag](): string {
    return 'array';
  }
});

isArray(fakeArray), // false
typeOf(fakeArray), // "array"
typeof fakeArray, // "object"
Array.isArray(fakeArray) // false

// Example usage with callback and payload.
isArray([1, 2, 3], (result, value, payload) => {
  if (result === true) {
    // Returns `(3) [1, 2, 3]`
    value

    if (payload) {
      console.log(payload);

      // Returns `'isArray'`
      payload.name;

      // Returns `{ "1": "First", "2": "Second", "3": "Third" }`
      payload.transform;
    }
  }
  return result;
}, { transform: { 1: 'First', 2: 'Second', 3: 'Third'} }); // Returns `true` as `value is any[]`
```

<br>

#### `isBigInt()`

TODO: Done.
[![update]](#500)

Use `isBigInt()` or `is.bigint()` to check if **any** `value` is a [`bigint`][js-bigint] type .

```typescript
const isBigInt = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is bigint =>
  callback(typeof value === 'bigint', value, {
    name: isBigInt.name,
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `value: any`                                    | The `value` of any type to check. |
| `callback: ResultCallback<any, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`            | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

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

TODO: Done.
[![update]](#500)

Use `isBoolean()` or `is.boolean()` to check if **any** `value` is a [`boolean`][js-boolean] type, or the obtained type from its `Object.prototype` equal to `'boolean'`, or an [`object`][js-object] type and an instance of [`Boolean`][js-boolean] that is equal to `true` or `false`.

```typescript
const isBoolean = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is boolean =>
  callback(
    (typeof value === 'boolean' ||
    typeOf(value) === 'boolean' ||
    (typeof value === 'object' && value instanceof Boolean)) &&
    (value.valueOf() === true || value.valueOf() === false),
    value,
    { name: isBoolean.name, ...payload } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `value: any`                                    | The `value` of any type to check. |
| `callback: ResultCallback<any, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`            | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns            | Type      | Description |
| :----------------- | :-------: | :---------- |
| `value is boolean` | `boolean` | The **return type** is a `boolean` as the result of its statement. |

The **return value** is a `boolean` indicating whether the provided `value` is a `boolean` type or an instance of [`Boolean`][js-boolean].

**Usage:**

```typescript
// Example usage.
import { isBoolean } from '@angular-package/type';

isBoolean(false); // Returns `true` as `value is boolean`
isBoolean(new Boolean(false)); // Returns `true` as `value is boolean`
isBoolean('my name', (result, value, payload) => {
  if (result === false) {
    value // "my name"
    if (payload) {
      // Change the result from `false` to `true`.
      if (payload === payload.accepted) {
        result = true;
      }
    }
  }
  return result;
}, { accepted: 'my name' }); // Returns `true` as `value is boolean`.

// Fake boolean example.
const fakeBoolean = new String('');

Object.assign(fakeBoolean, {
  get [Symbol.toStringTag](): string {
    return 'boolean';
  },
});

isBoolean(fakeBoolean); // false
typeOf(fakeBoolean); // "boolean"
typeof fakeBoolean; // "object"

// Boolean as string example.
const stringAsBoolean = new Boolean('');

Object.assign(stringAsBoolean, {
  get [Symbol.toStringTag](): string {
    return 'string';
  },
});

isBoolean(stringAsBoolean); // true
typeOf(stringAsBoolean); // "string"
typeof stringAsBoolean; // "object"
```

<br>

#### `isBooleanObject()`

TODO: Done.
[![update]](#500)

Use `isBooleanObject()` or `is.booleanObject()` to check if **any** `value` is of the type obtained from its `Object.prototype` equal to `'boolean'` or an [`object`][js-object] type, and an instance of [`Boolean`][js-boolean] that is equal to `true` or `false`.

```typescript
const isBooleanObject = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Boolean =>
  callback(
    (typeOf(value) === 'boolean' || typeof value === 'object') &&
    value instanceof Boolean &&
    (value.valueOf() === true || value.valueOf() === false),
    value,
    { name: isBooleanObject.name, ...payload } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `value: any`                                    | The `value` of any type to check. |
| `callback: ResultCallback<any, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`            | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns            | Type      | Description |
| :----------------- | :-------: | :---------- |
| `value is Boolean` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is [`Boolean`][js-boolean]. |

The **return value** is a `boolean` indicating whether the provided `value` is an instance of [`Boolean`][js-boolean].

**Usage:**

```typescript
// Example usage.
import { isBooleanObject } from '@angular-package/type';

isBooleanObject(false); // false
isBooleanObject(new Boolean(false)); // true
```

<br>

#### `isBooleanType()`

TODO: Done.
[![update]](#500)

Use `isBooleanType()` or `is.booleanType()` to check if **any** `value` is a [`boolean`][js-boolean] type equal to `true` or `false`.

```typescript
const isBooleanType = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is boolean =>
  callback(
    typeof value === 'boolean' && (value === true || value === false),
    value,
    { name: isBooleanType.name, ...payload } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `value: any`                                    | The `value` of any type to check. |
| `callback: ResultCallback<any, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`            | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

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

TODO: Done.
[![update]](#500)

Use `isClass()` or `is.class()` to check if **any** `value` is a [`function`][js-function] type or of the type obtained from its `Object.prototype` equal to `'function'` and an instance of [`Function`][js-function]. It also **confirms**  it's a [`class`][ts-classes] by using [`regexp`][js-regexp] on the obtained string from its `Function.prototype`.

```typescript
const isClass = <Class = Function, Payload extends object = object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Class =>
  callback(
    typeof value === 'function' ||
    (typeOf(value) === 'function' && value instanceof Function)
    ? /class/.test(Function.prototype.toString.call(value).slice(0, 5))
    : false,
    value,
    { name: isClass.name, ...payload } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Class`   | `Function`    | A generic type variable `Class` indicates the type of `value` parameter via the return type `value is Class`. |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `value: any`                                    | The `value` of any type to check. |
| `callback: ResultCallback<any, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`            | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

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
isClass(() => 5, (result, value, payload) => {
  value // Returns `() => 5`
  if (payload) {
    result // Returns `false`
    payload.name // Returns `'isClass'`
    payload.c // Returns `class Class`
  }
  return result;
}, { c: Class }); // Returns `false` as `value is Function`
```

<br>

#### `isDate()`

TODO: Done.
[![update]](#500)

Use `isDate()` or `is.date()` to check if **any** `value` is of the type obtained from its `Object.prototype` equal to `'date'` or an [`object`][js-object] type, and an instance of [`Date`][js-date]. The `value` is checked against a valid date by using [`isNaN()`][js-isnan] function.

```typescript
const isDate = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Date =>
  callback(
    (typeOf(value) === 'date' || typeof value === 'object') &&
    value instanceof Date === true &&
    !isNaN(value),
    value,
    { name: isDate.name, ...payload } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `value: any`                                    | The `value` of any type to check. |
| `callback: ResultCallback<any, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`            | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is Date` | `boolean` | The **return type** is a `boolean` as the result of its statement, indicating the `value` is a `Date`. |

The **return value** is a `boolean` indicating whether the provided `value` is a [`Date`][js-date].

**Usage:**

```typescript
// Example usage.
import { isDate } from '@angular-package/type';

const DATE = new Date(1995, 11, 17, 3, 24, 0);

isDate(new Date('December 17, 1995 03:24:00')), // true
isDate(new Date('1995-12-17T03:24:00')), // true
isDate(new Date(1995, 11, 17)), // true
isDate(new Date(628021800000)), // true
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

TODO: Done.
[![update]](#500)

Use `isDefined()` or `is.defined()` to check if **any** `value` is **not** an [`undefined`][js-undefined] type and is **not** equal to [`undefined`][js-undefined].

```typescript
const isDefined = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Defined<Type> =>
  callback(typeof value !== 'undefined' && value !== undefined, value, {
    name: isDefined.name,
    ...payload,
  } as any);
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Type`    | From the `value` | A generic type variable `Type` indicates the type of the `value` parameter, by default captured from the provided `value` via the return type `value is Defined<Type>`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                       | Description |
| :----------------------------------------------- | :---------- |
| `value: Type`                                    | The `value` of a generic `Type`, by default of type captured from the provided `value`, to check. |
| `callback: ResultCallback<Type, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`             | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

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
isDefined('age', (result, value, payload) => {
  value // 'age'
  if (payload) {
    result // Returns `true`
    payload.name // Returns `'isDefined'`
    payload.notDefined // Returns `false`
  }
  return result;
}, { notDefined: false }); // Returns `true` as `value is string`
```

<br>

#### `isFalse()`

TODO: Done.
[![update]](#500)

Use `isFalse()` or `is.false()` to check if **any** `value` is a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] by using [`isBoolean()`](#isboolean) function, that is equal to `false`.

```typescript
const isFalse = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is false =>
  callback(isBoolean(value) ? value.valueOf() === false : false, value, {
    name: isFalse.name,
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `value: any`                                    | The `value` of any type to check. |
| `callback: ResultCallback<any, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`            | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns          | Type      | Description |
| :--------------- | :-------: | :---------- |
| `value is false` | `boolean` | The **return type** is a `boolean` as the result of its statement, indicating the `value` is equal to`false`. |

The **return value** is a `boolean` indicating whether the provided `value` is a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] equal to `false`.

**Usage:**

```typescript
// Example usage.
import { isFalse } from '@angular-package/type';

isFalse(true); // Returns `false` as `value is false`
isFalse(false); // Returns `true` as `value is false`

isFalse(new Boolean(true)); // Returns `false` as `value is false`
isFalse(new Boolean(false)); // Returns `true` as `value is false`

// Example usage with callback and payload.
isFalse(new Boolean(false), (result, value, payload) => {
  value // Returns `Boolean {false}`
  if (payload) {
    result // Returns `false`
    payload.name // Returns `'isFalse'`
    payload.age // Returns `27`
  }
  return result;
}, { age: 27 }); // Returns `true` as `value is false`
```

<br>

#### `isFunction()`

TODO: Done.
[![update]](#500)

Use `isFunction()` or `is.function()` to check if **any** `value` is a [`function`][js-function] type or of the type obtained from its `Object.prototype` equal to `'function'` and an instance of [`Function`][js-function]. It also **denies** it's a [`class`][ts-classes] by using [`RegExp`][js-regexp] on the obtained string from its `Function.prototype`.

```typescript
const isFunction = <Payload extends object = object>(
  value: any,
  callback: ResultCallback<typeof value, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Function =>
  callback(
    typeof value === 'function' ||
    (typeOf(value) === 'function' && (value as any) instanceof Function)
    ? /class/.test(Function.prototype.toString.call(value).slice(0, 5)) ===
        false
    : false,
    value,
    { name: isFunction.name, ...payload } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                               | Description |
| :------------------------------------------------------- | :---------- |
| `value: any`                                             | The value of any type to check. |
| `callback: ResultCallback<typeof value, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                     | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns             | Type      | Description |
| :------------------ | :-------: | :---------- |
| `value is Function` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a [`Function`][js-function]. |

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
isFunction(() => 5, (result, value, payload) => {
  value // Returns `() => 5`
  if (payload) {
    payload.name // Returns `'isFunction'`
    payload.number // Returns `true`
  }
  return result;
}, { number: true }); // Returns `true` as `value is () => 5`
```

<br>

#### `isInstance()`

TODO: Done.
[![update]](#500)

Use `isInstance()` or `is.instance()` to check if **any** `value` is an instance of a given [`Constructor`](#constructor).

```typescript
const isInstance = <Obj, Payload extends object>(
  value: any,
  constructor: Constructor<Obj>,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<{ ctor?: typeof constructor } & Payload>
): value is Obj =>
  callback(
    isObject(value) &&
    typeof constructor === 'function' &&
    constructor instanceof Function
    ? value instanceof constructor
    : false,
    value,
    { name: isInstance.name, ctor: constructor, ...payload } as any
  );
```

**Generic type variables:**

| Name      | Default value          | Description |
| :-------- | :--------------------- | :---------- |
| `Obj`     | From the `constructor` | A generic type variable `Obj`, by default captured from the provided `constructor` indicates the type of `value` parameter via the return type `value is Obj`. |
| `Payload` | `object`               | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                           | Description |
| :------------------------------------------------------------------- | :---------- |
| `value: any`                                                         | The `value` of any type to be an instance of a given `constructor`. |
| `constructor: Constructor<Obj>`                                      | A [`class`][ts-classes] or [`function`][ts-function] that specifies the type of [`Constructor`](#constructor). |
| `callback: ResultCallback<any, typeof payload>`                      | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape, with `constructor` under `ctor` name and optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<{ ctor?: typeof constructor } & Payload>` | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

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
isInstance(TWO, Some, (result, value, payload) => {
  value // Returns the provided `Two`
  if (payload) {
    payload.className // Returns `'Some'`
    payload.name // Returns `'isInstance'`
    payload.ctor // Returns the provided `Some`
  }
  return result;
}, { className: Some });

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
isInstance(new Boolean(), Boolean), // Returns `true` as `value is Boolean`
isInstance(new Date(), Date), // Returns `true` as `value is Date`
isInstance(new Error(), Error), // Returns `true` as `value is Error`
isInstance(new Function(), Function), // Returns `true` as `value is Function`
isInstance(new Map(), Map), // Returns `true` as `value is Map`
isInstance(new Number(), Number), // Returns `true` as `value is Number`
isInstance(new Object(), Object), // Returns `true` as `value is Object`
isInstance(new RegExp(/^[]/), RegExp), // Returns `true` as `value is RegExp`
isInstance(new Set(), Set), // Returns `true` as `value is Set`
isInstance(new String(), String), // Returns `true` as `value is String`
```

<br>

#### `isKey()`

TODO: Done.
[![update]](#500)

Use `isKey()` or `is.key()` to check if **any** `value` is one of the [`string`][js-string], [`number`][js-number], or [`symbol`][js-symbol] type.

```typescript
const isKey = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is PropertyKey =>
  callback(
    isStringType(value) || isNumberType(value) || isSymbol(value),
    value,
    { name: isKey.name, ...payload } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `value: any`                                    | The `value` of any type to check. |
| `callback: ResultCallback<any, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`            | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns                | Type      | Description |
| :--------------------- | :-------: | :---------- |
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

TODO: Done.
[![update]](#500)

Use `isNull()` or `is.null()` to check if **any** `value` is of the type obtained from its `Object.prototype` equal to `'null'` or an [`object`][js-object] type that is equal to [`null`][js-null].

```typescript
const isNull = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is null =>
  callback(
    (typeOf(value) === 'null' || typeof value === 'object') && value === null,
    value,
    { name: isNull.name, ...payload } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `value: any`                                    | The `value` of any type to check. |
| `callback: ResultCallback<any, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`            | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

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

#### `isNumber()`

TODO: Done.
[![update]](#500)

Use `isNumber()` or `is.number()` to check if **any** `value` is a [`number`][js-number] type, or of the type obtained from its `Object.prototype` equal to `'number'` or an [`object`][js-object] type and an instance of [`Number`][js-number]. The value is also checked by the [`isFinite()`][js-isfinite] function to determine whether it's finite and is validated by the [`Number.isNaN()`][js-numberisnan] function.

```typescript
const isNumber = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is number =>
  callback(
    (typeof value === 'number' ||
    ((typeOf(value) === 'number' || typeof value === 'object') &&
      value instanceof Number)) &&
    !Number.isNaN(value.valueOf()) &&
    isFinite(value.valueOf()),
    value,
    { name: isNumber.name, ...payload } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `value: any`                                    | The `value` of any type to check. |
| `callback: ResultCallback<any, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`            | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns           | Type      | Description |
| :---------------- | :-------: | :---------- |
| `value is number` | `boolean` | The **return type** is a `boolean` as the result of its statement. |

The **return value** is a `boolean` indicating whether the provided `value` is a `number` type or an instance of [`Number`][js-number].

**Usage:**

```typescript
// Example usage.
import { isNumber } from '@angular-package/type';

isNumber(10304050); // true
isNumber(Number(10304050)); // true
isNumber(new Number(10304050)); // true
```

<br>

#### `isNumberBetween()`

TODO: Done.
[![update]](#500)

Use `isNumberBetween()` or `is.numberBetween()` to check if **any** `value` is a [`number`][js-number] type or an instance of [`Number`][js-number] by using [`isNumber()`](#isnumber), between a specified range.

```typescript
const isNumberBetween = <
  Payload extends object,
  Min extends number,
  Max extends number
>(
  value: any,
  range: MinMax<Min, Max>,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<MinMax<Min, Max> & Payload>
): value is NumberBetween<Min, Max> =>
  callback(
    isNumber(value) && isObject(range)
    ? (isNumberType(range.min) && range.min >= 0
      ? value.valueOf() >= range.min
      : true) &&
    (isNumberType(range.max) && range.max >= 0
      ? value.valueOf() <= range.max
      : true)
    : false,
    value,
    {
      name: isNumberBetween.name,
      min: range?.min,
      max: range?.max,
      ...payload,
    } as any
  );
```

**Generic type variables:**

| Name  | Default value                    | Description |
| :---- | :------------------------------- | :---------- |
| `Min` | Captured from the provided `min` | A generic type variable `Min` constrained with the `number` type, by default of value captured from the provided `min` that indicates the minimum range of the provided `value` via the return type `value is NumberBetween<Min, Max>` |
| `Max` | Captured from the provided `max` | A generic type variable `Max` constrained with the `number` type, by default of value captured from the provided `max` that indicates the minimum range of the provided `value` via the return type `value is NumberBetween<Min, Max>` |

**Parameters:**

| Name: type                                              | Description |
| :------------------------------------------------------ | :---------- |
| `value: any`                                            | The `value` of any type to check. |
| `range: MinMax<Min, Max>`                               | An [`object`][js-object] of optional minimum and maximum `range` of a given `value`. |
| `callback: ResultCallback<any, typeof payload>`         | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape, with minimum and maximum `range` and optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<MinMax<Min, Max> & Payload>` | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns                            | Type      | Description |
| :--------------------------------- | :-------: | :---------- |
| `value is NumberBetween<Min, Max>` | `boolean` | The **return type** is a `boolean` as the result of its statement, indicating the `value` is a `number` between a specified range. |

The **return value** is a `boolean` indicating whether the `value` is a finite number of a `number` type or an instance of [`Number`][js-number] between a specified range.

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

#### `isNumberObject()`

TODO: Done.
[![update]](#500)

Use `isNumberObject()` or `is.numberObject()` to check if **any** `value` is of the type obtained from its `Object.prototype` equal to `'number'`, or an [`object`][js-object] type and an instance of [`Number`][js-number] and is also checked by the [`isFinite()`][js-isfinite] function to determine whether it's finite and is validated by the [`Number.isNaN()`][js-numberisnan] function.

```typescript
const isNumberObject = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Number =>
  callback(
    (typeOf(value) === 'number' || typeof value === 'object') &&
    value instanceof Number &&
    !Number.isNaN(value.valueOf()) &&
    isFinite(value.valueOf()),
    value,
    { name: isNumberObject.name, ...payload } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `value: any`                                    | The `value` of any type to check. |
| `callback: ResultCallback<any, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`            | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns           | Type      | Description |
| :---------------- | :-------: | :---------- |
| `value is Number` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is [`Number`][js-number]. |

The **return value** is a `boolean` indicating whether the `value` is an instance of [`Number`][js-number].

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

TODO: Done.
[![update]](#500)

Use `isNumberType()` or `is.numberType()` to check if **any** `value` is a [`number`][js-number] type and is checked by the [`isFinite()`][js-isfinite] function to determine whether it's finite and is validated by the [`Number.isNaN()`][js-numberisnan] function.

```typescript
const isNumberType = <Payload extends object>(
  value: any,
  callback: ResultCallback<number, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is number =>
  callback(
    typeof value === 'number' && isFinite(value) && !Number.isNaN(value),
    value,
    { name: isNumberType.name, ...payload } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns           | Type      | Description |
| :---------------- | :-------: | :---------- |
| `value is number` | `boolean` | The **return type** is a `boolean` as the result of its statement. |

The **return value** is a `boolean` indicating whether the provided `value` is a `number` type.

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

TODO: Done.
[![update]](#500)

Use `isObject()` or `is.object()` to check if **any** `value` is an [`object`][js-object] type or of the type obtained from its `Object.prototype` equal to `'object'`, and an instance of [`Object`][js-object].

```typescript
const isObject = <Obj = object, Payload extends object = object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Obj =>
  callback(
    (typeof value === 'object' || typeOf(value) === 'object') &&
    value instanceof Object,
    value,
    { name: isObject.name, ...payload } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Obj`     | `object`      | A generic type variable `Obj` indicates the type of `value` parameter via the return type `value is Obj`. |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `value: any`                                    | The `value` of any type to check. |
| `callback: ResultCallback<any, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`            | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

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

TODO: Done.
[![update]](#500)

Use `isObjectKey()` or `is.objectKey()` to check if **any** `value` is an [`object`][js-object] by using the [`isObject()`](#isobject) function with its key of the `PropertyKey` type.
The function uses [`hasOwnProperty`][js-hasownproperty] [`Object`][js-object] method to finds enumerable and non-enumerable `PropertyKey` as `string`, `number`, `symbol` unlike `Object.keys()`, but it can't find [`getter`][js-getter] property unlike [`in`][js-in-operator] operator, which can.

```typescript
const isObjectKey = <Obj = object, Payload extends object = object>(
  value: any,
  key: PropertyKey,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<{ key?: typeof key } & Payload>
): value is Obj =>
  callback(
    isObject(value) ? {}.hasOwnProperty.call(value, key) : false,
    value,
    { name: isObjectKey.name, key, ...payload } as any
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Obj`     | `object`      | A generic type variable `Obj` indicates the type of `value` parameter, which by default is `object` via the return type `value is Obj`. |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                  | Description |
| :---------------------------------------------------------- | :---------- |
| `value: any`                                                | The `value` of any type to check against an `object` that contains a key from a given `key`. |
| `key: PropertyKey \| PropertyKey[]`                         | A property key to check if a given `value` contains. |
| `callback: CallbackPayload & { key: typeof key } & Payload` | A callback `function` of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape, with the provided `key` and optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                         | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | By default `Obj` variable is equal to `object` and the **return type** is a `boolean` as the result of its statement indicating the `value` is `object`. |

The **return value** is a `boolean` indicating whether the provided `value` is an `object` with its key.

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

TODO: Done.
[![update]](#500)

Use `isObjectKeyIn()` or `is.objectKeyIn()` to check if **any** `value` is an [`object`][js-object] by using the [`isObject()`](#isobject) function with a key of the `PropertyKey` in it(or its prototype chain) by using the [`in`][js-in-operator] operator.

```typescript
const isObjectKeyIn = <Obj = object, Payload extends object = object>(
  value: any,
  key: PropertyKey,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<{ key: typeof key } & Payload>
): value is Obj =>
  callback(isObject(value) ? key in value : false, value, {
    name: isObjectKeyIn.name,
    key,
    ...payload,
  } as any);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Obj`     | `object`      | A generic type variable `Obj` indicates the type of `value` parameter, which by default is `object` via the return type `value is Obj`. |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `value: any`                                               | The `value` of any type to check against an `object` that contains(or its prototype chain) key from a given `key`. |
| `key: PropertyKey`                                         | A property key to check if a given `value` contains(or its prototype chain). |
| `callback: ResultCallback<any, typeof payload>`            | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape, with the provided `key` and optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<{ key: typeof key } & Payload>` | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | By default `Obj` variable is equal to `object` and the **return type** is a `boolean` as the result of its statement indicating the `value` is `object`. |

The **return value** is a `boolean` indicating whether the provided `value` is an `object` that contains(or its prototype chain) a given key.

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

TODO: Done.
[![update]](#500)

Use `isObjectKeys()` or `is.objectKeys()` to check if **any** `value` is an [`object`][js-object] by using the [`isObject()`](#isobject) with its keys.
The function uses [`hasOwnProperty`][js-hasownproperty] of [`Object`][js-object] method to find enumerable and non-enumerable `PropertyKey` as `string`, `number`, `symbol` unlike `Object.keys()`, but it can't find [`getter`][js-getter] property unlike [`in`][js-in-operator] operator, which can.

```typescript
const isObjectKeys = <Obj = object, Payload extends object = object>(
  value: any,
  keys: PropertyKey[],
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<{ keys?: typeof keys } & Payload>
): value is Obj =>
  callback(
    isObject(value) && isArray(keys)
      ? keys.every((key) => ({}.hasOwnProperty.call(value, key)))
      : false,
    value,
    { name: isObjectKeys.name, keys, ...payload } as any
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Obj`     | `object`      | A generic type variable `Obj` indicates the type of `value` parameter, which by default is `object` via the return type `value is Obj`. |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                    | Description |
| :------------------------------------------------------------ | :---------- |
| `value: any`                                                  | The `value` of any type to check against an [`object`][js-object] that contains its keys from given `keys`. |
| `keys: PropertyKey[]`                                         | An [`Array`][js-array] of property keys to check if a given `value` contains all of them. |
| `callback: ResultCallback<any, typeof payload>`               | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape, with the provided `keys` and optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<{ keys?: typeof keys } & Payload>` | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | By default `Obj` variable is equal to `object` and the **return type** is a `boolean` as the result of its statement indicating the `value` is `object`. |

The **return value** is a `boolean` indicating whether the provided `value` is an `object` with its keys.

**Usage:**

```typescript
// Example usage.
import { isObjectKeys } from '@angular-package/type';

class Person {
  firstName = 'name';
  surname = 'surname';
  age = 27;
  city = 'New York';
  sex = 'Male';
  get getAge(): number {
    return this.age;
  }
}
const person = new Person();
// Define property.
Object.defineProperty(person, 'notEnumerable', { enumerable: false });

person.propertyIsEnumerable('notEnumerable'); // Returns `false`.
isObjectKeys(person, ['firstName']); // Returns `true` as `value is object`.
isObjectKeys(person, ['firstName', 'surname']); // Returns `true` as `value is object`.
isObjectKeys(person, ['firstName', 'no property']); // Returns `false` as `value is object`.
// Getter.
isObjectKeys(person, ['getAge']); // Returns `false` as `value is object`.
// not enumerable.
isObjectKeys(person, ['notEnumerable']); // Returns `true` as `value is object`.
/*
  Returns [
    "firstName",
    "surname",
    "age",
    "city",
    "sex"
]
*/
Object.keys(person);
```

<br>

#### `isObjectKeysIn()`

TODO: Done.
[![update]](#500)

Use `isObjectKeysIn()` or `is.objectKeysIn()` to check if **any** `value` is an `object` by using the [`isObject()`](#isobject) function with keys in it(or its prototype chain) by using the [`in`][js-in-operator] operator.

```typescript
const isObjectKeysIn = <Obj = object, Payload extends object = object>(
  value: any,
  keys: PropertyKey[],
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<{ keys: typeof keys } & Payload>
): value is Obj =>
  callback(
    isObject(value) && isArray(keys) ? keys.every((k) => k in value) : false,
    value,
    { name: isObjectKeysIn.name, keys, ...payload } as any
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Obj`     | `object`      | A generic type variable `Obj` indicates the type of `value` parameter, which by default is `object` via the return type `value is Obj`. |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                    | Description |
| :------------------------------------------------------------ | :---------- |
| `value: any`                                                  | The `value` of any type to check against an [`object`][js-object] that contains its keys from given `keys`. |
| `keys: PropertyKey[]`                                         | An [`Array`][js-array] of property keys to check if a given `value` contains all of them. |
| `callback: ResultCallback<any, typeof payload>`               | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape, with the provided `keys` and optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<{ keys?: typeof keys } & Payload>` | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | By default `Obj` variable is equal to `object` and the **return type** is a `boolean` as the result of its statement indicating the `value` is `object`. |

The **return value** is a `boolean` indicating whether the provided `value` is an `object` that contains(or its prototype chain) given `keys`.

**Usage:**

```typescript
// Example usage.
import { isObjectKeysIn } from '@angular-package/type';

class Person {
  firstName = 'name';
  surname = 'surname';
  age = 27;
  city = 'New York';
  sex = 'Male';
  get getAge(): number {
    return this.age;
  }
}
const person = new Person();
// Define property.
Object.defineProperty(person, 'notEnumerable', { enumerable: false });
person.propertyIsEnumerable('notEnumerable'); // Returns `false`.
isObjectKeysIn(person, ['firstName']); // Returns `true` as `value is object`.
isObjectKeysIn(person, ['firstName', 'surname']); // Returns `true` as `value is object`.
isObjectKeysIn(person, ['firstName', 'no property']); // Returns `false` as `value is object`.
// Getter.
isObjectKeysIn(person, ['getAge']); // Returns `true` as `value is object`.
// not enumerable.
isObjectKeysIn(person, ['notEnumerable']); // Returns `true` as `value is object`.
```

<br>

#### `isObjectSomeKeys()`

TODO: Done.
[![update]](#500)

Use `isObjectSomeKeys()` or `is.objectSomeKeys()` to check if **any** `value` is an [`object`][js-object] by using the [`isObject()`](#isobject) function with some of its keys or some groups of its keys of the `PropertyKey` type.
Because of using [`some()`][js-array-some] on the provided `keys` parameter of [`Array`][js-array] its elements are treated as logic `or`, and if an element is an [`Array`][js-array] type its elements are treated as logic `and` because of using [`every()`][js-array-every].

```typescript
const isObjectSomeKeys = <
  Obj = object,
  Payload extends object = object
>(
  value: any,
  keys: (PropertyKey | Array<PropertyKey>)[],
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<{ keys?: typeof keys } & Payload>
): value is Obj =>
  callback(
    isObject(value) && isArray(keys)
    ? keys.some((someKey) =>
        isArray(someKey)
          ? someKey.every((everyKey) =>
              ({}.hasOwnProperty.call(value, everyKey))
            )
          : {}.hasOwnProperty.call(value, someKey) === true
      )
    : false,
    value,
    { name: isObjectSomeKeys.name, keys, ...payload } as any
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Obj`     | `object`      | A generic type variable `Obj` indicates the type of `value` parameter, which by default is `object` via the return type `value is Obj`. |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                    | Description |
| :------------------------------------------------------------ | :---------- |
| `value: any`                                                  | The `value` of any type to check against an [`object`][js-object] that contains some of its keys or some groups of its keys from a given `keys`. |
| `keys: (PropertyKey | Array<PropertyKey>)[]`                  | An [`Array`][js-array] of property names or a two-dimensional array of property names to check if the given `value` contains some of them or some groups of them. |
| `callback: ResultCallback<any, typeof payload>`               | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape, with the provided `keys` and optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<{ keys?: typeof keys } & Payload>` | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | By default `Obj` variable is equal to `object` and the **return type** is a `boolean` as the result of its statement indicating the `value` is `object`. |

The **return value** is a `boolean` indicating whether the provided `value` is an `object` with some of its keys or some groups of its keys from a given `keys`.

**Usage:**

```typescript
// Example usage.
import { isObjectSomeKeys } from '@angular-package/type';

class Person {
  firstName = 'name';
  surname = 'surname';
  age = 27;
  city = 'New York';
  sex = 'Male';
  get getAge(): number {
    return this.age;
  }
}
const person = new Person();
// Define property.
Object.defineProperty(person, 'notEnumerable', { enumerable: false });
person.propertyIsEnumerable('notEnumerable'); // Returns `false`.
isObjectSomeKeys(person, ['firstName']); // Returns `true` as `value is object`.
isObjectSomeKeys(person, ['firstName', 'surname']); // Returns `true` as `value is object`.
isObjectSomeKeys(person, ['firstName', 'no property']); // Returns `true` as `value is object`.
// Getter.
isObjectSomeKeys(person, ['getAge']); // Returns `false` as `value is object`.
// not enumerable.
isObjectSomeKeys(person, ['notEnumerable']); // Returns `true` as `value is object`.
isObjectSomeKeys(person, [['firstName', 'surname'], ['city', 'age']]); // Returns `true` as `value is object`.
isObjectSomeKeys(person, [['firstName', 'surname'], ['city', 'no property']]); // Returns `true` as `value is object`.
isObjectSomeKeys(person, [['firstName1', 'surname1'], ['city1', 'no property']]); // Returns `false` as `value is object`.
```

<br>

#### `isPrimitive()`

TODO: Done.
[![update]](#500)

Use `isPrimitive()` or `is.primitive()` to check if **any** `value` is the [`Primitive`](#primitive) type or type from a given `type` of the [`Primitives`](#primitives).

```typescript
const isPrimitive = <
  Type extends Primitive,
  Payload extends object = object
>(
  value: any,
  type?: Primitives,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Type => {
  if (isUndefined(type)) {
    return callback(
      isNull(value) ||
        (typeof value !== 'object' && typeof value !== 'function'),
      value,
      { name: isPrimitive.name, ...payload } as Payload
    );
  } else {
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
      default:
        return false;
    }
  }
};
```

**Generic type variables:**

| Name                     | Default value             | Description |
| :----------------------- | :------------------------ | :---------- |
| `Type extends Primitive` | [`Primitive`](#primitive) | A generic type variable `Type` constrained by the [`Primitive`](#primitive) type indicates the type of `value` parameter via the return type `value is Type`. |
| `Payload`                | `object`                  | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `value: any`                                    | The `value` of any type to check. |
| `type: Primitives`                              | A value of [`Primitives`](#primitives) type indicates against which type the provided `value` is checked. |
| `callback: ResultCallback<any, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`            | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is Type` | `boolean` | By default `Type` variable is equal to [`Primitive`](#primitive) and the **return type** is a `boolean` as the result of its statement indicating the `value` is [`Primitive`](#primitive). |

The **return value** is a `boolean` indicating whether the provided `value` is a primitive type of the [`Primitives`](#primitives).

**Usage:**

```typescript
// Example usage.
import { isPrimitive } from '@angular-package/type';

isPrimitive(1n); // Returns `true` as `value is Primitive`
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

TODO: Done.
[![update]](#500)

Use `isRegExp()` or `is.regexp()` to check if **any** `value` is a regular expression of the type obtained from its `Object.prototype` equal to `'regexp'`, or an [`object`][js-object] type, and an instance of [`RegExp`][js-regexp].

```typescript
const isRegExp = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is RegExp =>
  callback(
    (typeOf(value) === 'regexp' || typeof value === 'object') &&
    value instanceof RegExp,
    value,
    { name: isRegExp.name, ...payload } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

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

TODO: Done.
[![update]](#500)

Use `isString()` or `is.string()` to check if **any** `value` is a [`string`][js-string] type by using the [`isStringType()`](#isstringtype) function or an instance of [`String`][js-string] by using the [`isStringObject()`](#isstringobject) function.

```typescript
const isString = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is string =>
  callback(isStringType(value) || isStringObject(value), value, {
    name: isString.name,
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `value: any`                                    | The `value` of any type to check. |
| `callback: ResultCallback<any, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`            | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns           | Type      | Description |
| :---------------- | :-------: | :---------- |
| `value is string` | `boolean` | The **return type** is a `boolean` as the result of its statement. |

The **return value** is a `boolean` indicating whether the provided `value` is a `string` type or an instance of [`String`][js-string].

**Usage:**

```typescript
// Example usage.
import { isString } from '@angular-package/type';

isString('age'); // true; The return type `value is string`
isString(new String('age')); // true; The return type `value is string`

// Fake string example.
const fakeString = new Number('asd');

Object.assign(fakeString, {
  get [Symbol.toStringTag](): string {
    return 'string';
  },
});

isString(fakeString); // false
typeOf(fakeString); // "string"
typeof fakeString; // "object"
```

<br>

#### `isStringIncludes()`

TODO: Done.
[![new]](#500)

Use `isStringIncludes()` or `is.stringIncludes()` to check if **any** `value` is a [`string`][js-string] type or an instance of [`String`][js-string] by using [`isString()`](#isstring) that includes all of the specified words.

```typescript
const isStringIncludes = <Payload extends object>(
  value: any,
  includes: string[],
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<{ includes?: typeof includes } & Payload>
): value is string =>
  callback(
    isString(value)
    ? isArray(includes)
      ? includes.every((include) => value.valueOf().includes(include))
      : false
    : false,
    value,
    { name: isStringIncludes.name, includes, ...payload, } as any
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                            | Description |
| :-------------------------------------------------------------------- | :---------- |
| `value: any`                                                          | The `value` of any type to check against the string that contains words from a given `includes`.  |
| `includes: string[]`                                                  | An [`Array`][js-array] of [`string`][js-string] as words to be **case-sensitive** searched for within a given `value`. |
| `callback: ResultCallback<any, typeof payload>`                       | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with the `includes` and optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<{ includes?: typeof includes } & Payload>` | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns           | Type      | Description |
| :---------------- | :-------: | :---------- |
| `value is string` | `boolean` | The **return type** is a `boolean` as the result of its statement. |

The **return value** is a `boolean` indicating whether the provided `value` is a [`string`][js-string] type or an instance of [`String`][js-string] that includes all of the specified words.

**Usage:**

```typescript
// Example usage.
import { isStringIncludes } from '@angular-package/type';

isStringIncludes('This is a person without age.', ['age']); // true; The return type `value is string`
isStringIncludes('This is a person without age.', ['Person']); // false; The return type `value is string`
isStringIncludes('This is a person without age.', ['age', 'Person']); // false; The return type `value is string`
isStringIncludes(new String('This is artificial intelligence.'), [
  'artificial',
  'intelligence',
]); // true; The return type `value is string`
```

<br>

#### `isStringIncludesSome()`

TODO: Done.
[![new]](#500)

Use `isStringIncludesSome()` or `is.stringIncludesSome()` to check if **any** `value` is a [`string`][js-string] type or an instance of [`String`][js-string] by using [`isString()`](#isstring) that includes **some** of the specified words.

```typescript
const isStringIncludesSome = <Payload extends object>(
  value: any,
  includes: string[],
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<{ includes: typeof includes } & Payload>
): value is string =>
  callback(
    isString(value)
    ? isArray(includes)
      ? includes.some((include) => value.valueOf().includes(include))
      : false
    : false,
    value,
    { name: isStringIncludesSome.name, includes, ...payload } as any
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                            | Description |
| :-------------------------------------------------------------------- | :---------- |
| `value: any`                                                          | The `value` of any type to check against the string that `includes` **some** of the words. |
| `includes: string[]`                                                  | An [`Array`][js-array] of [`string`][js-string] as words to be **case-sensitive** searched for within a given `value`. |
| `callback: ResultCallback<any, typeof payload>`                       | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with the `includes` and optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<{ includes?: typeof includes } & Payload>` | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns           | Type      | Description |
| :---------------- | :-------: | :---------- |
| `value is string` | `boolean` | The **return type** is a `boolean` as the result of its statement. |

The **return value** is a `boolean` indicating whether the provided `value` is a [`string`][js-string] type or an instance of [`String`][js-string] that includes **some** of the specified words.

**Usage:**

```typescript
// Example usage.
import { isStringIncludesSome } from '@angular-package/type';

isStringIncludesSome('This is a person without age.', ['age']); // true; The return type `value is string`
isStringIncludesSome('This is a person without age.', ['Person']); // false; The return type `value is string`
isStringIncludesSome('This is a person without age.', ['age', 'Person']); // true; The return type `value is string`
isStringIncludesSome(new String('This is artificial intelligence.'), [
  'artificial',
  'intelligence',
]); // true; The return type `value is string`
```

<br>

#### `isStringLength()`

TODO: Done.
[![update]](#500)

Use `isStringLength()` or `is.stringLength()` to check if **any** `value` is a [`string`][js-string] type or an instance of [`String`][js-string] by using [`isString()`](#isstring) of `length` within the specified range.

```typescript
const isStringLength = <
  Min extends number,
  Max extends number,
  Payload extends object
>(
  value: any,
  length: MinMax<Min, Max>,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<MinMax<Min, Max> & Payload>
): value is StringOfLength<Min, Max> =>
  callback(
    isString(value) && isObject(length)
    ? (isNumberType(length.min) && length.min >= 0
      ? value.valueOf().length >= length.min
      : true) &&
    (isNumberType(length.max) && length.max >= 0
      ? value.valueOf().length <= length.max
      : true)
    : false,
    value,
    {
      name: isStringLength.name,
      min: length?.min,
      max: length?.max,
      ...payload,
    } as Payload
  );
```

**Generic type variables:**

| Name  | Default value                    | Description |
| :---- | :------------------------------- | :---------- |
| `Min` | Captured from the provided `min` | A generic `Min` variable constrained with the `number` type, by default of a value captured from the provided `min` that indicates the minimum range of the provided `value` via the return type `value is StringOfLength<Min, Max>` |
| `Max` | Captured from the provided `min` | A generic `Max` variable constrained with the `number` type, by default of a value captured from the provided `max` that indicates the minimum range of the provided `value` via the return type `value is StringOfLength<Min, Max>` |

**Parameters:**

| Name: type                                              | Description |
| :------------------------------------------------------ | :---------- |
| `value: any`                                            | The `value` of any type to check. |
| `length: MinMax<Min, Max>`                              | An [`object`][js-object] of optional minimum and a maximum `length` of the given `value`. |
| `callback: ResultCallback<any, typeof payload>`         | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with the minimum and maximum `length` and optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<MinMax<Min, Max> & Payload>` | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns                             | Type      | Description                                                       |
| :---------------------------------- | :-------: | :---------------------------------------------------------------- |
| `value is StringOfLength<Min, Max>` | `boolean` | The **return type** is a `boolean` as the result of its statement, indicating the `value` is a `string` of length in the specified range. |

The **return value** is a `boolean` indicating whether the `value` is a `string` type or an instance of [`String`][js-string] of length within the specified range.

**Usage:**

```typescript
// Example usage.
import { isStringLength } from '@angular-package/type';

const firstName = 'my first name';

isStringLength(firstName, { min: 12 }); // true; The return type `value is StringOfLength<0, 13>`
isStringLength(firstName, { max: 12 }); // false; The return type `value is StringOfLength<0, 13>`

isStringLength(firstName, { min: 0, max: 13 }); // true; The return type `value is StringOfLength<0, 13>`
isStringLength(firstName, { min: 14, max: 28 }); // false; The return type `value is StringOfLength<14, 28>`
isStringLength(firstName, { min: 0, max: 12 }); // false; The return type `value is StringOfLength<0, 12>`
isStringLength(firstName, { min: 13, max: 13 }); // true; The return type `value is StringOfLength<13, 13>`

const firstNameBox = new String(firstName);

isStringLength(firstNameBox, { min: 0, max: 13 }); // true; The return type `value is StringOfLength<0, 13>`
isStringLength(firstNameBox, { min: 14, max: 28 }); // false; The return type `value is StringOfLength<14, 28>`
isStringLength(firstNameBox, { min: 0, max: 12 }); // false; The return type `value is StringOfLength<0, 12>`
isStringLength(firstNameBox, { min: 13, max: 13 }); // true; The return type `value is StringOfLength<13, 13>`
```

<br>

#### `isStringObject()`

TODO: Done.
[![update]](#500)

Use `isStringObject()` or `is.stringObject()` to check if **any** `value` is of the type obtained from its `Object.prototype` equal to `'string'` or an [`object`][js-object] type, and an instance of [`String`][js-string].

```typescript
const isStringObject = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is String =>
  callback(
    (typeOf(value) === 'string' || typeof value === 'object') &&
    value instanceof String,
    value,
    { name: isStringObject.name, ...payload } as Payload
  );
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `value: any`                                    | The `value` of any type to check. |
| `callback: ResultCallback<any, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`            | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns           | Type      | Description |
| :---------------- | :-------: | :---------- |
| `value is String` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is [`String`][js-string]. |

The **return value** is a `boolean` indicating whether the provided `value` is an instance of [`String`][js-string].

**Usage:**

```typescript
// Example usage.
import { isStringObject } from '@angular-package/type';

isStringObject('age'); // Returns `false` as `value is String`
isStringObject(new String('age')) // Returns `true` as `value is String`
```

<br>

#### `isStringType()`

TODO: Done.
[![update]](#500)

Use `isStringType()` or `is.stringType()` to check if **any** `value` is a [`string`][js-string] type.

```typescript
const isStringType = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is string =>
  callback(typeof value === 'string', value, {
    name: isStringType.name,
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `value: any`                                    | The `value` of any type to check. |
| `callback: ResultCallback<any, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`            | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

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

TODO: Done.
[![update]](#500)

Use `isSymbol()` or `is.symbol()` to check if **any** `value` is a [`symbol`][js-symbol] type.

```typescript
const isSymbol = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is symbol =>
  callback(typeof value === 'symbol', value, {
    name: isSymbol.name,
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `value: any`                                    | The `value` of any type to check. |
| `callback: ResultCallback<any, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`            | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

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

TODO: Done.
[![update]](#500)

Use `isTrue()` or `is.true()` to check if **any** `value` is a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean](by using the [`isBoolean()`](#isboolean)) equal to `true`.

```typescript
const isTrue = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is true =>
  callback(isBoolean(value) ? value.valueOf() === true : false, value, {
    name: isTrue.name,
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `value: any`                                    | The `value` of any type to check. |
| `callback: ResultCallback<any, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`            | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

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
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is T => {
  switch (type) {
    // Primitives.
    case 'bigint':
    case 'boolean':
    case 'number':
    case 'null':
    case 'string':
    case 'symbol':
    case 'undefined':
      return isPrimitive(value, type, callback, payload);
    // Function.
    case 'function':
      return isFunction(value, callback, payload);
    // Object.
    case 'object':
      return isObject(value, callback, payload);
    default:
      return isNotNull(type) ? isInstance(value, type, callback, payload as any) : false;
  }
};
```

**Generic type variables:**

| Name      | Default value   | Description |
| :-------- | :-------------- | :---------- |
| `T`       | [`Type`](#type) | A generic type variable `T` constrained by the [`Type`](#type) indicates the type of `value` parameter via the return type `value is T`. |
| `Payload` | `object`        | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `T` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `value: any`                                    | The `value` of any type to check against a type of given `type` of [`Types`](#types). |
| `type: Types<T>`                                | A value of [`string`][js-string] or [`Constructor`](#constructor) type of the `Types` indicates against which type the provided `value` is checked. |
| `callback: ResultCallback<any, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`            | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

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
isType<boolean>(false, 'boolean'), // Returns `true` as `value is boolean`
isType<number>(27, 'number'); // Returns `true` as `value is number`
isType<null>(null, 'null'); // Returns `true` as `value is null`
isType<string>('age', 'string'); // Returns `true` as `value is string`
isType<symbol>(Symbol(27), 'symbol'); // Returns `true` as `value is symbol`
isType<undefined>(undefined, 'undefined'); // Returns `true` as `value is undefined`
// Function.
isType<Function>(() => {}, 'function'); // Returns `true` as `value is function`
// Object.
isType<object>({}, 'object'); // Returns `true` as `value is object`
// Class.
isType(person, Person); // Returns `true` as `value is Person`
// Class with callback and payload.
isType(person, Person, (result, value, payload) => {
  value // Person {}
  /*
  payload {
    name: 'isInstance',
    value: {},
    id: 15,
    database: 'Persons'
  }
  */
  return result;
}, { id: 15, database: 'Persons' }); // Returns `true` as `value is Person`
```

<br>

#### `isUndefined()`

TODO: Done.
[![update]](#500)

Use `isUndefined()` or `is.undefined()` to check if **any** `value` is an [`undefined`][js-undefined] type.

```typescript
const isUndefined = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is undefined =>
  callback(typeof value === 'undefined', value, {
    name: isUndefined.name,
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: any`                                          | The `value` of any type to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

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

TODO: Done.
[![update]](#500)

Use `isNotBoolean()` or `is.not.boolean()` to check if the `value` of a generic `Type` is **not** of the type obtained from its `Object.prototype` equal to `'boolean'`, not a `boolean` type and not an instance of [`Boolean`][js-boolean].

```typescript
const isNotBoolean = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Never<AnyBoolean, Type> =>
  callback(
    typeOf(value) !== 'boolean' &&
    typeof value !== 'boolean' &&
    value instanceof Boolean === false,
    value,
    { name: isNotBoolean.name, ...payload } as Payload
  );
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Type`    | From the `value` | A generic type variable `Type` indicates the type of `value` parameter via the return type `value is Never<AnyBoolean, Type>`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                       | Description |
| :----------------------------------------------- | :---------- |
| `value: Type`                                    | The `value` of any type, by default of type captured from the provided `value` to check. |
| `callback: ResultCallback<Type, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`             | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns                            | Type      | Description |
| :--------------------------------- | :-------: | :---------- |
| `value is Never<AnyBoolean, Type>` | `boolean` | By default `Type` variable is of type captured from a given `value`, but the captured type `boolean` or [`Boolean`][js-boolean] changes to `never` and the **return type** is a `boolean` as the result of its statement indicating the `value` is **never** of [`AnyBoolean`](#anyboolean) type but of type captured from the `value`. |

The **return value** is a `boolean` indicating whether the `value` is **not** a `boolean` type and **not** an instance of [`Boolean`][js-boolean].

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

TODO: Done.
[![update]](#500)

Use `isNotDefined()` or `is.not.defined()` to check if the `value` of a generic `Type` is **not** of the type obtained from its `Object.prototype` equal to `'undefined'`, **not** an `undefined` type and is **not** equal to [`undefined`][js-undefined].

```typescript
const isNotDefined = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Undefined<Type> =>
  callback(
    typeOf(value) === 'undefined' &&
    typeof value === 'undefined' &&
    value === undefined,
    value,
    { name: isNotDefined.name, ...payload } as Payload
  );
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Type`    | From the `value` | A generic type variable `Type` indicates the type of `value` parameter via the return type `value is Undefined<Type>`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                       | Description |
| :----------------------------------------------- | :---------- |
| `value: Type`                                    | The `value` of any type, by default of type captured from the provided `value` to check. |
| `callback: ResultCallback<Type, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`             | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns                    | Type      | Description |
| :------------------------- | :-------: | :---------- |
| `value is Undefined<Type>` | `boolean` | By default `Type` variable is of type captured from a given `value`, but the captured type other than `undefined` changes to `never` and the **return type** is a `boolean` as the result of its statement indicating the `value` is **never** of any other type than `undefined`. |

The **return value** is a `boolean` indicating whether the `value` is not defined, is `undefined`.

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

TODO: Done.
[![update]](#500)

Use `isNotFunction()` or `is.not.function()` to check if the `value` of a generic `Type` is **not** of the type obtained from its `Object.prototype` equal to `'function'`, **not** a `function` type and **not** an instance of [`Function`][js-function].

```typescript
const isNotFunction = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Never<Function, Type> =>
  callback(
    typeOf(value) !== 'function' &&
    typeof value !== 'function' &&
    value instanceof Function === false,
    value,
    { name: isNotFunction.name, ...payload } as Payload
  );
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Type`    | From the `value` | A generic type variable `Type` indicates the type of `value` parameter via the return type `value is Never<Function, Type>`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                       | Description |
| :----------------------------------------------- | :---------- |
| `value: Type`                                    | The `value` of any type, by default of type captured from the provided `value` to check. |
| `callback: ResultCallback<Type, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`             | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns                          | Type      | Description |
| :------------------------------- | :-------: | :---------- |
| `value is Never<Function, Type>` | `boolean` | By default `Type` variable is of type captured from a given `value`, but the captured type `Function` changes to `never` and the **return type** is a `boolean` as the result of its statement indicating the `value` is **never** [`Function`][js-function] but of type captured from the `value`. |

The **return value** is a `boolean` indicating whether the provided `value` is not a [`function`][js-function].

**Usage:**

```typescript
// Example usage.
import { IsNotFunction } from '@angular-package/type';

const anyFunc: any = (x: number) => x + 5;
const myFunc = (x: string) => x;

isNotFunction(anyFunc); // false; return type is `value is any`
isNotFunction(myFunc); // false; return type is `value is never`
isNotFunction('maybe i am not a function'); // true; return type is `value is string`
```

<br>

#### `isNotNull()`

TODO: Done.
[![update]](#500)

Use `isNotNull()` or `is.not.null()` to check if the `value` of a generic `Type` is **not** of the type obtained from its `Object.prototype` equal to `'null'` and **not** equal to [`null`][js-null].

```typescript
const isNotNull = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Never<null, Type> =>
  callback(typeOf(value) !== 'null' && value !== null, value, {
    name: isNotNull.name,
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Type`    | From the `value` | A generic type variable `Type` indicates the type of `value` parameter via the return type `value is Never<null, Type>`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                       | Description |
| :----------------------------------------------- | :---------- |
| `value: Type`                                    | The `value` of any type, by default of type captured from the provided `value` to check. |
| `callback: ResultCallback<Type, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`             | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns                      | Type      | Description |
| :--------------------------- | :-------: | :---------- |
| `value is Never<null, Type>` | `boolean` | By default `Type` variable is of type captured from a given `value`, but the captured type `null` changes to `never` and the **return type** is a `boolean` as the result of its statement indicating the `value` is **never** `null` but of type captured from the `value`. |

The **return value** is a `boolean` indicating whether the provided `value` is not [`null`][js-null].

**Usage:**

```typescript
// Example usage.
import { isNotNull } from '@angular-package/type';

const anyNull: any = null;
const firstName = null;

isNotNull(anyNull); // return type is `value is any`
isNotNull(firstName); // return type is `value is never`
```

<br>

#### `isNotNumber()`

TODO: Done.
[![update]](#500)

Use `isNotNumber()` or `is.not.number()` to check if the `value` of a generic `Type` is **not** of the type obtained from its `Object.prototype` equal to `'number'`, **not** a `number` type and **not** an instance of [`Number`][js-number].

```typescript
const isNotNumber = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Never<AnyNumber, Type> =>
  callback(
    typeOf(value) !== 'number' &&
    typeof value !== 'number' &&
    value instanceof Number === false,
    value,
    { name: isNotNumber.name, ...payload } as Payload
  );
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Type`    | From the `value` | A generic type variable `Type` indicates the type of `value` parameter via the return type `value is Never<AnyNumber, Type>`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                       | Description |
| :----------------------------------------------- | :---------- |
| `value: Type`                                    | The `value` of any type, by default of type captured from the provided `value` to check. |
| `callback: ResultCallback<Type, typeof payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: CallbackPayload<Payload>`             | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns                           | Type      | Description |
| :-------------------------------- | :-------: | :---------- |
| `value is Never<AnyNumber, Type>` | `boolean` | By default `Type` variable is of type captured from a given `value`, but the captured type `number` or [`Number`][js-number] changes to `never` and the **return type** is a `boolean` as the result of its statement indicating the `value` is **never** [`AnyNumber`](#anynumber) but of type captured from the `value`. |

The **return value** is a `boolean` indicating whether the provided `value` is not a [`number`][js-number].

**Usage:**

```typescript
// Example usage.
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

TODO: Done.
[![update]](#500)

Use `isNotString()` or `is.not.string()` to check if the `value` of a generic `Type` is **not** of the type obtained from its `Object.prototype` equal to `'string'`, **not** a `string` type and **not** an instance of [`String`][js-string].

```typescript
const isNotString = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Never<AnyString, Type> =>
  callback(
    typeOf(value) !== 'string' &&
    typeof value !== 'string' &&
    value instanceof String === false,
    value,
    { name: isNotString.name, ...payload } as Payload
  );
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Type`    | From the `value` | A generic type variable `Type` indicates the type of `value` parameter via the return type `value is Never<AnyString, Type>`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: Type`                                         | The `value` of any type, by default of type captured from the provided `value` to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

The function returns statement `value is Never<AnyString, Type>`.

| Type      | Description |
| :-------: | :---------- |
| `boolean` | By default `Type` variable is of type captured from a given `value`, but the captured type `string` or [`String`][js-string] changes to `never` and the **return type** is a `boolean` as the result of its statement indicating the `value` is **never** [`AnyString`](#anystring) but of type captured from the `value`. |

The **return value** is a `boolean` indicating whether the provided `value` is not a [`string`][js-string] and not an instance of [`String`][js-string].

**Usage:**

```typescript
// Example usage.
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

TODO: Done.
[![update]](#500)

Use `isNotUndefined()` or `is.not.undefined()` to check if the `value` of a generic `Type` is **not** of the type obtained from its `Object.prototype` equal to `'undefined'`, **not** an `undefined` type and **not** equal to [`undefined`][js-undefined].

```typescript
const isNotUndefined = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, typeof payload> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Defined<Type> =>
  callback(
    typeOf(value) !== 'undefined' &&
    typeof value !== 'undefined' &&
    value !== undefined,
    value,
    { name: isNotUndefined.name, ...payload } as Payload
  );
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Type`    | From the `value` | A generic type variable `Type` indicates the type of the `value` parameter via the return type `value is Defined<Type>`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: Type`                                         | The `value` of any type, by default of type captured from the provided `value` to check. |
| `callback: ResultCallback<CallbackPayload & Payload>` | A callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default [`CallbackPayload`][package-callback-callbackpayload] shape with optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#resultcallback) function. |
| `payload?: Payload`                                   | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns                  | Type      | Description |
| :----------------------- | :-------: | :---------- |
| `value is Defined<Type>` | `boolean` | By default `Type` variable is of type captured from a given `value`, but the captured type `undefined` changes to `never` and the return type is a `boolean` as the result of its statement indicating the `value` is defined of type captured from the `value`. |

The **return value** is a `boolean` indicating whether the provided `value` is not [`undefined`][js-undefined].

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

[![update]](#500)

The object contains prefixed with **are** functions.

```typescript
const are: Are = {
  bigint: areBigInt,
  boolean: areBoolean,
  null: areNull,
  number: areNumber,
  string: areString,
  symbol: areSymbol,
  undefined: areUndefined
};
```

<br>

#### `is.`

[![update]](#500)

The object contains prefixed with **is** functions and prefixed with **isNot** functions in property `not`.

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
  objectKeysIn: isObjectKeysIn,
  objectSomeKeys: isObjectSomeKeys,
  primitive: isPrimitive,
  regexp: isRegExp, // From the `4.2.0` version.
  string: isString,
  stringIncludes: isStringIncludes, // From the `5.0.0` version.
  stringIncludesSome: isStringIncludesSome, // From the `5.0.0` version.
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

#### `check.`

The [`object`][js-object] consists of [`are`](#are) and [`is`](#is) objects to check the type.

```typescript
const check = { are, is };
```

**Usage:**

```typescript
// Example usage.
import { check } from '@angular-package/type';

check.is.string('my example string');
```

<br>

## Guards

### `guard` functions

| Function                                            | Guards the value to be |
| :-------------------------------------------------- | :--------------------- |
| **[`guardArray()`](#guardarray)**                   |  |
| **[`guardBigInt()`](#guardbigint)**                 |  |
| **[`guardBoolean()`](#guardboolean)**               |  |
| **[`guardClass()`](#guardclass)**                   |  |
| **[`guardDate()`](#guarddate)**                     |  |
| **[`guardDefined()`](#guarddefined)**               |  |
| **[`guardFalse()`](#guardfalse)**                   |  |
| **[`guardFunction()`](#guardfunction)**             |  |
| **[`guardInstance()`](#guardinstance)**             |  |
| **[`guardKey()`](#guardkey)**                       |  |
| **[`guardNull()`](#guardnull)**                     |  |
| **[`guardNumber()`](#guardnumber)**                 |  |
| **[`guardNumberBetween()`](#guardnumberbetween)**   |  |
| **[`guardObject()`](#guardobject)**                 |  |
| **[`guardObjectKey()`](#guardobjectkey)**           |  |
| **[`guardObjectKeyIn()`](#guardobjectkeyin)**       |  |
| **[`guardObjectKeys()`](#guardobjectkeys)**         |  |
| **[`guardObjectSomeKeys()`](#guardobjectsomekeys)** |  |
| **[`guardPrimitive()`](#guardprimitive)**           |  |
| **[`guardRegExp()`](#guardregexp)**                 |  |
| **[`guardString()`](#guardstring)**                 |  |
| **[`guardStringLength()`](#guardstringlength)**     |  |
| **[`guardSymbol()`](#guardsymbol)**                 |  |
| **[`guardTrue()`](#guardtrue)**                     |  |
| **[`guardType()`](#guardtype)**                     |  |
| **[`guardUndefined()`](#guardundefined)**           |  |

<br>

#### `guardArray()`

TODO: Done.
[![update]](#500)

Use `guardArray()` or `guard.array()` to guard the `value` to be an [`array`][js-array] of a generic type variable `Type`.

> The function guards only the array, not its specific elements.

```typescript
const guardArray = <Type, Payload extends object = object>(
  value: Array<Type>,
  callback?: ResultCallback<Array<Type>, typeof payload>,
  payload?: CallbackPayload<Payload>
): value is Array<Type> =>
  isArray(value, callback, { name: guardArray.name, ...payload } as Payload);
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Type`    | From the `value` | A generic type variable `Type` indicates the `array` element type of the `value`, which by default is captured from the provided `value`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                               | Description |
| :------------------------------------------------------- | :---------- |
| `value: Array<Type>`                                     | An `Array` of a generic type variable `Type`, implicitly of the type captured from the supplied `value`, to guard. |
| `callback?: ResultCallback<Array<Type>, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                     | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns                | Type      | Description |
| :--------------------- | :-------: | :---------- |
| `value is Array<Type>` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is an [`Array`][js-array] of a generic type variable `Type` equal to the array element type of the supplied `value`. |

The **return value** is a `boolean` indicating whether the `value` is an [`Array`][js-array] of a generic type variable `Type`.

**Usage:**

```typescript
// Example usage.
import { guardArray } from '@angular-package/type';

guardArray([1, 2, 3]); // true. value is number[]
guardArray([1, '2', 3]);  // true. value is (string | number)[]
guardArray([1, '2', 3n]); // true value is (string | number | bigint)[]
guardArray([1, '2', 3n, undefined]);
guardArray([1, '2', 3n, undefined, null]);
guardArray([1, '2', 3n, undefined, null, Symbol(6), ]);
guardArray([1, '2', 3n, undefined, null, Symbol(6), true]);
```

<br>

#### `guardBigInt()`

TODO: Done.
[![update]](#500)
Use `guardBigInt()` or `guard.bigint()` to guard the `value` to be a [`bigint`][js-bigint].

```typescript
const guardBigInt = <Payload extends object>(
  value: bigint,
  callback?: ResultCallback<bigint, typeof payload>,
  payload?: CallbackPayload<Payload>
): value is bigint =>
  isBigInt(value, callback, { name: guardBigInt.name, ...payload } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                          | Description |
| :-------------------------------------------------- | :---------- |
| `value: bigint`                                     | A [`bigint`][js-bigint] type `value` to guard. |
| `callback?: ResultCallback<bigint, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Type     | Description |
| :------- | :---------- |
| `bigint` | The **return value** is a `boolean` indicating whether the `value` is a [`bigint`][js-bigint]. |

**Usage:**

```typescript
// Example usage.
import { guardBigInt } from '@angular-package/type';

guardBigInt(1n); // true, value is bigint
guardBigInt(false as any); // false, value is bigint
```

<br>

#### `guardBoolean()`

TODO: Done.
[![update]](#500)
Use `guardBoolean()` or `guard.boolean()` to guard the `value` to be boolean of any type.

```typescript
const guardBoolean = <
  Type extends AnyBoolean,
  Payload extends object = object
>(
  value: Type,
  callback?: ResultCallback<Type, typeof payload>,
  payload?: CallbackPayload<Payload>
): value is Type =>
  isBoolean(value, callback, {
    name: guardBoolean.name,
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Type`    | From the `value` | A generic type variable `Type` guarded by [`AnyBoolean`](#anyboolean), by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Type`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                        | Description |
| :------------------------------------------------ | :---------- |
| `value: Type`                                     | The `value` of [`AnyBoolean`](#anyboolean) type, by default of type captured from the supplied `value`, to guard. |
| `callback?: ResultCallback<Type, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`              | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is Type` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is [`AnyBoolean`](#anyboolean), by default of type captured from the supplied `value`. |

The **return value** is a `boolean` indicating whether the `value` is a `boolean` type or an instance of [`Boolean`][js-boolean].

**Usage:**

```typescript
// Example usage.
import { guardBoolean } from '@angular-package/type';

guardBoolean(true), // true, value is boolean
guardBoolean(new Boolean(false)) // true, value is Boolean
```

<br>

#### `guardClass()`

TODO: Done.
[![update]](#500)

Use `guardClass()` or `guard.class()` to guard the `value` to be a [`class`][ts-classes] of generic type variable `Class`.

> The function guards only the [`class`][ts-classes], not its specific elements.

```typescript
const guardClass = <
  Class extends Function,
  Payload extends object = object
>(
  value: Class,
  callback?: ResultCallback<Class, typeof payload>,
  payload?: CallbackPayload<Payload>
): value is Class =>
  isClass(value, callback, { name: guardClass.name, ...payload } as Payload);
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Class`   | From the `value` | A generic type variable `Class` guarded by [`Function`][ts-function], by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Class`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                         | Description |
| :------------------------------------------------- | :---------- |
| `value: Class`                                     | The `value` of a generic type variable `Class` constrained by the [`Function`][ts-function], by default of the type captured from the provided `value` to guard. |
| `callback?: ResultCallback<Class, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`               | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns          | Type      | Description |
| :--------------- | :-------: | :---------- |
| `value is Class` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a [`Function`][js-function], by default of type captured from the supplied `value`. |

The **return value** is `boolean` indicating whether the `value` is a [`class`][ts-classes] of a generic type variable `Class`.

**Usage:**

```typescript
// Example usage.
import { guardClass } from '@angular-package/type';

type PlusFunction = (...param: any) => any;

/**
 * typeof === 'function'
 * instanceof Function === true
 * instanceof Object === true
 */
const FUNCTION: PlusFunction = (x: number, y: string): any => x + y;

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

#### `guardDate()`

TODO: Usage.
[![update]](#500)

Use `guardDate()` or `guard.date()` to guard the `value` to be [`Date`][js-date].

```typescript
const guardDate = <Payload extends object>(
  date: Date,
  callback?: ResultCallback<Date, typeof payload>,
  payload?: CallbackPayload<Payload>
): date is Date =>
  isDate(date, callback, { name: guardDate.name, ...payload } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                        | Description |
| :------------------------------------------------ | :---------- |
| `value: Date`                                     | The `value` of [`Date`][js-date] type to guard. |
| `callback?: ResultCallback<Date, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`              | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is Date` | `boolean` | The **return type** is a `boolean` as the result of its statement `value` is [`Date`][js-date]. |

The **return value** is a `boolean` indicating whether the `value` is a date.

**Usage:**

```typescript
// Example usage.
import { guardDate } from '@angular-package/type';

```

<br>

#### `guardDefined()`

TODO: Done.
[![update]](#500)

Use `guardDefined()` or `guard.defined()` to guard the `value` to be defined.

```typescript
const guardDefined = <Type, Payload extends object = object>(
  value: Defined<Type>,
  callback?: ResultCallback<Defined<Type>, typeof payload>,
  payload?: CallbackPayload<Payload>
): value is Defined<Type> =>
  isDefined(value, callback, {
    name: guardDefined.name,
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Type`    | From the `value` | A generic type variable `Type`, by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Defined<Type>`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `value: Defined<Type>`                                     | The value of `Defined<Type>`, **never** `undefined` type captured from the `value` to guard against `undefined`. |
| `callback?: ResultCallback<Defined<Type>, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns                  | Type      | Description |
| :----------------------- | :-------: | :---------- |
| `value is Defined<Type>` | `boolean` | The **return type** is a `boolean` as the result of its statement `value` is [`Defined<Type>`](#defined) (that depends on a generic type variable `Type`), which means by default is equal to the type captured from the provided `value`, but captured type `undefined` changes to `never`. |

The **return value** is a `boolean` indicating whether the `value` is defined.

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

#### `guardFalse()`

TODO: Done.
[![update]](#500)

Use `guardFalse()` or `guard.false()` to guard the `value` to be `false`.

```typescript
const guardFalse = <Payload extends object>(
  value: false,
  callback?: ResultCallback<false, typeof payload>,
  payload?: CallbackPayload<Payload>
): value is false =>
  isFalse(value, callback, {
    name: guardFalse.name,
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                         | Description |
| :------------------------------------------------- | :---------- |
| `value: false`                                     | The `value` of `false` type to guard. |
| `callback?: ResultCallback<false, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`               | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns          | Type      | Description |
| :--------------- | :-------: | :---------- |
| `value is false` | `boolean` | The **return type** is a `boolean` as the result of its statement `value` is `false`. |

The **return value** is a `boolean` indicating whether the `value` is a `boolean` or an instance of [`Boolean`][js-boolean] equal to `false`.

**Usage:**

```typescript
// Example usage.
import { guardFalse } from '@angular-package/type';

const valTrue = true as any;
const valFalse = false;

guardFalse(valTrue); // false, value is false
guardFalse(valFalse); // true, value is false
guardFalse(new Boolean(valTrue) as any); // false, value is false
guardFalse(new Boolean(valFalse) as any); // true, value is false
```

<br>

#### `guardFunction()`

TODO: Done.
[![update]](#500)

Use `guardFunction()` or `guard.function()` to guard the `value` to be a [`Function`][js-function].

> The function guards only the generic [`function`][js-function] type, not the specific function.

```typescript
const guardFunction = <Type extends Function, Payload extends object>(
  value: Type,
  callback?: ResultCallback<Type, typeof payload>,
  payload?: CallbackPayload<Payload>
): value is Type =>
  isFunction(value, callback, {
    name: guardFunction.name,
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Type`    | From the `value` | A generic type variable `Type`, by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Type`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                            | Description |
| :---------------------------------------------------- | :---------- |
| `value: Type`                                         | The value of a generic type variable `Type`, constrained by the [`Function`][js-function] type, by default of the type captured from the provided `value` to guard. |
| `callback?: ResultCallback<Function, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                  | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is Type` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a [`function`][js-function], by default of the type captured from the provided `value`. |

The **return value** is a `boolean` indicating whether the `value` is a [`Function`][js-function].

**Usage:**

```typescript
// Example usage.
import { guardFunction } from '@angular-package/type';

guardFunction('x'); // false value is Function
guardFunction(() => {}); // true value is () => void
guardFunction((x: number, y: number) => x + y); // true value is (x: number, y: number) => number
```

<br>

#### `guardInstance()`

TODO: Done.
[![update]](#500)

Use `guardInstance()` or `guard.instance()` to guard the `value` to be an instance of the given `constructor` of [`Constructor`](#constructor) type.

```typescript
const guardInstance = <
  Obj extends object,
  Payload extends object = object
>(
  value: Obj,
  constructor: Constructor<Obj>,
  callback?: ResultCallback<Obj, typeof payload>,
  payload?: CallbackPayload<{ constructor?: typeof constructor } & Payload>
): value is Obj =>
  isInstance(value, constructor, callback, {
    name: guardInstance.name,
    ...payload,
  } as any);
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Obj`     | From the `value` | A generic type variable `Obj` guarded by [`object`][js-object], by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Obj` and specifies the type of the `constructor`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                       | Description |
| :----------------------------------------------- | :---------- |
| `value: Obj`                                     | An [`object`][js-object] of a generic type variable `Obj`, by default of the type captured from the provided `value` to guard and to check if it's an instance of a given `constructor`.  |
| `constructor: Constructor<Obj>`                  | A [`class`][ts-classes] or [`function`][ts-function] that specifies the type of the [`constructor`](#constructor). |
| `callback?: ResultCallback<Obj, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`             | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is an [`object`][js-object], by default of the type captured from the provided `value`. |

The **return value** is a `boolean` indicating whether the `value` is an `instance` of a given `constructor`.

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

TODO: Usage.
[![update]](#500)

Use `guardKey()` or `guard.key()` to guard the `value` to be one of the `string`, `number`, or `symbol`.

```typescript
const guardKey = <Payload extends object>(
  value: PropertyKey,
  callback?: ResultCallback<PropertyKey, typeof payload>,
  payload?: CallbackPayload<Payload>
): value is PropertyKey =>
  isKey(value, callback, { name: guardKey.name, ...payload } as Payload);
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                               | Description |
| :------------------------------------------------------- | :---------- |
| `value: PropertyKey`                                     | The `value` of a `PropertyKey` type to guard.  |
| `callback?: ResultCallback<PropertyKey, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                     | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns                | Type      | Description |
| :--------------------- | :-------: | :---------- |
| `value is PropertyKey` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is `PropertyKey`. |

The **return value** is a `boolean` indicating whether the `value` is a `PropertyKey`.

**Usage:**

```typescript
// Example usage.
import { guardKey } from '@angular-package/type';

```

<br>

#### `guardNull()`

TODO: Usage.
[![update]](#500)

Use `guardNull()` or `guard.null()` to guard the `value` to be `null`.

```typescript
const guardNull = <Payload extends object>(
  value: null,
  callback?: ResultCallback<null, typeof payload>,
  payload?: CallbackPayload<Payload>
): value is null =>
  isNull(value, callback, { name: guardNull.name, ...payload } as Payload);
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                        | Description |
| :------------------------------------------------ | :---------- |
| `value: null`                                     | A `null` type `value` to guard. |
| `callback?: ResultCallback<null, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`              | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is null` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is `null`. |

The **return value** is a `boolean` indicating whether the `value` is `null`.

**Usage:**

```typescript
// Example usage.
import { guardNull } from '@angular-package/type';

```

<br>

#### `guardNumber()`

TODO: Usage.
[![update]](#500)

Use `guardNumber()` or `guard.number()` to guard the `value` to be `number` of any type.

```typescript
const guardNumber = <
  Type extends AnyNumber,
  Payload extends object = object
>(
  value: Type,
  callback?: ResultCallback<Type, typeof payload>,
  payload?: CallbackPayload<Payload>
): value is Type =>
  isNumber(value, callback, { name: guardNumber.name, ...payload } as Payload);
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Type`    | From the `value` | A generic type variable `Type` guarded by [`AnyNumber`](#anynumber), by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Type`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                        | Description |
| :------------------------------------------------ | :---------- |
| `value: Type`                                     | The `value` of a generic type variable `Type` constrained by [`AnyNumber`](#anynumber), by default of the type captured from the provided `value` to guard. |
| `callback?: ResultCallback<Type, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`              | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is Type` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is [`AnyNumber`](#anynumber), by default of type captured from the supplied `value`. |

The **return value** is a `boolean` indicating whether the `value` is a `number` type or an instance of [`Number`][js-number].

**Usage:**

```typescript
// Example usage.
import { guardNumber } from '@angular-package/type';

```

<br>

#### `guardNumberBetween()`

TODO: Usage.
[![update]](#500)

Use `guardNumberBetween()` or `guard.numberBetween()` to guard the `value` to be [`number`][js-number] between the specified range.

```typescript
const guardNumberBetween = <
  Type extends AnyNumber,
  Min extends number,
  Max extends number,
  Payload extends object = object
>(
  value: Type,
  range: MinMax<Min, Max>,
  callback?: ResultCallback<Type, typeof payload>,
  payload?: CallbackPayload<MinMax<Min, Max> & Payload>
): value is NumberBetween<Min, Max, Type> =>
  isNumberBetween(value, range, callback, {
    name: guardNumberBetween.name,
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value                      | Description |
| :-------- | :--------------------------------- | :---------- |
| `Type`    | Captured from the `value`          | A generic type variable `Type` guarded by [`AnyNumber`](#anynumber), by default of value captured from the supplied `value` indicates the **type** of the `value` via the return type `value is NumberBetween<Min, Max, Type>`. |
| `Min`     | Captured from the `min` of `range` | A generic type variable `Min` constrained by the `number` type, by default of value captured from optional `min` of the provided `range` that indicates the **minimum** range of the provided `value` via the return type `value is NumberBetween<Min, Max, Type>`. |
| `Max`     | Captured from the `max` of `range` | A generic type variable `Max` constrained by the `number` type, by default of value captured from optional `max` of the provided `range` that indicates the **maximum** range of the provided `value` via the return type `value is NumberBetween<Min, Max, Type>`. |
| `Payload` | `object`                           | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                        | Description |
| :------------------------------------------------ | :---------- |
| `value: Type`                                     | The `value` of a generic type variable `Type` constrained by [`AnyNumber`](#anynumber), by default of the type captured from the provided `value` to guard. |
| `range: MinMax<Min, Max>`                         | An [`object`][js-object] of optional minimum and maximum `range` of a given `value`. |
| `callback?: ResultCallback<Type, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`              | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns                                  | Type      | Description |
| :--------------------------------------- | :-------: | :---------- |
| `value is NumberBetween<Min, Max, Type>` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is [`AnyNumber`](#anynumber), by default of type captured from the supplied `value` between the specified range of [`MinMax`](#minmax). |

The **return value** is a `boolean` indicating whether the `value` is a `number` type or an instance of [`Number`][js-number] between the specified `range`.

**Usage:**

```typescript
// Example usage.
import { guardNumberBetween } from '@angular-package/type';

```

<br>

#### `guardObject()`

TODO: Usage.
[![update]](#500)

Use `guardObject()` or `guard.object()` to guard the `value` to be an `object` of a generic type variable `Obj`.

> The function guards only the generic [`object`][js-object] type, not the **specific** object.

```typescript
const guardObject = <
  Obj extends object,
  Payload extends object = object
>(
  value: Obj,
  callback?: ResultCallback<Obj, typeof payload>,
  payload?: CallbackPayload<Payload>
): value is Obj =>
  isObject(value, callback, { name: guardObject.name, ...payload } as Payload);
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Obj`     | From the `value` | A generic type variable `Obj` guarded by [`object`][js-object], by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Obj`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                       | Description |
| :----------------------------------------------- | :---------- |
| `value: Obj`                                     | An [`object`][js-object] of a generic type variable `Obj`, by default of the type captured from the provided `value` to guard. |
| `callback?: ResultCallback<Obj, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`             | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is an [`object`][js-object] of a generic type variable `Obj`, by default of type captured from the supplied `value`. |

The **return value** is a `boolean` indicating whether the `value` is an `object` of a generic type variable `Obj`.

**Usage:**

```typescript
// Example usage.
import { guardObject } from '@angular-package/type';

```

<br>

#### `guardObjectKey()`

TODO: Usage.
[![update]](#500)

Use `guardObjectKey()` or `guard.objectKey()` to guard the `value` to be an [`object`][js-object] of a generic `Obj` type that contains the `key`.

```typescript
const guardObjectKey = <
  Obj extends object,
  Key extends keyof Obj,
  Payload extends object = object
>(
  value: Obj,
  key: Key,
  callback?: ResultCallback<Obj, typeof payload>,
  payload?: CallbackPayload<{ key: typeof key } & Payload>
): value is Obj =>
  isObjectKey(value, key, callback, {
    name: guardObjectKey.name,
    ...payload,
  } as any);
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Obj`     | From the `value` | A generic type variable `Obj` guarded by [`object`][js-object], by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Obj`. |
| `Key`     | From the `key`   | A generic type variable `Key` constrained by the `keyof Obj`, by default of value captured from the supplied `key` indicates the specific property name of `Obj`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `value: Obj`                                               | An [`object`][js-object] of a generic type variable `Obj`, by default of the type captured from the provided `value` that contains the given `key`, to guard. |
| `key: Key`                                                 | A key of `Obj` type as the name of the property that the given `value` contains. |
| `callback?: ResultCallback<Obj, typeof payload>`           | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<{ key: typeof key } & Payload>` | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is an [`object`][js-object] of a generic type variable `Obj`, by default of type captured from the supplied `value`. |

The **return value** is a `boolean` indicating whether the `value` is an `object` of a generic `Obj` that contains the given `key`.

**Usage:**

```typescript
// Example usage.
import { guardObjectKey } from '@angular-package/type';

```

<br>

#### `guardObjectKeyIn()`

TODO: Usage.
[![update]](#500)

Use `guardObjectKeyIn()` or `guard.objectKeyIn()` to guard the `value` to be an [`object`][js-object] of a generic `Obj` type that contains(or its prototype chain) the given `key`.

```typescript
const guardObjectKeyIn = <
  Obj extends object,
  Key extends keyof Obj,
  Payload extends object = object
>(
  value: Obj,
  key: Key,
  callback?: ResultCallback<Obj, typeof payload>,
  payload?: CallbackPayload<{ key: typeof key } & Payload>
): value is Obj =>
  isObjectKeyIn(value, key, callback, {
    name: guardObjectKeyIn.name,
    ...payload,
  } as any);
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Obj`     | From the `value` | A generic type variable `Obj` guarded by [`object`][js-object], by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Obj`. |
| `Key`     | From the `key`   | A generic type variable `Key` constrained by the `keyof Obj`, by default of value captured from the supplied `key` indicates the specific property name of `Obj`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `value: Obj`                                               | An [`object`][js-object] of a generic type variable `Obj`, by default of the type captured from the provided `value` that contains(or its prototype chain) the given `key`, to guard. |
| `key: Key`                                                 | A key of `Obj` type, as the name of the property that the given `value` contains(or its prototype chain). |
| `callback?: ResultCallback<Obj, typeof payload>`           | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<{ key: typeof key } & Payload>` | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is an [`object`][js-object] of a generic type variable `Obj`, by default of type captured from the supplied `value`. |

The **return value** is a `boolean` indicating whether the `value` is an `object` of a generic `Obj` that contains(or its prototype chain) the given `key`.

**Usage:**

```typescript
// Example usage.
import { guardObjectKeyIn } from '@angular-package/type';

```

<br>

#### `guardObjectKeys()`

TODO: Usage.
[![update]](#500)

Use `guardObjectKeys()` or `guard.objectKeys()` to guard the value to be an [`object`][js-object] of a generic type variable `Obj` with its specified `keys`.

```typescript
const guardObjectKeys = <
  Obj extends object,
  Key extends keyof Obj,
  Payload extends object = object
>(
  value: Obj,
  keys: Key[],
  callback?: ResultCallback<Obj, typeof payload>,
  payload?: CallbackPayload<{ keys: typeof keys } & Payload>
): value is Obj => isObjectKeys(value, keys, callback);
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Obj`     | From the `value` | A generic type variable `Obj` guarded by [`object`][js-object], by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Obj`. |
| `Keys`    | From the `keys`  | A generic type variable `Keys` constrained by the `keyof Obj`, by default of value captured from the supplied `keys` indicates the specific property name of `Obj`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                   | Description |
| :----------------------------------------------------------- | :---------- |
| `value: Obj`                                                 | An [`object`][js-object] of a generic type variable `Obj`, by default of the type captured from the `value` that contains the given `keys` to guard. |
| `key: Key[]`                                                 | An [`Array`][js-array] of property names that the given `value` contains. |
| `callback?: ResultCallback<Obj, typeof payload>`             | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<{ keys: typeof keys } & Payload>` | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is an [`object`][js-object] of a generic type variable `Obj`, by default of type captured from the supplied `value`. |

The **return value** is a `boolean` indicating whether or not the `value` is an `object` with some of its own specified `keys`.

**Usage:**

```typescript
// Example usage.
import { guardObjectKeys } from '@angular-package/type';

```

<br>

#### `guardObjectSomeKeys()`

TODO: Usage.
[![update]](#500)

Use `guardObjectSomeKeys()` or `guard.objectSomeKeys()` to guard the value to be an [`object`][js-object] of a generic type variable `Obj` with some of its `keys` or some groups of its `keys`. The function uses [`isObjectSomeKeys()`](#isobjectsomekeys) to search for the `keys`.

```typescript
const guardObjectSomeKeys = <
  Obj extends object,
  Key extends keyof Obj,
  Payload extends object = object
>(
  value: Obj,
  keys: (Key | Array<Key>)[],
  callback?: ResultCallback<Obj, typeof payload>,
  payload?: CallbackPayload<{ keys: typeof keys } & Payload>
): value is Obj => isObjectSomeKeys(value, keys, callback);
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Obj`     | From the `value` | A generic type variable `Obj` guarded by [`object`][js-object], by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Obj`. |
| `Keys`    | From the `keys`  | A generic type variable `Keys` constrained by the `keyof Obj`, by default of value captured from the supplied `keys` indicates the specific property name of `Obj`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                   | Description |
| :----------------------------------------------------------- | :---------- |
| `value: Obj`                                                 | An [`object`][js-object] of a generic type variable `Obj`, by default of the type captured from the `value` that contains some or some of the groups of the given `keys`, to guard. |
| `(Key | Array<Key>)[]`                                       | An [`Array`][js-array] of property names or a two-dimensional array of property names to check if the given `value` contains some of them or some groups of them. |
| `callback?: ResultCallback<Obj, typeof payload>`             | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<{ keys: typeof keys } & Payload>` | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is an [`object`][js-object] of a generic type variable `Obj`, by default of type captured from the supplied `value`. |

The **return value** is a `boolean` indicating whether the `value` is an `object` with some or some groups of its keys from a given `keys`.

**Usage:**

```typescript
// Example usage.
import { guardObjectSomeKeys } from '@angular-package/type';

```

<br>

#### `guardPrimitive()`

TODO: Done.
[![update]](#500)

Use `guardPrimitive()` or `guard.primitive()` to guard the `value` to be the [`Primitive`](#primitive) type or the given `type` of the [`Primitives`](#primitives).

```typescript
const guardPrimitive = <
  Type extends Primitive,
  Payload extends object = object
>(
  value: Type,
  type: Primitives,
  callback?: ResultCallback<Type, typeof payload>,
  payload?: CallbackPayload<Payload>
): value is Type =>
  isPrimitive(value, type, callback, {
    name: guardPrimitive.name,
    ...payload,
  } as Payload);

```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Type`    | From the `value` | A generic type variable `Type` guarded by [`Primitive`](#primitive), by default captured from the supplied `value` indicates the type of the `value` via the return type `value is Type`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                        | Description |
| :------------------------------------------------ | :---------- |
| `value: Type`                                     | The `value` of a generic type variable `Type` constrained by the [`Primitive`](#primitive), by default of the type captured from the provided `value` to guard. |
| `type: Primitives`                                | An optional specific type of [`Primitives`](#primitives) to check the given value. |
| `callback?: ResultCallback<Type, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`              | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is Type` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is [`Primitive`](#primitive), by default of type captured from the supplied `value`. |

The **return value** is a `boolean` indicating whether the `value` is the [`Primitive`](#primitive) type or the given `type` of [`Primitives`](#primitives) .

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

#### `guardRegExp()`

TODO: Done.
[![update]](#500)
Use `guardRegExp()` or `guard.regexp()` to guard the `value` to be a [`RegExp`][js-regexp].

```typescript
const guardRegExp = <Payload extends object>(
  value: RegExp,
  callback?: ResultCallback<RegExp, typeof payload>,
  payload?: CallbackPayload<Payload>
): value is RegExp =>
  isRegExp(value, callback, { name: guardRegExp.name, ...payload } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                          | Description |
| :-------------------------------------------------- | :---------- |
| `value: RegExp`                                     | A [`RegExp`][js-regexp] type `value` to guard. |
| `callback?: ResultCallback<RegExp, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Type     | Description |
| :------- | :---------- |
| `bigint` | The **return value** is a `boolean` indicating whether the `value` is a [`RegExp`][js-regexp]. |

**Usage:**

```typescript
// Example usage.
import { guardRegExp } from '@angular-package/type';

guardRegExp(/^[]/); // true, value is RegExp
guardRegExp(false as any); // false, value is RegExp
```

<br>

#### `guardString()`

TODO: Done.
[![update]](#500)

Use `guardString()` or `guard.string()` to guard the `value` to be string of any type.

```typescript
const guardString = <
  Type extends AnyString,
  Payload extends object = object
>(
  value: Type,
  callback?: ResultCallback<Type, typeof payload>,
  payload?: CallbackPayload<Payload>
): value is Type =>
  isString(value, callback, { name: guardString.name, ...payload } as Payload);
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Type`    | From the `value` | A generic type variable `Type` guarded by [`AnyBoolean`](#anyboolean), by default captured from the supplied `value` indicates the type of the `value` via the return type `value is Type`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: `type`                                      | Description |
| :------------------------------------------------ | :---------- |
| `value: Type`                                     | The `value` of [`AnyBoolean`](#anyboolean) type, by default of type captured from the supplied `value` - to guard. |
| `callback?: ResultCallback<Type, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`              | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `Type`    | From the `value` | A generic type variable `Type` guarded by [`AnyString`](#anystring), by default captured from the supplied `value` indicates the type of the `value` via the return type `value is Type`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| `Name: type`                                      | Description |
|-------------------------------------------------- | :---------- |
| `value: Type`                                     | An [`AnyString`](#anystring) type `value`, by default of a generic `S` type detected from the `value` to guard. |
| `callback?: ResultCallback<Type, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`              | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is Type` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is [`AnyString`](#anystring), by default of the type captured from the `value`. |

The **return value** is a `boolean` indicating whether the `value` is a `string` type or an instance of [`String`][js-string].

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

#### `guardStringLength()`

TODO: Done.
[![update]](#500)

Use `guardStringLength()` or `guard.stringLength()` to guard the `value` to be a `string` of a length between the specified range.

```typescript
const guardStringLength = <
  Type extends AnyString,
  Min extends number,f
  Max extends number,
  Payload extends object = object
>(
  value: Type,
  length: MinMax<Min, Max>,
  callback?: ResultCallback<Type, typeof payload>,
  payload?: CallbackPayload<MinMax<Min, Max> & Payload>
): value is StringOfLength<Min, Max, Type> =>
  isStringLength(value, length, callback, {
    name: guardStringLength.name,
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value                       | Description |
| :-------- | :---------------------------------- | :---------- |
| `Type`    | From the `value`                    | A generic type variable `Type` guarded by [`AnyString`](#anystring), by default of value captured from the supplied `value` indicates the **type** of the `value` via the return type `value is StringOfLength<Min, Max, Type>`. |
| `Min`     | Captured from the `min` of `length` | A generic type variable `Min` constrained by the `number` type, by default of value captured from optional `min` of the provided `length` that indicates the **minimum** length of the provided `value` via the return type `value is StringOfLength<Min, Max, Type>`. |
| `Max`     | Captured from the `max` of `length` | A generic type variable `Max` constrained by the `number` type, by default of value captured from optional `max` of the provided `length` that indicates the **maximum** length of the provided `value` via the return type `value is StringOfLength<Min, Max, Type>`. |
| `Payload` | `object`                            | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                        | Description |
|-------------------------------------------------- | :---------- |
| `value: Type`                                     | The `value` of a generic type variable `Type` constrained by [`AnyString`](#anystring), by default of the type captured from the provided `value` to guard. |
| `length: MinMax<Min, Max>`                        | An [`object`][js-object] of optional minimum and maximum `length` of the given `value`. |
| `callback?: ResultCallback<Type, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`              | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns                                   | Type      | Description |
| :---------------------------------------- | :-------: | :---------- |
| `value is StringOfLength<Min, Max, Type>` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is [`StringOfLength`](#stringoflength), by default of the type captured from the `value` between the specified length of [`MinMax`](#minmax). |

The **return value** is a `boolean` indicating whether the `value` is a `string` type or an instance of [`String`][js-string] between the specified range.

**Usage:**

```typescript
// Example usage.
import { guardString } from '@angular-package/type';

let letFirstName = 'not my name';
guardString(letFirstName); // true; return type `value is string`

const firstName = 'my name';
guardString(firstName); // true; return type `value is "my name"`

// Long text for the captured value type.
const value = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into electronic typesetting,
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
like Aldus PageMaker including versions of Lorem Ipsum.` as string;

guardStringLength(value, { max: 3 }); // false, value is StringOfLength<number, 3, string>
```

<br>

#### `guardSymbol()`

TODO: Done.
[![update]](#500)

Use `guardSymbol()` or `guard.symbol()` to guard the `value` to be a `symbol`.

```typescript
const guardSymbol = <Payload extends object>(
  value: symbol,
  callback?: ResultCallback<symbol, typeof payload>,
  payload?: CallbackPayload<Payload>
): value is symbol =>
  isSymbol(value, callback, { name: guardSymbol.name, ...payload } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                          | Description |
| :-------------------------------------------------- | :---------- |
| `value: symbol`                                     | A `symbol` type `value` to guard. |
| `callback?: ResultCallback<symbol, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns           | Type      | Description |
| :---------------- | :-------: | :---------- |
| `value is symbol` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a `symbol`. |

The **return value** is a `boolean` indicating whether the `value` is a `symbol`.

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

#### `guardTrue()`

TODO: Done.
[![update]](#500)

Use `guardTrue()` or `guard.true()` to guard the `value` to be `true`.

```typescript
const guardTrue = <Payload extends object>(
  value: true,
  callback?: ResultCallback<true, typeof payload>,
  payload?: CallbackPayload<Payload>
): value is true =>
  isTrue(value, callback, { name: guardTrue.name, ...payload } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                        | Description |
| :------------------------------------------------ | :---------- |
| `value: true`                                     | The `value` of `true` type to guard. |
| `callback?: ResultCallback<true, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`              | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is true` | `boolean` | The **return type** is a `boolean` as the result of its statement `value` is `true`. |

The **return value** is a `boolean` indicating whether the `value` is a `boolean` type or an instance of [`Boolean`][js-boolean] equal to `true`.

**Usage:**

```typescript
// Example usage.
import { guardTrue } from '@angular-package/type';

const valTrue = true as any;
const valFalse = false;

guardTrue(valTrue); // false, value is false
guardTrue(valFalse); // true, value is false
guardTrue(new Boolean(valTrue) as any); // false, value is false
guardTrue(new Boolean(valFalse) as any); // true, value is false
```

<br>

#### `guardType()`

TODO: Done.
[![update]](#500)

Use `guardType()` or `guard.type()` to guard the `value` to be the [`Type`](#type) from a given `type` of the [`Types`](#types).

```typescript
const guardType = <T extends Type, Payload extends object = object>(
  value: T,
  type: Types<T>,
  callback?: ResultCallback<T, typeof payload>,
  payload?: CallbackPayload<Payload>
): value is T =>
  isType(value, type, callback, {
    name: guardType.name,
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value    | Description |
| :-------- | :--------------- | :---------- |
| `T`       | From the `value` | A generic type variable `T` guarded by [`Type`](#type), by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is T`. |
| `Payload` | `object`         | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                     | Description |
| :--------------------------------------------- | :---------- |
| `value: T`                                     | The `value` of a generic type variable `T` constrained by the [`Type`](#type), by default of the type captured from the provided `value` to guard. |
| `type: Types<T>`                               | The value of [`string`][js-string] or [`Constructor<T>`](#constructor) type of the [`Types`](#types) indicates against which type a given `value` is checked. |
| `callback?: ResultCallback<T, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error] |
| `payload?: CallbackPayload<Payload>`           | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns      | Type      | Description |
| :----------- | :-------: | :---------- |
| `value is T` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a [`Type`](#type), by default of the type captured from the `value`. |

The **return value** is a `boolean` indicating whether the `value` is a type from a given `type` of the [`Types`](#types).

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

Use `guardUndefined()` or `guard.undefined()` to guard the `value` to be [`undefined`][js-undefined].

```typescript
const guardUndefined = <Payload extends object>(
  value: undefined,
  callback?: ResultCallback<undefined, typeof payload>,
  payload?: CallbackPayload<Payload>
): value is undefined =>
  isUndefined(value, callback, {
    name: guardUndefined.name,
    ...payload,
  } as Payload);
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | `object`      | The shape of the optional `payload` parameter of [`ResultCallback`][package-callback-resultcallback], which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                             | Description |
| :----------------------------------------------------- | :---------- |
| `value: undefined`                                     | The `value` of an [`undefined`][js-undefined] type to guard. |
| `callback?: ResultCallback<undefined, typeof payload>` | An optional [`ResultCallback`][package-callback-resultcallback] type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                   | An optional [`object`][js-object] of [`CallbackPayload<Payload>`][package-callback-callbackpayload] type that is assigned to the `payload` of the provided `callback` function. |

**Returns:**

| Returns              | Type      | Description |
| :------------------- | :-------: | :---------- |
| `value is undefined` | `boolean` | The **return type** is a `boolean` as the result of its statement. |

The **return value** is a `boolean` indicating whether the `value` is [`undefined`][js-undefined].

**Usage:**

```typescript
// Example usage.
import { guardUndefined } from '@angular-package/type';

const UNDEFINED: undefined = undefined;

guardUndefined(UNDEFINED); // true; 
guardUndefined('x'); // false; type error
guardUndefined(5); // false; type error

const tracker = {
  error: 'sentry',
};

const undefinedCallback = <Type, Payload>(
  result: boolean,
  value: Type,
  payload?: typeof tracker & Payload
) => {
  if (payload?.error === 'sentry') {
    // ...
  }
  value; // 5
  result; // false
  /*
  payload {
      "name": "guardUndefined",
      "error": "sentry"
    }
  */
  return result;
};

const gUndefined = (value: undefined): value is undefined =>
  guardUndefined(value, undefinedCallback, tracker);

gUndefined(5 as any); // false
```

<br>

### Guard object

#### `guard.`

[![update]](#500)

The object contains prefixed with **guard** functions, and in `is` property.

```typescript
const guardIs: GuardIs = {
  array: guardArray,
  bigint: guardBigInt,
  boolean: guardBoolean,
  class: guardClass,
  date: guardDate,
  defined: guardDefined,
  false: guardFalse,
  function: guardFunction,
  instance: guardInstance,
  key: guardKey,
  null: guardNull,
  number: guardNumber,
  numberBetween: guardNumberBetween,
  object: guardObject,
  objectKey: guardObjectKey,
  objectKeys: guardObjectKeys,
  objectSomeKeys: guardObjectSomeKeys,
  primitive: guardPrimitive,
  regexp: guardRegExp,
  string: guardString,
  stringLength: guardStringLength,
  symbol: guardSymbol,
  true: guardTrue,
  type: guardType,
  undefined: guardUndefined
};
const guard: Guard = { ...guardIs, is: guardIs };
```

<br>

## The `type.`

The `object` consists of [`check`](#check) and [`guard`](#guard) objects.

```typescript
const type = {
  check,
  guard
};
```

**Properties:**

**`check`**  
The `object` consists of [`are`](#are) and [`is`](#is) functions.

**`guard`**  
The `object` consists of [`guard`](#guard) functions.

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
[js-isfinite]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite
[js-isnan]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

[js-map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

[js-null]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
[js-number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[js-numberconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number
[js-numberisnan]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN

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

[js-tostring]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
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
