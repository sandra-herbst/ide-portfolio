import { Component, Input, OnInit } from "@angular/core";
import { Image } from "../../../../../core/model/remote/image.model";
import { NgClass, NgForOf, NgOptimizedImage } from "@angular/common";

@Component({
  selector: "pw-image-carousel",
  standalone: true,
  templateUrl: "./image-carousel.component.html",
  imports: [NgForOf, NgClass, NgOptimizedImage],
})
export class ImageCarouselComponent implements OnInit {
  currentIndex: number = 0;
  private touchStartX: number | null = null;
  private touchEndX: number | null = null;
  @Input() images: Image[] | undefined;

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent): void {
    if (!this.touchStartX) return;

    this.touchEndX = event.touches[0].clientX;
  }

  onTouchEnd(): void {
    if (this.touchStartX === null || this.touchEndX === null) return;

    const diffX = this.touchEndX - this.touchStartX;
    if (diffX > 0) {
      // Swipe to the right
      this.decreaseIndex();
      console.log("Swipe to the right");
    } else {
      // Swipe to the left
      this.increaseIndex();
      console.log("Swipe to the left");
    }

    // Reset touch variables
    this.touchStartX = null;
    this.touchEndX = null;
  }

  ngOnInit(): void {
    console.log(this.images);
  }

  increaseIndex(): void {
    if (this.images && this.currentIndex + 1 >= this.images?.length) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

  decreaseIndex(): void {
    if (this.images && this.currentIndex - 1 < 0) {
      this.currentIndex = this.images.length - 1;
    } else {
      this.currentIndex--;
    }
  }

  onCircleIndexClick(index: number): void {
    this.currentIndex = index;
  }
}
