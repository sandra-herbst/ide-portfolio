import { Component, OnInit } from "@angular/core";
import {NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import { NavigationService } from "../../service/navigation.service";
import { NavigationItem } from "../../model/local/navigation-item.model";
import { SideNavigationFolderComponent } from "../side-navigation-folder/side-navigation-folder.component";
import { LogService } from "../../service/log.service";
import { SideNavItemInterface } from "../../interface/side-navigation-component.interface";
import { SideNavigationItemComponent } from "../side-navigation-item/side-navigation-item.component";

@Component({
  selector: "pw-side-navigation",
  standalone: true,
  imports: [
    NgOptimizedImage,
    SideNavigationFolderComponent,
    SideNavigationItemComponent,
    NgForOf,
    NgClass,
  ],
  templateUrl: "./side-navigation.component.html",
  styleUrl: "./side-navigation.component.css",
})
export class SideNavigationComponent implements OnInit {
  private lastActiveChild?: SideNavItemInterface;
  private projectNavItems: NavigationItem[] = [];
  mainNavItems: NavigationItem[] = [];
  sideNavOpen: boolean = true;

  constructor(
    private navService: NavigationService,
    private logger: LogService
  ) {}

  ngOnInit(): void {
    this.mainNavItems = this.navService.getMainNavItems();
  }

  onChildClick(sideNavItem: SideNavItemInterface): void {
    this.lastActiveChild?.setInactive();
    this.lastActiveChild = sideNavItem;
  }

  onNavigationToggleClick(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
