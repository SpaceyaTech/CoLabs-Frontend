/**
 * Gets a nested property from an object.
 *
 * @typeParam T - The type of the nested property.
 * @param obj - The object to retrieve the nested property from.
 * @param path - The path to the nested property.
 *
 * @example
 * const obj = {
 *   a: {
 *     b: {
 *       c: 1
 *     }
 *   }
 * };
 * console.log(getNestedProperty<number>(obj, 'a.b.c')); // 1
 * @returns The value of the nested property, or undefined if the property does not exist.
 */
export function getNestedProperty<T>(obj: any, path: string): T | undefined {
  const keys = path.split(".");
  return keys.reduce((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return acc[key] as T;
    }
    return undefined;
  }, obj);
}
``
type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${"" extends P ? "" : "."}${P}`
    : never
  : never;

// recurse to depth (neede to avoid infinite recursion)
type Prev = [never, 0, 1, 2, 3, 4, 5, ...0[]];

// type will reursivly join keys into a union
export type PossibleNestedUnions<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
    ? {
        [K in keyof T]-?: K extends string | number
          ?
              | `${K}`
              | (D extends 0
                  ? never
                  : Join<K, PossibleNestedUnions<T[K], Prev[D]>>)
          : never;
      }[keyof T]
    : "";
