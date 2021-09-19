// Function.
import { guardDate } from '../lib/guard-date.func';
// Object.
import { guard } from '../lib/guard.object';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_DATE,
  TESTING_FUNCTION,

  // Class.
  TestingPerson
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.date.describe,
  tests.guard.date.it
);
/**
 * Tests.
 */
testing.describe(guardDate.name, () => {
  let guardSpy: any;
  testing
    .it('is DEFINED', () => expect(guardDate).toBeDefined());

  beforeEach(() => guardSpy = { ...{}, ...guard });
  testing
  .it('with callback and payload', () => {
    guardDate(TESTING_DATE, (result, value, payload) => {
      expect(result).toBeTrue();
      expect(value).toEqual(TESTING_DATE);
      if (payload) {
        expect(payload.action).toEqual('action');
        expect(payload.name).toEqual('name');
        expect(payload.param).toEqual('param');
      }
      return result;
    }, { action: 'action', name: 'name', param: 'param' });
  })
  .it(`called with ${TESTING_DATE}`, () => {
      spyOn(guardSpy, 'date').withArgs(TESTING_DATE).and.returnValue(true);
      guardSpy.date(TESTING_DATE);
      expect(guardSpy.date).toHaveBeenCalled();
    });
});
