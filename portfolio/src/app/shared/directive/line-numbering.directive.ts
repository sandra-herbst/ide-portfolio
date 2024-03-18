import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[pwLineNumberingDirective]",
  standalone: true,
})
export class LineNumberingDirective implements OnInit {
  private MAX_LIMIT: number = 150;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.increaseNumbering(1, this.MAX_LIMIT);
  }

  private generateNumberArray(start: number, increase: number): number[] {
    const result: number[] = [];
    const end: number = start + increase;
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }

  increaseNumbering(startingIndex: number, lineCountDiff: number): void {
    const lineNumbers: number[] = this.generateNumberArray(startingIndex, lineCountDiff);

    lineNumbers.forEach(lineNumber => {
      const tr: HTMLTableRowElement = document.createElement("tr");
      const td: HTMLTableCellElement = document.createElement("td");
      td.textContent = lineNumber.toString();
      td.classList.add("text-gray-100");
      tr.appendChild(td);
      this.elRef.nativeElement.insertAdjacentElement("beforeend", tr);
    });
  }
}
