import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NgClass, NgOptimizedImage } from "@angular/common";
import { LogService } from "../../service/log.service";
import { SideNavItemInterface } from "../../interface/side-navigation-component.interface";

@Component({
  selector: "pw-side-navigation-folder",
  standalone: true,
  imports: [NgOptimizedImage, NgClass],
  templateUrl: "./side-navigation-folder.component.html",
  styleUrl: "./side-navigation-folder.component.css",
})
export class SideNavigationFolderComponent implements SideNavItemInterface {
  // last active child
  active: boolean = false;
  @Input() label: string = "";
  @Output() isClicked: EventEmitter<SideNavItemInterface> =
    new EventEmitter<SideNavItemInterface>();

  constructor(private logger: LogService) {}
  // the arrow beside the folder has been clicked
  onArrowClick(): void {
    this.logger.log("onArrowClick");
    // all children of the folder have to be closed
  }

  // the area beside the arrow has been clicked, marking it active
  onBodyClick(): void {
    this.active = !this.active;
    this.isClicked.emit(this);
    this.logger.log(`${this.active}`);
  }

  setInactive(): void {
    this.active = false;
  }
}
