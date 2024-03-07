import { Component, Input } from "@angular/core";
import { Project } from "../../../../core/model/remote/project.model";

@Component({
  selector: "pw-card-list",
  templateUrl: "./project-list.component.html",
})
export class ProjectListComponent {
  @Input() projects: Project[] = [];
}
