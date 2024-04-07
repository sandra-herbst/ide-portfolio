import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { NavigationItem } from "../model/local/navigation-item.model";
import { BehaviorSubject, filter, map, Observable } from "rxjs";
import { NavigationFileInfo } from "../model/local/navigation-file-info.model";
import { NavigationType } from "../model/local/navigation-item.enum";
import { NavigationFileType } from "../model/local/navigation-file-type.enum";

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  private isSideNavigationOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isSideNavigationOpen$: Observable<boolean> = this.isSideNavigationOpenSubject.asObservable();

  private currentRouteSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public currentRoute$: Observable<string> = this.currentRouteSubject.asObservable();

  private MAX_DYNAMIC_ITEMS = 3;

  private JAVA_ICON: NavigationFileInfo = {
    fileType: NavigationFileType.JAVA,
    fileName: "class_icon",
    fileExtension: "svg",
    altText: "Java class icon",
  };

  private mainNavigationItems: NavigationItem[] = [
    {
      label: "About",
      route: "/about",
      navType: NavigationType.MAIN,
      fileInfo: this.JAVA_ICON,
    },
    /*    {
      label: "Experiences",
      route: "/experiences",
      navType: NavigationType.MAIN,
      fileInfo: this.JAVA_ICON,
    },*/
    {
      label: "Projects",
      route: "/projects",
      navType: NavigationType.MAIN,
      fileInfo: this.JAVA_ICON,
    },
  ];

  private dynamicNavItems: NavigationItem[] = [];
  dynamicNavItems$: BehaviorSubject<NavigationItem[]> = new BehaviorSubject<NavigationItem[]>(this.dynamicNavItems);

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.url)
      )
      .subscribe(url => {
        this.currentRouteSubject.next(url);
      });
  }

  addDynamicNavItem(item: NavigationItem): void {
    if (!this.dynamicNavItems.some(dynItem => item.route === dynItem.route)) {
      this.dynamicNavItems.push(item);
      // Limit
      if (this.dynamicNavItems.length > this.MAX_DYNAMIC_ITEMS) {
        this.dynamicNavItems.shift();
      }
      this.dynamicNavItems$.next([...this.dynamicNavItems]);
    }
  }

  removeDynamicNavItem(item: NavigationItem): void {
    this.dynamicNavItems = this.dynamicNavItems.filter(dynItem => item.route !== dynItem.route);
    this.dynamicNavItems$.next([...this.dynamicNavItems]);
    this.navigateToAvailableRoute(item);
  }

  private navigateToAvailableRoute(removedItem: NavigationItem): void {
    // Adjust current route if tab has been closed & was open at that time
    let route;
    if (this.currentRouteSubject.value === removedItem.route) {
      if (this.dynamicNavItems.length > 0) {
        const index: number = this.dynamicNavItems.length - 1;
        route = this.dynamicNavItems[index].route;
      } else {
        const index: number = this.mainNavigationItems.length - 1;
        route = this.mainNavigationItems[index].route;
      }
      this.router.navigate([route]).then();
    }
  }

  toggleSideNavigation(): void {
    this.isSideNavigationOpenSubject.next(!this.isSideNavigationOpenSubject.value);
  }

  setSideNavigation(value: boolean): void {
    this.isSideNavigationOpenSubject.next(value);
  }

  getMainNavItems(): NavigationItem[] {
    return [...this.mainNavigationItems];
  }
}
