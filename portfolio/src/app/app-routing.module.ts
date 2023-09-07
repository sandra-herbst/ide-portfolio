import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "./feature/home/component/page/home-page.component";
import { PageNotFoundComponent } from "./core/component/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", component: HomePage },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
