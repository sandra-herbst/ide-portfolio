import { Injectable } from "@angular/core";
import { LogService } from "./log.service";
import { Portfolio } from "../model/remote/portfolio.model";
import { HttpClient } from "@angular/common/http";
import { map, Observable, tap } from "rxjs";
import { About } from "../model/remote/about.model";
import { Experience } from "../model/remote/experience.model";
import { Project } from "../model/remote/project.model";
import { NavigationItem } from "../model/local/navigation-item.model";
import { NavigationType } from "../model/local/navigation-item.enum";
import { NavigationFileType } from "../model/local/navigation-file-type.enum";

@Injectable({ providedIn: "root" })
export class PortfolioService {
  private dataUrl: string = "assets/data/portfolio.json";
  private portfolioData: Portfolio | undefined;

  constructor(
    private logger: LogService,
    private http: HttpClient
  ) {}

  loadData(): Observable<Portfolio> {
    return this.http.get<Portfolio>(this.dataUrl).pipe(
      tap(data => {
        this.portfolioData = data;
        console.log(this.portfolioData);
      })
    );
  }

  getAbout(): About {
    return <About>this.portfolioData?.about;
  }

  getExperiences(): Experience[] {
    return <Experience[]>this.portfolioData?.experiences;
  }

  getProjects(): Project[] {
    return <Project[]>this.portfolioData?.projects;
  }

  getProjectById(id: string): Project {
    return <Project>this.portfolioData?.projects.find(project => {
      return project.id == id;
    });
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
