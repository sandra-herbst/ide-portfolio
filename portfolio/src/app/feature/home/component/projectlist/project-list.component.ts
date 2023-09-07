import { Component, Input, OnInit } from "@angular/core";
import { PortfolioService } from "../../../../core/service/portfolio.service";
import { Project } from "../../../../core/model/project.model";

@Component({
  selector: "pw-card-list",
  templateUrl: "./project-list.component.html",
})
export class ProjectListComponent implements OnInit {
  protected projects: Project[] = [];
  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
  }

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
