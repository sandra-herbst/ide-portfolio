import { Component, OnInit } from "@angular/core";
import { PortfolioService } from "../../../../core/service/portfolio.service";
import { Experience } from "../../../../core/model/remote/experience.model";

@Component({
  selector: "pw-experiences",
  templateUrl: "./experiences.component.html",
  styleUrls: ["./experiences.component.css"],
})
export class ExperiencesComponent implements OnInit {
  experiences: Experience[] | undefined;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getExperiences().subscribe(data => {
      this.experiences = data;
    });
  }
}
