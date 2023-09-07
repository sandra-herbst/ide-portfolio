import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "pw-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent implements OnInit {
  navItems: string[] = ["About", "Experiences", "Projects"];
  menuOpen: boolean = false;
  @ViewChild("sidenav") sideNav!: ElementRef;
  private outsideClickListener: (() => void) | undefined;

  constructor(
    private renderer: Renderer2,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((id: string | null): void => {
      if (id) {
        this.scrollToFragment(id);
      }
    });
  }

  onHamburgerMenuButtonClicked(event: MouseEvent): void {
    event.stopPropagation();
    this.menuOpen = !this.menuOpen;

    this.menuOpen
      ? this.addMenuDismissListener()
      : this.removeMenuDismissListener();
  }

  private scrollToFragment(fragmentId: string): void {
    document.getElementById(fragmentId)?.scrollIntoView({ behavior: "smooth" });
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
