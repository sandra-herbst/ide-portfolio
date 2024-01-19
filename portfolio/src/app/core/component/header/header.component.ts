import {Component} from "@angular/core";
import {LogService} from "../../service/log.service";

@Component({
  selector: "pw-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  constructor(private logger: LogService) {}

  onHamburgerMenuButtonClicked($event: MouseEvent) {
    this.logger.log($event.button.toString());
  }
}
