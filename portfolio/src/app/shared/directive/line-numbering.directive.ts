import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
} from "@angular/core";
import { LogService } from "../../core/service/log.service";
import { NavigationService } from "../../core/service/navigation.service";

@Directive({
  selector: "[pwLineNumberingDirective]",
  standalone: true,
})
export class LineNumberingDirective implements OnInit {
  private currentHeight: number | undefined;
  private lineHeight: number = 20;
  private offset: number = 92;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private navService: NavigationService,
    private logger: LogService
  ) {}

  ngOnInit(): void {
    this.navService.currentRoute$.subscribe(() => {
      const height = this.elRef.nativeElement.offsetHeight - this.offset;
      this.onRouteChange(height);
      this.currentHeight = height;
    });
  }

  onRouteChange(height: number): void {
    this.logger.log("onHeightChange:", height.toString());
    const newLineCount: number = Math.floor(height / this.lineHeight);
    if (this.currentHeight == null) {
      this.increaseNumbering(newLineCount);
      this.currentHeight = height;
      return;
    }

    console.log("LineNumberingDirective Height changed:", height);
    const oldLineCount: number = Math.floor(
      this.currentHeight / this.lineHeight
    );
    const lineDiff: number = Math.abs(oldLineCount - newLineCount);
    if (this.currentHeight > height) {
      this.reduceNumbering(lineDiff);
    } else if (this.currentHeight < height) {
      this.increaseNumbering(lineDiff);
    }
    this.currentHeight = height;
  }

  increaseNumbering(lineCountDiff: number): void {
    console.log("increaseNumbering:", lineCountDiff);
    const lineNumbers: number[] = Array.from(
      { length: lineCountDiff },
      (_, i) => i + 1
    );

    lineNumbers.forEach(lineNumber => {
      const tr: HTMLTableRowElement = document.createElement("tr");
      const td: HTMLTableCellElement = document.createElement("td");
      td.textContent = lineNumber.toString();
      td.classList.add("text-gray-100");
      tr.appendChild(td);
      this.elRef.nativeElement.insertAdjacentElement("beforeend", tr);
    });
  }

  reduceNumbering(lineCountDiff: number): void {
    console.log("reduceNumbering:", lineCountDiff);
    const container = this.elRef.nativeElement;
    const children = container.children;

    for (
      let i = children.length - 1;
      i >= children.length - lineCountDiff;
      i--
    ) {
      this.renderer.removeChild(container, children[i]);
    }
  }
}
