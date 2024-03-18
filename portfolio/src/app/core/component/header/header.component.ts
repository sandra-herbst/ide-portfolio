import { Component, OnInit } from "@angular/core";
import { LogService } from "../../service/log.service";
import { NavigationService } from "../../service/navigation.service";

@Component({
  selector: "pw-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isSideNavOpen: boolean | undefined;

  constructor(
    private navService: NavigationService,
    private logger: LogService
  ) {}

  ngOnInit(): void {
    this.navService.isSideNavigationOpen$.subscribe(value => {
      this.isSideNavOpen = value;
    });
  }

  onHamburgerMenuClicked(event: MouseEvent): void {
    event.stopPropagation();
    this.navService.toggleSideNavigation();
  }
}
