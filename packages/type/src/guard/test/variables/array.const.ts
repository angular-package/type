// Variables.
import { BIGINT, BIGINT_INSTANCE } from './big-int.const';
import { Class } from './class.const';
import { FALSE, TRUE, TRUE_INSTANCE, FALSE_INSTANCE } from './boolean.const';
import { NULL } from './null.const';
import { NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE } from './number.const';
import { ObjectOne, ObjectTwo } from './object.const';
import { STRING, STRING_INSTANCE, STRING_NEW_INSTANCE } from './string.const';
import { UNDEFINED } from './undefined.const';
import { notDefined } from './not-defined.const';
// Type.
import { Func } from '../../../type/func.type';

// Arrays.
// Array with `bigint`.
export const ARRAY_BIGINT: Array<bigint> = [BIGINT, BIGINT_INSTANCE, 9007199254740991n];
// Array with `boolean`.
export const ARRAY_BOOLEAN: Array<boolean | Boolean> = [true, false, TRUE_INSTANCE, FALSE_INSTANCE, false, FALSE, TRUE];
// Array with `Class` instances.
export const ARRAY_CLASS: Array<Class> = [new Class(), new Class()];
// Array with `function`.
export const ARRAY_FUNCTION: Array<Func> =
  [(x: number, y: string): any => x, (x: number, y: string): any => x, (x: number, y: string): any => x];
// Array with `null`.
export const ARRAY_NULL: Array<null> = [null, null, null, NULL, NULL];
// Array with `number`.
export const ARRAY_NUMBER: Array<number | Number> = [1, 2, 3, 4, 7, 10, 1000, 3000, 151233, NUMBER, NUMBER_INSTANCE, NUMBER_NEW_INSTANCE];
// Array with 'object'.
export const ARRAY_OBJECT_ONE: Array<ObjectOne> = [{ [NUMBER]: 'my number', x: 3000 }, { [NUMBER]: 'my number', x: 1 }];
export const ARRAY_OBJECT_TWO: Array<ObjectTwo> = [{ x: 'One Two Three', y: 10000  }, { x: 'One Two Three', y: 10000  }, { x: 'One Two Three', y: 10000  }];
// Array with `string`.
export const ARRAY_STRING: Array<string | String> = [STRING, STRING_INSTANCE, STRING_NEW_INSTANCE, '!@#$%^&*()abcdefghijklmnoprstuwyz'];
// Array with `symbol`.
export const ARRAY_SYMBOL_NUMBER: Array<symbol> = [Symbol(1005), Symbol(1002), Symbol(15), Symbol(1)];
export const ARRAY_SYMBOL_STRING: Array<symbol> = [Symbol('String Symbol'), Symbol('String Symbol'), Symbol('String Symbol One'), Symbol('String Symbol Two')];
// Array with `undefined`.
export const ARRAY_UNDEFINED: Array<undefined> = [undefined, undefined, undefined, UNDEFINED, notDefined];
