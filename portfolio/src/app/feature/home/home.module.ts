import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { RouterLink } from "@angular/router";
import { AboutComponent } from "./component/about/about.component";
import { ExperiencesComponent } from "./component/experiences/experiences.component";
import { ProjectsComponent } from "./component/projects/projects.component";
import { NavigationComponent } from "../../core/component/navigation/navigation.component";
import { ProjectListComponent } from "./component/projects/projectlist/project-list.component";
import { TextButtonComponent } from "../../shared/component/text-button/text-button.component";
import { ImageSwiperComponent } from "./component/projects/image-swiper/image-swiper.component";
import { register } from "swiper/element/bundle";

register();
@NgModule({
  declarations: [NavigationComponent, AboutComponent, ExperiencesComponent, ProjectsComponent, ProjectListComponent],
  imports: [CommonModule, SharedModule, RouterLink, NgOptimizedImage, TextButtonComponent, ImageSwiperComponent],
  exports: [NavigationComponent],
})
export class HomeModule {}
