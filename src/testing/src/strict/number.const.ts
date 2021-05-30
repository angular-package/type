/**
 * typeof === 'number'
 * instanceof Function === false
 * instanceof Number === false
 * instanceof Object === false
 */
export const NUMBER = 10304050;

/**
 * typeof === 'number
 * instanceof Function === false
 * instanceof Number === false
 * instanceof Object === false
 */
export const NUMBER_INSTANCE = Number(NUMBER);

/**
 * typeof === 'number'
 * instanceof Function === false
 * instanceof Number === true
 * instanceof Object === true
 */
// tslint:disable-next-line: ban-types no-construct
export const NUMBER_NEW_INSTANCE: Number = new Number(NUMBER);
