import { Component, OnInit, Input } from "@angular/core";
import { References } from "../../../shared/interfaces/ref.interface";

import { LibrairiesService } from "../../../shared/services/librairies.service";

@Component({
  selector: "app-bandeau",
  templateUrl: "./bandeau.component.html",
  styleUrls: ["./bandeau.component.scss"],
})
export class BandeauComponent implements OnInit {
  ref: References[] = this.libs.Reference;

  quote0: boolean = false;

  quote2: boolean = false;

  quote3: boolean = false;

  quote4: boolean = false;

  constructor(private libs: LibrairiesService) {}

  ngOnInit(): void {}
}
