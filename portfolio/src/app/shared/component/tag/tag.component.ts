import { Component, Input } from "@angular/core";

@Component({
  selector: "pw-tag",
  templateUrl: "./tag.component.html",
})
export class TagComponent {
  @Input() backgroundColorClass: string = "bg-secondary-blue";
  @Input() label: string | undefined;
}
