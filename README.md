# Packages

Useful packages written on [angular.io](https://angular.io/) framework.

| Package          | Description                                                                              | Status        | Readme      |
|------------------|------------------------------------------------------------------------------------------|---------------|-------------|
| change-detection | Improve application performance.                                                         | *In Progress* | [Readme][0] |
| prism            | `Prism` highlighter module.                                                              | *In Progress* | [Readme][1] |
| ui               | User interface based on **[Spectre.css](https://github.com/picturepan2/spectre)**.       | *In Progress* | [Readme][2] |
| type             | Common types, type guards and checkers.                                                  | [![npm version](https://badge.fury.io/js/%40angular-package%2Ftype.svg)](https://badge.fury.io/js/%40angular-package%2Ftype) | [Readme][3] |

# type

[![npm version](https://badge.fury.io/js/%40angular-package%2Ftype.svg)](https://badge.fury.io/js/%40angular-package%2Ftype)
[![GitHub issues](https://img.shields.io/github/issues/angular-package/type)](https://github.com/angular-package/type/issues)
[![GitHub forks](https://img.shields.io/github/forks/angular-package/type)](https://github.com/angular-package/type/network)
[![GitHub stars](https://img.shields.io/github/stars/angular-package/type)](https://github.com/angular-package/type/stargazers)
[![GitHub license](https://img.shields.io/github/license/angular-package/type)](https://github.com/angular-package/type/blob/main/LICENSE)

Common types, type guards and checkers for `@angular-package` library.

```typescript
// Guards
import { guardNumber, guardObject, guardPrimitive, guardString, guardType } from '@angular-package/type'; 

// Checkers
import { isFunction, isNumber, isObject, isPrimitive, isString, isType } from '@angular-package/type';

// Types
import { Constructor, CycleHook, FunctionType, Partial, Types } from '@angular-package/type';
```

**Features**
* Check ...
  * is **any** `value` a `number` type with [isNumber()](#isNumber) function.
  * is **any** `object` value a generic type with [isObject()](#isObject) function.
  * is **any** `value` a generic type one of the primitive `boolean`, `bigint`, `number`, `string` type with [isPrimitive()](#isPrimitive) function.
  * is **any** `value` a `string` type with [isString()](#isString) function.
  * is **any** `value` a generic constructor or primitive type with [isType()](#isType) function.
* Guard
  * the `value` to be `number` type with [guardNumber()](#guardNumber) function.
  * the `object` to be a generic type and also by finding `property` in the `object` with [guardObject()](#guardObject) function.
  * the `value` to be a generic type from one of the `Primitives` with [guardPrimitive()](#guardPrimitive) function. 
  * the `value` to be a `string` type with [guardString()](#guardString) function.
  * the `value` to be a generic type from one of the `Types` type with [guardType()](#guardType) function.

**How angular-package understands**

Check
> Is to check the return value to be the same as expected.

Type guard
> Is to guard type from parameter to not let input unexpected value in the code editor.

Guard
> Is a combination of both above to type guard input in the code editor and check the return. 

----

* [Installation](#installation)
* [Checkers](#checkers)
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

## Checkers
### isFunction()
Check function `func` by finding `name` in the `func`. The return value is a `boolean` value.
```typescript
// Imported function code.
const isFunction = (name: string, func: FunctionType): func is FunctionType => name in func;
```

**Parameter description**
Parameter   | Type           | Description
------------|      :---:     |---------------
name        | `string`       | Value `string` to find in argument `func`.
func        | `FunctionType` | Function type value to find `name` in.


### isNumber()
Check is **any** `value` a `number` type. The return value is a `boolean` value.

```typescript
// Imported function code.
const isNumber = (value: any): value is number => typeof value === 'number';
```

**Parameter description**
Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `any`          | Any `value` to check it is a `number` type.


### isObject()
Check is **any** `object` value a generic `Type` type. The return value is a `object` value.
```typescript
// Imported function code.
const isObject = <Type>(object: any): object is Type => object;
```

**Parameter description**
Parameter   | Type           | Description
------------|      :---:     |---------------
object      | `any`          | Any value to check it is a generic `Type` type.


### isPrimitive()
Check is any `value` a generic `Type` one of the primitive `boolean`, `bigint`, `number`, `string` type. The return value is a `boolean` value.
```typescript
// Imported function code.
const isPrimitive = <Type>(value: any, type: Primitives): value is Type => typeof value === type;
```

**Parameter description**
Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `any`          | Any `value` to check it is a generic `Type` from the `type`.
type        | `Primitives`   | One of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'` type to check `value`.


### isString()
Check is any `value` a `string` type. The return value is a `boolean` value.
```typescript
// Imported function code.
const isString = (value: any): value is string => typeof value === 'string';
```

**Parameter description**
Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `any`          | Any `value` to check it is a `string` type.


### isType()
Check is any `value` a class or primitive type. The return value is a `boolean` value.
```typescript
// Imported function code.
const isType = <Type>(value: any, type: Types<Type>): value is Type => ss(typeof type === 'string') ? (typeof value === type) : value instanceof type;
```

**Parameter description**
Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `any`          | Any value to check it is a generic `Type` from one of the `type`.
type        | `Types<Type>`  | Constructor generic `Type` or one of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'` to check `value` type.


## Guards
### guardNumber()
Guard the `value` to be `number` type. The return value is a `boolean` value.
```typescript
// Imported function code.
const guardNumber = (value: number): value is number => typeof value === 'number';
```

**Parameter description**
Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `number`       | Type `number` value to guard.


### guardObject()
Guard the `object` to be generic `Type` type and check by finding `property` in the `object`. The return value is a `boolean` value.
```typescript
// Imported function code.
const guardObject = <Type>(object: Type, property?: string): object is Type => isString(property) ? property in object : object !== undefined;
```

**Parameter description**
Parameter   | Type         | Description
------------|      :---:   |---------------
object      | `Type`       | Generic `Type` type object to find `property` name in it 
property    | `string`     | Property name to find in argument `object`

[Typescript guardObject() playground](https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAylATnMBzGBeGAKANwEMAbAVwFMAuGIsATwEobjyL4IZo1McA+GFHoAHCiABmMVpRzZcAcm7oM8gNwAoUJFgYyRFABMA8gCMAVhWCxcAHgAqIinzwhzlqDQeiANDGEoQURQhAH4aJUxmGFcLKw4YL3ZsAQRkHgw8f0CKYKYYEL8AoKF4MGi3OJoY9xgAQjkYMjADCnF0CgMNTRIiCE4jMAoAYR6+mABvdRgYAA8cGABGDQBfdW7ezjsAdxARjYmpmHp51EoVteBRzYALFAphq4PpgC8TlDP1Vc1waBgjADkAKIAfSGABkAIKIRDzQZbP6DPZ9PCMDRaX52ADqRlBkOhsIo8O2uyuKLRP1gdgAEgAlQEg8FQmG4OEJW73JEQMlrAD0PIRDw230gIBIFAAdCQQBldPpjBUoDYBoK+s4AQy8YhfPIwIEijkhPJGKiYHyYOJSBB2EQiIVsrkYAYQBROLrYBQZggoBBhRBRRKpTK9IZTLFFcrOWqgbimdqZkaTWbThRefziZzff7JdK8LKQwr7DtI3gsTjGdDjapTfzk5mxdmg3LQ+5CySNs5SzHodr6Amq0n3in1Ga7OyVT70VnA7ng-Kw-Yx8XqXSNUzK9XBIP1EA)


### guardObjectProperty()
Guard the `object` to be generic `Type` type and guard by finding `property` in the `object`. The return value is a `boolean` value.
```typescript
// Imported function code.
const guardObjectProperty = <Obj, Property extends keyof Obj>(object: Obj, property?: Property): object is Obj => isString(property) ? property in object : object !== undefined;
```

**Parameter description**
Parameter   | Type         | Description
------------|      :---:   |---------------
object      | `Type`       | Generic `Type` type object to find `property` name in it 
property    | `string`     | Property name to find in argument `object`

[Typescript guardObjectProperty() playground](https://www.typescriptlang.org/play?jsx=0&ssl=2&ssc=1&pln=2&pc=178#code/MYewdgzgLgBAlhAylATnMBzGBeGAKANwEMAbAVwFMAuGIsATwEobjyL4IZo1McA+GFHoAHCiABmMVpRzZcAcm7oM8gNwAoUJFgYyRFABMA8gCMAVhWBQACihCiUQnDAA8pswBoYt+xUf0YCgAPKAowA04Aawp6CRh3PjwQc0soGncvYTsHIQB+Gh8cphpkiysOePN+DmQeDDws339GGFyYRqL4MBhS1JgSlPKAQjkYMnCKcXQKAw1NEiIITiMwCgBhBaWYAG91GBgg5wBGDQBfdXnFzgAVAHcQDaudvZgA3FRKM4vgTZuACxQFHWv2e+wAXs4PhQvppwNB4gA5ACiAH01gAZACCiEQzlWt3iq0eSzwjA0Wnh1wA6kY0VicXiKAS7g9fqTyXDYNcABIAJSRqIx2NxuHxMGuAKBxIg7IuAHo5YTgVdYZAQCQKAA6Eggeq6fTGQY2bJ+IRuIm-LzyMD2E3+eSJIzIunCxhkmAKwQidj6wwwe4oSIQVUQdVanV6vSGdypQqm+jm5VLK1BB14J2C+mIFPyN2qD2KqHyxUs6UhsPa3V4X2GsrGppm0uWmDyehp6m0oU4vMFwQoSjljWVyMGmNWOP+FxNq5WtuJDsunGz3Puz1F9SeiWApPBikViPVqO12N2xuSndWsHtvkCxeIHtr-sUdRAA)


### guardPrimitive()
Guard the `value` to be a generic `Type` from one of the `Primitives`. The return value is a `boolean` value.
```typescript
// Imported function code.
const guardPrimitive = <Type>(value: Type, type: Primitives): value is Type => typeof value === type;
```

**Parameter description**
Parameter   | Type         | Description
------------|      :---:   |---------------
value       | `Type`       | A generic `Type` type value to guard.
type        | `Primitives` | One of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'` to check `value`.


### guardString()
Guard the `value` to be a `string` type. The return value is a `boolean` value.
```typescript
// Imported function code.
const guardString = (value: string): value is string => typeof value === 'string';
```

Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `string`       | `string` type value to guard.


### guardType()
Guard the `value` to be a generic `Type` from one of the `Types` type. The return value is a `boolean` value.
```typescript
// Imported function code.
const guardType = <Type>(value: Type, type: Types<Type>): value is Type => (typeof type === 'string') ? (typeof value === type) : value instanceof type;
```

Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `Type`         | A generic `Type` value to guard.
type        | `Types<Type>`  | Constructor generic `Type` or one of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'` to check `value`.


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
### FunctionType
```typescript
type FunctionType = (...param: any) => any;
```
### PartialType
```typescript
export type Partial<T> = {
  [P in keyof T]?: T[P];
};
```
### Primitives
There are 7 primitive data types: `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, and `null`.
```typescript
type Primitives = 'boolean' | 'bigint' | 'number' | 'string';
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

[0]: https://github.com/angular-package/change-detection#readme
[1]: https://github.com/angular-package/prism#readme
[2]: https://github.com/angular-package/ui#readme
[3]: https://github.com/angular-package/type#readme

