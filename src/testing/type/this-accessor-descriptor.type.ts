import { AccessorDescriptor } from '../interface/accessor-descriptor.interface';
export type ThisAccessorDescriptor<Value, Obj = any> = AccessorDescriptor<Value> & ThisType<Obj>;
