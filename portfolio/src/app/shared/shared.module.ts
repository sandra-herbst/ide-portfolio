import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { TagComponent } from "./component/tag/tag.component";
import { CardComponent } from "./component/card/card.component";

@NgModule({
  declarations: [TagComponent, CardComponent],
  imports: [CommonModule, NgOptimizedImage],
  exports: [CardComponent, TagComponent],
})
export class SharedModule {}
