import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { LibrairiesService } from "../shared/services/librairies.service";
import { BodyService } from "../shared/services/body.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  liens: string[] = this.libs.liens;

  @Output() SelectBody: EventEmitter<number> = new EventEmitter();
  constructor(private libs: LibrairiesService, private change: BodyService) {}

  ngOnInit(): void {}
  direct(i: number): void {
    this.change.switch(i);
  }
}
