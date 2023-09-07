import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePage } from "./component/page/home-page.component";
import { SharedModule } from "../../shared/shared.module";
import { RouterLink } from "@angular/router";
import { AboutComponent } from "./component/about/about.component";
import { ExperiencesComponent } from "./component/experiences/experiences.component";
import { ProjectsComponent } from "./component/projects/projects.component";
import { NavigationComponent } from "../../core/component/navigation/navigation.component";
import { ProjectListComponent } from "./component/projectlist/project-list.component";

@NgModule({
  declarations: [
    HomePage,
    NavigationComponent,
    AboutComponent,
    ExperiencesComponent,
    ProjectsComponent,
    ProjectListComponent,
  ],
  imports: [CommonModule, SharedModule, RouterLink],
  exports: [NavigationComponent],
})
export class HomeModule {}
