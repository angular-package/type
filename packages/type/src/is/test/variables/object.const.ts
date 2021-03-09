export interface ObjectOne { x: number; }
export interface ObjectTwo { x: string; y: number; }
/**
 * @example https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
 */
/**
 * typeof === 'object'
 * instanceof Boolean === false
 * instanceof Function === false
 * instanceof Number === false
 * instanceof Object === true
 * instanceof String === false
 * instanceof Symbol === false
 */
export const OBJECT_ONE: ObjectOne = { x: 3000 };

/**
 * typeof === 'object'
 * instanceof Boolean === false
 * instanceof Function === false
 * instanceof Number === false
 * instanceof Object === true
 * instanceof String === false
 * instanceof Symbol === false
 */
export const OBJECT_TWO: ObjectTwo = { x: 'One Two Three', y: 10000  };

/**
 * typeof === 'object'
 * instanceof Boolean === false
 * instanceof Function === false
 * instanceof Number === false
 * instanceof Object === true
 * instanceof String === false
 * instanceof Symbol === false
 */
export const OBJECT_ONE_NEW = new Object(OBJECT_ONE);

/**
 * typeof === 'object'
 * instanceof Boolean === false
 * instanceof Function === false
 * instanceof Number === false
 * instanceof Object === true
 * instanceof String === false
 * instanceof Symbol === false
 */
export const OBJECT_TWO_NEW = new Object(OBJECT_TWO);
