import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./core/component/page-not-found/page-not-found.component";
import { AboutComponent } from "./feature/home/component/about/about.component";
import { ExperiencesComponent } from "./feature/home/component/experiences/experiences.component";
import { ProjectsComponent } from "./feature/home/component/projects/projects.component";

const routes: Routes = [
  { path: "", redirectTo: "/about", pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "experiences", component: ExperiencesComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
