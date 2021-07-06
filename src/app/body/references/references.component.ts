import { Component, OnInit, Input } from "@angular/core";
import { References } from "../../shared/interfaces/ref.interface";

import { LibrairiesService } from "../../shared/services/librairies.service";

@Component({
  selector: "app-references",
  templateUrl: "./references.component.html",
  styleUrls: ["./references.component.scss"],
})
export class ReferencesComponent implements OnInit {
  ref: References[] = this.libs.Reference;

  quote0: boolean = false;
  quote1: boolean = false;
  quote2: boolean = false;
  quote3: boolean = false;
  quote4: boolean = false;
  quote5: boolean = false;
  quote6: boolean = false;
  quote7: boolean = false;
  constructor(private libs: LibrairiesService) {}

  ngOnInit(): void {}
}
