import { Component, Input } from "@angular/core";
import { ExperienceCategoryItem } from "../../../../../core/model/remote/experience-category-item";
import { NgForOf } from "@angular/common";

@Component({
  selector: "pw-experience-category",
  standalone: true,
  imports: [NgForOf],
  templateUrl: "./experience-category.component.html",
})
export class ExperienceCategoryComponent {
  @Input() iconSrc: string | undefined;
  @Input() iconSrcAltTxt: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() items: ExperienceCategoryItem[] | undefined;
}
