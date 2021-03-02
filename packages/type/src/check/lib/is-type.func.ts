import { Types } from '../../lib/types.type';
/**
 * Check is any `value` a generic `Constructor` or primitive type.
 * Use `guardType()` to type guard generic `Type` `value` also.
 * @param value Any value to check it is a generic `Type` from one of the `type`.
 * @param type Constructor generic `Type` or one of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'` to check `value` type.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAwg9gOwM7AE4FcDGw6oDwAq4EAfFALxQIQDuUAFAHTMCGqA5kgFxQsIgBtALoBKCmSKQA3AChQkKAAVUASwC2K4CoBuEJBSgByAEZw4AGwh9DUAD5HjK9ioTAb9wwnRrjEVO6MUVQR2Q1l5aEk9PAB5YwArMkp4ZDQsHHw4xLslVQ0tXSRZTEQUKBUkKINCYgM+EBJ6bRZzdAgeeoAaKAieKKQayBIRHmbW6AqoKvIyegi4ADMe2vJVwLQXULEAfgZ5pbG2ijWIsVGWo5cUPkwIReXpGUxzFiR9FKD0NDgYF7eoADeUAAHgYAIxSKAAXyepWAsAAMgBBADKKIA+gA1JEIgCqAFEDNQ6B80t9fq8kPQRMU4VAAEIxGII-FIgByWJxBIMCxaSAgtNSDIAkgBxYVsgicvGEygATgADAqAOxguVygBMAFYACzKnUK9VghCCsps3EAWXp+IAStLuZQwRrlab4SiCDaJaL7bKjBaQFRvL5UOUkGFYcgLBBGOY4Ox6AADUkYcl-JAJ7oVKJ4ZNfVA-NONGDItE+7q51OUkQ0qAAelrPQwEAjSCjMbjicZzNZHOxMozoezpijfEaXZZ7LLDjMlms1ch9cbbRbbdj8YT9LFEqlfYJA6zxDwQU2Y63kqnJicLjc87rDbSzZKkcs7fX5qttvRBAAEjb8fj90qQ8vB8PxGnfa07V3fFuk8IM-EMW9FwfFcXzXRMIM-AAxGJcRtQDs2PEJGndT02W9aDYKIrYa2QpsZCAA
 */
export const isType = <Type>(value: any, type: Types<Type>): value is Type =>
  typeof type === 'string' ? typeof value === type : value instanceof type;
