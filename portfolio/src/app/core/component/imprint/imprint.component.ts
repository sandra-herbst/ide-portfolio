import { Component, OnInit } from "@angular/core";
import { NavigationItem } from "../../model/local/navigation-item.model";
import { NavigationType } from "../../model/local/navigation-item.enum";
import { NavigationFileType } from "../../model/local/navigation-file-type.enum";
import { NavigationService } from "../../service/navigation.service";

@Component({
  selector: "pw-imprint",
  standalone: true,
  imports: [],
  templateUrl: "./imprint.component.html",
})
export class ImprintComponent implements OnInit {
  private navItem: NavigationItem = {
    label: "Imprint",
    route: "/imprint",
    navType: NavigationType.DYNAMIC,
    fileInfo: {
      fileType: NavigationFileType.MD,
      fileName: "markdown_icon",
      fileExtension: "svg",
      altText: "Readme file icon",
    },
  };

  constructor(private navService: NavigationService) {}

  ngOnInit(): void {
    this.navService.addDynamicNavItem(this.navItem);
  }
}
