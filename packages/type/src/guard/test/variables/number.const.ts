
/**
 * @example https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 */

/**
 * typeof === 'number'
 * instanceof Function === false
 * instanceof Number === false
 * instanceof Object === false
 */
export const NUMBER = 10304050;

/**
 * typeof === 'number'
 * instanceof Function === false
 * instanceof Number === false
 * instanceof Object === false
 */
export const NUMBER_INSTANCE: Number = Number(NUMBER);

/**
 * typeof === 'number'
 * instanceof Function === false
 * instanceof Number === true
 * instanceof Object === true
 */
export const NUMBER_NEW_INSTANCE: Number = new Number(NUMBER);
