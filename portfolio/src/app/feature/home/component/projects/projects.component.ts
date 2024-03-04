import { Component, OnInit } from "@angular/core";
import { Project } from "../../../../core/model/remote/project.model";
import { PortfolioService } from "../../../../core/service/portfolio.service";
import { LogService } from "../../../../core/service/log.service";

@Component({
  selector: "pw-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent implements OnInit {
  projectData: Project[] = [];

  constructor(
    private portfolioService: PortfolioService,
    private logger: LogService
  ) {}

  ngOnInit() {
    this.portfolioService.getProjects().subscribe(data => {
      this.projectData = data;
    });
  }
}
