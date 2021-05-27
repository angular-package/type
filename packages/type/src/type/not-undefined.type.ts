export type NotUndefined<T> = T extends undefined | null ? never : T;
