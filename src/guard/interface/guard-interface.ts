// Interface.
import { GuardIs } from './guard-is.interface';
/**
 * The shape of an object with guard functions.
 */
export interface Guard extends GuardIs {
  /**
   * The object consists prefixed with `is` functions.
   */
  is: GuardIs;
}
