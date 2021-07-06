import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { LibrairiesService } from "../shared/services/librairies.service";
import { Link } from "../shared/interfaces/ref.interface";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  liens: Link[] = this.libs.liens;

  @Output() SelectBody: EventEmitter<number> = new EventEmitter();
  constructor(private libs: LibrairiesService) {}

  ngOnInit(): void {}
}
