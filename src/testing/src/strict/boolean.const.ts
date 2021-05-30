/**
 * typeof === 'boolean'
 * instanceof Boolean === false
 * instanceof Object === false
 */
export const FALSE = false; // typeof === 'boolean'

/**
 * typeof === 'boolean'
 * instanceof Boolean === false
 * instanceof Object === false
 */
export const TRUE = true; // typeof === 'boolean'


/**
 * typeof === 'boolean'
 * instanceof Boolean === true
 * instanceof Object === true
 */
// tslint:disable-next-line: ban-types no-construct
export const FALSE_INSTANCE: Boolean = new Boolean(FALSE); // instanceof Boolean
// tslint:disable-next-line: ban-types no-construct
export const TRUE_INSTANCE: Boolean = new Boolean(TRUE);  // instanceof Boolean

export const FALSE_EXPECTATION = `new Boolean(${FALSE})`;
export const TRUE_EXPECTATION = `new Boolean(${TRUE})`;
