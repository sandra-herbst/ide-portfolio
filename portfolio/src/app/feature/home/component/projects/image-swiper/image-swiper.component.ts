import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from "@angular/core";
import Navigation from "swiper";
import Pagination from "swiper";
import A11y from "swiper";
import Mousewheel from "swiper";
import { NgForOf } from "@angular/common";
import { SwiperOptions } from "swiper/types";
import { SwiperDirective } from "./swiper.directive";
import { Image } from "../../../../../core/model/remote/image.model";

@Component({
  selector: "pw-image-swiper",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: "./image-swiper.component.html",
  imports: [NgForOf, SwiperDirective],
})
export class ImageSwiperComponent {
  @Input() images: Image[] | undefined;

  public config: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    grabCursor: true,
    navigation: true,
    pagination: { clickable: true, dynamicBullets: false },
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
  };
}
