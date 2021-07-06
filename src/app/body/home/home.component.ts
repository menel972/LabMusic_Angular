import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { BodyService } from "../../shared/services/body.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private change: BodyService) {}

  ngOnInit(): void {}
  direct(i: number): void {
    this.change.switch(i);
  }
}
