import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import {
  NavigationItem,
  NavigationType,
} from "../model/local/navigation-item.model";
import { BehaviorSubject, filter, map } from "rxjs";
import { FileType, NavigationFileInfo } from "../model/local/file.model";

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  private currentRoute: string = "";

  private JAVA_ICON: NavigationFileInfo = {
    fileType: FileType.JAVA,
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
    {
      label: "Experiences",
      route: "/experiences",
      navType: NavigationType.MAIN,
      fileInfo: this.JAVA_ICON,
    },
    {
      label: "Projects",
      route: "/projects",
      navType: NavigationType.MAIN,
      fileInfo: this.JAVA_ICON,
    },
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
