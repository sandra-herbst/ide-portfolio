import { Component, Input } from "@angular/core";
import { Experience } from "../../../../../core/model/remote/experience.model";
import { DatePipe, NgForOf, UpperCasePipe } from "@angular/common";
import { SharedModule } from "../../../../../shared/shared.module";

@Component({
  selector: "pw-experience-item",
  standalone: true,
  imports: [NgForOf, SharedModule, DatePipe, UpperCasePipe],
  templateUrl: "./experience-item.component.html",
})
export class ExperienceItemComponent {
  @Input() experience: Experience | undefined;
}
