import { Pipe, PipeTransform } from "@angular/core";

/**
 * This custom pipe takes an object of type 'T' and transforms it into an array of objects containing keys and values.
 * It is used to iterate over the properties of e.g. the 'cardData' object in the 'CardComponent' template (or general classes of type T).
 */
@Pipe({ name: "genericObjectKeys" })
export class GenericObjectKeysPipe<T> implements PipeTransform {
  transform(value: T): { key: string; value: unknown }[] {
    if (value === null || value === undefined) return [];
    return Object.keys(value).map(key => ({ key, value: (value as any)[key] }));
  }
}
