import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LogService } from "../../../../../core/service/log.service";
import { NavigationService } from "../../../../../core/service/navigation.service";
import { PortfolioService } from "../../../../../core/service/portfolio.service";
import { NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";
import { SharedModule } from "../../../../../shared/shared.module";
import { Project } from "../../../../../core/model/remote/project.model";
import { UnderscoreLabelDirective } from "../../../../../shared/directive/underscore-label.directive";
import { ImageSwiperComponent } from "../image-swiper/image-swiper.component";
import { IconButtonComponent } from "../../../../../shared/component/icon-button/icon-button.component";
import { iconSrcFromLinkType, LinkType } from "../../../../../core/model/remote/link-type.enum";

@Component({
  selector: "pw-project-details",
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    SharedModule,
    UnderscoreLabelDirective,
    ImageSwiperComponent,
    IconButtonComponent,
    NgSwitchCase,
    NgSwitch,
    NgSwitchDefault,
  ],
  templateUrl: "./project-details.component.html",
  styleUrl: "./project-details.component.css",
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string | undefined;
  project: Project | undefined;

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
        this.portfolioService.getProjectById(this.projectId).subscribe(project => {
          this.project = project;
          const navItem = this.portfolioService.getNavigationItemFromProject(project);
          this.navService.addDynamicNavItem(navItem);
        });
      }
    });
  }

  protected readonly iconSrcFromLinkType = iconSrcFromLinkType;
  protected readonly LinkType = LinkType;
}
