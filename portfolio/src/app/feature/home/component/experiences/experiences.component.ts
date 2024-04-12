import { Component, OnInit } from "@angular/core";
import { PortfolioService } from "../../../../core/service/portfolio.service";
import { Experiences } from "../../../../core/model/remote/experiences.model";

@Component({
  selector: "pw-experiences",
  templateUrl: "./experiences.component.html",
})
export class ExperiencesComponent implements OnInit {
  experiences: Experiences | undefined;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.experiences = this.portfolioService.getExperiences();
  }
}
