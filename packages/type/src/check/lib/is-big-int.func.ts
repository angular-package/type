import { IsBigInt } from '../type/is-big-int.type';
/**
 * Checks if any `value` is a `'bigint'` type.
 * Use the `guardBigInt()` function to type-guard `bigint` also.
 * @param value Any value to check if it's a `'bigint'` type.
 * @returns boolean
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAkgzgIQJYHMYDthQLxQBQBuAhgDYCuEAXFEeiAJQ4B8Ux50ScUARqkpgG4AUAGMA9ujhZOyNJmrxZGLLkKkK1Wg2psKUTjz6ZmUUJDEAzVuujY7UAOS8U-YA+HjJWAMoAVAEowAHIA4gD6AGoAggAyAKoAojiOMWIAThAAtvpgcGSZAPzuohJSUEFxALIICf6RsYnJAEwA7B6lWAgA8l0xCVFB9fFJuBakcBDtXlAIMCHBvkONuACcAAxrLQCMKytNAKwALC2Ha7tb6FNwYiQQAHQkYih4AAZ+gaFLCS8ANPqIqGUeHewXC0WG9HoAigAHoYVAxiQJiVJDd7o9ni8KtVal9fv8lJg8NianVwYlIdC4QjxhAUddbg8nq9ur1+oNyd8-jJAUTWX0Bl9KbD4YjkZ4GejmS9ZvMgotOfieXJgHhZQshVCRaY0hQhEA
 */
export const isBigInt: IsBigInt = (value: any): value is bigint => typeof value === 'bigint';
