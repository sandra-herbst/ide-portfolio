import { Component, OnInit } from "@angular/core";
import { NgClass, NgForOf, NgIf, NgOptimizedImage } from "@angular/common";
import { NavigationService } from "../../service/navigation.service";
import { NavigationItem } from "../../model/local/navigation-item.model";
import { SideNavigationFolderComponent } from "./side-navigation-folder/side-navigation-folder.component";
import { LogService } from "../../service/log.service";
import { SideNavigationItemComponent } from "./side-navigation-item/side-navigation-item.component";
import { PortfolioService } from "../../service/portfolio.service";

@Component({
  selector: "pw-side-navigation",
  standalone: true,
  imports: [NgOptimizedImage, SideNavigationFolderComponent, SideNavigationItemComponent, NgForOf, NgClass, NgIf],
  templateUrl: "./side-navigation.component.html",
  styleUrl: "./side-navigation.component.css",
})
export class SideNavigationComponent implements OnInit {
  projectNavItems: NavigationItem[] = [];
  mainNavItems: NavigationItem[] = [];
  isOpen: boolean = true;

  constructor(
    private navService: NavigationService,
    private portfolioService: PortfolioService,
    private logger: LogService
  ) {}

  ngOnInit(): void {
    this.mainNavItems = this.navService.getMainNavItems();
    this.portfolioService.getProjects().subscribe(data => {
      this.projectNavItems = data.map(project => {
        return this.portfolioService.getNavigationItemFromProject(project);
      });
    });
  }

  onNavigationToggleClick(): void {
    this.isOpen = !this.isOpen;
  }
}
