export type GuardObjectKey = <Obj extends object, Key extends keyof Obj>(value: Obj, key: Key) => value is Obj;
