/**
 * typeof === 'boolean'
 * instanceof Boolean === false
 * instanceof Object === false
 */
export const FALSE = false;

/**
 * typeof === 'boolean'
 * instanceof Boolean === false
 * instanceof Object === false
 */
export const TRUE = true;

/**
 * typeof === 'boolean'
 * instanceof Boolean === true
 * instanceof Object === true
 */
export const FALSE_INSTANCE: Boolean = new Boolean(FALSE); // instanceof Boolean
export const TRUE_INSTANCE: Boolean = new Boolean(TRUE);  // instanceof Boolean

export const FALSE_EXPECTATION = `new Boolean(${FALSE})`;
export const TRUE_EXPECTATION = `new Boolean(${TRUE})`;
