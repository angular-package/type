import { IsFunction } from '../type/is-function.type';
import { Func } from '../../type/func.type';
/**
 * Checks if any `value` is a `'function'` type, instance of `Function` and `Object`.
 * @param value Any `value` to check if it's a `'function'` type, instance of `Function` and `Object`.
 * @returns boolean.
 * @example https://www.typescriptlang.org/play?target=7&jsx=0#code/C4TwDgpgBAYgrgOwMZQLxQBQDodgIYBOeAtgFxR4IgCUaAfBVQNwBQokUAkgM7zLABLAPYI0mAG54ANnAjlKNelEkzoA7rERJWSKXm4aAwnoNQA3lAAeYgKxMoAXxZIR3YFHV8kgkeR5efUXQMFVl5KmpyULUNLyV2CCEAM2VpWTRUdAByJK1ArKgAMkLU1Q8EN0okRJSA4VFi0vSBCuAqmqgAeQAjACsIbx1XdwAhTs6AGQBRAEEAOTFgAlkh1qgRzgBxTjmAFTEATgAGI4B2AEYDg4AmGwAWU7ujq-OEVbcoOYBVAFkRqYASmJztdTu93ABlXYAnabMRZH4gKAIODEboQAgebhZcGwL5zQzkOLBSzkFFojGRRhI1AMCwECDAOAEUTWADUUDsjmcwy4cyh80MUzECAgAHcoMZ9NwMNR3kIpBAsFIhABzDAAAylBg1ABosXURBhtdxqHKoAB6C1QJayHkVBVKlXqrIbbZ7LL6zx5eoYN07XZm+xWqBJaTcCD27iO5VqjCu8bTeaeg0+o1jSazOZBy3WsNSCNRmPO+PfP6AlPe-i+sv-AE5kP5wsuB2K2MuqEwuabSu8NMIDCd2ENvPhyMt6NtksamD4wx61PVo2zgkjm3LceuYtxrI7AUEqa9w0Dve7QVTNdNiBAA
 */
export const isFunction: IsFunction = (value: any): value is Func =>
  typeof value === 'function' && value instanceof Function && value instanceof Object;
