export type GuardObjectKey = <Obj, Key extends keyof Obj>(object: Obj, key: Key) => object is Obj;
