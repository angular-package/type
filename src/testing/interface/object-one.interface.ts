import { NUMBER } from '../variables/strict/number.const';
import { STRING } from '../variables/strict/string.const';
import { SYMBOL_NUMBER, SYMBOL_STRING } from '../variables/strict/symbol.const';

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