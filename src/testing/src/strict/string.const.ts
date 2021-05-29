/**
 * typeof === 'string'
 * instanceof Function === false
 * instanceof Object === false
 * instanceof String === false
 */
export const STRING = '!@#$%^&*()Company';

/**
 * typeof === 'string'
 * instanceof Function === false
 * instanceof Object === false
 * instanceof String === false
 */
export const STRING_INSTANCE = String(STRING);

/**
 * typeof === 'string'
 * instanceof Function === false
 * instanceof Object === true
 * instanceof String === true
 */
// tslint:disable-next-line: ban-types no-construct
export const STRING_NEW_INSTANCE: String = new String(STRING);
