import { GuardIs } from './guard-is.interface';
import { GuardAre } from './guard-are.interface';

export interface Guard {
  is: Partial<GuardIs>;
  are: GuardAre;
}
