/**
 * typeof === 'string'
 * instanceof Function === false
 * instanceof Object === false
 * instanceof String === false
 */
export const STRING: any = '!@#$%^&*()Company';

/**
 * typeof === 'string'
 * instanceof Function === false
 * instanceof Object === false
 * instanceof String === false
 */
export const STRING_INSTANCE: any = String(STRING);

/**
 * typeof === 'string'
 * instanceof Function === false
 * instanceof Object === true
 * instanceof String === true
 */
// tslint:disable-next-line: no-construct
export const STRING_NEW_INSTANCE: any = new String(STRING);
