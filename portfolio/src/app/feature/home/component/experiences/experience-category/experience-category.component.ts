import { Component, Input } from "@angular/core";

@Component({
  selector: "pw-experience-category",
  standalone: true,
  imports: [],
  templateUrl: "./experience-category.component.html",
})
export class ExperienceCategoryComponent {
  @Input() iconSrc: string | undefined;
  @Input() iconSrcAltTxt: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() items: string | undefined;
}
