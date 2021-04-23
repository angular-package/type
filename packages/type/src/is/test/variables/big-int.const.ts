/**
 * typeof === 'bigint'
 * instanceof BigInt === false
 * instanceof Number === false
 * instanceof Object === false
 */
export const BIGINT: any = 9007199254740991n;  // typeof === 'bigint'

/**
 * typeof === 'bigint'
 * instanceof BigInt === false
 * instanceof Number === false
 * instanceof Object === false
 */
export const BIGINT_INSTANCE: any = BigInt('9007199254740991'); // typeof === 'bigint'

export const BIGINT_EXPECTATION = `BigInt('9007199254740991')`;
