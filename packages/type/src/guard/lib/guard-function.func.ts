import { GuardFunction } from '../type/guard-function.type';
import { isFunction } from '../../is/lib/is-function.func';
import { Func } from '../../type/func.type';
/**
 * Guard the `func` value to be a `Func` type.
 * @param func `Func` type value to guard.
 * @returns boolean.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAYgrgOwMZQLxQBQDodgIYBOeAtgFxR4IgCUaAfBVQNwBQSA9ggM7BQCWXeMmB9OaTADc8AGzgRylGuSmzoA2IhSoGoSOwBmUFXLSp0Acn2aRnc1ABk9ozJN9uwSkggGNw0QlYOdygAczhCABMhJBsEcQwrZHJo6nJElHVo+n5Ba38EzWpWNk4eKAAhAHlKgBkAUQBBADkAfQA1BpqAVTrxfRkuCEDS3nKASQBxMaaAFXbOnvEATgAGFYB2AEYlpYAmAFYAFnXDlZ3NgJLgpq6AWXK6gCV57t70Td314eCAZRnH6YTF6LCy3EBQBBwYgAIwgBBy5mKQTKMC6TQAwjMxpVWjMAJoABTqyU08QAHuRITC4alGODtFAAN5QAgQYBwAhxMlQADUUH2TCgAF82NI8FwuFB0SMCHAYuwCOixRKmVBuegBcKrmV0Ti-o8upjKs90TUGj8fuIEBAAO5SmVy4AKpXirgYIosbXsaQQLDSdghDAAA1RGKxOJa+KJQYANKFwgQonlOBhQ5jsbjCXVqEUoAB6PNQYCyiCe5He33+wNB6XuWXyxXKrix+ORaKxDC1nj1p2N105wUFoslqDQuC8PgTyUIdi8LIzcCl8s+v0BjDmXVNfWGmbGlqm80-cxxsJt5MITt6-47vcHi0D-OF-rSQZeldV9dVWqNVodV7H1tE3bfIv3qZpgWzXMh2fV9l0rNdzBue4ngggDTyA88MCQh5nj-HoH2ggZSyAA
 */
export const guardFunction: GuardFunction = (func: Func): func is Func => isFunction(func);
