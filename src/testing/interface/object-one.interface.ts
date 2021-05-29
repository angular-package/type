import { NUMBER } from '../src/strict/number.const';
import { STRING } from '../src/strict/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../src/strict/symbol.const';

export interface ObjectOne {
  'key as string'?: boolean;
  1030405027?: string;
  5?: string;
  [NUMBER]?: string;
  [STRING]?: string;
  [SYMBOL_NUMBER]?: string;
  [SYMBOL_STRING]?: number;
  x: number;
}