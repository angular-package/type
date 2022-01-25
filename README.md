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
