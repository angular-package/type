import { guard } from '../lib/guard.object';

describe('`guard`', () => {
   describe('DEFINED', () => {
      it('guard', () => expect(guard).toBeDefined());
      it('guard.is.array()', () => expect(guard.is.array).toBeDefined());
      it('guard,is.boolean()', () => expect(guard.is.boolean).toBeDefined());
      it('guard,is.class()', () => expect(guard.is.class).toBeDefined());
      it('guard,is.defined()', () => expect(guard.is.defined).toBeDefined());
      it('guard,is.function()', () => expect(guard.is.function).toBeDefined());
      it('guard,is.instance()', () => expect(guard.is.instance).toBeDefined());
      it('guard,is.key()', () => expect(guard.is.key).toBeDefined());
      it('guard,is.null()', () => expect(guard.is.null).toBeDefined());
      it('guard,is.number()', () => expect(guard.is.number).toBeDefined());
      it('guard,is.object()', () => expect(guard.is.object).toBeDefined());
      it('guard,is.objectKey()', () => expect(guard.is.objectKey).toBeDefined());
      it('guard,is.primitive()', () => expect(guard.is.primitive).toBeDefined());
      it('guard,is.string()', () => expect(guard.is.string).toBeDefined());
      it('guard,is.symbol()', () => expect(guard.is.symbol).toBeDefined());
      it('guard,is.type()', () => expect(guard.is.type).toBeDefined());
      it('guard,is.undefined()', () => expect(guard.is.undefined).toBeDefined());
   });
});
