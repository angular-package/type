import { isNot } from '../lib/is-not.object';

describe('`isNot`', () => {
   describe('DEFINED', () => {
      it('isNot', () => expect(isNot).toBeDefined());
      // it('isNot.array()', () => expect(isNot.boolean).toBeDefined());
      it('isNot.boolean()', () => expect(isNot.boolean).toBeDefined());
      // it('isNot.booleanObject()', () => expect(isNot.booleanObject).toBeDefined());
      // it('isNot.booleanType()', () => expect(isNot.booleanType).toBeDefined());
      it('isNot.defined()', () => expect(isNot.defined).toBeDefined());
      it('isNot.function()', () => expect(isNot.function).toBeDefined());
      // it('isNot.instance()', () => expect(isNot.instance).toBeDefined());
      // it('isNot.key()', () => expect(isNot.key).toBeDefined());
      it('isNot.null()', () => expect(isNot.null).toBeDefined());
      it('isNot.number()', () => expect(isNot.number).toBeDefined());
      // it('isNot.numberObject()', () => expect(isNot.numberObject).toBeDefined());
      // it('isNot.numberType()', () => expect(isNot.numberType).toBeDefined());
      // it('isNot.object()', () => expect(isNot.object).toBeDefined());
      // it('isNot.objectKey()', () => expect(isNot.objectKey).toBeDefined());
      // it('isNot.primitive()', () => expect(isNot.primitive).toBeDefined());
      it('isNot.string()', () => expect(isNot.string).toBeDefined());
      // it('isNot.stringObject()', () => expect(isNot.stringObject).toBeDefined());
      // it('isNot.stringType()', () => expect(isNot.stringType).toBeDefined());
      // it('isNot.symbol()', () => expect(isNot.symbol).toBeDefined());
      // it('isNot.type()', () => expect(isNot.type).toBeDefined());
      it('isNot.undefined()', () => expect(isNot.undefined).toBeDefined());
   });
});
