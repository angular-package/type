
# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [5.0.0] - 2021-09-23

### [5.0.0] Added

* [691f07e]  
  Added `guardStringIncludes()` and `guardStringIncludesSome()` functions with tests.

* [21e523b]  
  Added `guardObjectKeysIn()` function  guard the value to be an `object` with specified keys in it(or its prototype chain).

* [823dac3]  
  Added `are` prefixed functions to check the values of a rest parameter.

* [e503d38]  
  Added a generic type `MinMax` that takes generic type variable `Min` and `Max` that represents the range between minimum and maximum.

* [c374612]  
  Added new guard functions `guardDate()`, `guardFalse()`, `guardNumberBetween()`, `guardObjectKeyIn()`, `guardObjectSomeKeys()`, `guardRegExp()`, `guardStringLength()`, `guardTrue()`.  

* [55635fa] [1e48fb1] [a4cb61d] [f809f32] [5c85a03] [d440e38] [0efe8ae]  
  Added `isObjectKeysIn()`, `isObjectSomeKeys()`, `isStringIncludes()` and `isStringIncludesSome()` and to the `is` object and to the `Is` interface.  

* [98a2722]  
  Added `CallbackPayload` and `ForEachCallback` types.

* [dfb3df9]  
  Added the `type` object consists of `are`, `is` and `guard` objects.

* [8dd8099] [230063b]  
  Added an object to handle executing the tests.

* [d2f756e]  
  Added `recognizeValue()` to recognize type of any value.  

[691f07e]: https://github.com/angular-package/type/commit/691f07e2cf31eb3a52923715ef091f86a181a15f
[21e523b]: https://github.com/angular-package/type/commit/21e523b3a46e3e8243276e5008de72ea9b3c3756
[0efe8ae]: https://github.com/angular-package/type/commit/0efe8aed83d03313921176206636bc8b0730d188
[d440e38]: https://github.com/angular-package/type/commit/d440e388f6f853c01ef9aab620c206f2233bd3cf
[5c85a03]: https://github.com/angular-package/type/commit/5c85a03a7fd34dd64a650597f48cea9968940f68
[f809f32]: https://github.com/angular-package/type/commit/f809f32cddd2c53568d60f0af6e57b941d50fa87
[a4cb61d]: https://github.com/angular-package/type/commit/a4cb61d5b8bfd7f1ac548842d355a045266f6e7b
[1e48fb1]: https://github.com/angular-package/type/commit/1e48fb1448b908f09cc2628063eff457d920a903
[823dac3]: https://github.com/angular-package/type/commit/823dac3b62288c1016e8244fc741939bdc140d89
[e503d38]: https://github.com/angular-package/type/commit/e503d3885d560274e1f30e763e04c526a8548317
[c374612]: https://github.com/angular-package/type/commit/c374612e96d14c6d23449e03535283e5e1614765
[55635fa]: https://github.com/angular-package/type/commit/55635fad55a8f0e14486246215cf7f22b9f1ab26
[98a2722]: https://github.com/angular-package/type/commit/98a2722ea64ccb476942b606239dd001457d7e03
[230063b]: https://github.com/angular-package/type/commit/230063ba135022fdcbbb65fc3569f248f836adbf
[8dd8099]: https://github.com/angular-package/type/commit/8dd80991ba9e5950970880d8aa449c1c7a143699
[dfb3df9]: https://github.com/angular-package/type/commit/dfb3df9f82116cd2737031b255f0aad62e4c1fa8

### [5.0.0] Updated

* [7387e23]  
  Updated `guardIs` object by adding `objectKeysIn`, `stringIncludes` and `stringIncludesSome` methods.

* [68c9365]  
  Updated `areString()` function that works by using the returned methods.

* [00e8841] [09fb70f] [c4e6f8f] [0efe8ae]  
  Freeze the `guard`, `guardIs`, `isNot` and `is` object.

* [de6aa12]  
  Updated `isObject()` function by add possibility to check any kind of object, not only the `Object`.

* [1263a2e]  
  Updated `NumberBetween` interface by adding `MinMax` interface and a generic type variable `Type`.  

* [24621f7]  
  Updated `StringOfLength` interface by adding `MinMax` interface and a generic type variable `Type`.  

* [7d288c2]  
  Updated `isInstance()` function can now check any kind of instance.  

* [8ddb720]  
  [8ddb720] Updated [`Is`](#is) interface and `isNot` by changing the function types to the [`typeof`][js-typeof] operator.  
  [34a1b1f] Updated the type of callback function `ResultCallback` to [`ResultCallback`][package-type-resultcallback] to provide the type of value and the shape of `payload`.  

* [8ddb720] [6d190f5] [5c9486f]  
  Updated functions by adding a generic type variable `Payload` constrained by the `object` type that is by default equal to the `object`.  
  Updated functions by adding a `payload` parameter of generic type `CallbackPayload` that takes generic type variable `Payload` to assign to callback function `payload` parameter.  
  Updated functions by removing `typeOf()` function if it's not necessary to use it.

[7387e23]: https://github.com/angular-package/type/commit/7387e2342b7c02ccf64f8cb980cd8b801e333ca9
[68c9365]: https://github.com/angular-package/type/commit/68c93656d4b3cd1c5158bc6021059929e54860ab
[5c9486f]: https://github.com/angular-package/type/commit/5c9486f859a4e61476c220f228bf1cb34511e319
[09fb70f]: https://github.com/angular-package/type/commit/09fb70f87634923dce1fd979da30a8041a7f9922
[00e8841]: https://github.com/angular-package/type/commit/00e8841cc63430ee6423232ee804196fee9cbfd5
[0efe8ae]: https://github.com/angular-package/type/commit/0efe8aed83d03313921176206636bc8b0730d188
[c4e6f8f]: https://github.com/angular-package/type/commit/c4e6f8f033364b24fd864b77ab62c7de70d7c265
[6d190f5]: https://github.com/angular-package/type/commit/6d190f5ef1d425b272ca65954e5a9780f561d3c6
[de6aa12]: https://github.com/angular-package/type/commit/de6aa127ec3f0821487448d784d390edc35fb289
[34a1b1f]: https://github.com/angular-package/type/commit/34a1b1fc0fac8b9044d3c4da96d9dc642f388507
[24621f7]: https://github.com/angular-package/type/commit/24621f7b421392226e939161989b28ae0898524f
[1263a2e]: https://github.com/angular-package/type/commit/1263a2e92f6722dd9d025f5c5eef0e1ba652fe66

### [5.0.0] Removed

* [a8e8566]  
  Removed `guard` function types.

* [e09a84f]  
  Removed the use of `Never` type in the `Defined` type cause of some compile issues.

* [aa80250]  
  Removed `is` property from the `guard` object.

* [8ddb720]  
  [5148f05] Removed `Func` type to use build-in `Function` type.  
  [562ec13] Removed `Key` type to use build-in `PropertyKey` type.  
  [4d53a55] Removed `CycleHook` type.  

[a8e8566]: https://github.com/angular-package/type/commit/a8e856663f8c57c3c89271c1c1948ecdc96b01d1
[e09a84f]: https://github.com/angular-package/type/commit/e09a84fc1ea2109c4c480743e3b749325a1d9c5f
[4d53a55]: https://github.com/angular-package/type/commit/4d53a55a6b26d8a20678ae3dc39544e24cd3d9fa
[562ec13]: https://github.com/angular-package/type/commit/562ec1396f61bb8b1c7363097a5e8b9a2e4392bc
[5148f05]: https://github.com/angular-package/type/commit/5148f059722ee8979d8cf1945f80d8e65290bb0d
[aa80250]: https://github.com/angular-package/type/commit/aa80250dec231e10dc11d14c7b86e88c2297e82b
[42065c9]: https://github.com/angular-package/type/commit/42065c9f7aa938e2d514ff9bfc9b197463a9bbda
[d2f756e]: https://github.com/angular-package/type/commit/d2f756e1498b531836aaac08a9c01b512cdaba2c
[8ddb720]: https://github.com/angular-package/type/commit/8ddb720a071dc97ccfdda8757f911aac1a6ec9bd
[7d288c2]: https://github.com/angular-package/type/commit/7d288c2290055a164259f6e5ea336bec8938bf66

## [4.2.0] - 2021-06-25
  
### Added

* [`a6b567f`](https://github.com/angular-package/type/commit/a6b567f32a00726d2b7ecf38ce7a57a42366aaf6)  
  New `NumberBetween` and `StringOfLength` type.

* [`21f3f48`](https://github.com/angular-package/type/commit/21f3f48029d79e1dfd4507d3a684ec1e81e44713)  
  New functions `isDate()`, `isFalse()`, `isNumberBetween()`, `isRegExp()`, `isStringLength()`, `isTrue()` with tests and types.

* [`7d4cda7`](https://github.com/angular-package/type/commit/7d4cda7d3c91fca89a35baed6c1db9cd35070f4e)  
  This `CHANGELOG.md`.

### Changed

* [`e70b034`](https://github.com/angular-package/type/commit/e70b034934b81b3af6ab1976153cbbad8c148f78)  
  All types description in the `README.md`.

* [`61e9376`](https://github.com/angular-package/type/commit/61e93766fab7d72cafa70da712f296c6ca6e9304)  
  Add possibility to use `is` prefixed functions directly from the `guard` eg. `guard.array()`.

### Fixed

[package-type-resultcallback]: https://github.com/angular-package/type#resultcallback
[js-typeof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof