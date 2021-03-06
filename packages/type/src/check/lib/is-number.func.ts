import { IsNumber } from '../type/is-number.type';
/**
 * Checks if any `value` is a `'number'` type or `Number` instance.
 * Use the `guardNumber()` function to type-guard `number` also.
 * @param value Any value to check if it's a `'number'` type.
 * @returns boolean
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAkgzgOQK4FsBGEBOUC8UAUAbgIYA2SEAXFMQHYgCUuAfFCedAJZxS2oaYA3ACgAxgHtacYFG7J0WavHkDcBdhWp1G1DVx58F2HM2FQooSOIBmbMhVw48AckMDnUAPyy4AMU60nMAQRPYQTLphslLAdKIQNlAqWCISMVAAygAqAEowCADiAPoAagCCADIAqgCias4V4pgQKLJgcKiezqmS0klVALIAQjU5pZW1agBMAOw96UMA8osVNWUI49V1eNZkcBDzfUMwBflZm5N4AJwADDczAIxXV1MArAAsM+83zw+0h+JSBAAHSkcQAc3wAANsnlChcalCADQ+ZKYfCw-LFcpbBgMQRQAD0hKgu1I+zEvUBILBkKhCEGIzGONqyNR-Cw+AZw1GCLxBOJFkwFEpUmpoIh0KWKzWGxZiJRcg56Olq3WfPxRJJZIpaTg4tpUpOZwRbKVRnwx1OCHO8v5WtJewgwiAA
 */
export const isNumber: IsNumber = (value: any): value is number =>
  typeof value === 'number' ? isFinite(value) : value instanceof Number;
