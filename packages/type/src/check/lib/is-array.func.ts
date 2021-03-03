/**
 * Check is any `value` an `Array` of any type.
 * Use `guardArray()` to type guard array `value` also.
 * @param value Any `value` to check it is an `Array` of any type.
 * @returns boolean.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBACgTgSwLYOAgbtAvFARge3wBsIBDAOygB88EBzBc4aqcgVyKJfaVwjhYBnYInJ0hIXsRZtyAEwgAzRhDkBuAFABjfOWFQEggIJw4pEFBwAKdKSJsIALigUQASme370Q1BNmQAB5XAD5LMP9zADpDSJAbOwc3KAAyFKgvBwM9YAotCHxFP1NzTW1dfQBlABUAJQBJADkAcQB9ADUjABkAVQBRSygAci78OAgkAzBBNiQAfiHNHRyoRp6AWQAhPtqO7v7BgCYAdiWK5k2AeUuuvqNGvd6BnEU7QQgzlZ7GgBE+gDEmn0fo8DjhZAplORVJ99EZarUjABNVo1BotUF9ZxxQLCUR0MI4ADaQ1IQwANMNcBThlohgBdWHMeGIlFrLY7THYkpBHh8OCEqBEk6UgDMxzFosZ5RWLORrRgDXW9Wq9XafS5xQCgXgyFQGAggqJwzxjDoNJFUBEWWly30AClKpcHp0noMAN6KQjOACMh1FAF8ynbiBAokR8HQrAADOUoxX1ZWq9WY6OU2I8qxxhVKlVqjWu-puNxqKAAejLVrgDhlglD4cjMez7O2u0LfTTBmMmebG1bmOLpYrVZrtfrEaj0bRTTa7c7GYCVmnGPbg-LldeRHeY5IDcnLc5c-T3cXB7b+z6a+Hm+3Id3E5jVxudxdF-nJ-MVift3uA5L66gG8IB3MMH2jb4-kBRpgVTY84isCCASBEFV3-a83mAu9QMbaNHWdWCu3gvDXyeK8NwwjQgA
 */
export const isArray = (value: any): value is Array<any> => Array.isArray(value) && value instanceof Array;
