import { Guard } from '../interface/guard-interface';
import { guardIs } from './guard-is.object';

export const guard: Partial<Guard> = {
  is: guardIs
};
