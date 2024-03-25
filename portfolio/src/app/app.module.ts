import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./feature/home/home.module";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { TopNavigationComponent } from "./core/component/top-navigation/top-navigation.component";
import { SideNavigationComponent } from "./core/component/side-navigation/side-navigation.component";
import { LineNumberingDirective } from "./shared/directive/line-numbering.directive";
import { HeightChangeDirective } from "./shared/directive/height-change.directive";
import { FooterComponent } from "./core/component/footer/footer.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AppRoutingModule,
    TopNavigationComponent,
    SideNavigationComponent,
    LineNumberingDirective,
    HeightChangeDirective,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
