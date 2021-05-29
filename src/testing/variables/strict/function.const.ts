import { Func } from '../../../type/func.type';
import { Person } from '../../interface/person.interface';
/**
 * typeof === 'function'
 * instanceof Function === true
 * instanceof Object === true
 */
export const FUNCTION: Func = (x: number, y: string): any => x + y;

export function personFunctionConstructor(this: Person, ...args: any[]): Person {
  if (args) {
    this.firstName = args[0];
    this.surname = args[1];
    this.age = args[2];
    this.sex = args[3];
  }
  return this;
}
