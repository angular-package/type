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
import { guardFunction, guardNumber, guardObjectKey, guardObject, guardPrimitive, guardString, guardType } from '@angular-package/type'; 

// Checkers
import { isFunction, isNumber, isObject, isPrimitive, isString, isType } from '@angular-package/type';

// Types
import { Constructor, CycleHook, FunctionType, Partial, Types } from '@angular-package/type';
```

**Features**
* Check 
  * is **any** value a `function` type with [isFunction()](#isFunction) function.
  * is **any** value a `number` type with [isNumber()](#isNumber) function.
  * is **any** value a generic type also with check key in it with [isObject()](#isObject) function.
  * is **any** value a generic type one of the primitive `boolean`, `bigint`, `number`, `string` type with [isPrimitive()](#isPrimitive) function.
  * is **any** value a `string` type with [isString()](#isString) function.
  * is **any** value a generic constructor or primitive type with [isType()](#isType) function.
* Guard
  * the value to be `function` type with [guardFunction()](#guardFunction) function.
  * the value to be `number` type with [guardNumber()](#guardNumber) function.
  * the value to be a generic type and also by finding `key` in the `object` with [guardObjectKey()](#guardObjectKey) function.
  * the value to be a generic type with [guardObject()](#guardObject) function.
  * the value to be a generic type from one of the `Primitives` with [guardPrimitive()](#guardPrimitive) function. 
  * the value to be a `string` type with [guardString()](#guardString) function.
  * the value to be a generic type from one of the `Types` type with [guardType()](#guardType) function.

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
Check is **any** `value` a `'function'` type. The return value is a `boolean` value.
```typescript
// Imported function code.
const isFunction = (value: any): value is Func => typeof value === 'function' && value instanceof Function;
```
Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `any`          | Any `value` to check it is a `'function'` type.

[Example][10]


### isNumber()
Check is **any** `value` a '`number`' type. The return value is a `boolean` value.

```typescript
// Imported function code.
const isNumber = (value: any): value is number => typeof value === 'number' && isFinite(value);
```
Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `any`          | Any `value` to check it is a `'number'` type.

[Example][11]


### isObject()
Check is **any** `value` a generic object `Obj` with possible `key` in it. The return value is a `boolean` value.
```typescript
// Imported function code.
const isObject = <Obj>(value: any, key?: string): value is Obj =>
  typeof value === 'object' && value instanceof Object ? isString(key) ? key in value : true : false;
```
Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `any`          | Any value to check it is a `'object'` type.
key?        | `string`       | Key to find in argument object `value`.

[Example][12]


### isPrimitive()
Check is any `value` a generic `Type` one of the primitive `'boolean'`, `'bigint'`, `'number'`, `'string'` type. The return value is a `boolean` value.
```typescript
// Imported function code.
const isPrimitive = <Type>(value: any, type: Primitives): value is Type => typeof value === type;
```
Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `any`          | Any `value` to check it is a generic `Type` from the `type`.
type        | `Primitives`   | One of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'` type to check `value`.

[Example][13]


### isString()
Check is any `value` a `'string'` type. The return value is a `boolean` value.
```typescript
// Imported function code.
const isString = (value: any): value is string => typeof value === 'string';
```
Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `any`          | Any `value` to check it is a `'string'` type.

[Example][14]


### isType()
Check is any `value` a generic `Constructor` or primitive type. The return value is a `boolean` value.
```typescript
// Imported function code.
const isType = <Type>(value: any, type: Types<Type>): value is Type => isString(type) ? typeof value === type : value instanceof type;
```
Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `any`          | Any value to check it is a generic `Type` from one of the `type`.
type        | `Types<Type>`  | Constructor generic `Type` or one of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'` to check `value` type.

[Example][15]


## Guards
### guardFunction()
Guard the `func` value to be `Func` type. The return value is a `boolean` value.
```typescript
// Imported function code.
const guardFunction = (func: Func): func is Func => isFunction(func);
```
Parameter   | Type           | Description
------------|      :---:     |---------------
func        | `Func`         | Type `Func` value to guard.

[Example][20]


### guardNumber()
Guard the `value` to be `number` type. The return value is a `boolean` value.
```typescript
// Imported function code.
const guardNumber = (value: number): value is number => isNumber(value);
```
Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `number`       | Type `number` value to guard.

[Example][21]


### guardObject()
Guard the `object` value to be a generic `Obj` type. The return value is a `boolean` value.
```typescript
// Imported function code.
const guardObject = <Obj>(object: Obj): object is Obj => isObject<Obj>(object);
```
Parameter   | Type         | Description
------------|      :---:   |---------------
object      | `Obj`        | Generic `Obj` type value to guard.

[Example][22]


### guardObjectKey()
Guard the `object` to be generic `Obj` type and guard by finding `key` in the `object`. The return value is a `boolean` value.
```typescript
// Imported function code.
const guardObjectKey = <Obj, Key extends keyof Obj>(object: Obj, key: Key): object is Obj =>
  guardObject<Obj>(object) ? isString(key) ? key in object : true : false;
```
Parameter   | Type         | Description
------------|      :---:   |---------------
object      | `Obj`        | Generic `Obj` value to guard and to find `key` value in.
key         | `Key`        | Value to find in `object`.

[Example][23]


### guardPrimitive()
Guard the `value` to be a generic `Type` from one of the `Primitives`. The return value is a `boolean` value.
```typescript
// Imported function code.
const guardPrimitive = <Type>(value: Type, type: Primitives): value is Type => isPrimitive(value, type);
```
Parameter   | Type         | Description
------------|      :---:   |---------------
value       | `Type`       | A generic `Type` type value to guard.
type        | `Primitives` | One of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'` to check `value`.

[Example][24]


### guardString()
Guard the `value` to be a `string` type. The return value is a `boolean` value.
```typescript
// Imported function code.
const guardString = (value: string): value is string => isString(value);
```
Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `string`       | String type value to guard.

[Example][25]


### guardType()
Guard the `value` to be a generic `Type` from one of the `Types` type. The return value is a `boolean` value.
```typescript
// Imported function code.
const guardType = <Type>(value: Type, type: Types<Type>): value is Type => isType<Type>(value, type);
```
Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `Type`         | A generic `Type` value to guard.
type        | `Types<Type>`  | Constructor generic `Type` or one of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'` to check `value`.

[Example][26]


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

[10]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAYgrgOwMZQLxQBQDodgIYBOeAtgFxR4IgCUaAfBVQNwBQSA9ggM7BQCWXeMmB9OaTADc8AGzgRylGuSmzoA2IhSoGoSOwBmUFXLSp0Acn2aRnc1ABk9ozJN9uwSkggGNw0QlY2Th4oACEAeXCAGQBRAEEAOQB9ADU4qIBVGPF9GS4IVg53MIBJAHEShIAVVPSs8QBOAAYmgHYARgaGgCYAVgAWVv6mrvaAoOKEjIBZUJiAJVrM7PR27tbC4N4AZSr5yrKl+otpkCgEOGIAIwgCfi5zQKKQmAyEgGEqkvDkqoBNAAKMXIQi0mAAHuQLtdbtQFFR6FAAN5QAgQYBwAgIKDgqAAaigvSYUAAvmxpHguFwoO8tgQ4EhgOwCO8KVTkTjxETSRMQu8frt5hlPuFFu8onFtttxAgIAB3Gl0hlMllsrgYahPYLsaQQLDSdgAcwwAANXh8vj8kv8gSaADT3UE2BAYc2fb6-QExaiaqAAej9UGA9IgvJ1eoNxpNtPc9MZzNZlK49sd1n8GBjPDjKsTVJ9xIDQZDYd1+qNGHM-ISguFVVFSXFku25gdAid6arNZFYolUvz-sDuWk+RLEfL5gi0XiyTSyxbqb8nAwk9iiSO3t9haHI+e4bLxvMU1mC3X87baaXR7mi1nWX7W7yoaAA

[11]: https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAcgVwLYCMCmAnGBeGACgDcBDAG2UwC4ZSwBPASlrMs3ghjDS1zwB8MKAwAOmEADMYbKvjwEA5Dww5FMAGQbOAMThg4UTCQpUmAbgBQoSLADKAFQBKASUQBxAPoA1AIIAZAFUAUXwYRX8QbExUeFEINAB+RSsbaBhEQIBZACFgpx8AkLCAJgB2VPB0nIB5Gv9g30RCoNCCSQoITErbGByXdzcHFuKCAE4ABgmygEYxsZKAVgAWMuWJ+ZmwHogQckwAOnIQAHNCAANHVw8R4POAGk4UVWxCK7cvP1amCxgAej+MA65C61iqe0OxzO50yuXytweT14OEIsLyBS+IR+5n+gKg2CoYMgEKOpwutXqjWamLujwQzz4hApDSat2xuKBnUwRN2+1J0P6g0QwxpiPpyNegqGbN+AM5IO5QA

[12]: https://www.typescriptlang.org/play?jsx=0&ssl=5&ssc=1&pln=5&pc=166#code/MYewdgzgLgBAlhAylATnMBzGBeGAKANwEMAbAVwFMAuGIsATwEobjyL4IZo1McA+GFHoAHCiABmMVpRzZcAcm7oM8gNwAodFAopxRYOwDyAIwBWFYFACSYbbv3sA3jAAeNMGQC2xnapgBfTVsdPQMYQygACx0Tc0sYZwx3Lx8UP0ChURgAMTIwSzhwABURdlw8ADoq4SIUIk8aOiZ+WgYNUEhYBFiLWFwAHli+QlJKRoYAGhgAawp6AH4aJUxmKVH2BHCzFsyxSWkyuRh5EDNe+RgAMku1tnhOugMJLbjYeY5kHgw8Web33-utxkNFQwJgehIEAo7RIRAgnAAwuBuGRLCAUAjYfCEq4cDAAKzpdQdaAwBGGAByiCKACUAKoIoqGGkAfQRABkAIKIRB4sAUADuZORoLRGKxEDwjHaIpgAClEJSWYYAEJygCijJoPUsNjsoTKOLcMAAzAFibLsnSKYyrEqigBNAAK6pouXyUEKYBKWXKxo83h0qyaLRcMs6MBVhkM7PVnIpLIAapz2XT1XjQdCLZAQCQKBUSCBvgADJGdFCoqDozFwiDFqbdM6WfpllFimvw4bkqm0hlM1kc7mIRjSmAAejHggrFGzEFz+cLJYVStVGsZ9Y4OqggyiMSbUGGy4Tq81RRHfgnU8os-nBaLeGLVptRTtCcdLo3jde-XdBWKpWGJ9bXtZ11XPcdJwhKEbzzO8S27al6UZZk2S5HkAG0XAAXU-CAtxbEUK3bCUu0pRC+xQwceSmeQXHkcDL0zGCF3vYsj2VNVT3Q+gcIbPD9x3aIUC3Q9FWPTjGRo+h6NHS8oJnElb0XB8gJfECXUw3jNwE39PX-URAOtYC31Ami6IYyDSGgxTYOU4soxjOME2TVN1Vw-CmmGBzY3jJMUzTCzwSsmcgA

[13]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBACgTgSwLYOAgbhAzlAvFAcgCMB7EgGwgEMA7AqAH0KIQHMEbh6mCaBXJEQhxuhLMEQ1WBANwAoAMYka4qAizxkqDNHwAeACrgIAPgAU6KuT4QAXFFogANFFCQA-Pc0o0mLAEp7S2todSgjSDwTV2MSADMoYJs8XHw3CHklFWAoACEAeXyAGQBRAEEAOQB9ADUyooBVErwoOKssDMVlVVyASQBxXoqDWvqmloBOAAYpgHYARgmJgCYAVgAWWfWppfmaTO6cioaAWVySgCVRxub8eeXZg+yoAGUDC6H+6-H8AhOQKD8QTCNRYWRdFQUCAAOnIJFYZgABgViuVqnUboiXOpvNpMHpSFDaOYUaVKt8Si5iGRKLQCP5-DIoAB6ZmuOA2CFYKGw+FIvqDYYUrGg3G+CAEtgcYAkgZDEYYppUljsTj0xkstkSTlZbmUXkIxHHM6XYXYjSIHw6PRAoRwczG85XRWUwi24Tqpms9k67o8uGGt4fCpfF0inGWvES8SSVjmIOfClUmMcaQMr1ajkQLn+vnIwpk9FjErhi1acUEmnUGjx96Jl3Kqt09Oa1rtbO63OGgXys2iyMVlXSh2nJ1J5hStUt71tcgdHP6gNIx2msPmsXW932swJkPj3gCO2e1uz+edxd53eh4uljf4lNSEcm53F5MSVPHmftuRAA

[14]: https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAylATnMBzGBeGAKANwEMAbAVwFMAuGIsATwEobjyL4IZo1McA+GFHoAHCiABmMVpRzZcAcm7oM8gNwAodaEixEAFQBKASQByAcQD6ANQCCAGQCqAURwx5dkCgoBbeMIhk3gD8alrg0DAmDgCyAEJOBtb2zq4ATADsGtoRsQDyuXZONiZJji644qQQFBphkCAkFAB0JCAYeAAG+sbmpc4dADQcyDzt3aaWtmWMjKowAPTzgiiUdRANza3tHVFxCX1Og8Ooyni78YlTzjNzizCVJNVrGy1tnXkFRSVXh0MII6cPoVigcbgslg8nkA

[15]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAwg9gOwM7AE4FcDGw6oDwAq4EAfFALxQIQDuUAFAHTMCGqA5kgFxQsIgBtALoBKCmSKQA3AChQkKAAVUASwC2K4CoBuEJBSgByAEZw4AGwh9DUAD5HjK9ioTAb9wwnRrjEVO6MUVQR2Q1l5aEk9PAB5YwArMkp4ZDQsHHw4xLslVQ0tXSRZTEQUKBUkAGU0F3YDem0Wc3QIHj4QER5G5ugKqCDa8SgIuAAzKG6WinJKQwGQsJkS1PKkKINCYhIGppa2-gAaYeIeKKRNyBJOid3e-XXyMgrq4PZ6CLEAfmPIMZue6aUCJQLq3cqpPiYCB-CLFcwsJD6FJBdBoOAweGIqAAbygAA8DABGKRQAC+S1KwFgABkAIKVSoAfQAarTqQBVACiBmodGRaTRGIRSHoImKlKgACEYjFqZzaQA5FlsrkGUZNJAQcUrSUASQA4rqFQRlRzuZQAJwABitAHZCRaLQAmACsABZbW6rY7CQhtWUFeyALKSzkAJVNqsohKdtv9VMqBDDRv1kfNRiDICo3l8qFWi2WSAsEEY5jgbwABvyMILMUgK0cKlE8NXUah0XXtjA6Qy00dW7XhSIxVAAPSj4YYCAU5DF0vl+gV6Wy+VK1lmhurZumYt8bbLuWKvsOMyWazDknjyctGdFyzzyt6w3GtObpvEPDzdj7g1Gk3rrkjhMJwXDcC8xwnNJp0LOcy0rQMQ3DRkCAACTDTlOTfNYPy8Hw-G2BDQwjADOSA3Dc0McCryg29YIXCtCKQgAxGJ2TDLDmy-bZE2TBVUxIoCv0okdqKnGQgA


[20]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAYgrgOwMZQLxQBQDodgIYBOeAtgFxR4IgCUaAfBVQNwBQSA9ggM7BQCWXeMmB9OaTADc8AGzgRylGuSmzoA2IhSoGoSOwBmUFXLSp0Acn2aRnc1ABk9ozJN9uwSkggGNw0QlYOdygAczhCABMhJBsEcQwrZHJo6nJElHVo+n5Ba38EzWpWNk4eKAAhAHlKgBkAUQBBADkAfQA1BpqAVTrxfRkuCEDS3nKASQBxMaaAFXbOnvEATgAGFYB2AEYlpYAmAFYAFnXDlZ3NgJLgpq6AWXK6gCV57t70Td314eCAZRnH6YTF6LCy3EBQBBwYgAIwgBBy5mKQTKMC6TQAwjMxpVWjMAJoABTqyU08QAHuRITC4alGODtFAAN5QAgQYBwAhxMlQADUUH2TCgAF82NI8FwuFB0SMCHAYuwCOixRKmVBuegBcKrmV0Ti-o8upjKs90TUGj8fuIEBAAO5SmVy4AKpXirgYIosbXsaQQLDSdghDAAA1RGKxOJa+KJQYANKFwgQonlOBhQ5jsbjCXVqEUoAB6PNQYCyiCe5He33+wNB6XuWXyxXKrix+ORaKxDC1nj1p2N105wUFoslqDQuC8PgTyUIdi8LIzcCl8s+v0BjDmXVNfWGmbGlqm80-cxxsJt5MITt6-47vcHi0D-OF-rSQZeldV9dVWqNVodV7H1tE3bfIv3qZpgWzXMh2fV9l0rNdzBue4ngggDTyA88MCQh5nj-HoH2ggZSyAA

[21]: https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAcgVwLYCMCmAnGBeGACgDcBDAG2UwC4ZSwBPASlrMs3ghjDS1zwB8MKAwAOmEADMYbKvjwEA5Dww5FMAGQbOAMThg4UTCQpUmAbgBQoSLADmyUtgAmKVfyKya3XjhYzTDgQfd3whBDc+E3YLS2twaBhEAFUAWQAhAFEAJQB9AHlETPwYACYAdisbRJSMnNyAFQB1fJKARgqqhNharLyGgAlszOKCUs742yS0vtydfOTsksUAZgrFK0mIEHJMADpyEDtCAANe+sLMk4AaGAcnV19sQnO8y6ZY6p39w+OzmfqzXyNzujhckRwLwB-RaHy6kG+ByOp1ejSGIxB93BTyhdX66MycK2iN+KOhcwW2UxYMe7lxs3mizhMAA9CzQQ8YAB3EDYADWEEsQA

[22]: https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAylATnMBzGBeGAKANwEMAbAVwFMAuGIsATwEobjyL4IZo1McA+GFHoAHCiABmMVpRzZcAcm7oM8gNwAoUJFgIA8gCMAVhWCxcAHgOG+hUpRp16AGhgBrCvQD8NJZmZS7dgQYK35BETFJaXY5BRAjEyh5GAAyFIC2eG06YEiQhNMYTw5kHgw8dyYitw8sjJkaVAaYcVIICg0taBgMMiIUABMrRJwYSyMbeONTGit-KZHg0OwBPQKoces8BdNGDU1wboAhXV0AGQBRAEEAOQB9ADUrs4BVC9Gmjs0SIghOXTAFAAwj8-jAAN4wAAeowAjKoYABfGBdWC6G4XO5As5XRCIUaAgDuIUBIN+EDwe2+5JgABVCSAyWDIfQPihKAjkai6QB1XRYnF4gkUYn0xmgilU9BQCgoVq5fLTKAA9iQqE0MBkAC2+llnIR3N0RwAUhcgbS7uiLrN1irRmqaABWJEaaWy+XsYamMUQmD0DXa3UofUow5ok1mi20vk2pU+3Asp0u9QHSAgEgUAB0JBA5QABidztd7k9Xhc8y5ev0hutLKSJTZC5dbo9nm9GHsYAB6LstNpZ1MQdNZnP5gDifUGdIZTIgFZ6k5rSvMYtnNitAtxiA7CJ7C+rMAZKFcEAAhIJ2ewKAQKGB4JIq1OjyfM4Ph9nc3g8xODyrZ-PHyXRI62BBs8GjflsS3Hdu17QDDxAY8zwvGRr1ve99yfRCXzfDMP3zVcJQAxcvQ2QjyRsCDNzxGC90+V8unfUcv1IlViOrUjNkSFV1wjc1LQxWje3o3CR0-b9F0VRIxXYwZONIsVeNNfirSEzCBgQpDz0+GA0LvOAH0k58IFfIA

[23]: https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAylATnMBzGBeGAKANwEMAbAVwFMAuGIsATwEobjyL4IZo1McA+GFHoAHCiABmMVpRzZcAcm7oM8gNwAoUJFgIA8gCMAVhWCxcAHgOG+hUpRp16AGhgBrCvQD8NJZmZS7dgQYK35BETFJaXY5BRAjEyh5GAAyFIC2eG06YEiQhNMYTw5kHgw8dyYitw8sjJkaVAaYcVIICg0taBgMMiIUABMrRJwYSyMbeONTGit-KZHg0OwBPQKoces8BdNGTvBu3v6h9YBpWosrF3P6GAoADygKMAHOSol8rZ2oWaMXSpoN3m6w4n346hgPT6g2Gpk2k3WjGqCFKygqHiRxUqdW+MEaKGarRI7U6JCIEE4ujAFAAwmSKTAAN4we6jACMqhgt1wACZOQBfGBdWC6AByAFEAPo0gAyAEFEIhRtSAO4hal08kQPB7TT0zgAFRVIE1DOZ3MEBI6MEFwpgBoA6rppfLFcqKGqjSb9TqNOgnihWrlPokqexmfcaGAyABbfQUFCc+hR2PxxM2zl23QAIQAUuKaQbJWLxb9plAw6MIzQAKwuZMwHkAdgz6n9CaD7FhUC9TK5KbjCYFmYOIrzBaLjt0ZcSvdw5trra6IBIFAAdCQQOUAAYAcWhA3VtP1AG16ABdGAquBQAAWIQlLoViDP5+3LiOMLOHksGv1Lnkeh5BsEsn0VACgMYPYYAAehgy1KDXGBxQIBN6DvZRQXEdB100A4V3XTcd33Y4j1NCBXyvG97ynMCXwvd8oWObsbl-Y8tQg4C8Fo2Vn04qDOTg+0IiYwYyP1K8QBQVwICQmlbxMVxJOk2SENw5dVw3Lc8D3A9xK1E8AC9L2vO8HylXjFVfRjPxOctWLDciAMMrjQMsxB+OgoSDRE2z9IZYQUBAUQUCEZSZLkhTgCU40VKQpp1PwzSiJ0kixMc09jKosy3NdF9jJsg8WJ-DKOJgeR7lcx93Oc+QBNg+CfNEUTD1KhlYoimB5MU8LVKJdo1zwyACK04i9O7MMT3uEzqJCcdC2LCUprfD8iu-ehNlDakAMqkD5qLEsdrqrz4JQtCMN4YJsOpeKrUGjTCO03TSIm6kjJmnL9slKdrNW5j1s20ww1qvb8wWqdPMExrfL0wLgoTMKOtU7rot627EPUIA

[24]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBACgTgSwLYOAgbhAzlAvFAcgCMB7EgGwgEMA7AqAH0KIQHMEbh6mCaBXJEQhxuhLMEQ1WBANwAoAMYka4qAizxkqDNHwAeACrgIAPgAU6KuT4QAXFFogANFFCR7mlGkxYAlPctraHUoI0g8E1djEgAzKECbPFx8Nwh5JRVgKFY+KjgAE09tTDwoQ2NzBLtQ4xdUj0QvHT8Aq0SQsN1I9SLvCAs2iDrjX3TlVQAhAHkpgBkAUQBBADkAfQA1RdmAVXnSmKssNMVxrImASQBxc+WDDa3d0oBOAAYXgHYARiengCYAVgALO9AS8fp8aGNMlBltsALITeYAJXuOz2+E+v3eUNUAGUDEibpdUY98AQ4SAoPxBMI1FhZCcVBQIAA6cgkVhmAAG0zmSzWmzRXJcOTyhUaxQgelIzNo5l5CxWJPmLmIZEotAIvlGUAA9LrXHAbIysMy2RzuRdrrdlcLsrkCr0dNK2BxgPKrjc7oLdqqWOxOFqdfrDcaMqbKObOVzYQjkbaRQ7xVo+npqUI4OZY4iUT6VYR08IgzI9QaJGHxmb2dH8YTlsS83bRY6JanxJJWOZa0Tlar2xxpNqSyHyxATVWLTyZoqBQ95k2k07MNL1dQaF2CT2837V5qh6WoAdyEdx5Hq5bPTbG4mxUupf63Vn4Tne8xXYH9yGjyfwxPo9n42ve1b1bZ1C0zMxu3rV9eAEDNiwPb8x1-M9Jyghs5wXECU2dfspCfONcznPsJAHBCv0OMcgA

[25]: https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAylATnMBzGBeGAKANwEMAbAVwFMAuGIsATwEobjyL4IZo1McA+GFHoAHCiABmMVpRzZcAcm7oM8gNwAoUJFgYyRFABNkPLLkKlKNJZmZSL7BF1TL+HY8vNtGGzeGgxEABUAJQBJADkAcQB9ADUAQQAZAFUAURwYeUSQFAoAW3hhCDI8gH41X20YcOSAWQAhVOC4pLSMgCYAdg0tf3qAeX7E1PjwlpT03HFSCAofXpASCgA6EhAMPAADILCo8bTNgBoYXX0jZ0w8HYiYhInGbxgAeifBFEpKiEWVtY3NmoaTX2qSOJz0hnclwBjWadzSD1Uz1e0xIs0+31W6y2AyGIzGcJBx1OEIuGxxw1GwIRSJgKLRQA

[26]: https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAwg9gOwM7AE4FcDGw6oDwAq4EAfFALxQIQDuUAFAHTMCGqA5kgFxQsIgBtALoBKCmSKQA3AChQkKAAVUASwC2K4CoBuEJBSgByAEZw4AGwh9DUAD5HjK9ioTAb9wwnRrjEVO6MUVQR2Q1l5aEk9PAB5YwArMkp4ZDQsHHw4xLslVQ0tXSRZTEQUKBUkKINCYgM+EBJ6bRZzdAgeeoAaKAieKKQayBIRHmbW6AqoKvIyegi4ADMe2vJVwLQXULEAfgZ5pbG2ijWIsVGWo5cUPkwIReXpGRLUqHZ0NgATaahB0iaL9pTYjdXpAyADKLDc7jcr6aZkCpRX6NQ4QEHEETFcwsJD6FJBdBoOAwbG4qAAbygAA8DABGKRQAC+T1KwFgABkAIIAZW5AH0AGqc9kAVQAogZqHR8WkiSScUh6JiWS8AEIxGLssWcgByguF4oMCxaSAgxVZUFVAEkAOJWnUEfWiiWUACcAAZ3QB2Wmu10AJgArAAWL3B91+2kIc0vHUigCyqrFACUnYbKLT-V6Y2VuQRk-abWmXUZ4yAqN5fKhYWEVUgLBBGOY4Ox6AADGUYOWkpBt7pvT5IzuE1DEnuNGBc3nF7rD7sKkSYqAAemXPQwEDrDabLfb6s12r1Qudfde71QX2IeFMDb4jX3Wt1M4cZks1kXDNX67aW8sO9bbbWnaDrFqeA4XkiQSbPetr2o6x7it0JhOC4bgfiua5pJuzz1n+zYAXGiYpnyBAABLJmKYpgeel6QHgXg+H4jSEUmqYIWKSEMVWhjoV+WG-o2+HtixxEAGIxCKybUYOV5QSEjR5gWOpFuxSFyVsS58RuMhAA
