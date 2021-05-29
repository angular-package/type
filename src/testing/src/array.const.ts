// Constant.
import { BIGINT, BIGINT_INSTANCE } from './big-int.const';
import { Class } from './class.const';
import { FALSE, TRUE, TRUE_INSTANCE, FALSE_INSTANCE } from './boolean.const';
import { NULL } from './null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from './number.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from './string.const';
import { UNDEFINED } from './undefined.const';
// Type.
import { notDefined } from './not-defined.const';

// Arrays.
// Array with `bigint`.
export const ARRAY_BIGINT: Array<any> = [BIGINT, BIGINT_INSTANCE, 9007199254740991n];
// Array with `boolean`.
export const ARRAY_BOOLEAN: Array<any> = [true, false, TRUE_INSTANCE, FALSE_INSTANCE, false, FALSE, TRUE];
// Array with `Class` instances.
export const ARRAY_CLASS: Array<any> = [new Class(), new Class()];
// Array with `function`.
export const ARRAY_FUNCTION: Array<any> =
  [(x: number, y: string): any => x, (x: number, y: string): any => x, (x: number, y: string): any => x];
// Array with `null`.
export const ARRAY_NULL: Array<any> = [null, null, null, NULL, NULL];
// Array with `number`.
export const ARRAY_NUMBER: Array<any> = [1, 2, 3, 4, 7, 10, 1000, 3000, 151233, 12352223, NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE];
// Array with 'object'.
export const ARRAY_OBJECT_ONE: Array<any> = [{ x: 3000 }, { x: 1 }, { x: 55 }];
export const ARRAY_OBJECT_TWO: Array<any> = [{ x: 'One Two Three', y: 10000  }, { x: 'One Two Three', y: 10000  }, { x: 'One Two Three', y: 10000  }];
// Array with `string`.
export const ARRAY_STRING: Array<any> = [STRING, STRING_INSTANCE, STRING_NEW_INSTANCE, '!@#$%^&*()abcdefghijklmnoprstuwyz'];
// Array with `symbol`.
export const ARRAY_SYMBOL_STRING: Array<any> = [Symbol('String Symbol'), Symbol('String Symbol'), Symbol('String Symbol One'), Symbol('String Symbol Two')];
export const ARRAY_SYMBOL_NUMBER: Array<any> = [Symbol(1005), Symbol(1002), Symbol(15), Symbol(1)];
// Array with `undefined`.
export const ARRAY_UNDEFINED: Array<any> = [undefined, undefined, undefined, UNDEFINED, notDefined];
