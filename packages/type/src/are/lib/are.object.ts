import { areString } from './are-string.func';
import { Are } from '../interface/are.interface';

export const are: Partial<Are> = {
  string: areString
};
