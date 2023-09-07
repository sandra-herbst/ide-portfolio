import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TagComponent } from "./component/tag/tag.component";
import { GenericObjectKeysPipe } from "./pipe/generic-object-keys.pipe";
import { TypeofPipe } from "./pipe/typeof-pipe";
import { CardComponent } from "./component/card/card.component";

@NgModule({
  declarations: [
    TagComponent,
    CardComponent,
    GenericObjectKeysPipe,
    TypeofPipe,
  ],
  imports: [CommonModule],
  exports: [CardComponent, TagComponent],
})
export class SharedModule {}
