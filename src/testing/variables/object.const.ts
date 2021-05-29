// Constant.
import { NUMBER } from './number.const';
import { STRING } from './string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from './strict/symbol.const';
// Interface.
import { DataDescriptor, } from '../interface';
import { ObjectOne, ObjectTwo } from '../interface';
// Type.
import { ThisAccessorDescriptor } from '../type/this-accessor-descriptor.type'

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
export const OBJECT_ONE: ObjectOne = {
  'key as string': true,
  1030405027: 'key is number',
  5: 'key is also number',
  [NUMBER]: 'key is number',
  [STRING]: 'key is string',
  [SYMBOL_NUMBER]: 'key is symbol number',
  [SYMBOL_STRING]: 6,
  x: 3000
};

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


export const DATA_DESCRIPTOR: DataDescriptor<string> = {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'my value'
}

export const ACCESSOR_DESCRIPTOR: ThisAccessorDescriptor<string | undefined, ObjectOne> =  {
  configurable: true,
  enumerable: true,
  get(): string | undefined {
    return this[5];
  },
  set(value: string | undefined) {
    this[5] = value;
  }
}