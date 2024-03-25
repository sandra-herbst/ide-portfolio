import { Pipe, PipeTransform } from "@angular/core";

/**
 * Custom pipe to check against a type of a given value.
 */
@Pipe({
  name: "typeof",
})
export class TypeofPipe implements PipeTransform {
  transform(value: any): any {
    return typeof value;
  }
}
