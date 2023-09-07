import { Component } from "@angular/core";
import { Project } from "../../../../core/model/project.model";
import projectObjects from "../../../../../assets/data/projects.json";

@Component({
  selector: "pw-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent {
  projects: Project[] = projectObjects;
}
