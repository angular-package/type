import { Primitives } from '../../lib/primitives.type';
import { isString } from '../../is/lib/is-string.func';
import { IsString } from '../../is/type/is-string.type';
export const check = (type: Primitives, ...args: any): boolean => {
  let result = true;
  let method: IsString;
  switch (type) {
    case 'string': method = isString; break;
    default: method = isString; break;
  }
  for (const arg of args) {
    result = method(arg);
    if (result === false) {
      break;
    }
  }
  return result;
};
