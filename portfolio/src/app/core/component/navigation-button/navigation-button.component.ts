import { Component, Input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NgClass, NgIf, NgOptimizedImage } from "@angular/common";
import {
  NavigationItem,
  NavigationType,
} from "../../model/local/navigation-item.interface";

@Component({
  selector: "pw-navigation-button",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, NgIf, NgOptimizedImage],
  templateUrl: "./navigation-button.component.html",
  styleUrl: "./navigation-button.component.css",
})
export class NavigationButtonComponent {
  @Input() navItem: NavigationItem | undefined;
  protected readonly NavigationType = NavigationType;
}
