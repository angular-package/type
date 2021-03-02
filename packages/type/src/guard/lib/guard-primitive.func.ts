import { Primitives } from '../../lib/primitives.type';
/**
 * Guard the `value` to be a generic `Type` from one of the `Primitives`.
 * Use `isPrimitive()` function for check ONLY.
 * @param value A generic `Type` type value to guard.
 * @param type One of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'` to check `value`.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBACgTgSwLYOAgbhAzlAvFAcgCMB7EgGwgEMA7AqAH0KIQHMEbh6mCaBXJEQhxuhLMEQ1WBANwAoAMYka4qKz5U4AE3jJUGaPgA8AFXAQAfAAp0VcnwgAuKGcgAaKKEjPdKNJiwASmdbe2gEHFdDC09zEgAzKFCHPFx8Lwh5JRVgKAAhAHkCgBkAUQBBADkAfQA1cuKAVVK8KHi7LEzFZVU8gEkAcT7KkzqG5taATgAGaYB2AEZJyYAmAFYAFjmN6eWFmiye3MrGgFk80oAlMaaW-AWVucOcqABlE0vhgZuJ-AJTkBQfiCYRQCKyboqCgQAB05BIrCsAANCiUKjV6rckR51JodIg-AYjKRobRrKiylUfqUPMQyJRaARAoEZFAAPRszxwByQrDQuEI5H9IYjanYtQabS+fSYYlsDjAcmDYajTHNWksdicJks9mciQ87J8ygCxFIk7nK5inGS-F6fwQIzAoRwawWi7XNU0wjO4Q61kcrmGnr8+Fm96fSrfL3i3FSgkyx3iSSsawRr7U2nJjjSZkB-XciC80OClFFSkY8alWO26UO4n06g0NMfDNejWNxl5vVtDpFo0ls3ClXWiV4utEzUKt1nD2Z5jy7XdwPtcidYsmsPI91WmM28cJ+u+11WdNR+e8AQu-091frgeb0tn6NVmsH+1E7NSGeWz1VrMSDmN4rn2chAA
 */
export const guardPrimitive = <Type>(value: Type, type: Primitives): value is Type => typeof value === type;
