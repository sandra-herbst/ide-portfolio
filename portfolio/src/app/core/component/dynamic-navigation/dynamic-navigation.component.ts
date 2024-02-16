import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForOf } from "@angular/common";
import { RouterLink } from "@angular/router";
import { NavigationButtonComponent } from "../navigation-button/navigation-button.component";
import { NavigationService } from "../../service/navigation.service";
import { NavigationItem } from "../../model/local/navigation-item.interface";
import { Subscription } from "rxjs";

@Component({
  selector: "pw-dynamic-navigation",
  standalone: true,
  imports: [NgForOf, RouterLink, NavigationButtonComponent],
  templateUrl: "./dynamic-navigation.component.html",
  styleUrl: "./dynamic-navigation.component.css",
})
export class DynamicNavigationComponent implements OnInit, OnDestroy {
  private mainNavItems: NavigationItem[] = [];
  private dynamicNavItems: NavigationItem[] = [];
  navItems: NavigationItem[] = [];
  private dynamicNavItemsSubscription: Subscription | undefined;

  constructor(private navService: NavigationService) {}

  ngOnInit(): void {
    this.mainNavItems = this.navService.getMainNavItems();
    this.dynamicNavItemsSubscription =
      this.navService.dynamicNavItems$.subscribe(items => {
        this.dynamicNavItems = items;
        this.navItems = [...this.mainNavItems, ...this.dynamicNavItems];
      });
  }

  ngOnDestroy(): void {
    this.dynamicNavItemsSubscription?.unsubscribe();
  }
}
