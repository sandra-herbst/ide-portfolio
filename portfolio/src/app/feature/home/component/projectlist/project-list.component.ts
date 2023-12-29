import { Component, Input } from "@angular/core";
import { Project } from "../../../../core/model/project.model";

@Component({
  selector: "pw-card-list",
  templateUrl: "./project-list.component.html",
})
export class ProjectListComponent {
  @Input() projects: Project[] = [];

  @Input()
  gridColumnClass: string = "grid grid-cols-2 laptop:grid-cols-4";

  @Input()
  gridGapClass: string = "gap-4";

  @Input()
  paddingClass: string = "";

  @Input()
  cardWidthClass: string = "";

  @Input()
  cardHeightClass: string = "";
}
