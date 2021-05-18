/**
 * typeof === 'boolean'
 * instanceof Boolean === false
 * instanceof Object === false
 */
export const FALSE: any = false; // typeof === 'boolean'

/**
 * typeof === 'boolean'
 * instanceof Boolean === false
 * instanceof Object === false
 */
export const TRUE: any = true; // typeof === 'boolean'


/**
 * typeof === 'boolean'
 * instanceof Boolean === true
 * instanceof Object === true
 */
export const FALSE_INSTANCE: any = new Boolean(FALSE); // instanceof Boolean
export const TRUE_INSTANCE: any = new Boolean(TRUE);  // instanceof Boolean

export const FALSE_EXPECTATION = `new Boolean(${FALSE})`;
export const TRUE_EXPECTATION = `new Boolean(${TRUE})`;
