import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";
import { LogService } from "../../core/service/log.service";
import { NavigationService } from "../../core/service/navigation.service";

@Directive({
  selector: "[pwLineNumberingDirective]",
  standalone: true,
})
export class LineNumberingDirective implements OnInit {
  private currentHeight: number | undefined;
  private lineHeight: number = 21;
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
      this.increaseNumbering(1, newLineCount);
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
      const startingIndex = oldLineCount + 1;
      this.increaseNumbering(startingIndex, lineDiff);
    }
    this.currentHeight = height;
  }

  increaseNumbering(startingIndex: number, lineCountDiff: number): void {
    console.log("increaseNumbering:", lineCountDiff);
    const lineNumbers: number[] = this.generateNumberArray(
      startingIndex,
      lineCountDiff
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

  private generateNumberArray(start: number, increase: number): number[] {
    const result: number[] = [];
    const end: number = start + increase;
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
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
