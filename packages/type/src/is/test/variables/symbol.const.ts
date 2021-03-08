import { NUMBER } from './number.const';
import { STRING } from './string.const';

/**
 * @example https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
 * @example https://www.typescriptlang.org/play?target=7&jsx=0#code/MYewdgzgLgBAcgVQLICECiAlAXDAhmATxgF4YBGABgGYKAWCgVgoG4AoUSWAZQE1UB5ADIB9RKkw58RUlwIBbAEYgANgAox6DAEo2HCCoCmAOmUgA5qoAGvASI2YYUAgAcDIAGYlipAOQASAG8nVw8YGxQhUWRNAF8fSx12cH1lY1MLaz4Iu2iHAEtOfGA3TxQQQ3xLABowrMj7DBgC6CKSmDKKsES9QxNzK3D63MbmqFbQgDEAVzBgKDzwatrbKPERwtm26dn58G7k3vSBupy1po3i0LgpxQMAJyXB081zls2rm4V7-chD-syVg1XmN3p5+AoAFYGOaPE6rF6jcZgyHQqA6GBJX6pPoZJ7w-IXNpcKB3ApmWGA4bApFhElkn4pNL-PFAxGgsLyJTKCnZfHrN6XTyyRQqRKYxk4qwJXTJbgAFQwAEk4ABxSSEEgwHwAQgAAgBiPwAUgAegAyABUqi0uAUwAAJgZ3GYABZ5CEAa2UcjAIGcd2gUwA7gQAF4+GWcZa8rgK5VqvAamSclSqWNK1UMv64uHp+OOFxtby+QLBIm5uOquLS8XZ44rPOq6nsjqpSo1PGNlXNwXtcptrqRiVHAExyvdtm97ZzBZgHmRLs9rYzGd7Id10cL8dLj63B4disZieE3dfO5Z7EjzvbydtcFQmEHhs3k-Ih9o9eX5mH-O30LE0kwHJJ8xyPHchTpICLyZHNnzAv8hRTbkQK3eDXw5EVlESIA
 */
/**
 * typeof === 'symbol'
 * instanceof Boolean === false
 * instanceof Function === false
 * instanceof Number === false
 * instanceof Object === false
 * instanceof String === false
 * instanceof Symbol === false
 */
export const SYMBOL_NUMBER: any = Symbol(NUMBER);
export const SYMBOL_STRING: any = Symbol(STRING);
