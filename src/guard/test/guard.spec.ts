import { guard } from '../lib/guard.object';
// Testing.
import {
   // Main.
   Testing,
 } from '@angular-package/testing';
 // Execute tests.
import { tests } from '../../execute-tests';
 /**
  * Initialize testing.
  */
const testing = new Testing(
   tests.object.guard.describe,
   tests.object.guard.it
 );
 /**
  * Tests.
  */
testing.describe(`guard`, () => {
  testing
  .describe('DEFINED', () => {
    testing
    .it('guard', () => expect(guard).toBeDefined())
    .it('guard.array()', () => expect(guard.array).toBeDefined())
    .it('guard.boolean()', () => expect(guard.boolean).toBeDefined())
    .it('guard.class()', () => expect(guard.class).toBeDefined())
    .it('guard.defined()', () => expect(guard.defined).toBeDefined())
    .it('guard.function()', () => expect(guard.function).toBeDefined())
    .it('guard.instance()', () => expect(guard.instance).toBeDefined())
    .it('guard.key()', () => expect(guard.key).toBeDefined())
    .it('guard.null()', () => expect(guard.null).toBeDefined())
    .it('guard.number()', () => expect(guard.number).toBeDefined())
    .it('guard.object()', () => expect(guard.object).toBeDefined())
    .it('guard.objectKey()', () => expect(guard.objectKey).toBeDefined())
    .it('guard.objectKeys()', () => expect(guard.objectKeys).toBeDefined())
    .it('guard.primitive()', () => expect(guard.primitive).toBeDefined())
    .it('guard.string()', () => expect(guard.string).toBeDefined())
    .it('guard.symbol()', () => expect(guard.symbol).toBeDefined())
    .it('guard.type()', () => expect(guard.type).toBeDefined())
    .it('guard.undefined()', () => expect(guard.undefined).toBeDefined());
  });
});
