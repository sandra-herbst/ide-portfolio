import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageNotFoundComponent } from "./component/page-not-found/page-not-found.component";
import { PortfolioService } from "./service/portfolio.service";
import { LogService } from "./service/log.service";

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule],
  providers: [LogService, PortfolioService],
})
export class CoreModule {
  /**
   * Prevents other Modules from importing the core module.
   */
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error(
        "You should only import the core module in the root module"
      );
    }
  }
}
