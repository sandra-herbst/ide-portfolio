import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { RouterLink } from "@angular/router";
import { AboutComponent } from "./component/about/about.component";
import { ExperiencesComponent } from "./component/experiences/experiences.component";
import { ProjectsComponent } from "./component/projects/projects.component";
import { ProjectListComponent } from "./component/projects/projectlist/project-list.component";
import { TextButtonComponent } from "../../shared/component/text-button/text-button.component";
import { ImageSwiperComponent } from "./component/projects/image-swiper/image-swiper.component";

@NgModule({
  declarations: [AboutComponent, ExperiencesComponent, ProjectsComponent, ProjectListComponent],
  imports: [CommonModule, SharedModule, RouterLink, NgOptimizedImage, TextButtonComponent, ImageSwiperComponent],
  exports: [],
})
export class HomeModule {}
