import { Component, Input } from "@angular/core";
import { UnderscoreLabelDirective } from "../../directive/underscore-label.directive";

@Component({
  selector: "pw-page-title",
  standalone: true,
  imports: [UnderscoreLabelDirective],
  templateUrl: "./page-title.component.html",
})
export class PageTitleComponent {
  @Input() annotationText: string | undefined;
  @Input() title: string | undefined;
}
