import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "pw-text-button",
  standalone: true,
  imports: [],
  templateUrl: "./text-button.component.html",
})
export class TextButtonComponent {
  @Input() label: string | undefined;
  @Input() route: string | undefined;

  constructor(private router: Router) {}

  onClick(): void {
    if (this.route) {
      this.router.navigate([this.route]).then();
    }
  }
}
