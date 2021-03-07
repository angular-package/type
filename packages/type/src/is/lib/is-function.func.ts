import { IsFunction } from '../type/is-function.type';
import { Func } from '../../type/func.type';
/**
 * Checks if any `value` is a `'function'` type and `Function` instance.
 * @param value Any `value` to check if it's a `'function'` type and `Function` instance.
 * @returns boolean.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAYgrgOwMZQLxQBQDodgIYBOeAtgFxR4IgCUaAfBVQNwBQokUAkgM7zLABLAPYI0mAG54ANnAjlKNelEkzoA7rERJWSEd2BR1fJIJHkex06PQYVs+VWrk7ajcaXsIQgGbLpstFR0AHJvLStgqAAyKL9VQwR9SiQvX0thBB0pPG4NAGE9YAI4EyECPOzcqABvKAAPMQBWJigAXxZdRIMAIQB5XoAZAFEAQQA5MSLZHUKobs4AcU4xgBUxAE4ABk2AdgBGdfWAJkaAFh3TzcO9zI7ZsYBVAFluoYAlMT2jnZmuqABlFZvZYLMTBJ4gKAIODEABGEAIhm4wV++lgDzGeXI7hsdXI0LhCKcjEhqAYtQIEGAcAIogaAGooM02nc-stAeM8kMxAgIAB3KAFLrFUrlSrcDDUVFCKQQLBSIQAcwwAAMhfoRcAyhUctwVQAaJHpEQYdVTUU63LUKVQAD0tqgUwgrO4MrlCuVwXmS1WwUNRnCGQw3uWK2tLXtUG80m4zs6rtl8qVGC9-WG4z9RsDJr6g1GY3Ddod0aksZdbqTnseL3emYD-CD1deb0LkZLZfjFY9KcBwLGCzrvGzCAwvZBreLMbjei7yZVMAxeQNWYbJoXmInjuK08Ss897JWnKGg+NI4PR837YgQA
 */
export const isFunction: IsFunction = (value: any): value is Func => typeof value === 'function' && value instanceof Function;
