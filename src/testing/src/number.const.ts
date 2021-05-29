/**
 * typeof === 'number'
 * instanceof Function === false
 * instanceof Number === false
 * instanceof Object === false
 */
export const NUMBER: any = 10304050;

/**
 * typeof === 'number'
 * instanceof Function === false
 * instanceof Number === false
 * instanceof Object === false
 */
export const NUMBER_INSTANCE: any = Number(NUMBER);

/**
 * typeof === 'number'
 * instanceof Function === false
 * instanceof Number === true
 * instanceof Object === true
 */
// tslint:disable-next-line: no-construct
export const NUMBER_NEW_INSTANCE: any = new Number(NUMBER);
