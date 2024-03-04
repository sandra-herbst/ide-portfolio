import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LogService } from "../../core/service/log.service";
import { NavigationService } from "../../core/service/navigation.service";
import { PortfolioService } from "../../core/service/portfolio.service";

@Component({
  selector: "pw-project-details",
  standalone: true,
  imports: [],
  templateUrl: "./project-details.component.html",
  styleUrl: "./project-details.component.css",
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private logger: LogService,
    private navService: NavigationService,
    private portfolioService: PortfolioService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = params["id"];
      if (this.projectId) {
        this.portfolioService
          .getProjectById(this.projectId)
          .subscribe(project => {
            let navItem =
              this.portfolioService.getNavigationItemFromProject(project);
            this.navService.addDynamicNavItem(navItem);
          });
      }

      this.logger.log("id: ", this.projectId);
    });
  }
}
