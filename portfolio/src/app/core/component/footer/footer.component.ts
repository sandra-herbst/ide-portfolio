import { Component } from "@angular/core";
import { SocialLinksComponent } from "../social-links/social-links.component";
import { NavigationService } from "../../service/navigation.service";
import { NavigationItem } from "../../model/local/navigation-item.model";
import { NavigationType } from "../../model/local/navigation-item.enum";
import { NavigationFileType } from "../../model/local/navigation-file-type.enum";
import { Router } from "@angular/router";

@Component({
  selector: "pw-footer",
  standalone: true,
  imports: [SocialLinksComponent],
  templateUrl: "./footer.component.html",
})
export class FooterComponent {
  currentYear: number;
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

  constructor(
    private navService: NavigationService,
    private router: Router
  ) {
    this.currentYear = new Date().getFullYear();
  }

  onImprintClick(): void {
    this.navService.addDynamicNavItem(this.navItem);
    this.router.navigate([this.navItem.route]).then();
  }
}
