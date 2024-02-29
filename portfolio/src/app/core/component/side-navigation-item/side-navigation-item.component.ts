import { Component, Input } from "@angular/core";
import { NavigationItem } from "../../model/local/navigation-item.model";
import { NgClass, NgOptimizedImage } from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: "pw-side-navigation-item",
  standalone: true,
  imports: [NgOptimizedImage, NgClass, RouterLink, RouterLinkActive],
  templateUrl: "./side-navigation-item.component.html",
  styleUrl: "./side-navigation-item.component.css",
})
export class SideNavigationItemComponent {
  @Input() navItem: NavigationItem | undefined;
}
