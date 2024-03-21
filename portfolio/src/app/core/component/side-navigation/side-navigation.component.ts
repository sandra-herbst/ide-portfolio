import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from "@angular/core";
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
  isOpen: boolean | undefined;
  @ViewChild("sidenav") sideNav!: ElementRef;
  private outsideClickListener: (() => void) | undefined;
  private outsideScrollListener: (() => void) | undefined;

  constructor(
    private navService: NavigationService,
    private portfolioService: PortfolioService,
    private renderer: Renderer2,
    private logger: LogService
  ) {}

  ngOnInit(): void {
    this.navService.isSideNavigationOpen$.subscribe(value => {
      this.isOpen = value;
      this.isOpen && window.innerWidth < 1024 ? this.addMenuDismissListener() : this.removeMenuDismissListener();
    });
    this.mainNavItems = this.navService.getMainNavItems();
    this.portfolioService.getProjects().subscribe(data => {
      this.projectNavItems = data.map(project => {
        return this.portfolioService.getNavigationItemFromProject(project);
      });
    });
    this.onInitNavigation();
  }

  @HostListener("window:resize", ["$event"])
  onResize(): void {
    this.onInitNavigation();
  }

  onInitNavigation(): void {
    if (window.innerWidth < 1024) {
      this.navService.setSideNavigation(false);
    } else if (window.innerWidth >= 1024) {
      this.navService.setSideNavigation(true);
    }
  }

  onNavigationToggleClick(): void {
    this.navService.toggleSideNavigation();
  }

  private onMenuDismissedClicked(event: MouseEvent): void {
    event.stopPropagation();
    const eventTarget: HTMLElement = event.target as HTMLElement;
    const clickedInside: boolean = eventTarget && this.sideNav.nativeElement.contains(eventTarget);
    if (clickedInside) {
      return;
    }

    this.navService.setSideNavigation(false);
    this.removeMenuDismissListener();
  }

  private addMenuDismissListener(): void {
    this.outsideClickListener = this.renderer.listen("document", "click", event => {
      this.onMenuDismissedClicked(event);
    });
    this.outsideScrollListener = this.renderer.listen("document", "scroll", event => {
      this.onMenuDismissedClicked(event);
    });
  }

  private removeMenuDismissListener(): void {
    if (this.outsideClickListener) {
      this.outsideClickListener();
    }
    if (this.outsideScrollListener) {
      this.outsideScrollListener();
    }
  }
}
