import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import {
  NavigationItem,
  NavigationType,
} from "../model/local/navigation-item.interface";
import { BehaviorSubject, filter, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  private currentRoute: string = "";

  private mainNavigationItems: NavigationItem[] = [
    { label: "About", route: "/about", type: NavigationType.MAIN },
    { label: "Experiences", route: "/experiences", type: NavigationType.MAIN },
    { label: "Projects", route: "/projects", type: NavigationType.MAIN },
  ];

  private dynamicNavItems: NavigationItem[] = [];
  dynamicNavItems$: BehaviorSubject<NavigationItem[]> = new BehaviorSubject<
    NavigationItem[]
  >(this.dynamicNavItems);

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        map((event: NavigationEnd) => event.url)
      )
      .subscribe(url => {
        this.currentRoute = url;
      });
  }

  addDynamicNavItem(item: NavigationItem): void {
    if (!this.dynamicNavItems.some(dynItem => item === dynItem)) {
      this.dynamicNavItems.push(item);
      this.dynamicNavItems$.next([...this.dynamicNavItems]);
    }
  }

  removeDynamicNavItem(item: NavigationItem): void {
    this.dynamicNavItems = this.dynamicNavItems.filter(
      dynItem => item === dynItem
    );
    this.dynamicNavItems$.next([...this.dynamicNavItems]);
  }

  getMainNavItems(): NavigationItem[] {
    return [...this.mainNavigationItems];
  }
}
