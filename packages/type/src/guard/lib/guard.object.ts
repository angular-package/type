import { Guard } from '../interface/guard-interface';
import { Partial } from './../../lib/partial.type';
import { guardIs } from './guard-is.object';

export const guard: Partial<Guard> = {
  is: guardIs
};
