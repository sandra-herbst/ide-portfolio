import { Component } from "@angular/core";
import { SocialLinksComponent } from "../social-links/social-links.component";

@Component({
  selector: "pw-footer",
  standalone: true,
  imports: [SocialLinksComponent],
  templateUrl: "./footer.component.html",
})
export class FooterComponent {
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
