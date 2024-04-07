import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from "@angular/core";
import { NgForOf } from "@angular/common";
import { RouterLink } from "@angular/router";
import { TopNavigationItemComponent } from "./top-navigation-item/top-navigation-item.component";
import { NavigationService } from "../../service/navigation.service";
import { NavigationItem } from "../../model/local/navigation-item.model";
import { Subscription } from "rxjs";

@Component({
  selector: "pw-top-navigation",
  standalone: true,
  imports: [NgForOf, RouterLink, TopNavigationItemComponent],
  templateUrl: "./top-navigation.component.html",
})
export class TopNavigationComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren("navigationItemRefs") navigationItemRefs!: QueryList<ElementRef<HTMLElement>>;
  private mainNavItems: NavigationItem[] = [];
  private dynamicNavItems: NavigationItem[] = [];
  private dynamicNavItemsSubscription: Subscription | undefined;
  navItems: NavigationItem[] = [];

  constructor(private navService: NavigationService) {}

  ngAfterViewInit(): void {
    this.navService.currentRoute$.subscribe(route => {
      this.navigationItemRefs.forEach((component, index) => {
        const navItem = this.navItems[index];
        if (navItem?.route === route) {
          this.scrollToHiddenItem(component);
          return;
        }
      });
    });
  }

  ngOnInit(): void {
    this.mainNavItems = this.navService.getMainNavItems();
    this.dynamicNavItemsSubscription = this.navService.dynamicNavItems$.subscribe(items => {
      this.dynamicNavItems = items;
      this.navItems = [...this.mainNavItems, ...this.dynamicNavItems];

      setTimeout(() => {
        const item: ElementRef<HTMLElement> | undefined = this.navigationItemRefs.get(this.navItems.length - 1);
        if (item) this.scrollToHiddenItem(item);
      });
    });
  }

  ngOnDestroy(): void {
    this.dynamicNavItemsSubscription?.unsubscribe();
  }

  scrollToHiddenItem(item: ElementRef<HTMLElement>): void {
    const rect = item.nativeElement.getBoundingClientRect();
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    setTimeout(() => {
      item.nativeElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    });
  }
}
