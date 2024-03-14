import { Component, Input } from "@angular/core";
import { NavigationItem } from "../../../model/local/navigation-item.model";
import { NgClass, NgOptimizedImage } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NavigationService } from "../../../service/navigation.service";
import { LogService } from "../../../service/log.service";
import { NavigationType } from "../../../model/local/navigation-item.enum";
import { UnderscoreLabelDirective } from "../../../../shared/directive/underscore-label.directive";

@Component({
  selector: "pw-side-navigation-item",
  standalone: true,
  imports: [NgOptimizedImage, NgClass, RouterLink, RouterLinkActive, UnderscoreLabelDirective],
  templateUrl: "./side-navigation-item.component.html",
  styleUrl: "./side-navigation-item.component.css",
})
export class SideNavigationItemComponent {
  @Input() navItem: NavigationItem | undefined;

  constructor(
    private navService: NavigationService,
    private logger: LogService
  ) {}

  onLinkClick(): void {
    if (this.navItem && this.navItem.navType == NavigationType.DYNAMIC) {
      this.navService.addDynamicNavItem(this.navItem);
    }
  }
}
