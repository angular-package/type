import { Func } from '../../../type/func.type';
/**
 * typeof === 'function'
 * instanceof Function === true
 * instanceof Object === true
 */
export const FUNCTION: Func = (x: number, y: string): any => x + y;
