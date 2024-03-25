import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[pwUnderscoreLabel]",
  standalone: true,
})
export class UnderscoreLabelDirective {
  @Input() label: string | undefined;

  constructor() {}

  @HostBinding("innerHTML") get labelHtml(): string {
    return this.label?.replace(/ /g, "_") || "";
  }
}
