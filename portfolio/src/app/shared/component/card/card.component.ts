import { Component, Input } from "@angular/core";
import { Tag } from "../../../core/model/tag.model";
import { Image } from "../../../core/model/image.model";

@Component({
  selector: "pw-card",
  templateUrl: "./card.component.html",
})
export class CardComponent {
  @Input()
  title: string = "Title";

  @Input()
  subtitle?: string;

  @Input()
  description: string = "description";

  @Input()
  tags!: Tag[];

  @Input()
  images: Image[] = [];

  @Input()
  url?: string;

  // TODO: PL/PS-1 Change default card color
  @Input()
  backgroundColorClass: string = "bg-primary-color-pink";

  // TODO: PL/PS-1 Change default tag color
  @Input()
  tagBackgroundColorClass: string = "bg-blue-500";

  @Input()
  widthClass: string = "w-60";

  @Input()
  heightClass: string = "h-64";
}
