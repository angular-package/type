import { Primitives } from '../../lib/primitives.type';
import { IsPrimitive } from '../type/is-primitive.type';
/**
 * Checks if any `value` is a generic type from one of the `Primitives`.
 * Use the `guardPrimitive()` function to type-guard generic type also.
 * @param value Any `value` to check if it's a generic type from the argument `type`.
 * @param type One of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'` type to check `value`.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBACgTgSwLYOAgbhAzlAvFAcgCMB7EgGwgEMA7AqAH0KIQHMEbh6mCaBXJEQhxuhLMEQ1WBANwAoUJCgBJLPGSoM0fAB4AKuAgA+ABToq5PhABcUWiAA0URTdiIUaTFgCUeI1HNLaAQcA0h5AGMSGnEoEPUPLVtVBM1MPCh9Q1NAq1t7JxdbVM9sb1tc4NDDP2dDEgAzAIsrPFx8F0jo2IAhAHk+gBkAUQBBADkMhossCC6Y4Cge5QBxZXG9DIBOAAYdgHYARi2tgCYAVgAWfcudk8OaedjxgFUAWR7hgCUMw9P9p6LADKei+6xWGQIbxAUH4gmEcSwsjkURiFAgADpyCRWCYAAb9IZjcZ4pzxdxpCA6cSSVimQkjCZOYhkSi0AjebwyKAAeh5zjgVhR3XRWJx+OWaw2pMRJS0OhY7E49NW6z0zMVHC4nO5fIFQtRWFF2NxeNeH2+MvJGlKOjhQjgpnNny+zPtwg5XN5-IkBpFlDFppBYPGKytagptppHDpJmD4OZ0aknt1PsFEGFaIDJvx8dD4blmAVrOoNFMeZWGpL7J13qg03Is0zRuz4rN7xdBcj8s1ypMzu+GrYWpTdYbTcNxrbFa7Nvl7sdcdBCcIC9HevHGcnrdNA6+s8SRaTsb3iYkMfX-M3ciAA
 */
export const isPrimitive: IsPrimitive = <Type>(value: any, type: Primitives): value is Type => typeof value === type;
