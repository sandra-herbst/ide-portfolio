import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
} from "@angular/core";

@Directive({
  selector: "[pwHeightChange]",
  standalone: true,
})
export class HeightChangeDirective implements AfterViewInit, OnDestroy {
  private resizeObserver: ResizeObserver | undefined;
  @Output() heightChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.target === this.elementRef.nativeElement) {
          console.log(
            "HeightChangeDirective Height changed:",
            entry.contentRect.height
          );
          this.heightChanged.emit(entry.contentRect.height);
        }
      }
    });

    this.resizeObserver.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
