export type GuardObjectKeys = <Obj extends object>(value: Obj, ...keys: (keyof Obj | Array<keyof Obj>)[]) => value is Obj;
