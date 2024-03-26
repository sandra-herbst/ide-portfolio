import { Component, Input } from "@angular/core";

@Component({
  selector: "pw-icon-button",
  standalone: true,
  imports: [],
  templateUrl: "./icon-button.component.html",
})
export class IconButtonComponent {
  @Input() label: string | undefined;
  @Input() url: string | undefined;
  @Input() iconSrc: string | undefined;
  @Input() altText: string | undefined;
}
