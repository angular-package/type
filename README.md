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

To determine any value is to know what type and instance the value can be, when and what function or operators to use, and for this purpose [`recognizeValue()`](#recognizevalue) function was created, and it's not enough because it must be known what are the risks of using them.

#### `recognizeValue()`

[![new]][type-github-changelog]

Gets recognized types and instances of given `value` by using:

Function:

* [`isClass()`](#isclass),
* [`isFinite()`][js-isfinite],
* [`isFunction()`][js-function],
* [`isNaN()`][js-isnan],
* [`typeOf()`](#typeof),

Method:

* [`Array.isArray`][js-isarray],
* [`Number.isInteger()`][js-numberisinteger],
* [`Number.isFinite()`][js-numberisfinite],
* [`Number.isNaN()`][js-numberisnan],
* [`Number.isSafeInteger()`][js-numberissafeinteger],
* [`Object.hasOwnProperty()`][js-hasownproperty]

Operator:

* [`in`][js-in-operator] operator,
* [`instanceof`][js-instanceof] operator,
* [`typeof`][js-typeof] operator,

```typescript
const recognizeValue = (
  value: any,
  onlyTrue: boolean = true,
  instances: any[] = []
): OfRecognized => {
  // Recognize types.
  const ofRecognized: OfRecognized = {
    'Array.isArray': Array.isArray(value),
    isClass: is.class(value),
    isFunction: is.function(value),
    'Number.isInteger': Number.isInteger(value),
    'Number.isFinite': Number.isFinite(value),
    'Number.isNaN': Number.isNaN(value),
    'Number.isSafeInteger': Number.isSafeInteger(value),
    typeOf: typeOf(value),
    typeof: typeof value,
  };

  try { Object.assign(ofRecognized, { isFinite: isFinite(value) }); } catch (e) {}
  try { Object.assign(ofRecognized, { isNaN: isNaN(value) }); } catch (e) {}

  // Recognize instances.
  RECOGNIZE_INSTANCES.concat(instances as any).forEach((instance) => (
    Object.assign(ofRecognized, { [instance.name]: value instanceof instance })
  ));

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
    payload.name // Returns `'isClass'`
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
    payload.name // Returns `'isDate'`
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
    payload.name // Returns `'isDefined'`
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
    payload.name // Returns `'isFalse'`
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
    payload.name // Returns `'isFunction'`
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
      name: isNumberBetween.name,
      min: range?.min,
      max: range?.max,
      ...payload,
    } as any
  );
```

**Generic type variables:**

| Name      | Default value             | Description |
| :-------- | :------------------------ | :---------- |
| `Type`    | `number`                  | A generic type variable `Type` guarded by [`AnyNumber`](#anynumber) by default of `number` indicates the type of the `value` via the return type `value is NumberBetween<Min, Max, Type>`. |
| `Min`     | From the `min` of `range` | A generic type variable `Min` constrained by the `number` type, by default of value captured from optional `min` of the provided `range` that indicates the **minimum** range of the provided `value` via the return type `value is NumberBetween<Min, Max, Type>` |
| `Max`     | From the `max` of `range` | A generic type variable `Max` constrained by the `number` type, by default of value captured from optional `max` of the provided `range` that indicates the **maximum** range of the provided `value` via the return type `value is NumberBetween<Min, Max, Type>` |
| `Payload` | [`object`][ts-object]                  | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

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
Because of using [`some()`][js-array-some] on the provided `keys` parameter of [`Array`][js-array] its elements are treated as logic `or`, and if an element is an [`Array`][js-array] type its elements are treated as logic `and` because of using [`every()`][js-array-every].

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
| `keys: (PropertyKey | PropertyKey[])[]`                                           | An [`Array`][js-array] of property names or a two-dimensional array of property names to check if the given `value` contains some of them or some groups of them. |
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
| `Type`    | [`string`][ts-string] | A generic type variable `Type` guarded by [`AnyString`](#anystring) by of default `string` indicates the type of the `value` via the return type `value is StringOfLength<Min, Max, Type>`. |
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
    name: 'isInstance',
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

### Check objects

#### `are.`

[![update]][type-github-changelog]

The `object` consists of **are** prefixed functions.

```typescript
const are: Are = Object.freeze({
  bigint: areBigInt, // From the `5.0.0` version.
  boolean: areBoolean, // From the `5.0.0` version.
  date: areDate, // From the `5.0.0` version.
  defined: areDefined, // From the `5.0.0` version.
  false: areFalse, // From the `5.0.0` version.
  null: areNull, // From the `5.0.0` version.
  number: areNumber, // From the `5.0.0` version.
  regexp: areRegExp, // From the `5.0.0` version.
  string: areString,
  symbol: areSymbol, // From the `5.0.0` version.
  true: areTrue, // From the `5.0.0` version.
  undefined: areUndefined // From the `5.0.0` version.
});
```

<br>

#### `is.`

[![update]][type-github-changelog]

The [`object`][js-object] contains prefixed with **is** functions and prefixed with **isNot** functions in property `not`.

```typescript
const is: Is = Object.freeze({
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
  objectKeysIn: isObjectKeysIn, // From the `5.0.0` version.
  objectSomeKeys: isObjectSomeKeys, // From the `5.0.0` version.
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
});
```

<br>

#### `isNot.`

The [`object`][js-object] consists of **isNot** functions.

```typescript
const isNot: IsNot = Object.freeze({
  boolean: isNotBoolean,
  defined: isNotDefined,
  function: isNotFunction,
  null: isNotNull,
  number: isNotNumber,
  string: isNotString,
  undefined: isNotUndefined
});
```

[&uArr; Up](#check-objects)

<br>

## Guard

### `guard` functions

| Function                                        | Guards the value to be |
| :---------------------------------------------- | :--------------------- |
| [`guardArray()`](#guardarray)                   | an [`array`][js-array] of a generic type variable `Type`. |
| [`guardBigInt()`](#guardbigint)                 | a [`bigint`][js-bigint]. |
| [`guardBoolean()`](#guardboolean)               | [`boolean`][js-boolean] of any type. |
| [`guardClass()`](#guardclass)                   | a [`class`][ts-classes] of generic type variable `Class`. |
| [`guardDate()`](#guarddate)                     | a [`Date`][js-date] type. |
| [`guardDefined()`](#guarddefined)               | **defined**. |
| [`guardFalse()`](#guardfalse)                   | `false`. |
| [`guardFunction()`](#guardfunction)             | a [`Function`][js-function]. |
| [`guardInstance()`](#guardinstance)             | an instance of the given `constructor` of [`Constructor`](#constructor) type. |
| [`guardKey()`](#guardkey)                       | one of the `string`, `number`, or `symbol`. |
| [`guardNull()`](#guardnull)                     | `null`. |
| [`guardNumber()`](#guardnumber)                 | a [`number`][js-number] of any type. |
| [`guardNumberBetween()`](#guardnumberbetween)   | [`number`][js-number] between the specified range. |
| [`guardObject()`](#guardobject)                 | [`object`][js-object] of a generic type variable `Obj`. |
| [`guardObjectKey()`](#guardobjectkey)           | [`object`][js-object] of a generic `Obj` type that contains the given `key`. |
| [`guardObjectKeyIn()`](#guardobjectkeyin)       | [`object`][js-object] of a generic type variable `Obj` that contains(or its prototype chain) the given `key`. |
| [`guardObjectKeys()`](#guardobjectkeys)         | [`object`][js-object] of a generic type variable `Obj` with its specified `keys`. |
| [`guardObjectKeysIn()`](#guardobjectkeysin)     | [`object`][js-object] of a generic type variable `Obj` with specified keys in it(or its prototype chain). |
| [`guardObjectSomeKeys()`](#guardobjectsomekeys) | [`object`][js-object] of a generic type variable `Obj` with some of its `keys` or some groups of its `keys`. |
| [`guardPrimitive()`](#guardprimitive)           | the [`Primitive`](#primitive) type or the given `type` of the [`Primitives`](#primitives). |
| [`guardRegExp()`](#guardregexp)                 | a [`RegExp`][js-regexp]. |
| [`guardString()`](#guardstring)                 | [`string`][js-string] of any type. |
| [`guardStringLength()`](#guardstringlength)     | a [`string`][js-string] of a **length** between the specified range. |
| [`guardSymbol()`](#guardsymbol)                 | a [`symbol`][js-symbol]. |
| [`guardTrue()`](#guardtrue)                     | `true`. |
| [`guardType()`](#guardtype)                     | the [`Type`](#type) from a given `type` of the [`Types`](#types). |
| [`guardUndefined()`](#guardundefined)           | [`undefined`][js-undefined]. |

<br>

#### `guardArray()`

[![update]][type-github-changelog]

Use `guardArray()` or `guard.array()` to guard the value to be an [`array`][js-array] of a generic type variable `Type`. The function guards **only** the `array`, not its specific elements.

```typescript
const guardArray = <Type, Payload extends object = object>(
  value: Array<Type>,
  callback?: ResultCallback<Array<Type>, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is Array<Type> =>
  isArray(value, callback, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | From the `value`      | A generic type variable `Type` indicates the `array` element type of the `value` by default captured from the provided `value`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                         | Description |
| :----------------------------------------------------------------- | :---------- |
| `value: Array<Type>`                                               | An [`Array`][js-array] of a generic type variable `Type`, implicitly of the type captured from the supplied `value`, to guard. |
| `callback?: ResultCallback<Array<Type>, CallbackPayload<Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                               | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns                | Type      | Description |
| :--------------------- | :-------: | :---------- |
| `value is Array<Type>` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is an [`Array`][js-array] of a generic type variable `Type`, by default equal to the array element type of the supplied `value`. |

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

[&uArr; Up](#guardarray) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardboolean)

<br>

#### `guardBigInt()`

[![update]][type-github-changelog]

Use `guardBigInt()` or `guard.bigint()` to guard the value to be a [`bigint`][js-bigint].

```typescript
const guardBigInt = <Payload extends object>(
  value: bigint,
  callback?: ResultCallback<bigint, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is bigint =>
  isBigInt(value, callback, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                    | Description |
| :------------------------------------------------------------ | :---------- |
| `value: bigint`                                               | A [`bigint`][js-bigint] type value to guard. |
| `callback?: ResultCallback<bigint, CallbackPayload<Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                          | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

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

[&uArr; Up](#guardbigint) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardclass)

<br>

#### `guardBoolean()`

[![update]][type-github-changelog]

Use `guardBoolean()` or `guard.boolean()` to guard the value to be [`boolean`][js-boolean] of any type.

```typescript
const guardBoolean = <
  Type extends AnyBoolean,
  Payload extends object = object
>(
  value: Type,
  callback?: ResultCallback<Type, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is Type =>
  isBoolean(value, callback, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | From the `value`      | A generic type variable `Type` guarded by [`AnyBoolean`](#anyboolean), by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Type`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                  | Description |
| :---------------------------------------------------------- | :---------- |
| `value: Type`                                               | The value of a generic type variable `Type`, by default of the type captured from the supplied `value`, to guard. |
| `callback?: ResultCallback<Type, CallbackPayload<Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                        | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is Type` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type variable `Type` by default of type captured from the supplied `value`. |

The **return value** is a `boolean` indicating whether the `value` is a `boolean` type or an instance of [`Boolean`][js-boolean].

**Usage:**

```typescript
// Example usage.
import { guardBoolean } from '@angular-package/type';

guardBoolean(true), // true, value is boolean
guardBoolean(new Boolean(false)) // true, value is Boolean
```

[&uArr; Up](#guardboolean) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guarddate)

<br>

#### `guardClass()`

[![update]][type-github-changelog]

Use `guardClass()` or `guard.class()` to guard the value to be a [`class`][ts-classes] of generic type variable `Class`.

```typescript
const guardClass = <
  Class extends Function,
  Payload extends object = object
>(
  value: Class,
  callback?: ResultCallback<Class, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is Class =>
  isClass(value, callback, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Class`   | From the `value`      | A generic type variable `Class` guarded by [`Function`][ts-function], by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Class`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                   | Description |
| :----------------------------------------------------------- | :---------- |
| `value: Class`                                               | The [`class`][ts-classes] of a generic type variable `Class`, by default of the type captured from the provided `value` parameter, to guard. |
| `callback?: ResultCallback<Class, CallbackPayload<Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                         | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns          | Type      | Description |
| :--------------- | :-------: | :---------- |
| `value is Class` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type variable `Class` by default of type captured from the supplied `value`. |

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

[&uArr; Up](#guardclass) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guarddefined)

<br>

#### `guardDate()`

[![new]][type-github-changelog]

Use `guardDate()` or `guard.date()` to guard the value to be a [`Date`][js-date] type.

```typescript
const guardDate = <Payload extends object>(
  value: Date,
  callback?: ResultCallback<Date, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is Date =>
  isDate(value, callback, { name: guardDate.name, ...payload } as Payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                  | Description |
| :---------------------------------------------------------- | :---------- |
| `value: Date`                                               | The value of [`Date`][js-date] type to guard. |
| `callback?: ResultCallback<Date, CallbackPayload<Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                        | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is Date` | `boolean` | The **return type** is a `boolean` as the result of its statement `value` is [`Date`][js-date]. |

The **return value** is a `boolean` indicating whether the `value` is a [`Date`][js-date].

**Usage:**

```typescript
// Example usage.
import { guardDate } from '@angular-package/type';

guardDate(new Date('December 17, 1995 03:24:00')); // true, value is Date
guardDate(new Date('1995-12-17T03:24:00')); // true, value is Date
guardDate(new Date(1995, 11, 17)); // true, value is Date
guardDate(new Date(1995, 11, 17, 3, 24, 0)); // true, value is Date
guardDate(new Date(628021800000)); // true, value is Date
```

[&uArr; Up](#guarddate) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardfalse)

<br>

#### `guardDefined()`

[![update]][type-github-changelog]

Use `guardDefined()` or `guard.defined()` to guard the value to be **defined**.

```typescript
const guardDefined = <Type, Payload extends object = object>(
  value: Defined<Type>,
  callback?: ResultCallback<Defined<Type>, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is Defined<Type> =>
  isDefined(value, callback, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | From the `value`      | A generic type variable `Type`, by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Defined<Type>`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                           | Description |
| :------------------------------------------------------------------- | :---------- |
| `value: Defined<Type>`                                               | The value of `Defined<Type>`, [`never`][ts-never] `undefined` type captured from the `value` to guard against `undefined`. |
| `callback?: ResultCallback<Defined<Type>, CallbackPayload<Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                                 | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns                  | Type      | Description |
| :----------------------- | :-------: | :---------- |
| `value is Defined<Type>` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type [`Defined`](#defined) that takes a generic type variable `Type` of value by default equal to the type captured from the supplied `value` parameter excepts [`undefined`][js-undefined] which changes to [`never`][ts-never]. |

The **return value** is a `boolean` indicating whether the `value` is **defined**.

**Usage:**

```typescript
// Example usage.
import { guardDefined } from '@angular-package/type';

let letFirstName = 'my name';
guardDefined(letFirstName); // true; return type `value is string`

const firstName = 'my const name';
guardDefined(firstName); // true; return type `value is string`
```

[&uArr; Up](#guarddefined) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardfunction)

<br>

#### `guardFalse()`

[![new]][type-github-changelog]

Use `guardFalse()` or `guard.false()` to guard the value to be `false`.

```typescript
const guardFalse = <Payload extends object>(
  value: false,
  callback?: ResultCallback<false, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is false =>
  isFalse(value, callback, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                   | Description |
| :----------------------------------------------------------- | :---------- |
| `value: false`                                               | The value of `false` type to guard. |
| `callback?: ResultCallback<false, CallbackPayload<Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                         | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

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

[&uArr; Up](#guardfalse) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardinstance)

<br>

#### `guardFunction()`

[![update]][type-github-changelog]

Use `guardFunction()` or `guard.function()` to guard the value to be a [`Function`][js-function]. The function guards only generic [`function`][js-function] type, not specific function.

```typescript
const guardFunction = <Type extends Function, Payload extends object>(
  value: Type,
  callback?: ResultCallback<Type, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is Type =>
  isFunction(value, callback, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | From the `value`      | A generic type variable `Type`, by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Type`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                  | Description |
| :---------------------------------------------------------- | :---------- |
| `value: Type`                                               | The `function` of a generic type variable `Type`, by default of the type captured from the provided `value`, to guard. |
| `callback?: ResultCallback<Type, CallbackPayload<Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                        | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is Type` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type variable `Type` by default equal to the type captured from the supplied `value`. |

The **return value** is a `boolean` indicating whether the `value` is a [`Function`][js-function].

**Usage:**

```typescript
// Example usage.
import { guardFunction } from '@angular-package/type';

guardFunction('x'); // false value is Function
guardFunction(() => {}); // true value is () => void
guardFunction((x: number, y: number) => x + y); // true value is (x: number, y: number) => number
```

[&uArr; Up](#guardfunction) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardkey)

<br>

#### `guardInstance()`

[![update]][type-github-changelog]

Use `guardInstance()` or `guard.instance()` to guard the value to be an instance of the given `constructor` of [`Constructor`](#constructor) type.

```typescript
const guardInstance = <
  Obj extends object,
  Payload extends object = object
>(
  value: Obj,
  constructor: Constructor<Obj>,
  callback?: ResultCallback<
    Obj,
    CallbackPayload<{ ctor: typeof constructor } & Payload>
  >,
  payload?: CallbackPayload<Payload>
): value is Obj =>
  isInstance(value, constructor, callback, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Obj`     | From the `value`      | A generic type variable `Obj` guarded by [`object`][js-object], by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Obj` and specifies the type of the `constructor`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                                                | Description |
| :---------------------------------------------------------------------------------------- | :---------- |
| `value: Obj`                                                                              | An [`object`][js-object] of a generic type variable `Obj`, by default of the type captured from the provided `value` to guard and to check if it's an instance of a given `constructor`.  |
| `constructor: Constructor<Obj>`                                                           | A [`class`][ts-classes] or [`function`][ts-function] that specifies the type of the [`constructor`](#constructor). |
| `callback?: ResultCallback<Obj, CallbackPayload<{ ctor: typeof constructor } & Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                                                      | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type variable `Obj` by default of the type captured from the provided `value`. |

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

[&uArr; Up](#guardinstance) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardnull)

<br>

#### `guardKey()`

[![update]][type-github-changelog]

Use `guardKey()` or `guard.key()` to guard the value to be one of the `string`, `number`, or `symbol`.

```typescript
const guardKey = <Payload extends object>(
  value: PropertyKey,
  callback?: ResultCallback<PropertyKey, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is PropertyKey =>
  isKey(value, callback, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                         | Description |
| :----------------------------------------------------------------- | :---------- |
| `value: PropertyKey`                                               | The value of `PropertyKey` type to guard. |
| `callback?: ResultCallback<PropertyKey, CallbackPayload<Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                               | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns                | Type      | Description |
| :--------------------- | :-------: | :---------- |
| `value is PropertyKey` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is `PropertyKey`. |

The **return value** is a `boolean` indicating whether the `value` is a `PropertyKey`.

**Usage:**

```typescript
// Example usage.
import { guardKey } from '@angular-package/type';

guardKey('string key'); // true, value is PropertyKey
guardKey(27); // true, value is PropertyKey
guardKey(Symbol('string key')); // true, value is PropertyKey
guardKey(Symbol(27)); // true, value is PropertyKey

guardKey(new String('string key') as any); // false, value is PropertyKey
guardKey(new Number(27) as any); // false, value is PropertyKey
```

[&uArr; Up](#guardkey) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardnumber)

<br>

#### `guardNull()`

[![update]][type-github-changelog]

Use `guardNull()` or `guard.null()` to guard the value to be [`null`][js-null].

```typescript
const guardNull = <Payload extends object>(
  value: null,
  callback?: ResultCallback<null, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is null =>
  isNull(value, callback, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                  | Description |
| :---------------------------------------------------------- | :---------- |
| `value: null`                                               | A `null` type `value` to guard. |
| `callback?: ResultCallback<null, CallbackPayload<Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                        | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is null` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is `null`. |

The **return value** is a `boolean` indicating whether the `value` is `null`.

**Usage:**

```typescript
// Example usage.
import { guardNull } from '@angular-package/type';

guardNull(null); // true, value is null
guardNull(undefined as any); // false, value is null
```

[&uArr; Up](#guardnull) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardnumberbetween)

<br>

#### `guardNumber()`

[![update]][type-github-changelog]

Use `guardNumber()` or `guard.number()` to guard the value to be a [`number`][js-number] of any type.

```typescript
const guardNumber = <
  Type extends AnyNumber,
  Payload extends object = object
>(
  value: Type,
  callback?: ResultCallback<Type, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is Type =>
  isNumber(value, callback, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | From the `value`      | A generic type variable `Type` guarded by [`AnyNumber`](#anynumber), by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Type`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                  | Description |
| :---------------------------------------------------------- | :---------- |
| `value: Type`                                               | The value of a generic type variable `Type` constrained by [`AnyNumber`](#anynumber), by default of the type captured from the provided `value` to guard. |
| `callback?: ResultCallback<Type, CallbackPayload<Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                        | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is Type` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type variable `Type` by default of type captured from the supplied `value`. |

The **return value** is a `boolean` indicating whether the `value` is a `number` type or an instance of [`Number`][js-number].

**Usage:**

```typescript
// Example usage.
import { guardNumber } from '@angular-package/type';

guardNumber(3); // true, value is number
guardNumber(3.14); // true, value is number
guardNumber(3.500); // true, value is number
guardNumber(Infinity); // false, value is number
guardNumber(NaN); // false, value is number

guardNumber(new Number(3)); // true, value is Number
guardNumber(new Number(3.14)); // true, value is Number
guardNumber(new Number(3.500)); // true, value is Number
guardNumber(new Number(Infinity)); // false, value is Number
guardNumber(new Number(NaN)); // false, value is Number
```

[&uArr; Up](#guardnumber) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardobject)

<br>

#### `guardNumberBetween()`

[![new]][type-github-changelog]

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
  callback?: ResultCallback<Type, CallbackPayload<MinMax<Min, Max> & Payload>>,
  payload?: CallbackPayload<Payload>
): value is NumberBetween<Min, Max, Type> =>
  isNumberBetween(value, range, callback, payload);
```

**Generic type variables:**

| Name      | Default value                      | Description |
| :-------- | :--------------------------------- | :---------- |
| `Type`    | Captured from the `value`          | A generic type variable `Type` guarded by [`AnyNumber`](#anynumber), by default of value captured from the supplied `value` indicates the **type** of the `value` via the return type `value is NumberBetween<Min, Max, Type>`. |
| `Min`     | Captured from the `min` of `range` | A generic type variable `Min` constrained by the `number` type, by default of value captured from optional `min` of the provided `range` that indicates the **minimum** range of the provided `value` via the return type `value is NumberBetween<Min, Max, Type>`. |
| `Max`     | Captured from the `max` of `range` | A generic type variable `Max` constrained by the `number` type, by default of value captured from optional `max` of the provided `range` that indicates the **maximum** range of the provided `value` via the return type `value is NumberBetween<Min, Max, Type>`. |
| `Payload` | [`object`][ts-object]              | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                                     | Description |
| :----------------------------------------------------------------------------- | :---------- |
| `value: Type`                                                                  | The value of a generic type variable `Type` constrained by [`AnyNumber`](#anynumber), by default of the type captured from the provided `value`, to guard. |
| `range: MinMax<Min, Max>`                                                      | An [`object`][js-object] of optional minimum and maximum `range` of a given `value`. |
| `callback?: ResultCallback<Type, CallbackPayload<MinMax<Min, Max> & Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                                           | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns                                  | Type      | Description |
| :--------------------------------------- | :-------: | :---------- |
| `value is NumberBetween<Min, Max, Type>` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type [`NumberBetween`](#numberbetween) that takes generic type variables `Min` and `Max` as a **range** of the supplied `value` and `Type` as the **type** of the supplied `value`. |

The **return value** is a `boolean` indicating whether the `value` is a `number` type or an instance of [`Number`][js-number] between the specified `range`.

**Usage:**

```typescript
// Example usage.
import { guardNumberBetween } from '@angular-package/type';

guardNumberBetween(Infinity, {min: 0}); // false, value is number
guardNumberBetween(NaN, {min: 0}); // false, value is number
guardNumberBetween(new Number(Infinity), {min: 0}); // false, value is Number
guardNumberBetween(new Number(NaN), {min: 0}); // false, value is Number

// Minimum.
guardNumberBetween(3, {min: 3 }); // true, value is number
guardNumberBetween(new Number(3), {min: 2 }); // true, value is Number
guardNumberBetween(3, {min: 4 }); // false, value is number

// Maximum.
guardNumberBetween(3, {max: 3 }); // true, value is number
guardNumberBetween(3, {max: 2 }); // false, value is number

// Minimum and Maximum.
guardNumberBetween(3, {min: 1, max: 3 }); // true, value is number
guardNumberBetween(3, {min: 4, max: 2 }); // false, value is number
```

[&uArr; Up](#guardnumberbetween) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardobjectkey)

<br>

#### `guardObject()`

[![update]][type-github-changelog]

Use `guardObject()` or `guard.object()` to guard the value to be an [`object`][js-object] of a generic type variable `Obj`. The function guards only generic [`object`][js-object] type, not **specific** object.

```typescript
const guardObject = <
  Obj extends object,
  Payload extends object = object
>(
  value: Obj,
  callback?: ResultCallback<Obj, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is Obj =>
  isObject(value, callback, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Obj`     | From the `value`      | A generic type variable `Obj` guarded by [`object`][js-object], by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Obj`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                 | Description |
| :--------------------------------------------------------- | :---------- |
| `value: Obj`                                               | An [`object`][js-object] of a generic type variable `Obj`, by default of the type captured from the provided `value` to guard. |
| `callback?: ResultCallback<Obj, CallbackPayload<Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                       | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is an [`object`][js-object] of a generic type variable `Obj`, by default of type captured from the supplied `value`. |

The **return value** is a `boolean` indicating whether the `value` is an `object` of a generic type variable `Obj`.

**Usage:**

```typescript
// Example usage.
import { guardObject } from '@angular-package/type';

class Person {}
const o = {};
const p = new Person();

guardObject(o); // true, value is {}
guardObject(p); // true, value is Person
```

[&uArr; Up](#guardobject) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardobjectkeyin)

<br>

#### `guardObjectKey()`

[![update]][type-github-changelog]

Use `guardObjectKey()` or `guard.objectKey()` to guard the value to be an [`object`][js-object] of a generic `Obj` type that contains the given `key`.

```typescript
const guardObjectKey = <
  Obj extends object,
  Key extends keyof Obj,
  Payload extends object = object
>(
  value: Obj,
  key: Key,
  callback?: ResultCallback<
    Obj,
    CallbackPayload<{ key: typeof key } & Payload>
  >,
  payload?: CallbackPayload<Payload>
): value is Obj =>
  isObjectKey(value, key, callback, payload as any);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Obj`     | From the `value`      | A generic type variable `Obj` guarded by [`object`][js-object], by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Obj`. |
| `Key`     | From the `key`        | A generic type variable `Key` constrained by the `keyof Obj`, by default of value captured from the supplied `key` indicates the specific property name of `Obj`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                                       | Description |
| :------------------------------------------------------------------------------- | :---------- |
| `value: Obj`                                                                     | An [`object`][js-object] of a generic type variable `Obj`, by default of the type captured from the provided `value` that contains the given `key`, to guard. |
| `key: Key`                                                                       | A key of `Obj` type as the name of the property that the given `value` contains. |
| `callback?: ResultCallback<Obj, CallbackPayload<{ key: typeof key } & Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                                             | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is an [`object`][js-object] of a generic type variable `Obj`, by default of type captured from the supplied `value`. |

The **return value** is a `boolean` indicating whether the `value` is an `object` of a generic `Obj` that contains the given `key`.

**Usage:**

```typescript
// Example usage.
import { guardObjectKey } from '@angular-package/type';

const NUMBER = 10304050;
const STRING = '!@#$%^&*()abcdefghijklmnoprstuwyz';
const SYMBOL_NUMBER: unique symbol = Symbol(NUMBER);

interface ObjectOne {
  1030405027?: string;
  [NUMBER]: number;
  [STRING]: string;
  [SYMBOL_NUMBER]?: string;
}

const OBJECT_ONE: ObjectOne = {
  1030405027: 'key is number',
  [STRING]: 'key is string',
  [SYMBOL_NUMBER]: 'key is symbol number',
  get [NUMBER](): number {
    return NUMBER;
  },
};

guardObjectKey(OBJECT_ONE, 1030405027); // true, value is ObjectOne
guardObjectKey(OBJECT_ONE, SYMBOL_NUMBER); // true, value is ObjectOne
guardObjectKey(OBJECT_ONE, STRING); // true, value is ObjectOne
// Getter found in the object.
guardObjectKey(OBJECT_ONE, NUMBER); // true, value is ObjectOne

// Searching in an instance of `Class`.
class Class {
  get [NUMBER](): number {
    return NUMBER;
  }
}
const CLASS = new Class();
// Getter not found.
guardObjectKey(CLASS, NUMBER); // false, value is Class
```

[&uArr; Up](#guardobjectkey) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardobjectkeys)

<br>

#### `guardObjectKeyIn()`

[![new]][type-github-changelog]

Use `guardObjectKeyIn()` or `guard.objectKeyIn()` to guard the value to be an [`object`][js-object] of a generic type variable `Obj` that contains(or its prototype chain) the given `key`.

```typescript
const guardObjectKeyIn = <
  Obj extends object,
  Key extends keyof Obj,
  Payload extends object = object
>(
  value: Obj,
  key: Key,
  callback?: ResultCallback<
    Obj,
    CallbackPayload<{ key: typeof key } & Payload>
  >,
  payload?: CallbackPayload<Payload>
): value is Obj =>
  isObjectKeyIn(value, key, callback, payload as any);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Obj`     | From the `value`      | A generic type variable `Obj` guarded by [`object`][js-object], by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Obj`. |
| `Key`     | From the `key`        | A generic type variable `Key` constrained by the `keyof Obj`, by default of value captured from the supplied `key` indicates the specific property name of `Obj`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                                       | Description |
| :------------------------------------------------------------------------------- | :---------- |
| `value: Obj`                                                                     | An [`object`][js-object] of a generic type variable `Obj`, by default of the type captured from the provided `value` that contains(or its prototype chain) the given `key`, to guard. |
| `key: Key`                                                                       | A key of `Obj` type, as the name of the property that the given `value` contains(or its prototype chain). |
| `callback?: ResultCallback<Obj, CallbackPayload<{ key: typeof key } & Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                                             | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is an [`object`][js-object] of a generic type variable `Obj`, by default of type captured from the supplied `value`. |

The **return value** is a `boolean` indicating whether the `value` is an `object` of a generic `Obj` that contains(or its prototype chain) the given `key`.

**Usage:**

```typescript
// Example usage.
import { guardObjectKeyIn } from '@angular-package/type';

const NUMBER = 10304050;
const STRING = '!@#$%^&*()abcdefghijklmnoprstuwyz';
const SYMBOL_NUMBER: unique symbol = Symbol(NUMBER);

interface ObjectOne {
  1030405027?: string;
  [NUMBER]: number;
  [STRING]: string;
  [SYMBOL_NUMBER]?: string;
}
const OBJECT_ONE: ObjectOne = {
  1030405027: 'key is number',
  [STRING]: 'key is string',
  [SYMBOL_NUMBER]: 'key is symbol number',
  get [NUMBER](): number {
    return NUMBER;
  },
};
guardObjectKeyIn(OBJECT_ONE, 1030405027); // true, value is ObjectOne
guardObjectKeyIn(OBJECT_ONE, SYMBOL_NUMBER); // true, value is ObjectOne
guardObjectKeyIn(OBJECT_ONE, STRING); // true, value is ObjectOne
guardObjectKeyIn(OBJECT_ONE, NUMBER); // true, value is ObjectOne

// Searching in an instance of `Class`.
class Class {
  get [NUMBER](): number {
    return NUMBER;
  }
}
const CLASS = new Class();
// Getter found.
guardObjectKeyIn(CLASS, NUMBER); // true, value is Class
```

[&uArr; Up](#guardobjectkeyin) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardobjectkeysin)

<br>

#### `guardObjectKeys()`

[![update]][type-github-changelog]

Use `guardObjectKeys()` or `guard.objectKeys()` to guard the value to be an [`object`][js-object] of a generic type variable `Obj` with its specified `keys`.

```typescript
const guardObjectKeys = <
  Obj extends object,
  Key extends keyof Obj,
  Payload extends object = object
>(
  value: Obj,
  keys: Key[],
  callback?: ResultCallback<
    Obj,
    CallbackPayload<{ keys: typeof keys } & Payload>
  >,
  payload?: CallbackPayload<Payload>
): value is Obj => isObjectKeys(value, keys, callback, payload as any);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Obj`     | From the `value`      | A generic type variable `Obj` guarded by [`object`][js-object], by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Obj`. |
| `Keys`    | From the `keys`       | A generic type variable `Keys` constrained by the `keyof Obj`, by default of value captured from the supplied `keys` indicates the specific property name of `Obj`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                                         | Description |
| :--------------------------------------------------------------------------------- | :---------- |
| `value: Obj`                                                                       | An [`object`][js-object] of a generic type variable `Obj`, by default of the type captured from the `value` that contains the given `keys` to guard. |
| `key: Key[]`                                                                       | An [`Array`][js-array] of property names that the given `value` contains. |
| `callback?: ResultCallback<Obj, CallbackPayload<{ keys: typeof keys } & Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                                               | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is an [`object`][js-object] of a generic type variable `Obj`, by default of type captured from the supplied `value`. |

The **return value** is a `boolean` indicating whether or not the `value` is an `object` with some of its own specified `keys`.

**Usage:**

```typescript
// Example usage.
import { guardObjectKeys } from '@angular-package/type';

const NUMBER = 10304050;
const STRING = '!@#$%^&*()abcdefghijklmnoprstuwyz';
const SYMBOL_NUMBER: unique symbol = Symbol(NUMBER);

interface ObjectOne {
  1030405027?: string;
  [NUMBER]: number;
  [STRING]: string;
  [SYMBOL_NUMBER]?: string;
}
const OBJECT_ONE: ObjectOne = {
  1030405027: 'key is number',
  [STRING]: 'key is string',
  [SYMBOL_NUMBER]: 'key is symbol number',
  get [NUMBER](): number {
    return NUMBER;
  },
};

guardObjectKeys(OBJECT_ONE, [
  STRING,
  SYMBOL_NUMBER,
  NUMBER,
  1030405027]); // true, value is Class

// Searching in an instance of `Class`.
class Class {
  get [NUMBER](): number {
    return NUMBER;
  }
}
const CLASS = new Class();
// Getter not found.
guardObjectKeys(CLASS, [NUMBER]); // false, value is Class
```

[&uArr; Up](#guardobjectkeys) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardobjectsomekeys)

<br>

#### `guardObjectKeysIn()`

[![new]][type-github-changelog]

Use `guardObjectKeys()` or `guard.objectKeys()` to guard the value to be an [`object`][js-object] of a generic type variable `Obj` with specified `keys` in it(or its prototype chain).

```typescript
const guardObjectKeysIn = <
  Obj extends object,
  Key extends keyof Obj,
  Payload extends object = object
>(
  value: Obj,
  keys: Key[],
  callback?: ResultCallback<
    Obj,
    CallbackPayload<{ keys: typeof keys } & Payload>
  >,
  payload?: CallbackPayload<Payload>
): value is Obj => isObjectKeysIn(value, keys, callback, payload as any);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Obj`     | From the `value`      | A generic type variable `Obj` guarded by [`object`][js-object], by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Obj`. |
| `Keys`    | From the `keys`       | A generic type variable `Keys` constrained by the `keyof Obj`, by default of value captured from the supplied `keys` indicates the specific property name of `Obj`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                                         | Description |
| :--------------------------------------------------------------------------------- | :---------- |
| `value: Obj`                                                                       | An [`object`][js-object] of a generic type variable `Obj`, by default of the type captured from the `value` that contains(or its prototype chain) the given `keys` to guard. |
| `key: Key[]`                                                                       | An [`Array`][js-array] of property names that the given `value` contains(or its prototype chain). |
| `callback?: ResultCallback<Obj, CallbackPayload<{ keys: typeof keys } & Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                                               | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is an [`object`][js-object] of a generic type variable `Obj`, by default of type captured from the supplied `value`. |

The **return value** is a `boolean` indicating whether or not the `value` is an `object` with specified `keys` in it(or its prototype chain).

**Usage:**

```typescript
// Example usage.
import { guardObjectKeysIn } from '@angular-package/type';

const NUMBER = 10304050;
const STRING = '!@#$%^&*()abcdefghijklmnoprstuwyz';
const SYMBOL_NUMBER: unique symbol = Symbol(NUMBER);

interface ObjectOne {
  1030405027?: string;
  [NUMBER]: number;
  [STRING]: string;
  [SYMBOL_NUMBER]?: string;
}
const OBJECT_ONE: ObjectOne = {
  1030405027: 'key is number',
  [STRING]: 'key is string',
  [SYMBOL_NUMBER]: 'key is symbol number',
  get [NUMBER](): number {
    return NUMBER;
  },
};

guardObjectKeysIn(OBJECT_ONE, [
  STRING,
  SYMBOL_NUMBER,
  NUMBER,
  1030405027]); // true, value is Class

// Searching in an instance of `Class`.
class Class {
  get [NUMBER](): number {
    return NUMBER;
  }
}
const CLASS = new Class();
// Getter found.
guardObjectKeysIn(CLASS, [NUMBER]); // true, value is Class
```

[&uArr; Up](#guardobjectkeysin) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardprimitive)

<br>

#### `guardObjectSomeKeys()`

[![new]][type-github-changelog]

Use `guardObjectSomeKeys()` or `guard.objectSomeKeys()` to guard the value to be an [`object`][js-object] of a generic type variable `Obj` with some of its `keys` or some groups of its `keys`. The function uses [`isObjectSomeKeys()`](#isobjectsomekeys) to search for the `keys`.

```typescript
const guardObjectSomeKeys = <
  Obj extends object,
  Payload extends object = object
>(
  value: Obj,
  keys: (keyof Obj | Array<keyof Obj>)[],
  callback?: ResultCallback<
    Obj,
    CallbackPayload<{ keys: typeof keys } & Payload>
  >,
  payload?: CallbackPayload<Payload>
): value is Obj => isObjectSomeKeys(value, keys, callback, payload as any);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Obj`     | From the `value`      | A generic type variable `Obj` guarded by [`object`][js-object], by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Obj`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                                         | Description |
| :--------------------------------------------------------------------------------- | :---------- |
| `value: Obj`                                                                       | An [`object`][js-object] of a generic type variable `Obj`, by default of the type captured from the `value` that contains some or some of the groups of the given `keys`, to guard. |
| `keys: (keyof Obj | Array<keyof Obj>)[]`                                           | An [`Array`][js-array] of property names or a two-dimensional array of property names to check if the given `value` contains some of them or some groups of them. |
| `callback?: ResultCallback<Obj, CallbackPayload<{ keys: typeof keys } & Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                                               | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns        | Type      | Description |
| :------------- | :-------: | :---------- |
| `value is Obj` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is an [`object`][js-object] of a generic type variable `Obj`, by default of type captured from the supplied `value`. |

The **return value** is a `boolean` indicating whether the `value` is an `object` with some or some groups of its keys from a given `keys`.

**Usage:**

```typescript
// Example usage.
import { guardObjectSomeKeys } from '@angular-package/type';

const NUMBER = 10304050;
const STRING = '!@#$%^&*()abcdefghijklmnoprstuwyz';
const SYMBOL_NUMBER: unique symbol = Symbol(NUMBER);

interface ObjectOne {
  1030405027?: string;
  [NUMBER]: number;
  [STRING]: string;
  [SYMBOL_NUMBER]?: string;
}
const OBJECT_ONE: ObjectOne = {
  1030405027: 'key is number',
  [STRING]: 'key is string',
  [SYMBOL_NUMBER]: 'key is symbol number',
  get [NUMBER](): number {
    return NUMBER;
  },
};

guardObjectSomeKeys(OBJECT_ONE, [NUMBER, STRING]), // true, value is ObjectOne
guardObjectSomeKeys(OBJECT_ONE, ['no property' as any, STRING]), // true, value is ObjectOne
guardObjectSomeKeys(OBJECT_ONE, ['no property', 2 as any ]), // false, value is ObjectOne
guardObjectSomeKeys(OBJECT_ONE, [['no property'], [2 as any] ]), // false, value is ObjectOne
guardObjectSomeKeys(OBJECT_ONE, [
  [1030405027, NUMBER], // Or
  [1030405027, STRING], // Or
  [1030405027, SYMBOL_NUMBER]
]); // true, value is ObjectOne
```

[&uArr; Up](#guardobjectsomekeys) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardregexp)

<br>

#### `guardPrimitive()`

[![update]][type-github-changelog]

Use `guardPrimitive()` or `guard.primitive()` to guard the `value` to be the [`Primitive`](#primitive) type or the given `type` of the [`Primitives`](#primitives).

```typescript
const guardPrimitive = <
  Type extends Primitive,
  Payload extends object = object
>(
  value: Type,
  type?: Primitives,
  callback?: ResultCallback<Type, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is Type =>
  isPrimitive(value, type, callback, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | From the `value`      | A generic type variable `Type` guarded by [`Primitive`](#primitive), by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Type`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it while providing `Type` and can be captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                  | Description |
| :---------------------------------------------------------- | :---------- |
| `value: Type`                                               | The value of a generic type variable `Type` constrained by the [`Primitive`](#primitive), by default of the type captured from the provided `value` to guard. |
| `type: Primitives`                                          | An optional specific type of [`Primitives`](#primitives) to check the given value. |
| `callback?: ResultCallback<Type, CallbackPayload<Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                        | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is Type` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is [`Primitive`](#primitive), by default of type captured from the supplied `value`. |

The **return value** is a `boolean` indicating whether the `value` is the [`Primitive`](#primitive) type or the given `type` of [`Primitives`](#primitives).

**Usage:**

```typescript
// Example usage.
import { guardPrimitive } from '@angular-package/type';

// Any primitive.
guardPrimitive('x'); // true, value is 'x'
guardPrimitive(1); // true, value is 1
guardPrimitive(true), // true, value is true
guardPrimitive(undefined); // true, value is undefined
guardPrimitive(null); // true, value is null

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

[&uArr; Up](#guardprimitive) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardstring)

<br>

#### `guardRegExp()`

[![new]][type-github-changelog]

Use `guardRegExp()` or `guard.regexp()` to guard the value to be a [`RegExp`][js-regexp].

```typescript
const guardRegExp = <Payload extends object>(
  value: RegExp,
  callback?: ResultCallback<RegExp, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is RegExp =>
  isRegExp(value, callback, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                    | Description |
| :------------------------------------------------------------ | :---------- |
| `value: RegExp`                                               | A [`RegExp`][js-regexp] type value to guard. |
| `callback?: ResultCallback<RegExp, CallbackPayload<Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                          | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns           | Type      | Description |
| :---------------- | :-------: | :---------- |
| `value is RegExp` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a [`RegExp`][js-regexp]. |

**Usage:**

```typescript
// Example usage.
import { guardRegExp } from '@angular-package/type';

guardRegExp(/^[]/); // true, value is RegExp
guardRegExp(false as any); // false, value is RegExp
```

[&uArr; Up](#guardregexp) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardstringlength)

<br>

#### `guardString()`

[![update]][type-github-changelog]

Use `guardString()` or `guard.string()` to guard the value to be [`string`][js-string] of any type.

```typescript
const guardString = <
  Type extends AnyString,
  Payload extends object = object
>(
  value: Type,
  callback?: ResultCallback<Type, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is Type =>
  isString(value, callback, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Type`    | From the `value`      | A generic type variable `Type` guarded by [`AnyString`](#anystring), by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is Type`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                  | Description |
|------------------------------------------------------------ | :---------- |
| `value: Type`                                               | The value of a generic type variable `Type` constrained by the [`AnyString`](#anystring), by default of the type captured from the provided `value` to guard. |
| `callback?: ResultCallback<Type, CallbackPayload<Payload>>` | An optional [`ResultCallback`](#resultcallback) type to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                        | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is Type` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type variable `Type` by default of the type captured from the `value`. |

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

[&uArr; Up](#guardstring) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardsymbol)

<br>

#### `guardStringLength()`

[![new]][type-github-changelog]

Use `guardStringLength()` or `guard.stringLength()` to guard the value to be a [`string`][js-string] of a **length** between the specified range.

```typescript
const guardStringLength = <
  Type extends AnyString,
  Min extends number,
  Max extends number,
  Payload extends object = object
>(
  value: Type,
  length: MinMax<Min, Max>,
  callback?: ResultCallback<Type, CallbackPayload<MinMax<Min, Max> & Payload>>,
  payload?: CallbackPayload<Payload>
): value is StringOfLength<Min, Max, Type> =>
  isStringLength(value, length, callback, payload);
```

**Generic type variables:**

| Name      | Default value                       | Description |
| :-------- | :---------------------------------- | :---------- |
| `Type`    | From the `value`                    | A generic type variable `Type` guarded by [`AnyString`](#anystring), by default of value captured from the supplied `value` indicates the **type** of the `value` via the return type `value is StringOfLength<Min, Max, Type>`. |
| `Min`     | Captured from the `min` of `length` | A generic type variable `Min` constrained by the `number` type, by default of value captured from optional `min` of the provided `length` that indicates the **minimum** length of the provided `value` via the return type `value is StringOfLength<Min, Max, Type>`. |
| `Max`     | Captured from the `max` of `length` | A generic type variable `Max` constrained by the `number` type, by default of value captured from optional `max` of the provided `length` that indicates the **maximum** length of the provided `value` via the return type `value is StringOfLength<Min, Max, Type>`. |
| `Payload` | [`object`][ts-object]               | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                                     | Description |
|------------------------------------------------------------------------------- | :---------- |
| `value: Type`                                                                  | The value of a generic type variable `Type` constrained by [`AnyString`](#anystring), by default of the type captured from the provided `value` to guard. |
| `length: MinMax<Min, Max>`                                                     | An [`object`][js-object] of optional minimum and maximum `length` of the given `value`. |
| `callback?: ResultCallback<Type, CallbackPayload<MinMax<Min, Max> & Payload>>` | An optional [`ResultCallback`](#resultcallback) type to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                                           | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns                                   | Type      | Description |
| :---------------------------------------- | :-------: | :---------- |
| `value is StringOfLength<Min, Max, Type>` | `boolean` | The **return type** is a `boolean` as the result of its statement, indicating the `value` is a generic type [`StringOfLength`](#stringoflength) that takes generic type variables `Min` and `Max`(from the provided `length` parameter) as the **length** of the supplied `value`, and `Type` as the type of the supplied `value`. |

The **return value** is a `boolean` indicating whether the `value` is a [`string`][js-string] type or an instance of [`String`][js-string] between the specified range.

**Usage:**

```typescript
// Example usage.
import { guardStringLength } from '@angular-package/type';

guardStringLength('not my name', {min: 11}); // true; return type `value is StringOfLength<11, number, "not my name">`
guardStringLength('my name', { max: 11 }); // true; return type `value is StringOfLength<number, 11, "my name">`
guardStringLength('not my name', {min: 11, max: 11}); // true; return type `value is StringOfLength<11, 11, "not my name">`
guardStringLength('not my name', {min: 12, max: 15}); // false; return type `value is StringOfLength<12, 15, "not my name">`

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

[&uArr; Up](#guardstringlength) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardtrue)

<br>

#### `guardSymbol()`

[![update]][type-github-changelog]

Use `guardSymbol()` or `guard.symbol()` to guard the value to be a [`symbol`][js-symbol].

```typescript
const guardSymbol = <Payload extends object>(
  value: symbol,
  callback?: ResultCallback<symbol, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is symbol =>
  isSymbol(value, callback, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                    | Description |
| :------------------------------------------------------------ | :---------- |
| `value: symbol`                                               | A `symbol` type value to guard. |
| `callback?: ResultCallback<symbol, CallbackPayload<Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                          | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns           | Type      | Description |
| :---------------- | :-------: | :---------- |
| `value is symbol` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a [`symbol`][js-symbol]. |

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

[&uArr; Up](#guardsymbol) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardtype)

<br>

#### `guardTrue()`

[![new]][type-github-changelog]

Use `guardTrue()` or `guard.true()` to guard the value to be `true`.

```typescript
const guardTrue = <Payload extends object>(
  value: true,
  callback?: ResultCallback<true, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is true =>
  isTrue(value, callback, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                  | Description |
| :---------------------------------------------------------- | :---------- |
| `value: true`                                               | The value of `true` type to guard. |
| `callback?: ResultCallback<true, CallbackPayload<Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                        | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns         | Type      | Description |
| :-------------- | :-------: | :---------- |
| `value is true` | `boolean` | The **return type** is a `boolean` as the result of its statement `value` is `true`. |

The **return value** is a `boolean` indicating whether the `value` is a [`boolean`][js-boolean] type or an instance of [`Boolean`][js-boolean] equal to `true`.

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

[&uArr; Up](#guardtrue) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guardundefined)

<br>

#### `guardType()`

[![update]][type-github-changelog]

Use `guardType()` or `guard.type()` to guard the value to be the [`Type`](#type) from a given `type` of the [`Types`](#types).

```typescript
const guardType = <T extends Type, Payload extends object = object>(
  value: T,
  type: Types<T>,
  callback?: ResultCallback<T, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is T =>
  isType(value, type, callback, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `T`       | From the `value`      | A generic type variable `T` guarded by [`Type`](#type), by default of value captured from the supplied `value` indicates the type of the `value` via the return type `value is T`. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value by default is set to `object` cause to not to be forced to fill it and **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                               | Description |
| :------------------------------------------------------- | :---------- |
| `value: T`                                               | The value of a generic type variable `T` constrained by the [`Type`](#type), by default of the type captured from the provided `value` to guard. |
| `type: Types<T>`                                         | The value of [`string`][js-string] or [`Constructor<T>`](#constructor) type of the [`Types`](#types) indicates against which type a given `value` is checked. |
| `callback?: ResultCallback<T, CallbackPayload<Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error] |
| `payload?: CallbackPayload<Payload>`                     | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

**Returns:**

| Returns      | Type      | Description |
| :----------- | :-------: | :---------- |
| `value is T` | `boolean` | The **return type** is a `boolean` as the result of its statement indicating the `value` is a generic type variable `T` by default of the type captured from the `value`. |

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

[&uArr; Up](#guardtype) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#guard-objects)

<br>

#### `guardUndefined()`

[![update]][type-github-changelog]

Use `guardUndefined()` or `guard.undefined()` to guard the value to be [`undefined`][js-undefined].

```typescript
const guardUndefined = <Payload extends object>(
  value: undefined,
  callback?: ResultCallback<undefined, CallbackPayload<Payload>>,
  payload?: CallbackPayload<Payload>
): value is undefined =>
  isUndefined(value, callback, payload);
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------- | :---------- |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultCallback`](#resultcallback), which is constrained by [`object`][js-object] type. Its value **can be** captured from a type of the provided `payload` optional parameter. |

**Parameters:**

| Name: type                                                       | Description |
| :--------------------------------------------------------------- | :---------- |
| `value: undefined`                                               | The value of an [`undefined`][js-undefined] type to guard. |
| `callback?: ResultCallback<undefined, CallbackPayload<Payload>>` | An optional [`ResultCallback`](#resultcallback) type function to handle the result before returns eg. to throw an [`Error`][js-error]. |
| `payload?: CallbackPayload<Payload>`                             | An optional [`object`][js-object] of generic type [`CallbackPayload`](#callbackpayload) that takes generic type variable `Payload` captured from itself is assigned to the `payload` of the supplied `callback` function. |

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

[&uArr; Up](#guardundefined) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#the-type)

<br>

### Guard objects

#### `guard.` object

[![update]][type-github-changelog]

The object contains prefixed with **guard** functions, and in `is` property.

```typescript
const guardIs: GuardIs = Object.freeze({
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
  objectKeyIn: guardObjectKeyIn,
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
});
const guard: Guard = Object.freeze({ ...guardIs });
```

[&uArr; Up](#guard-objects) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#common)

<br>

## The `type.`

A [frozen][js-isfrozen] `object` that consists of [`is`](#is), [`are`](#are), and [`guard`](#guard) objects.

```typescript
const type = Object.freeze({
  are,
  is,
  guard
});
```

**Properties:**

**`are`**  
The `object` consists of [`are`](#are) functions.

**`is`**  
The `object` consists of [`is`](#is) functions.

**`guard`**  
The `object` consists of [`guard`](#guard) functions.

**Usage:**

```typescript
// Example usage.
import { type } from '@angular-package/type';

// `is` functions
type.is.boolean(true); // true, value is boolean
type.is.array(true); // false, value is any[]

// `guard` functions
type.guard.number(3); // true, value is number
```

[&uArr; Up](#the-type) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&dArr; Down](#experimental)

<br>

## Common

### Common interfaces

#### `MinMax`

[![new]][type-github-changelog]

A generic type `MinMax` that takes generic type variables `Min` and `Max` represents the range between minimum and maximum.

```typescript
interface MinMax<Min extends number, Max extends number> {
  min: Min;
  max: Max;
}
```

**Properties:**

**`min: Min`**  
The minimum value of a generic type variable `Min` constrained by a `number` type.

**`max: Max`**  
The maximum value of a generic type variable `Max` constrained by a `number` type.

<br>

### Common types

#### `AnyBoolean`

A `boolean` type or an instance of a [`Boolean`][js-boolean].

```typescript
type AnyBoolean = Exclude<boolean | Boolean, true | false>;
```

<br>

#### `AnyNumber`

A `number` type or an instance of a [`Number`][js-number].

```typescript
type AnyNumber = number | Number;
```

<br>

#### `AnyString`

A `string` type or an instance of a [`String`][js-string].

```typescript
type AnyString = string | String;
```

<br>

#### `CallbackPayload`

[![experimental]][type-github-changelog]

Experimental shape for a generic type variable `Payload`.

```typescript
type CallbackPayload<Payload = object> = {
  action?: string;
  name?: string;
  param?: string;
} & Payload;
```

**Generic type variables:**

**`Payload`**  
The shape of the optional `payload` parameter, by default equal to the [`object`][js-object].

**Properties:**

**`action?: string`**  
An **optional** action of a [`string`][js-string] type that describes the cause of performed callback.

**`name?: string`**  
An **optional** name of the function or method of a [`string`][js-string] type that performed callback.

**`param?: string`**  
An **optional** name of the parameter of a [`string`][js-string] type to which performed callback relates.

<br>

#### `Constructor`

An instance of a type from the provided generic type variable `Type`.

```typescript
type Constructor<Type> = new (...args: any[]) => Type;
```

<br>

#### `Defined`

[![update]][type-github-changelog]

A generic type `Defined` that takes generic type variable `Type` constrained by `undefined` which constraint causes its change to [`never`][ts-never].

```typescript
type Defined<Type> = Type extends undefined ? never : Type;
```

<br>

#### `ForEachCallback`

[![new]][type-github-changelog]

Represents a callback function of `forEach()` method which is executed once for each element.

```typescript
type ForEachCallback<Value = any, Payload = object> = (
  result: boolean,
  value: Value,
  index: number,
  array: any[],
  payload?: Payload
) => void;
```

**Generic type variables:**

**`Value`**  
A generic type variable `Value` by default equal to [`any`][ts-any] determines the type of the `value` parameter.

**`Payload`**  
The shape of the optional `payload` parameter, by default equal to the [`object`][js-object].

**Parameters:**

**`result: boolean`**  
The result of the check of a [`boolean`][js-boolean] type.

**`value: Value`**  
The **value** that has been checked of a generic type variable `Value`.

**`index: number`**  
An optional [`number`][js-number] of checked [`array`][js-array] element.

**`array: any[]`**  
An optional [`array`][js-array] of `any` type that each element is checked.

**`payload?: Payload`**  
An optional [`object`][js-object] of a generic type variable `Payload` to provide more data.

**Returns:**  
The return value is a [`boolean`][js-boolean].

<br>

#### `Never`

A generic type `Never` that takes generic type variable `Type` constrained by a generic type variable `Not` which constraint causes its change to [`never`][ts-never].

```typescript
type Never<Not, Type> = Type extends Not ? never : Type;
```

<br>

#### `NotUndefined`

A generic type `NotUndefined` that takes generic type variable `Type` constrained by [`undefined`][js-undefined] and [`null`][js-null] which constraint causes its change to [`never`][ts-never].

```typescript
type NotUndefined<Type> = Type extends undefined | null ? never : Type;
```

<br>

#### `NumberBetween`

[![update]][type-github-changelog]

A generic type `NumberBetween` that takes generic type variable `Min` and `Max` constrained by `number` type as **range**, and takes generic type variable `Type` constrained by [`AnyNumber`](#anynumber) as the type by default `number` or an instance of [`Number`][js-number].

```typescript
type NumberBetween<
  Min extends number,
  Max extends number,
  Type extends AnyNumber = number
> = Type & MinMax<Min, Max>;
```

<br>

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

<br>

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

<br>

#### `ResultCallback`

[![update]][type-github-changelog]

Represents a **callback function** with parameters, the `value` that has been checked, the `result` of this check, and an optional `payload`.

> *The type is equivalent to the type from the `@angular-package/callback` and is here to have the package `@angular-package/type` independent.*

```typescript
type ResultCallback<Value = any, Payload = object> = (
  result: boolean,
  value: Value,
  payload?: Payload
) => boolean;
```

**Generic type variables:**

**`Value`**  
A generic type variable `Value` by default equal to [`any`][ts-any] determines the type of the `value` parameter.

**`Payload`**  
The shape of the optional `payload` parameter, by default equal to the [`object`][js-object].

**Parameters:**

**`result: boolean`**  
The result of the check of a [`boolean`][js-boolean] type.

**`value: Value`**  
The **value** that has been checked of a generic type variable `Value`.

**`payload?: Payload`**  
An optional [`object`][js-object] of a generic type variable `Payload` to provide more data.

**Returns:**  
The return value is a [`boolean`][js-boolean].

<br>

#### `StringOfLength`

[![update]][type-github-changelog]

A generic type `StringOfLength` that takes generic type variable `Min` and `Max` constrained by `number` type as **length**, and takes generic type variable `Type` constrained by [`AnyString`](#anystring) as the type by default `string` or an instance of [`String`][js-string].

```typescript
type StringOfLength<
  Min extends number,
  Max extends number,
  Type extends AnyString = string
> = Type & MinMax<Min, Max>;
```

<br>

#### `Type`

[![update]][type-github-changelog]

The **main** types.

```typescript
type Type = Function | object | Primitive;
```

<br>

#### `Types`

The **main** types as `string` values, besides the [`Constructor`](#constructor) which is an instance of an `Obj`.

```typescript
type Types<Obj> = Constructor<Obj> | 'function' | 'object' | Primitives;
```

<br>

#### `Undefined`

A generic type `Undefined` that takes generic type variable `Type` constrained by `undefined` causes other types than `undefined` its change to [`never`][ts-never].

```typescript
type Undefined<Type> = Type extends undefined ? Type : never;
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

#### `isParam()`

[![update]][type-github-changelog]

Method decorator to check the type and return [`undefined`][js-undefined] if it's not the same as expected.

```typescript
function isParam(...param: Array<string>): MethodDecorator {
  return (target: Function | object, key: string | symbol, descriptor: any): any => {
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

[&uArr; Up](#experimental)

<br>

## Changelog

The **changelog** of this package is based on [*keep a changelog*](https://keepachangelog.com/en/1.0.0/). To read it, click on the [CHANGELOG.md](https://github.com/angular-package/type/blob/main/CHANGELOG.md) link.

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
  [type-github-changelog]: https://github.com/angular-package/type/blob/main/CHANGELOG.md

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
[ts-any]: https://www.typescriptlang.org/docs/handbook/basic-types.html#any
[ts-classes]: https://www.typescriptlang.org/docs/handbook/2/classes.html
[ts-function]: https://www.typescriptlang.org/docs/handbook/2/functions.html
[ts-interface]: https://www.typescriptlang.org/docs/handbook/interfaces.html#our-first-interface
[ts-never]: https://www.typescriptlang.org/docs/handbook/basic-types.html#never
[ts-number]: https://www.typescriptlang.org/docs/handbook/basic-types.html#number
[ts-object]: https://www.typescriptlang.org/docs/handbook/basic-types.html#object
[ts-string]: https://www.typescriptlang.org/docs/handbook/basic-types.html#string
[ts-unknown]: https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown