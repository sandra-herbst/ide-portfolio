import { Component, OnInit } from "@angular/core";
import { Project } from "../../../../core/model/remote/project.model";
import { PortfolioService } from "../../../../core/service/portfolio.service";
import { LogService } from "../../../../core/service/log.service";

@Component({
  selector: "pw-projects",
  templateUrl: "./projects.component.html",
})
export class ProjectsComponent implements OnInit {
  projectData: Project[] = [];

  constructor(
    private portfolioService: PortfolioService,
    private logger: LogService
  ) {}

  ngOnInit(): void {
    this.portfolioService.getProjects().subscribe(data => {
      this.projectData = data.sort((a, b) => {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);
        return dateB.getTime() - dateA.getTime();
      });
    });
  }
}
