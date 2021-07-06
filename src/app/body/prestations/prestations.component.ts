import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { References } from "../../shared/interfaces/ref.interface";
import { BodyService } from "../../shared/services/body.service";

@Component({
  selector: "app-prestations",
  templateUrl: "./prestations.component.html",
  styleUrls: ["./prestations.component.scss"],
})
export class PrestationsComponent implements OnInit {
  constructor(private change: BodyService) {}

  ngOnInit(): void {}

  direct(i: number): void {
    this.change.switch(i);
  }
}
