import { Component, Input } from "@angular/core";

@Component({
  selector: "pw-tag",
  templateUrl: "./tag.component.html",
})
export class TagComponent {
  // TODO: PL/PS-1 Change default tag color
  @Input() backgroundColorClass: string = "bg-blue-500";
  // TODO: PL/PS-1 Change default text color
  @Input() textColorClass: string = "text-black";
}
