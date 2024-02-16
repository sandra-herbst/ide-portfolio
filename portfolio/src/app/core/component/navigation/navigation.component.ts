import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "pw-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent {
  navItems: string[] = ["About", "Experiences", "Projects"];
  menuOpen: boolean = false;
  @ViewChild("sidenav") sideNav!: ElementRef;
  private outsideClickListener: (() => void) | undefined;

  constructor(private renderer: Renderer2) {}

  onHamburgerMenuButtonClicked(event: MouseEvent): void {
    event.stopPropagation();
    this.menuOpen = !this.menuOpen;

    this.menuOpen
      ? this.addMenuDismissListener()
      : this.removeMenuDismissListener();
  }

  private onMenuDismissedClicked(event: MouseEvent): void {
    event.stopPropagation();
    const clickedInside = this.sideNav.nativeElement.contains(event.target);
    if (clickedInside) {
      return;
    }

    this.menuOpen = false;
    this.removeMenuDismissListener();
  }

  private addMenuDismissListener(): void {
    this.outsideClickListener = this.renderer.listen(
      "document",
      "click",
      event => {
        this.onMenuDismissedClicked(event);
      }
    );
  }

  private removeMenuDismissListener(): void {
    if (this.outsideClickListener) {
      this.outsideClickListener();
    }
  }
}
