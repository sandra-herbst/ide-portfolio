import { Project } from "../model/project.model";
import projectObjects from "../../../assets/data/projects.json";
import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable()
export class PortfolioService {
  private projects: Project[] = [];

  constructor(private logger: LogService) {}

  getProjects(): Project[] {
    this.logger.log(
      `Fetched ${projectObjects.length} projects.`,
      PortfolioService.name
    );

    // check if duplicates exist, if it's not a duplicate, add that project to the projects array
    for (const project of projectObjects) {
      if (
        !this.projects.some(
          existingProject => existingProject.id === project.id
        )
      ) {
        this.projects.push(project);
      }
    }

    return this.projects;
  }
}
