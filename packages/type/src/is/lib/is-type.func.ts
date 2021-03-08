import { IsType } from '../type/is-type.type';
import { Types } from '../../type/types.type';
import { isString } from './is-string.func';
import { isBigInt } from './is-big-int.func';
import { isBoolean } from './is-boolean.func';
import { isNumber } from './is-number.func';
import { isSymbol } from './is-symbol.func';
import { isUndefined } from './is-undefined.func';
import { isObject } from './is-object.func';
import { isFunction } from './is-function.func';
import { isInstance } from './is-instance.func';
/**
 * Checks if any `value` is a generic `Type` type constructor, `'function'`, `'object'` or primitive type.
 * Use the `guardType()` to type-guard generic `Type` type also.
 * @param value Any value to check if it's a generic `Type` type from one of the `type`.
 * @param type Generic constructor `Type`, `'function'`, `'object'` or one of the `Primitives` `'bigint'`, `'boolean'`, `'number'`, `'symbol'`, `'string'`, `'undefined'` to check `value` type.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAwg9gOwM7AE4FcDGw6oDwAq4EAfFALxQIQDuUAFAHTMCGqA5kgFxQsIgBtALoBKCmSKQA3AChQkKAAVUASwC2K4CoBuEJBSgByAEYr2KhMENQAPkeNw4AGwh9rdwwnRrjEVO6MkEB9nAMMUVQR2MPQEABMIADMLCDjDWXloADFYzAMmZjA2FjUePhAxcjJyjOIoST08AHljACsySnhkNCwcfBb22yNE3K1EMLg2iGwA5XVNHT1ahQBJJAaDQmISem0WJ3QIMv4AGihMngakLcgSSrI9g+gVfQbZC2A-RJZMaCaVqAAbygAA8eF4fH4oABfd6WL4-P7-IFQEA8CIWdgw2QyTCIFBQF4AITMK0s+Ueh2OFR4lOe+lM5nJVXOxDgiSgdIo5EoJjMH3SuPxwEJSCJjhcfAp+ypvH4IlpMvpUAczlcCHEnKVhO6fF+7Kg4rVUpsdnou21PMoPWgpq1T25lG+TiQEDEADJ3azIAauVb7BL1YYRLI8d1RTAnCwkPpKM02jtJq1psBqWcLrBhRhsLh4+0FVAkynRVABpqi9gdSg9RADZlQ8LRQA5by+VDSp7Ugtcl5UVtQlmZX2WnlGCFt6wAflFWQsmggFqeYkVDos1YQ+o5LchqAb4ZeAGU0JiO7Lyt3tb2MVFNUOOX7R+Fj1FBWGCS8AKrxJIpOKno5yjS9qHCWsQJMk1B-iyD6UGBP6QVAnrerW94jrycEQakr6Ni8AzFnGZaUOUOx0mmUAANYQCAk7os+7AXqu+iEWQd7AdA-qGBWViIV6Pa6huKGllMlbToedH0JRFRQNOkk6mxUA8DaClQM6rp7u+SA5BuYwapQi5nvKK4gb2Wl5IObKoQ6HEjNpKjjDx8lrsANYGqZOnqSKh7BA4Tj-l2RnKkEIS+eZPqWSBHFBT5gpCvu6zEDwawbHGDQkUqZEZlcNykAxxmvHULKAjIUCEhy9BiZE7D0JkIhiEVJUlUgNCaJgAAWDA1UCxUNSVmDRtAfJMlYPCoBAwDoKgGrEqSlj6W6sg9b1-UBsaCCGCNY0TVNYqBnwc0ht1PV9a6wyjHZa0beNk0zmdiD7Qti3HQN45+OtUCjVd23bm292HQ1T1GFxb0fVtop4dg2VpUuD1HctT6VcDm3XRVmK-YtUAA+E3mhJdoNecFaOPXDGG-ojn2il+4G-oTJXQt1dMlSD12ZNJEZRjGkNzemxDLip+xqTIsIyLi7P6AecBqBAkbRvowIggYACMUgwhjotQOLksEDQcDSzGKIgAYABMyt02+IowE0TYHgQABKH4wAQTQ2wY1B0BrUui-QB1m7AlvW3bDtOwQADqTQu7Q6sSxAWs6573uNkSTRNAAMgAogAgk2BiqRAHmGisADiKxNgQBgAJwAAwVwA7ArZdl4bACsAAs1fNxX9cKwgedZB+TYwDwpn5GCfY7vcoJQAA1FASuxQSTYfgAskSqfO5QCuG9XedNESABSqcOzwyKUHLPAK9ic8ijv++BwQAASq9H8f+s8Jx1DWELPv+8XBcGIYi8Gxeu2F42FwwHgAJrLxTgYA82MnD0EMGoEAwY859wACKpyyMXVOaCDAk0gjiN8apGBODgFVAABhbK2tt7aOxtuQs4LwGh4HdrrJAOwqH+1oUHUOZxWGi1qsrAA9EIvmLoIBz2IaQihicU4ZybAw0UzDVSSgQDsWRadM5nBMLtNagioAiPOBgCRRCXAkLIfQchRJC7FwIIophxA8DXnYOomxJdtGMgFPowxNpJFmOkZYhey9V72PipAPAQCdhBJXjbbRQDgwhgMaI3xpiIDmIob3fuoTmGmR2JkmA2ibLYHOgk4RyTjF+LSQE8h38mwF2yY45xOxakF20c40pSSjGHEqekyx18D52MYWEiAzR-g7H6Q7bRQNvHlO6ak3pNTIGJ2Tg08JTT6AQKgcnNpcCOk+IqfM6p6DMHYLQashcxysFNhwdo-BWEZldIkUAA
 */
export const isType: IsType = <Type>(value: any, type: Types<Type>): value is Type => {
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
  return type ? isInstance<Type>(value, type) : false;
};
