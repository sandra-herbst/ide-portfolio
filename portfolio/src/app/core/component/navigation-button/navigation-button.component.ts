import { Component, Input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NgClass, NgIf } from "@angular/common";
import { NavigationType } from "../../model/local/navigation-item.interface";

@Component({
  selector: "pw-navigation-button",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, NgIf],
  templateUrl: "./navigation-button.component.html",
  styleUrl: "./navigation-button.component.css",
})
export class NavigationButtonComponent {
  @Input() label: string = "";
  @Input() route: string = "";
  @Input() type: NavigationType = NavigationType.DYNAMIC;
  protected readonly NavigationType = NavigationType;
}
