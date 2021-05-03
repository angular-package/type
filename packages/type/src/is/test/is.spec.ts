
import { is } from '../lib/is.object';

describe('`is`', () => {
   describe('DEFINED', () => {
      it('is', () => expect(is).toBeDefined());
      it('is.array()', () => expect(is.array).toBeDefined());
      it('is.boolean()', () => expect(is.boolean).toBeDefined());
      it('is.booleanObject()', () => expect(is.booleanObject).toBeDefined());
      it('is.booleanType()', () => expect(is.booleanType).toBeDefined());
      it('is.defined()', () => expect(is.defined).toBeDefined());
      it('is.function()', () => expect(is.function).toBeDefined());
      it('is.instance()', () => expect(is.instance).toBeDefined());
      it('is.key()', () => expect(is.key).toBeDefined());
      it('is.null()', () => expect(is.null).toBeDefined());
      it('is.number()', () => expect(is.number).toBeDefined());
      it('is.numberObject()', () => expect(is.numberObject).toBeDefined());
      it('is.numberType()', () => expect(is.numberType).toBeDefined());
      it('is.object()', () => expect(is.object).toBeDefined());
      it('is.objectKey()', () => expect(is.objectKey).toBeDefined());
      it('is.primitive()', () => expect(is.primitive).toBeDefined());
      it('is.string()', () => expect(is.string).toBeDefined());
      it('is.stringObject()', () => expect(is.stringObject).toBeDefined());
      it('is.stringType()', () => expect(is.stringType).toBeDefined());
      it('is.symbol()', () => expect(is.symbol).toBeDefined());
      it('is.type()', () => expect(is.type).toBeDefined());
      it('is.undefined()', () => expect(is.undefined).toBeDefined());
   });
});
