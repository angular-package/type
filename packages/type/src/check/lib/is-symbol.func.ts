import { IsSymbol } from '../type/is-symbol.type';
/**
 * Checks if any `value` is a `'symbol'` type.
 * Use the`guardSymbol()` function to type-guard `symbol`  also.
 * @param value Any `value` to check if it's a `'symbol'` type.
 * @returns boolean.
 * @example https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAygTwLYCMQBsYF4YAUAbgIZYCuApgFwwljICUtpFl8EMEamOuAfDCjIADpRAAzGKyp5c+AOTcM2BQG4AUBtCRYiACoAlAJIA5AOJ4YCgDIgATpVTwREcqgD867eGgxTAKoAsgBCAKKGVgBMAOyaOn4hAPJJNmEAgqZWEmQQlPG+sKZhAOoGJhZWYJQA7jCIUPZwYADmBLYOTi5uzuhYJAMAFgqMBbr1AJqhqVYoKljtAApNpFCUI5o+kNiUAHRYIG0ABuVm5kcANBxzvASnFoyjMAD0z0L2VFsQO-uHBEeBUIRS7XHjYAiA8KGR5qF5vHJYPJfH4HY7JVIZUwghA3cHotKZGFwmAIpEJFF-AGle7nK44sELYplIxnImvEm5SjIrB7VH-RBTZI2bFIBl3QWpNlvRpUIA
 */
export const isSymbol: IsSymbol = (value: any): value is symbol => typeof value === 'symbol';
