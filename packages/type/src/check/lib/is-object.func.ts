import { isString } from './is-string.func';
import { IsObject } from '../type/is-object.type';
/**
 * Check is any `value` a generic object `Obj` with possible key in it.
 * Use `guardObject()` function to type guard generic `Obj` value also.
 * @param value Any value to check it is a '`object`' type.
 * @param [key] Key to find in argument object `value`.
 * @returns boolean
 * @example https://www.typescriptlang.org/play?jsx=0&ssl=5&ssc=1&pln=5&pc=166#code/MYewdgzgLgBAlhAylATnMBzGBeGAKANwEMAbAVwFMAuGIsATwEobjyL4IZo1McA+GFHoAHCiABmMVpRzZcAcm7oM8gNwAodFAopxRYOwDyAIwBWFYFACSYbbv3sA3jAAeNMGQC2xnapgBfTVsdPQMYQygACx0Tc0sYZwx3Lx8UP0ChURgAMTIwSzhwABURdlw8ADoq4SIUIk8aOiZ+WgYNUEhYBFiLWFwAHli+QlJKRoYAGhgAawp6AH4aJUxmKVH2BHCzFsyxSWkyuRh5EDNe+RgAMku1tnhOugMJLbjYeY5kHgw8Web33-utxkNFQwJgehIEAo7RIRAgnAAwuBuGRLCAUAjYfCEq4cDAAKzpdQdaAwBGGAByiCKACUAKoIoqGGkAfQRABkAIKIRB4sAUADuZORoLRGKxEDwjHaIpgAClEJSWYYAEJygCijJoPUsNjsoTKOLcMAAzAFibLsnSKYyrEqigBNAAK6pouXyUEKYBKWXKxo83h0qyaLRcMs6MBVhkM7PVnIpLIAapz2XT1XjQdCLZAQCQKBUSCBvgADJGdFCoqDozFwiDFqbdM6WfpllFimvw4bkqm0hlM1kc7mIRjSmAAejHggrFGzEFz+cLJYVStVGsZ9Y4OqggyiMSbUGGy4Tq81RRHfgnU8os-nBaLeGLVptRTtCcdLo3jde-XdBWKpWGJ9bXtZ11XPcdJwhKEbzzO8S27al6UZZk2S5HkAG0XAAXU-CAtxbEUK3bCUu0pRC+xQwceSmeQXHkcDL0zGCF3vYsj2VNVT3Q+gcIbPD9x3aIUC3Q9FWPTjGRo+h6NHS8oJnElb0XB8gJfECXUw3jNwE39PX-URAOtYC31Ami6IYyDSGgxTYOU4soxjOME2TVN1Vw-CmmGBzY3jJMUzTCzwSsmcgA
 */
export const isObject: IsObject = <Obj>(value: any, key?: string): value is Obj =>
  typeof value === 'object' && value instanceof Object ? isString(key) ? key in value : true : false;
