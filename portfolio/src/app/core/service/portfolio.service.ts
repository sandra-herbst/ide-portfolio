import { Injectable } from "@angular/core";
import { LogService } from "./log.service";
import { Portfolio } from "../model/remote/portfolio.model";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { About } from "../model/remote/about.model";
import { Experience } from "../model/remote/experience.model";
import { Project } from "../model/remote/project.model";
import { NavigationItem } from "../model/local/navigation-item.model";
import { NavigationType } from "../model/local/navigation-item.enum";
import { NavigationFileType } from "../model/local/navigation-file-type.enum";

@Injectable()
export class PortfolioService {
  private dataUrl: string = "assets/data/portfolio.json";
  private portfolioData: Portfolio | undefined;

  constructor(
    private logger: LogService,
    private http: HttpClient
  ) {
    this.http.get<Portfolio>(this.dataUrl).subscribe(data => {
      this.portfolioData = data;
    });
  }

  private getData(callback: (data: Portfolio) => void): Observable<any> {
    return this.http.get<Portfolio>(this.dataUrl).pipe(map(data => callback(data)));
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

  getProjectById(id: string): Observable<Project> {
    return this.getData(data =>
      data.projects.find(project => {
        return project.id == id;
      })
    );
  }

  getNavigationItemFromProject(project: Project): NavigationItem {
    return {
      label: project.title,
      route: `/projects/${project.id}`,
      navType: NavigationType.DYNAMIC,
      fileInfo: {
        fileType: NavigationFileType.JSON,
        fileName: "json_icon",
        fileExtension: "svg",
        altText: "Json file icon",
      },
    };
  }
}
