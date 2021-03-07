# Packages

Useful packages based on the [angular.io](https://angular.io/).

| Package          | Description                                                                              | Status        | Readme      |
|------------------|------------------------------------------------------------------------------------------|---------------|-------------|
| change-detection | Improve application performance.                                                         | *In Progress* | [Readme][cd-readme-github] |
| prism            | `Prism` highlighter module.                                                              | *In Progress* | [Readme][prism-readme-github] |
| property         | Features to handle properties.                                                           | *In Progress* | [Readme][property-readme-github] |
| ui               | User interface based on **[Spectre.css](https://github.com/picturepan2/spectre)**.       | *In Progress* | [Github][ui-readme-github] |
| type             | Common types, type guards and checkers.                                                  | [![npm version][type-npm-svg]][type-npm-badge] | [Github][type-readme-github] \| [npm][type-readme-npm] |

# angular-package/type
Common types, type guards and checkers.

[![npm version](https://badge.fury.io/js/%40angular-package%2Ftype.svg)](https://badge.fury.io/js/%40angular-package%2Ftype)
[![GitHub issues](https://img.shields.io/github/issues/angular-package/type)](https://github.com/angular-package/type/issues)
[![GitHub forks](https://img.shields.io/github/forks/angular-package/type)](https://github.com/angular-package/type/network)
[![GitHub stars](https://img.shields.io/github/stars/angular-package/type)](https://github.com/angular-package/type/stargazers)
[![GitHub license](https://img.shields.io/github/license/angular-package/type)](https://github.com/angular-package/type/blob/main/LICENSE)

```typescript
// Guard functions.
import { guardArray, guardFunction, guardNumber, guardObject, guardObjectKey, guardPrimitive, guardString, guardType } from '@angular-package/type'; 
```
```typescript
// Check is functions.
import { isArray, isBigInt, isBoolean, isFunction, isNumber, isObject, isPrimitive, isString, isType, isUndefined } from '@angular-package/type';
// Check are functions.
import { areString } from '@angular-package/type';
```
```typescript
// Guard and is object.
import { are, guard, is } from '@angular-package/type';
```
```typescript
// Types.
import { Constructor, CycleHook, Func, Partial, Primitive, Primitives, Types } from '@angular-package/type';
```


**Features**
* Checks if 
  * **any** value is 
    * an `Array` of any type with [Array](#array) functions.
    * a `function` type with [Function](#function) functions.
    * a `number` type with [Number](#number) functions.
    * a generic type also with check key in it with [Object](#object) functions.
    * a generic type one of the primitive `boolean`, `bigint`, `number`, `string` type with [Primitive](#primitive) functions.
    * a `string` type with [String](#string) functions.
    * a generic constructor or primitive type with [Type](#generic-type) functions.
* Guard the value to be 
  * an `Array` of generic type with [Array guard](#array-guard) functions.
  * a `function` type with [Function guard](#function-guard) functions.
  * a `number` type with [Number guard](#number-guard) functions.
  * a generic type and also by finding `key` in the `object` with [Object key guard](#Object-key-guard) functions.
  * a generic type with [Object guard](#object-guard) functions.
  * a generic type from one of the `Primitives` with [Primitive guard](#primitive-guard) functions. 
  * a `string` type with [String guard](#string-guard) functions.
  * a generic type from one of the `Types` type with [Type guard](#generic-type-guard) functions.

**How angular-package understands**

Check
> Is to check the return value to be the same as expected.

Type guard
> Is to guard type from parameter to not let input unexpected value in the code editor.

Guard
> Is a combination of both above to type guard input in the code editor and check the return. 

----

* [Installation](#installation)
* [Object](#are-object)
  * [`are`](#are-object)
  * [`guard`](#guard-object)
  * [`is`](#is-object)
* [Check](#check-are)
  * [are](#check-are)
  * [is](#check-is)
* [Guards](#guards)
* [Types](#types)
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


## are Object

![][new] Partial object `are` with some of  **check are** functions.

```typescript
const are: Partial<Are> = {
  string: areString
};
```


## guard Object 

![][new] Partial object `guard` with all **guard** functions.

```typescript
const guardIs: GuardIs = {
  array: guardArray,
  function: guardFunction,
  number: guardNumber,
  objectKey: guardObjectKey,
  object: guardObjectKey,
  primitive: guardPrimitive,
  string: guardString,
  type: guardType
};
const guard: Partial<Guard> = {
  is: guardIs
};

```


##  is Object

Partial object `is` with all **check is** functions.

```typescript
const is: Partial<Is> = {
  array: isArray,
  bigint: isBigInt,
  boolean: isBoolean,
  function: isFunction,
  number: isNumber,
  object: isObject,
  primitive: isPrimitive,
  symbol: isSymbol,
  string: isString,
  type: isType,
  undefined: isUndefined
};

```


## Check are
### ![][new] String
 Use `areString()` or `are.string()` to check if all of **any** arguments are a `'string'` type. The return value is a `boolean` value.

```typescript
// Imported function code.
const areString = (...args: any): boolean => check('string', ...args);
```

| Parameter | Type  | Description |
|-----------| :---: |-------------|
| ...args   | `any` | Any arguments to check they're all a `'string'` type. |

[Example][are-string]


## Check is
### Array
Use `isArray()` or `is.array()` to check if **any** `value` is an `Array` of a generic `Type` type and `Array` instance. The return value is a `boolean` value.

```typescript
// Imported function code.
const isArray: IsArray = <Type>(value: any): value is Array<Type> => Array.isArray(value) && value instanceof Array;
```

| Parameter | Type  | Description |
|-----------| :---: |-------------|
| value     | `any` | Any `value` to check if it's an `Array` of a generic `Type` type  and `Array` instance. |

[Example][is-array]


### ![][new] Bigint
Use `isBigInt()` or `is.bigInt()` to check if **any** `value` is a `'bigint'` type. The return value is a `boolean` value.

```typescript
// Imported function code.
const isBigInt: IsBigInt = (value: any): value is bigint => typeof value === 'bigint';
```

| Parameter | Type  | Description |
|-----------| :---: |-------------|
| value     | `any` | Any `value` to check if it's a `'bigint'` type. |

[Example][is-bigint]


### ![][new] Boolean
Use `isBoolean()` or `is.boolean()` to check if **any** `value` is a `'boolean'` type or `Boolean` instance. The return value is a `boolean` value.

```typescript
// Imported function code.
const isBoolean: IsBoolean = (value: any): value is boolean =>
  value instanceof Boolean || ((value === true || value === false) && typeof value === 'boolean');
```

| Parameter | Type  | Description |
|-----------| :---: |-------------|
| value     | `any` | Any `value` to check if it's a `'boolean'` type or `Boolean` instance. |

[Example][is-boolean]


### Function
Use `isFunction()` or `is.function()` to check is **any** `value` a `'function'` type and `Function` instance. The return value is a `boolean` value.
```typescript
// Imported function code.
const isFunction: IsFunction = (value: any): value is Func => typeof value === 'function' && value instanceof Function;
```

| Parameter | Type  | Description |
|-----------| :---: |-------------|
| value     | `any` | Any `value` to check it's a `'function'` type and `Function` instance. |

[Example][is-function]


### Number
Use `isNumber()` or `is.number()` to check if **any** `value` is a '`number`' type or `Number` instance. The return value is a `boolean` value.

```typescript
// Imported function code.
const isNumber: IsNumber = (value: any): value is number =>
  typeof value === 'number' ? isFinite(value) : value instanceof Number;
```

| Parameter | Type  | Description |
|-----------| :---: |-------------|
| value     | `any` | Any ``value`` to check if it's a `'number'` type. |

[Example][is-number]


### Object
Use `isObject()` or `is.object()` to check if **any** `value` is a generic `'object'` type with possible existing `key` in it. The return value is a `boolean` value.

```typescript
// Imported function code.
const isObject: IsObject = <Obj = any>(value: any, key?: string): value is Obj =>
  typeof value === 'object' && value instanceof Object ? isString(key) ? key in value : true : false;
```
| Parameter | Type     | Description |
|-----------| :------: |-------------|
| value     | `any`    | Any `value` to check if it's a generic `'object'` type and `Object` instance. |
| key?      | `string` | Property name to find in argument `value`. |

[Example][is-object]


### Primitive
Use `isPrimitive()` or `is.primitive()` to check if **any** `value` is a generic `Type` type one of the primitive `'boolean'`, `'bigint'`, `'number'`, `'string'`, `'symbol'`, `'undefined'` type. The return value is a `boolean` value.

```typescript
// Imported function code.
const isPrimitive: IsPrimitive = <Type>(value: any, type: Primitives): value is Type => {
  if (isString(type)) {
    switch (type) {
      case 'bigint': return isBigInt(value);
      case 'boolean': return isBoolean(value);
      case 'number': return isNumber(value);
      case 'string': return isString(value);
      case 'symbol': return isSymbol(value);
      case 'undefined': return isUndefined(value);
    }
  }
};
```

| Parameter | Type         | Description  |
|-----------| :----------: |--------------|
| value     | `any`        | Any `value` to check if it's a generic `Type` type from on of the `type`. |
| type      | `Primitives` | One of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'`, `'symbol'`, `'undefined'` type to check `value`. | 

[Example][is-primitive]


### String
Use `isString()` or `is.string()` to check if **any** `value` is a `'string'` type or `String` instance.

```typescript
// Imported function code.
const isString: IsString = (value: any): value is string => value instanceof String || typeof value === 'string';
```

| Parameter | Type  | Description |
|-----------| :---: |-------------|
| value     | `any` | Any `value` to check if it's a `'string'` type or `String` instance. |

[Example][is-string]


### ![][new] Symbol
Use `isSymbol()` or `is.symbol()` to check if **any** `value` is a `'symbol'` type.

```typescript
// Imported function code.
const isSymbol: IsSymbol = (value: any): value is symbol => typeof value === 'symbol';
```

| Parameter | Type  | Description |
|-----------| :---: |-------------|
| value     | `any` | Any `value` to check if it's a `'symbol'` type. |

[Example][is-symbol]


### Type
Use `isType()` or ![][new] `is.type()` Check if **any** `value` is a generic `Type` type constructor, `'function'`, `'object'` or primitive type. The return value is a `boolean` value.

```typescript
// Imported function code.
const isType: IsType = <Type>(value: any, type: Types<Type>): value is Type => {
  if (isString(type)) {
    switch (type) {
      case 'bigint': return isBigInt(value);
      case 'boolean': return isBoolean(value);
      case 'function': return isFunction(value);
      case 'number': return isNumber(value);
      case 'object': return isObject<Type>(value);
      case 'string': return isString(value);
      case 'symbol': return isSymbol(value);
      case 'undefined': return isUndefined(value);
    }
  }
  return type ? isClass<Type>(value, type) : false;
};
```

| Parameter | Type          | Description |
|-----------| :-----------: |-------------|
| value     | `any`         | Any value to check it is a generic `Type` type from one of the `type`. |
| type      | `Types<Type>` | Generic constructor `Type`, `'function'`, `'object'` or one of the `Primitives` `'bigint'`, `'boolean'`, `'number'`, `'symbol'`, `'string'`, `'undefined'` to check `value` type. |

[Example][is-type]


### ![][new] Undefined
Use `isUndefined()` or `is.undefined()` to check if **any** `value` is a `'undefined'` type.

```typescript
// Imported function code.
const isUndefined: IsUndefined = (value: any): value is undefined => value === undefined && typeof value === 'undefined';
```

| Parameter | Type  | Description |
|-----------| :---: |-------------|
| value     | `any` | Any `value` to check if it's an `'undefined'` type. |

[Example][is-undefined]



## Guards
### Array guard
Use `guardArray()` or ![][new] `guard.is.array()` to guard the `value` to be generic `Array` `Type`. The return value is a `boolean` value.

```typescript
// Imported function code.
const guardArray: GuardArray = <Type>(value: Array<Type>): value is Array<Type> => isArray(value);
```

| Parameter | Type          | Description |
|-----------| :-----------: |-------------|
| value     | `Array<Type>` | Array generic `Type` type `value` to guard. |

[Example][guard-array]


### Function guard
Use `guardFunction()` or ![][new] `guard.is.function()` to guard the `func` value to be `Func` type. The return value is a `boolean` value.

```typescript
// Imported function code.
const guardFunction: GuardFunction = (func: Func): func is Func => isFunction(func);
```

| Parameter | Type   | Description  |
|-----------| :----: |--------------|
| func      | `Func` | Type `Func` value to guard. |

[Example][guard-function]


### Number guard
Use `guardNumber()` or ![][new] `guard.is.number()` to guard the `value` to be `number` type. The return value is a `boolean` value.

```typescript
// Imported function code.
const guardNumber: GuardNumber = (value: number): value is number => isNumber(value);
```

| Parameter | Type     | Description  |
|-----------| :------: |--------------|
| value     | `number` | Type `number` value to guard. |

[Example][guard-number]


### Object guard
Use `guardObject()` or ![][new] `guard.is.object()` to guard the `object` value to be a generic `Obj` type. The return value is a `boolean` value.

```typescript
// Imported function code.
const guardObject: GuardObject = <Obj>(object: Obj): object is Obj => isObject<Obj>(object);
```

| Parameter | Type  | Description |
|-----------| :---: |-------------|
| object    | `Obj` | Generic `Obj` type value to guard. |

[Example][guard-object]


### Object key guard
Use `guardObjectKey()` or ![][new] `guard.is.objectKey()` to guard the `object` to be generic `Obj` type and guard by finding `key` in the `object`. The return value is a `boolean` value.

```typescript
// Imported function code.
const guardObjectKey: GuardObjectKey = <Obj, Key extends keyof Obj>(object: Obj, key: Key): object is Obj =>
  guardObject<Obj>(object) ? isString(key) ? key in object : true : false;
```

| Parameter   | Type  | Description   |
|-------------| :---: |---------------|
| object      | `Obj` | Generic `Obj` value to guard and to find `key` value in.  |
| key         | `Key` | Value to find in `object`. |

[Example][guard-object-key]


### Primitive guard
Use `guardPrimitive()` or ![][new] `guard.is.primitive()` to guard the `value` to be a generic `Type` from one of the `Primitives`. The return value is a `boolean` value.

```typescript
// Imported function code.
const guardPrimitive: GuardPrimitive = <Type>(value: Type, type: Primitives): value is Type => isPrimitive(value, type);
```

| Parameter   | Type         | Description  |
|-------------| :----------: |--------------|
| value       | `Type`       | A generic `Type` type value to guard. |
| type        | `Primitives` | One of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'` to check `value`. |

[Example][guard-primitive]


### String guard
Use `guardString()` or ![][new] `guard.is.string()` to guard the `value` to be a `string` type. The return value is a `boolean` value.

```typescript
// Imported function code.
const guardString: GuardString = (value: string): value is string => isString(value);
```

| Parameter   | Type           | Description   |
|-------------|      :---:     |---------------|
| value       | `string`       | String type value to guard. |

[Example][guard-string]


### Generic type guard
Use `guardType()` or ![][new] `guard.is.type()` to guard the `value` to be a generic `Type` from one of the `Types` type. The return value is a `boolean` value.

```typescript
// Imported function code.
const guardType: GuardType = <Type>(value: Type, type: Types<Type>): value is Type => isType<Type>(value, type);
```

| Parameter   | Type           | Description   |
|-------------|      :---:     |---------------|
| value       | `Type`         | A generic `Type ` value to guard. |
| type        | `Types<Type>`  | Constructor generic `Type` or one of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'` to check `value`. |

[Example][guard-type]


## Types
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
```typescript
type Func = (...param: any) => any;
```
### Primitive
```typescript
type Primitive = boolean | bigint | null | number | string | symbol | undefined;
```
### Primitives
```typescript
type Primitives = 'bigint' | 'boolean' | 'number' | 'symbol' | 'string' | 'undefined';
```
### Types
Types is generic `Constructor` object and `Primitives`.
```typescript
type Types<Obj> = Constructor<Obj> | Primitives;
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

[new]: https://img.shields.io/badge/-new-red

[cd-readme-github]: https://github.com/angular-package/change-detection#readme

[prism-readme-github]: https://github.com/angular-package/prism#readme

[property-readme-github]: https://github.com/angular-package/property#readme

[ui-readme-github]: https://github.com/angular-package/ui#readme

[type-npm-svg]: https://badge.fury.io/js/%40angular-package%2Ftype.svg
[type-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftype
[type-readme-github]: https://github.com/angular-package/type#readme
[type-readme-npm]: https://www.npmjs.com/package/@angular-package/type#readme

[are-string]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAkgzgZWAJwJYDsDmUC8UAUAbgIYA2ArhAFxTHogCUuAfFCRdKnFHChpgG4AUKEhQACmgC2qYKkIRueAOQAjVJgzBlUAD5Q1Ae0OkIdHfuXpyU1RGQWDcELZOPlvNFnfl0AEwgAMwwIP2VhAGNDdF4oLiQvTBp4BP5cAnZKGjpGGkzObk80nFZ8uJjgOgiIQ0CoVKw9fVEaurKcDqc+b0jo2IiACwgIgGt0-BaaSVQZOQU4ABooADpV4mRMOGz6BhpVY1M6FigAbyEoKFNgKGRFclJrvBRKYQurqCkIYAHDP2TEbqCc48ADuskGBBaTDOFwuEWIcGgHkByhon2+v3S8UBAigqluxBGr1hAUCxHuwDRXx+fixAMSuPxZiJwIAvsDAoZkAQohVaBsoLV+ZtocCLrc4BT0uiafh1pgGMSLqg6vgJVKOngyaREaLYbCmYSlVB2RdTTcvuRkOgLZKHsJWb0+esIA1sHh8KtlvKtrQdnsDmYbSUoINhiN8MjEsoll6fYqhEIAPRJqAANXWqGIqlMcCEvNiCAAKgAlGAAOQA4gB9NMAQQAMgBVACi6WUDa5ECkcTAkqkAH5wvm+tdy02ALIAIRbJdrjdb6QATAB2J2xKcAeU3DZbdfL8+bba1ZER6+uTfLABEWwAxCstq+H1vVosAdU36V8pJCfmE70vG973LR9nxbYQRxiEwIGWUhDEwOVbjdfBALvB8n3rI8lmLMsqzApZx2nWd8KgLcdz3A9MNbBhFSgFMoG1RFILgaDYPgxDXUBfAcIrGsqJbbDS14sCaNxejnggZjWLghCXWQni8P4wTcL4hcBNI7dd33ETaPoxjJILaT2LkriFNUrCNPI7SlPqITFLU0S6NTfSgA

[is-array]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBACgTgSwLYOAgbtAvFARge3wBsIBDAOygB88EBzBc4aqcgVyKJfaVwjhYBnYInJ0hIXsRZtyAEwgAzRhDkBuAFChIUAJKCAgnDikQUHAAp0pImwgAuKBRABKcwD4o129ASCoRiYgADzO7poAxvjkwlB+gaaO+glmOMEAKuAQ7lY2do7OLo7ednH+KRlZnlieKQB08camuT5uAGRtXnm+McAUERD4igFNIJHRsQDK6QBKugByAOLmUADkADL4cBBIcWCCbEgA-KvjvVDzAKoAsgBCAKIzKwBMAOxnsbcA8l-r9wbzFaKGyCCAfZiXeYAEXuADEFvcoStZAplORVOCAjMZgYAJrTOZLRwVYSiOjVKAAbVWpFWABo1rh6WsIqsALqYgzYvFXO6PYmjYI8PhwCmUgCMDOeDIAzByNFFzlycbiYHNrrp0roAGr3AVBYLwZCoDDZFaUtakxh0ZlvBkiUryxWxABSky+8wA+tqDOtLvcVgBvRSERzi54ygC+H2IEDqRHwdAsAAMCQtFsmGY0ghY00sXC41FAAPTFqDAoighUTWPxxMp3kPGaZsopCyNx4Foul8sg6DVmK1hNJ5PfX7-eYt7PNMd-AFdktlitV51D+vJyEw+HzRFTwyjCybuEIqELnvLiADwRrkfKvF5jNZ-c5u-42bps9lh2X1ckOu37lcQ7ZsnzbV9gM-KBvyvG8U1fNVdA1LVdT3MDAIQpCdXuSDoN-ONhxTN0PW9X1-VQg8iK9H0-WwwtF17StLyAA

[is-bigint]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAkgzgIQJYHMYDthQLxQBQBuAhgDYCuEAXFEeiAJQ4B8Ux50ScUARqkpgG4AUAGMA9ujhZOyNJmrxZGLLkKkK1Wg2psKUTjz6ZmUUJDEAzVuujY7UAOS8U-YA+HjJWAMoAVAEowAHIA4gD6AGoAggAyAKoAojiOMWIAThAAtvpgcGSZAPzuohJSUEFxALIICf6RsYnJAEwA7B6lWAgA8l0xCVFB9fFJuBakcBDtXlAIMCHBvkONuACcAAxrLQCMKytNAKwALC2Ha7tb6FNwYiQQAHQkYih4AAZ+gaFLCS8ANPqIqGUeHewXC0WG9HoAigAHoYVAxiQJiVJDd7o9ni8KtVal9fv8lJg8NianVwYlIdC4QjxhAUddbg8nq9ur1+oNyd8-jJAUTWX0Bl9KbD4YjkZ4GejmS9ZvMgotOfieXJgHhZQshVCRaY0hQhEA

[is-boolean]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAkgzgIQPZIDYQIYDsoF4oAUAbhqgK4QBcU2IAlHgHxQnnQCWcUARiutgG4AUAGMkWOMCidkaTFmrxZ-HPmKkK1WnWqsK0rrznYmQqCw0cJwbCIhIAZlGXyoAHzeF1bPLnzAAJ30PCx8-fAdSOAgGADJYqFBIR1D9cKgAciMVDLphUXFJKABlABUAJRgAOQBxPEyAGSQAiABbaTA4MlaAfgzhMWsoKoBVAFkEAFFy+oAmAHYBwqkEAHlVhsmAQSr6yNRopaG1je2qgH0Kkcn6wIojopPNnfPqsp2AYRv8LAgAd2cfHkBH20TyQgKEjkADpUEgAOYEAAGZUqtSRABoDC5sARUdUanQ8lAAPQkqCgiCQuAwuGIpGjCbTTHYoG4xlTcpEgSk8mU6m0hHIp5nFkyNlYAginbc3mJIJUwY09CwoVI6UXK6TMWICVS9bPTXla6ysnyigClV04UGs6vKrvKpfHU4yUa+2Or6m8l3KlAA

[is-class]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAwg9gOwM7AE4FcDGw6oDwAq4EAfFALxQIQDuUAFAHTMCGqA5kgFxQsIgBtALoBKCmSKQA3AChQkKAEkkMADYskSClDwB5AEYArEvQBuLVegg8+IADRR512IhQZsuPUZJjyZc5bQAJZaBoaymK7AUCEAymhBCOzaZhZWNvwiPAFWMVpuicl+UDnByMB8mBBwAGZQ8aiFUAA+zY7EtSVp0OS9UADkBUn9EVF5ahrcSirqmtpexqmBGfbtkDzw5e44+GE+2d15UGHiXYEx5ZXVdU5QAGR3eQ2F9E6MYKhwOG+RW1g7jAQLAAthARLIZJhZlpYnBQRM5gBvKAAD20AEYAEwAdikUAAvpDoVACDQ4AitMiQNp+gAZXAQYExMBIdDAkYEmQyAD03KgADU2EEWPpVBAkJCxrECAAlRQAOQA4gB9fkAQVpAFUAKI0+moRnM1nAgD8I0l5Sg8s1AFkAELamWqjU67Q40aWu26XS07Vq+XOrW6yg1CxICAelBQTXygAi2oAYgrtbHAzrlQQAOq6bToBAAEwgNUSEHzsjF0Rj8aT8pTae1keisV0Nu1MFpatisW01DosPh0Po4ItUazunbne7lF7JLJFKHEN+SDgYsYqjg7HoIQpeH7EApJjHE67Dj3FJE4KgvKgodU4ZHK4ga43W5mk13cP30JMzdbx9ip6fuel7XmgVgPqu66btu0IfgOkyHtm-4OKS5LQheeKgRgEBckAA

[is-function]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAYgrgOwMZQLxQBQDodgIYBOeAtgFxR4IgCUaAfBVQNwBQokUAkgM7zLABLAPYI0mAG54ANnAjlKNelEkzoA7rERJWSEd2BR1fJIJHkex06PQYVs+VWrk7ajcaXsIQgGbLpstFR0AHJvLStgqAAyKL9VQwR9SiQvX0thBB0pPG4NAGE9YAI4EyECPOzcqABvKAAPMQBWJigAXxZdRIMAIQB5XoAZAFEAQQA5MSLZHUKobs4AcU4xgBUxAE4ABk2AdgBGdfWAJkaAFh3TzcO9zI7ZsYBVAFluoYAlMT2jnZmuqABlFZvZYLMTBJ4gKAIODEABGEAIhm4wV++lgDzGeXI7hsdXI0LhCKcjEhqAYtQIEGAcAIogaAGooM02nc-stAeM8kMxAgIAB3KAFLrFUrlSrcDDUVFCKQQLBSIQAcwwAAMhfoRcAyhUctwVQAaJHpEQYdVTUU63LUKVQAD0tqgUwgrO4MrlCuVwXmS1WwUNRnCGQw3uWK2tLXtUG80m4zs6rtl8qVGC9-WG4z9RsDJr6g1GY3Ddod0aksZdbqTnseL3emYD-CD1deb0LkZLZfjFY9KcBwLGCzrvGzCAwvZBreLMbjei7yZVMAxeQNWYbJoXmInjuK08Ss897JWnKGg+NI4PR837YgQA

[is-number]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAkgzgOQK4FsBGEBOUC8UAUAbgIYA2SEAXFMQHYgCUuAfFCedAJZxS2oaYA3ACgAxgHtacYFG7J0WavHkDcBdhWp1G1DVx58F2HM2FQooSOIBmbMhVw48AckMDnUAPyy4AMU60nMAQRPYQTLphslLAdKIQNlAqWCISMVAAygAqAEowCADiAPoAagCCADIAqgCias4V4pgQKLJgcKiezqmS0klVALIAQjU5pZW1agBMAOw96UMA8osVNWUI49V1eNZkcBDzfUMwBflZm5N4AJwADDczAIxXV1MArAAsM+83zw+0h+JSBAAHSkcQAc3wAANsnlChcalCADQ+ZKYfCw-LFcpbBgMQRQAD0hKgu1I+zEvUBILBkKhCEGIzGONqyNR-Cw+AZw1GCLxBOJFkwFEpUmpoIh0KWKzWGxZiJRcg56Olq3WfPxRJJZIpaTg4tpUpOZwRbKVRnwx1OCHO8v5WtJewgwiAA

[is-object]: https://www.typescriptlang.org/play?jsx=0#code/JYOwLgpgTgZghgYwgAgPICMBWEFgJLjTxLIDeyAHgFzIgCuAtutANzIC+AUKJLIiqjAALaBmy4yyAOY16TVh05gAngAcUAMTogEyALzIAFADpTquFDgMacEMoCU+gHzJbylkrUo8AZzE4wfWQAHjEnQwA3OAAbOggbOwAaZABrCGUAfhofMChQKUc9FyjYlGAfNCwPTgQAexAc5HKAZVz8oMiYuISHGhK4poqcvJApZ2QVdVqYZH6UPQXkAHJh-KWPOobA8v9cGl9dwINQrCC3cLme5LTM7LbR+z6usoqxZ05kCa9p2ef9RaWtSwASWyAAZGDfqUmltbEgfodkBlBq0RlJDDdHMibjCoQMaLl8ch4NEfBAPJ8atE4D4KgBherDOi4WpQOnU2mSChBACsbC4m0adNQADlmgAVABKAFU6eLUJKAPp0gAyAEFms0giAIAB3ZAMrZQZlgVnsmk+Qz2DaMwIAKWaosVqAAQnaAKJymiHAi8YjzLk0ADMikFgQ00pFdJoWh0HWotEYzCgj1cdnGFBtW2QLtQqBV7rVIqChPJnBqjNq0QgxmitXRAANDUyWWyOT4G8kdsDcMFm4TW+baeFhWKpbL5UrVRrmvZrcgAPQLibGiAVhpVmt1xsOp2uj1yzuDQ6hYSiHtgcK7kXOt2e8VzthLldxdc+Te1+uGBsRqNH7viGAwSxgg4S-nSj6LsuJJkm+H7bt+o4SjKcoKsq6qagA2hQAC6-5+Befa2sag7tiOorIROaHTpqyRLBQSyQc+pZwdWn47o6N77vemHKHhXYEYBp4iFAhxXpxt4HuKdHKIx87PjBa6CvBX4-pGdLYfxx6ESBYHqXRDFMdBMSwcpbEIQ2ub5oWIr4Se5yGFZBZFkZxImWuQA

[is-primitive]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBACgTgSwLYOAgbhAzlAvFAcgCMEBzBAO2AKgB9CiB7RgGwgEMKb6CKBXJEQhxuhLCEGtRBLMEQVS0vhQAmEAGaUIKggG4AUKEhQAklnjJUGaPgA8AFXAQAfAAp07FnwgAuKJxAAGigjX1hEFDRMLABKPGcoDy9oBBxHSAMAY0YKWShUgGU5SlI8KHdPbz8AmL8k73ycWXlS3AT6lNzgTkyIRnUoIpa6elD+xMqbXHwZYoU9fWyuxoAhMhMqMork6ooQWonkxqgSck22kKdxjrxphjJKaiycvNSV5jZOLY7d-brJ45MVgcCjxQ4NSiyHp9AbvYFfWj0VzbBrTfByBqI8FTfDqTxYCBxABkRMukGuALRDA+IIIMWey1SADkBEI4N9Jr8DjdUlB+IJhGCxgMblTeKzhDQAPyNABilFQEBRhKg-yOkO6FF64xZArgDNeWAKEiYLA5O38e25AN54kkZouwuxtxmdtNCyWhoAqqoNFoVOaqpa-s7eco1JoKNowaK7uG-VGAySyTDnWL45HtAtFi9gI0LJFrH4zAWrJgyg4nG4fsHgqE-KWothreq0k4wQBvfRQfIDVyFOakVyhGJxLs9ntYADuqEyAAtyiOoOOJz3MuwCfcztQ-HAIMA+HBQW91lRlfTu6uoOvN8QaZwCLv94fj1g4Z8KOeDFfrxvoOK9UfKA9wPI9Gl1Nkv0vVcb3-ZoSiAkCX0aIYSign9YLEE0pCfUDX2Ne10KvTCCAzf1EOfMDUh9CN-SInsAF9LyYnskLAgBCMjEwMBiDTzFYAHkBIAGQAUQAQSZMo8RYAk+KgFYTAAcRMJl7DKABOAAGLSAHYAEYNI0gAmABWAAWXTzK0oz9IoeSmS9ABZFZRIAJTKfTjN0+SCnsNzVKUsoCCckA+QldlUg9XMoC9JkABFRNlVTRPisouO0XyAE0XJEsoCNNVxSN9TMdAvT1gQAOhYRghwAA0UlS1Lq4JUkbaxbFOR43Ea1T7GCYgHioOl6SgAB6MaQjgbwc1yKqavqwSRIkpkWvzCIywgWx4IUHqhLEySBqBD8Rt0cbJoxCBZqwebatcOrHJc9y1rajam1sfk2TcR7XLcgbPslUczomqaZoqthqruuq-ICpklJe8w3o6nbSDcGHAoGlHTvO0GrvBiBIfqgocsE4SEfazBtuwlg0ZJkTMep7GQcu67bvquLEuSplUvJpHKYylQ3A5pKUvigaBaZi7pqu1mIYW+6fue1rEcsd6uqob7nN+o6huoIGcZkglZYJ+WHq1pX1tV5HB01p6-rEQdJagQ28ZeNn7vRuHeatynjpBNH-Ix6l4S4fWQZd43CY9wOveVimtoBuAA9hpT-oip2I6AA

[is-string]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAkgzgZWAJwJYDsDmUC8UAUAbgIYA2ArhAFxTHogCUuAfFCRdKnFHChpgG4AUAGMA9ul5QuSNFhrxZ-XAXaUadRjTWduvOdhysd0ycDoiIYgGZQlWKAB9HUUJBtsylXDjwByfX4-YVEJKQQAFQAlGAA5AHEVPwAZMWQIAFtpMDhyDIB+YNCzKFiAVQBZACEAUSiVACYAdmFxEqqAeQ7kmoBBWJVrMjgIVrDgUpqAdUiYhJV0CAB3Oz4sfBS0zOzcrIAjUmIjgAs-BhC2uDFSCAA6UjFMfAADWbj454AaaUQ1p7eEgxzlAAPQg1zISjFK43e6PF7lap1L4-exPRG1KJAgSg8FDUgjaHXO4PJ7PTrdPqxFEyP74Ck9frY3FQfGEy7EuFk2LTAEfb60gz4HkzaLvZlgqAAEQgwAgIgmS1QwGOpl4Fis1iEQA

[is-symbol]: https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAygTwLYCMQBsYF4YAUAbgIZYCuApgFwwljICUtpFl8EMEamOuAfDCjIADpRAAzGKyp5c+AOTcM2BQG4AUBtCRYiACoAlAJIA5AOJ4YCgDIgATpVTwREcqgD867eGgxTAKoAsgBCAKKGVgBMAOyaOn4hAPJJNmEAgqZWEmQQlPG+sKZhAOoGJhZWYJQA7jCIUPZwYADmBLYOTi5uzuhYJAMAFgqMBbr1AJqhqVYoKljtAApNpFCUI5o+kNiUAHRYIG0ABuVm5kcANBxzvASnFoyjMAD0z0L2VFsQO-uHBEeBUIRS7XHjYAiA8KGR5qF5vHJYPJfH4HY7JVIZUwghA3cHotKZGFwmAIpEJFF-AGle7nK44sELYplIxnImvEm5SjIrB7VH-RBTZI2bFIBl3QWpNlvRpUIA

[is-type]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAwg9gOwM7AE4FcDGw6oDwAq4EAfFALxQIQDuUAFAHTMCGqA5kgFxQsIgBtALoBKCmSKQA3AChQkKAAVUASwC2K4CoBuEJBSgByAEYr2KhMENQAPkeNw4AGwh9rdwwnRrjEVO6MkEB9nAMMUVQR2MPQEABMIADMLCDjDWXloADFYzAMmZjA2FjUePhAxcjJyjOIoST08AHljACsySnhkNCwcfBb22yNE3K1EMLg2iGwA5XVNHT1ahQBJJAaDQmISem0WJ3QIMv4AGihMngakLcgSSrI9g+gVfQbZC2A-RJZMaCaVqAAbygAA8eF4fH4oABfd6WL4-P7-IFQEA8CIWdgw2QyTCIFBQF4AITMK0s+Ueh2OFR4lOe+lM5nJVXOxDgiSgdIo5EoJjMH3SuPxwEJSCJjhcfAp+ypvH4IlpMvpUAczlcCHEnKVhO6fF+7Kg4rVUpsdnou21PMoPWgpq1T25lG+TiQEDEADJ3azIAauVb7BL1YYRLI8d1RTAnCwkPpKM02jtJq1psBqWcLrBhRhsLh4+0FVAkynRVABpqi9gdSg9RADZlQ8LRQA5by+VDSp7Ugtcl5UVtQlmZX2WnlGCFt6wAflFWQsmggFqeYkVDos1YQ+o5LchqAb4ZeAGU0JiO7Lyt3tb2MVFNUOOX7R+Fj1FBWGCS8AKrxJIpOKno5yjS9qHCWsQJMk1B-iyD6UGBP6QVAnrerW94jrycEQakr6Ni8AzFnGZaUOUOx0mmUAANYQCAk7os+7AXqu+iEWQd7AdA-qGBWViIV6Pa6huKGllMlbToedH0JRFRQNOkk6mxUA8DaClQM6rp7u+SA5BuYwapQi5nvKK4gb2Wl5IObKoQ6HEjNpKjjDx8lrsANYGqZOnqSKh7BA4Tj-l2RnKkEIS+eZPqWSBHFBT5gpCvu6zEDwawbHGDQkUqZEZlcNykAxxmvHULKAjIUCEhy9BiZE7D0JkIhiEVJUlUgNCaJgAAWDA1UCxUNSVmDRtAfJMlYPCoBAwDoKgGrEqSlj6W6sg9b1-UBsaCCGCNY0TVNYqBnwc0ht1PV9a6wyjHZa0beNk0zmdiD7Qti3HQN45+OtUCjVd23bm292HQ1T1GFxb0fVtop4dg2VpUuD1HctT6VcDm3XRVmK-YtUAA+E3mhJdoNecFaOPXDGG-ojn2il+4G-oTJXQt1dMlSD12ZNJEZRjGkNzemxDLip+xqTIsIyLi7P6AecBqBAkbRvowIggYACMUgwhjotQOLksEDQcDSzGKIgAYABMyt02+IowE0TYHgQABKH4wAQTQ2wY1B0BrUui-QB1m7AlvW3bDtOwQADqTQu7Q6sSxAWs6573uNkSTRNAAMgAogAgk2BiqRAHmGisADiKxNgQBgAJwAAwVwA7ArZdl4bACsAAs1fNxX9cKwgedZB+TYwDwpn5GCfY7vcoJQAA1FASuxQSTYfgAskSqfO5QCuG9XedNESABSqcOzwyKUHLPAK9ic8ijv++BwQAASq9H8f+s8Jx1DWELPv+8XBcGIYi8Gxeu2F42FwwHgAJrLxTgYA82MnD0EMGoEAwY859wACKpyyMXVOaCDAk0gjiN8apGBODgFVAABhbK2tt7aOxtuQs4LwGh4HdrrJAOwqH+1oUHUOZxWGi1qsrAA9EIvmLoIBz2IaQihicU4ZybAw0UzDVSSgQDsWRadM5nBMLtNagioAiPOBgCRRCXAkLIfQchRJC7FwIIophxA8DXnYOomxJdtGMgFPowxNpJFmOkZYhey9V72PipAPAQCdhBJXjbbRQDgwhgMaI3xpiIDmIob3fuoTmGmR2JkmA2ibLYHOgk4RyTjF+LSQE8h38mwF2yY45xOxakF20c40pSSjGHEqekyx18D52MYWEiAzR-g7H6Q7bRQNvHlO6ak3pNTIGJ2Tg08JTT6AQKgcnNpcCOk+IqfM6p6DMHYLQashcxysFNhwdo-BWEZldIkUAA

[is-undefined]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAkgzgVQHYBMIDMCWSIqgXigAoA3AQwBsBXCALijKRAEoCA+Kc66TOKK1Bmy4A3ACgAxgHskcYFF7I0WHCnrwlQ1QWJca9Ri3p6efAcuF58HEwXyFzW3FABkLqKEhT0nSjTuEAOSOKriB4pIyclAAygAqAEowAHIA4jqBADJSAE4QALYKYHBU+QD84ZGy8skIALIAQgCiCToATADs4tLVUA0A8v2ZTQCCyTrolHAQ4hQQ8nPAIZbdUfIIyQAiTQBiKU2bOsuqET1wUnMAdBRSAOZEAAbxSWkPADQKiIKhKETPKalmMwRFAAPSgqCTCjTKrnK43e4PWqNFrvT6aH5EZHNBJAkHgyFTCCwi4Qa53R4DIajZJoxTfSxEKnDMZ4sEQqEws6k8mIxbHXB0r4WVREfkM1RsgnAHI0EnwikPDbbPbJA5CjGM5W7fabKUcoliIA

[guard-array]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBACgTgSwLYOAgbtAvFARge3wBsIBDAOygB88EBzBc4aqcgVyKJfaVwjhYBnYInJ0hIXsRZtyAEwgAzRhDkBuAFABjfOWFQEggIJw4pEFBwAKdKSJsIALigUQASme370Q1BNmQAB5XAD5LMP9zADpDSJAbOwc3KAAyFKgvBwM9YAotCHxFP1NzTR0cqDo2Ujg5OMsoQIAVcAgQhO9nOObWkI8MxJ9BYoCeyDCsMNiS+MyIN01tXX0AZSaAJQBJADkAcQB9ADUjABkAVQBRBoByE-w4CCQDMEE2JAB+a7Ll5m2zgFkAEIXdZHU6XBoAJgA7N8KoCAPIIk4XIzbMHnK44RR2QQQOH6M7bAAiFwAYjsLsSMRCcLIFMpyKoCcwjOt1kYAJr7NZbPY0i5dGaBYSiOgTKAAbWupGuABooNdcPLFVprgBdFl+dlc-Z-IEggVC0Y8PhwCWSmEKgDM0Jt1s1SwqbI53JgW3+myam0OFyNI3MgXgyFQGDaDUlitFjDoKqtUBEWUd5X0Lt1RNJFO2VP93XpShUcgt+cZqgVJcL5fkBaZcmTPygACkVgj0cdMQ0AN6KQjOACMkOtAF9FiniBAokR8HQrAADNNuj1en1+9uXWcKqo1OrC4MoNCYdoL-buzae72+gVuBZQAD0t4TcAcTsE48n07nx-1wNBa4uG8qapam6U1+CPHVuW-Q0-2vNQ7wfRMIBfN8pxnecIJ5DYdgOP8AK3YDhWjMRwNdTC+Rw8ELlg+DH2fMcSHfNDjwzclKWpXDNyAndRgrWsSPTElWOzdjKOo+9aKQ5CGNQudeWwgU8K47oiPFKw5P5GCb3EnEiDxKSJxk2coN-SjFO3EC3jNdpjKvLSHx0vT6IMj9Z0RZFUTbUzOPM4UCHHCh2jclE0VsuDtNxJCnMYucWKzHMOMAnyeOrUsiysWK2NCmiHMi5YUJc5tWwU7yCNGfBcAAKwgLRgHaQrPMxMT7IijQgA

[guard-function]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAYgrgOwMZQLxQBQDodgIYBOeAtgFxR4IgCUaAfBVQNwBQSA9ggM7BQCWXeMmB9OaTADc8AGzgRylGuSmzoA2IhSoGoSOwBmUFXLSp0Acn2aRnc1ABk9ozJN9uwSkggGNw0QlYOdygAczhCABMhJBsEcQwrZHJo6nJElHVo+n5Ba38EzWpWNk4eKAAhAHlKgBkAUQBBADkAfQA1BpqAVTrxfRkuCEDS3nKASQBxMaaAFXbOnvEATgAGFYB2AEYlpYAmAFYAFnXDlZ3NgJLgpq6AWXK6gCV57t70Td314eCAZRnH6YTF6LCy3EBQBBwYgAIwgBBy5mKQTKMC6TQAwjMxpVWjMAJoABTqyU08QAHuRITC4alGODtFAAN5QAgQYBwAhxMlQADUUH2TCgAF82NI8FwuFB0SMCHAYuwCOixRKmVBuegBcKrmV0Ti-o8upjKs90TUGj8fuIEBAAO5SmVy4AKpXirgYIosbXsaQQLDSdghDAAA1RGKxOJa+KJQYANKFwgQonlOBhQ5jsbjCXVqEUoAB6PNQYCyiCe5He33+wNB6XuWXyxXKrix+ORaKxDC1nj1p2N105wUFoslqDQuC8PgTyUIdi8LIzcCl8s+v0BjDmXVNfWGmbGlqm80-cxxsJt5MITt6-47vcHi0D-OF-rSQZeldV9dVWqNVodV7H1tE3bfIv3qZpgWzXMh2fV9l0rNdzBue4ngggDTyA88MCQh5nj-HoH2ggZSyAA

[guard-number]: https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAcgVwLYCMCmAnGBeGACgDcBDAG2UwC4ZSwBPASlrMs3ghjDS1zwB8MKAwAOmEADMYbKvjwEA5Dww5FMAGQbOAMThg4UTCQpUmAbgBQoSLADmyUtgAmKVfyKya3XjhYzTDgQfd3whBDc+E3YLS2twaBhEAFUAWQAhAFEAJQB9AHlETPwYACYAdisbRJSMnNyAFQB1fJKARgqqhNharLyGgAlszOKCUs742yS0vtydfOTsksUAZgrFK0mIEHJMADpyEDtCAANe+sLMk4AaGAcnV19sQnO8y6ZY6p39w+OzmfqzXyNzujhckRwLwB-RaHy6kG+ByOp1ejSGIxB93BTyhdX66MycK2iN+KOhcwW2UxYMe7lxs3mizhMAA9CzQQ8YAB3EDYADWEEsQA

[guard-object]: https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAylATnMBzGBeGAKANwEMAbAVwFMAuGIsATwEobjyL4IZo1McA+GFHoAHCiABmMVpRzZcAcm7oM8gNwAoUJFgIA8gCMAVhWCxcAHgOG+hUpRp16AGhgBrCvQD8NJZmZS7dgQYK35BETFJaXY5BRAjEyh5GAAyFIC2eG06YEiQhNMYTw5kHgw8dyYitw8sjJkaVAaYcVIICg0taBgMMiIUABMrRJwYSyMbeONTGit-KZHg0OwBPQKoces8BdNGDU1wboAhXV0AGQBRAEEAOQB9ADUrs4BVC9Gmjs0SIghOXTAFAAwj8-jAAN4wAAeowAjKoYABfGBdWC6G4XO5As5XRCIUaAgDuIUBIN+EDwe2+5JgABVCSAyWDIfQPihKAjkai6QB1XRYnF4gkUYn0xmgilU9BQCgoVq5fLTKAA9iQqE0MBkAC2+llnIR3N0RwAUhcgbS7uiLrN1irRmqaABWJEaaWy+XsYamMUQmD0DXa3UofUow5ok1mi20vk2pU+3Asp0u9QHSAgEgUAB0JBA5QABidztd7k9Xhc8y5ev0hutLKSJTZC5dbo9nm9GHsYAB6LstNpZ1MQdNZnP5gDifUGdIZTIgFZ6k5rSvMYtnNitAtxiA7CJ7C+rMAZKFcEAAhIJ2ewKAQKGB4JIq1OjyfM4Ph9nc3g8xODyrZ-PHyXRI62BBs8GjflsS3Hdu17QDDxAY8zwvGRr1ve99yfRCXzfDMP3zVcJQAxcvQ2QjyRsCDNzxGC90+V8unfUcv1IlViOrUjNkSFV1wjc1LQxWje3o3CR0-b9F0VRIxXYwZONIsVeNNfirSEzCBgQpDz0+GA0LvOAH0k58IFfIA

[guard-object-key]: https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAylATnMBzGBeGAKANwEMAbAVwFMAuGIsATwEobjyL4IZo1McA+GFHoAHCiABmMVpRzZcAcm7oM8gNwAoUJFgIA8gCMAVhWCxcAHgOG+hUpRp16AGhgBrCvQD8NJZmZS7dgQYK35BETFJaXY5BRAjEyh5GAAyFIC2eG06YEiQhNMYTw5kHgw8dyYitw8sjJkaVAaYcVIICg0taBgMMiIUABMrRJwYSyMbeONTGit-KZHg0OwBPQKoces8BdNGTvBu3v6h9YBpWosrF3P6GAoADygKMAHOSol8rZ2oWaMXSpoN3m6w4n346hgPT6g2Gpk2k3WjGqCFKygqHiRxUqdW+MEaKGarRI7U6JCIEE4ujAFAAwmSKTAAN4we6jACMqhgt1wACZOQBfGBdWC6AByAFEAPo0gAyAEFEIhRtSAO4hal08kQPB7TT0zgAFRVIE1DOZ3MEBI6MEFwpgBoA6rppfLFcqKGqjSb9TqNOgnihWrlPokqexmfcaGAyABbfQUFCc+hR2PxxM2zl23QAIQAUuKaQbJWLxb9plAw6MIzQAKwuZMwHkAdgz6n9CaD7FhUC9TK5KbjCYFmYOIrzBaLjt0ZcSvdw5trra6IBIFAAdCQQOUAAYAcWhA3VtP1AG16ABdGAquBQAAWIQlLoViDP5+3LiOMLOHksGv1Lnkeh5BsEsn0VACgMYPYYAAehgy1KDXGBxQIBN6DvZRQXEdB100A4V3XTcd33Y4j1NCBXyvG97ynMCXwvd8oWObsbl-Y8tQg4C8Fo2Vn04qDOTg+0IiYwYyP1K8QBQVwICQmlbxMVxJOk2SENw5dVw3Lc8D3A9xK1E8AC9L2vO8HylXjFVfRjPxOctWLDciAMMrjQMsxB+OgoSDRE2z9IZYQUBAUQUCEZSZLkhTgCU40VKQpp1PwzSiJ0kixMc09jKosy3NdF9jJsg8WJ-DKOJgeR7lcx93Oc+QBNg+CfNEUTD1KhlYoimB5MU8LVKJdo1zwyACK04i9O7MMT3uEzqJCcdC2LCUprfD8iu-ehNlDakAMqkD5qLEsdrqrz4JQtCMN4YJsOpeKrUGjTCO03TSIm6kjJmnL9slKdrNW5j1s20ww1qvb8wWqdPMExrfL0wLgoTMKOtU7rot627EPUIA

[guard-primitive]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBACgTgSwLYOAgbhAzlAvFAcgCMB7EgGwgEMA7AqAH0KIQHMEbh6mCaBXJEQhxuhLMEQ1WBANwAoAMYka4qAizxkqDNHwAeACrgIAPgAU6KuT4QAXFFogANFFCR7mlGkxYAlPctraHUoI0g8E1djEgAzKECbPFx8Nwh5JRVgKFY+KjgAE09tTDwoQ2NzBLtQ4xdUj0QvHT8Aq0SQsN1I9SLvCAs2iDrjX3TlVQAhAHkpgBkAUQBBADkAfQA1RdmAVXnSmKssNMVxrImASQBxc+WDDa3d0oBOAAYXgHYARiengCYAVgALO9AS8fp8aGNMlBltsALITeYAJXuOz2+E+v3eUNUAGUDEibpdUY98AQ4SAoPxBMI1FhZCcVBQIAA6cgkVhmAAG0zmSzWmzRXJcOTyhUaxQgelIzNo5l5CxWJPmLmIZEotAIvlGUAA9LrXHAbIysMy2RzuRdrrdlcLsrkCr0dNK2BxgPKrjc7oLdqqWOxOFqdfrDcaMqbKObOVzYQjkbaRQ7xVo+npqUI4OZY4iUT6VYR08IgzI9QaJGHxmb2dH8YTlsS83bRY6JanxJJWOZa0Tlar2xxpNqSyHyxATVWLTyZoqBQ95k2k07MNL1dQaF2CT2837V5qh6WoAdyEdx5Hq5bPTbG4mxUupf63Vn4Tne8xXYH9yGjyfwxPo9n42ve1b1bZ1C0zMxu3rV9eAEDNiwPb8x1-M9Jyghs5wXECU2dfspCfONcznPsJAHBCv0OMcgA

[guard-string]: https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAylATnMBzGBeGAKANwEMAbAVwFMAuGIsATwEobjyL4IZo1McA+GFHoAHCiABmMVpRzZcAcm7oM8gNwAoUJFgYyRFABNkPLLkKlKNJZmZSL7BF1TL+HY8vNtGGzeGgxEABUAJQBJADkAcQB9ADUAQQAZAFUAURwYeUSQFAoAW3hhCDI8gH41X20YcOSAWQAhVOC4pLSMgCYAdg0tf3qAeX7E1PjwlpT03HFSCAofXpASCgA6EhAMPAADILCo8bTNgBoYXX0jZ0w8HYiYhInGbxgAeifBFEpKiEWVtY3NmoaTX2qSOJz0hnclwBjWadzSD1Uz1e0xIs0+31W6y2AyGIzGcJBx1OEIuGxxw1GwIRSJgKLRQA

[guard-type]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAwg9gOwM7AE4FcDGw6oDwAq4EAfFALxQIQDuUAFAHTMCGqA5kgFxQsIgBtALoBKCmSKQA3AChQkKAAVUASwC2K4CoBuEJBSgByAEZw4AGwh9DUAD5HjK9ioTAb9wwnRrjEVO6MUVQR2Q1l5aEk9PAB5YwArMkp4ZDQsHHw4xLslVQ0tXSRZTEQUKBUkKINCYgM+EBJ6bRZzdAgeeoAaKAieKKQayBIRHmbW6AqoKvIyegi4ADMe2vJVwLQXULEAfgZ5pbG2ijWIsVGWo5cUPkwIReXpGRLUqHZ0NgATaahB0iaL9pTYjdXpAyADKLDc7jcr6aZkCpRX6NQ4QEHEETFcwsJD6FJBdBoOAwbG4qAAbygAA8DABGKRQAC+T1KwFgABkAIIAZW5AH0AGqc9kAVQAogZqHR8WkiSScUh6JiWS8AEIxGLssWcgByguF4oMCxaSAgxVZUFVAEkAOJWnUEfWiiWUACcAAZ3QB2Wmu10AJgArAAWL3B91+2kIc0vHUigCyqrFACUnYbKLT-V6Y2VuQRk-abWmXUZ4yAqN5fKhYWEVUgLBBGOY4Ox6AADGUYOWkpBt7pvT5IzuE1DEnuNGBc3nF7rD7sKkSYqAAemXPQwEDrDabLfb6s12r1Qudfde71QX2IeFMDb4jX3Wt1M4cZks1kXDNX67aW8sO9bbbWnaDrFqeA4XkiQSbPetr2o6x7it0JhOC4bgfiua5pJuzz1n+zYAXGiYpnyBAABLJmKYpgeel6QHgXg+H4jSEUmqYIWKSEMVWhjoV+WG-o2+HtixxEAGIxCKybUYOV5QSEjR5gWOpFuxSFyVsS58RuMhAA
