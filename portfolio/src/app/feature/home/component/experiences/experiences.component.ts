import { Component, OnInit } from "@angular/core";
import { PortfolioService } from "../../../../core/service/portfolio.service";
import { Experience } from "../../../../core/model/remote/experience.model";

@Component({
  selector: "pw-experiences",
  templateUrl: "./experiences.component.html",
})
export class ExperiencesComponent implements OnInit {
  experiences: Experience[] | undefined;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.experiences = this.portfolioService.getExperiences();
  }
}
