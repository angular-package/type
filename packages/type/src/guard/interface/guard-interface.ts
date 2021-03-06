import { GuardIs } from './guard-is.interface';
import { GuardAre } from './guard-are.interface';
import { Partial } from './../../lib/partial.type';

export interface Guard {
  is: Partial<GuardIs>;
  are: GuardAre;
}
