
/**
 * @example https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 */

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
export const NUMBER_INSTANCE: any = Number(10304050);

/**
 * typeof === 'number'
 * instanceof Function === false
 * instanceof Number === true
 * instanceof Object === true
 */
export const NUMBER_NEW_INSTANCE: any = new Number(10304050);
