/**
 * @example https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */
/**
 * typeof === 'string'
 * instanceof Function === false
 * instanceof Object === false
 * instanceof String === false
 */
export const STRING: string = '!@#$%^&*()abcdefghijklmnoprstuwyz';

/**
 * typeof === 'string'
 * instanceof Function === false
 * instanceof Object === false
 * instanceof String === false
 */
export const STRING_INSTANCE: String = String(STRING);

/**
 * typeof === 'string'
 * instanceof Function === false
 * instanceof Object === true
 * instanceof String === true
 */
export const STRING_NEW_INSTANCE: String = new String(STRING);
