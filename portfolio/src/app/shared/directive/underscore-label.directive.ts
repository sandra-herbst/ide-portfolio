import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: "[pwUnderscoreLabel]",
  standalone: true,
})
export class UnderscoreLabelDirective implements AfterViewInit {
  @Input() label: string | undefined;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    if (this.label) {
      const underscoredLabel: string = this.label?.replace(/ /g, "_") || "";
      this.renderer.setProperty(this.el.nativeElement, "innerHTML", underscoredLabel);
    }
  }
}
