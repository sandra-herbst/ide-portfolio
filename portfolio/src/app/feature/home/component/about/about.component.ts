import { Component, OnInit } from "@angular/core";
import { PortfolioService } from "../../../../core/service/portfolio.service";
import { About } from "../../../../core/model/remote/about.model";

@Component({
  selector: "pw-about",
  templateUrl: "./about.component.html",
})
export class AboutComponent implements OnInit {
  about: About | undefined;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.about = this.portfolioService.getAbout();
  }
}
