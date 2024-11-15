export type Nullable<T> = T | null;
export type IsNullable<T> = [null] extends [T] ? true : false;
