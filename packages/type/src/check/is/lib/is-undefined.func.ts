import { IsUndefined } from '../../type/is-undefined.type';
/**
 * Checks if any `value` is an `'undefined'` type.
 * @param value Any `value` to check if it's an `'undefined'` type.
 * @returns boolean.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAkgzgVQHYBMIDMCWSIqgXigAoA3AQwBsBXCALijKRAEoCA+Kc66TOKK1Bmy4A3ACgAxgHskcYFF7I0WHCnrwlQ1QWJca9Ri3p6efAcuF58HEwXyFzW3FABkLqKEhT0nSjTuEAOSOKriB4pIyclAAygAqAEowAHIA4jqBADJSAE4QALYKYHBU+QD84ZGy8skIALIAQgCiCToATADs4tLVUA0A8v2ZTQCCyTrolHAQ4hQQ8nPAIZbdUfIIyQAiTQBiKU2bOsuqET1wUnMAdBRSAOZEAAbxSWkPADQKiIKhKETPKalmMwRFAAPSgqCTCjTKrnK43e4PWqNFrvT6aH5EZHNBJAkHgyFTCCwi4Qa53R4DIajZJoxTfSxEKnDMZ4sEQqEws6k8mIxbHXB0r4WVREfkM1RsgnAHI0EnwikPDbbPbJA5CjGM5W7fabKUcoliIA
 */
export const isUndefined: IsUndefined = (value: any): value is undefined => value === undefined && typeof value === 'undefined';
