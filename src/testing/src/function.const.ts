/**
 * typeof === 'function'
 * instanceof Function === true
 * instanceof Object === true
 */
export const FUNCTION: any = (x: number, y: string): any => x + y;

export function functionConstructor(this: any, ...args: any[]): any {
  if (args) {
    args.forEach((arg, index: number) => this[index] = arg[index]);
  }
  return this;
}
