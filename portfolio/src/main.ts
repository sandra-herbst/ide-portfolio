import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights({ sampleRate: 0.5 });
inject();

if (!environment.debugMode) {
  for (const method in console) {
    if (typeof console[method as keyof Console] === "function") {
      console[method as keyof Console] = function (): void {};
    }
  }
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
