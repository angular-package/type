import { isArray } from '../../is/lib/is-array.func';
import { GuardArray } from '../type/guard-array.type';
/**
 * Guard the `value` to be a generic `Array` `Type`.
 * Use `isArray()` function to check ONLY.
 * @param value Array generic type value to guard.
 * @returns boolean.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBACgTgSwLYOAgbtAvFARge3wBsIBDAOygB88EBzBc4aqcgVyKJfaVwjhYBnYInJ0hIXsRZtyAEwgAzRhDkBuAFABjfOWFQEggIJw4pEFBwAKdKSJsIALigUQASme370Q1BNmQAB5XAD5LMP9zADpDSJAbOwc3KAAyFKgvBwM9YAotCHxFP1NzTR0cqDo2Ujg5OMsoQIAVcAgQhO9nOObWkI8MxJ9BYoCeyDCsMNiS+MyIN01tXX0AZSaAJQBJADkAcQB9ADUjABkAVQBRBoByE-w4CCQDMEE2JAB+a7Ll5m2zgFkAEIXdZHU6XBoAJgA7N8KoCAPIIk4XIzbMHnK44RR2QQQOH6M7bAAiFwAYjsLsSMRCcLIFMpyKoCcwjOt1kYAJr7NZbPY0i5dGaBYSiOgTKAAbWupGuABooNdcPLFVprgBdFl+dlc-Z-IEggVC0Y8PhwCWSmEKgDM0Jt1s1SwqbI53JgW3+myam0OFyNI3MgXgyFQGDaDUlitFjDoKqtUBEWUd5X0Lt1RNJFO2VP93XpShUcgt+cZqgVJcL5fkBaZcmTPygACkVgj0cdMQ0AN6KQjOACMkOtAF9FiniBAokR8HQrAADNNuj1en1+9uXWcKqo1OrC4MoNCYdoL-buzae72+gVuBZQAD0t4TcAcTsE48n07nx-1wNBa4uG8qapam6U1+CPHVuW-Q0-2vNQ7wfRMIBfN8pxnecIJ5DYdgOP8AK3YDhWjMRwNdTC+Rw8ELlg+DH2fMcSHfNDjwzclKWpXDNyAndRgrWsSPTElWOzdjKOo+9aKQ5CGNQudeWwgU8K47oiPFKw5P5GCb3EnEiDxKSJxk2coN-SjFO3EC3jNdpjKvLSHx0vT6IMj9Z0RZFUTbUzOPM4UCHHCh2jclE0VsuDtNxJCnMYucWKzHMOMAnyeOrUsiysWK2NCmiHMi5YUJc5tWwU7yCNGfBcAAKwgLRgHaQrPMxMT7IijQgA
 */
export const guardArray: GuardArray = <Type>(value: Array<Type>): value is Array<Type> => isArray(value);
