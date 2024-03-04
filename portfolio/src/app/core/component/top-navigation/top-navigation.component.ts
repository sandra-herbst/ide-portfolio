import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForOf } from "@angular/common";
import { RouterLink } from "@angular/router";
import { TopNavigationItemComponent } from "../top-navigation-item/top-navigation-item.component";
import { NavigationService } from "../../service/navigation.service";
import { NavigationItem } from "../../model/local/navigation-item.model";
import { Subscription } from "rxjs";

@Component({
  selector: "pw-top-navigation",
  standalone: true,
  imports: [NgForOf, RouterLink, TopNavigationItemComponent],
  templateUrl: "./top-navigation.component.html",
  styleUrl: "./top-navigation.component.css",
})
export class TopNavigationComponent implements OnInit, OnDestroy {
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
