import { Component, Input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NgClass, NgIf, NgOptimizedImage } from "@angular/common";
import {
  NavigationItem,
  NavigationType,
} from "../../model/local/navigation-item.model";
import { NavigationService } from "../../service/navigation.service";

@Component({
  selector: "pw-top-navigation-item",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, NgIf, NgOptimizedImage],
  templateUrl: "./top-navigation-item.component.html",
  styleUrl: "./top-navigation-item.component.css",
})
export class TopNavigationItemComponent {
  @Input() navItem: NavigationItem | undefined;
  protected readonly NavigationType = NavigationType;

  constructor(private navService: NavigationService) {}

  onRemoveTabClick(): void {
    if (this.navItem) {
      this.navService.removeDynamicNavItem(this.navItem);
    }
  }
}
