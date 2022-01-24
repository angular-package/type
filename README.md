# angular-package

<img align="left" width="100" height="100" src="https://avatars.githubusercontent.com/u/31412194?s=400&u=c9929aa36826318ccac8f7b84516e1ce3af7e21c&v=4" />

The angular-package supports the development process of [angular][angulario]-based applications in varied ways through the thoughtful, reusable, easy-to-use small pieces of code called packages.

[**docs.angular-package.dev**](https://docs.angular-package.dev)

<br>

## Packages

| Package                                      | Description                                                       | Status |
| :------------------------------------------- | :---------------------------------------------------------------- | -----: |
| [callback][callback-github-readme]           | Manages the callback [`function`][js-function].                   | [![npm version][callback-npm-badge-png]][callback-npm-badge] |
| [change-detection][cd-github-readme]         | Improves application performance.                                 | [![npm version][cd-npm-badge-png]][cd-npm-badge] |
| [component-loader][cl-github-readme]         | Handles dynamic loading components.                               | [![npm version][cl-npm-badge-png]][cl-npm-badge] |
| [core][core-github-readme]                   | Core features.                                                    | [![npm version][core-npm-badge-png]][core-npm-badge] |
| [error][error-github-readme]                 | Manages an [`Error`][js-error].                                   | [![npm version][error-npm-badge-png]][error-npm-badge] |
| [name][name-github-readme]                   | The name with prefix and suffix.                                  | [![npm version][name-npm-badge-png]][name-npm-badge] |
| [preferences][preferences-github-readme]     | Preferences, settings, options, configuration and setup in steps. | [![npm version][preferences-npm-badge-png]][preferences-npm-badge] |
| [prism][prism-github-readme]                 | [`Prism`][prism-js] highlighter module.                           | [![npm version][prism-npm-badge-png]][prism-npm-badge] |
| [property][property-github-readme]           | Handles object properties.                                        | [![npm version][property-npm-badge-png]][property-npm-badge] |
| [range][range-github-readme]                 | The range between a minimum and maximum.                          | [![npm version][range-npm-badge-png]][range-npm-badge] |
| [reactive][reactive-github-readme]           | Automatize the process of creating some rxjs features.            | [![npm version][reactive-npm-badge-png]][reactive-npm-badge] |
| [storage][storage-github-readme]             | The storage of data under allowed names.                          | [![npm version][storage-npm-badge-png]][storage-npm-badge] |
| [tag][tag-github-readme]                     | Any tag with optional attributes.                                 | [![npm version][tag-npm-badge-png]][tag-npm-badge] |
| [testing][testing-github-readme]             | Support for testing other packages.                               | [![npm version][testing-npm-badge-png]][testing-npm-badge] |
| [text][text-github-readme]                   | Text on the template with replaceable tags.                       | [![npm version][text-npm-badge-png]][text-npm-badge] |
| **[type][type-github-readme]**               | **Common types, type guards, and type checkers.**                 | [![npm version][type-npm-badge-png]][type-npm-badge] |
| [ui][ui-github-readme]                       | User interface.                                                   | *In Progress* |
| [wrapper][wrapper-github-readme]             | Wrap the text with the opening and closing chars.                 | [![npm version][wrapper-npm-badge-png]][wrapper-npm-badge] |

Click on the package name to visit its [GitHub](https://github.com/) page.

<br>

## angular-package/type

Common types, type guards and type checkers.

[![Gitter][gitter-badge]][gitter-chat]
[![Discord][discord-badge]][discord-channel]
[![Twitter][twitter-badge]][twitter-follow]
<!-- npm badge -->
[![npm version][type-npm-badge-svg]][type-npm-badge]
<!-- GitHub badges -->
[![GitHub issues][type-badge-issues]][type-issues]
[![GitHub forks][type-badge-forks]][type-forks]
[![GitHub stars][type-badge-stars]][type-stars]
[![GitHub license][type-badge-license]][type-license]
<!-- Sponsors badges -->
[![GitHub sponsors][github-badge-sponsor]][github-sponsor-link]
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
  * [Functions](#check)
    * [`are`](#are-functions)
    * [`is`](#is-functions)
    * [`isNot`](#isnot-functions)
  * [Objects](#check-objects)
    * [`are`](#are)
    * [`is`](#is)
    * [`isNot`](#isnot)
* [Guard](#guard)
  * [Functions](#guard-functions)
  * [Objects](#guard-objects)
    * [`guard`](#guard-object)
* [The `type`](#the-type)
* [Common](#common)
  * [Enums](#common-enums)
  * [Interfaces](#common-interfaces)
  * [Types](#common-types)
* [Experimental](#experimental)
* [Changelog](#changelog)
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

This package was built by the [library skeleton][skeleton] which was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

Copy this package to the `packages/type` folder of the [library skeleton][skeleton] then run the commands below.

### Build

Run `ng build type` to build the package. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Install `@angular-package/testing` with command:

```typescript
npm i @angular-package/testing --no-save
```

Run `ng test type` to execute the unit tests via [Karma](https://karma-runner.github.io).

<br>

## Installation

Install `@angular-package/type` package with command:

```bash
npm i @angular-package/type --save
```

[&dArr; Down](#preparation)

<br>

## Api

```typescript
// Main.
import {
  recognizeValue, // From the `5.0.0` version
  typeOf,
} from '@angular-package/type';
```

```typescript
// `are` prefix functions.
import {
  // Function.
  areBigInt, // From the `5.0.0` version
  areBoolean, // From the `5.0.0` version
  areDate, // From the `5.0.0` version
  areDefined, // From the `5.0.0` version
  areFalse, // From the `5.0.0` version
  areNull, // From the `5.0.0` version
  areNumber, // From the `5.0.0` version
  areRegExp, // From the `5.0.0` version
  areString,
  areSymbol, // From the `5.0.0` version
  areTrue, // From the `5.0.0` version
  areUndefined, // From the `5.0.0` version
} from '@angular-package/type';
```

```typescript
// `guard` prefix functions.
import { 
  guardArray,
  guardBigInt,
  guardBoolean,
  guardClass,
  guardDate, // From the `5.0.0` version
  guardDefined,
  guardFalse,  // From the `5.0.0` version
  guardFunction,
  guardInstance,
  guardKey,
  guardNull,
  guardNumber,
  guardNumberBetween,  // From the `5.0.0` version
  guardObject,
  guardObjectKey,
  guardObjectKeyIn,  // From the `5.0.0` version
  guardObjectKeys,
  guardObjectSomeKeys, // From the `5.0.0` version
  guardPrimitive,
  guardRegExp,  // From the `5.0.0` version
  guardString,
  guardStringLength,  // From the `5.0.0` version
  guardSymbol,
  guardTrue,  // From the `5.0.0` version
  guardType,
  guardUndefined,
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
  isObjectKeysIn, // From the `5.0.0` version
  isObjectSomeKeys, // From the `5.0.0` version
  isPrimitive,
  isRegExp, // From the 4.2.0 version.
  isString,
  isStringIncludes, // From the `5.0.0` version
  isStringIncludesSome, // From the `5.0.0` version
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
import { are, guard, is, isNot, type } from '@angular-package/type';
```

```typescript
// Interfaces.
import {
  MinMax
} from '@angular-package/type';
```

```typescript
// Types.
import {
  AnyBoolean,
  AnyNumber,
  AnyString,
  CallbackPayload, // From the `5.0.0` version.
  Constructor,
  Defined,
  ForEachCallback,  // From the `5.0.0` version.
  Never,
  NotUndefined,
  NumberBetween, // From the `4.2.0` version.
  Primitive,
  Primitives,
  ResultCallback, // From the `4.2.0` version
  StringOfLength, // From the `4.2.0` version.
  Type,
  Types,
  Undefined
} from '@angular-package/type';
```

[&uArr; Up](#api) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#precise-check)

<br>

## Preparation

### Recognize value


#### `recognizeValue()`



```typescript

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
import { recognizeValue } from '@angular-package/type';

// Class.
class CustomClass {}
const customClass = new CustomClass();

// String.
const firstName = 'Artemis';


/*
Returns {
  "typeOf": "object",
  "typeof": "object",
  "isNaN": true,
  "Object": true,
  "CustomClass": true
}
*/
recognizeValue(customClass, true, [CustomClass]);

/*
Returns {
  "isClass": true,
  "typeOf": "function",
  "typeof": "function",
  "isNaN": true,
  "Function": true,
  "Object": true
}
*/
recognizeValue(CustomClass);

/*
Returns {
  "typeOf": "string",
  "typeof": "string",
  "isNaN": true
}
*/
recognizeValue(firstName);

/*
Returns {
  "typeOf": "string",
  "typeof": "object",
  "isNaN": true,
  "Object": true,
  "String": true
}
*/
recognizeValue(new String(firstName));
```

[&uArr; Up](#preparation) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#callback)

<br>

### Precise check

To precisely check the type of any value it needs to check the `Object.prototype` class of that value and [`typeOf()`](#typeof) is perfect for this.  
Read more:

* [Using `toString()` to detect object class.][js-tostring]
* [Symbol.toStringTag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)
* [The Best Way to Type Check in Vanilla JS.](https://javascript.plainenglish.io/the-best-way-to-type-check-in-vanilla-js-55197b4f45ec)
* [Using JavaScript Symbol.toStringTag for objects types description.](https://dev.to/cherif_b/using-javascript-tostringtag-for-objects-types-description-15hc)

**Mozilla.org** documentation describes this way of checking as unreliable. The problem and at the same time some kind of solution with this approach of checking is, it's possible to change the class name of the object.

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

// This is a solution for just an object !
const person = {
  firstName: 'My name',
  get [Symbol.toStringTag](): string {
    return 'Person';
  }
};

// Now the object can be found by using.
typeOf(person) === 'person';

/*
  Example of the `RegExp` that is treated as `Date`.
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
myRegExp instanceof RegExp // Confirms, it's a `RegExp` not a `Date`.
```

**Summary:**

Because of the simplicity of manipulating objects, the [`typeOf()`](#typeof) function cannot be used without other ways of confirming the type, like e.g. with the help [`instanceof`][js-instanceof] operator. On the other hand, the [`instanceof`][js-instanceof] operator may result in unexpected results what can be read in **Mozilla.org** documentation [here][instanceof_and_multiple] in the section **instanceof and multiple context (e.g. frames or windows)**:

> *Different scopes have different execution environments. This means that they have different built-ins (different global object, different constructors, etc.). This may result in unexpected results. For instance, `[] instanceof window.frames[0].Array` will return `false`, because `Array.prototype !== ``window.frames[0].Array.prototype` and arrays inherit from the former.*

[&uArr; Up](#precise-check) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#check)

[instanceof_and_multiple]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof#instanceof_and_multiple_context_e.g._frames_or_windows

<br>

### Callback

To handle the **result** of the check(before it returns) with an additional payload there is a callback function, so it is possible to, for example, send it to error tracker [sentry.io](https://sentry.io) or even to change the value of the result and then return.
The callback function passes the `result` of the check, the `value` that was checked, and `payload` with by default function name that performed the callback and some additional properties depends on the used function. Payload is changeable by the `payload` parameter of the parent function and also it's possible to add new properties through it.
The default callback function is used to return the result of the check.

#### Default `resultCallback()`

Default function to handle `callback` of [`ResultCallback`](#resultcallback) type.

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
  return result;
};

isObject('x', customCallback, { database: '' });
```

[&uArr; Up](#callback)

<br>

## Check

### `are` functions

| Function                          | Checks if the values are |
| :-------------------------------- | :----------------------- |
| [`areBigInt()`](#arebigint)       | a [`bigint`][js-bigint] type by using [`every()`](#arebigintevery), [`forEach()`](#arebigintforeach) and [`some()`](#arebigintsome) methods of the returned object. |
| [`areBoolean()`](#areboolean)     | a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] by using [`every()`](#arebooleanevery), [`forEach()`](#arebooleanforeach) and [`some()`](#arebooleansome) methods of the returned object. |
| [`areDate()`](#aredate)           | [`Date`][js-date] by using [`every()`](#aredateevery), [`forEach()`](#aredateforeach) and [`some()`](#aredatesome) methods of the returned object. |
| [`areDefined()`](#aredefined)     | **defined** by using [`every()`](#aredefinedevery), [`forEach()`](#aredefinedforeach) and [`some()`](#aredefinedsome) methods of the returned object. |
| [`areFalse()`](#arefalse)         | a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] equal to `false` by using [`every()`](#arefalseevery), [`forEach()`](#arefalseforeach) and [`some()`](#arefalsesome) methods of the returned object. |
| [`areNull()`](#arenull)           | [`null`][js-null] by using [`every()`](#arenullevery), [`forEach()`](#arenullforeach) and [`some()`](#arenullsome) methods of the returned object. |
| [`areNumber()`](#arenumber)       | a [`number`][js-number] type or an instance of [`Number`][js-number] by using [`every()`](#arenumberevery), [`forEach()`](#arenumberforeach) and [`some()`](#arenumbersome) methods of the returned object. |
| [`areRegExp()`](#areregexp)       | regular expressions of [`RegExp`][js-regexp] by using [`every()`](#areregexpevery), [`forEach()`](#areregexpforeach) and [`some()`](#areregexpsome) methods of the returned object. |
| [`areString()`](#arestring)       | a [`string`][js-string] type or an instance of [`String`][js-string] by using [`every()`](#arestringevery), [`forEach()`](#arestringforeach) and [`some()`](#arestringsome) methods of the returned object. |
| [`areSymbol()`](#aresymbol)       | a [`symbol`][js-symbol] type by using [`every()`](#aresymbolevery), [`forEach()`](#aresymbolforeach) and [`some()`](#aresymbolsome) methods of the returned object. |
| [`areTrue()`](#aretrue)           | a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] equal to `true` by using [`every()`](#aretrueevery), [`forEach()`](#aretrueforeach) and [`some()`](#aretruesome) methods of the returned object. |
| [`areUndefined()`](#areundefined) | [`undefined`][js-undefined] by using [`every()`](#areundefinedevery), [`forEach()`](#areundefinedforeach) and [`some()`](#areundefinedsome) methods of the returned object. |

#### `areBigInt()`

[![new]][type-github-changelog]

Checks if the **values** are a [`bigint`][js-bigint] type by using [`every()`](#arebigintevery), [`forEach()`](#arebigintforeach) and [`some()`](#arebigintsome) methods of the returned object.

```typescript
const areBigInt = (...values: any[]) => { ... };
```

**Parameters:**

| Name: type         | Description |
| :----------------- | :---------- |
| `...values: any[]` | A rest parameter of [`any`][ts-any] type to check its elements against a [`bigint`][js-bigint] type. |

**Returns:**

The **return value** is an [`object`][js-object] consists of [`every()`](#arebigintevery), [`forEach()`](#arebigintforeach) and [`some()`](#arebigintsome) methods for checking supplied `values`.

#### `areBigInt().every()`

[![new]][type-github-changelog]

Checks if **every** of the provided `values` of [`areBigInt()`](#arebigint) is a [`bigint`][js-bigint] type.

```typescript
{
  every: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      values.every((value) => isBigInt(value)),
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether the provided `values` of [`areBigInt()`](#arebigint) are a [`bigint`][js-bigint] type.

**Usage:**

```typescript
// Example usage.
import { areBigInt } from '@angular-package/type';

areBigInt(1n, 22n).every((result, value, payload) => {
  result // true
  value /// [1n, 22n]
  payload // undefined
  return result;
}); // true, boolean
```

#### `areBigInt().forEach()`

[![new]][type-github-changelog]

The `forEach()` method executes a provided callback function once for each element of the supplied `values` of [`areBigInt()`](#arebigint).

```typescript
{
  forEach: <Payload extends object>(
    forEachCallback: ForEachCallback<any, CallbackPayload<Payload>>,
    payload?: CallbackPayload<Payload>
  ) => {
    if (isArray(values) && isFunction(forEachCallback)) {
      values.forEach((value, index) =>
        forEachCallback(isBigInt(value), value, index, values, payload)
      );
    }
  },
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `callback: ForEachCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ForEachCallback`](#foreachcallback) type with parameters, the `value` that has been checked, the `result` of this check, `index` of each element, the provided `values` and `payload` of the default [`CallbackPayload`](#callbackpayload) shape with optional properties from the provided `payload`, to handle. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is void.

**Usage:**

```typescript
// Example usage.
import { areBigInt } from '@angular-package/type';

areBigInt(1n, 2, '3').forEach(
  (result, value, index, array, payload) => {
    result // true, false, false
    value // 1n, 2, 3
    index // 0, 1, 2
    array // [ 1n, 2, 3 ]
    payload // undefined
    return result;
  },
  { age: 2 }
);
```

#### `areBigInt().some()`

[![new]][type-github-changelog]

Checks if **some** of the provided `values` of [`areBigInt()`](#arebigint) are a [`bigint`][js-bigint] type.

```typescript
{
  some: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      isArray(values) ? values.some((value) => isBigInt(value)) : false,
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether **some** of the provided `values` of [`areBigInt()`](#arebigint) are a [`bigint`][js-bigint] type.

**Usage:**

```typescript
// Example usage.
import { areBigInt } from '@angular-package/type';

areBigInt(1n, 2, '3').some((result, value, payload) => {
  result // true
  value // [1n, 2, '3']
  payload // undefined
  return result;
});
```

[&uArr; Up](#arebigint) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#aredate)

<br>

#### `areBoolean()`

Checks if the **values** are a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] by using [`every()`](#arebooleanevery), [`forEach()`](#arebooleanforeach) and [`some()`](#arebooleansome) methods of the returned object.

```typescript
const areBoolean = (...values: any[]) => { ... };
```

**Parameters:**

| Name: type         | Description |
| :----------------- | :---------- |
| `...values: any[]` | A rest parameter of [`any`][ts-any] type to check its elements against a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean]. |

**Returns:**

The **return value** is an [`object`][js-object] consists of [`every()`](#arebooleanevery), [`forEach()`](#arebooleanforeach) and [`some()`](#arebooleansome) methods for checking supplied `values`.

#### `areBoolean().every()`

[![new]][type-github-changelog]

Checks if **every** of the provided `values` of [`areBoolean()`](#areboolean) is a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean].

```typescript
{
  every: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      values.every((value) => isBoolean(value)),
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether the provided `values` of [`areBoolean()`](#areboolean) are a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean].

**Usage:**

```typescript
// Example usage.
import { areBoolean } from '@angular-package/type';

areBoolean(1, true, null, new Boolean(3)).every((result, value, payload) => {
  result // false
  value // [1, true, null, Boolean]
  payload // undefined
  return result;
}); // false, boolean
```

#### `areBoolean().forEach()`

[![new]][type-github-changelog]

The `forEach()` method executes a provided callback function once for each element of the supplied `values` of [`areBoolean()`](#areboolean).

```typescript
{
  forEach: <Payload extends object>(
    forEachCallback: ForEachCallback<any, CallbackPayload<Payload>>,
    payload?: CallbackPayload<Payload>
  ) => {
    if (isArray(values) && isFunction(forEachCallback)) {
      values.forEach((value, index) =>
        forEachCallback(isBoolean(value), value, index, values, payload)
      );
    }
  },
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `callback: ForEachCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ForEachCallback`](#foreachcallback) type with parameters, the `value` that has been checked, the `result` of this check, `index` of each element, the provided `values` and `payload` of the default [`CallbackPayload`](#callbackpayload) shape with optional properties from the provided `payload`, to handle. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is void.

**Usage:**

```typescript
// Example usage.
import { areBoolean } from '@angular-package/type';

areBoolean(1, true, null, new Boolean(3)).forEach(
  (result, value, index, array, payload) => {
    result // false, true, false, true
    value // 1, true, null, Boolean
    index // 0, 1, 2, 3
    array // [ 1, true, null, Boolean ]
    payload // { age: 2 }
  },
  { age: 2 }
);
```

#### `areBoolean().some()`

[![new]][type-github-changelog]

Checks if **some** of the provided `values` of [`areBoolean()`](#areboolean) are a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean].

```typescript
{
  some: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      isArray(values) ? values.some((value) => isBoolean(value)) : false,
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether **some** of the provided `values` of [`areBoolean()`](#areboolean) are a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean].

**Usage:**

```typescript
// Example usage.
import { areBoolean } from '@angular-package/type';

areBoolean(1, true, null, new Boolean(3)).some((result, value, payload) => {
  result // true
  value // [1, true, null, Boolean]
  payload // undefined
  return result;
}); // true, boolean
```

[&uArr; Up](#areboolean) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#aredefined)

<br>

#### `areDate()`

[![new]][type-github-changelog]

Checks if the **values** are [`Date`][js-date] by using [`every()`](#aredateevery), [`forEach()`](aredateforeach) and [`some()`](#aredatesome) methods of the returned object.

```typescript
const areDate = (...values: any[]) => { ... };
```

**Parameters:**

| Name: type         | Description |
| :----------------- | :---------- |
| `...values: any[]` | A rest parameter of [`any`][ts-any] type to check its elements against [`Date`][js-date]. |

**Returns:**

The **return value** is an [`object`][js-object] consists of [`every()`](#aredateevery), [`forEach()`](#aredateforeach) and [`some()`](#aredatesome) methods for checking supplied `values`.

#### `areDate().every()`

[![new]][type-github-changelog]

Checks if **every** of the provided `values` of [`areDate()`](#aredate) is a [`Date`][js-date].

```typescript
{
  every: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      values.every((value) => isDate(value)),
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether the provided `values` of [`areDate()`](#aredate) are [`Date`][js-date].

**Usage:**

```typescript
// Example usage.
import { areDate } from '@angular-package/type';

areDate(new Date(), new Date('invalid date')).every((result, value, payload) => {
  result // false
  value // [Sat Sep 11 2021 21:36:43 GMT+0200 (Central European Summer Time), Invalid Date]
  payload // undefined
  return result;
}); // false, boolean
```

#### `areDate().forEach()`

[![new]][type-github-changelog]

The `forEach()` method executes a provided callback function once for each element of the supplied `values` of [`areDate()`](#aredate).

```typescript
{
  forEach: <Payload extends object>(
    forEachCallback: ForEachCallback<any, CallbackPayload<Payload>>,
    payload?: CallbackPayload<Payload>
  ) => {
    if (isArray(values) && isFunction(forEachCallback)) {
      values.forEach((value, index) =>
        forEachCallback(isDate(value), value, index, values, payload)
      );
    }
  },
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `callback: ForEachCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ForEachCallback`](#foreachcallback) type with parameters, the `value` that has been checked, the `result` of this check, `index` of each element, the provided `values` and `payload` of the default [`CallbackPayload`](#callbackpayload) shape with optional properties from the provided `payload`, to handle. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is void.

**Usage:**

```typescript
// Example usage.
import { areDate } from '@angular-package/type';

areDate(new Date(), new Date('invalid date')).forEach(
  (result, value, index, array, payload) => {
    result // true, false
    value // Sat Sep 11 2021 21:38:19 GMT+0200 (Central European Summer Time, Invalid Date
    index // 0, 1
    array // [ Sat Sep 11 2021 21:38:19 GMT+0200 (Central European Summer Time), Invalid Date ]
    payload // { age: 2 }
  },
  { age: 2 }
);
```

#### `areDate().some()`

[![new]][type-github-changelog]

Checks if **some** of the provided `values` of [`areDate()`](#aredate) are [`Date`][js-date].

```typescript
{
  some: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      isArray(values) ? values.some((value) => isDate(value)) : false,
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether **some** of the provided `values` of [`areDate()`](#aredate) are [`Date`][js-date].

**Usage:**

```typescript
// Example usage.
import { areDate } from '@angular-package/type';

areDate(new Date(), new Date('invalid date')).some((result, value, payload) => {
  result // true
  value // [Sat Sep 11 2021 21:37:43 GMT+0200 (Central European Summer Time), Invalid Date]
  payload // undefined
  return result;
}); // true, boolean
```

[&uArr; Up](#aredate) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#arefalse)

<br>

#### `areDefined()`

[![new]][type-github-changelog]

Checks if the **values** are **defined** by using [`every()`](#aredefinedevery), [`forEach()`](aredefinedforeach) and [`some()`](#aredefinedsome) methods of the returned object.

```typescript
const areDefined = (...values: any[]) => { ... };
```

**Parameters:**

| Name: type         | Description |
| :----------------- | :---------- |
| `...values: any[]` | A rest parameter of [`any`][ts-any] type to check its elements against **defined**. |

**Returns:**

The **return value** is an [`object`][js-object] consists of [`every()`](#aredefinedevery), [`forEach()`](#aredefinedforeach) and [`some()`](#aredefinedsome) methods for checking supplied `values`.

#### `areDefined().every()`

[![new]][type-github-changelog]

Checks if **every** of the provided `values` of [`areDefined()`](#aredefined) is **defined**.

```typescript
{
  every: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      values.every((value) => isDefined(value)),
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether the provided `values` of [`areDefined()`](#aredefined) are **defined**.

**Usage:**

```typescript
// Example usage.
import { areDefined } from '@angular-package/type';

let age;

areDefined('1', 2, null, undefined, age).every((result, value, payload) => {
  result // false
  value // [ '1', 2, null, undefined, undefined ]
  payload // undefined
  return result;
}); // false, boolean
```

#### `areDefined().forEach()`

[![new]][type-github-changelog]

The `forEach()` method executes a provided callback function once for each element of the supplied `values` of [`areDefined()`](#aredefined).

```typescript
{
  forEach: <Payload extends object>(
    forEachCallback: ForEachCallback<any, CallbackPayload<Payload>>,
    payload?: CallbackPayload<Payload>
  ) => {
    if (isArray(values) && isFunction(forEachCallback)) {
      values.forEach((value, index) =>
        forEachCallback(isDefined(value), value, index, values, payload)
      );
    }
  },
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `callback: ForEachCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ForEachCallback`](#foreachcallback) type with parameters, the `value` that has been checked, the `result` of this check, `index` of each element, the provided `values` and `payload` of the default [`CallbackPayload`](#callbackpayload) shape with optional properties from the provided `payload`, to handle. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is void.

**Usage:**

```typescript
// Example usage.
import { areDefined } from '@angular-package/type';

let age;

areDefined('1', 2, null, undefined, age).forEach(
  (result, value, index, array, payload) => {
    result // true, true, true, false, false
    value // '1', 2, null, undefined, undefined
    index // 0, 1, 2, 3, 4
    array // [ '1', 2, null, undefined, undefined ]
    payload // { age: 2 }
  },
  { age: 2 }
);
```

#### `areDefined().some()`

[![new]][type-github-changelog]

Checks if **some** of the provided `values` of [`areDefined()`](#aredefined) are **defined**.

```typescript
{
  some: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      isArray(values) ? values.some((value) => isDefined(value)) : false,
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether **some** of the provided `values` of [`areDefined()`](#aredefined) are **defined**.

**Usage:**

```typescript
// Example usage.
import { areDefined } from '@angular-package/type';

let age;

areDefined('1', 2, null, undefined, age).some((result, value, payload) => {
  result // true
  value // [ '1', 2, null, undefined, undefined ]
  payload // undefined
  return result;
}); // true, boolean
```

[&uArr; Up](#aredefined) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#arenull)

<br>

#### `areFalse()`

[![new]][type-github-changelog]

Checks if the **values** are a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] equal to `false` by using [`every()`](#arefalseevery), [`forEach()`](#arefalseforeach) and [`some()`](#arefalsesome) methods of the returned object.

```typescript
const areFalse = (...values: any[]) => { ... };
```

**Parameters:**

| Name: type         | Description |
| :----------------- | :---------- |
| `...values: any[]` | A rest parameter of [`any`][ts-any] type to check its elements against a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] equal to `false`. |

**Returns:**

The **return value** is an [`object`][js-object] consists of [`every()`](#aredefinedevery), [`forEach()`](#aredefinedforeach) and [`some()`](#aredefinedsome) methods for checking supplied `values`.

#### `areFalse().every()`

[![new]][type-github-changelog]

Checks if **every** of the provided `values` of [`areFalse()`](#arefalse) is a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] equal to `false`.

```typescript
{
  every: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      values.every((value) => isFalse(value)),
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether the provided `values` of [`areFalse()`](#arefalse) are a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] equal to `false`.

**Usage:**

```typescript
// Example usage.
import { areFalse } from '@angular-package/type';

areFalse(true, null, false, new Boolean(false)).every((result, value, payload) => {
  result // false
  value // [ true, null, false, Boolean ]
  payload // undefined
  return result;
}); // false, boolean
```

#### `areFalse().forEach()`

[![new]][type-github-changelog]

The `forEach()` method executes a provided callback function once for each element of the supplied `values` of [`areFalse()`](#arefalse).

```typescript
{
  forEach: <Payload extends object>(
    forEachCallback: ForEachCallback<any, CallbackPayload<Payload>>,
    payload?: CallbackPayload<Payload>
  ) => {
    if (isArray(values) && isFunction(forEachCallback)) {
      values.forEach((value, index) =>
        forEachCallback(isFalse(value), value, index, values, payload)
      );
    }
  },
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `callback: ForEachCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ForEachCallback`](#foreachcallback) type with parameters, the `value` that has been checked, the `result` of this check, `index` of each element, the provided `values` and `payload` of the default [`CallbackPayload`](#callbackpayload) shape with optional properties from the provided `payload`, to handle. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is void.

**Usage:**

```typescript
// Example usage.
import { areFalse } from '@angular-package/type';

areFalse(true, null, false, new Boolean(false)).forEach(
  (result, value, index, array, payload) => {
    result // false, false, true, true
    value // true, null, false, Boolean
    index // 0, 1, 2, 3
    array // [ true, null, false, Boolean ]
    payload // { age: 2 }
  },
  { age: 2 }
);
```

#### `areFalse().some()`

[![new]][type-github-changelog]

Checks if **some** of the provided `values` of [`areFalse()`](#arefalse) are a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] equal to `false`.

```typescript
{
  some: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      isArray(values) ? values.some((value) => isFalse(value)) : false,
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether **some** of the provided `values` of [`areFalse()`](#arefalse) are a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] equal to `false`.

**Usage:**

```typescript
// Example usage.
import { areFalse } from '@angular-package/type';

areFalse(true, null, false, new Boolean(false)).some((result, value, payload) => {
  result // true
  value // [ true, null, false, Boolean ]
  payload // undefined
  return result;
}); // true, boolean
```

[&uArr; Up](#arefalse) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#arenumber)

<br>

#### `areNull()`

[![new]][type-github-changelog]

Checks if the **values** are [`null`][js-null] by using [`every()`](#arenullevery), [`forEach()`](#arenullforeach) and [`some()`](#arenullsome) methods of the returned object.

```typescript
const areNull = (...values: any[]) => { ... };
```

**Parameters:**

| Name: type         | Description |
| :----------------- | :---------- |
| `...values: any[]` | A rest parameter of [`any`][ts-any] type to check its elements against [`null`][js-null]. |

**Returns:**

The **return value** is an [`object`][js-object] consists of [`every()`](#arenullevery), [`forEach()`](#arenullforeach) and [`some()`](#arenullsome) methods for checking supplied `values`.

#### `areNull().every()`

[![new]][type-github-changelog]

Checks if **every** of the provided `values` of [`areNull()`](#arenull) is [`null`][js-null].

```typescript
{
  every: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      values.every((value) => isNull(value)),
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether the provided `values` of [`areNull()`](#arenull) are [`null`][js-null].

**Usage:**

```typescript
// Example usage.
import { areNull } from '@angular-package/type';

areNull(null, undefined, false, !!null).every((result, value, payload) => {
  result // false
  value // [ null, undefined, false, false ]
  payload // undefined
  return result;
}); // false, boolean
```

#### `areNull().forEach()`

[![new]][type-github-changelog]

The `forEach()` method executes a provided callback function once for each element of the supplied `values` of [`areNull()`](#arenull).

```typescript
{
  forEach: <Payload extends object>(
    forEachCallback: ForEachCallback<any, CallbackPayload<Payload>>,
    payload?: CallbackPayload<Payload>
  ) => {
    if (isArray(values) && isFunction(forEachCallback)) {
      values.forEach((value, index) =>
        forEachCallback(isNull(value), value, index, values, payload)
      );
    }
  },
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `callback: ForEachCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ForEachCallback`](#foreachcallback) type with parameters, the `value` that has been checked, the `result` of this check, `index` of each element, the provided `values` and `payload` of the default [`CallbackPayload`](#callbackpayload) shape with optional properties from the provided `payload`, to handle. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is void.

**Usage:**

```typescript
// Example usage.
import { areNull } from '@angular-package/type';

areNull(true, null, false, new Boolean(false)).forEach(
  (result, value, index, array, payload) => {
    result // false, true, false, false
    value // null, undefined, false, false
    index // 0, 1, 2, 3
    array // [ null, undefined, false, false ]
    payload // { age: 2 }
  },
  { age: 2 }
);
```

#### `areNull().some()`

[![new]][type-github-changelog]

Checks if **some** of the provided `values` of [`areNull()`](#arenull) are [`null`][js-null].

```typescript
{
  some: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      isArray(values) ? values.some((value) => isNull(value)) : false,
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether **some** of the provided `values` of [`areNull()`](#arenull) are [`null`][js-null].

**Usage:**

```typescript
// Example usage.
import { areNull } from '@angular-package/type';

areNull(true, null, false, new Boolean(false)).some((result, value, payload) => {
  result // true
  value // [ null, undefined, false, false ]
  payload // undefined
  return result;
}); // true, boolean
```

[&uArr; Up](#arenull) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#areregexp)

<br>

#### `areNumber()`

[![new]][type-github-changelog]

Checks if the **values** are a [`number`][js-number] type or an instance of [`Number`][js-number] by using [`every()`](#arenumberevery), [`forEach()`](#arenumberforeach) and [`some()`](#arenumbersome) methods of the returned object.

```typescript
const areNumber = (...values: any[]) => { ... };
```

**Parameters:**

| Name: type         | Description |
| :----------------- | :---------- |
| `...values: any[]` | A rest parameter of [`any`][ts-any] type to check its elements against a [`number`][js-number] type or an instance of [`Number`][js-number]. |

**Returns:**

The **return value** is an [`object`][js-object] consists of [`every()`](#arenumberevery), [`forEach()`](#arenumberforeach) and [`some()`](#arenumbersome) methods for checking supplied `values`.

#### `areNumber().every()`

[![new]][type-github-changelog]

Checks if **every** of the provided `values` of [`areNumber()`](#arenumber) is a [`number`][js-number] type or an instance of [`Number`][js-number].

```typescript
{
  every: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      values.every((value) => isNumber(value)),
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether the provided `values` of [`areNumber()`](#arenumber) are a [`number`][js-number] type or an instance of [`Number`][js-number].

**Usage:**

```typescript
// Example usage.
import { areNumber } from '@angular-package/type';

areNumber(1, new Number(2), Number(3), '4').every((result, value, payload) => {
  result // false
  value // [ 1, Number, 3, '4' ]
  payload // undefined
  return result;
}); // false, boolean
```

#### `areNumber().forEach()`

[![new]][type-github-changelog]

The `forEach()` method executes a provided callback function once for each element of the supplied `values` of [`areNumber()`](#arenumber).

```typescript
{
  forEach: <Payload extends object>(
    forEachCallback: ForEachCallback<any, CallbackPayload<Payload>>,
    payload?: CallbackPayload<Payload>
  ) => {
    if (isArray(values) && isFunction(forEachCallback)) {
      values.forEach((value, index) =>
        forEachCallback(isNumber(value), value, index, values, payload)
      );
    }
  },
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `callback: ForEachCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ForEachCallback`](#foreachcallback) type with parameters, the `value` that has been checked, the `result` of this check, `index` of each element, the provided `values` and `payload` of the default [`CallbackPayload`](#callbackpayload) shape with optional properties from the provided `payload`, to handle. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is void.

**Usage:**

```typescript
// Example usage.
import { areNumber } from '@angular-package/type';

areNumber(1, new Number(2), Number(3), '4').forEach(
  (result, value, index, array, payload) => {
    result // true, true, true, false
    value // 1, Number, 3, '4'
    index // 0, 1, 2, 3
    array // [ 1, Number, 3, '4' ]
    payload // { age: 2 }
  },
  { age: 2 }
);
```

#### `areNumber().some()`

[![new]][type-github-changelog]

Checks if **some** of the provided `values` of [`areNumber()`](#arenumber) are a [`number`][js-number] type or an instance of [`Number`][js-number].

```typescript
{
  some: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      isArray(values) ? values.some((value) => isNumber(value)) : false,
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether **some** of the provided `values` of [`areNumber()`](#arenumber) are a [`number`][js-number] type or an instance of [`Number`][js-number].

**Usage:**

```typescript
// Example usage.
import { areNumber } from '@angular-package/type';

areNumber(1, new Number(2), Number(3), '4').some((result, value, payload) => {
  result // true
  value // [ 1, Number, 3, '4' ]
  payload // undefined
  return result;
}); // true, boolean
```

[&uArr; Up](#arenumber) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#arestring)

<br>

#### `areRegExp()`

[![new]][type-github-changelog]

Checks if the values are regular expressions of [`RegExp`][js-regexp] by using [`every()`](#areregexpevery), [`forEach()`](#areregexpforeach) and [`some()`](#areregexpsome) methods of the returned object.

```typescript
const areRegExp = (...values: any[]) => { ... };
```

**Parameters:**

| Name: type         | Description |
| :----------------- | :---------- |
| `...values: any[]` | A rest parameter of [`any`][ts-any] type to check its elements against the regular expression of [`RegExp`][js-regexp]. |

**Returns:**

The **return value** is an [`object`][js-object] consists of [`every()`](#areregexpevery), [`forEach()`](#areregexpforeach) and [`some()`](#areregexpsome) methods for checking supplied `values`.

#### `areRegExp().every()`

[![new]][type-github-changelog]

Checks if **every** of the provided `values` of [`areRegExp()`](#areregexp) is a regular expression of [`RegExp`][js-regexp].

```typescript
{
  every: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      values.every((value) => isRegExp(value)),
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether the provided `values` of [`areRegExp()`](#areregexp) are regular expressions of a [`RegExp`][js-regexp].

**Usage:**

```typescript
// Example usage.
import { areRegExp } from '@angular-package/type';

areRegExp(/^[]/, /^[]/, /^[]/, 3).every((result, value, payload) => {
  result // false
  value // [/^[]/, /^[]/, /^[]/, 3]
  payload // undefined
  return result;
}); // false, boolean
```

#### `areRegExp().forEach()`

[![new]][type-github-changelog]

The `forEach()` method executes a provided callback function once for each element of the supplied `values` of [`areRegExp()`](#areregexp).

```typescript
{
  forEach: <Payload extends object>(
    forEachCallback: ForEachCallback<any, CallbackPayload<Payload>>,
    payload?: CallbackPayload<Payload>
  ) => {
    if (isArray(values) && isFunction(forEachCallback)) {
      values.forEach((value, index) =>
        forEachCallback(isRegExp(value), value, index, values, payload)
      );
    }
  },
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `callback: ForEachCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ForEachCallback`](#foreachcallback) type with parameters, the `value` that has been checked, the `result` of this check, `index` of each element, the provided `values` and `payload` of the default [`CallbackPayload`](#callbackpayload) shape with optional properties from the provided `payload`, to handle. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is void.

**Usage:**

```typescript
// Example usage.
import { areRegExp } from '@angular-package/type';

areRegExp(/^[]/, /^[]/, /^[]/, 3).forEach(
  (result, value, index, payload, array) => {
    result // true, true, true, false
    value // /^[]/, /^[]/, /^[]/, 4
    index // 0, 1, 2, 3
    array // [ /^[]/, /^[]/, /^[]/, 3 ]
    payload // { age: 2 }
    if (result === true) {
      // Do something.
    }
    return result;
  },
  { age: 2 }
);
```

#### `areRegExp().some()`

[![new]][type-github-changelog]

Checks if **some** of the provided `values` of [`areRegExp()`](#areregexp) are regular expressions of [`RegExp`][js-regexp].

```typescript
{
  some: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      isArray(values) ? values.some((value) => isRegExp(value)) : false,
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether **some** of the provided `values` of [`areRegExp()`](#areregexp) are a [`string`][js-string] type or an instance of [`String`][js-string].

**Usage:**

```typescript
// Example usage.
import { areRegExp } from '@angular-package/type';

areRegExp(/^[]/, /^[]/, /^[]/, 3).some((result, value, payload) => {
  result // true
  value // [/^[]/, /^[]/, /^[]/, 3]
  payload // undefined
  return result;
});
```

[&uArr; Up](#areregexp) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#aresymbol)

<br>

#### `areString()`

[![update]][type-github-changelog]

Checks if the **values** are a [`string`][js-string] type or an instance of [`String`][js-string] by using [`every()`](#arestringevery), [`forEach()`](#arestringforeach) and [`some()`](#arestringsome) methods of the returned object.

```typescript
const areString = (...values: any[]) => { ... };
```

**Parameters:**

| Name: type         | Description |
| :----------------- | :---------- |
| `...values: any[]` | A rest parameter of [`any`][ts-any] type to check its elements against a [`string`][js-string] type or an instance of [`String`][js-string]. |

**Returns:**

The **return value** is an [`object`][js-object] consists of [`every()`](#arestringevery), [`forEach()`](#arestringforeach) and [`some()`](#arestringforeach) methods for checking supplied `values`.

#### `areString().every()`

[![new]][type-github-changelog]

Checks if **every** of the provided `values` of [`areString()`](#arestring) is a [`string`][js-string] type or an instance of [`String`][js-string]. |

```typescript
{
  every: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      values.every((value) => isString(value)),
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether the provided values of [`areString()`](#arestring) are a [`string`][js-string] type or an instance of [`String`][js-string]. |

**Usage:**

```typescript
// Example usage.
import { areString } from '@angular-package/type';

areString(1, '2', '3').every((result, value, payload) => {
  result // true
  value // [1, '2', '3']
  payload // undefined
  return result;
}); // false, boolean
```

#### `areString().forEach()`

[![new]][type-github-changelog]

The `forEach()` method executes a provided callback function once for each element of the supplied `values` of [`areString()`](#arestring).

```typescript
{
  forEach: <Payload extends object>(
    forEachCallback: ForEachCallback<any, CallbackPayload<Payload>>,
    payload?: CallbackPayload<Payload>
  ) => {
    if (isArray(values) && isFunction(forEachCallback)) {
      values.forEach((value, index) =>
        forEachCallback(isString(value), value, index, values, payload)
      );
    }
  },
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `callback: ForEachCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ForEachCallback`](#foreachcallback) type with parameters, the `value` that has been checked, the `result` of this check, `index` of each element, the provided `values` and `payload` of the default [`CallbackPayload`](#callbackpayload) shape with optional properties from the provided `payload`, to handle. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is void.

**Usage:**

```typescript
// Example usage.
import { areString } from '@angular-package/type';

areString(1, '2', '3', false).forEach(
  (result, value, index, array, payload) => {
    result // false, true, true, false
    value // 1, '2', '3', false
    index // 0, 1, 2, 3
    array // [ 1, '2', '3', false ]
    payload // { age: 2 }
  },
  { age: 2 }
);
```

#### `areString().some()`

[![new]][type-github-changelog]

Checks if **some** of the provided `values` of [`areString()`](#arestring) are a [`string`][js-string] type or an instance of [`String`][js-string].

```typescript
{
  some: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      isArray(values) ? values.some((value) => isString(value)) : false,
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether **some** of the provided values of [`areString()`](#arestring) are a [`string`][js-string] type or an instance of [`String`][js-string].

**Usage:**

```typescript
// Example usage.
import { areString } from '@angular-package/type';

areString(1, '2', '3').some((result, value, payload) => {
  result // true
  value // [1, '2', '3']
  payload // undefined
  return result;
}); // true, boolean
```

[&uArr; Up](#arestring) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#aretrue)

<br>

#### `areSymbol()`

[![new]][type-github-changelog]

Checks if the **values** are a [`symbol`][js-symbol] type by using [`every()`](#aresymbolevery), [`forEach()`](#aresymbolforeach) and [`some()`](#aresymbolsome) methods of the returned object.

```typescript
const areSymbol = (...values: any[]) => { ... };
```

**Parameters:**

| Name: type         | Description |
| :----------------- | :---------- |
| `...values: any[]` | A rest parameter of [`any`][ts-any] type to check its elements against a [`symbol`][js-symbol] type. |

**Returns:**

The **return value** is an [`object`][js-object] consists of [`every()`](#aresymbolevery), [`forEach()`](#aresymbolforeach) and [`some()`](#aresymbolsome) methods for checking supplied `values`.

#### `areSymbol().every()`

[![new]][type-github-changelog]

Checks if **every** of the provided `values` of [`areSymbol()`](#aresymbol) is a [`symbol`][js-symbol] type.

```typescript
{
  every: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      values.every((value) => isSymbol(value)),
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether the provided `values` of [`areSymbol()`](#aresymbol) are a [`symbol`][js-symbol] type.

**Usage:**

```typescript
// Example usage.
import { areSymbol } from '@angular-package/type';

areSymbol(Symbol(1), 2, Symbol(3), 4).every((result, value, payload) => {
  result // true
  value // [ Symbol(1), 2, Symbol(3), 4 ]
  payload // undefined
  return result;
}); // false, boolean
```

#### `areSymbol().forEach()`

[![new]][type-github-changelog]

The `forEach()` method executes a provided callback function once for each element of the supplied `values` of [`areSymbol()`](#aresymbol).

```typescript
{
  forEach: <Payload extends object>(
    forEachCallback: ForEachCallback<any, CallbackPayload<Payload>>,
    payload?: CallbackPayload<Payload>
  ) => {
    if (isArray(values) && isFunction(forEachCallback)) {
      values.forEach((value, index) =>
        forEachCallback(isSymbol(value), value, index, values, payload)
      );
    }
  },
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `callback: ForEachCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ForEachCallback`](#foreachcallback) type with parameters, the `value` that has been checked, the `result` of this check, `index` of each element, the provided `values` and `payload` of the default [`CallbackPayload`](#callbackpayload) shape with optional properties from the provided `payload`, to handle. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is void.

**Usage:**

```typescript
// Example usage.
import { areSymbol } from '@angular-package/type';

areSymbol(Symbol(1), 2, Symbol(3), 4).forEach(
  (result, value, index, array, payload) => {
    result // true, false, true, false
    value // Symbol(1), 2, Symbol(3), 4
    index // 0, 1, 2, 3
    array // [ Symbol(1), 2, Symbol(3), 4 ]
    payload //  { age: 2 }

    if (result === true) {
      // if undefined do something.
    }
  },
  { age: 2 }
); // void
```

#### `areSymbol().some()`

[![new]][type-github-changelog]

Checks if **some** of the provided `values` of [`areSymbol()`](#aresymbol) are a [`symbol`][js-symbol] type.

```typescript
{
  some: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      isArray(values) ? values.some((value) => isSymbol(value)) : false,
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether **some** of the provided `values` of [`areSymbol()`](#aresymbol) are a [`symbol`][js-symbol] type.

**Usage:**

```typescript
// Example usage.
import { areSymbol } from '@angular-package/type';

areSymbol(Symbol(1), 2, Symbol(3), 4).some((result, value, payload) => {
  result // true
  value // [ Symbol(1), 2, Symbol(3), 4 ]
  payload // undefined
  return result;
}); // true, boolean
```

[&uArr; Up](#aresymbol) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#areundefined)

<br>

#### `areTrue()`

[![new]][type-github-changelog]

Checks if the **values** are a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] equal to `true` by using [`every()`](#aretrueevery), [`forEach()`](#aretrueforeach) and [`some()`](#aretruesome) methods of the returned object.

```typescript
const areTrue = (...values: any[]) => { ... };
```

**Parameters:**

| Name: type         | Description |
| :----------------- | :---------- |
| `...values: any[]` | A rest parameter of [`any`][ts-any] type to check its elements against a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] equal to `true`. |

**Returns:**

The **return value** is an [`object`][js-object] consists of [`every()`](#aretrueevery), [`forEach()`](#aretrueforeach) and [`some()`](#aretruesome) methods for checking supplied `values`.

#### `areTrue().every()`

[![new]][type-github-changelog]

Checks if **every** of the provided `values` of [`areTrue()`](#aretrue) is a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] equal to `true`.

```typescript
{
  every: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      values.every((value) => isTrue(value)),
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether the provided `values` of [`areTrue()`](#aretrue) are a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] equal to `true`.

**Usage:**

```typescript
// Example usage.
import { areTrue } from '@angular-package/type';

const deleteElements = [true, false, false,  new Boolean(false)];

areTrue(...deleteElements).every((result, value, payload) => {
  result // false
  value // [ true, false, false, Boolean ]
  payload // undefined
  return result;
}); // false, boolean
```

#### `areTrue().forEach()`

[![new]][type-github-changelog]

The `forEach()` method executes a provided callback function once for each element of the supplied `values` of [`areTrue()`](#aretrue).

```typescript
{
  forEach: <Payload extends object>(
    forEachCallback: ForEachCallback<any, CallbackPayload<Payload>>,
    payload?: CallbackPayload<Payload>
  ) => {
    if (isArray(values) && isFunction(forEachCallback)) {
      values.forEach((value, index) =>
        forEachCallback(isTrue(value), value, index, values, payload)
      );
    }
  },
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `callback: ForEachCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ForEachCallback`](#foreachcallback) type with parameters, the `value` that has been checked, the `result` of this check, `index` of each element, the provided `values` and `payload` of the default [`CallbackPayload`](#callbackpayload) shape with optional properties from the provided `payload`, to handle. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is void.

**Usage:**

```typescript
// Example usage.
import { areTrue } from '@angular-package/type';

const deleteElements = [true, false, false,  new Boolean(false)];

areTrue(...deleteElements).forEach(
  (result, value, index, array, payload) => {
    result // true, false, false, false
    value // true, false, false, Boolean
    index // 0, 1, 2, 3
    array // [ true, false, false, Boolean ]
    payload //  { "age": 2 }

    if (result === true) {
      // if undefined do something.
    }
  },
  { age: 2 }
);
```

#### `areTrue().some()`

[![new]][type-github-changelog]

Checks if **some** of the provided `values` of of [`areTrue()`](#aretrue) are a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] equal to `true`.

```typescript
{
  some: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      isArray(values) ? values.some((value) => isTrue(value)) : false,
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether **some** of the provided `values` of [`areTrue()`](#aretrue) are a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] equal to `true`.

**Usage:**

```typescript
// Example usage.
import { areTrue } from '@angular-package/type';

const deleteElements = [true, false, false,  new Boolean(false)];

areTrue(...deleteElements).some((result, value, payload) => {
  result // true
  value // [ true, false, false, Boolean ]
  payload // udefined
  return result;
}); // true, boolean
```

[&uArr; Up](#aretrue) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#is-functions)

<br>

#### `areUndefined()`

[![new]][type-github-changelog]

Checks if the **values** are [`undefined`][js-undefined] by using [`every()`](#areundefinedevery), [`forEach()`](#areundefinedforeach) and [`some()`](#areundefinedsome) methods of the returned object.

```typescript
const areUndefined = (...values: any[]) => { ... };
```

**Parameters:**

| Name: type         | Description |
| :----------------- | :---------- |
| `...values: any[]` | A rest parameter of [`any`][ts-any] type to check its elements against [`undefined`][js-undefined]. |

**Returns:**

The **return value** is an [`object`][js-object] consists of [`every()`](#arebigintevery), [`forEach()`](#arebigintforeach) and [`some()`](#arebigintsome) methods for checking supplied `values`.

#### `areUndefined().every()`

[![new]][type-github-changelog]

Checks if **every** of the provided `values` of [`areUndefined()`](#areundefined) is [`undefined`][js-undefined].

```typescript
{
  every: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      values.every((value) => isUndefined(value)),
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether the provided `values` of [`areUndefined()`](#areundefined) is [`undefined`][js-undefined].

**Usage:**

```typescript
// Example usage.
import { areUndefined } from '@angular-package/type';

areUndefined(undefined, 2, 3, new String('4')).every((result, value, payload) => {
  result // false
  value // [ undefined, 2, 3, String]
  payload // undefined
  return result;
}); // false, boolean
```

#### `areUndefined().forEach()`

[![new]][type-github-changelog]

The `forEach()` method executes a provided callback function once for each element of the supplied `values` of [`areUndefined()`](#areundefined).

```typescript
{
  forEach: <Payload extends object>(
    forEachCallback: ForEachCallback<any, CallbackPayload<Payload>>,
    payload?: CallbackPayload<Payload>
  ) => {
    if (isArray(values) && isFunction(forEachCallback)) {
      values.forEach((value, index) =>
        forEachCallback(isUndefined(value), value, index, values, payload)
      );
    }
  },
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `callback: ForEachCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ForEachCallback`](#foreachcallback) type with parameters, the `value` that has been checked, the `result` of this check, `index` of each element, the provided `values` and `payload` of the default [`CallbackPayload`](#callbackpayload) shape with optional properties from the provided `payload`, to handle. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is void.

**Usage:**

```typescript
// Example usage.
import { areUndefined } from '@angular-package/type';

areUndefined(undefined, 1, 2, '3').forEach(
  (result, value, index, array, payload) => {
    result // true, false, false, false
    value // undefined, 1, 2, '3'
    index // 0, 1, 2, 3
    payload //  { age: 2 }
    array // [ undefined, 1, 2, '3' ]

    if (result === true) {
      // if undefined do something.
    }
  },
  { age: 2 }
);
```

#### `areUndefined().some()`

[![new]][type-github-changelog]

Checks if **some** of the provided `values` of [`areUndefined()`](#areundefined) are [`undefined`](#undefined).

```typescript
{
  some: <Payload extends object>(
    callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
    payload?: CallbackPayload<Payload>
  ): boolean =>
    callback(
      isArray(values) ? values.some((value) => isUndefined(value)) : false,
      values,
      payload
    ),
}
```

**Generic type variables:**

| Name      | Default value | Description |
| :-------- | :------------ | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The **return value** is a `boolean` indicating whether **some** of the provided `values` of [`areUndefined()`](#areundefined) are [`undefined`](#undefined).

**Usage:**

```typescript
// Example usage.
import { areUndefined } from '@angular-package/type';

areUndefined(undefined, 2, 3, new String('4')).some((result, value, payload) => {
  result // false
  value // [ undefined, 2, 3, String]
  payload // undefined
  return result;
}); // true, boolean
```

[&uArr; Up](#areundefined)

<br>

### `is` functions

| Function                                          | Checks if any value is |
| :------------------------------------------------ | :--------------------- |
| [`isArray()`](#isarray)                           | the type obtained from its `Object.prototype` equal to `'array'` or an [`object`][js-object] type. The value is also checked by the [`isArray()`][js-isarray] method of [`Array`][js-array]. |
| [`isBigInt()`](#isbigint)                         | a [`bigint`][js-bigint] type. |
| [`isBoolean()`](#isboolean)                       | a [`boolean`][js-boolean] type, or the obtained type from its `Object.prototype` equal to `'boolean'`, or an [`object`][js-object] type and an instance of [`Boolean`][js-boolean] that is equal to `true` or `false`. |
| [`isBooleanObject()`](#isbooleanobject)           | the type obtained from its `Object.prototype` equal to `'boolean'` or an [`object`][js-object] type, and an instance of [`Boolean`][js-boolean] that is equal to `true` or `false`. |
| [`isBooleanType()`](#isbooleantype)               | a [`boolean`][js-boolean] type equal to `true` or `false`. |
| [`isClass()`](#isclass)                           | a [`function`][js-function] type or of the type obtained from its `Object.prototype` equal to `'function'` and an instance of [`Function`][js-function]. It also **confirms**  it's a [`class`][ts-classes] by using [`regexp`][js-regexp] on the obtained string from its `Function.prototype`. |
| [`isDate()`](#isdate)                             | the type obtained from its `Object.prototype` equal to `'date'` or an [`object`][js-object] type, and an instance of [`Date`][js-date]. The `value` is checked against a valid date by using [`isNaN()`][js-isnan] method. |
| [`isDefined()`](#isdefined)                       | **not** an [`undefined`][js-undefined] type and is **not** equal to [`undefined`][js-undefined]. |
| [`isFalse()`](#isfalse)                           | a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] that is equal to `false`. |
| [`isFunction()`](#isfunction)                     | a [`function`][js-function] type or the type obtained from its `Object.prototype` equal to `'function'` and an instance of [`Function`][js-function]. It also **denies** it's a [`class`][ts-classes] by using [`RegExp`][js-regexp] on the obtained string from its `Function.prototype`. |
| [`isInstance()`](#isinstance)                     | an instance of a given [`Constructor`](#constructor). |
| [`isKey()`](#iskey)                               | one of the [`string`][js-string], [`number`][js-number], or [`symbol`][js-symbol] type. |
| [`isNull()`](#isnull)                             | the type obtained from its `Object.prototype` equal to `'null'` or an [`object`][js-object] type that is equal to [`null`][js-null]. |
| [`isNumber()`](#isnumber)                         | a [`number`][js-number] type, or the type obtained from its `Object.prototype` equal to `'number'` or an [`object`][js-object] type and an instance of [`Number`][js-number]. The value is also checked by the [`Number.isFinite()`][js-numberisfinite] method to determine whether it's **finite** and is **validated** by the [`Number.isNaN()`][js-numberisnan] method. |
| [`isNumberBetween()`](#isnumberbetween)           | a [`number`][js-number] type or an instance of [`Number`][js-number] between a specified range. |
| [`isNumberObject()`](#isnumberobject)             | the type obtained from its `Object.prototype` equal to `'number'`, or an [`object`][js-object] type and an instance of [`Number`][js-number] and is also checked by the [`Number.isFinite()`][js-numberisfinite] method to determine whether it's finite and is validated by the [`Number.isNaN()`][js-numberisnan] function. |
| [`isNumberType()`](#isnumbertype)                 | a [`number`][js-number] type and is checked by the [`Number.isFinite()`][js-numberisfinite] method to determine whether it's finite and is validated by the [`Number.isNaN()`][js-numberisnan] method. |
| [`isObject()`](#isobject)                         | an [`object`][js-object] type or the type obtained from its `Object.prototype` equal to `'object'`, and an instance of [`Object`][js-object]. |
| [`isObjectKey()`](#isobjectkey)                   | an [`object`][js-object] with its key of the `PropertyKey` type. |
| [`isObjectKeyIn()`](#isobjectkeyin)               | an [`object`][js-object] function with a key of the `PropertyKey` in it(or its prototype chain) by using the [`in`][js-in-operator] operator. |
| [`isObjectKeys()`](#isobjectkeys)                 | an [`object`][js-object] with its keys |
| [`isObjectKeysIn()`](#isobjectkeysin)             | an `object` with keys in it(or its prototype chain) by using the [`in`][js-in-operator] operator. |
| [`isObjectSomeKeys()`](#isobjectsomekeys)         | an [`object`][js-object] with **some** of its keys or **some groups** of its keys of the `PropertyKey` type. |
| [`isPrimitive()`](#isprimitive)                   | the [`Primitive`](#primitive) type or specific type from a given `type` of the [`Primitives`](#primitives). |
| [`isRegExp()`](#isregexp)                         | a regular expression of the type obtained from its `Object.prototype` equal to `'regexp'`, or an [`object`][js-object] type, and an instance of [`RegExp`][js-regexp]. |
| [`isString()`](#isstring)                         | a [`string`][js-string] type or an instance of [`String`][js-string]. |
| [`isStringIncludes()`](#isstringincludes)         | a [`string`][js-string] type or an instance of [`String`][js-string] that **includes all** of the specified **words/sentences**. |
| [`isStringIncludesSome()`](#isstringincludessome) | a [`string`][js-string] type or an instance of [`String`][js-string] by using [`isString()`](#isstring) that includes **some** of the specified **words/sentences**. |
| [`isStringLength()`](#isstringlength)             | a [`string`][js-string] type or an instance of [`String`][js-string] of `length` within the specified range. |
| [`isStringObject()`](#isstringobject)             | the type obtained from its `Object.prototype` equal to `'string'` or an [`object`][js-object] type, and an instance of [`String`][js-string]. |
| [`isStringType()`](#isstringtype)                 | a [`string`][js-string] type. |
| [`isSymbol()`](#issymbol)                         | a [`symbol`][js-symbol] type. |
| [`isTrue()`](#istrue)                             | a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] equal to `true`. |
| [`isType()`](#istype)                             | the type of [`Type`](#type) from a given `type` parameter of the [`Types`](#types). |
| [`isUndefined()`](#isundefined)                   | an [`undefined`][js-undefined] type. |

<br>

#### `isArray()`

[![update]][type-github-changelog]

Use `isArray()` or `is.array()` to check if **any** value is of the type obtained from its `Object.prototype` equal to `'array'` or an [`object`][js-object] type. The value is also checked by the [`isArray()`][js-isarray] method of [`Array`][js-array].

```typescript
const isArray = <Type = any, Payload extends object = object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Array<Type> =>
  callback(
    (typeOf(value) === 'array' || typeof value === 'object') &&
    Array.isArray(value),
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | [`any`][ts-any]       | A generic type variable `Type` indicates the type of [`Array`][js-array] element of the `value` parameter, which by default is `any` via the return type `value is Array<Type>`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns                | Type      | Description |
| :--------------------- | :-------: | :---------- |
| `value is Array<Type>` | `boolean` | The **return type** is a `boolean` because of used the `is` operator indicating the value is an `array` that takes generic type variable `Type` by default of value [`any`][ts-any] as the type of its elements. |

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
      // Returns `{ "1": "First", "2": "Second", "3": "Third" }`
      payload.transform;
    }
  }
  return result;
}, { transform: { 1: 'First', 2: 'Second', 3: 'Third'} }); // Returns `true` as `value is any[]`
```

[&uArr; Up](#isarray) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isboolean)

<br>

#### `isBigInt()`

[![update]][type-github-changelog]

Use `isBigInt()` or `is.bigint()` to check if **any** value is a [`bigint`][js-bigint] type .

```typescript
const isBigInt = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is bigint =>
  callback(typeof value === 'bigint', value, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

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

[&uArr; Up](#isbigint) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isbooleanobject)

<br>

#### `isBoolean()`

[![update]][type-github-changelog]

Use `isBoolean()` or `is.boolean()` to check if **any** value is a [`boolean`][js-boolean] type, or the obtained type from its `Object.prototype` equal to `'boolean'`, or an [`object`][js-object] type and an instance of [`Boolean`][js-boolean] that is equal to `true` or `false`.

```typescript
const isBoolean = <
  Type extends AnyBoolean = boolean,
  Payload extends object = object
>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Type =>
  callback(
    (typeof value === 'boolean' ||
    typeOf(value) === 'boolean' ||
    (typeof value === 'object' && value instanceof Boolean)) &&
    (value.valueOf() === true || value.valueOf() === false),
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | `boolean`             | A generic type variable `Type` guarded by [`AnyBoolean`](#anyboolean) by default of `boolean` indicates the type of the `value` via the return type `value is Type`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is Type` | `boolean` | The **return type** is a `boolean` as the result of its statement, indicating the `value` is a generic type variable `Type` constrained by [`AnyBoolean`](#anyboolean) by default equal to the `boolean`. |

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

[&uArr; Up](#isboolean) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isbooleantype)

<br>

#### `isBooleanObject()`

[![update]][type-github-changelog]

Use `isBooleanObject()` or `is.booleanObject()` to check if **any** value is of the type obtained from its `Object.prototype` equal to `'boolean'` or an [`object`][js-object] type, and an instance of [`Boolean`][js-boolean] that is equal to `true` or `false`.

```typescript
const isBooleanObject = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Boolean =>
  callback(
    (typeOf(value) === 'boolean' || typeof value === 'object') &&
    value instanceof Boolean &&
    (value.valueOf() === true || value.valueOf() === false),
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

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

[&uArr; Up](#isbooleanobject) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isclass)

<br>

#### `isBooleanType()`

[![update]][type-github-changelog]

Use `isBooleanType()` or `is.booleanType()` to check if **any** value is a [`boolean`][js-boolean] type equal to `true` or `false`.

```typescript
const isBooleanType = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is boolean =>
  callback(
    typeof value === 'boolean' && (value === true || value === false),
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

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

[&uArr; Up](#isbooleantype) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isdate)

<br>

#### `isClass()`

[![update]][type-github-changelog]

Use `isClass()` or `is.class()` to check if **any** value is a [`function`][js-function] type or of the type obtained from its `Object.prototype` equal to `'function'` and an instance of [`Function`][js-function]. It also **confirms**  it's a [`class`][ts-classes] by using [`regexp`][js-regexp] on the obtained string from its `Function.prototype`.

```typescript
const isClass = <Class = Function, Payload extends object = object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Class =>
  callback(
    typeof value === 'function' ||
    (typeOf(value) === 'function' && value instanceof Function)
    ? /class/.test(Function.prototype.toString.call(value).slice(0, 5))
    : false,
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value             | Description |
| :-------- | :------------------------ | :---------- |
| `Class`   | [`Function`][ts-function] | A generic type variable `Class` indicates the type of `value` parameter via the return type `value is Class`. |
| `Payload` | [`object`][ts-object]     | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns          | Type      | Description |
| :--------------- | :-------: | :---------- |
| `value is Class` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type variable `Class` by default equal to [`Function`][js-function]. |

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
    payload.c // Returns `class Class`
  }
  return result;
}, { c: Class }); // Returns `false` as `value is Function`
```

[&uArr; Up](#isclass) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isdefined)

<br>

#### `isDate()`

[![update]][type-github-changelog]

Use `isDate()` or `is.date()` to check if **any** value is of the type obtained from its `Object.prototype` equal to `'date'` or an [`object`][js-object] type, and an instance of [`Date`][js-date]. The `value` is checked against a valid date by using [`isNaN()`][js-isnan] method.

```typescript
const isDate = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Date =>
  callback(
    (typeOf(value) === 'date' || typeof value === 'object') &&
    value instanceof Date === true &&
    !isNaN(value),
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

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
    payload.value // Returns new date
    payload.birthDay // Returns `14`
  }
  return result;
}, { birthDay: 14 }); // Returns `true` as `value is Date`
```

[&uArr; Up](#isdate) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isfalse)

<br>

#### `isDefined()`

[![update]][type-github-changelog]

Use `isDefined()` or `is.defined()` to check if **any** value is **not** an [`undefined`][js-undefined] type and is **not** equal to [`undefined`][js-undefined].

```typescript
const isDefined = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Defined<Type> =>
  callback(typeof value !== 'undefined' && value !== undefined, value, payload);
```

**Generic type variables:**

| Name      | Default value            | Description |
| :-------- | :----------------------- | :---------- |
| `Type`    | From the `value`         | A generic type variable `Type` indicates the type of the `value` parameter, by default captured from the provided `value` via the return type `value is Defined<Type>`. |
| `Payload` | [`object`][ts-object]    | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `value: Type`                                              | The value of a generic type variable `Type`, by default of type captured from the provided `value`, to check. |
| `callback: ResultCallback<Type, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns                  | Type      | Description |
| :----------------------- | :-------: | :---------- |
| `value is Defined<Type>` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type [`Defined`](#defined) that takes a generic type variable `Type` of value by default equal to the type captured from the supplied `value` parameter excepts [`undefined`][js-undefined] which changes to [`never`][ts-never]. |

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
    payload.notDefined // Returns `false`
  }
  return result;
}, { notDefined: false }); // Returns `true` as `value is string`
```

[&uArr; Up](#isdefined) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isfunction)

<br>

#### `isFalse()`

[![update]][type-github-changelog]

Use `isFalse()` or `is.false()` to check if **any** value is a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] that is equal to `false`.

```typescript
const isFalse = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is false =>
  callback(
    isBoolean(value) ? value.valueOf() === false : false,
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

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
    payload.age // Returns `27`
  }
  return result;
}, { age: 27 }); // Returns `true` as `value is false`
```

[&uArr; Up](#isfalse) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isinstance)

<br>

#### `isFunction()`

[![update]][type-github-changelog]

Use `isFunction()` or `is.function()` to check if **any** value is a [`function`][js-function] type or the type obtained from its `Object.prototype` equal to `'function'` and an instance of [`Function`][js-function]. It also **denies** it's a [`class`][ts-classes] by using [`RegExp`][js-regexp] on the obtained string from its `Function.prototype`.

```typescript
const isFunction = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Function =>
  callback(
    typeof value === 'function' ||
    (typeOf(value) === 'function' && (value as any) instanceof Function)
    ? /class/.test(Function.prototype.toString.call(value).slice(0, 5)) ===
        false
    : false,
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

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
    payload.number // Returns `true`
  }
  return result;
}, { number: true }); // Returns `true` as `value is () => 5`
```

[&uArr; Up](#isfunction) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#iskey)

<br>

#### `isInstance()`

[![update]][type-github-changelog]

Use `isInstance()` or `is.instance()` to check if **any** value is an instance of a given [`Constructor`](#constructor).

```typescript
const isInstance = <Obj, Payload extends object>(
  value: any,
  constructor: Constructor<Obj>,
  callback: ResultCallback<
    Obj,
    CallbackPayload<{ ctor: typeof constructor } & Payload>
  > = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Obj =>
  callback(
    isObject(value) &&
    typeof constructor === 'function' &&
    constructor instanceof Function
    ? value instanceof constructor
    : false,
    value,
    { ...payload, ctor: constructor } as any
  );
```

**Generic type variables:**

| Name      | Default value          | Description |
| :-------- | :--------------------- | :---------- |
| `Obj`     | From the `constructor` | A generic type variable `Obj`, by default captured from the provided `constructor` indicates the type of `value` parameter via the return type `value is Obj`. |
| `Payload` | [`object`][ts-object]  | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                                               | Description |
| :--------------------------------------------------------------------------------------- | :---------- |
| `value: any`                                                                             | The value of any type to be an instance of a given `constructor`. |
| `constructor: Constructor<Obj>`                                                          | A [`class`][ts-classes] or [`function`][ts-function] that specifies the type of [`Constructor`](#constructor). |
| `callback: ResultCallback<any, CallbackPayload<{ ctor: typeof constructor } & Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type [`Constructor`](#constructor) and generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                                                     | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement, indicating the `value` is a generic type variable `Obj` by default of type captured from the supplied `constructor`. |

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

[&uArr; Up](#isinstance) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isnull)

<br>

#### `isKey()`

[![update]][type-github-changelog]

Use `isKey()` or `is.key()` to check if **any** value is one of the [`string`][js-string], [`number`][js-number], or [`symbol`][js-symbol] type.

```typescript
const isKey = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is PropertyKey =>
  callback(
    isStringType(value) || isNumberType(value) || isSymbol(value),
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

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

[&uArr; Up](#iskey) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isnumber)

<br>

#### `isNull()`

[![update]][type-github-changelog]

Use `isNull()` or `is.null()` to check if **any** value is of the type obtained from its `Object.prototype` equal to `'null'` or an [`object`][js-object] type that is equal to [`null`][js-null].

```typescript
const isNull = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is null =>
  callback(
    (typeOf(value) === 'null' || typeof value === 'object') && value === null,
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

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

[&uArr; Up](#isnull) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isnumberbetween)

<br>

#### `isNumber()`

[![update]][type-github-changelog]

Use `isNumber()` or `is.number()` to check if **any** value is a [`number`][js-number] type, or the type obtained from its `Object.prototype` equal to `'number'` or an [`object`][js-object] type and an instance of [`Number`][js-number]. The value is also checked by the [`Number.isFinite()`][js-numberisfinite] method to determine whether it's **finite** and is **validated** by the [`Number.isNaN()`][js-numberisnan] method.

```typescript
const isNumber = <
  Type extends AnyNumber = number,
  Payload extends object = object
>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Type =>
  callback(
    (typeof value === 'number' ||
    ((typeOf(value) === 'number' || typeof value === 'object') &&
      value instanceof Number)) &&
    !Number.isNaN(value.valueOf()) &&
    Number.isFinite(value.valueOf()),
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | `number`              | A generic type variable `Type` guarded by [`AnyNumber`](#anynumber) by default of `number` indicates the type of the `value` via the return type `value is Type`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is Type` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type variable `Type` constrained by [`AnyNumber`](#anynumber) by default of `number` type. |

The **return value** is a `boolean` indicating whether the provided `value` is a `number` type or an instance of [`Number`][js-number].

**Usage:**

```typescript
// Example usage.
import { isNumber } from '@angular-package/type';

isNumber(10304050); // true, value is number
isNumber(Number(10304050)); // true, value is number
isNumber(new Number(10304050)); // true, value is number
isNumber<Number>(new Number(10304050)); // true, value is Number
```

[&uArr; Up](#isnumber) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isnumberobject)

<br>

#### `isNumberBetween()`

[![update]][type-github-changelog]

Use `isNumberBetween()` or `is.numberBetween()` to check if **any** value is a [`number`][js-number] type or an instance of [`Number`][js-number] between a specified range.

```typescript
const isNumberBetween = <
  Type extends AnyNumber = number,
  Min extends number = number,
  Max extends number = number,
  Payload extends object = object
>(
  value: any,
  range: MinMax<Min, Max>,
  callback: ResultCallback<
    any,
    CallbackPayload<MinMax<Min, Max> & Payload>
  > = resultCallback,
  payload?: CallbackPayload<Payload>
): value is NumberBetween<Min, Max, Type> =>
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
      ...payload,
      min: range?.min,
      max: range?.max
    } as any
  );
```

**Generic type variables:**

| Name      | Default value             | Description |
| :-------- | :------------------------ | :---------- |
| `Type`    | [`number`][ts-number]     | A generic type variable `Type` guarded by [`AnyNumber`](#anynumber) by default of `number` indicates the type of the `value` via the return type `value is NumberBetween<Min, Max, Type>`. |
| `Min`     | From the `min` of `range` | A generic type variable `Min` constrained by the `number` type, by default of value captured from optional `min` of the provided `range` that indicates the **minimum** range of the provided `value` via the return type `value is NumberBetween<Min, Max, Type>`. |
| `Max`     | From the `max` of `range` | A generic type variable `Max` constrained by the `number` type, by default of value captured from optional `max` of the provided `range` that indicates the **maximum** range of the provided `value` via the return type `value is NumberBetween<Min, Max, Type>`. |
| `Payload` | [`object`][ts-object]     | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                                   | Description |
| :--------------------------------------------------------------------------- | :---------- |
| `value: any`                                                                 | The value of any type to check. |
| `range: MinMax<Min, Max>`                                                    | An [`object`][js-object] of optional **minimum** and **maximum** range of a given `value`. |
| `callback: ResultCallback<any, CallbackPayload<MinMax<Min, Max> & Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and optional `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variables `Min` and `Max` and generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                                         | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns                                  | Type      | Description |
| :--------------------------------------- | :-------: | :---------- |
| `value is NumberBetween<Min, Max, Type>` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type [`NumberBetween`](#numberbetween) that takes generic type variables `Min` and `Max` as a **range** of the supplied value and `Type` as the type of the supplied value. |

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

[&uArr; Up](#isnumberbetween) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isnumbertype)

<br>

#### `isNumberObject()`

[![update]][type-github-changelog]

Use `isNumberObject()` or `is.numberObject()` to check if **any** value is of the type obtained from its `Object.prototype` equal to `'number'`, or an [`object`][js-object] type and an instance of [`Number`][js-number] and is also checked by the [`Number.isFinite()`][js-numberisfinite] method to determine whether it's finite and is validated by the [`Number.isNaN()`][js-numberisnan] function.

```typescript
const isNumberObject = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Number =>
  callback(
    (typeOf(value) === 'number' || typeof value === 'object') &&
    value instanceof Number &&
    !Number.isNaN(value.valueOf()) &&
    Number.isFinite(value.valueOf()),
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

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

[&uArr; Up](#isnumberobject) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isobject)

<br>

#### `isNumberType()`

[![update]][type-github-changelog]

Use `isNumberType()` or `is.numberType()` to check if **any** value is a [`number`][js-number] type and is checked by the [`Number.isFinite()`][js-numberisfinite] method to determine whether it's finite and is validated by the [`Number.isNaN()`][js-numberisnan] method.

```typescript
const isNumberType = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is number =>
  callback(
    typeof value === 'number' && Number.isFinite(value) && !Number.isNaN(value),
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns           | Type      | Description |
| :---------------- | :-------: | :---------- |
| `value is number` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the provided value is a `number`. |

The **return value** is a `boolean` indicating whether the provided `value` is a `number` type.

**Usage:**

```typescript
// Example usage.
import { isNumberType } from '@angular-package/type';

isNumberType(10304050); // true
isNumberType(Number(10304050)); // true
isNumberType(new Number(10304050)); // false
```

[&uArr; Up](#isnumbertype) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isobjectkey)

<br>

#### `isObject()`

[![update]][type-github-changelog]

Use `isObject()` or `is.object()` to check if **any** value is an [`object`][js-object] type or the type obtained from its `Object.prototype` equal to `'object'`, and an instance of [`Object`][js-object].

```typescript
const isObject = <Obj = object, Payload extends object = object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Obj =>
  callback(
    (typeof value === 'object' || typeOf(value) === 'object') &&
    value instanceof Object,
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Obj`     | [`object`][ts-object] | A generic type variable `Obj` indicates the type of `value` parameter via the return type `value is Obj`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type variable `Obj` by default equal to `object`. |

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

[&uArr; Up](#isobject) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isobjectkeyin)

<br>

#### `isObjectKey()`

[![update]][type-github-changelog]

Use `isObjectKey()` or `is.objectKey()` to check if **any** value is an [`object`][js-object] with its key of the `PropertyKey` type.
The function uses [`hasOwnProperty`][js-hasownproperty] method of [`Object`][js-object] to finds enumerable and non-enumerable `PropertyKey` as `string`, `number`, `symbol` unlike `Object.keys()`, but it can't find [`getter`][js-getter] property unlike [`in`][js-in-operator] operator, which can.

```typescript
const isObjectKey = <Obj extends object, Payload extends object = object>(
  value: any,
  key: PropertyKey,
  callback: ResultCallback<
    Obj,
    CallbackPayload<{ key: typeof key } & Payload>
  > = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Obj =>
  callback(
    isObject(value) ? {}.hasOwnProperty.call(value, key) : false,
    value,
    { ...payload, key } as any
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Obj`     | [`object`][ts-object] | A generic type variable `Obj` indicates the type of `value` parameter by default `object` via the return type `value is Obj`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                                      | Description |
| :------------------------------------------------------------------------------ | :---------- |
| `value: any`                                                                    | The value of any type to check against an `object` that contains a key from a given `key`. |
| `key: PropertyKey`                                                              | A property key to check if a given `value` contains. |
| `callback: ResultCallback<any, CallbackPayload<{ key: typeof key } & Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes `PropertyKey` and generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                                            | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement, indicating the `value` is a generic type variable `Obj` by default equal to the `object`. |

The **return value** is a `boolean` indicating whether the provided `value` is an `object` with its `key`.

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
```

[&uArr; Up](#isobjectkey) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isobjectkeys)

<br>

#### `isObjectKeyIn()`

[![update]][type-github-changelog]

Use `isObjectKeyIn()` or `is.objectKeyIn()` to check if **any** value is an [`object`][js-object] function with a key of the `PropertyKey` in it(or its prototype chain) by using the [`in`][js-in-operator] operator.

```typescript
const isObjectKeyIn = <Obj = object, Payload extends object = object>(
  value: any,
  key: PropertyKey,
  callback: ResultCallback<
    any,
    CallbackPayload<{ key: typeof key } & Payload>
  > = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Obj =>
  callback(isObject(value) ? key in value : false, value, {
    ...payload,
    key,
  } as any);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Obj`     | [`object`][ts-object] | A generic type variable `Obj` indicates the type of `value` parameter by default `object` via the return type `value is Obj`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                                     | Description |
| :----------------------------------------------------------------------------- | :---------- |
| `value: any`                                                                   | The value of any type to check against an `object` that contains(or its prototype chain) a key from a given `key`. |
| `key: PropertyKey`                                                             | A property key to check if a given `value` contains(or its prototype chain). |
| `callback: ResultCallback<any, CallbackPayload<{ key: typeof key } & Payload>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes `PropertyKey` and generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                                           | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type variable `Obj` by default equal to the `object`. |

The **return value** is a `boolean` indicating whether the provided `value` is an `object` that contains(or its prototype chain) a given `key`.

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
```

[&uArr; Up](#isobjectkeyin) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isobjectkeysin)

<br>

#### `isObjectKeys()`

[![update]][type-github-changelog]

Use `isObjectKeys()` or `is.objectKeys()` to check if **any** value is an [`object`][js-object] with its keys.
The function uses [`hasOwnProperty`][js-hasownproperty] method of [`Object`][js-object] to find enumerable and non-enumerable `PropertyKey` as `string`, `number`, `symbol` unlike `Object.keys()`, but it can't find [`getter`][js-getter] property unlike [`in`][js-in-operator] operator, which can.

```typescript
const isObjectKeys = <Obj = object, Payload extends object = object>(
  value: any,
  keys: PropertyKey[],
  callback: ResultCallback<
    any,
    CallbackPayload<{ keys: typeof keys } & Payload>
  > = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Obj =>
  callback(
    isObject(value) && isArray(keys)
    ? keys.every((key) => ({}.hasOwnProperty.call(value, key)))
    : false,
    value,
    { ...payload, keys } as any
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Obj`     | [`object`][ts-object] | A generic type variable `Obj` indicates the type of `value` parameter by default `object` via the return type `value is Obj`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                   | Description |
| :----------------------------------------------------------- | :---------- |
| `value: any`                                                 | The value of any type to check against an [`object`][js-object] that contains its keys from given `keys`. |
| `keys: PropertyKey[]`                                        | An [`Array`][js-array] of property keys to check if a given `value` contains all of them. |
| `callback: CallbackPayload<{ keys: typeof keys } & Payload>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes an `array` of `PropertyKey` and generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                         | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type variable `Obj` by default equal to the `object`. |

The **return value** is a `boolean` indicating whether the provided `value` is an `object` with its `keys`.

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

[&uArr; Up](#isobjectkeys) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isobjectsomekeys)

<br>

#### `isObjectKeysIn()`

[![new]][type-github-changelog]

Use `isObjectKeysIn()` or `is.objectKeysIn()` to check if **any** value is an [`object`][js-object] with keys in it(or its prototype chain) by using the [`in`][js-in-operator] operator.

```typescript
const isObjectKeysIn = <Obj = object, Payload extends object = object>(
  value: any,
  keys: PropertyKey[],
  callback: ResultCallback<
    any,
    CallbackPayload<{ keys: typeof keys } & Payload>
  > = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Obj =>
  callback(
    isObject(value) && isArray(keys) ? keys.every((k) => k in value) : false,
    value,
    { ...payload, keys } as any
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Obj`     | [`object`][ts-object] | A generic type variable `Obj` indicates the type of `value` parameter by default `object` via the return type `value is Obj`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                   | Description |
| :----------------------------------------------------------- | :---------- |
| `value: any`                                                 | The value of any type to check against an [`object`][js-object] that contains(or its prototype chain) keys from given `keys`. |
| `keys: PropertyKey[]`                                        | An [`Array`][js-array] of property keys to check if a given `value` contains(or its prototype chain) all of them. |
| `callback: CallbackPayload<{ keys: typeof keys } & Payload>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes an `array` of `PropertyKey` and generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                         | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type variable `Obj` by default equal to the `object`. |

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

[&uArr; Up](#isobjectkeysin) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isprimitive)

<br>

#### `isObjectSomeKeys()`

[![new]][type-github-changelog]

Use `isObjectSomeKeys()` or `is.objectSomeKeys()` to check if **any** value is an [`object`][js-object] with **some** of its keys or **some groups** of its keys of the `PropertyKey` type.
Because of using [`some()`][js-array-some] method on the given `keys` parameter of [`Array`][js-array] type relation between its elements are treated as logic `or`, and if an element is an [`Array`][js-array] type because of using [`every()`][js-array-every] method, the relation between its elements are treated as logic `and`.

```typescript
const isObjectSomeKeys = <
  Obj extends object,
  Payload extends object = object
>(
  value: any,
  keys: (PropertyKey | PropertyKey[])[],
  callback: ResultCallback<
    any,
    CallbackPayload<{ keys: typeof keys } & Payload>
  > = resultCallback,
  payload?: CallbackPayload<Payload>
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
    { ...payload, keys } as any
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Obj`     | [`object`][ts-object] | A generic type variable `Obj` constrained by the `object` indicates the type of `value` parameter by default `object` via the return type `value is Obj`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                                        | Description |
| :-------------------------------------------------------------------------------- | :---------- |
| `value: any`                                                                      | The value of any type to check against an [`object`][js-object] that contains some of its keys or some groups of its keys from a given `keys`. |
| `keys: (PropertyKey \| PropertyKey[])[]`                                          | An [`Array`][js-array] of property names or a two-dimensional array of property names to check if the given `value` contains some of them or some groups of them. |
| `callback: ResultCallback<any, CallbackPayload<{ keys: typeof keys } & Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes an `array` of `PropertyKey` and generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                                              | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type variable `Obj` by default equal to the `object`. |

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

[&uArr; Up](#isobjectsomekeys) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isregexp)

<br>

#### `isPrimitive()`

[![update]][type-github-changelog]

Use `isPrimitive()` or `is.primitive()` to check if **any** value is the [`Primitive`](#primitive) type or specific type from a given `type` of the [`Primitives`](#primitives).

```typescript
const isPrimitive = <
  Type extends Primitive,
  Payload extends object = object
>(
  value: any,
  type?: Primitives,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Type =>
  isStringType(type)
  ? {
      bigint: isBigInt,
      boolean: isBooleanType,
      number: isNumberType,
      null: isNull,
      string: isStringType,
      symbol: isSymbol,
      undefined: isUndefined,
    }[type](value, callback, payload)
  : callback(
      isNull(value) ||
        (typeof value !== 'object' && typeof value !== 'function'),
      value,
      payload
    );
```

**Generic type variables:**

| Name      | Default value             | Description |
| :-------- | :------------------------ | :---------- |
| `Type`    | [`Primitive`](#primitive) | A generic type variable `Type` constrained by the [`Primitive`](#primitive) type indicates the type of `value` parameter via the return type `value is Type`. |
| `Payload` | [`object`][ts-object]     | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `type?: Primitives`                                       | An optional value of [`Primitives`](#primitives) type indicates against which type the provided `value` is checked. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is Type` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type variable `Type` by default equal to [`Primitive`](#primitive). |

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

[&uArr; Up](#isprimitive) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isstring)

<br>

#### `isRegExp()`

[![update]][type-github-changelog]

Use `isRegExp()` or `is.regexp()` to check if **any** value is a regular expression of the type obtained from its `Object.prototype` equal to `'regexp'`, or an [`object`][js-object] type, and an instance of [`RegExp`][js-regexp].

```typescript
const isRegExp = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is RegExp =>
  callback(
    (typeOf(value) === 'regexp' || typeof value === 'object') &&
    value instanceof RegExp,
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns           | Type      | Description |
| :---------------- | :-------: | :---------- |
| `value is RegExp` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a regular expression of a [`RegExp`][js-regexp]. |

The **return value** is a `boolean` indicating whether the provided `value` is a regular expression.

**Usage:**

```typescript
// Example usage.
import { isRegExp } from '@angular-package/type';

isRegExp(/[^a-z]/g); // true; The return type `value is RegExp`
```

[&uArr; Up](#isregexp) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isstringincludes)

<br>

#### `isString()`

[![update]][type-github-changelog]

Use `isString()` or `is.string()` to check if **any** value is a [`string`][js-string] type or an instance of [`String`][js-string].

```typescript
const isString = <
  Type extends AnyString = string,
  Payload extends object = object
>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Type =>
  callback(isStringType(value) || isStringObject(value), value, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | [`string`][ts-string] | A generic type variable `Type` guarded by [`AnyString`](#anystring) by default `string` indicates the type of the `value` via the return type `value is Type`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is Type` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type variable `Type` by default equal to the `string`. |

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

[&uArr; Up](#isstring) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isstringincludessome)

<br>

#### `isStringIncludes()`

[![new]][type-github-changelog]

Use `isStringIncludes()` or `is.stringIncludes()` to check if **any** value is a [`string`][js-string] type or an instance of [`String`][js-string] that **includes all** of the specified **words/sentences**.

```typescript
const isStringIncludes = <
  Type extends AnyString = string,
  Payload extends object = object
>(
  value: any,
  includes: string[],
  callback: ResultCallback<
    any,
    CallbackPayload<{ includes: typeof includes } & Payload>
  > = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Type =>
  callback(
    isString(value)
    ? isArray(includes)
      ? includes.every((include) => value.valueOf().includes(include))
      : false
    : false,
    value,
    { ...payload, includes, } as any
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | [`string`][ts-string] | A generic type variable `Type` guarded by [`AnyString`](#anystring) by default `string` indicates the type of the `value` via the return type `value is Type`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                                                | Description |
| :---------------------------------------------------------------------------------------- | :---------- |
| `value: any`                                                                              | The value of any type to check against the string that contains **words/sentences** from a given `includes`.  |
| `includes: string[]`                                                                      | An [`Array`][js-array] of [`string`][js-string] as **words/sentences** to be **case-sensitive** searched for within a given `value`. |
| `callback: ResultCallback<any, CallbackPayload<{ includes: typeof includes } & Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes an `array` of `string` and generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                                                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is Type` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type variable `Type` by default equal to the `string`. |

The **return value** is a `boolean` indicating whether the provided `value` is a [`string`][js-string] type or an instance of [`String`][js-string] that includes all of the specified **words/sentences**.

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

[&uArr; Up](#isstringincludes) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isstringlength)

<br>

#### `isStringIncludesSome()`

[![new]][type-github-changelog]

Use `isStringIncludesSome()` or `is.stringIncludesSome()` to check if **any** value is a [`string`][js-string] type or an instance of [`String`][js-string] that includes **some** of the specified **words/sentences**.

```typescript
const isStringIncludesSome = <
  Type extends AnyString = string,
  Payload extends object = object
>(
  value: any,
  includes: string[],
  callback: ResultCallback<
    any,
    CallbackPayload<{ includes: typeof includes } & Payload>
  > = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Type =>
  callback(
    isString(value)
    ? isArray(includes)
      ? includes.some((include) => value.valueOf().includes(include))
      : false
    : false,
    value,
    { ...payload, includes } as any
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | [`string`][ts-string] | A generic type variable `Type` guarded by [`AnyString`](#anystring) by default `string` indicates the type of the `value` via the return type `value is Type`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                                                | Description |
| :---------------------------------------------------------------------------------------- | :---------- |
| `value: any`                                                                              | The value of any type to check against the string that `includes` **some** of the **words/sentences**. |
| `includes: string[]`                                                                      | An [`Array`][js-array] of [`string`][js-string] as **words/sentences** to be **case-sensitive** searched for within a given `value`. |
| `callback: ResultCallback<any, CallbackPayload<{ includes: typeof includes } & Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes an `array` of `string` and generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                                                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is Type` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type variable `Type` by default equal to the `string`. |

The **return value** is a `boolean` indicating whether the provided `value` is a [`string`][js-string] type or an instance of [`String`][js-string] that includes **some** of the specified **words/sentences**.

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

[&uArr; Up](#isstringincludessome) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isstringobject)

<br>

#### `isStringLength()`

[![update]][type-github-changelog]

Use `isStringLength()` or `is.stringLength()` to check if **any** value is a [`string`][js-string] type or an instance of [`String`][js-string] of `length` within the specified range.

```typescript
const isStringLength = <
  Type extends AnyString = string,
  Min extends number = number,
  Max extends number = number,
  Payload extends object = object
>(
  value: any,
  length: MinMax<Min, Max>,
  callback: ResultCallback<
    any,
    CallbackPayload<MinMax<Min, Max> & Payload>
  > = resultCallback,
  payload?: CallbackPayload<Payload>
): value is StringOfLength<Min, Max, Type> =>
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
      ...payload,
      min: length?.min,
      max: length?.max,
    } as Payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | [`string`][ts-string] | A generic type variable `Type` guarded by [`AnyString`](#anystring) by default `string` indicates the type of the `value` via the return type `value is StringOfLength<Min, Max, Type>`. |
| `Min`     | [`number`][ts-number] | A generic type variable `Min` constrained with the `number` type, by default of value captured from optional `min` of provided `length` that indicates the **minimum** length of the provided `value` via the return type `value is StringOfLength<Min, Max, Type>` |
| `Max`     | [`number`][ts-number] | A generic type variable `Max` constrained with the `number` type, by default of value captured from optional `max` of provided `length` that indicates the **maximum** length of the provided `value` via the return type `value is StringOfLength<Min, Max, Type>` |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                                   | Description |
| :--------------------------------------------------------------------------- | :---------- |
| `value: any`                                                                 | The value of any type to check. |
| `length: MinMax<Min, Max>`                                                   | An [`object`][js-object] of optional minimum and a maximum `length` of the given `value`. |
| `callback: ResultCallback<any, CallbackPayload<MinMax<Min, Max> & Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variables `Min` and `Max` and generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                                         | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns                                   | Type      | Description |
| :---------------------------------------- | :-------: | :---------- |
| `value is StringOfLength<Min, Max, Type>` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type [`StringOfLength`](#stringoflength) that takes generic type variables `Min` and `Max` as the **length** of the supplied value, and generic type variable `Type` as the type of the supplied value. |

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

[&uArr; Up](#isstringlength) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isstringtype)

<br>

#### `isStringObject()`

[![update]][type-github-changelog]

Use `isStringObject()` or `is.stringObject()` to check if **any** value is of the type obtained from its `Object.prototype` equal to `'string'` or an [`object`][js-object] type, and an instance of [`String`][js-string].

```typescript
const isStringObject = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is String =>
  callback(
    (typeOf(value) === 'string' || typeof value === 'object') &&
    value instanceof String,
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

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

[&uArr; Up](#isstringobject) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#issymbol)

<br>

#### `isStringType()`

[![update]][type-github-changelog]

Use `isStringType()` or `is.stringType()` to check if **any** value is a [`string`][js-string] type.

```typescript
const isStringType = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is string =>
  callback(typeof value === 'string', value, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

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

[&uArr; Up](#isstringtype) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#istrue)

<br>

#### `isSymbol()`

[![update]][type-github-changelog]

Use `isSymbol()` or `is.symbol()` to check if **any** value is a [`symbol`][js-symbol] type.

```typescript
const isSymbol = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is symbol =>
  callback(typeof value === 'symbol', value, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

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

[&uArr; Up](#issymbol) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#istype)

<br>

#### `isTrue()`

[![update]][type-github-changelog]

Use `isTrue()` or `is.true()` to check if **any** value is a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] equal to `true`.

```typescript
const isTrue = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is true =>
  callback(isBoolean(value) ? value.valueOf() === true : false, value, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is true` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is `true`. |

The **return value** is a `boolean` indicating whether the provided `value` is a `boolean` equal to `true`.

**Usage:**

```typescript
// Example usage.
import { isTrue } from '@angular-package/type';

isTrue(false); // Returns `false` as `value is true`
```

[&uArr; Up](#istrue) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isundefined)

<br>

#### `isType()`

[![update]][type-github-changelog]

Use `isType()` or `is.type()` to check if **any** value is the type of [`Type`](#type) from a given `type` parameter of the [`Types`](#types).

```typescript
const isType = <T extends Type, Payload extends object = object>(
  value: any,
  type: Types<T>,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is T =>
  isStringType(type)
  ? {
      bigint: isBigInt,
      boolean: isBooleanType,
      function: isFunction,
      number: isNumberType,
      object: isObject,
      null: isNull,
      string: isStringType,
      symbol: isSymbol,
      undefined: isUndefined,
    }[type as Primitives](value, callback, payload)
  : isNotNull(type)
  ? isInstance(value, type, callback, payload)
  : false;
```

**Generic type variables:**

| Name      | Default value        | Description |
| :-------- | :------------------- | :---------- |
| `T`       | [`Type`](#type)      | A generic type variable `T` constrained by the [`Type`](#type) indicates the type of `value` parameter via the return type `value is T`. |
| `Payload` | [`object`][ts-object]| The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `T` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check against the type of given `type` of [`Types`](#types). |
| `type: Types<T>`                                          | A value of [`string`][js-string] or [`Constructor`](#constructor) type of the `Types` indicates against which type the provided `value` is checked. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns      | Type      | Description |
| :----------- | :-------: | :---------- |
| `value is T` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type variable `T` by default equal to the [`Type`](#type) but captured type [`class`][ts-classes] of the supplied `type` changes it to the class name. |

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
    value: {},
    id: 15,
    database: 'Persons'
  }
  */
  return result;
}, { id: 15, database: 'Persons' }); // Returns `true` as `value is Person`
```

[&uArr; Up](#istype) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isnot-functions)

<br>

#### `isUndefined()`

[![update]][type-github-changelog]

Use `isUndefined()` or `is.undefined()` to check if **any** value is an [`undefined`][js-undefined] type.

```typescript
const isUndefined = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is undefined =>
  callback(typeof value === 'undefined', value, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                | Description |
| :-------------------------------------------------------- | :---------- |
| `value: any`                                              | The value of any type to check. |
| `callback: ResultCallback<any, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

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

[&uArr; Up](#isundefined)

<br>

### `isNot` functions

| Function                               | Checks if any value is not |
| :------------------------------------- | :------------------------- |
| [`isNotBoolean()`](#isnotboolean)      | the type obtained from its `Object.prototype` equal to `'boolean'`, not a `boolean` type and not an instance of [`Boolean`][js-boolean]. |
| [`isNotDefined()`](#isnotdefined)      | the type obtained from its `Object.prototype` equal to `'undefined'`, **not** an `undefined` type and is **not** equal to [`undefined`][js-undefined]. |
| [`isNotFunction()`](#isnotfunction)    | the type obtained from its `Object.prototype` equal to `'function'`, **not** a `function` type and **not** an instance of [`Function`][js-function]. |
| [`isNotNull()`](#isnotnull)            | the type obtained from its `Object.prototype` equal to `'null'` and **not** equal to [`null`][js-null]. |
| [`isNotNumber()`](#isnotnumber)        | the type obtained from its `Object.prototype` equal to `'number'`, **not** a `number` type and **not** an instance of [`Number`][js-number]. |
| [`isNotString()`](#isnotstring)        | the type obtained from its `Object.prototype` equal to `'string'`, **not** a `string` type and **not** an instance of [`String`][js-string]. |
| [`isNotUndefined()`](#isnotundefined)  | the type obtained from its `Object.prototype` equal to `'undefined'`, **not** an `undefined` type and **not** equal to [`undefined`][js-undefined]. |

<br>

#### `isNotBoolean()`

[![update]][type-github-changelog]

Use `isNotBoolean()` or `is.not.boolean()` to check if the value of a generic type variable `Type` is **not** the type obtained from its `Object.prototype` equal to `'boolean'`, not a `boolean` type and not an instance of [`Boolean`][js-boolean].

```typescript
const isNotBoolean = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Never<AnyBoolean, Type> =>
  callback(
    typeOf(value) !== 'boolean' &&
    typeof value !== 'boolean' &&
    value instanceof Boolean === false,
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | From the `value`      | A generic type variable `Type` indicates the type of `value` parameter via the return type `value is Never<AnyBoolean, Type>`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `value: Type`                                              | The value of a generic type variable `Type`, by default of type captured from the provided `value` to check. |
| `callback: ResultCallback<Type, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns                            | Type      | Description |
| :--------------------------------- | :-------: | :---------- |
| `value is Never<AnyBoolean, Type>` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type [`Never`](#never) that takes a generic type variable `Type` by default of value captured from the supplied `value` which changes to [`never`][ts-never] on the captured type [`AnyBoolean`](#anyboolean). |

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

[&uArr; Up](#isnotboolean) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isnotfunction)

<br>

#### `isNotDefined()`

[![update]][type-github-changelog]

Use `isNotDefined()` or `is.not.defined()` to check if the value of a generic `Type` is **not** the type obtained from its `Object.prototype` equal to `'undefined'`, **not** an `undefined` type and is **not** equal to [`undefined`][js-undefined].

```typescript
const isNotDefined = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Undefined<Type> =>
  callback(
    typeOf(value) === 'undefined' &&
    typeof value === 'undefined' &&
    value === undefined,
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | From the `value`      | A generic type variable `Type` indicates the type of `value` parameter via the return type `value is Undefined<Type>`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `value: Type`                                              | The value of a generic type variable `Type`, by default of type captured from the provided `value` to check. |
| `callback: ResultCallback<Type, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns                    | Type      | Description |
| :------------------------- | :-------: | :---------- |
| `value is Undefined<Type>` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type [`Undefined`](#undefined) that takes a generic type variable `Type` by default of value captured from the supplied `value` which changes to [`never`][ts-never] on the captured type [`undefined`][js-undefined]. |

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

[&uArr; Up](#isnotdefined) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isnotnull)

<br>

#### `isNotFunction()`

[![update]][type-github-changelog]

Use `isNotFunction()` or `is.not.function()` to check if the value of a generic `Type` is **not** the type obtained from its `Object.prototype` equal to `'function'`, **not** a `function` type and **not** an instance of [`Function`][js-function].

```typescript
const isNotFunction = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Never<Function, Type> =>
  callback(
    typeOf(value) !== 'function' &&
    typeof value !== 'function' &&
    value instanceof Function === false,
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | From the `value`      | A generic type variable `Type` indicates the type of `value` parameter via the return type `value is Never<Function, Type>`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `value: Type`                                              | The value of a generic type variable `Type`, by default of type captured from the provided `value` to check. |
| `callback: ResultCallback<Type, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns                          | Type      | Description |
| :------------------------------- | :-------: | :---------- |
| `value is Never<Function, Type>` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type [`Never`](#never) that takes a generic type variable `Type` by default of value captured from the supplied `value`, but on the captured type [`Function`][js-function] changes to [`never`][ts-never] . |

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

[&uArr; Up](#isnotfunction) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isnotnumber)

<br>

#### `isNotNull()`

[![update]][type-github-changelog]

Use `isNotNull()` or `is.not.null()` to check if the value of a generic `Type` is **not** the type obtained from its `Object.prototype` equal to `'null'` and **not** equal to [`null`][js-null].

```typescript
const isNotNull = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Never<null, Type> =>
  callback(typeOf(value) !== 'null' && value !== null, value, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | From the `value`      | A generic type variable `Type` indicates the type of `value` parameter via the return type `value is Never<null, Type>`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `value: Type`                                              | The value of any type, by default of type captured from the provided `value` to check. |
| `callback: ResultCallback<Type, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns                      | Type      | Description |
| :--------------------------- | :-------: | :---------- |
| `value is Never<null, Type>` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type [`Never`](#never) that takes a generic type variable `Type` by default of value captured from the supplied `value`, but on the captured [`null`][js-null] changes to [`never`][ts-never]. |

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

[&uArr; Up](#isnotnull) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isnotstring)

<br>

#### `isNotNumber()`

[![update]][type-github-changelog]

Use `isNotNumber()` or `is.not.number()` to check if the value of a generic `Type` is **not** the type obtained from its `Object.prototype` equal to `'number'`, **not** a `number` type and **not** an instance of [`Number`][js-number].

```typescript
const isNotNumber = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Never<AnyNumber, Type> =>
  callback(
    typeOf(value) !== 'number' &&
    typeof value !== 'number' &&
    value instanceof Number === false,
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | From the `value`      | A generic type variable `Type` indicates the type of `value` parameter via the return type `value is Never<AnyNumber, Type>`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `value: Type`                                              | The value of any type, by default of type captured from the provided `value` to check. |
| `callback: ResultCallback<Type, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns                           | Type      | Description |
| :-------------------------------- | :-------: | :---------- |
| `value is Never<AnyNumber, Type>` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type [`Never`](#never) that takes a generic type variable `Type` from the `value` and `Not` equal to [`AnyNumber`](#anynumber), which makes it [`never`][ts-never] [`AnyNumber`](#anynumber) but of type captured from the supplied `value`. |

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

[&uArr; Up](#isnotnumber) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#isnotundefined)

<br>

#### `isNotString()`

[![update]][type-github-changelog]

Use `isNotString()` or `is.not.string()` to check if the value of a generic `Type` is **not** the type obtained from its `Object.prototype` equal to `'string'`, **not** a `string` type and **not** an instance of [`String`][js-string].

```typescript
const isNotString = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Never<AnyString, Type> =>
  callback(
    typeOf(value) !== 'string' &&
    typeof value !== 'string' &&
    value instanceof String === false,
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | From the `value`      | A generic type variable `Type` indicates the type of `value` parameter via the return type `value is Never<AnyString, Type>`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `value: Type`                                              | The value of any type, by default of type captured from the provided `value` to check. |
| `callback: ResultCallback<Type, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

The function returns statement `value is Never<AnyString, Type>`.

| Type      | Description |
| :-------: | :---------- |
| `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type [`Never`](#never) that takes a generic type variable `Type` from the `value` and `Not` equal to [`AnyString`](#anystring), which makes it [`never`][ts-never] [`AnyString`](#anystring) but of type captured from the supplied `value`. |

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

[&uArr; Up](#isnotstring) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#check-objects)

<br>

#### `isNotUndefined()`

[![update]][type-github-changelog]

Use `isNotUndefined()` or `is.not.undefined()` to check if the value of a generic `Type` is **not** the type obtained from its `Object.prototype` equal to `'undefined'`, **not** an `undefined` type and **not** equal to [`undefined`][js-undefined].

```typescript
const isNotUndefined = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, CallbackPayload<Payload>> = resultCallback,
  payload?: CallbackPayload<Payload>
): value is Defined<Type> =>
  callback(
    typeOf(value) !== 'undefined' &&
    typeof value !== 'undefined' &&
    value !== undefined,
    value,
    payload
  );
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | From the `value`      | A generic type variable `Type` indicates the type of the `value` parameter via the return type `value is Defined<Type>`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `value: Type`                                              | The value of any type, by default of type captured from the provided `value` to check. |
| `callback: ResultCallback<Type, CallbackPayload<Payload>>` | A callback [`function`][js-function] of [`ResultCallback`](#resultcallback) type with parameters, the `value` that has been checked, the `result` of this check, and `payload` of the default generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` as optional properties from the provided `payload`, to handle them before the `result` return. By default, it uses [`resultCallback()`](#default-resultcallback) function. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns                  | Type      | Description |
| :----------------------- | :-------: | :---------- |
| `value is Defined<Type>` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type [`Defined`](#defined) that takes a generic type variable `Type` of value by default equal to the type captured from the supplied `value` parameter excepts [`undefined`][js-undefined] which changes to `never`.  |

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

[&uArr; Up](#isnotundefined) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guard)

<br>

#### `ValueParser`

The type of [`function`][ts-function] to convert the value of [`any`][ts-any] type to generic type variable `Type`, by default equal to [`string`][ts-string].

```typescript
type ValueParser<Type = string> = (value: any) => Type;
```

[&uArr; Up](#common) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#changelog)

<br>

## Experimental

#### `BigIntObject`

The object handles creating and getting the [`BigInt`][js-bigint] with [`BigInt()`][js-bigintconstructor].

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

The object handles creating and getting the [`Boolean`][js-boolean] object instance with [`Boolean()`][js-booleanconstructor].

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

The object handles creating and getting the [`Number`][js-number] object instance with [`Number()`][js-numberconstructor].

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

The object handles creating and getting the [`String`][js-string] object instance with [`String()`][js-stringconstructor].

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

The object handles creating and getting the [`Symbol`][js-symbol] object instance with [`Symbol()`][js-symbolconstructor].

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

## Changelog

The **changelog** of this package is based on [*keep a changelog*](https://keepachangelog.com/en/1.0.0/). To read it, click on the [CHANGELOG.md][type-github-changelog] link.

> A changelog is a file which contains a curated, chronologically ordered list of notable changes for each version of a project. - [*keep a changelog*](https://keepachangelog.com/en/1.0.0/)

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

<!-- Discord -->
[discord-badge]: https://img.shields.io/discord/925168966098386944
[discord-channel]: https://discord.com/channels/925168966098386944/925168966098386948

<!-- Gitter -->
[gitter-badge]: https://badges.gitter.im/angularpackage/Lobby.svg
[gitter-chat]: https://gitter.im/angularpackage/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge

<!-- Twitter -->
[twitter-badge]: https://img.shields.io/twitter/url?style=social&label=Follow%20%40angularpackage&url=https%3A%2F%2Ftwitter.com%2Fangularpackage
[twitter-follow]: https://twitter.com/angularpackage

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/

<!-- This package: type -->
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
  [type-github-changelog]: https://github.com/angular-package/type/blob/main/CHANGELOG.md

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

<!-- Package: name -->
  <!-- npm -->
  [name-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fname.svg
  [name-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fname.png
  [name-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fname
  [name-npm-readme]: https://www.npmjs.com/package/@angular-package/name#readme

  <!-- GitHub -->
  [name-github-readme]: https://github.com/angular-package/name#readme

<!-- Package: preferences -->
  <!-- npm -->
  [preferences-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fpreferences.svg
  [preferences-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fpreferences.png
  [preferences-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fpreferences
  [preferences-npm-readme]: https://www.npmjs.com/package/@angular-package/preferences#readme

  <!-- GitHub -->
  [preferences-github-readme]: https://github.com/angular-package/preferences#readme

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

<!-- Package: range -->
  <!-- npm -->
  [range-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Frange.svg
  [range-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Frange.png
  [range-npm-badge]: https://badge.fury.io/js/%40angular-package%2Frange
  [range-npm-readme]: https://www.npmjs.com/package/@angular-package/range#readme

  <!-- GitHub -->
  [range-github-readme]: https://github.com/angular-package/range#readme

<!-- Package: reactive -->
  <!-- npm -->
  [reactive-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Freactive.svg
  [reactive-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Freactive.png
  [reactive-npm-badge]: https://badge.fury.io/js/%40angular-package%2Freactive
  [reactive-npm-readme]: https://www.npmjs.com/package/@angular-package/reactive#readme

  <!-- GitHub -->
  [reactive-github-readme]: https://github.com/angular-package/reactive#readme

<!-- Package: storage -->
  <!-- npm -->
  [storage-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fstorage.svg
  [storage-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fstorage.png
  [storage-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fstorage
  [storage-npm-readme]: https://www.npmjs.com/package/@angular-package/storage#readme

  <!-- GitHub -->
  [storage-github-readme]: https://github.com/angular-package/storage#readme

<!-- Package: tag -->
  <!-- npm -->
  [tag-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftag.svg
  [tag-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftag.png
  [tag-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftag
  [tag-npm-readme]: https://www.npmjs.com/package/@angular-package/tag#readme

  <!-- GitHub -->
  [tag-github-readme]: https://github.com/angular-package/tag#readme

<!-- Package: testing -->
  <!-- npm -->
  [testing-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftesting.svg
  [testing-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftesting.png
  [testing-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftesting
  [testing-npm-readme]: https://www.npmjs.com/package/@angular-package/testing#readme

  <!-- GitHub -->
  [testing-github-readme]: https://github.com/angular-package/testing#readme

<!-- Package: text -->
  <!-- npm -->
  [text-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftext.svg
  [text-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftext.png
  [text-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftext
  [text-npm-readme]: https://www.npmjs.com/package/@angular-package/text#readme

  <!-- GitHub -->
  [text-github-readme]: https://github.com/angular-package/text#readme

<!-- Package: type -->
  <!-- npm -->
  [type-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftype.svg
  [type-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftype.png
  [type-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftype
  [type-npm-readme]: https://www.npmjs.com/package/@angular-package/type#readme

  <!-- GitHub -->
  [type-github-readme]: https://github.com/angular-package/type#readme

<!-- Package: ui -->
  <!-- npm -->
  [ui-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fui.svg
  [ui-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fui.svg
  [ui-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fui
  [ui-npm-readme]: https://www.npmjs.com/package/@angular-package/ui#readme

  <!-- GitHub -->
  [ui-github-readme]: https://github.com/angular-package/ui#readme

<!-- Package: wrapper -->
  <!-- npm -->
  [wrapper-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fwrapper.svg
  [wrapper-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fwrapper.png
  [wrapper-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fwrapper
  [wrapper-npm-readme]: https://www.npmjs.com/package/@angular-package/wrapper#readme

  <!-- GitHub -->
  [wrapper-github-readme]: https://github.com/angular-package/wrapper#readme

<!-- Angular -->
[angular-component-factory-resolver]: https://angular.io/api/core/ComponentFactoryResolver
[angular-view-container-ref]: https://angular.io/api/core/ViewContainerRef
[angular-component-ref]: https://angular.io/api/core/ComponentRef

<!-- Angular -->
[angular-component-factory-resolver]: https://angular.io/api/core/ComponentFactoryResolver
[angular-view-container-ref]: https://angular.io/api/core/ViewContainerRef

<!-- Jasmine -->
[jasmine-describe]: https://jasmine.github.io/api/3.8/global.html#describe
[jasmine-expect]: https://jasmine.github.io/api/3.8/global.html#expect
[jasmine-it]: https://jasmine.github.io/api/3.8/global.html#it
[jasmine-matchers]: https://jasmine.github.io/api/3.9/matchers.html

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

[js-getter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get

[js-hasownproperty]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

[js-instanceof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
[js-in-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
[js-isarray]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
[js-isfinite]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite
[js-isfrozen]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
[js-isnan]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

[js-map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

[js-null]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
[js-number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[js-numberconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number
[js-numberisfinite]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
[js-numberisinteger]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
[js-numberisnan]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
[js-numberissafeinteger]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger

[js-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[js-object-define-property]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
[js-object-getownpropertydescriptor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
[js-object-getOwnpropertydescriptors]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors

[js-primitive]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[js-promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

[js-rangeerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError
[js-referenceerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
[js-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[js-rest-parameter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

[js-set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[js-setter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
[js-static]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
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
[ts-any]: https://www.typescriptlang.org/docs/handbook/basic-types.html#any
[ts-boolean]: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
[ts-classes]: https://www.typescriptlang.org/docs/handbook/2/classes.html
[ts-enums]: https://www.typescriptlang.org/docs/handbook/enums.html
[ts-function]: https://www.typescriptlang.org/docs/handbook/2/functions.html
[ts-interface]: https://www.typescriptlang.org/docs/handbook/interfaces.html#our-first-interface
[ts-never]: https://www.typescriptlang.org/docs/handbook/basic-types.html#never
[ts-null]: https://www.typescriptlang.org/docs/handbook/basic-types.html#null-and-undefined
[ts-number]: https://www.typescriptlang.org/docs/handbook/basic-types.html#number
[ts-object]: https://www.typescriptlang.org/docs/handbook/basic-types.html#object
[ts-string]: https://www.typescriptlang.org/docs/handbook/basic-types.html#string
[ts-undefined]: https://www.typescriptlang.org/docs/handbook/basic-types.html#null-and-undefined
[ts-unknown]: https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown
