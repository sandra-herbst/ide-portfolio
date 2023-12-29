import { Injectable } from "@angular/core";
import { LogService } from "./log.service";
import { Portfolio } from "../model/portfolio.model";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { About } from "../model/about.model";
import { Experience } from "../model/experience.model";
import { Project } from "../model/project.model";

@Injectable()
export class PortfolioService {
  private dataUrl: string = "assets/data/portfolio.json";

  constructor(
    private logger: LogService,
    private http: HttpClient
  ) {}

  private getData(callback: (data: Portfolio) => void): Observable<any> {
    return this.http
      .get<Portfolio>(this.dataUrl)
      .pipe(map(data => callback(data)));
  }

  getPortfolioData(): Observable<Portfolio> {
    return this.http.get<Portfolio>(this.dataUrl);
  }

  getAbout(): Observable<About> {
    return this.getData(data => data.about);
  }

  getExperiences(): Observable<Experience[]> {
    return this.getData(data => data.experiences);
  }

  getProjects(): Observable<Project[]> {
    return this.getData(data => data.projects);
  }
}
