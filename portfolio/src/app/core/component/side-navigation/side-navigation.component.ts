import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { NavigationService } from "../../service/navigation.service";
import { NavigationItem } from "../../model/local/navigation-item.model";
import { SideNavigationFolderComponent } from "../side-navigation-folder/side-navigation-folder.component";
import { LogService } from "../../service/log.service";
import { SideNavItemInterface } from "../../interface/side-navigation-component.interface";

@Component({
  selector: "pw-side-navigation",
  standalone: true,
  imports: [NgOptimizedImage, SideNavigationFolderComponent],
  templateUrl: "./side-navigation.component.html",
  styleUrl: "./side-navigation.component.css",
})
export class SideNavigationComponent {
  private lastActiveChild?: SideNavItemInterface;
  private mainNavItems: NavigationItem[] = [];
  private projectNavItems: NavigationItem[] = [];
  constructor(
    private navService: NavigationService,
    private logger: LogService
  ) {}

  onChildClicked(sideNavItem: SideNavItemInterface): void {
    this.lastActiveChild?.setInactive();
    this.lastActiveChild = sideNavItem;
  }
}
