import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { LibrairiesService } from "../shared/services/librairies.service";
import { BodyService } from "../shared/services/body.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
  liens: string[] = this.libs.liens;

  constructor(private libs: LibrairiesService, private change: BodyService) {}

  ngOnInit(): void {}

  direct(i: number): void {
    this.change.switch(i);
  }
}
