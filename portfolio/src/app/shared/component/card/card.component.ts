import { Component, Input } from "@angular/core";
import { Tag } from "../../../core/model/remote/tag.model";
import { Image } from "../../../core/model/remote/image.model";
import { Router } from "@angular/router";

@Component({
  selector: "pw-card",
  templateUrl: "./card.component.html",
})
export class CardComponent {
  @Input() title: string = "Title";
  @Input() subtitle?: string;
  @Input() description: string = "description";
  @Input() tags!: Tag[];
  @Input() images: Image[] = [];
  @Input() url?: string;

  constructor(private router: Router) {}

  onClick(): void {
    if (this.url) {
      this.router.navigate([this.url]).then();
    }
  }
}
