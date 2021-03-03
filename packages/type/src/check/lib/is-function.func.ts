import { Func } from '../../lib/func.type';
import { IsFunction } from '../type/is-function.type';
/**
 * Check is any `value` a `'function'` type.
 * @param value Any value to check.
 * @returns boolean.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAYgrgOwMbAJYHsEBVzQLxQAUAdKWAIYBO5AtgFxTkIgCUUeAfI8wNwBQSTAGdgUVEPjI0mdkQBu5ADZwIDJqwYLl0cbEQoM2XOy6hI6AGZQtK9ngIByC-ukIHUAGQfrS26gQiTEgQlnpShvwCwqIAQgDycQAyAKIAggByAPoAaqmJAKrJshZKQhD8ggGxAJIA4tXpWDl5hbIAnAAMHQDsAIxtbQBMAKwALN2jHQO9CBXRUOn5ALIxyQBKzQVFBL2D3XNVUADKWGsNtZutjksgUAhwNABGEJRiQg6RlSKw+ekAwlhqnEslgAJoABWSDEkBkwOEgskIAA8GPcni8WGpmCYoABvKCUCDAOCUBBQJFQADUUGGPCgAF8BIpyEIhFA-tFKHAUOhKH9may8eTZLSGVFDn9gSc1vkAXENn9EqkjkdZAgIAB3dmc7nAXn8llCQgsT7CdCKCDERToADmhAABjBfgCgSCIcl7QAaN4w1yEJ3-QHAzJgyEsE1QAD0kagwC5EHFQnNlutdvtHKqXJ5fIFQi9PpchkIGZEWb1OcN4bp0dj8cTyattsIDkl6Wlsqw8syiuVRwc3vEvqLrfbcoVSpVVajMZKijK9YtjbtDniSTSWVyW37BfCmEIq5SGUuySnNdn86+DdTzcWK3Wx+3g8Le9vqw2m8Kp5npQTQA
 */
export const isFunction: IsFunction = (value: any): value is Func => typeof value === 'function' && value instanceof Function;
