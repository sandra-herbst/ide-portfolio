import { Component, Input } from "@angular/core";
import { NgClass, NgForOf, NgIf, NgOptimizedImage } from "@angular/common";
import { LogService } from "../../service/log.service";
import { NavigationItem } from "../../model/local/navigation-item.model";
import { SideNavigationItemComponent } from "../side-navigation-item/side-navigation-item.component";

@Component({
  selector: "pw-side-navigation-folder",
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass,
    NgIf,
    NgForOf,
    SideNavigationItemComponent,
  ],
  templateUrl: "./side-navigation-folder.component.html",
  styleUrl: "./side-navigation-folder.component.css",
})
export class SideNavigationFolderComponent {
  isExpanded: boolean = true;
  @Input() items: NavigationItem[] | undefined;
  @Input() label: string = "";

  constructor(private logger: LogService) {}

  // the arrow beside the folder has been clicked
  onArrowClick(): void {
    this.isExpanded = !this.isExpanded;
    this.logger.log("onArrowClick");
    // all children of the folder have to be closed
  }

  // the area beside the arrow has been clicked, marking it active
  onBodyClick(): void {
    // TODO Remove or generalize
  }
}
