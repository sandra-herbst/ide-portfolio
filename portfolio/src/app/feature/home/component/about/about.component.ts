import { Component, OnInit } from "@angular/core";
import { PortfolioService } from "../../../../core/service/portfolio.service";
import { About } from "../../../../core/model/remote/about.model";

@Component({
  selector: "pw-about",
  templateUrl: "./about.component.html",
})
export class AboutComponent implements OnInit {
  about: About | undefined;
  hasCopied: boolean = false;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.about = this.portfolioService.getAbout();
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.about?.email!).then(() => {
      this.hasCopied = true;
      setTimeout(() => {
        this.hasCopied = false;
      }, 2000);
    });
  }
}
