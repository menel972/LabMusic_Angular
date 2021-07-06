import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { References } from "../shared/interfaces/ref.interface";

import { BodyService } from "../shared/services/body.service";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"],
})
export class BodyComponent implements OnInit {
  condition: boolean[] = [];

  constructor(private change: BodyService) {}

  ngOnInit(): void {
    const s1 = this.change.variables.subscribe((x) => (this.condition = x));

    s1.unsubscribe;
  }
}
